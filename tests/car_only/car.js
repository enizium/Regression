"use strict";
const carActions = require("../car_only/car_actions.js");
const carRetalPo = require("../Locators/car_rental_po.js");
const commonAction = require('../common/common_actions.js');
const assert = require("assert");
const reservation = require('../Locators/reservation_po.js');
const helper = require("../helpers/helper");
const { hover, evaluate, $, click, scrollTo, waitFor, press } = require("taiko");

step("Select car rental vendor as <vendorType> and type as <carType>",async function (vendorType, carType) {
    console.log("Select Car rental vendor as " + vendorType + " and type as" + carType);
    await waitFor(async () => await $(`${carRetalPo.suvTab()}`).exists(), process.env.test_timeout);
    await carActions.clickSUVTab();
    // switch (vendorType) {
    // 	case "Hertz":
    // 		await carActions.selectBrand(vendorType);
    // 		break;
    // 	case "Enterprise":
    // 		await hover($(`//div[@id="vendor_CAR_VET"]`));
    // 		await evaluate($(`//div[@id="vendor_CAR_VET"]`), (elem) => { return elem.click() });
    // 		break;
    // 	case "Budget":
    // 		await hover($(`//div[@id="vendor_CAR_VZD"]`));
    // 		await evaluate($(`//div[@id="vendor_CAR_VZD"]`), (elem) => { return elem.click() });
    // 		break;
    // 	default:
    // 		break;
    // }
  }
);
step("Retrieve selected car info and click on <arg0> button", async function (arg0) {
    let segmentLength = 1;
    let searchType = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("tripDetails") : gauge.dataStore.scenarioStore.get("tripDetails");
    if (process.env.environment !== "ehistage3" && searchType !=null && searchType.TripType === "MD") {
      segmentLength = gauge.dataStore.scenarioStore.get("segmentLength");
    }
    for (let i = 0; i < segmentLength; i++) {
      await carActions.getCarDetailsInResultPage(i);
      await carActions.clickCarSelectButton();
    }
  }
);

step("Select Class as <className>", async function (className) {
  await carActions.selectClass(className);
});

step("Select car type as <arg0>", async function (carType) {
  await helper.waitForLoaderSvg();
  await helper.waitForWalkmePlayer();
  await waitFor(5000);
  switch (carType) {
    case "SUV":
      await carActions.clickSUVTab();
      break;
    case "CAR":
      await carActions.clickCARTab();
      break;
    case "VAN":
      await carActions.clickVANTab();
      break;
    default:
      break;
  }
});

step("Select car rental vendor as <brand>", async function (brand) {
  await carActions.filterBrand(brand);
});
step(
  "Search MultiDestination car based on below table data <arg0>",
  async function (table) {
    await carActions.getMultiDestinationCarDetails(table);
    await carActions.searchButton();
  }
);

step("Select car options as <options>", async function (optionType) {
  await carActions.filterOptions(optionType);
});

step("Refine Your Search from below table <table>", async function (tableData) {
  await carActions.refineYourSearch(tableData);
});

step("Search Car Rental based on below table data <table>",async function (table) {
    await waitFor(5000);
    await carActions.getCarRentalDetails(table);
    await carActions.searchButton();
  }
);

step("Search Car Rental based on below table <table>",async function (table) {
  await waitFor(5000);
  await carActions.getCarRentalDetails(table);
  await carActions.searchButtons();
}
);


step("Select car vendor", async function() {
  await carActions.selectCarVendor();
});

step("Click <arg0>", async function (arg0) {
  await carActions.clickChange();
  await waitFor(3000);
});

step("Search Car Services based on below table data <detailsTable>", async function (detailsTable) {
  await helper.waitForSpinner();
  await carActions.fillRequiredCarServiceDetails(detailsTable);
});

step("Retrive car service details for <provider> provider", async function(provider) {
  await carActions.getCarServiceDetails(provider);
});

step("Verify details in <page> carservice page", async function(page) {
  await carActions.verifyCarServiceDetails(page);
});

step("Validate car service details in <arg0> page", async function(arg0) {
  await carActions.validateCarServiceDetails(arg0);
});

step("<arg0> car service booking", async function (arg0) {
  let flag = true; 
  gauge.dataStore.scenarioStore.put("changeFlag",flag);
  await click($(`${reservation.clickChangeTrip()}`));
  await waitFor(5000)
  await commonAction.clickContinueChange();
});

step("Validate car service details in change link", async function() {
  await carActions.validationCarServiceDetails();
});

step("Click vehicle Type filter and select <arg0> car", async function(carType) {
	await carActions.selctVehicleType();
  await carActions.selctCarType(carType)
});

step("Select the SUV car", async function() {
	await carActions.clickSUVSelectButton();
});
step("Prechange trip for car service", async function () {
  let flag = true;
  gauge.dataStore.scenarioStore.put("changeFlag", flag);
  await commonAction.clickonPreChange();
});

step("Select <carService> payment card for car as <cardName>", async function(carService,cardName) {
	await commonAction.selectCarServicePaymentByIndex(carService,cardName)
});


step("Enter Card payment details for <arg0>", async function(cardType) {
  await commonAction.otfopInfo(cardType);
});

step("Select DropOff Address as <DropOffLocationType>", async function(DropOffLocationType) {
  switch (DropOffLocationType) {
    case "Drive as directed...":
         await carActions.selectDropOffAddressOption(1);
         break;
    case "Multiple Day (Country Specific)":
          await carActions.selectDropOffAddressOption(2);
          break;
    default:
         break;
}
});

step("Verify details in <page> carservice page for DropOff Address Options", async function(page) {
  await carActions.verifyCarServiceDetailsForDropOffAddressOptions(page);
});
step("Add car service from RTP Page", async function () {
  let newServiceFlag = true;
  gauge.dataStore.scenarioStore.put("newServiceFlag", newServiceFlag);
  await carActions.addCarServiceFromRTP();
});

step("Select all segment from Car Services", async function () {
  let addCarServiceFromReservationFlag = true;
  gauge.dataStore.scenarioStore.put("addCarServiceFromReservationFlag", addCarServiceFromReservationFlag);
	 await carActions.selectAllSegments();
});

step("Retrive car pickUp service details for <provider> provider", async function(provider) {
	await carActions.selectPickUpCarService(provider);
});

step("Retrive car dropOff service details for <provider> provider", async function(provider) {
	await carActions.selectDropOffCarService(provider);
});

step("Verify details in <arg0> car service page", async function(arg0) {
	await carActions.tripReviewValidation();
	 await carActions.selectAllSegments();
});

step("Retrive multiple carservice and click select for <provider> provider", async function(provider) {
  await carActions.retriveAndSelctCar(provider);
});

step("Verify details in <pageName> for multiple carservice", async function (pageName) {
  await helper.waitForSpinner();
  await helper.waitForWalkmePlayer();
	await carActions.verifyMultipleCarServiceInReviewPage(pageName)
});

step("Validate car service details in <pageName> page for multiple carservice", async function(pageName) {
  await carActions.validateMultipleCarServiceDetails(pageName);
});

step("Select last segment from Car Services", async function() {
	await carActions.selectLastSegment();
});

step("Search last Services based on below table data <arg0>", async function(table) {
	await carActions.sendKeysDropOffAddress(table);
  await carActions.clickFlightNumber()
});

step("Search first Services based on below table data <arg0>", async function(table) {
	await carActions.sendKeysPickUpAddress(table);
});

step("Click continue button for car service", async function() {
	await carActions.clickContinueButton();
});

step("Verify details in <arg0> page for car service", async function(arg0) {
  await helper.waitForSpinner();
  await helper.waitForWalkmePlayer();
	await carActions.validateCarDetailsTripReview();
});

step("Click Continue button on trip Review page", async function() {
	await carActions.clickContinueTripReview();
});