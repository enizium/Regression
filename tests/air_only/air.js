"use strict";
const airAction = require('../air_only/air_actions.js');
const helper = require('../helpers/helper.js');
const assert = require('assert');
const { click, $, waitFor,hover,evaluate, text } = require('taiko');
const ALERT_MESSAGE_CONSTANTS = {
     travelAlertMessage: "Amex Business Travel has travel alert for these locations.",
     travelRestrictedMessage: "You are departing from, or returning to, a restricted country.",
     multicityalertmessage: "Currently, changes are not supported online for multi-city itineraries. Please contact SabreAgency directly for changes."
 }
const commonAction = require("../common/common_actions.js");
const { airline } = require('../Locators/tripConfirmation_po.js');
const departFlightPage = require("../Locators/select_Departure_Flight_po.js");
const tripReviewPage = require('../Locators/tripReviewPage_po.js');

step("Search flight based on below table data <table>", async function (table) {
     await airAction.clickMoreSearchOption();
     await airAction.getFlightDetails(table);
     await airAction.clickSearch();
});
step("Click more flight based on below table data <table>", async function (table) {
     await airAction.getFlightDetails(table);
     await airAction.clickSearchForMoreAirports();
});
step("Search MultiDestination flight based on below table data <arg0>", async function (table) {
     await airAction.getMultiDestinationFlightDetails(table);
     await airAction.clickSearch();
});

step("Search filtered flight based on below table data <table>", async function (table) {
     await airAction.getFilterDetails(table);
    // await airAction.validateFlightResult();
     await airAction.selectFlights()
});

step("Click on <arg0>", async function (arg0) {
     await airAction.clickChangeLink();
     await waitFor(3000);
});

//Ayush
step("Validate Restricted country warning message on Trip Planner page", async function () {
     //Validation for Travel Restricted country warning message
     await waitFor($('.deem-chrome-navbar .deem-chrome-menu-head'), process.env.test_timeout);
     let travelRestrictedWarning = await text(ALERT_MESSAGE_CONSTANTS.travelRestrictedMessage).exists();
     assert.strictEqual(travelRestrictedWarning, true, "Travel Restricted Country alert message is not displayed");
     waitFor(100000);
 });

 step("Validate travel alert is present on the review page", async function () {
     //validation for Travel alert message on review page
     let travelAltMessage = await text(ALERT_MESSAGE_CONSTANTS.travelAlertMessage).exists();
     assert.strictEqual(travelAltMessage, true, "Travel alert message is not displayed");
     waitFor(100000);
 
 });


step("Fill required details on Company Policy Compliance model box", async function () {
     await commonAction.CompanyPolicyCompliance();
});


step("Search filtered flight based on below table data and get Baggage info <table>", async function (table) {
     await airAction.getFilterDetails(table);
     await airAction.departPageFlightInfo();
     await airAction.baggageFee()
     await airAction.clickSelectFlight()
     await airAction.returnPageFlightInfo();
     await airAction.clickSelectFlight();
});

step("Select Air Search By <arg0>", async function (searchType) {
     await airAction.selectSearchType(searchType)
});

step("Validate Air Search By <args0>", async function (viewType) {
     await airAction.ValidateViewTypes(viewType)
 });

 step("Validating Default Air Search by <arg0>", async function (searchType) {
     await airAction.defaultSearchType(searchType)
});

step("Refine search by below table data <arg0>", async function(table) {
     let refineType = table.rows[0].cells[0];
     switch(refineType){
          case 'Non-Stop':
               await airAction.clickNonStopFlight();
               await airAction.refineFlightStops();
               break;
          case 'SFO':
               await airAction.nearbyAirportsResults(refineType);
               break;
          case 'UA':
               await airAction.unitedAirlines(refineType);
               await airAction.refineUniteAirlines();
               break;
          case 'Coach':
               await airAction.refineClassType();
               break;
          case 'Out of Policy':
               await airAction.outOfPolicy();
               await airAction.refinePolicyType();
               break;
          case '1 Stop':
               await airAction.clickOneStopFlight();
               await airAction.refineOneStopType();
               break;
          case 'Standard':
               await airAction.clickFareBasic();
               await airAction.clickFareRefundable();
               await airAction.clickFareUnrestricted();
               await airAction.refineFareTierStandard(refineType);
     }

});

step("Select <flightType> flight", async function (flightType) {
     switch(flightType){
          case "Departure":
               await airAction.departPageFlightInfo();
               await airAction.clickSelectFlight()
               break;
          case "Arrival":
               await airAction.returnPageFlightInfo();
               await airAction.clickSelectFlight();
               break;
     }
});

step("Sort flight by <label>", async function (label) {
     await airAction.clickOnSortFlightByLabel(label);

});
step("Select <flightType> Flight with time before <twentyFourHourTime> and duration greater than <duration> minutes", async function (flightType, twentyFourHourTime, duration ) {
     await airAction.selectFlightWithArrivalDepartureAndDurationForGivenData(flightType, twentyFourHourTime, duration);

});

step("Sort flight by <label> and validate result is sorted", async function (label) {
     await airAction.clickOnSortFlightByLabel(label);
     await airAction.checkIfFlightIsSortedByLabel(label);

});

step("Get flight details from Recommended Option in OOP popup", async function () {
     await airAction.selectFlightInfoOOP(); 
});
//travel fusion
step("Validate Travel Fusion flight results will not display any Fare Tiers/Branded fares", async function () {
     await airAction.travelFusionReport();
 });

 step("Validate WEB FARE Badge in respective Page", async function () {
     await airAction.validatWebFare();
 
 });

step("Validate lowest price is selected", async function () {
     await helper.waitForSpinner();
     await airAction.lowestPriceValidation();
});
step("Filtered flight based on below table data <table>", async function (table) {
     await airAction.getFilterDetails(table);
});

step("Select Departure Flight", async function () {
     await airAction.departPageFlightInfo();
     await airAction.clickSelectFlight();
});

step("Select Return Flight", async function () {
     await airAction.returnPageFlightInfo();
     await airAction.clickSelectFlight();
     await commonAction.hotelDatesPopup() 
     await commonAction.priceIncDecAlert() 
});

step("Validate Flight stops in departure page", async function() {
	await airAction.validateStops();
});

step("Search flight based on below table data and verify return class <table>", async function(table) {
     await airAction.getFlightDetails(table);
     await airAction.clickMoreSearchOption();
     await airAction.validateReturnClass();
     await airAction.clickSearch();
});


step("Search MultiDestination flight based on below table data and verify return class <arg0>", async function(table) {
     await airAction.getMultiDestinationFlightDetails(table);
     await airAction.validateReturnClass();
     await airAction.clickValidateSearchSummary();
     await airAction.clickSearch();
});
step("Seatmap load validation", async function () {
     await airAction.seatMap();
 
 });
step("Validate search button is disable by validating <ags> message on change pop up", async function(ags) {
	await airAction.validateSearchMessageIsShown(ags);
});

//amadeus
step("Search flights based on below table data <table>", async function (table) {
     await airAction.clickMoreSearchOption();
     await airAction.getFlightDetails(table);
});

step("Enter additional information in mandatory custom fields", async function () {
     await airAction.tripPurposeLabel();
});

step("Validating post Default Air Search by <arg0>", async function(searchBy) {
	await airAction.defaultPostSearchType(searchBy);
});
step("Validate fare tier length", async function () {
     await airAction.flexfare();
})

step("Get the flight badge information", async function() {
	await airAction.getBadgeInfo();
});

step("Search non refundable flight based on below table data <table>", async function(table) {
     await airAction.getFilterDetails(table);
     await airAction.selectNonRefundableFlightDepart();
     await airAction.departPageFlightInfo();
     await airAction.clickSelectFlight();
     await airAction.selectNonRefundableFlightReturn();
     await airAction.returnPageFlightInfo();
     await airAction.clickSelectFlight();
});

step("Search refundable flight based on below table data <arg0>", async function(table) {
	await airAction.getFilterDetails(table);
     await airAction.selectRefundableFlightDepart();
     await airAction.departPageFlightInfo();
     await airAction.clickSelectFlight();
     await airAction.selectRefundableFlightReturn();
     await airAction.returnPageFlightInfo();
     await airAction.clickSelectFlight();
});

step("Search flight based on given table data <table>", async function(table) {
	await airAction.clickMoreSearchOption();
     await airAction.FillFlightDetails(table);
     await airAction.clickSearch();
});
//Sanity
step("Select Air Search By Schedule", async function () {
     await airAction.selectSchedule()
});

step("Click on Change Return Flight Only", async function() {
     await airAction.selectChangeReturnFlightOnly()
});

step("Search RoundTrip flight based on below table data <table>", async function (table) {
     await airAction.clickMoreSearchOption();
     await airAction.getRoundTripFlightDetails(table);
     await airAction.clickSearch();
});

step("Search filtered for RoundTrip flight based on below table data <table>", async function (table) {
     await airAction.getFilterDetails(table);
     await airAction.selectRoundTripFlights()
});
