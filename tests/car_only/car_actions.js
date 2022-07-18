"use strict";

const { click, $, waitFor, scrollTo, evaluate,write,clear,textBox, hover, checkBox, focus, dropDown, press} = require("taiko");
const tripPlanner = require("../Locators/tripPlanner_po")
const carRental = require("../Locators/car_rental_po")
const helper = require("../helpers/helper");
const carActions = require("../car_only/car_actions.js");
const assert = require("assert");
const tripReviewPage = require('../Locators/tripReviewPage_po.js');
const tripConfirmationPage_po = require('../Locators/tripConfirmation_po');
const tripPlannerCarService = require("../Locators/car_services_po");
const carServicePo = require('../Locators/car_services_po.js');
const commonAction = require('../common/common_actions');
const chai = require('chai');
const { Assertion } = require("chai");
var expect = chai.expect
let carServiceIndex;


exports.clickAddCar = async () => await click($(`${tripPlanner.carSegment()}`));
exports.selectHertz = async () => await click($(`${carRental.hertz()}`));
exports.selectEnterprise = async () => await click($(`${carRental.enterprise()}`));
exports.selectBudget = async () => await click($(`${carRental.budget()}`));

//Getting Car details
exports.getCarrierName = async () => await $(`${carRental.carrierName()}`);
exports.getCarDetails = async () => await $(`${carRental.carDetails()}`);
exports.getUserCount = async () => await $(`${carRental.userCount()}`);
exports.getCarFare = async () => await $(`${carRental.carFare()}`);
exports.getPickUpTime = async () => await $(`${carRental.pickUpTime()}`);
exports.getDropOffTime = async () => await $(`${carRental.dropOffTime()}`);

exports.clickCarSelectButton = async () => {
    await evaluate($(`${carRental.selectButton()}`), (elem) => { return elem.click() });
}

exports.clickSUVTab = async () => {
	await evaluate($(`${carRental.suvTab()}`), (elem) => { return elem.click() });
	await waitFor(5000);
}
exports.clickCARTab = async () => {
	await evaluate($(`${carRental.carTab()}`), (elem) => { return elem.click() });
	await waitFor(5000);
}
exports.clickVANTab = async() => {
    await evaluate($(`${carRental.vanTab()}`), (elem) => { return elem.click() });
	await waitFor(5000);
}
exports.clickHertzTab = async () => await click($(`${carRental.hertzTab()}`));
exports.clickSelectButtonForCarRental = async () => click($(`${carRental.selectButtonCarRental()}`));

exports.waitForSUVTab = async () => await waitFor(async () => (await $(`${carRental.suvTab()}`).exists()));
exports.waitForHertzCar = async () => await waitFor(async () => (await $(`${carRental.hertzCar()}`).exists()));

exports.getSelectedCarInfo = async (index) => {
    let selectedCarInfo = {};

    let carrierName = await $(`//div[@itemindex="0"]//span[@class="carrier-name"]`).text();
    let carDetails = await $(`(//div[@itemindex="0"]//span[@class="car-detail"])[1]`).text();
    let userCount = await $(`//div[@itemindex="0"]//span[@class="userCount"]`).text();
    let carFare = await ($(`//div[@itemindex="0"]//div[@class="estimatedCost"]/span[@class="price"]`)).text();
    let pickupTime = await ($(`//div[@itemindex="0"]//div[@class="sectionLowerResult1Content"]//span[@class="resultContentTime"]`)).text();
    let dropOffTime = await ($(`//div[@itemindex="0"]//div[contains(@class,"sectionLowerResult2")]//span[@class="resultContentTime"]`)).text();

    selectedCarInfo.carrierName = carrierName;
    selectedCarInfo.carDetails = carDetails;
    selectedCarInfo.userCount = userCount;
    selectedCarInfo.carFare = carFare;
    selectedCarInfo.pickupTime = pickupTime;
    selectedCarInfo.dropOffTime = dropOffTime;

    index == 0 ? gauge.dataStore.scenarioStore.put("selectedCarInfo0", selectedCarInfo) :
        gauge.dataStore.scenarioStore.put(`selectedCarInfo${index}`, selectedCarInfo)
    console.log(`${index} car selection : : : `, selectedCarInfo);
}

exports.searchButton = async () => {
    await hover($(`${tripPlanner.searchButton()}`));
    await evaluate($(`${tripPlanner.searchButton()}`), (elem) => { return elem.click() });
}

exports.filterBrand = async (brand) =>{
    await helper.waitForLoaderSvg();
    await waitFor(5000)
    await evaluate($(`${carRental.brandFilter()}`), (elem) => { return elem.click() });
    await evaluate($(`${carRental.selectBrand(brand)}`), (elem) => { return elem.click() });
    await helper.waitForLoaderSvg();
    await waitFor(async () => (await $(`${carRental.carRentalResults()}`).exists())); 
}

exports.clickSelectButton = async () => {
    if (await $(`${carRental.hertzCar()}`).exists()) {
        await scrollTo($(`#reserve_1`));
        await click($(`#reserve_1`), { waitForEvents: ['loadEventFired'] });
    }
}

exports.reviewPageCarInfo = async (validateType) => {
    let searchType = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get(`tripDetails`) : gauge.dataStore.scenarioStore.get(`tripDetails`);
    switch (searchType !==null && (searchType.TripType)) {
        case "RT":
            await this.validateCarDetailsRT(validateType);
            break;
        case "MD":
           await  this.validateCarDetailsMD(validateType);
            break;
        default:
            await this.validateCarDetailsRT(validateType);
            break;
    }
}
exports.validateCarDetailsRT = async (validateType) => {
    switch (validateType) {
        case "trip review":
            await this.getCarRentalDetailsInReviewPage();
            break;
        case "trip confirmation":
        case "trip cancellation":
            await this.getCarRentalDetailsInTripConfirmationPage();
         break;
    }
    //Validation
    await this.validateCarRentalName(validateType);
    await this.validateCarPicUpTime(validateType);
    await this.validateCarDropOffTime(validateType);
    //await this.validateCarTotalCost(validateType);
    await this.validateCarFromDate(validateType);
    await this.validateCarToDate(validateType);  
}
exports.validateCarDetailsInTCPage = async (validateType) => {
    await this.getCarRentalDetailsInTripConfirmationPage();
}

exports.getCarDetailsInResultPage = async (segment) => {
    let carDetailsResultPage = {};
    let names = ["Name", "PickUpTime", "DropOffTime", "TotalCost", "FromDate", "ToDate"];
    for (let i = 0; i < names.length; i++) {
        let propertyName = "car"+names[i]+"ResultPage";
        carDetailsResultPage[propertyName] = await this[propertyName]();
    }
    if (segment == 1){
        gauge.dataStore.scenarioStore.put("carDetailsResultPage1", carDetailsResultPage);
        console.log(`carDetailsResultPage1:`, gauge.dataStore.scenarioStore.get("carDetailsResultPage1"))
    }
    else {
        process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("carDetailsResultPage", carDetailsResultPage) : gauge.dataStore.scenarioStore.put("carDetailsResultPage", carDetailsResultPage);
        gauge.dataStore.scenarioStore.put("carDetailsResultPage0", carDetailsResultPage)
        console.log(carDetailsResultPage)
    }
}

exports.getCarRentalDetailsInReviewPage = async () => {
    let carDetailsTripReviewPage = {};
    let names = ["Name", "PickUpTime", "DropOffTime", "FromDate", "ToDate"];
    for (let i = 0; i < names.length; i++) {
        let propertyName = "car"+names[i]+"TripReviewPage";
        carDetailsTripReviewPage[propertyName] = await this[propertyName]();
    }
    process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("carDetailsTripReviewPage", carDetailsTripReviewPage) : gauge.dataStore.scenarioStore.put("carDetailsTripReviewPage", carDetailsTripReviewPage);
    console.log(carDetailsTripReviewPage);
}
exports.getCarRentalDetailsInTripConfirmationPage = async () => {
    let carDetailsTripConfirmationPage = {};
    let names = ["Name", "PickUpTime", "DropOffTime", "FromDate", "ToDate"];
    for (let i = 0; i < names.length; i++) {
        let propertyName = "car"+names[i]+"TripConfirmationPage";
        carDetailsTripConfirmationPage[propertyName] = await this[propertyName]();
        
    }
    process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("carDetailsTripConfirmationPage", carDetailsTripConfirmationPage) : gauge.dataStore.scenarioStore.put("carDetailsTripConfirmationPage", carDetailsTripConfirmationPage);
    console.log(carDetailsTripConfirmationPage);
}
exports.validateCarRentalName = async (validateType) => {
    let carDetailsResultPage = await process.env.gdsName=="amadeus" ? gauge.dataStore.specStore.get("carDetailsResultPage") : gauge.dataStore.scenarioStore.get("carDetailsResultPage");
    let carDetailsTripConfirmationPage = await process.env.gdsName=="amadeus" ? gauge.dataStore.specStore.get("carDetailsTripConfirmationPage") : gauge.dataStore.scenarioStore.get("carDetailsTripConfirmationPage");
    let carDetailsReviewPage = await process.env.gdsName=="amadeus" ? gauge.dataStore.specStore.get("carDetailsTripReviewPage") : gauge.dataStore.scenarioStore.get("carDetailsTripReviewPage");
    
    switch(validateType){
        case "trip review":
            expect(carDetailsResultPage.carNameResultPage).to.contain(carDetailsReviewPage.carNameTripReviewPage,
                `Car Name not matched,Expected :${carDetailsResultPage.carNameResultPage} ,
                Actual:${carDetailsReviewPage.carNameTripReviewPage}`);
            break;
        case "trip confirmation":
        case "trip cancellation":
            expect(carDetailsTripConfirmationPage.carNameTripConfirmationPage).to.contain(carDetailsResultPage.carNameResultPage,
                `Car Name not matched in ${validateType} page : Expected : ${carDetailsTripConfirmationPage.carNameTripConfirmationPage} ,
             Actual:${carDetailsResultPage.carNameResultPage}`);
            break;
        default:
            break;
        }
}
exports.validateCarPicUpTime = async (validateType) => {
    let carDetailsResultPage = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("carDetailsResultPage") : gauge.dataStore.scenarioStore.get("carDetailsResultPage");
    let carDetailsReviewPage = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("carDetailsTripReviewPage") : gauge.dataStore.scenarioStore.get("carDetailsTripReviewPage");
    let carDetailsTripConfirmationPage = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("carDetailsTripConfirmationPage") : gauge.dataStore.scenarioStore.get("carDetailsTripConfirmationPage");
    switch(validateType){
        case "trip review":
            expect(carDetailsResultPage.carPickUpTimeResultPage).to.contain(carDetailsReviewPage.carPickUpTimeTripReviewPage,
                `Car Pick Up time not matched,Expected :${carDetailsResultPage.carPickUpTimeResultPage} ,
                Actual:${carDetailsReviewPage.carPickUpTimeTripReviewPage}`);
            break;
        case "trip confirmation":
        case "trip cancellation":
            expect(carDetailsTripConfirmationPage.carPickUpTimeTripConfirmationPage).to.contain(carDetailsResultPage.carPickUpTimeResultPage,
                `Car Pick Up Time not matched in ${validateType} page : Expected : ${carDetailsTripConfirmationPage.carPickUpTimeResultPage} ,
             Actual:${carDetailsResultPage.carPickUpTimeTripConfirmationPage}`);
            break;
        default:
            break;
        }
}
exports.validateCarDropOffTime = async (validateType) => {
    let carDetailsResultPage = await process.env.gdsName  == "amadeus" ? gauge.dataStore.specStore.get("carDetailsResultPage") : gauge.dataStore.scenarioStore.get("carDetailsResultPage");
    let carDetailsReviewPage = await process.env.gdsName  == "amadeus" ? gauge.dataStore.specStore.get("carDetailsTripReviewPage") : gauge.dataStore.scenarioStore.get("carDetailsTripReviewPage");
    let carDetailsTripConfirmationPage = await process.env.gdsName  == "amadeus" ? gauge.dataStore.specStore.get("carDetailsTripConfirmationPage") : gauge.dataStore.scenarioStore.get("carDetailsTripConfirmationPage");
    switch(validateType){
        case "trip review":
            expect(carDetailsResultPage.carDropOffTimeResultPage).to.contain(carDetailsReviewPage.carDropOffTimeTripReviewPage,
                `Car DropOff Time not matched,Expected :${carDetailsResultPage.carDropOffTimeResultPage} ,
                Actual:${carDetailsReviewPage.carDropOffTimeTripReviewPage}`);
            break;
        case "trip confirmation":
        case "trip cancellation":
            expect(carDetailsTripConfirmationPage.carDropOffTimeTripConfirmationPage).to.contain(carDetailsResultPage.carDropOffTimeResultPage,
                `Car Drop Off Time not matched in ${validateType} page : Expected : ${carDetailsTripConfirmationPage.carDropOffTimeResultPage} ,
             Actual:${carDetailsResultPage.carDropOffTimeTripConfirmationPage}`);
            break;
        default:
            break;
        }
}

exports.validateCarFromDate = async (validateType) => {
    let carDetailsResultPage = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("carDetailsResultPage") : gauge.dataStore.scenarioStore.get("carDetailsResultPage");
    let carDetailsReviewPage = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("carDetailsTripReviewPage") : gauge.dataStore.scenarioStore.get("carDetailsTripReviewPage");
    let carDetailsTripConfirmationPage = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("carDetailsTripConfirmationPage") : gauge.dataStore.scenarioStore.get("carDetailsTripConfirmationPage");
    switch(validateType){
        case "trip review":
            expect(carDetailsReviewPage.carFromDateTripReviewPage).to.contain(carDetailsResultPage.carFromDateResultPage.split("\n")[0].toUpperCase(),
                `Car From Date not matched, Expected :${carDetailsResultPage.carFromDateResultPage} ,
                Actual:${carDetailsReviewPage.carFromDateTripReviewPage}`);
            break;
        case "trip confirmation":
        case "trip cancellation":
            expect(carDetailsTripConfirmationPage.carFromDateTripConfirmationPage).to.contain(carDetailsResultPage.carFromDateResultPage.split("\n")[0],
                `Car From Date not matched in :: ${validateType} page : Expected : ${carDetailsResultPage.carFromDateResultPage} ,
             Actual:${carDetailsTripConfirmationPage.carFromDateTripConfirmationPage}`);
            break;
        default:
            break;
        }
}
exports.validateCarToDate = async (validateType) => {
    let carDetailsResultPage = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("carDetailsResultPage") : gauge.dataStore.scenarioStore.get("carDetailsResultPage");
    let carDetailsReviewPage = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("carDetailsTripReviewPage") : gauge.dataStore.scenarioStore.get("carDetailsTripReviewPage");
    let carDetailsTripConfirmationPage = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("carDetailsTripConfirmationPage") : gauge.dataStore.scenarioStore.get("carDetailsTripConfirmationPage");
    switch(validateType){
        case "trip review":
            expect(carDetailsReviewPage.carToDateTripReviewPage).to.contain(carDetailsResultPage.carToDateResultPage.split("\n")[0].toUpperCase(),
                `Car To Date not matched,Expected :${carDetailsResultPage.carToDateResultPage} ,
                Actual:${carDetailsReviewPage.carToDateTripReviewPage}`);
            break;
        case "trip confirmation":
        case "trip cancellation":
            expect(carDetailsTripConfirmationPage.carToDateTripConfirmationPage).to.contain(carDetailsResultPage.carToDateResultPage.split("\n")[0],
            `Car To Date not matched in :: ${validateType} page : Expected : ${carDetailsResultPage.carToDateResultPage} ,
         Actual:${carDetailsTripConfirmationPage.carToDateTripConfirmationPage}`);
            break;
        default:
            break;
        }
}

exports.selectBrand = async (brand) => {
    await waitFor(async () => (await $(`${carRental.carAgencyFilter()}`).exists()), process.env.test_timeout);
    await evaluate($(`${carRental.carAgencyFilter()}`), (elem) => { return elem.click() });
    let brandList = await $(carRental.brandList()).elements().then(ele => (ele.length));
    for (let i = 1; i <= brandList; i++) {
        let brandName = await $(`${carRental.brandList()}[${i}]`).text();
        if (brandName.trim() === brand) {
            await click($(`${carRental.brandList()}[${i}]`));
            break;
        }
    }

}

exports.clickAddCarFromTripReview = async () => {
	await helper.waitForSpinner();
    while(await waitFor(async () => (await $(`${carRental.AddCarFromTripReview()}`).exists()), process.env.test_timeout)){
        waitFor(6000);
    }
    await click($(`${carRental.AddCarFromTripReview()}`));
}
exports.getCarRentalDetails = async (table) => {
    let headerValue;
    let dataEntry;
    let carRentalDetails = {};
    let pickupdate;
    let dropdate;

    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });

    for (var i = 0; i < headerValue.length; i++) {
        switch (headerValue[i]) {
            case 'PickUpLocation':
                await write(`${dataEntry[headerValue[i]]}`, $(`${tripPlanner.pickup()}`));
                break;
            case 'DropOffLocation':
                await click($(`${tripPlanner.dropoff()}`))
                await waitFor(1000)
                await clear(textBox({ id: "carDropoffSearchString0" }));
                await write(`${dataEntry[headerValue[i]]}`, $(`${tripPlanner.dropoff()}`));
                break;
            case 'BookingAfterXDays':
                pickupdate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]));
                dropdate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]) + 4);
                await write(pickupdate, $(tripPlanner.pickupDate()))
                await click($(`${tripPlanner.dropoffDate()}`))
                await write(dropdate, $(tripPlanner.dropoffDate()))
                break;
            case 'DeliveryCheckBox':
                let deliveryStatus = dataEntry[headerValue[i]];
                deliveryStatus === 'true' && (await click($(`${carRental.deliveryCheckBox()}`)));  
                break;
            case 'CollectionCheckBox':
                let collectionStatus = dataEntry[headerValue[i]];
                collectionStatus === 'true' && (await click($(`${carRental.collectionCheckBox()}`)));   
                break;
            default:
                break;
            
        }
        carRentalDetails[headerValue[i]] = dataEntry[headerValue[i]];
        process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("tripDetails", carRentalDetails) : gauge.dataStore.scenarioStore.put("tripDetails", carRentalDetails);
    }
}

exports.searchButton = async () => await click($(`${tripPlanner.searchButton()}`));

exports.getMultiDestinationCarDetails = async (table) => {
    let headerValue;
    let dataEntry;
    let carDetails = {};

    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });
    for (var i = 0; i < headerValue.length; i++) {
        switch (headerValue[i]) {
            case 'PickUp':
                await this.enterCarPickUpDetails(i, dataEntry, headerValue);
                break;
            case 'DropOff':
                await this.enterCarDropOffDetails(i, dataEntry, headerValue);
                break;
            case 'BookingAfterXDays':
                await this.enterCarBookingDates(i, dataEntry, headerValue);
                break;
            case 'TripType':
                await this.enterTripType(i, dataEntry, headerValue);
                break;
        }
        carDetails[headerValue[i]] = dataEntry[headerValue[i]];
        process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("tripDetails", carDetails) : gauge.dataStore.scenarioStore.put("tripDetails", carDetails);
        console.log(carDetails);
    }
}
exports.enterCarPickUpDetails = async (i, dataEntry, headerValue) => {
    await write(`${dataEntry[headerValue[i]]}`, $(`${tripPlanner.carPickupCity(0)}`));
    await write(`${dataEntry[headerValue[i]]}`, $(`${tripPlanner.carDropOffCity(0)}`));
}
exports.enterCarDropOffDetails = async (i, dataEntry, headerValue) => {
    await write(`${dataEntry[headerValue[i]]}`, $(`${tripPlanner.carPickupCity(1)}`));
    await write(`${dataEntry[headerValue[i]]}`, $(`${tripPlanner.carDropOffCity(1)}`));
}
exports.enterCarBookingDates = async (i, dataEntry, headerValue) => {
    let additionalDate = 4;
    let departureDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]));
    let nextLegDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]) + additionalDate);
    await write(`${departureDate}`, $(`${tripPlanner.carPickupDate(0)}`))
    await write(`${nextLegDate}`, $(`${tripPlanner.carPickupDate(1)}`));
    await click("Search")

}
exports.enterTripType = async (i, dataEntry, headerValue) => {
    let tripType;
    tripType = dataEntry[headerValue[i]];
}

exports.searchButton = async() => await click($(`${tripPlanner.searchButton()}`));

exports.addCarFromReview = async () => {
    let destinationCity = gauge.dataStore.scenarioStore.get("tripDetails");
    await waitFor($(`${tripPlanner.reviewCarSection()}`), process.env.test_timeout);
    await checkBox({id : 'matchCarDates0'}).uncheck();
    let carRentalPickUp = await evaluate($(`${tripPlanner.reviewCarRentalPickUp()}`), (elem) => { return elem.getAttribute('value') });
    let carrentalDropoff = await evaluate($(`${tripPlanner.reviewCarRentalDropOff()}`), (elem) => { return elem.getAttribute('value') });
    assert.ok(carRentalPickUp.includes(destinationCity.Destination));
    assert.ok(carrentalDropoff.includes(destinationCity.Destination));
    await checkBox({id : 'matchCarDates0'}).check();
}
exports.selectClass = async (className) => {
    await helper.waitForLoaderSvg();
    await waitFor(async () => (await $(`${carRental.classFilter()}`).exists()));
    await click($(`${carRental.classFilter()}`))
    await click($(`${carRental.selectCarClass(className)}`))
    await helper.waitForLoaderSvg();
    await waitFor(async () => (await $(`${carRental.carRentalResults()}`).exists()));
}

exports.filterOptions = async (options) => {
    await helper.waitForLoaderSvg();
    await waitFor(async () => (await $(`${carRental.filterOptions()}`).exists()));
    await click($(`${carRental.filterOptions()}`))
    await click($(`${carRental.selectOptionsType(options)}`))
    await helper.waitForLoaderSvg();
    await waitFor(async () => (await $(`${carRental.carRentalResults()}`).exists()));
}

exports.refineYourSearch = async (table) => {
    await helper.waitForLoaderSvg();
    await waitFor(5000)
    await click($(`${carRental.filterYourSearch()}`))
    let headerValue;
    let dataEntry;

    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });
    for (var i = 0; i < headerValue.length; i++) {
        switch (headerValue[i]) {
            case 'Brand':
                let brand = dataEntry[headerValue[i]]
                await focus($(`${carRental.refineCarB(brand)}`));
                await click($(`${carRental.refineCarBrand(brand)}`));
                break;
            case 'Car Class':
                let classs = dataEntry[headerValue[i]]
                await focus($(`${carRental.refineCarC(classs)}`));
                await click($(`${carRental.refineCarClass(classs)}`));
                break;
            case 'Option':
                let option = dataEntry[headerValue[i]]
                await focus($(`${carRental.refineCarO(option)}`));
                await click($(`${carRental.refineCarOption(option)}`));
                break;
            default:
                break;
        }
    }
}

//car addition from review
exports.clickReviewAddCarOption = async () => {
    await click($(`${tripReviewPage.reviewAddCarOption()}`));
}


exports.clickSelectBtn = async () => {
    await click($(`${carRental.selectBtn()}`));
}
exports.carNameResultPage= async () => {
    var carNameResultPage = await ($(`${carRental.carNameLoc()}`)).text();
    return carNameResultPage;
}
exports.carPickUpTimeResultPage = async () => {
    var carPickUpTimeResultPage = await ($(`${carRental.carPickUpTimeLoc()}`)).text();
    return carPickUpTimeResultPage;
}
exports.carDropOffTimeResultPage = async () => {
    var carDropOffTimeResultPage = await ($(`${carRental.carDropOffTimeLoc()}`)).text();
    return carDropOffTimeResultPage;
 }
exports.carTotalCostResultPage = async () => {
    var carTotalCostResultPage = await ($(`${carRental.carTotalCostLoc()}`)).text();
    return carTotalCostResultPage;
}
exports.carFromDateResultPage = async () => {
    var carFromDateResultPage = await ($(`${carRental.carRentalFromDateLoc()}`)).text();
    return carFromDateResultPage;
}
exports.carToDateResultPage = async () => {
    var carToDateResultPage = await ($(`${carRental.carRentalToDateLoc()}`)).text();
    return carToDateResultPage;
}

//Car rental Trip Review Page.
exports.carNameTripReviewPage= async () => {
    var carNameResultPage = await ($(`${tripReviewPage.carNameInTripRevievLoc()}`)).text();
    return carNameResultPage;
}
exports.carPickUpTimeTripReviewPage = async () => {
    var carPickUpResultPage = await ($(`${tripReviewPage.carPickUpTimeTripReviewLoc()}`)).text();
    return carPickUpResultPage;
}
exports.carDropOffTimeTripReviewPage = async () => {
    var carDropOffResultPage = await ($(`${tripReviewPage.carDropOffTimeTripReviewLoc()}`)).text();
    return carDropOffResultPage;
 }
exports.carTotalCostTripReviewPage = async () => {
    var carTotalCostResultPage = await ($(`${tripReviewPage.carTotalCostTripReviewLoc()}`)).text();
    return carTotalCostResultPage;
}
exports.carFromDateTripReviewPage = async () => {
    var carFromDateResultPage = await ($(`${tripReviewPage.carRentalFromDateTripReviewLoc()}`)).text();
    return carFromDateResultPage;
}
exports.carToDateTripReviewPage = async () => {
    var carToDateResultPage = await ($(`${tripReviewPage.carRentalToDateTripReviewLoc()}`)).text();
    return carToDateResultPage;
}

// Car Rental Trip Confirmaton Page.
exports.carNameTripConfirmationPage= async () => {
    var carNameTripConfirmationPage = await ($(`${tripConfirmationPage_po.carNameInTCLoc()}`)).text();
    return carNameTripConfirmationPage;
}
exports.carPickUpTimeTripConfirmationPage = async () => {
    var carPickUpTripConfirmationPage = await ($(`${tripConfirmationPage_po.carPickUpTimeTCLoc()}`)).text();
    return carPickUpTripConfirmationPage;
}
exports.carDropOffTimeTripConfirmationPage = async () => {
    var carDropOffTripConfirmtaionPage = await ($(`${tripConfirmationPage_po.carDropOffTimeTCLoc()}`)).text();
    return carDropOffTripConfirmtaionPage;
 }

exports.carTotalCostTripConfirmationPage = async () => {
    var carTotalCostTripConfirmtaionPage = await ($(`${tripConfirmationPage_po.carTotalCostTCLoc()}`)).text();
    return carTotalCostTripConfirmtaionPage;
}
exports.carFromDateTripConfirmationPage = async () => {
    var carFromDateTripConfirmationPage = await ($(`${tripConfirmationPage_po.carRentalFromDateTCLoc()}`)).text();
    return carFromDateTripConfirmationPage;
}
exports.carToDateTripConfirmationPage = async () => {
    var carToDateTripConfirmationPage = await ($(`${tripConfirmationPage_po.carRentalToDateTCLoc()}`)).text();
    return carToDateTripConfirmationPage;
}
exports.enterCarLocation = async (table) => {
    let tripType = gauge.dataStore.scenarioStore.get("searchTypeTrip")
    switch (tripType.searchType){
        case "THC":
        case "TC":
            let location = table.rows[0].cells[2];
            await scrollTo($(`${tripPlanner.reviewMatchDateBox()}`));
            if (await $(`${tripPlanner.pickup()}`).exists()){
                await clear($(`${tripPlanner.pickup()}`));
                await write(location , $(`${tripPlanner.pickup()}`));
                await click($(`${tripPlanner.dropoff()}`));
                gauge.dataStore.scenarioStore.put("airportLocation", location);
            }
            else{
                let changeLoc = gauge.dataStore.scenarioStore.get("airportLocation");
                await click($(`${tripPlanner.reviewMatchDateBox()}`));
                await clear($(`${tripPlanner.pickup()}`));
                await write(changeLoc , $(`${tripPlanner.pickup()}`));
                await click($(`${tripPlanner.dropoff()}`));
                await click($(`${tripPlanner.pickupDate()}`));
            }
        break;
        default:
            break;
    }
}
exports.selectCarVendor = async () => { 
    await helper.waitForSpinner();
    try {
    let carVendorCardLength = 10;
    for (let i = 1; i <= carVendorCardLength; i++){
        if (await $(`${carRental.carVendorCardLoc(i)}`).exists()) {
            await evaluate($(`${carRental.carVendorCardLoc(i)}`), (elem) => {
                return elem.click();
            });
            break;
        }
    }
    } catch (err) {
        assert.fail(".......CAR VENDOR NOT FOUND........");
    }   
}

exports.searchButtons = async () => {
    await hover($(`${tripPlanner.search()}`));
    await evaluate($(`${tripPlanner.search()}`), (elem) => { return elem.click() });
}

exports.clickChange = async () => {
    let changeFlag = true;
    await gauge.dataStore.scenarioStore.put('changeFlag', changeFlag);
    await evaluate($(`${carRental.changeTrip()}`), (elem) => {
      return elem.click();
    });
  };

exports.validateCarDetailsMD = async (validateType) => {
    switch (validateType) {
        case "trip review":
            await this.validateMultiDestinationInCarReview();
            break;
        case "trip confirmation":
        case "trip cancellation":
            await this.validateMultiDestinationInCarTripConfirmation();
         break;
    }
}

exports.validateMultiDestinationInCarTripConfirmation = async () =>{
    let segmentLength = await gauge.dataStore.scenarioStore.get("segmentLength");
     for (let i = 0; i < segmentLength; i++) {
         let expectedCarDetails = await gauge.dataStore.scenarioStore.get(`carDetailsResultPage${i}`);
         await this.validateMultiDestinationCarNameTripConfirmation(expectedCarDetails, i);
         await this.validateMultiDestinationCarPickupTimeTripConfirmation(expectedCarDetails, i);
         await this.validateMultiDestinationCarDropOffTimeTripConfirmation(expectedCarDetails, i);
         await this.validateMultiDestinationCarFromDateTripConfirmation(expectedCarDetails, i);
         await this.validateMultiDestinationToDateTripConfirmation(expectedCarDetails, i);
     }
}

exports.validateMultiDestinationCarNameTripConfirmation = async (expectedCarName, i) => {
    let actualCarName = await $(`${tripConfirmationPage_po.carNameInTCDM(i)}`).text()
    expect(expectedCarName.carNameResultPage).to.contain(actualCarName,
        `Car Name not matched, Expected :${expectedCarName.carNameResultPage} , Actual:${actualCarName}`);
}

exports.validateMultiDestinationCarPickupTimeTripConfirmation = async (expectedPickupTime, i) => {
    if (i == 1){i = 2}
    let actualCarPickUpTime = await $(`${tripConfirmationPage_po.carPickUpTimeTCMD(i)}`).text()
    expect(actualCarPickUpTime ).to.contain(expectedPickupTime.carPickUpTimeResultPage,
        `Car Pick up Time not matched, Expected :${expectedPickupTime.carPickUpTimeResultPage} , Actual:${actualCarPickUpTime}`);
}

exports.validateMultiDestinationCarDropOffTimeTripConfirmation = async (expectedDropoffTime, i) => {
    if (i == 1){i = 2}
    let actualCarDropoffTime = await $(`${tripConfirmationPage_po.carDropOffTimeTCMD(i)}`).text()
    expect(actualCarDropoffTime ).to.contain(expectedDropoffTime.carDropOffTimeResultPage,
        `Car Drop off TimeTime not matched, Expected :${expectedDropoffTime.carDropOffTimeResultPage} , Actual:${actualCarDropoffTime}`);        
}

exports.validateMultiDestinationCarFromDateTripConfirmation = async (expectedFromDate, i) => {
    if (i == 1){i = 2}
    let actualCarFromDate = await $(`${tripConfirmationPage_po.carRentalFromDateTCMD(i)}`).text()
    expect(actualCarFromDate).to.contain( expectedFromDate.carFromDateResultPage.split("\n")[0],
        `Car From Date not matched, Expected :${expectedFromDate.carFromDateResultPage} , Actual:${actualCarFromDate}`);
}

exports.validateMultiDestinationToDateTripConfirmation = async (expectedToDate, i) => {
    if (i == 1){i = 2}
    let actualCarToDate = await $(`${tripConfirmationPage_po.carRentalToDateTCMD(i)}`).text()
    expect(actualCarToDate).to.contain( expectedToDate.carToDateResultPage.split("\n")[0],
        `Car To Date not matched, Expected :${expectedToDate.carToDateResultPage} , Actual:${actualCarToDate}`);
}

//-------------------------------------------------------
exports.validateMultiDestinationInCarReview = async () =>{
    let segmentLength = await gauge.dataStore.scenarioStore.get("segmentLength");
     for (let i = 0; i < segmentLength; i++) {
         let expectedCarDetails = await gauge.dataStore.scenarioStore.get(`carDetailsResultPage${i}`);
         await this.validateMultiDestinationCarNameReview(expectedCarDetails, i);
         await this.validateMultiDestinationCarPickupTimeReview(expectedCarDetails, i);
         await this.validateMultiDestinationCarDropOffTimeReview(expectedCarDetails, i);
         await this.validateMultiDestinationCarFromDateReview(expectedCarDetails, i);
         await this.validateMultiDestinationToDateReview(expectedCarDetails, i);
     }
}

exports.validateMultiDestinationCarNameReview = async (expectedCarName, i) => {
    let actualCarName = await $(`${tripReviewPage.carNameInTripReviewMD(i)}`).text()
    expect(expectedCarName.carNameResultPage).to.contain(actualCarName,
        `Car Name not matched, Expected :${expectedCarName.carNameResultPage} , Actual:${actualCarName}`);
}

exports.validateMultiDestinationCarPickupTimeReview = async (expectedPickupTime, i) => {
    let actualCarPickUpTime;
    i == 0 ? actualCarPickUpTime = await $(`${tripReviewPage.firstCarPickUpTimeTripReviewMD()}`).text(): actualCarPickUpTime = await $(`${tripReviewPage.secondCarPickUpTimeTripReviewMD()}`).text()
    expect(expectedPickupTime.carPickUpTimeResultPage).to.contain(actualCarPickUpTime,
        `Car Pick up Time not matched, Expected :${expectedPickupTime.carPickUpTimeResultPage} , Actual:${actualCarPickUpTime}`);
}

exports.validateMultiDestinationCarDropOffTimeReview = async (expectedDropoffTime, i) => {
    let actualCarDropoffTime
    i == 0 ? actualCarDropoffTime = await $(`${tripReviewPage.firstCarDropOffTimeTripReviewMD()}`).text(): actualCarDropoffTime = await $(`${tripReviewPage.secondCarDropOffTimeTripReviewMD()}`).text()
    expect(expectedDropoffTime.carDropOffTimeResultPage).to.contain(actualCarDropoffTime,
        `Car Drop off TimeTime not matched, Expected :${expectedDropoffTime.carDropOffTimeResultPage} , Actual:${actualCarDropoffTime}`);
}

exports.validateMultiDestinationCarFromDateReview = async (expectedFromDate, i) => {
    let actualCarFromDate = await $(`${tripReviewPage.carRentalFromDateTripReviewMD(i)}`).text()
    expect(actualCarFromDate).to.contain( expectedFromDate.carFromDateResultPage.split("\n")[0].toUpperCase(),
        `Car From Date not matched, Expected :${expectedFromDate.carFromDateResultPage.split("\n")[0].toUpperCase()} , Actual:${actualCarFromDate}`);
}

exports.validateMultiDestinationToDateReview = async (expectedToDate, i) => {
    if (i == 1){i = 2}
    let actualCarToDate = await $(`${tripReviewPage.carRentalToDateTripReviewMD(i)}`).text()
    expect(actualCarToDate).to.contain( expectedToDate.carToDateResultPage.split("\n")[0].toUpperCase(),
        `Car Name not matched, Expected :${expectedToDate.carToDateResultPage.split("\n")[0].toUpperCase()} , Actual:${actualCarToDate}`);
}
exports.fillRequiredCarServiceDetails = async (table) => {
    let headerValue;
    let dataEntry;
    let carServiceDetails = {};
    let carServiceDetailsFunction = {};

    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });

    for (let i = 0; i < headerValue.length; i++) {
        let functionName = "enter" + `${headerValue[i]}`;;
        carServiceDetailsFunction = {
            ...carServiceDetailsFunction,
            [headerValue[i]]: await this[functionName](dataEntry[headerValue[i]]),
        };
        carServiceDetails = {
            ...carServiceDetails,
            [headerValue[i]]: dataEntry[headerValue[i]],
        }
    } 
    gauge.dataStore.scenarioStore.put("carServiceDetails", carServiceDetails);
}
exports.enterDropOffBy = async (dropOffBy) => { 
    await write(dropOffBy.split(" ")[0], $(tripPlannerCarService.arriveByTimeElement())); 
    await dropDown({class:`${tripPlannerCarService.ampm()}`}).select(dropOffBy.split(" ")[1]);
}

exports.enterPickUpAddress = async (pickUpAddress) => { 
    let changeFlag = gauge.dataStore.scenarioStore.get("changeFlag");
    let addCSFlag = gauge.dataStore.scenarioStore.get("newServiceFlag");
    carServiceIndex = addCSFlag !== null ? "1" : "0";
    if (changeFlag != null) {
        await clear ($(tripPlannerCarService.pickUpAddressElement(carServiceIndex)))
    }
    await write(pickUpAddress, $(tripPlannerCarService.pickUpAddressElement()));
    await click($(tripPlannerCarService.firstOptionInElement(1)));

}
exports.enterDropOffAddress = async (dropOffDate) => {
    let addCSFromReservation = gauge.dataStore.scenarioStore.get("addCarServiceFromReservationFlag");
    let changeFlag = gauge.dataStore.scenarioStore.get("changeFlag");
    let addCSFlag = gauge.dataStore.scenarioStore.get("newServiceFlag");
    carServiceIndex = addCSFlag !== null ? "1" : "0";
    carServiceIndex = addCSFromReservation !== null ? "3" : carServiceIndex;
    gauge.dataStore.scenarioStore.put("carServiceIndex",carServiceIndex);
    if (changeFlag != null) {
        await clear ($(tripPlannerCarService.DropOffAddressElement(carServiceIndex)))
    }
    await write(dropOffDate, $(tripPlannerCarService.DropOffAddressElement(carServiceIndex)));
    await click($(tripPlannerCarService.firstOptionInElement(2)));
}
exports.enterPickUpDate = async (pickUpDate) => {
    let changeFlag = gauge.dataStore.scenarioStore.get("changeFlag");
    let addCSFlag = gauge.dataStore.scenarioStore.get("newServiceFlag");
    carServiceIndex = addCSFlag !== null ? "1" : "0";
    if (changeFlag != null) {
        await clear ($(tripPlannerCarService.pickUpDateElement(carServiceIndex)));
    }
    
    let carPickUpDate = helper.getDayAndDate(parseInt(pickUpDate));
    await write(carPickUpDate, $(tripPlannerCarService.pickUpDateElement(carServiceIndex)));
    await press("Enter");
 }
exports.enterFlightDepartureDate = async (departureDate) => { 
    let flightDepartureDate = helper.getDayAndDate(parseInt(departureDate));
    await click($(tripPlannerCarService.flightDepartureDateElement())); 
    await write(flightDepartureDate, $(tripPlannerCarService.flightDepartureDateElement())); 
}

exports.enterArrivalAirlines = async (airlines) => { 
    await write(airlines, $(tripPlannerCarService.pickUpAirlineElement()));
}
exports.enterDropOffAirlines = async (airlines) => { 
    await write(airlines, $(tripPlannerCarService.dropOffAirlineElement()));
}
exports.enterArrivalFlightNo = async (flightNumber) => { 
    await write(flightNumber, $(tripPlannerCarService.pickupFlightNumberElement()));
    await click($(tripPlannerCarService.flightArrivalDateElement()));
    await press("Enter");
}
exports.enterDropOffFlightNo = async (flightNumber) => { 
    await write(flightNumber, $(tripPlannerCarService.dropOffflightNumberElement()));
    await click($(tripPlannerCarService.flightArrivalDateElement()));
}
exports.enterPickUpBy = async (pickUpBy) => { 
    let addCSFlag = gauge.dataStore.scenarioStore.get("newServiceFlag");
    carServiceIndex = addCSFlag !== null ? "3" : "1";
    await write(pickUpBy.split(" ")[0], $(tripPlannerCarService.pickUpByTimeElement(carServiceIndex))); 
    await dropDown({class:`${tripPlannerCarService.ampm()}`}).select(pickUpBy.split(" ")[1]);
    await click($(tripPlannerCarService.pickUpDateElement(addCSFlag == null ? "0" : "1")));
}
exports.enterArriveBy = async (arriveBy) => {
    await write(arriveBy, $(tripPlannerCarService.arriveByTimeElement()));
}
exports.enterFlightArrivalDate = async (arrivalDate) => { 
    let flightArrivalDate = helper.getDayAndDate(parseInt(arrivalDate));
    await write(flightArrivalDate, $(tripPlannerCarService.flightArrivalDateElement()));
}
exports.enterPassengers = async (Passengers) => { 
    await click($(tripPlannerCarService.passengersElement()));
    await write(Passengers, $(tripPlannerCarService.passengersElement()));
}
exports.getCarServiceDetails = async (provider) => {
    await helper.waitForSpinner();
    let providerList = (await $(`${carServicePo.carServiceProviders()}`).get()).length;
    for (let i = 1; i <= providerList; i++) {
        var providerName = await ($(`${carServicePo.carServiceProvider(i)}`)).text();
        if (providerName == provider) {
            let carServiceData = {};
            carServiceData.pickUpTime = await $(`${tripPlannerCarService.carServicePickUpTime(i)}`).text();
            carServiceData.dropOffTime = await ($(`${tripPlannerCarService.carServiceDropOffTime(i)}`).exists()) && await $(`${tripPlannerCarService.carServiceDropOffTime(i)}`).text();
            carServiceData.pickUpLocation = await $(`${tripPlannerCarService.carServicePickUpLocation(i)}`).text();
            carServiceData.dropOffLocation = await $(`${tripPlannerCarService.carServiceDropOffLocation(i)}`).text();
            carServiceData.carServiceProvider = await $(`${tripPlannerCarService.carServiceProvider(i)}`).text();
            gauge.dataStore.scenarioStore.put("carServiceData", carServiceData);
            break;
        } 
        i > providerList && assert.fail(`${provider}Provider not found.....`) 
    }
}
exports.verifyCarServiceDetails = async (carServiceData) => { 
    await helper.waitForSpinner();
    await helper.waitForWalkmePlayer();
    let index = await $(`${tripPlannerCarService.carServiceDropOffLocationReviewPage(4)}`).exists() ? "4" : "3"
    let carReviewDetailsPage = {};
    let carServiceDetails = gauge.dataStore.scenarioStore.get("carServiceData");
    carReviewDetailsPage.pickUpTime = await $(`${tripPlannerCarService.carServicePickUpTimeReviewPage()}`).text();;
    carReviewDetailsPage.dropOffTime = await $(`${tripPlannerCarService.carServiceDropOffTimeReviewPage()}`).text();;
    carReviewDetailsPage.dropOffLocation = await $(`${tripPlannerCarService.carServiceDropOffLocationReviewPage(index)}`).text() 
       
    carReviewDetailsPage.carServiceProvider = await $(`${tripPlannerCarService.carServiceProviderReviewPage()}`).text();;
    gauge.dataStore.scenarioStore.put("carReviewDetailsPage", carReviewDetailsPage);
    console.log(gauge.dataStore.scenarioStore.get("carReviewDetailsPage"))
    expect(carReviewDetailsPage.dropOffLocation).to.contain(index == "4" ? carServiceDetails.dropOffLocation.split(" ")[0] : carServiceDetails.dropOffLocation.split(" ")[3]);
    expect(carReviewDetailsPage.carServiceProvider).to.contain(carServiceDetails.carServiceProvider)
}

exports.validateCarServiceDetails = async (carServicePage) => { 
    let property = "validate"+carServicePage;
        var pages = {
          [carServicePage]:await this[property]() ,
        };
}
exports.validateTripConfirmation = async (carServicePage) => { 
    let carReviewTripConfirmation = {};
    let carServiceDetails = gauge.dataStore.scenarioStore.get("carServiceData");
    let pickUpTime = await $(`${tripPlannerCarService.carServicePickUpTimeTripConfirmationPage()}`).text();
    let dropOffLocation = await $(`${tripPlannerCarService.carServiceDropOffLocationTripConfirmationPage()}`).text();
    let carServiceProvider = await $(`${tripPlannerCarService.carServiceProviderTripConfirmationPage()}`).text();
    carReviewTripConfirmation.pickUpTime = pickUpTime;
    carReviewTripConfirmation.dropOffLocation = dropOffLocation;
    carReviewTripConfirmation.carServiceProvider = carServiceProvider;
    gauge.dataStore.scenarioStore.put("carReviewTripConfirmation", carReviewTripConfirmation);
    console.log(gauge.dataStore.scenarioStore.get("carReviewTripConfirmation"));
    expect(dropOffLocation).to.contain(carServiceDetails.dropOffLocation.split(" ")[0])
    expect(carServiceProvider).to.contain(carServiceDetails.carServiceProvider)
}
exports.validateTripConfirm = async (carServicePage) => { 
    let carServiceDetails = gauge.dataStore.scenarioStore.get("carDropOffServiceData");
    let dropOffLocation = await $(`${tripPlannerCarService.carServiceDropOffLocationACLoc()}`).text();
    let carServiceProvider = await $(`${tripPlannerCarService.carServiceProviderTripConfirmationPage()}`).text();
    expect(dropOffLocation).to.contain(carServiceDetails.dropOffLocation.split(" ")[0])
    expect(carServiceProvider).to.contain(carServiceDetails.carServiceProvider)
}
exports.validateTripCancellation = async () => { 
    let carReviewTripCancellation = {};
    let carServiceDetails = gauge.dataStore.scenarioStore.get("carServiceData");
    let pickUpTime = await $(`${tripPlannerCarService.carServicePickUpTimeTripCancellationPage()}`).text();
    let dropOffLocation = await $(`${tripPlannerCarService.carServiceDropOffLocationTripCancellationPage()}`).text();
    let carServiceProvider = await $(`${tripPlannerCarService.carServiceProviderTripCancellationPage()}`).text();
    carReviewTripCancellation.pickUpTime = pickUpTime;
    carReviewTripCancellation.dropOffLocation = dropOffLocation;
    carReviewTripCancellation.carServiceProvider = carServiceProvider;
    gauge.dataStore.scenarioStore.put("carReviewTripCancellation", carReviewTripCancellation);
    console.log(gauge.dataStore.scenarioStore.get("carReviewTripCancellation"));
    expect(dropOffLocation).to.contain(carServiceDetails.dropOffLocation.split(" ")[0])
    expect(carServiceProvider).to.contain(carServiceDetails.carServiceProvider)
}
exports.addCarServiceFromRTP = async (carServicePage) => { 
    await click($(tripReviewPage.addCarServiceRTP()));
}

exports.enterStops = async (Stops) => { 
    await click($(tripPlannerCarService.addStops())); 
    await click ($(tripPlannerCarService.addStopAddressOne()));
    await write(Stops, $(tripPlannerCarService.addStopAddressOne()));

}
exports.enterNextStops = async (NextStops) => { 
    await click($(tripPlannerCarService.addStops())); 
    await click ($(tripPlannerCarService.addStopAddressTwo()));
    await write (NextStops, $(tripPlannerCarService.addStopAddressTwo()));
}

exports.selectDropOffAddressOption = async (index) =>{
    let addCSFlag = gauge.dataStore.scenarioStore.get("newServiceFlag");

    carServiceIndex = addCSFlag !== null ? "1" : "0";
    await click($(tripPlannerCarService.DropOffAddressElement(carServiceIndex)));
    await click($(tripPlannerCarService.firstOptionInDropOff(index)));
}

exports.enterHours = async (Hours) => { 
    await click($(tripPlannerCarService.hoursElement()));
    await write(Hours, $(tripPlannerCarService.hoursElement()));
}

exports.verifyCarServiceDetailsForDropOffAddressOptions = async (carServiceData) => {
    await helper.waitForSpinner();
    await helper.waitForWalkmePlayer();
    let carReviewDetailsPage = {};
    let carServiceDetails = gauge.dataStore.scenarioStore.get("carServiceData");
    carReviewDetailsPage.pickUpTime = await $(`${tripPlannerCarService.carServicePickUpTimeReviewPage()}`).text();;
    carReviewDetailsPage.dropOffTime = await $(`${tripPlannerCarService.carServiceDropOffTimeForDriveAsDirectedInReviewPage()}`).text();;
    carReviewDetailsPage.dropOffLocation = await $(`${tripPlannerCarService.carServiceDropOffLocationForDriveAsDirectedInReviewPage()}`).text();;
    carReviewDetailsPage.carServiceProvider = await $(`${tripPlannerCarService.carServiceProviderReviewPage()}`).text();;
    gauge.dataStore.scenarioStore.put("carReviewDetailsPage", carReviewDetailsPage);
    console.log(gauge.dataStore.scenarioStore.get("carReviewDetailsPage"))
    expect(carReviewDetailsPage.dropOffLocation).to.contain(carServiceDetails.dropOffLocation.toLowerCase())
    expect(carReviewDetailsPage.carServiceProvider).to.contain(carServiceDetails.carServiceProvider)
}
exports.validationCarServiceDetails = async () => {
    await helper.waitForSpinner();
    await waitFor(3000);
    let carServiceDetails = gauge.dataStore.scenarioStore.get("carServiceData");
    let pickUpAddress = await evaluate($(`${tripPlannerCarService.pickUpAddressElement()}`), (elem) => { return elem.getAttribute('value') }); 
    let dropOffAddress =  await evaluate($(`${tripPlannerCarService.DropOffAddressElement()}`), (elem) => { return elem.getAttribute('value') });
    let pickUpTime = await evaluate($(`${tripPlannerCarService.pickUpDateElement()}`), (elem) => { return elem.getAttribute('value') });
    console.log(pickUpAddress, "pick up address");
    console.log(carServiceDetails.pickUpLocation, "this");
    assert.notDeepEqual(pickUpAddress, carServiceDetails.pickUpLocation, "PickUp location data mismatched");
    assert.notDeepEqual(dropOffAddress, carServiceDetails.dropOffLocation, "Drop off location data mismatched");
    assert.notDeepEqual(pickUpTime, carServiceDetails.pickUpDate, "Date data mismatched");
}
exports.selctVehicleType = async () => {
    await click($(`${tripPlannerCarService.clickVehicleTypeLoc()}`));
}
exports.selctCarType = async (carType) => {
    switch(carType){
        case "SUV":
            await click($(`${tripPlannerCarService.clickCarType(carType)}`));
            await click($(`${tripPlannerCarService.clickCarType("SEDAN")}`));
            await click($(`${tripPlannerCarService.clickClose()}`));
            await waitFor(3000);
            break;
        default:
            break;
    }
}
exports.clickSUVSelectButton = async () => {
    await click($(`${tripPlannerCarService.clickSUVSelectButtonLoc()}`));
}
exports.selectAllSegments = async () => { 
    let segmentCount = await $(tripPlannerCarService.segmentsCount()).elements().then(ele => (ele.length));
    let lastSegment = parseInt(segmentCount) - 2;
    gauge.dataStore.scenarioStore.put("lastSegment", lastSegment);
    await click($(`${tripPlannerCarService.segment(lastSegment)}`));
}
exports.selectLastSegment = async() => {
    // let segmentCount = await $(tripPlannerCarService.segmentsCount()).elements().then(ele => (ele.length));
    // gauge.dataStore.scenarioStore.put("lastSegment", segmentCount);
    await click($(`${tripPlannerCarService.lastSegment()}`));
} 
exports.selectPickUpCarService = async (provider) => {
    await helper.waitForSpinner();
    let providerList = (await $(`${carServicePo.carServiceProviders()}`).get()).length;
    for (let i = 1; i <= providerList; i++) {
        var providerName = await ($(`${carServicePo.carServiceProvider(i)}`)).text();
        if (providerName == provider) {
            let carServiceData = {};
            carServiceData.pickUpTime = await $(`${tripPlannerCarService.carServicePickUpTime(i)}`).text();
            carServiceData.pickUpLocation = await $(`${tripPlannerCarService.carServicePickUpLocation(i)}`).text();
            carServiceData.carServiceProvider = await $(`${tripPlannerCarService.carServiceProvider(i)}`).text();
            gauge.dataStore.scenarioStore.put("carPickUpServiceData", carServiceData);
            console.log( gauge.dataStore.scenarioStore.get("carPickUpServiceData"))
            break;
        } 
        i > providerList && assert.fail(`${provider}Provider not found.....`) 
    }
}
exports.selectDropOffCarService = async (provider) => {
    await helper.waitForSpinner();
    let providerList = (await $(`${carServicePo.carServiceProviders()}`).get()).length;
    for (let i = 1; i <= providerList; i++) {
        var providerName = await ($(`${carServicePo.carServiceProvider(i)}`)).text();
        if (providerName == provider) {
            let carServiceData = {};
            carServiceData.dropOffTime = await ($(`${tripPlannerCarService.carServiceDropOffTime(i)}`).exists()) && await $(`${tripPlannerCarService.carServiceDropOffTime(i)}`).text();
            carServiceData.dropOffLocation = await $(`${tripPlannerCarService.carServiceDropOffLocation(i)}`).text();
            carServiceData.carServiceProvider = await $(`${tripPlannerCarService.carServiceProvider(i)}`).text();
            gauge.dataStore.scenarioStore.put("carDropOffServiceData", carServiceData);
            console.log( gauge.dataStore.scenarioStore.get("carDropOffServiceData"))
            break;
        } 
        i > providerList && assert.fail(`${provider}Provider not found.....`) 
    }
}
exports.tripReviewValidation = async () => {
    await helper.waitForSpinner();
    let validateCarPickUpService = gauge.dataStore.scenarioStore.get("carPickUpServiceData");
    let validateCarDropOffService = gauge.dataStore.scenarioStore.get("carDropOffServiceData");
    let pickUpCarServiceProvider = await $(`${tripPlannerCarService.carServicePickUpTitleReviewPage()}`).text();
    // let pickUpTime = await $(`${tripPlannerCarService.carServicePickUpTimeReviewPage()}`).text();
    let pickUpLocation = await $(`${tripPlannerCarService.carServicePickUpLocationReviewPage()}`).text();
    let dropOffCarServiceProvider = await $(`${tripPlannerCarService.carServiceDropOffTitleReviewPage()}`).text();
    // let dropOffTime = await $(`${tripPlannerCarService.carServiceDropOffTimeReviewPage()}`).text(); 
    let dropOffLocation = await $(`${tripPlannerCarService.carServiceDropOffLocationReviewPage()}`).text();
    expect(dropOffLocation).to.contain(validateCarDropOffService.dropOffLocation.split(" ")[0]);
    expect(pickUpCarServiceProvider).to.contain(validateCarDropOffService.carServiceProvider);
    // expect(dropOffTime).to.contain(validateCarDropOffService.dropOffTime)
    // expect(pickUpTime).to.contain(validateCarPickUpService.pickUpTime)
    expect(pickUpCarServiceProvider).to.contain(validateCarPickUpService.carServiceProvider);
    expect(dropOffCarServiceProvider).to.contain(validateCarDropOffService.carServiceProvider);
    // expect(pickUpLocation).to.contain(validateCarPickUpService.pickUpLocation.split(" ")[0]);
    for (let i = 1; i <= segmentCount; i++) { 
        await click($(`${tripPlannerCarService.segment(1)}`));
    }    
}
exports.retriveAndSelctCar = async (provider) => { 
    let segment = gauge.dataStore.scenarioStore.get("carServiceIndex");
    let flag = gauge.dataStore.scenarioStore.get("addCarServiceFromReservationFlag");
    for (let i = 0; i <= segment; i++){
        await helper.waitForSpinner();
        await helper.waitForWalkmePlayer();
        gauge.dataStore.scenarioStore.put(`carServiceData`+i, flag !== null && gauge.dataStore.scenarioStore.get("carServiceData"));
        await carActions.getCarServiceDetails(provider);
        await commonAction.checkProviderAndClickSelect("",provider)
    }
}
exports.verifyMultipleCarServiceInReviewPage = async (carServiceData) => { 
    await helper.waitForSpinner();
    await helper.waitForWalkmePlayer();
    let firstCarServiceData = gauge.dataStore.scenarioStore.get("carServiceData1");
    let secondCarServiceData = gauge.dataStore.scenarioStore.get("carServiceData2");
    let thirdCarServiceData = gauge.dataStore.scenarioStore.get("carServiceData3");
    let carReviewDetailsPage = {};
    carReviewDetailsPage.pickUpTime = await $(`${tripPlannerCarService.carServicePickUpTimeReviewPage()}`).text();
    carReviewDetailsPage.firstPickUpTime = await $(`${tripPlannerCarService.carServiceFirstPickUpTimeReviewPage()}`).text();
    carReviewDetailsPage.secondPickUpTime = await $(`${tripPlannerCarService.carServiceSecondPickUpTimeReviewPage()}`).text();
    carReviewDetailsPage.dropOffTime = await $(`${tripPlannerCarService.carServiceDropOffTimeReviewPage()}`).text();
    carReviewDetailsPage.firstDropOffTime = await $(`${tripPlannerCarService.carServiceFirstDropOffTimeReviewPage()}`).text();
    carReviewDetailsPage.secondDropOffTime = await $(`${tripPlannerCarService.carServiceSecondDropOffTimeReviewPage()}`).text();
    carReviewDetailsPage.firstdropOffLocation = await $(`${tripPlannerCarService.carServiceFirstDropOffLocationReviewPage()}`).text();
    carReviewDetailsPage.seconddropOffLocation = await $(`${tripPlannerCarService.carServiceSecondDropOffLocationReviewPage()}`).text();
    carReviewDetailsPage.thirddropOffLocation = await $(`${tripPlannerCarService.carServiceThirdDropOffLocationReviewPage()}`).text();
    carReviewDetailsPage.carServiceProvider = await $(`${tripPlannerCarService.carServiceProviderReviewPage()}`).text();
    gauge.dataStore.scenarioStore.put("carReviewDetailsPage", carReviewDetailsPage);
    expect(carReviewDetailsPage.firstdropOffLocation).to.contain(firstCarServiceData.dropOffLocation.split(" ")[0]);
    expect(carReviewDetailsPage.seconddropOffLocation).to.contain(secondCarServiceData.dropOffLocation.split(" ")[0]);
    expect(carReviewDetailsPage.thirddropOffLocation).to.contain(thirdCarServiceData.dropOffLocation.split(" ")[0]);
    expect(carReviewDetailsPage.carServiceProvider).to.contain(firstCarServiceData.carServiceProvider)
}
exports.validateMultipleCarServiceDetails = async (pageName) => { 
    let carReviewTripConfirmation = {};

    let firstDropOffLocation = await $(`${tripPlannerCarService.firstCarServiceTripConfirmation()}`).text();
    let secondDropOffLocation = await $(`${tripPlannerCarService.secondCarServiceTripConfirmation()}`).text();
    let carServiceProvider = await $(`${tripPlannerCarService.carServiceProviderMultipleCS()}`).text();
    carReviewTripConfirmation.carServiceProvider = carServiceProvider;
    carReviewTripConfirmation.firstDropOffLocation = firstDropOffLocation;
    carReviewTripConfirmation.secondDropOffLocation = secondDropOffLocation;
    gauge.dataStore.scenarioStore.put("carReviewTripConfirmation", carReviewTripConfirmation);
    console.log(gauge.dataStore.scenarioStore.get("carReviewTripConfirmation"));
    expect(firstDropOffLocation).to.contain(carReviewTripConfirmation.firstDropOffLocation.split(" ")[0])
    expect(secondDropOffLocation).to.contain(carReviewTripConfirmation.secondDropOffLocation)
    expect(carServiceProvider).to.contain(carReviewTripConfirmation.carServiceProvider)
}
exports.sendKeysPickUpAddress = async (table) => {
    let pickUpAddress = table.rows[0].cells[0];
    await write(pickUpAddress, $(tripPlannerCarService.pickUpAddressElement()));
    // await click($(tripPlannerCarService.firstOptionInElement(1)))
}
exports.sendKeysDropOffAddress = async (table) => {
    let dropOffAddress = table.rows[0].cells[0];
    await write(dropOffAddress, $(tripPlannerCarService.DropOffAddressElement(1)));
    // await click($(tripPlannerCarService.selectFirstOptionLoc()));
}
exports.clickContinueButton = async () => {
    await click($(`${tripPlannerCarService.clickContinueButtonLoc()}`))
}
exports.clickFlightNumber = async () => {
    await click($(`${tripPlannerCarService.clickFlightNumberLoc()}`))
}
exports.validateCarDetailsTripReview = async () => {
    await helper.waitForSpinner();
    let validateCarDropOffService = gauge.dataStore.scenarioStore.get("carDropOffServiceData");
    let dropOffCarServiceProvider = await $(`${tripPlannerCarService.carServiceDropOffTitleReviewPage()}`).text();
    let dropOffLocation = await $(`${tripPlannerCarService.carServiceDropOffLocationReviewPage()}`).text();
    expect(dropOffLocation).to.contain(validateCarDropOffService.dropOffLocation.split(" ")[0]);
    expect(dropOffCarServiceProvider).to.contain(validateCarDropOffService.carServiceProvider);
}
exports.clickContinueTripReview = async () => {
    await click($(`${tripPlannerCarService.clickContinueTripReviewLoc()}`))
}