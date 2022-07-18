"use strict";

const axios = require('axios');
const commonHelper = require("../helpers/helper.js");

step("Cancel the <userKey> Booking using API", async (userKey) => {
    let userDetails = commonHelper.userDetails(userKey);
    let customerId = userDetails["customerId"];
    let serviceNode = process.env.api_test_run === 'false' ? gauge.dataStore.specStore.get('sessionId').split('.')[1] : gauge.dataStore.specStore.get('sessionId');

    const config = {
        method: 'put',
        url: commonHelper.getCancelEndPoint(serviceNode, gauge.dataStore.scenarioStore.get('processID')),
        headers: {
            'Content-Type': 'application/vnd.reardencommerce.travel.v2.0+json',
            "Accept": 'application/vnd.reardencommerce.travel.v2.0+json',
            'X-Rearden-SecCtx': JSON.stringify({'auth':{'id':parseInt(customerId),'type':'e','ext':{'s':parseInt(process.env.siteID),'p':2}}})
        },
        data: {
            "acknowledged": true
        }
    }
    let response;
    try {
        response = await axios(config);
        if (response.statusText !== 'OK' && response.status !== 200) {
            console.log(`<B><FONT COLOR=\\\"red\\\">Cancellation using API failed for processID: ${gauge.dataStore.scenarioStore.get('processID')}, Please try manually</FONT></B>`);
            gauge.message(`<B><FONT COLOR=\\\"red\\\">Cancellation using API failed for processID: ${gauge.dataStore.scenarioStore.get('processID')}, Please try manually</FONT></B>`)
        } else {
            console.log('Successfully cancelled reservation using API');
            gauge.message('Successfully cancelled reservation using API')
        }
    } catch(e) {
        console.log(e);
        console.log(`<B><FONT COLOR=\\\"red\\\">Cancellation using API failed for processID: ${gauge.dataStore.scenarioStore.get('processID')}, Please try manually</FONT></B>`);
        gauge.message(`<B><FONT COLOR=\\\"red\\\">Cancellation using API failed for processID: ${gauge.dataStore.scenarioStore.get('processID')}, Please try manually</FONT></B>`);
    }
 });