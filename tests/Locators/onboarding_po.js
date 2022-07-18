"use strict";

exports.firstName = () => `//input[@id="FirstNameInput"]`
exports.lastName = () => `//input[@id="LastNameInput"]`
exports.emailAddress = () => `//input[@id="EmailInput"]`
exports.password = () => `//input[@id="PasswordInput"]`
exports.businessName = () => `//input[@id="SiteNameInput"]`
exports.zipCode = () =>`//input[@id="ZipCodeInput"]`
exports.IAcceptCheckbox = () => `//input[@id="TermsOfUseInput"]`
exports.signUp = () => `//a[@id="ValidateAndSubmit"]`
exports.successfulMsg = () => `//div[@class="title"]`
exports.successFulRefUploadMsgLoc = () => `//div[@class="textGreen"][2]`;
exports.failureMsgRefPoint = () => `(//div[@class="textAlertDetails"][1])[2]`;
exports.referenceStatus = () => `(//table[@class="full"])[2]/tbody/tr[2]/td[2]`;