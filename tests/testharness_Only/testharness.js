"use strict";
const { assert } = require("chai");
const { goto, click, $, waitFor, write, scrollTo, hover, clear, focus, evaluate,textBox } = require("taiko");
const helper = require("../helpers/helper.js");
const testharnessAction = require('./testharness_actions.js')
const ssotestharness = require ('../Locators/testharness_po.js');
const tripPlanner_locator = require('../Locators/tripPlanner_po.js');
const purchasePage = require("../Locators/purchase_po.js");


step("Goto SSO testharness Site Url", async function()  {
    await goto(helper.testharnesssiteUrl());
    
});

step("Fill all the required data in cevent meeting scenario for <serverConfiguration>", async (ssoTestharness) => {
    await testharnessAction.getCventMeetingDetails(ssoTestharness);
});

step("Validate Login page & enter password for Existing <userKey> user", async (userKey) => {

    let userText = await evaluate($(`${ssotestharness.userNameField()}`),(elem) => { return elem.getAttribute('value') });
    let userNameFields = helper.serverConfigurationDetails("serverConfiguration");
    console.log(userText);
    assert.strictEqual(userText, userNameFields['userName'], " User Name Validated...")
   
    let userDetails = helper.userDetails(userKey);
    await testharnessAction.enterPassword(userDetails["passWord"])
    gauge.dataStore.specStore.put('userDetails', userDetails);
    await testharnessAction.clickSignIn();
});

step("validate trip planner page on user creation", async function() {
    await testharnessAction.validateTripPlanner();
});

step("Navigate to tripPlanner Page and select <arg0>", async function (searchType) {
    let searchTypeTrip = {};
    searchTypeTrip.searchType = searchType;
    gauge.dataStore.scenarioStore.put("searchTypeTrip", searchTypeTrip);
});

step("Fill all the required data in autosso username scenario for existing <ssoConfiguration> user", async (sso) => {
    await testharnessAction.autoSsoUsernameWithFL(sso);
});

step("Fill all the required data in autosso email scenario for existing <ssoConfiguration> user", async (sso) => {
    await testharnessAction.autoSsoEmailWithFL(sso);
});

step("validate trip planner page on user creation for sso", async function() {
    await testharnessAction.validateTripPlannersso();
});

step("Fill all the required fields in SSO test harness for new <ssoConfiguration> user without provide firstname and lastname", async function(ssoUserCreate) {
	await testharnessAction.autoSsoEmailWithoutFL(ssoUserCreate);

});

step("Fill all the required fields in SSO test harness without provide firstname and lastname for new <arg0> user", async function(ssoUserCreate) {
	await testharnessAction.autoSsoEmailForNewUser(ssoUserCreate);
});

step("Fill all the required fields in SSO test harness for new <ssoConfiguration> user without firstname and lastname", async function(ssoUserCreate) {
	await testharnessAction.autoSsoUsernameWithoutFL(ssoUserCreate);

});

step("Fill all the required fields in SSO test harness without first name and last name for new <arg0> user", async function(ssoUserCreate) {
	await testharnessAction.autoSsoUsernameForNewUser(ssoUserCreate);
});

step("Verify the error on user creation", async () => {
    await testharnessAction.validateSsoError();
});

step("Fill the required data in cevent meeting scenario for <serverConfiguration>", async (ssoTestharness) => {
    await testharnessAction.getCventMeeting(ssoTestharness);
});

step("Verify the activation page", async () => {
    await testharnessAction.validateActivationPage();
    
});

step("Verify the activation page on the user creation", async () => {
    await testharnessAction.validateActivationPageForUserCreation();
    
});

step("Choose Language", async () => {
    await testharnessAction.languageButton(process.env.i18N_lang)
});

step("validate trip planner page on user creation for cvent", async function() {
    await testharnessAction.validateTripPlannerforCvent();
});

step("Logout from cvent Meeting Mode", async function () {
    await testharnessAction.validateLogOut();
})

step("Login with newly created password", async function () {
    await testharnessAction.enterPassword(gauge.dataStore.scenarioStore.get('passwordField'));
    await testharnessAction.clickSignIn();
});

step("Fill the required data in cevent meeting mode for <serverConfiguration>", async (ssoTestharness) => {
    await testharnessAction.getCventMeetingMode(ssoTestharness);
});

step("Login with info provided during activation process", async function () {
    await testharnessAction.enterPassword(gauge.dataStore.scenarioStore.get('newPassword'));
    await testharnessAction.clickSignIn();

});

step("Verify the activation page and dont change password", async () => {
    await testharnessAction.validateActivationPages();
    
});

step("validate trip planner page and change password on user creation for cvent", async function() {
    await testharnessAction.validateTripPlannerChangePswforCvent();
});




