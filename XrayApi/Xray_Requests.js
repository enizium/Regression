let bRequest = require("./base_request");
const axios = require('axios');
const projectId = process.env.JIRA_TEST_PLAN
let xrayGqlUrl = process.env.XRAY_URL;
const config = {
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
};
var cache = require('memory-cache');
module.exports.xrayAuthApi = async () => {
    console.log(`Executing Xray Authentication`)
    return axios({
        url: 'http://xray.cloud.getxray.app/api/v1/authenticate',
        method: 'post',
        data: {
            client_id: process.env.XRAY_ID,
            client_secret: process.env.XRAY_SECRET,
        },
    }).then((result) => {
        return result.data
    })
    .catch(function (error) {
        console.log(`${error}. \n Check that you have XRAY_ID and XRAY_SECRET populated in default.properties file :)`);
      });   
}
module.exports.getTests = async (testId) => {
    console.debug(`Executing getTests`)
    var body = {
        query: `query {
            getTests(jql: "project = '${projectId}' AND issuekey in (${testId})", limit: 100) {
                results {
                    issueId
                    projectId
                }
            }}`,
        variables: ``
    };
    config.headers.Authorization = cache.get('xrayAuthToken');
    return await bRequest.postRequest(xrayGqlUrl, body, config);
}

module.exports.getTestExecutions = async (executionJiraId) => {
    console.debug(`Executing getTestExecutions`)
    var body = {
        query: `query{
            
                getTestExecutions(jql:"project = '${projectId}' AND issuekey in (${executionJiraId})", limit: 100) {
                    total
                    start
                    limit        
                    results {
                        issueId
                    
                    }
                }
            
        }`,
        variables: ``
    };
    config.headers.Authorization = cache.get('xrayAuthToken');
    return await bRequest.postRequest(xrayGqlUrl, body, config);
}

module.exports.getTestRuns = async (ids, testExecIssueIds) => {
    console.debug(`Executing getTestRuns`)
    var body = {
        query: `query {
            getTestRuns( testIssueIds: [${ids}], testExecIssueIds: "${testExecIssueIds}" limit: 100 ) {
              results {
                id
                test {
                    issueId
                    jira(fields: ["key"])
                }
                      }          
                }
              }`,
        variables: ``
    };
    config.headers.Authorization = cache.get('xrayAuthToken');
    return await bRequest.postRequest(xrayGqlUrl, body, config);
}
module.exports.getTestIdsFromTestPlan = async (testPlanId, start) => {
    console.debug(`Executing getTestPlans`)
    var body = {
        query: `query {
            getTestPlans(jql: "project = '${projectId}' AND issuekey in (${testPlanId})", limit: 10) {
                total
                start
                limit
                results {
                    issueId
                    tests(limit: 100,start:${start}) {
                        total
                        start
                        limit
                        results {
                            issueId
                            jira(fields: ["key","summary"])
                            
                        }
                    }
                    jira(fields: ["key","summary"])
                }
            }
        }`,
        variables: ``
    };
    config.headers.Authorization = cache.get('xrayAuthToken');
    let ii ;
    try {
       ii= await bRequest.postRequest(xrayGqlUrl, body, config);
    } catch (error) {
        
    }
    return ii;
}

module.exports.updateTestRunStatus = async (id, status) => {
    console.debug(`Executing updateTestRunStatus`)
    var body = {
        query: `mutation {updateTestRunStatus( id: "${id}", status: "${status}")}`,
        variables: ``
    };
    config.headers.Authorization = cache.get('xrayAuthToken');
    return await bRequest.postRequest(xrayGqlUrl, body, config);
}

module.exports.updateTestRunInfo = async (testGuid, comment, executedById, startedOn, finishedOn) => {
    console.debug(`Executing updateTestRun`)
    var body = {
        query: `mutation {updateTestRun( id: "${testGuid}", comment: "${comment}", startedOn: "${startedOn}", finishedOn: "${finishedOn}", executedById: "${executedById}") {warnings}}`,
        variables: ``
    };
    config.headers.Authorization = cache.get('xrayAuthToken');
    console.log(body.toString())
    return await bRequest.postRequest(xrayGqlUrl, body, config);
}

module.exports.createTestExecution = async (testPlanInfo) => {
    console.debug(`Executing createTestExecution`)
    const ids = []
    let envs = process.env.environment.toUpperCase();
    for (let i = 0; i < testPlanInfo.testCaseInfo.length; i++) {
        ids.push('"' + testPlanInfo.testCaseInfo[i].id + '"')
    }
    let date = new Date().toISOString().replace(/[.]\d+/, '');
    var body = {
        query: `mutation {
            createTestExecution(
                testIssueIds: [${ids}]
                testEnvironments: ["${envs}"]
                jira: {
                    fields: { summary: "Test Execution for: ${testPlanInfo.jiraSummary}, [Automation ${date}]",description:"Test Execution created from Automation run created Date: ${date} " project: {key: "${process.env.JIRA_PROJ_ID}"}  }
                }
            ) {
                testExecution {
                    issueId
                    jira(fields: ["key"])
                }
                warnings
                createdTestEnvironments
            }
        }`,
        variables: ``
    };
    config.headers.Authorization = cache.get('xrayAuthToken');
    return await bRequest.postRequest(xrayGqlUrl, body, config);
}

module.exports.addTestExecutionsToTestPlan = async (issueId, testExecIssueIds) => {
    console.debug(`Executing addTestExecutionsToTestPlan`)
    var body = {
        query: `mutation {
            addTestExecutionsToTestPlan(
                issueId: "${issueId}",
                testExecIssueIds: ["${testExecIssueIds}"]
            ) {
                addedTestExecutions
                warning
            }
        }`,
        variables: ``
    };
    config.headers.Authorization = cache.get('xrayAuthToken');
    return await bRequest.postRequest(xrayGqlUrl, body, config);
}