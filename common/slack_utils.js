"use strict";

const axios = require('axios');
const path = require('path');
const url = require('url');

module.exports.makePostMessageToSlackChannel = async (channelName, siteName, hostName,gdsName) => {
    let slackJsonBody = await this.buildSlackResultsBody(channelName, siteName, hostName,gdsName);
    console.log(slackJsonBody);
    const config = {
        method: 'post',
        url: 'https://slack.com/api/chat.postMessage',
        headers: { 'Authorization': 'Bearer xoxp-3770006348-713151415511-718068308130-14b8c04067bd02c2cb72f3febca1b1f6', 'Content-Type': 'application/json' },
        data: slackJsonBody
    }
    let response = await axios(config)
    console.log(`Status code: ${response.status}`);
    console.log(`Status text: ${response.statusText}`);
}

module.exports.buildSlackResultsBody = async (channelName, siteName, hostName,gdsName) => {
    let jsonReport = require("../reports/json-report/result.json");
    let fieldsArray;
    let environment = jsonReport['environment'].replace(/\b\w/g, l => l.toUpperCase());
    let CIBuildUrl;
    let colourStatus;
    let tags = jsonReport['tags'].replace(",",  " ");
    let successRate;
    let footerText;
    let desiredChannel = channelName;
    let gdsname = gdsName;
    let executiontime = jsonReport['executionTime'];
    executiontime = (("00" + (Math.floor(executiontime/1000/60/60))).slice(-2)) + ':' + (("00" + (Math. floor((executiontime/1000/60) << 0))).slice(-2)) + ':' + (("00" + (Math. floor((executiontime/1000) % 60))).slice(-2))

    if (hostName.startsWith('gaiko'))
    {
        CIBuildUrl = `https://${hostName}/job/${jsonReport['projectName']}/ws/reports/html-report/index.html`;
    } 
    else 
    {
        CIBuildUrl = `http://${hostName}:8080/job/${jsonReport['projectName']}/ws/reports/html-report/index.html`;
    }

    if (!hostName) {
        CIBuildUrl = url.pathToFileURL(path.join(__dirname, '../reports/html-report/index.html'));
    }

    if (tags.includes('Sanity') || tags === 'DashboardSanity'  || tags.includes('UserScenarios') || tags === 'DashboardRegression' || tags === 'EHISpec' || tags === 'DevLocal' || tags === 'CarServiceSanity'){
        successRate = (jsonReport['passedScenariosCount']/(jsonReport['failedScenariosCount']+jsonReport['passedScenariosCount'])*100).toFixed(2);
    } else {
        successRate = jsonReport['successRate'];
    }

    if (jsonReport['successRate'] === 100) {
        colourStatus = '#008000';
        footerText = `${environment} ${tags} looks good`;
    } else if (jsonReport['successRate'] >= 60 && jsonReport['successRate'] < 100) {
        colourStatus = '#FFFF00';
        footerText = `${environment} ${tags} ${jsonReport['failedScenariosCount']} case/cases got failed`;
    } else {
        colourStatus = '#FF0000';
        footerText = `${environment} ${tags} ${jsonReport['failedScenariosCount']} cases got failed`;
    }

    let clusterName;
    if (siteName === 'gaikotravela') {
        clusterName =  'CLUA';
    } else if (siteName === 'gaikotravelb') {
        clusterName =  'CLUB';
    } else if (siteName === 'gaikotravelc') {
        clusterName =  'CLUC';
    } else if (siteName === 'gaikotraveld') {
        clusterName =  'CLUD';
    }
    
    let titleName;
    if (environment === 'Prod') {
        if (jsonReport['successRate'] === 100) {
            desiredChannel = channelName;
        } else if (jsonReport['successRate'] < 100 && channelName !== 'qa-team'){
            desiredChannel = 'qa-automation-travel';
        }
        titleName = `${clusterName} ${environment} ${tags} Automation Test Results HTML Report`;
    } else {
        titleName =  `${environment} ${tags} Automation Test Results HTML Report`;
    }

    fieldsArray = [];
    fieldsArray.push(`{"title": "Test Environment", "value": "${environment}", "short": true}`);
    fieldsArray.push(`{"title": "GDS", "value": "${gdsname}", "short": true}`);
    fieldsArray.push(`{"title": "Executed Browser", "value": "Chromium", "short": true}`);
    fieldsArray.push(`{"title": "Execution Time", "value": "${executiontime} (HH:MM:SS)" , "short": true}`);
    fieldsArray.push(`{"title": "Site Name", "value": "${siteName}", "short": true}`);
    fieldsArray.push(`{"title": "Success Rate", "value": "${successRate}%", "short": true}`);
    if (tags.includes('Sanity') || tags === 'DashboardSanity'|| tags === 'EHISpec' || tags === 'DevLocal' || tags === 'CarServiceSanity') {
        jsonReport['specResults'].forEach(function (specJsonObject) {
            specJsonObject['scenarios'].forEach(function (scenarioJsonObject) {
                let scenarioTitle = scenarioJsonObject['scenarioHeading'];
                let scenarioExecutionStatus = scenarioJsonObject['executionStatus'].replace(/\b\w/g, l => l.toUpperCase());
                let fieldStringObject = `{"title": "${scenarioTitle}", "value": "${scenarioExecutionStatus}", "short": true}`;
                fieldsArray.push(fieldStringObject);
            })
        });
    } else if (tags === 'Regression' || tags === 'UserScenarios' || tags.includes('UserScenarios') || tags === 'DashboardRegression') {
        fieldsArray.push(`{"title": "Total Scenarios Executed", "value": "${jsonReport['passedSpecsCount'] + jsonReport['failedSpecsCount']}", "short": true}`);
        fieldsArray.push(`{"title": "Total TestCases Executed", "value": "${jsonReport['passedScenariosCount'] + jsonReport['failedScenariosCount']}", "short": true}`);
        fieldsArray.push(`{"title": "Passed Scenarios", "value": "${jsonReport['passedSpecsCount']}", "short": true}`);
        fieldsArray.push(`{"title": "Failed Scenarios", "value": "${jsonReport['failedSpecsCount']}", "short": true}`);
        fieldsArray.push(`{"title": "Passed TestCases", "value": "${jsonReport['passedScenariosCount']}", "short": true}`);
        fieldsArray.push(`{"title": "Failed TestCases", "value": "${jsonReport['failedScenariosCount']}", "short": true}`);
        fieldsArray.push(`{"title": "Test Cases Success Rate", "value": "${(jsonReport['passedScenariosCount']/(jsonReport['failedScenariosCount']+jsonReport['passedScenariosCount'])*100).toFixed(2)}%", "short": true}`);
    } else if (tags === 'DashboardPRHUpload') {
        const entryCountItemNumber = 5;
        const siteNameItemNumber = 3;
        let setName = jsonReport['specResults'][0].scenarios[0].items[entryCountItemNumber].result.messages[0].split("\"")[1];
        let siteNameforPRHUpload = jsonReport['specResults'][0].scenarios[0].items[siteNameItemNumber].result.messages[0].split("\"")[1];
        let succesfulEntries = jsonReport['specResults'][0].scenarios[0].items[entryCountItemNumber].result.messages[1].match(/\d+/g);
        let failedEntries = jsonReport['specResults'][0].scenarios[0].items[entryCountItemNumber].result.messages[2].match(/\d+/g);
        let totalEntries = jsonReport['specResults'][0].scenarios[0].items[entryCountItemNumber].result.messages[3].match(/\d+/g);

        fieldsArray.push(`{"title": "SiteName Using for Private Rate Upload ", "value": "${siteNameforPRHUpload}", "short": true}`);
        fieldsArray.push(`{"title": "Newly Added Private Rate Set Name ", "value": "${setName}", "short": true}`);
        fieldsArray.push(`{"title": "Total Entries ", "value": "${totalEntries}", "short": true}`);
        fieldsArray.push(`{"title": "Succesful Entries ", "value": "${succesfulEntries}", "short": true}`);
        fieldsArray.push(`{"title": "Failed Entries", "value": "${failedEntries}", "short": true}`);
        
    }
    return `{"channel": "${desiredChannel}", "attachments": [{"fallback": "Environment Check for ${environment}",  "color": "${colourStatus}", "title": "${titleName}", "title_link": "${CIBuildUrl}", "text": "${environment} ${tags} Automation Test Results", "fields": [${fieldsArray}], "footer": "${footerText}"}]}`;
}
