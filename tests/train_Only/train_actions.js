"use strict";

const { click, $, evaluate, waitFor, write, scrollTo, dropDown, text } = require("taiko");
const assert = require("assert");
const tripPlanner = require("../Locators/tripPlanner_po")
const departTrainPage = require("../Locators/select_Departure_Train_po.js");
const carAction = require("../car_only/car_actions")
const hotelPage = require("../Locators/hotel_po.js");
const helper = require("../helpers/helper.js");
const returnTrainPage = require("../Locators/select_Return_Train_po.js");
const common_actions = require("../common/common_actions.js");

exports.clickAddTrain = async () => await click($(`${tripPlanner.trainSegment()}`));
exports.clickMoreSearchOption = async () => await evaluate($(tripPlanner.moreSearchOptionTrain()), (elem) => {return elem.click()});
exports.enterTrainDeparture = async () => await write($(`${tripPlanner.trainDeparture()}`));
exports.enterTrainDestination = async () => await write($(`${tripPlanner.trainDestination()}`));
exports.enterTrainDepartureDate = async () => await write($(`${tripPlanner.trainDepartureDate()}`));
exports.enterTrainDestinationDate = async () => await write($(`${tripPlanner.trainReturnDate()}`));
exports.getTrainDetails = async (table) => {
    let headerValue;
    let dataEntry;
    let trainDetails = {};
    let tripType;
    let departureDate;
    let returnDate;

    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });

    for (var i = 0; i < headerValue.length; i++) {
        switch (headerValue[i]) {
            case 'Departure':
                await click($(`${tripPlanner.trainDeparture()}`));
                await write(`${dataEntry[headerValue[i]]}`, $(`${tripPlanner.trainDeparture()}`));
                break;
            case 'Destination':
                await write(`${dataEntry[headerValue[i]]}`, $(`${tripPlanner.trainDestination()}`));
                break;
            case 'BookingAfterXDays':
                departureDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]));
                returnDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]) + 4);
                tripType === "RT" ? await this.enterTrainDepartureReturnDate(departureDate, returnDate) : await this.enterTrainDepartureDate(returnDate);
                break;
            case 'TripType':
                tripType = dataEntry[headerValue[i]];
                tripType === "RT" ? console.log("Round Trip") :
                    await click($(`#toggleAirOneWay`), { waitForNavigation: true })
                break;
            case 'ClassType':
                await dropDown({ id: 'railClassBoth0' }).select(`${dataEntry[headerValue[i]]}`);
                break;
        }
        trainDetails[headerValue[i]] = dataEntry[headerValue[i]];
        gauge.dataStore.scenarioStore.put("tripDetails", trainDetails);
        console.log("tripDetails:", trainDetails)
    }
    await carAction.enterCarLocation(table);
}

exports.enterTrainDepartureReturnDate = async (departureDate, returnDate) => {
    await click($(`${tripPlanner.trainDepartureDate()}`));
    await write(departureDate, $(tripPlanner.trainDepartureDate()))
    await write(returnDate, $(tripPlanner.trainReturnDate()))
}

exports.enterTrainDepartureDate = async (departureDate) => {
    await click($(`${tripPlanner.trainDepartureDate()}`));
    await write(departureDate, $(tripPlanner.trainDepartureDate()))

}


exports.departPageTrainInfo = async () => {
    let departTrainDetails = {};
    let departureTrainName;
    let departPageTrainArrivalTime;
    departureTrainName = await this.trainDepartPageTrainName(1);
    gauge.dataStore.scenarioStore.put("transfer",departureTrainName);
    departureTrainName.includes("Transfer") && (await this.clickViewStops(), departureTrainName = await this.trainDepartPageTrainName(2));
    let departPageTrainDepartDate = await this.trainDepartPageDepartDate();
    let departPageTrainArrivalDate = await this.trainDepartPageArrivalDate();
    let departPageTrainDepartTime = await this.trainDepartPageDepartTime();
    departPageTrainArrivalTime =await this.trainDepartPageArrivalTime(2)
    let departPageTrainFare = await this.trainDepartPageFare();
    departTrainDetails.departureTrainName = departureTrainName;
    departTrainDetails.departPageTrainDepartDate = departPageTrainDepartDate;
    departTrainDetails.departPageTrainArrivalDate = departPageTrainArrivalDate;
    departTrainDetails.departPageTrainDepartTime = departPageTrainDepartTime;
    departTrainDetails.departPageTrainArrivalTime = departPageTrainArrivalTime;
    departTrainDetails.departPageTrainFare = departPageTrainFare;
    gauge.dataStore.scenarioStore.put("departTrainDetails", departTrainDetails);
    console.log(departTrainDetails);
}

exports.returnPageTrainInfo = async () => {
    await helper.waitForSpinner();
    let returnTrainDetails = {};
    let returnTrainName = await this.trainDepartPageTrainName(1);
    let returnPageTrainDepartDate = await this.trainReturnDepartDate();
    let returnPageTrainArrivalDate = await this.trainReturnArrivalDate();
    let returnPageTrainDepartTime = await this.trainDepartPageDepartTime();
    let returnPageTrainArrivalTime = await this.trainDepartPageArrivalTime(2);
    let returnPageTrainFare = await this.trainDepartPageFare();
    returnTrainDetails.returnTrainName = returnTrainName;
    returnTrainDetails.returnPageTrainDepartDate = returnPageTrainDepartDate;
    returnTrainDetails.returnPageTrainArrivalDate = returnPageTrainArrivalDate;
    returnTrainDetails.returnPageTrainDepartTime = returnPageTrainDepartTime;
    returnTrainDetails.returnPageTrainArrivalTime = returnPageTrainArrivalTime;
    returnTrainDetails.returnPageTrainFare = returnPageTrainFare;
    gauge.dataStore.scenarioStore.put("returnTrainDetails", returnTrainDetails);
    console.log(returnTrainDetails);
}


exports.reviewPageTrainInfo = async (validateType) => {
    switch(validateType){
        case "post trip confirmation":
        case "post trip cancellation":
        case "post trip review":
            let trainNotAvailable = "Train - could not be added at this time";
            let trainCouldNotBeUpdate = "Train - could not be canceled at this time and is still confirmed";
            if (text(trainNotAvailable).exists() || text(trainCouldNotBeUpdate).exists()){
                console.log("train not available or cannot be updated");
            }else{
                await common_actions.trainOnlyValidation(validateType);
            }
            break;
        default:
            await common_actions.trainOnlyValidation(validateType);
            break;
    }
}

exports.clickSelectTrain = async () => {
    await click($(`${departTrainPage.selectButton()}`));
}
exports.clickClassButton = async () => {
    await click($(`${departTrainPage.classButton()}`));
}
exports.clickCoach = async () => {
    await click($(`${departTrainPage.classCoach()}`));
}
exports.trainDepartPageTrainName = async (index) => {
    return await ($(`${departTrainPage.trainNameLoc(index)}`)).text();
}
exports.clickViewStops = async () => {
   return await click($(`${departTrainPage.viewStops()}`));
}

exports.trainDepartPageDepartDate = async () => {
    return await ($(`${departTrainPage.trainDepartDateLoc()}`)).text();
}
exports.trainDepartPageArrivalDate = async () => {
    return await ($(`${departTrainPage.trainArrivalDateLoc()}`)).text();
}
exports.trainDepartPageDepartTime = async () => {
    return await $(`${departTrainPage.departFromTime()}`).text();
}
exports.trainDepartPageArrivalTime = async (index) => {
    return await $(`${departTrainPage.departToTime(index)}`).text();
}
exports.trainDepartPageFare = async () => {
    let trainDepartPageFare = await $(`${departTrainPage.trainDepartPageFareLoc()}`).text();
    return trainDepartPageFare.replace(/[^0-9]/g,'');
}
exports.trainReturnDepartDate = async () => {
    return await $(`${returnTrainPage.trainReturnDepartDateLoc()}`).text();
}
exports.trainReturnArrivalDate = async () => {
    return await $(`${returnTrainPage.trainReturnArrivalDateLoc()}`).text();
}