
"use strict";

const api_common_utils = require("../common/api_common_utils.js");
const commonHelper = require("../helpers/helper.js");
const apiActions = require("../api_actions/push_notification_actions.js")
const assert = require("assert");

const PNS_MESSAGE_CONSTANTS = {
    title1: "Alert Test!",
    text1: "CoronaVirus Testing"
    
}
step("Get the push notification service messages and verify the notification", async function() {
	let userKey = gauge.dataStore.specStore.get('userKey');
	let userDetails = commonHelper.userDetails(userKey);
	let customerID = userDetails["customerId"];
	let PNSHeaders =  await api_common_utils.getPNSHeaders(process.env.siteID, customerID);
	let pushNotificationStatus = await api_common_utils.restGetRequest(`http://scqalnot01.scqa.rden.us:8080/rest/event/messages/${customerID}`, PNSHeaders);
	let pushNotificationStatusData = pushNotificationStatus.data;
	console.log(pushNotificationStatus.data)
	for (var i = 0; i <= 2; i++) {
	    let messageTitle = pushNotificationStatusData.events[i].messages[0].title
	    let messageText = pushNotificationStatusData.events[i].messages[0].text
	    if (i === 0) {
		   assert.equal(messageTitle, PNS_MESSAGE_CONSTANTS.title1, "PNS title is shown incorrectly in the response");
		   assert.equal(messageText, PNS_MESSAGE_CONSTANTS.text1, "PNS text is shown incorrectly in the response");
	    }
	}
});

step("Verify the register mobile devices using push notification service", async function() {
	let userKey = gauge.dataStore.specStore.get('userKey');
    let userDetails = commonHelper.userDetails(userKey);
    let customerID = userDetails["customerId"];
    let PNSHeaders= await api_common_utils.getPNSHeaders(process.env.siteID, customerID);
    let regDevicePayload = await api_common_utils.registerDevicePayload(process.env.siteID, customerID);
    let pushNotificationStatus = await api_common_utils.restPutRequest(`http://scqalnot01.scqa.rden.us:8080/rest/event/register`, PNSHeaders, regDevicePayload);
	console.log(pushNotificationStatus.data)
	
});
step("Verify the unregister mobile devices using push notification service", async function() {
	let userKey = gauge.dataStore.specStore.get('userKey');
	let userDetails = commonHelper.userDetails(userKey);
	let customerID = userDetails["customerId"];
	let PNSHeaders =  await api_common_utils.getPNSHeaders(process.env.siteID, customerID);
	let pushNotificationStatus = await api_common_utils.restPutRequest(`http://scqalnot01.scqa.rden.us:8080/rest/event/unregister/448/32265`, PNSHeaders);
	console.log(pushNotificationStatus.data)
});

step("Verify the hybrid-andriod mobile devices using push notification service", async function() {
	let userKey = gauge.dataStore.specStore.get('userKey');
	let userDetails = commonHelper.userDetails(userKey);
	let customerID = userDetails["customerId"];
	let PNSHeaders =  await api_common_utils.getPNSHeaders(process.env.siteID, customerID);
	let hybridandroidPayload = await api_common_utils.hybridAndroidPayload();
	let pushNotificationStatus = await api_common_utils.restPutRequest(`http://scqalnot01.scqa.rden.us:8080/rest/event/toggles/HYBRID_ANDROID`, PNSHeaders, hybridandroidPayload);
	console.log(pushNotificationStatus.data)
});
step("update the hybrid mobile devices using push notification service", async function() {
	let userKey = gauge.dataStore.specStore.get('userKey');
	let userDetails = commonHelper.userDetails(userKey);
	let customerID = userDetails["customerId"];
	let PNSHeaders =  await api_common_utils.getPNSHeaders(process.env.siteID, customerID);
	let pushNotificationStatus = await api_common_utils.restPostRequest(`http://scqalnot01.scqa.rden.us:8080/rest/event/fb2f91a3-a6a2-4fd9-bafb-f4a0fac79efa/HYBRID_ANDROID`, PNSHeaders);
	console.log(pushNotificationStatus.data)
	
});

step("push messages to mobile using push notification service(PNS)", async function() {
	let userKey = gauge.dataStore.specStore.get('userKey');
    let userDetails = commonHelper.userDetails(userKey);
    let customerID = userDetails["customerId"];
    let PNSHeaders =  await api_common_utils.getPNSHeaders(process.env.siteID, customerID);
    let pushmessagesPayload = await api_common_utils.pushMessagesPayload(customerID);
    let pushNotificationStatus = await api_common_utils.restPostRequest(`http://scqalnot01.scqa.rden.us:8080/rest/event`, PNSHeaders, pushmessagesPayload);
    console.log(pushNotificationStatus.data)
});
step("Get the push notification service messages and verify the notification test", async function() {
	await apiActions.pushNotificationRequest();
	await apiActions.pushNotificationValidation();
});
step("Verify the register mobile devices using push notification service test", async function() {
	await apiActions.mobileUserPushNotificationRequest();
});