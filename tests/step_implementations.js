/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    setConfig,
    deleteCookies
} = require('taiko');
const assert = require("assert");
const headlessChrome = process.env.headless_chrome.toLowerCase() === 'true';
let xray = require("../XrayApi/xray_utils");
var ScenarioErrors = [];


beforeScenario(async (context) => {

    if (process.env.host === "local") {
        process.env.api_test_run == 'false' && (await openBrowser({ headless: headlessChrome, ignoreCertificateErrors: true, args: ['--no-sandbox', '--start-fullscreen', '--disable-web-security', '--disable-RendererCodeIntegrity'] }),
        await setConfig({navigationTimeout : 6000000}),
        await deleteCookies())
    } else if (process.env.host === "docker") {
        await openBrowser({ headless_chrome: true, ignoreCertificateErrors: true, args: ['--disable-setuid-sandbox','--no-sandbox','--start-fullscreen', '--disable-web-security'] })
        await deleteCookies();
    }

 var tags = context.currentScenario.tags.filter(function (requiredTag) {
        return requiredTag.includes(process.env.JIRA_PROJ_ID) || requiredTag.includes(process.env.JIRA_PROJ_ID2)
    })
    console.log("tags:",tags)
    if (tags.length && process.env.USE_XRAY.toLowerCase() == 'true') {

        var tags = context.currentScenario.tags.filter(function (requiredTag) {
            return requiredTag.includes(process.env.JIRA_PROJ_ID) || requiredTag.includes(process.env.JIRA_PROJ_ID2)
        })
        try {
            typeof process.env.JIRA_TEST_PLAN_ID == 'undefined' | !process.env.JIRA_TEST_PLAN_ID.includes(process.env.JIRA_PROJ_ID);
        } catch (error) {
            throw `USE_XRAY is set to 'true' but No test plan Id was passed in - please add to the CI or 'default.properties' and try again`;
        }
        await xray.checkTestExecutionId();
    }

}, { tags: [] 
    
});
beforeStep(async (context) => {
    process.env.api_test_run == 'false' && await gauge.screenshot();
    console.log(" ==> ",context.currentStep.step.actualStepText); 
})
afterStep(async (context) => {
    process.env.api_test_run == 'false' && await gauge.screenshot();
    if (context.currentStep.isFailed) {
        var Scenario = {};
        Scenario.ScenarioName = context.currentScenario.name;
        Scenario.StepText = context.currentStep.step.actualStepText;
        Scenario.StepError = context.currentStep.errorMessage;
        Scenario.SpecFile = context.currentSpec.fileName;
        Scenario.StepStackTrace = context.currentStep.stackTrace;
        ScenarioErrors.push(Scenario)
    };
}, { tags: []
})

afterScenario(async (context) => {
    process.env.api_test_run == 'false' && (await gauge.message(`SessionId : `+gauge.dataStore.specStore.get('sessionId')),
    await closeBrowser())
    var tags = context.currentScenario.tags.filter(function (requiredTag) {
        return requiredTag.includes(process.env.JIRA_PROJ_ID) || requiredTag.includes(process.env.JIRA_PROJ_ID2)
    })
    if (tags.length && process.env.USE_XRAY.toLowerCase() == 'true') {
        
        await xray.xrayTestCaseUpdates(tags, context, ScenarioErrors);
    }
}, { tags: [] 
})

beforeSpec(async () => {
    gauge.message(`Environment: ${process.env.environment}, GDS: ${process.env.gdsName}, SiteName: ${process.env.siteName}`);
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);
    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};
