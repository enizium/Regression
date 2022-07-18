
"use strict";
const { click, write, $, dropDown, evaluate, waitFor, textBox, hover, into, clear, scrollTo, window, press, checkBox } = require('taiko');
const ssotestharness = require ('../Locators/testharness_po.js');
const helper = require('../helpers/helper.js');
const login = require('../Locators/login_po.js');
const languageLoc = require('../Locators/language_po.js');
const assert = require("assert").strict;
const airAction = require('../air_only/air_actions.js');
const purchasePage = require("../Locators/purchase_po.js");
const chai = require('chai');
var expect = chai.expect

exports.getCventMeetingDetails = async (ssoTestharness) => {
    let serverConfigDetails = helper.serverConfigurationDetails(ssoTestharness);
    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });
    // await clear(textBox({ 'name': 'audienceRestriction' }));
    // await write(serverConfigDetails["AudienceRestriction"], $(`${ssotestharness.audienceRestriction()}`));
    await clear(textBox({ 'name': 'userid' }));
    await write(serverConfigDetails["userName"], $(`${ssotestharness.samlSubjectId()}`));
    await checkBox({name:'shouldUseNewWindow'}).check();
    await checkBox({name:'provioningEnabled'}).check();
    await click($(`${ssotestharness.customPayload()}`)); 
    let customPayload = helper.getcustomPayloadOnCevent();
    await write (customPayload["payloadCevent"],$(`${ssotestharness.customPayload()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`)); 

}
exports.testIt = async () => {
    await click($(`${ssotestharness.testIt()}`));
    
}
exports.submitAssertion = async () => {
    await click($(`${ssotestharness.submitAssertation()}`));
}
exports.enterPassword = (password) => write(password, $(`${login.password()}`))
exports.clickSignIn = () => click($(`${login.signIn()}`));

exports.validateTripPlanner = async () =>{
    let deemChromeBoxText = await ($(`${ssotestharness.deemChromeBox()}`)).text();
    let deemChromeCompany = await ($(`${ssotestharness.deemChromeCompanyName()}`)).text();
    assert.strictEqual(deemChromeBoxText, "Cvent/Deem/Event Voucher Test Event")
    assert.strictEqual(deemChromeCompany, "Automation Cvent")
    
}

exports.getSsoMeetingDetails = async (ssoTest) => {
    let serverConfigDetails = helper.serverConfigurationDetails(ssoTest);
    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });
    await clear(textBox({ 'name': 'userid' }));
    await write(serverConfigDetails["userName"], $(`${ssotestharness.samlSubjectId()}`));
    await checkBox({name:'shouldUseNewWindow'}).check();
    // await click($(`${ssotestharness.customPayload()}`)); 
    // let userProfile = helper.getUserProfile();
    // await write (userProfile["userProfileDoc"],$(`${ssotestharness.userProfileDoc()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`)); 
}

exports.autoSsoEmailWithFL = async (ssoTest) => {
    let serverConfigDetails = helper.provisionfigurationDetails(ssoTest);
    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });
    await checkBox({name:'provioningEnabled'}).check();
    await click($(`${ssotestharness.email()}`));
    await write(serverConfigDetails["emailId"], $(`${ssotestharness.email()}`));
    await click($(`${ssotestharness.firstName()}`));
    await write(serverConfigDetails["fName"], $(`${ssotestharness.firstName()}`));
    await click($(`${ssotestharness.lastName()}`));
    await write(serverConfigDetails["lName"], $(`${ssotestharness.lastName()}`));
    await click($(`${ssotestharness.samlSubjectId()}`));
    await write(serverConfigDetails["emailId"], $(`${ssotestharness.samlSubjectId()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`)); 

}

exports.testIt = async () => {
    await click($(`${ssotestharness.testIt()}`));
    
}
exports.submitAssertion = async () => {
    await click($(`${ssotestharness.submitAssertation()}`));
}

exports.autoSsoUsernameWithFL = async (ssoNewUser) => { 
    let serverConfigDetails = helper.provisionfigurationDetails(ssoNewUser);
    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });
    await checkBox({name:'provioningEnabled'}).check();
    await click($(`${ssotestharness.userName()}`));
    await write(serverConfigDetails["username"], $(`${ssotestharness.userName()}`));
    await write(serverConfigDetails["fName"], $(`${ssotestharness.firstName()}`));
    await click($(`${ssotestharness.lastName()}`));
    await write(serverConfigDetails["lName"], $(`${ssotestharness.lastName()}`));
    await click($(`${ssotestharness.samlSubjectId()}`));
    await write(serverConfigDetails["username"], $(`${ssotestharness.samlSubjectId()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`)); 

}
exports.testIt = async () => {
    await click($(`${ssotestharness.testIt()}`));
    
}
exports.submitAssertion = async () => {
    await click($(`${ssotestharness.submitAssertation()}`));
}

exports.validateTripPlannersso = async () =>{
    let deemChromeCompany = await ($(`${ssotestharness.deemChromeCompanyName()}`)).text();
    assert.strictEqual(deemChromeCompany, "automation",`Trip planned SSO doesnot match , Expected :${"automation"} Actual : ${deemChromeCompany}`)
    
}

exports.autoSsoEmailWithoutFL = async (ssoTest) =>{
    let serverConfigDetails = helper.provisionfigurationDetails(ssoTest);
    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });
    await checkBox({name:'provioningEnabled'}).check();
    await click($(`${ssotestharness.email()}`));
    await write(serverConfigDetails["emailId"], $(`${ssotestharness.email()}`));
    await click($(`${ssotestharness.samlSubjectId()}`));
    await write(serverConfigDetails["emailId"], $(`${ssotestharness.samlSubjectId()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`));; 
}

exports.autoSsoEmailForNewUser = async (ssoNewUser) => {
    let serverConfigDetails = helper.provisionfigurationDetails(ssoNewUser);
    let randomId = Math.random().toString(36).substring(7);
    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });
    await checkBox({name:'provioningEnabled'}).check();
    await click($(`${ssotestharness.email()}`));
    await write(randomId+serverConfigDetails["emailId"], $(`${ssotestharness.email()}`));
    await click($(`${ssotestharness.samlSubjectId()}`));
    await write(randomId+serverConfigDetails["emailId"], $(`${ssotestharness.samlSubjectId()}`));
    await click($(`${ssotestharness.externalId()}`));
    await write(randomId+serverConfigDetails["externalId"], $(`${ssotestharness.externalId()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`)); 
}

exports.validateSsoError = async () =>{
    var userIderror = await $(`${ssotestharness.errorText()}`).text();
    let actualMessage = "Provisioning Failure";
    assert.strictEqual(userIderror, actualMessage,
        `Invalid error status is showing on sso test harness, Expected: ${userIderror} & Actual: ${actualMessage}`);

}

exports.autoSsoUsernameWithoutFL = async (ssoNewUser) =>{
    let serverConfigDetails = helper.provisionfigurationDetails(ssoNewUser);
    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });
    await checkBox({name:'provioningEnabled'}).check();
    await click($(`${ssotestharness.userName()}`));
    await write(serverConfigDetails["username"], $(`${ssotestharness.userName()}`));
    await click($(`${ssotestharness.samlSubjectId()}`));
    await write(serverConfigDetails["username"], $(`${ssotestharness.samlSubjectId()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`)); 
}

exports.autoSsoUsernameForNewUser = async (ssoNewUser) => {
    let serverConfigDetails = helper.provisionfigurationDetails(ssoNewUser);
    let randomId = Math.random().toString(36).substring(7);
    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });
    await checkBox({name:'provioningEnabled'}).check();
    await click($(`${ssotestharness.samlSubjectId()}`));
    await write(randomId+serverConfigDetails["username"], $(`${ssotestharness.samlSubjectId()}`));
    await click($(`${ssotestharness.userName()}`));
    await write(randomId+serverConfigDetails["username"], $(`${ssotestharness.userName()}`));
    await click($(`${ssotestharness.externalId()}`));
    await write(randomId+serverConfigDetails["externalId"], $(`${ssotestharness.externalId()}`));

    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`));
}

exports.getCventMeeting = async (ssoTestharness) => {
    let serverConfigDetails = helper.serverConfigurationDetails(ssoTestharness);
    gauge.dataStore.scenarioStore.put("Emailid", "test" + Math.random().toString(36).substring(7) + "@deem.com");

    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });   
    await click($(`${ssotestharness.samlSubjectId()}`));
    await write(gauge.dataStore.scenarioStore.get('Emailid'), textBox({ 'name': 'userid' }));
    await checkBox({name:'provioningEnabled'}).check();
    let customPayload = await getcustomPayloadOnCevent(gauge.dataStore.scenarioStore.get('Emailid'));
    await write (customPayload,$(`${ssotestharness.customPayload()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`)); 

}

async function getcustomPayloadOnCevent(emailID) {
    return `<MeetingParticipantTransferRequest><UniqueSessionID>dcef5d13-72f4-489b-a89a-58d9078848b0</UniqueSessionID><CompanyOrgPrefix>Cvent</CompanyOrgPrefix><CorporateIdentifier>Cvent</CorporateIdentifier><PrimaryParticipant><ParticipantEmail>${emailID}</ParticipantEmail><ParticipantFirstName>Morgan</ParticipantFirstName><ParticipantLastName>Hite</ParticipantLastName><ParticipantType>Employee</ParticipantType><ParticipantID>dcef5d13-72f4-489b-a89a-58d9078848b0</ParticipantID></PrimaryParticipant><ParticipantMeeting><ConfigSetAssertionRegular>TJU1day</ConfigSetAssertionRegular><ConfigSetAssertionGuest>TJU1day</ConfigSetAssertionGuest><MeetingID>YVNWFZFTBSZ</MeetingID><MeetingName>Cvent/Deem/Event Voucher Test Event</MeetingName><MeetingCity>Monrovia</MeetingCity><MeetingStartDate>2021-08-28 03:00:00 -0700</MeetingStartDate><MeetingEndDate>2021-08-29 10:30:00 -0700</MeetingEndDate><DestinationAirport>LAX</DestinationAirport><AllowAltAirport>N</AllowAltAirport><LeaveSegmentEarliestArrival>2021-09-27 00:00:00 -0500</LeaveSegmentEarliestArrival><LeaveSegmentLatestArrival>2021-09-27 01:00:00 -0500</LeaveSegmentLatestArrival><ReturnSegmentEarliestDeparture>2021-08-29 23:00:00 -0500</ReturnSegmentEarliestDeparture><ReturnSegmentLatestDeparture>2021-08-29 23:05:00 -0500</ReturnSegmentLatestDeparture><MeetingDetailsURL>http://www.cvent.com/d/lrq0cm</MeetingDetailsURL><UserMeetingConfirmationNumber>ZFNG4BDSJQS</UserMeetingConfirmationNumber></ParticipantMeeting></MeetingParticipantTransferRequest>`;
}

exports.languageButton = async (language) => {
    await click($(`${languageLoc.language(language)}`));
}

exports.validateActivationPage = async () => {   
    var randomPassword = Math.random().toString(36).substring(4);

    await $(`${ssotestharness.activateText()}`).text();

    await hover($(`${ssotestharness.dateOfBirth()}`));

    await dropDown({ name: 'personalInfo._start_month' }).select({ index: 1 });
    await dropDown({ name: 'personalInfo._start_day' }).select({ index: 1 });
    await dropDown({ name: 'personalInfo._start_year' }).select({ index: 1 });

    await dropDown({ name: 'accountInfo.serviceTimezone' }).select({ index: 4 });
    await $(`${ssotestharness.passwordField()}`).exists() 
    await write(randomPassword, textBox({ 'name': 'passwordInfo.newPassword' }));
    await write(randomPassword, textBox({ 'name': 'passwordInfo.confirmPassword' }));
    gauge.dataStore.scenarioStore.put("passwordInfo",randomPassword)

    gauge.dataStore.scenarioStore.get('Issuer') === "AutoCvent" 
    await click($(`//input[@name='cb_accountInfo.policyAccepted']`));
    
    await click($(`${ssotestharness.clickCont()}`))

    await $(`${ssotestharness.activateText2()}`).text();
    await click($(`${ssotestharness.clickSave()}`))

}

exports.validateTripPlannerforCvent = async () =>{
    let deemChromeBoxText = await ($(`${ssotestharness.deemChromeBox()}`)).text();
    let deemChromeCompany = await ($(`${ssotestharness.deemChromeCompanyName()}`)).text();
    assert.strictEqual(deemChromeBoxText, "Cvent/Deem/Event Voucher Test Event")
    assert.strictEqual(deemChromeCompany, "Automation Cvent")
    
}

exports.validateLogOut = async () => {
    await hover($(`${ssotestharness.settingBtn()}`));
    await evaluate($(`${ssotestharness.settingBtn()}`), (elem) => { return elem.click() });
    await evaluate($(`${ssotestharness.logOut()}`), (elem) => { return elem.click() });

}


exports.enterUserName = (username) => write(username, $(`${login.username()}`))
exports.enterPassword = (password) => write(password, $(`${login.password()}`))
exports.clickSignIn = () => click($(`${login.signIn()}`));


exports.getCventMeetingMode = async (ssoTestharness) => {
    let serverConfigDetails = helper.serverConfigurationDetails(ssoTestharness);
    gauge.dataStore.scenarioStore.put("Emailid", gauge.dataStore.scenarioStore.get('userNameDashboard'));

    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });   
    await click($(`${ssotestharness.samlSubjectId()}`));
    await write(gauge.dataStore.scenarioStore.get('Emailid'), textBox({ 'name': 'userid' }));
    await checkBox({name:'provioningEnabled'}).check();
    let customPayload = await getcustomPayloadOnCevent(gauge.dataStore.scenarioStore.get('Emailid'));
    await write (customPayload,$(`${ssotestharness.customPayload()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`)); 
}

exports.validateActivationPageForUserCreation = async () => {
    var randomPassword = Math.random().toString(36).substring(4);

    await $(`${ssotestharness.activateTextForUserCreate()}`).text();
    await dropDown({ name: 'guestUserPasswordInfo.timezone' }).select({ index: 4 });
    await $(`${ssotestharness.passwordField()}`).exists() 
    await write(randomPassword, textBox({ 'name': 'guestUserPasswordInfo.password' }));
    await write(randomPassword, textBox({ 'name': 'guestUserPasswordInfo.passwordConfirm' }));
    
    gauge.dataStore.scenarioStore.get('Issuer') === "AutoCvent" 
    await click($(`//input[@name='cb_guestUserPasswordInfo.policyAccepted']`));
    
    await click($(`${ssotestharness.clickCont()}`))

}

exports.validateActivationPages = async () => {   

    await $(`${ssotestharness.activateText()}`).text();

    await hover($(`${ssotestharness.dateOfBirth()}`));

    await dropDown({ name: 'personalInfo._start_month' }).select({ index: 1 });
    await dropDown({ name: 'personalInfo._start_day' }).select({ index: 1 });
    await dropDown({ name: 'personalInfo._start_year' }).select({ index: 1 });

    await dropDown({ name: 'accountInfo.serviceTimezone' }).select({ index: 4 });
    await $(`${ssotestharness.passwordField()}`).exists() 
    await write(gauge.dataStore.scenarioStore.get('passwordField'), textBox({ 'name': 'passwordInfo.newPassword' }));
    await write(gauge.dataStore.scenarioStore.get('passwordField'), textBox({ 'name': 'passwordInfo.confirmPassword' }));

    gauge.dataStore.scenarioStore.get('Issuer') === "AutoCvent" 
    await click($(`//input[@name='cb_accountInfo.policyAccepted']`));
    
    await click($(`${ssotestharness.clickCont()}`))

    await $(`${ssotestharness.activateText2()}`).text();
    await click($(`${ssotestharness.clickSave()}`))

}

exports.validateTripPlannerChangePswforCvent = async () =>{

    var randomText = Math.random().toString(36).substring(4);

    let deemChromeBoxText = await ($(`${ssotestharness.deemChromeBox()}`)).text();
    let deemChromeCompany = await ($(`${ssotestharness.deemChromeCompanyName()}`)).text();
    assert.strictEqual(deemChromeBoxText, "Cvent/Deem/Event Voucher Test Event")
    assert.strictEqual(deemChromeCompany, "Automation Cvent")
    await evaluate($(`${ssotestharness.settingBtn()}`), (elem) => { return elem.click() });
    await evaluate($(`${ssotestharness.accountBtn()}`), (elem) => { return elem.click() });
    await evaluate($(`${ssotestharness.changePsw()}`), (elem) => { return elem.click() });
    await write(gauge.dataStore.scenarioStore.get('passwordField'), $(`${ssotestharness.currentPassword()}`))

    await write(randomText, $(`${ssotestharness.newPassword()}`))
    gauge.dataStore.scenarioStore.put('newPassword', randomText);
    await write(randomText, $(`${ssotestharness.confirmNewPassword()}`))
    await evaluate($(`${ssotestharness.saveBtn()}`), (elem) => { return elem.click() });   
}

exports.getCventMeetingDetailsForExistingUser = async (ssoTestharness) => {
    let serverConfigDetails = helper.provisionfigurationDetails(ssoTestharness);
    gauge.dataStore.scenarioStore.put("Emailid", "autocventexisting" + "@deem.com");

    await clear(textBox({ 'name': 'issuer' }));
    await write(serverConfigDetails["issuer"], $(`${ssotestharness.issuer()}`));
    await clear(textBox({ 'name': 'TARGET' }));
    await write(serverConfigDetails["target"], $(`${ssotestharness.target()}`));
    await dropDown({ name: 'samlVersion' }).select({ index: 1 });
    await clear(textBox({ 'name': 'samlEndpoint' }));
    await dropDown({ name: 'samlEndpointSelector' }).select({ index: 1 });
    await checkBox({name:'provioningEnabled'}).check();
    await click($(`${ssotestharness.samlSubjectId()}`));
    await write(serverConfigDetails["userName"], $(`${ssotestharness.samlSubjectId()}`));
    let customPayload = await getcustomPayloadOnCevent(gauge.dataStore.scenarioStore.get('Emailid'));
    await write (customPayload,$(`${ssotestharness.customPayload()}`));
    await click($(`${ssotestharness.testIt()}`)); 
    await click($(`${ssotestharness.submitAssertation()}`));
}


exports.validateTripPlannerChangePswforCvent = async () =>{

    var randomText = Math.random().toString(36).substring(4);

    let deemChromeBoxText = await ($(`${ssotestharness.deemChromeBox()}`)).text();
    let deemChromeCompany = await ($(`${ssotestharness.deemChromeCompanyName()}`)).text();
    assert.strictEqual(deemChromeBoxText, "Cvent/Deem/Event Voucher Test Event")
    assert.strictEqual(deemChromeCompany, "Automation Cvent")
    await evaluate($(`${ssotestharness.settingBtn()}`), (elem) => { return elem.click() });
    await evaluate($(`${ssotestharness.accountBtn()}`), (elem) => { return elem.click() });
    await evaluate($(`${ssotestharness.changePsw()}`), (elem) => { return elem.click() });
    await write(gauge.dataStore.scenarioStore.get('passwordField'), $(`${ssotestharness.currentPassword()}`))

    await write(randomText, $(`${ssotestharness.newPassword()}`))
    gauge.dataStore.scenarioStore.put('newPassword', randomText);
    await write(randomText, $(`${ssotestharness.confirmNewPassword()}`))
    await evaluate($(`${ssotestharness.saveBtn()}`), (elem) => { return elem.click() });   
}



