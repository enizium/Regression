 
"use strict";

const { color } = require("taiko");
const cssAction = require("../cssvalidate_only/css_action.js");
const airAction = require("../air_only/air_actions.js");
const helper = require("../helpers/helper.js");
const departFlightPage = require("../Locators/select_Departure_Flight_po.js");
const commonAction = require("../common/common_actions.js");
const carActions = require("../car_only/car_actions.js");
const trainAction = require('../train_Only/train_actions.js');
const hotelAction = require('../hotel_only/hotel_actions.js');


step("validate tripplanner page color", async function () {
    await cssAction.tripPlannerPage();
});

step("Search flight based on below table data and validate search button css <table>", async function (table) {
    //await airAction.clickMoreSearchOption();
    await airAction.getFlightDetails(table);
    await cssAction.cssSearchBtn();
    await airAction.clickSearch();
});
step("Search Car based on below table data and validate search button css <table>", async function (table) {
    await carActions.getCarRentalDetails(table);
    await cssAction.cssSearchBtn();
    await airAction.clickSearch();
});
step("Search Train based on below table data and validate search button css <table>", async function (table) {
    await trainAction.getTrainDetails(table);
    await trainAction.clickMoreSearchOption();
    await cssAction.cssSearchBtn();
    await airAction.clickSearch();
});
step("Search Hotel based on below table data and validate search button css <table>", async function (table) {
    await hotelAction.getHotelDetails(table);
    await cssAction.cssSearchBtn();
    await airAction.clickSearch();
});

step("Search filtered flight based on below table data and validate css class <table>", async function (table) {
    await airAction.getFilterDetails(table);
    await airAction.validateFlightResult();
    await cssAction.selectDepartureFlightPage(); 
    await cssAction.selectReturnFlightPage();
    await airAction.selectFlights();
});

step("Validate trip review css value", async function () {
    await cssAction.tripReviewcss();
});

step("Enter Trip Name and validate css", async function () {
    await helper.waitForSpinner();
    await commonAction.enterTripName();
    await cssAction.purchasePagecss();
});

step("Click Continue on Travel Acknowledgment and Validate css", async function () {
    await commonAction.travelerAcknowledgement();
    await cssAction.TSAcss();
});
step("Validate details in tripconfirmation page and validate css", async function (){
    await cssAction.tripConfirmationcss();
});

step("Go to reservations and select the recently added trip and validate css", async function (){
    await commonAction.clickReservation();
    await commonAction.clickSearch();
    await commonAction.searchTripName();
    await commonAction.clickApply();
    await commonAction.selectTrip();
    await cssAction.reservationscss();
});

step("Validate details in tripCancellation page and validate css", async function (){
    await cssAction.tripCancellationcss();
});