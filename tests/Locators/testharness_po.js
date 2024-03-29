"use strict";

exports.issuer = () => `//input[@name="issuer"]`;
exports.target = () => `//input[@name="TARGET"]`;
exports.samlVersion = () => `//select[@name='samlVersion']`
exports.samlEndpoint = () => `//input[@name="samlEndpoint"]`;
exports.samlSubjectId = () => `//input[@name="userid"]`;
exports.audienceRestriction = () => `//input[@name="audienceRestriction"]`;
exports.customPayload = () => '//*[@id="customPayload"]';
exports.testIt = () => `//input[@value='Test It!']`;
exports.submitAssertation = () => `//input[@value='Submit the Assertion']`;
exports.userNameField = () => `//input[@id= "delegatorUserName"]`;
exports.deemChromeBox = () => `//div[@class='deem-chrome-meeting-info']`;
exports.deemChromeCompanyName = () =>  `//span[@class='deem-chrome-company-name']`;
exports.userProfileDoc = () => '//*[@id="provisioningDocument"]';
exports.userName = () => `//input[@name="provision-userName"]`;
exports.email = () => `//input[@name='provision-email']`;
exports.externalId = () => `//input[@name="provision-externalID"]`;
exports.firstName = () => `//input[@name="provision-firstName"]`;
exports.lastName = () => `//input[@name="provision-lastName"]`;
exports.errorText = () => `//form[@name="uiForm"]/div[1]`;
exports.activateText = () => `h1 span[class='title']`;
exports.activateTextForUserCreate = () => `//h1[contains(text(),'Activate your account')]`;
exports.passwordField = () =>  `//input[@name='guestUserPasswordInfo.password']`;
exports.policy = () => `//input[@name='cb_guestUserPasswordInfo.policyAccepted']`;
exports.clickCont = () => `//span[text()='Continue']`;
exports.settingBtn = () => `//*[@class="fa fa-cog fa-lg"]`;
exports.logOut = () => `//*[@id="DchLogout"]`;
exports.dob_Month = () => `//*[@id="personalInfo__start_month"]`;
exports.dob_Date = () => `//*[@id="personalInfo__start_day"]`;
exports.dob_Year = () => `//select[@id='personalInfo__start_year']`;
exports.dateOfBirth = () => `//div[@class='controlSet']`;

exports.activateText2 = () => `h1 span[class='title']`;
exports.clickSave = () => `//*[@id="buttonSave"]`;
exports.accountBtn = () => `//div[@class='deem-chrome-menu']//a[@class='deem-chrome-menu-item'][normalize-space()='Account']`;
exports.changePsw = () => `a[href='/rc/settings/main.do?_forward=settings_password']`;
exports.passwordChangePage = () => `h1[class='profileHeading'] span[class='subTitle']`;
exports.currentPassword = () => `input[name='passwordInfo.oldPassword']`;
exports.newPassword = () => `input[name='passwordInfo.newPassword']`;
exports.confirmNewPassword = () => `input[name='passwordInfo.confirmPassword']`;
exports.saveBtn = () => `//a[@id='buttonSave']//span[@id='']`;