"use strict";
const commonHelper = require("../helpers/helper.js");
const api_common_utils = require("../common/api_common_utils.js");
const assert = require("assert");

exports.pushNotificationRequest = async () => {
    let pushNotification = commonHelper.pushNotificationData();
    let userKey = gauge.dataStore.specStore.get('userKey');
	let userDetails = commonHelper.userDetails(userKey);
	let customerID = userDetails["customerId"];
	let PNSHeaders =  await api_common_utils.getPNSHeaders(process.env.siteID, customerID);
	let pushNotificationStatus = await api_common_utils.restGetRequest(`${pushNotification.push.URL}${customerID}`, PNSHeaders);
	let pushNotificationResponse = pushNotificationStatus.data;
    gauge.dataStore.specStore.put("pushNotificationResponse", pushNotificationResponse);
	
}
exports.pushNotificationValidation = async () => {
    let notification = gauge.dataStore.specStore.get("pushNotificationResponse");
    let pushNotification = commonHelper.pushNotificationData();
    for (var i = 0; i <= 2; i++) {
	    let messageTitle = notification.events[i].messages[0].title
	    let messageText = notification.events[i].messages[0].text
	    if (i === 0) {
		   assert.strictEqual(messageTitle, pushNotification.push.title1, "PNS title is shown incorrectly in the response");
		   assert.strictEqual(messageText, pushNotification.push.text1, "PNS text is shown incorrectly in the response");
	    }
	}
}

exports.mobileUserPushNotificationRequest = async () => {
	let pushNotification = commonHelper.pushNotificationData();
	let userKey = gauge.dataStore.specStore.get('userKey');
    let userDetails = commonHelper.userDetails(userKey);
    let customerID = userDetails["customerId"];
    let PNSHeaders= await api_common_utils.getPNSHeaders(process.env.siteID, customerID);
    let regDevicePayload = await api_common_utils.registerDevicePayload(process.env.siteID, customerID);
    let pushNotificationStatus = await api_common_utils.restPutRequest(`${pushNotification.mobileUser.URL}`, PNSHeaders, regDevicePayload);
	console.log(pushNotificationStatus.data)
}