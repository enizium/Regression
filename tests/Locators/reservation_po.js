"use strict";

exports.reservationTab = () => "//*[@id='yui_3_8_1_1_1628076482361_579']/div[1]/div[4]/div/div[2]/a[2]"
exports.clickSearch = () => "//div[@class = 'filterOption m-filterOption m-selectSearch']";
exports.selectorForSearchButton = () => "span#buttonSearch";
exports.enterTripName = () => "//input[@name = 'searchName']";
exports.clickApply = () => "//div[@class ='action floatRight m-action']";
exports.clickChangeTrip = () => "//div[@class = 'tripAction m-changeAction']";
exports.clickCancelTrip = () => "//div[@class='tripAction m-cancelAction'] | //span[@id = 'tripCancelLink']";
exports.clickBookAgain = () => "//div[@class='tripAction m-bookAgainAction']";
exports.clickAddService = () => "//div[@class='tripAction m-addServicesLink']";
exports.clickViewDetails =  () => "//div[@class='viewDetails']/a";
exports.clickAddHotel = () => "//li[@class='addServiceItem m-addHotel']/a";
exports.clickAddFlight = () => "//li[@class='addServiceItem m-addFlight']/a";
exports.clickAddCarRental = () => "//li[@class='addServiceItem m-addCar']";
exports.confirmCancel = () => "//a[@id='tripCancelRulesContinueButton']";
exports.selectTripName = () => ".listItem";
exports.continueChange = () => "#tripChangeRulescontinueButton";
exports.enterDepartDateBA = () => "#tbaDepartDate";
exports.enterReturnDateBA = () => "#tbaReturnDate"
exports.bookAgainLOC = () => "span#buttonDone.buttonText";
exports.bookAgainInReservation = () => "(//div[@class='tripAction m-bookAgainAction'])[1]";
exports.bookAgainLeave = () => "(//div[@class='dateWidget']/input[2])[1]";
exports.bookAgainReturn = () => "(//div[@class='dateWidget']/input[2])[2]";
exports.clickDoneBA = () => "//span[@id='buttonDone']";
exports.bookAgainHoldTrip = () => "//a[@id='bookAgain']";
exports.tripName = () => "searchName";
exports.bookTripFor =() => `//div[@id="tbaDelegate"]//span[@class="fa fa-chevron-down"]`
exports.bookAgainTripFor = (user) => `//li[contains(., ${user})]`
exports.resCancelTrip = (i) => `(//div[@class="footer m-footer"])[${i}]/div[2]/div[2]/a`;
exports.optionsBar = (i) => `(//div[@class="footer m-footer"])[${i}]`;
exports.addServiceButton = () => "(//span[@class='dropdownIcon'])[1]";
exports.addCarServiceButton = () => "(//li[@class='addServiceItem m-addCarService'])[1]";
exports.clickAddCarServiceLoc = () => `(//li[@class="addServiceItem m-addCarService"])[1]`;
