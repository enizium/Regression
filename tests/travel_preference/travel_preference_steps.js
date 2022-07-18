"use strict";
const travelPreference = require('./travel_preference_action');
const commonAction = require('../common/common_actions');

step("Navigate to travel preferences page", async () => {
  await travelPreference.goToTravelPeference();
});
 
step("Select special requests <args> Prefereces based on below table data <table>", async function(args, table) {
  await travelPreference.selectSpecialRequestPreference(args, table)
  await travelPreference.goToTripPlanner()
})

step("Validate Home Airport and Preferred Fare Type in Trip planner page", async () => {
  await travelPreference.validateHomeAirport();
  await travelPreference.validatePreferredFareType();
});

step("Validate <ags> Special Request and Membership in Purchase page", async function (args) {
  await travelPreference.validateSpecialRequestPreference(args); 
});

step("Clear <args> all Preference data", async function (args) {
  await travelPreference.clearAllPreference(args); 
});

step("Validate Home Train Station in Trip planner page", async () => {
  await travelPreference.validateHomeTrainStation();
});

step("Validate Special Request in Purchase page from below table data <table>", async function (tableData) {
  await travelPreference.getTravelPeferenceData(tableData)
  await travelPreference.validateSpecialRequest()
});

step("Validate Loyalty Membership in Purchase page", async function () {
  await travelPreference.validateLoyalityMembership()
});

step("Change Loyalty Membership in Purchase page based on below table data <table>", async function (table) {
  await travelPreference.changeLoyalityMembership(table)
});

step("Clear Loyality Membership data", async function () {
  await travelPreference.clearLoyalityMembership()
});

step("Clear Special Request data", async function () {
  await travelPreference.clearSpeicalRequest()
});

step("Read <args> PNR XML file", async function(args){
  await travelPreference.readXMLFile(args)
})

step("Valiate Loyality Member in PNR XML", async function() {
  await travelPreference.validateLoyalityInPNR()
});

step("Click on Preference and Rewards Programs Edit link", async () => {
  await travelPreference.clickPreferenceAndRewardsProgramsEdit()
})

step ("Change travel preference in purhcase page based on below table data <table>", async (table) =>{
  await travelPreference.changeTravelPreference(table)
})

step ("Validate change in travel preference made from purchase page", async () =>{
  await travelPreference.validateChangeTravelPreference()
})

step("Valiate Special Request in PNR XML", async function() {
  await travelPreference.validateSpecailRequestInPNR()
});

step("Validate Special Request in Purchase page", async function () {
  await travelPreference.validateSpecailRequest()
});

step("Validate cost allocation in PNR XML file", async function () {
  await travelPreference.validateCostAllocationInPNRXML();
});

step("Clear <args> Travel preference", async function (args) {
  await travelPreference.clearTravelPreference(args)
});

step("Validate Cost Allocation in <arg0>", async function(arg0) {
  switch(arg0){
      case "purchase page":
          await commonAction.validateCostAllocation()
          break;
      case "PNR XML":
          await travelPreference.validateCostAllocationInPNR()
          break;
      default:
          break;
  }
  });

step("Validate Custom Fields in PNR XML", async function() {
  await travelPreference.validateCustomFieldsInPNR()
});

step("Validate <args0> Cost Allocation in PNR XML", async function(splitType) {
  await travelPreference.validateSplitCostAllocationInPNR(splitType)
});

step("Validate pre trip approval in PNR XML", async function() {
  await travelPreference.validatePreTripApprovalInPNR()
});

step("<action> payment card", async function(action) {
  await travelPreference.paymentCard(action)
});

step("Navigate to Account page", async () => {
  await travelPreference.goToAccountPage();
});

step("<action> Passport details", async function(action) {
  await travelPreference.passport(action);
});

step("<action> Visa details", async function(action) {
  await travelPreference.visa(action);
});

step("<action> National Id Card details", async function(action) {
  await travelPreference.nationalIdCard(action);
});

step("Edit <arg0> Information", async function(arg0) {
  await travelPreference.userDetails(arg0)
});

step("<arg0> Delegate", async function(arg0) {
  await travelPreference.delegates(arg0);
});

step("Select user title as <title>", async function(title) {
  await travelPreference.selectUserTitle(title);
  await travelPreference.goToTripPlanner()
});

step("Enter <arg0> as hotel loyalty number", async function (arg0) {
  await travelPreference.changeHotelLoyaltyNumber(arg0)
});

step("Validate hotel failed in <page> page", async function(page) {
  await travelPreference.validateFailedHotel(page)
});

step("Valiate <arg0> in PNR XML", async function(arg0) {
 switch(arg0) {
   case "Title and Gender":{
    await travelPreference.validateTitleAndGenderInPNR()
   }
 }
});

step("Enter <arg0> on both as hotel as loyalty number", async function (arg0) {
  let bothFailHotel = true;
	await travelPreference.changeHotelLoyaltyNumber(arg0,bothFailHotel)
});