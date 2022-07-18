"use strict";

exports.clickChange = () => "//span[@id = 'tripChangeLink']";
exports.clickCancel = () => "//span[@id = 'tripCancelLink']";
exports.clickBookAgain = () => "#bookAgain";
exports.clickAddHotel = () => `//a[@onclick = "return RC.util.safeSubmit(document.forms.uiForm, 'addNewHotel');"]`;
exports.clickAddCarRental = () => `//a[@onclick = "return RC.util.safeSubmit(document.forms.uiForm, 'addNewCar');"]`;
exports.clickCheckedBaggageFees = () => `//a[@onclick = "openBaggageFeesLink('/rc');"]`;

//change pop up
exports.clickChangePopUpContinue = () => "//span[@id = 'tripChangeRulescontinueButton']";
exports.clickChangePopUpCancel = () => "//span[@id = 'tripChangeRulescloseButton']";

//cancel pop up
exports.clickCancelTripPopUpContinue = () => "//span[@id = 'tripCancelRulescontinueButton']";
exports.clickCancelTripPopUpCancel = () => "//span[@id = 'tripCancelRulescloseButton']";

//Book Again pop up
exports.enterBookAgainPopUpLeave = () => "//input[@id = 'tbaDepartDate']";
exports.enterBookAgainPopUpReturn = () => "//input[@id = 'tbaReturnDate']";
exports.clickBookAgainPopUpBookTripForDropDown = () => "//div[@class = 'comboBox comboBoxDelegates m-delegateSelectorTrigger']";
exports.clickBookAgainPopUpBookAgain = () => "//span[@id = 'buttonDone']";

exports.clickCSContinue =  () => `//button[@class="btnNorm m-submit"]`;
exports.clickContinueButton = () => `//span[@id="tripChangeRulescontinueButton"]`;