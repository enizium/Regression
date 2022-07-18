const XrayReq = require('./Xray_Requests');
var testPlanIdInfo = null;
var cache = require('memory-cache');
var exId = null;

module.exports.xrayTestCaseUpdates = async (tags, context, ScenarioErrors) => {
    var testStatus = context.currentScenario.isFailed;
    await XrayAuth()
    let executionId = await checkTestExecutionId();
    for (const tag of tags) {
        let startedOn = new Date().toISOString().replace(/[.]\d+/, '');
        console.log(`Update test case id:${tag} with status: ${testStatus ? "FAILED" : "PASSED"}`)
        var testRunInfo = await GetTestIdFromTestRuns(tag, executionId);
        await UpdateTests(testRunInfo[0].id, testStatus, startedOn, context, ScenarioErrors);
    }
};

async function XrayAuth() {

    if (!cache.get('xrayAuthToken')) {
        let auth = await XrayReq.xrayAuthApi();
        cache.put('xrayAuthToken', `Bearer ${auth}`);
    }
    console.log(`Using cached Token for Xray`)
}

async function getTestCaseInfo() {
    if (testPlanIdInfo == null) {
        await GetTestsFromTestPlanId();
    }
    const ids = []
    for (let i = 0; i < testPlanIdInfo.testCaseInfo.length; i++) {
        ids.push('"' + testPlanIdInfo.testCaseInfo[i].id + '"')
    }
    let chunked = []
    let size = 100;
    for (let i = 0; i < ids.length; i += size) {
        chunked.push(ids.slice(i, i + size))
    }
    var testRunsName = []
    for (let index = 0; index < chunked.length; ++index) {
        const element = chunked[index];
        var t = await XrayReq.getTestRuns(element, exId);
        var testGuids = t.data.data.getTestRuns.results;
        for (let i = 0; i < testGuids.length; i++) {
            var testRunName = {};
            testRunName.id = testGuids[i].id;
            testRunName.issueId = testGuids[i].test.issueId;
            testRunName.jiraId = testGuids[i].test.jira.key;
            testRunsName.push(testRunName)
        }

    }
    return testRunsName;
}

async function createNewTestExecution() {
    await XrayAuth();
    let testPlanInfo = await GetTestsFromTestPlanId();
    let request = await XrayReq.createTestExecution(testPlanInfo);
    let executionId = request.data.data.createTestExecution.testExecution.issueId;
    console.log(`No execution passed in - so creating a new test execution : ${request.data.data.createTestExecution.testExecution.jira.key}`)
    console.debug(`Linking test execution:${request.data.data.createTestExecution.testExecution.jira.key} with Test plan ${process.env.JIRA_TEST_PLAN_ID}`)
    await XrayReq.addTestExecutionsToTestPlan(testPlanInfo.tastPlanId, executionId);
    process.env.JIRA_TEST_EXECUTION_ID = request.data.data.createTestExecution.testExecution.jira.key;
    console.debug(`Setting execution id to: ${executionId}`);
    exId = executionId;
    return exId;
}
module.exports.checkTestExecutionId = async () => {
    await checkTestExecutionId();
};

async function checkTestExecutionId() {
    if (typeof process.env.JIRA_TEST_EXECUTION_ID == 'undefined') {
        await createNewTestExecution();
    }
    if (exId == null) {
        if (process.env.JIRA_TEST_EXECUTION_ID.includes(process.env.JIRA_PROJ_ID)) {
            await XrayAuth();
            console.log(`Using passed in Execution JIRA Id: ${process.env.JIRA_TEST_EXECUTION_ID}`);
            let response = await (await XrayReq.getTestExecutions(process.env.JIRA_TEST_EXECUTION_ID));
            let executionId = response.data.data.getTestExecutions.results[0].issueId;
            console.debug(`setting execution id to  ${executionId}`);
            exId = executionId;
        } else {
            console.log(`Test execution Id doesnt contain correct Proj - so creating a new one`);
            exId = await createNewTestExecution();
        }
    }
    return exId;
}

async function UpdateTests(executionGuid, testStatus, startedOn, context, ScenarioErros) {
    await XrayReq.updateTestRunStatus(executionGuid, testStatus ? "FAILED" : "PASSED");
    let fileNameLength = context.currentSpec.fileName.indexOf("travel-release-regression-automation");
    let comment = `Test ran via Gauge Automation for test name: _${context.currentScenario.name}_.`
    if (ScenarioErros) {
        var failedErrors = [];
        if (ScenarioErros.find(o => o.ScenarioName === context.currentScenario.name)) {
            for (let error of ScenarioErros) {
                failedErrors.push(error);
            }
            comment = `Scenario Name: ${context.currentScenario.name}.`;
            failedErrors.forEach(item => comment += `Failed Step: ${item.StepText}. Error: ${item.StepError}. Spec File: ${item.SpecFile}`);
            comment = `TEST FAILURE: ${comment}`
            comment = comment.replace(/\"/g, `\'`);// needed for JIRA - " throw error in API
        }
    }
    let executedBy = process.env.JIRA_USER_ID
    let finishedOn = new Date().toISOString().replace(/[.]\d+/, '');
    await XrayReq.updateTestRunInfo(executionGuid, comment, executedBy, startedOn, finishedOn);
}

async function GetTestsFromTestPlanId() {
    var testCases = []
    let results = await XrayReq.getTestIdsFromTestPlan(process.env.JIRA_TEST_PLAN_ID, start = 0);
    let iterator1 = results.data.data.getTestPlans.results[0].tests.results;
    for (let i = 0; i < iterator1.length; i++) {
        var testCaseName = {};
        testCaseName.id = iterator1[i].issueId;
        testCaseName.jiraId = iterator1[i].jira.key;
        testCases.push(testCaseName)
    }
    for (let index = 1; index < Math.round(results.data.data.getTestPlans.results[0].tests.total / 100); index++) {
        let startIndex = index * 100;
        let results = await XrayReq.getTestIdsFromTestPlan(process.env.JIRA_TEST_PLAN_ID, start = startIndex);
        let iterator2 = results.data.data.getTestPlans.results[0].tests.results;
        for (let i = 0; i < iterator2.length; i++) {
            var testCaseName = {};
            testCaseName.id = iterator2[i].issueId;
            testCaseName.jiraId = iterator2[i].jira.key;
            testCases.push(testCaseName)
        }
    }
    testPlanInfo = {
        testCaseInfo: testCases,
        jiraSummary: results.data.data.getTestPlans.results[0].jira.summary,
        tastPlanId: results.data.data.getTestPlans.results[0].issueId
    }
    testPlanIdInfo = testPlanInfo;
    return testPlanInfo;
}

async function GetTestIdFromTestRuns(tag, executionId) {
    if (!cache.get('testInfo')) {
        var testInfo = await getTestCaseInfo(executionId);
        cache.put('testInfo', testInfo);
    }
    var result = cache.get('testInfo').filter(x => x.jiraId === tag);
    return result;
}
