"use strict";

const api_common_utils = require("../common/api_common_utils.js");
const commonHelper = require("../helpers/helper.js");
const apiActions = require("../api_actions/user_profile_actions.js")
const assert = require("assert");

step("Create user for user profile glopro service", async function () {
	await apiActions.createUser();
	await apiActions.verifyResponse();
});


step("Get user for glopro service", async function () {
	await apiActions.getUser();

});

step("Update user for glopro service", async function () {
	await apiActions.createUser();
	await apiActions.updateUser();
	await apiActions.verifyUpdateResponse();
});

step("MultiSite Match Wrong Restricted Tld Subset", async function() {
	await apiActions.multiSiteMatchWrongRestrictedTldSubsetTest()
});

step("<arg0> Login Single Site Match Test", async function(arg0) {
	await apiActions.userAuthenticate(arg0)
});

step("Lookup Test On Active Email Address", async function() {
	await apiActions.lookupTest();
});

step("Activation Code Encryption", async function() {
	await apiActions.activationCodeEncryption();
});

step("Activation Code Decryption", async function() {
	await apiActions.activationCodeDecryption()
}); 

step("Reset Password <types>", async function(types) {
	await apiActions.resetPassword(types)
});

step("<arg0> Match Partner Tld Restrict",  async function(arg0) {
	await apiActions.MultiSiteMatchPartnerTldRestrictTest(arg0)
});

step("<arg0> Login Single Site Match Seed II Test", async function(arg0) {
	await apiActions.loginSingleSiteMatchSeedIITest(arg0)
});

step("Multi Site Match Wrong Restricted Tld Test", async function() {
	await apiActions.multiSiteMatchWrongRestrictedTldTest()
});

step("Mobile Login Single Site Match Site Id Test", async function() {
	await apiActions.mobileLoginSingleSiteMatchSiteIdTest()
});

step("Mobile Login Single Site Match Wrong PW Test", async function() {
	await apiActions.mobileLoginSingleSiteMatchWrongPWTest()
});

step("Mobile Login Single Site Match Wrong TLD Test", async function() {
	await apiActions.mobileLoginSingleSiteMatchwrongTLDTest()
});

step("Mobile Login Single Site Match Wrong UN Test", async function() {
	await apiActions.mobileLoginSingleSiteMatchwrongUNTest()
});

step("Get batch users for glopro service", async function() {
	await apiActions.getBatchUsers();
});

step("Create batch users for glopro service", async function() {
	await apiActions.createBatchUsers();
});