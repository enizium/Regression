"use strict";
const assert = require('assert');
const { tableCell, waitFor } = require('taiko');
const hotelAction = require('./hotel_actions.js');
const helper = require("../helpers/helper.js");
const airAction = require('../air_only/air_actions.js');
const carActions = require("../car_only/car_actions.js");


step("Search Hotel based on below table data and Reference point <table>", async function (table) {
    //Search Hotel based on below table data and reference point 
    await hotelAction.getHotelDetails(table);
    await hotelAction.referencePoint(table);
    await hotelAction.clickSearch();
});

step("Validate Reference point", async function (){
    await hotelAction.validateRefPoint()
})

step("Search Hotel based on below table data <table>", async function (table) {
    await hotelAction.getHotelDetails(table);
    await hotelAction.hotelMoreSearchOption();
    await hotelAction.clickSearch();
});


step("Filter search based on below table data and validate the results accordingly <table>", async function (table) {   
    await hotelAction.hotelFilters(table, true, true);    
});

step("Select Hotel based on below table data <table>", async function (table) {
    await hotelAction.hotelSelection(table);    
});

step("Select <option> in hotel alignment pop up", async function (option) {
    switch(option){
        case "Remove Last Night":
            await hotelAction.selectRemoveLastNight()
            break;
        case "Add Extra Night":
            await hotelAction.selectAddExtraNight()
            break;
        case "Continue with original selection":
            await hotelAction.selectContinueWithOriginalSelection()
            break;
        case "Continue without this hotel":
            await hotelAction.selectContinueWithoutThisHotel()
            break;
    }
    await hotelAction.clickContinueButtonInHotelAlignment()
    console.log('Selected '+ option + ' in hotel alignment pop up')
});


step("Validate First Hotel Name in hotel page", async function () {
    await hotelAction.validateFirstHotelName()
});

step("Filter Hotel based on below table data <table>", async function (table) {
    await hotelAction.hotelFilters(table);    
});

step("Search Multiple Hotel based on below table data <table>", async function (table) {
    await hotelAction.fillHotelDetails(table)
    await hotelAction.clickSearch();
});

step("Select Multi Hotel and Room based on below table data <table>", async function (table) {
    await hotelAction.selectMultiHotelAndRoom(table)
});

step("Search Multiple Hotel and Air based on below table data <table>", async function (table) {
    await airAction.getFlightDetails(table);
    await hotelAction.fillHotelDetails(table)
    await hotelAction.clickSearch();
});

step("Search Multiple Hotel and Car based on below table data <table>", async function (table) {
    await carActions.getCarRentalDetails(table);
    await hotelAction.fillHotelDetails(table)
    await hotelAction.clickSearch();
});
step("Search Multiple Hotel, Air and Car based on below table data <table>", async function (table) {
    await airAction.getFlightDetails(table);
    await hotelAction.fillHotelDetails(table);
    await hotelAction.clickSearch();
});

//amadeus will remove after bug fix
step("Search Hotels based on below table data <table>", async function (table) {
    await hotelAction.getHotelDetails(table);
    await hotelAction.HotelCheckbox();
    await hotelAction.clickSearch();
});

step("Type in loyalty number for Hotel as <failme>", async function(failme) {
	await hotelAction.enterHotelLoyalityNumer(failme)
});

step("Validate messages after hotel booking is failed", async function() {
   await hotelAction.validateMessagesInTripConfirmation();
});

step("CLick on differnt hotel in same vicinty", async function() {
    await hotelAction.bookAgainTheFailedHotelTrip();
});
step("Verify the new layout after hotel faliure", async function () {
    await hotelAction.validateNewLayoutAfterHotelFaliure();   
});
step("Verify the dates and location are populated", async function() {
	await hotelAction.verifyTheDatesAndLocation();
});

step("Select match my hotel dates and search again", async function() {
    await hotelAction.selectMatchHotel();
    await hotelAction.clickSearch();
});

step("Click Search button", async function() {
    await hotelAction.clickSearch();
});