"use strict";
const trainAction = require("../train_Only/train_actions.js");
const airAction = require("../air_only/air_actions.js");
const commonAction = require("../common/common_actions");
const helper = require("../helpers/helper.js");

step("Search train based on below table data <table>", async function (table) {
    await trainAction.clickMoreSearchOption();
    await trainAction.getTrainDetails(table);
    await airAction.clickSearch();
});

step("Select train with its information", async function () {
    let PageTitle = helper.allPageTitle()
    await commonAction.validatePageTitle("Select Departure Train");
    await trainAction.departPageTrainInfo();
    await trainAction.clickSelectTrain();
    await commonAction.validatePageTitle("Select Return Train")
    await trainAction.returnPageTrainInfo();
    await trainAction.clickSelectTrain();
    // await commonAciton.priceIncreaseAlert();
});

step("Click class and select <arg0>", async function (arg0) {
    switch (classType) {
        case "Coach":
           await trainAction.clickClassButton();
            break;
        case "Business":
           // await airAction.clickAddFlight();
            break;
        default:
            break;
    }
});

step("Select Departure Train", async function () {
    await trainAction.departPageTrainInfo();
    await trainAction.clickSelectTrain();
});

step("Select Return Train", async function () {
    await trainAction.returnPageTrainInfo();
    await trainAction.clickSelectTrain();
});

step("Click more train based on below table data <table>", async function (table) {
    await trainAction.getTrainDetails(table);
    await airAction.clickSearchForMoreTrains();
});

//Sanity 
step("Select departure and return train", async function () {
    await helper.waitForSpinner();
    await trainAction.clickSelectTrain();
    await helper.waitForSpinner();
    await trainAction.clickSelectTrain();
});