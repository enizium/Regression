"use strict";
const { goto, click, $, waitFor, write, scrollTo, hover, evaluate, confirm, accept,text, deleteCookies, reload } = require("taiko");
const helper = require("../helpers/helper.js");
const tripPlanner_locator = require('../Locators/tripPlanner_po.js');
const airAction = require("../air_only/air_actions.js");
const trainAction = require("../train_Only/train_actions.js");
const hotelAction = require("../hotel_only/hotel_actions.js");
const carAction = require("../car_only/car_actions.js");
const commonAction = require('./common_actions.js');
const ehiActions = require('../EHI/EHI_actions');
const purchasePage = require("../Locators/purchase_po.js");
const tripConfirmation = require('../Locators/tripConfirmation_po.js');
const dynamicAirPolicy = require('../Locators/dynamicAirPolicyModel_po.js');
const tripPlanner = require("../Locators/tripPlanner_po.js");
const tripReviewPage = require('../Locators/tripReviewPage_po.js');
const assert = require("assert").strict;
const purchase = require('../Locators/purchase_po.js');
const tripDetail = require('../Locators/tripDetails_po.js');
const dashboard = require('../Dashboard(Console)/dashboard_actions');
const { expect } = require("chai");
const CryptoJS = require("crypto-js");


step("Goto Travel Site Url", async function () {
    let url = helper.travelsiteUrl();
    console.log("Selected environment url is "+ url);
    await goto(url); 
    process.env.siteName !== "console.clustera" &&(await commonAction.languageButton(process.env.i18N_lang));
});
step("Goto dashboard Url", async function () {
	await goto(helper.dashboardConsoleUrl(), { waitForNavigation: true });
	console.log(helper.dashboardConsoleUrl());
});

step("Reload the current page", async function (){
    await commonAction.reloadCurrentPage();
})

step("Login to console with <userKey>", async (userKey) => {
	let userDetails = helper.consoleUserDetails(userKey);
    console.log("Username :", userDetails["userName"])
    console.log("Password :", userDetails["passWord"])
    await commonAction.enterUserName(userDetails["userName"])
    await commonAction.enterPassword(userDetails["passWord"])
    await commonAction.clickSignIn();
    await dashboard.closeUpdateNotification()
});

step("Login with <arg0>", async function (userKey) {
    let userDetails = helper.userDetails(userKey);
    let userName = userDetails["userName"];
    let passWord = userDetails["passWord"];
    process.env.environment === "ehistage3" ? await ehiActions.enterUserName(userDetails["userName"]) : await commonAction.enterUserName(userDetails["userName"]);
    let decryptCode = CryptoJS.AES.decrypt((userDetails["passWord"]), '');
    let decryptedPassword = decryptCode.toString(CryptoJS.enc.Utf8);
    await commonAction.enterPassword(decryptedPassword);
    gauge.dataStore.specStore.put('userDetails', userDetails);
    console.log(`*******Login with userName as ${userName} and password as ${decryptedPassword} *******`);
    gauge.message(`Username : ` + userDetails["userName"])
    gauge.message(`Password :  ` + userDetails["passWord"])
    await commonAction.clickSignIn();
});

step("Navigate to tripPlanner Page and select <arg0> segments", async function (searchType) {
    let searchTypeTrip = {};
    process.env.environment === "ehistage3" && ( await ehiActions.gotToTripPlannerPage())
    await commonAction.closeAllSegments();
    await helper.retrieveSessionId();
    await commonAction.bookTripType(searchType);
    searchTypeTrip.searchType = searchType;
    await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("searchTypeTrip", searchTypeTrip) :
    gauge.dataStore.scenarioStore.put("searchTypeTrip", searchTypeTrip);
});
step("Navigate to tripPlanner Page  select <destinationType> and click <segments> segments", async function (destinationType, searchType) {
    let searchTypeTrip = {};
    await commonAction.selectDestinationType(destinationType);
    await commonAction.closeAllMDSegments();
    await helper.retrieveSessionId();
    await commonAction.bookTripTypeMultiDestination(searchType);
    searchTypeTrip.searchType = searchType;
    searchTypeTrip.destinationType = destinationType;
    gauge.dataStore.scenarioStore.put("searchTypeTrip", searchTypeTrip);
    console.log(searchTypeTrip)
});


step("Validate details in <validationPageAir> page", async function (validateType) {
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    await waitFor(5000);
    let tripType = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("searchTypeTrip") : gauge.dataStore.scenarioStore.get("searchTypeTrip")
    switch (tripType.searchType) {
        case "AirOnly":
            await airAction.reviewPageFlightInfo(validateType);
            break;
        case "AC":
            await airAction.reviewPageFlightInfo();
            await carAction.reviewPageCarInfo();
            break;
        case "AH":
            await airAction.reviewPageFlightInfo(validateType);
            await hotelAction.reviewPageHotelInfo(validateType);
            break;
        case "AHC":
            await airAction.reviewPageFlightInfo(validateType);
            await hotelAction.reviewPageHotelInfo(validateType);
            await carAction.reviewPageCarInfo(validateType);
            break;
        case "HotelOnly":
            await hotelAction.reviewPageHotelInfo(validateType);
            break;
        case "TrainOnly":
            await trainAction.reviewPageTrainInfo(validateType);
            break;
        case "THC":
            await trainAction.reviewPageTrainInfo(validateType);
            await hotelAction.reviewPageHotelInfo(validateType);
            await carAction.reviewPageCarInfo(validateType);
            break;
        case "TH":
            await trainAction.reviewPageTrainInfo(validateType);
            await hotelAction.reviewPageHotelInfo(validateType);
            break;
        case "HC":
            await hotelAction.reviewPageHotelInfo(validateType);
            await carAction.reviewPageCarInfo(validateType);
            break;
        case "CarRentalOnly":
            await carAction.reviewPageCarInfo(validateType);
            break;
        default:
            break;
    }
});

step("Enter Trip Name", async function () {
    await helper.waitForSpinner();
    await commonAction.enterTripName();
});
step("Enter Project Code Additional Info", async function () {
    await commonAction.enterProjectCodeAdditionalInfo();
});

step("Reason for not booking hotel", async function () {
    await commonAction.reasonForNotBookingHotel();
});

step("Go to reservations and select the recently added trip", async function () {
    await commonAction.clickReservation();
    await helper.waitForSpinner();
    await helper.waitForWalkmePlayer();
    await commonAction.clickSearch();
    await commonAction.searchTripName();
    await commonAction.clickApply();
    await commonAction.selectTrip();
});

step("Validate Change/Cancel Link are not displayed on <args> Page", async function (respectivePage) {
    console.log("test")
    switch (respectivePage) {
        case "Trip Details":
             let changeLink = await commonAction.changeTripInTripDetail().exists();
             assert.equal(changeLink, false, "Change link is present for Travelfusion Bookings in " + respectivePage+"?");
             let cancelLink = await commonAction.cancelTripInTripDetail().exists();
             assert.equal(cancelLink, false, "Cancel link is present for Travelfusion Bookings " + respectivePage+"?");
             break;
        default:
            break;
    }
});

step("<arg0> the trip", async function (postCondition) {
    switch (postCondition) {
        case "Cancel":
            await commonAction.cancelTrip();
            await commonAction.clickConfirmCancel();
            break;
        case "Change":
            await commonAction.changeTrip();
            await waitFor(5000)
            await commonAction.clickContinueChange();
            break;
        case "Book Again":
            await commonAction.setBookAgainTripName();
            await commonAction.bookAgainTrip();
            break;
        case 'Confirm Cancellation':
            await commonAction.clickConfirmCancel();
        default:
            break;
    }
});

step("Click <arg0> button if exist", async function (button) { 

    switch (button) {
        case 'Air OOP Continue':
            if(airAction.checkOOPContinuePopUpExist())
            await airAction.clickOOPContinue();
            break;
        default: 
            break;
    
    }
});

step("Click Hold this Trip in purchase page", async function () {
    await commonAction.clickHoldThisTripInPurchasePage();
})
step("Click <arg0> button", async function (button) {
    switch (button) {
        case 'Book Again':
            await commonAction.clickBookAgainPopUp();
            break;
        case 'Book Again In Hold Trip':
            await commonAction.clickBookAgainInHoldTrip();
            break;
        case 'View Details':
            await commonAction.clickViewDetails();
            break;
        case 'hotel continue':
            await commonAction.clickHotelContinueButton();
            break;
        case 'trip review continue':
            await commonAction.clickContinue();
            await commonAction.checkOOP();
            break;
        case 'hold trip continue':
            await commonAction.clickHoldTripContinue();
            break;
        case 'Confirm Cancellation':
            await commonAction.clickConfirmCancellation()
            break;
        case "Purchase":
            await commonAction.clickPurchase();
            break;
        case "Done":
            await commonAction.clickDone();
            break;
        case "Select":
            await helper.waitForLoaderSvg();
            await helper.waitForWalkmePlayer();
            await carAction.clickSelectBtn();
            await waitFor(5000);
            break;
        case "SUV":
            await helper.waitForLoaderSvg();
            await helper.waitForWalkmePlayer();
            await click("SUV");
            await waitFor(5000);
            break;
        case "Intermediate":
            await click("Intermediate");
            await waitFor(5000);
            break;
        case "Mini":
            await click("Mini");
            await waitFor(5000);
            break;
        case "Compact":
            await click("Compact");
            await waitFor(5000);
            break;
        case "Economy":
            await click("Economy");
            await waitFor(5000);
            break;
        case "Premium":
            await click("Premium");
            await waitFor(5000);
            break;
        case "Standard":
            await click("Standard");
            await waitFor(5000);
            break;
        case "Luxury":
            await click("Luxury");
            await waitFor(5000);
            break;
        case "Full size":
            await click("Full size");
            await waitFor(5000);
            break;
    
        case "train ticket notification checkbox":
            await helper.waitForSpinner();
            // await waitFor(async () => (await $(`${commonAction.clickAcknowledgeCheckbox()}`).exists()), process.env.test_timeout);
            await commonAction.clickAcknowledgeCheckbox();
            break;
        case "post purchase":
            await helper.waitForSpinner();
            await commonAction.checkUnusedTicket()
            await commonAction.clickPurchase();
            break;
        case "air OOP continue":
            await airAction.clickOOPContinue();
            break;  
        case "Hold This Trip":
            await helper.waitForSpinner();
            await commonAction.clickHoldThisTrip();
            break;  
        case "Search":
            await waitFor(async () => !(await $("#loadingSpinner").exists()), process.env.test_timeout);
            await airAction.clickSearch();
            break;
        case "select new flights" :
            await airAction.selectNewFlights(); 
            break;
        case "Continue Web Fare":
            await commonAction.clickcontinueWebFare();
            break;   
        case "Terms And Condition":
            await commonAction.railTermsAndConditions();
            break;
        case "Modify or Purchase":
            await commonAction.clickModifyOrPurchase();
            break;
        case "Flight Terms And Condition":
            await commonAction.flightTermsAndConditions();
            break;  
        case "Hold the trip":
            await helper.waitForSpinner();
            await commonAction.holdThisTripTrain();
            break;   
        default:
            break;
    }
});

step("Validate Baggage Fee Information on <pageType> Page", async function (pageType) {
    switch (pageType) {
        case 'Trip Confirmation':
        case 'Trip Details':
            await commonAction.validateAirlineBaggageFee()
            await commonAction.validateCountBaggageFee()
            break;
    }
})

step("Select cardType as <arg0>", async function (cardType) {
    let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip");
    switch (tripType.searchType) {
        case 'TrainOnly':
            await commonAction.otfopTrainInfo(cardType);
            break;
        case 'HotelOnly':
            await commonAction.otfopInfo(cardType);
            break;
        case 'THC':
            await commonAction.otfopTrainInfo(cardType);
            break;
        case 'AirOnly':
            await commonAction.otfopInfo(cardType);
            break;
        case 'CarRentalOnly':
            await commonAction.otfopInfo(cardType);
            break;
        case 'AHC':
            await commonAction.otfopInfo(cardType);
            break;
        case 'TC':
            await commonAction.otfopTrainInfo(cardType);
            break;
        default:
            break;
    }
});

step("Select start assisting Delegate user Menu on Trip Planner Page", async function () {
    await commonAction.delegateStartAssisting();
});

step("Validate start assisting menu dislpayed on <pageType>", async function (pageType) {
    await commonAction.delegateValidate();
});
step("Enter book again details based on below table data <arg0>", async function (table) {
    let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip");
    switch (tripType.searchType) {
        case 'AirOnly':
            await commonAction.fillBookAgainLeaveAndReturnDate(table);
            break;
        case 'HotelOnly':
            await commonAction.getHotelBookAgainDetails(table);
            break;
        case 'AHC':
            await commonAction.fillBookAgainLeaveAndReturnDate(table);
            break;
        case 'CarRentalOnly':
            await commonAction.fillBookAgainLeaveAndReturnDate(table);
            break;
        case 'AC':
            await commonAction.fillBookAgainLeaveAndReturnDate(table);
            break;
        default:
            break;
    }
});

step("Check Train Ticket Notification", async function () {
    await commonAction.trainTicketNotification();
});

step("Enter CVV code <arg0> for <arg1> billing", async function (code, type) {
    await commonAction.cvvCode(code, type);
});


step("Handle OOP popup if exist", async function () {
    let tripType = await gauge.dataStore.specStore.get("searchTypeTrip");
    switch (tripType.searchType) {
        case 'AirOnly':
        case 'AHC':
            if(commonAction.checkflightOOPPopUpExist())
                await commonAction.flightOOP();
            break;
        default:
            break;
    }
});

step("Handle OOP popup", async function () {
    let tripType = await gauge.dataStore.specStore.get("searchTypeTrip");
    switch (tripType.searchType) {
        case 'HotelOnly':
            process.env.environment === "ehistage3" ? await commonAction.carRentalOOP() : await commonAction.hotelOOP();
            break;
        case 'AirOnly':
            await commonAction.flightOOP();
            break;
        case 'CarRentalOnly':
            await commonAction.carRentalOOP();
            break;
        case 'TrainOnly':
            await commonAction.trainOOP();
            break;
        case 'THC':
            await commonAction.trainOOP();
            break;
        case 'AHC':
        case 'AC':
            process.env.environment === "ehistage3" ? await commonAction.carRentalOOP() :
            await commonAction.flightOOP();
            break;  
        default:
            process.env.environment === "ehistage3" ? await commonAction.carRentalOOP() : await commonAction.hotelOOP();
            break;
    }
});

step("Click on Change Traveler link and enter <guestUserKey> details", async function (guestUserKey) {
    let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip");
    switch (tripType.searchType) {
        case 'AirOnly':
            await commonAction.changeTravelerUserName(guestUserKey);
            break;
        case 'HotelOnly':
            await commonAction.changeTraveler(guestUserKey);
            break;
        case 'CarRentalOnly':
            await commonAction.changeTraveler(guestUserKey);
            break;
        case 'TrainOnly':
            await commonAction.changeTraveler(guestUserKey);
            break;
        case 'AHC':
            await commonAction.changeTravelerUserName(guestUserKey);
            break;
        case 'THC':
            await commonAction.changeTraveler(guestUserKey);
            break;
    }
});

// step("Click Continue on Travel Acknowledgment", async function () {
//     await commonAction.travelerAcknowledgement();

// });

step("Validate guest traveler details on <validationPageAir> page", async function () {
    await commonAction.guestTravelerDetails();
});

step("Enter guest user details in post change", async function () {
    await commonAction.postChangeTravelerUserName();
});

// step("Click Continue on Travel Acknowledgment in Hold Trip", async function () {
//     await commonAction.travelerAcknowledgementInHoldTrip();

// });

step("Click on add <arg0>", async function (segmentAddition) {
    if(segmentAddition == "Car")
        await carAction.clickAddCarFromTripReview();
    else if(segmentAddition == "Hotel")
        await hotelAction.clickAddHotelFromTripReview();
    await commonAction.tripAdditionType(segmentAddition);
});

step("Enter additional email of <guestUserKey> user for train", async function (guestUserKey) {
    await commonAction.emailTrainDetail(guestUserKey);
});
step("Validate details in trip review page without hotel", async function () {
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    await airAction.reviewPageFlightInfo();
    await carAction.reviewPageCarInfo();
});

step("Validate details in trip confirmation page without hotel", async function () {
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    await airAction.reviewPageFlightInfo();
    await carAction.reviewPageCarInfo();

});

step("Enter traveler <guestUserKey> contact details", async function (guestUserKey) {
    await commonAction.travelerContactDetails(guestUserKey);

});

step("Add <service> in review page", async (service) => {
   await commonAction.addSeriveInReviewPage(service)
});

step("Validate <argo> details", async (finalTrip) => {
    
    switch(finalTrip){
        case "hotel":
        await hotelAction.reviewPageHotelInfo();
        break;

        case "car":
        await carAction.reviewPageCarInfo();
        break;
        
        default:
        break;
    }        
})

step("Validate checkin checkout dates in <page> page is same to be <true>", async function(pageType, status){
    await commonAction.validateCheckInCheckoutDateIsGreater(pageType, status);
});

step("Validate checkin checkout dates for flight is unchanged in <pageType> page", async function(pageType){
    await commonAction.validateCheckInCheckoutDateIsSameForFlights(pageType);
});

step("Select payment card for <args1> as <args2>", async function (type, cardType) {
   await commonAction.selectPaymentByIndex(type,cardType)
});

step("Select index <args1> payment card for <args1>", async function(index, type){
    await commonAction.clickPaymentDropdown(type);
    await commonAction.selectPaymentCardByIndex(type, index);
});

step("Enter traveler <guestUserKey> gender", async function (guestUserKey) {
    await commonAction.travelerGender(guestUserKey);
});


step("Validate <args1> segment is not displayed in <args2> page", async function(segment, page){
    await commonAction.hideSegment(segment, page)
})

step("Validate Emergency Contact section is not visible", async function(){
    await commonAction.hideEmergencyContact()
})

step("Validate Unused Ticket is not visible in menu", async function(){
    await commonAction.hideUnusedTicket()
})
step("Validate TSA message pop up is not displayed", async function(){
    await commonAction.TSAMessagePopup()
})

step("Validate TSA message in pop up", async function(){
    await commonAction.validateTSAMessage()
})

step("Select <num> of bag to check on purchase page", async function (num) {
    await commonAction.bagsToCheck(num);
});

step("Acknowledge the Terms & Conditions for travel fusion", async function () {
    await commonAction.termsAndConditionAcknowledgement();
});

step("Handle purchase confirmation popup <msg>", async function (msg) {
    await commonAction.okPopup(msg);
});


// step("Validate Multi Hotel details in <validationPageAir> page", async function (validateType) {
//     await commonAction.valiateMultiHotelInfo(validateType);
// });
step("Validate apple map", async function () {
    await waitFor(5000);
    await commonAction.validateAppleMap();
});

step("Validate page title in <ags> page", async function (title){
    await commonAction.validatePageTitle(title)
})

step("Go to reservations and select the original trip", async function() {
	await commonAction.clickReservation();
    await commonAction.clickSearch();
    await commonAction.searchOriginalTripName();
    await commonAction.clickApply();
    await commonAction.selectTrip();
});

step("Validate Cost allocation field on purchase page", async function() {
    await commonAction.costAllocation();
})
step("Validate cat35 fares in <ags> page", async function(args) {
	await commonAction.validateCat35(args);
});

step ("Validation of all <args> option and custom message on overview page", async function(View) {
    await commonAction.amexGbtProfileConnectConfigure(View);
});
step("Handle Additional Information", async function() {
    await commonAction.additionalInfoPopUp();
})
step("Select Travel", async function() {
    await commonAction.clickTravel();
});
step("Verify MoreSearch Option", async function() {
	await commonAction.verifyMoreSearch();
});

step("Validate Multi Hotel details in <validationPageAir> page", async function (validateType) {
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    await waitFor(5000);
    let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip")
    switch (tripType.searchType) {
        case "AH":
            await airAction.reviewPageFlightInfo(validateType);
            await commonAction.valiateMultiHotelInfo(validateType);
            break;
        case "AHC":
            await airAction.reviewPageFlightInfo(validateType);
            await commonAction.valiateMultiHotelInfo(validateType);
            await carAction.reviewPageCarInfo(validateType);
            break;
        case "HotelOnly":
            await commonAction.valiateMultiHotelInfo(validateType);
            break;
        case "CH":
            await commonAction.valiateMultiHotelInfo(validateType);
            await carAction.reviewPageCarInfo(validateType);
            break;
        default:
            break;
    }
});

step("Delete the cookies", async () => {
    await deleteCookies();
});

step("Get processId from trip confirmation page", async function () {
    await commonAction.getProcessID();
});

step("Get Trip Information from trip confirmation page", async function () {
    await commonAction.getTripInformationFromTripConfirmationPage();
});
 
step("Goto Pre Trip Approval Page", async function () {
    await commonAction.goToPTAPage();
});

step("Close current active tab", async function () {
    await commonAction.closeCurrentActiveTab();
});

step("Validate Page title, PTA message and fullname", async function () {
    await commonAction.validatePTAPageTitleMsgAndFullname();
});

step("<decision> Pre-trip Approval request", async function (decision) {
    await commonAction.approveOrDeclinePTA(decision);
});

step("Enter value in Cost allocation field on purchase page", async function() {
    await commonAction.costAllocationField();
})

step("<action> the Booking using URL", async function (action) {
    let tripSearchType = gauge.dataStore.scenarioStore.get("searchTypeTrip");
    if (tripSearchType.searchType !== "HotelOnly") {
        let changeFlag = true;
        await gauge.dataStore.scenarioStore.put('changeFlag', changeFlag);
    }
    await commonAction.tripAction(action)
    await commonAction.confirmTripAction(action)
}) 

step("Add <action> from Add Service using URL", async function (action){
    await commonAction.tripAction(action)
    await commonAction.addPostService(action);
})

//SW only
step("Fill billing address form", async function(){
    await commonAction.billingAddress()
})

step("Validate car rental Details and Rules Popup", async function() {
	await commonAction.validateDetailsAndRulePopup()
});

step("Validate the locations in review page", async function () {
    
    await commonAction.validateLocations();
    //let hotelAddress = gauge.dataStore.scenarioStore.get("hotelSearchData");
   // await assert.ok(await text(`${hotelAddress.split(" ")[0]}`).exists());
	
});

step("Select Fox Cost Allocation", async function() {
	await commonAction.selectCostAllocation()
});


step("Validate Fox cost allocation is not displayed", async function() {
	await commonAction.validateFoxCostAlloNotDisplayedOnTripplaner()
});

step("Select <arg0> Cost Allocation", async function(arg0) {
	await commonAction.selectCostAllocation(arg0)
});

step("Enter <User> address details", async function (guestUserKey) {
    await commonAction.travelerAddressDetails(guestUserKey);
    
});

step("Validate non refundable badge validation in <pagetype> page", async function(pageType) {
	await commonAction.flightBatchValidation(pageType);
});

step("Validate refundable badge validation in <arg0> page", async function(pageType) {
	await commonAction.refundableFlightBatchValidation(pageType);
});

step("Validate hotel badge in trip review page", async function() {
	await hotelAction.validateTripSourceBadge()
});

step("Change Traveler details as below table <table>", async function(table) {
	await commonAction.changeTravelerDetails(table)
});

step("Fill book again details based on below table data <arg0>", async function(table) {
	let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip");
    switch (tripType.searchType) {
        case 'AirOnly':
            await commonAction.fillBookAgainLeaveAndReturnDate(table);
            break;
        case 'HotelOnly':
            await commonAction.getHotelBookAgainDetails(table);
            break;
        case 'AHC':
            await commonAction.enterBookAgainLeaveAndReturnDate(table);
            break;
        case 'CarRentalOnly':
            await commonAction.fillBookAgainLeaveAndReturnDate(table);
            break;
        case 'AC':
            await commonAction.fillBookAgainLeaveAndReturnDate(table);
            break;
        default:
            break;
    }});
step("Remove FAIL-ME if exists after rebooking", async function () {
    await commonAction.removeFailMe();
});
step("Validate notification <user> user", async function(user) {
    await waitFor(120000)
    await reload()
    await commonAction.validateKTNExpirayMessage(user)
});

step("Stop Assisting delegate", async function() {
    await commonAction.clickStopAssisting()
});

step("Click <buttonName> button on <pageName> page", async function (buttonName, pageName) {
    if (pageName == "Reservation") {
        let newServiceFlag = true;
        gauge.dataStore.scenarioStore.put("newServiceFlag", newServiceFlag);
    }
    await commonAction.buttonClickEvents(buttonName,pageName)
    await commonAction.CarServiceCompanyPolicyCompliance()
    await helper.waitForSpinner();
});
step("Click <buttonName> button with <provider> provider", async function (buttonName,provider) {
    await commonAction.checkProviderAndClickSelect(buttonName,provider)
    await helper.waitForSpinner();
});

step("Cancel booking from trip details page", async function() {
    await commonAction.cancelBookings();
    await waitFor(5000)
    await commonAction.confirmCancellation();
});
//Only for Sanity
step("Click trip review continue button", async function() {
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    await waitFor(5000);
    await commonAction.clickContinue();
    await commonAction.checkOOP();
})
//Sanity
step("Click on hold the trip button", async function() {
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    await waitFor(5000);
    await commonAction.holdThisTripTrain();
})
//Sanity

step("Enter Company Reporting (Cost Allocation)", async function() {
	await commonAction.companyReporting()
});
step("Trip change car service booking", async function() {
	await commonAction.tripChange();
});

//Sanity
step("Navigate to Reservation Page", async function () {
    await commonAction.clickReservation();
    await helper.waitForSpinner();
    await helper.waitForWalkmePlayer();
});

//Sanity
step("Retrieve Existing Bookings from the user and cancel the bookings", async function () {
    await commonAction.bookingActions();
});

step("Add CarService to the trip", async function() {
	await commonAction.clickAddService();
    await commonAction.addCarService();
});
