"use strict";

const { click, write, $, dropDown, evaluate, waitFor, textBox, hover, clear, into, focus, checkBox, accept, scrollTo, scrollUp, text } = require('taiko');
const tripPlanner_locator = require('../Locators/tripPlanner_po.js');
const assert = require("assert");
const travelPrePage = require("../Locators/travel_preference_po")
const purchase = require('../Locators/purchase_po.js');
const chai = require('chai');
var expect = chai.expect
const helper = require('../helpers/helper.js');
const globalDashboard = require('../Locators/globalDashboard_po.js');
let xml2js = require('xml2js');
const tripConfiramtionPage = require("../Locators/tripConfirmation_po");
const travel_preference_action = require("../travel_preference/travel_preference_action")
let parser = new xml2js.Parser();
let pnrData = helper.pnrData()
let fieldsCount;

exports.validateHomeTrainStation = async(data) => {
    await focus($(`${tripPlanner_locator.trainDeparture()}`))
    let homeTrainLocation = await textBox({id: 'railDepartureCity0'}).value()
    assert.strictEqual(homeTrainLocation, data.rows[0].cells[0],`Train Station do not match, Expected : ${data.rows[0].cells[0]}, Actual :${homeTrainLocation}`)
}

exports.validateLoyalityMembership = async() => {
    await helper.waitForLoaderSvg();
    let searchTypeTrip =  gauge.dataStore.scenarioStore.get("searchTypeTrip");
    switch(searchTypeTrip.searchType){
        case "AirOnly":
            await this.validateAirMember()
            break;
        case "HotelOnly":
            await this.validateHotelMember()
            break;
        case "CarRentalOnly":
            await this.validateCarMember()
            break;
        case "AHC":
            await this.validateAirMember()
            await this.validateHotelMember()
            await this.validateCarMember()
            break;
    }
}


exports.validateCarRentalLoyalityMembership = async() => {
    let carLoyalityMembership =  gauge.dataStore.scenarioStore.get("travelPeferenceData");
    await scrollTo($(`${purchase.membCar()}`))
    let membCarActual = await ($(`${purchase.membCar()}`)).text()
    let membCarNumberActual = await evaluate($(`${purchase.membCarNumber()}`), (elem) => { return elem.getAttribute('value') });
    let membCarExpected = carLoyalityMembership.CarMembership;
    let membCarNumberExpected = carLoyalityMembership.CarMembershipNumber;
    assert.strictEqual(membCarActual, membCarExpected, `Failed to verify car rental Member. Expected: ${membCarExpected} and Actual: ${membCarActual} `)
    assert.strictEqual(membCarNumberActual, membCarNumberExpected, `Failed to verify  car rental Member number. Expected: ${membCarNumberExpected} and Actual: ${membCarNumberActual} `)
}

exports.getTravelPeferenceData = async(table) => {
    let headerValue;
    let dataEntry;
    let travelPeferenceData= {}

    await table.entries(async (entry) => {
    headerValue = Object.keys(entry);
    dataEntry = entry;
    });

    for (var i = 0; i < headerValue.length; i++) {
        travelPeferenceData[headerValue[i]] = dataEntry[headerValue[i]];
        gauge.dataStore.scenarioStore.put("travelPeferenceData", travelPeferenceData);
    }
}

exports.validateSpecialRequest = async() => {
    await helper.waitForLoaderSvg();
    let searchTypeTrip =  gauge.dataStore.specStore.get("searchTypeTrip");
    switch(searchTypeTrip.searchType){
        case "AirOnly":
            await this.validateAirSpecialRequests()
            break;
        case "HotelOnly":
            await this.validateHotelSpecailRequest()
            break;
        case "CarRentalOnly":
            await this.validateCarSpecailRequest()
            break;
        case "AHC":
            await this.validateAirSpecialRequests()
            await this.validateHotelSpecailRequest()
            await this.validateCarSpecailRequest()
            break;
    }
}


exports.goToTravelPeference = async () => {
    await waitFor(3000)
    await click($(`${tripPlanner_locator.settingIcon()}`));
    await click($(`${tripPlanner_locator.account()}`))
    await helper.waitForLoaderSvg();
    await waitFor(3000)
    await click($(`${travelPrePage.travelPreference()}`))
}

exports.goToTripPlanner = async() => {
    await hover($(`${tripPlanner_locator.menuDropDown()}`));
    await click($(`${tripPlanner_locator.travel()}`)) 
}

exports.airSpecialRequests = async(table) => {
    let headerValue;
    let dataEntry;
    let airSpecialRequestsDetails= {} 

    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;  
    });

    for (var i = 0; i < headerValue.length; i++){
        switch(headerValue[i]){
            case 'HomeAirport':
                await write(`${dataEntry[headerValue[i]]}`, $(`${travelPrePage.homeAirport()}`))
                break;
            case 'PreferredFareType':
                await dropDown({ id: `${travelPrePage.preferredFareType()}` }).select(`${dataEntry[headerValue[i]]}`) 
                break;
            case 'DefaultSearchType':
                await click($(`${travelPrePage.defaultSearchType(dataEntry[headerValue[i]])}`))
                break;
            case 'AirSpecialRequests1':
                await evaluate($(`${travelPrePage.airSpecialrequests1Id()}`), (elem) => {return elem.click();});
                break;
            case 'AirSpecialRequests2':
                await evaluate($(`${travelPrePage.airSpecialrequests2Id()}`), (elem) => {return elem.click();});
                break;
            case 'MembershipAirline':
                await dropDown({ name: `${travelPrePage.membershipsFirstAirline()}` }).select(`${dataEntry[headerValue[i]]}`)
                break;
            case 'MembershipAirlineNumber':
                await write(`${dataEntry[headerValue[i]]}`, $(`${travelPrePage.membershipsNumber()}`))
            }

        airSpecialRequestsDetails[headerValue[i]] = dataEntry[headerValue[i]];
        gauge.dataStore.scenarioStore.put("airSpecialRequestsDetails", airSpecialRequestsDetails);
    }
    await evaluate($(`${travelPrePage.flightSaveBtn()}`), (elem) => {return elem.click();});
}

exports.validateHomeAirport = async() => {
    await focus($(`${tripPlanner_locator.departureLocation()}`))
    let homeAirportLocation = await textBox({id: `${tripPlanner_locator.homeAiportLoc()}`}).value()
    let expectedHomeAirportLocation = gauge.dataStore.scenarioStore.get("airSpecialRequestsDetails")
    expect(homeAirportLocation).to.contain(expectedHomeAirportLocation.HomeAirport, `Invalid Home Airport Location  is shown, 
    Expected: ${expectedHomeAirportLocation.HomeAirport}, Actual: ${homeAirportLocation}`)
}

exports.validatePreferredFareType = async() =>{
    let expectAirSpecialRequest = gauge.dataStore.scenarioStore.get("airSpecialRequestsDetails")
    await click($(`${tripPlanner_locator.moreSearchOption()}`))
    assert.ok (await text(expectAirSpecialRequest.PreferredFareType).exists(),`Invalid Preferred Fare Type is shown: Expect: ${expectAirSpecialRequest.PreferredFareType}`)
    await click($(`${tripPlanner_locator.hideSearchOption()}`))
}

exports.validateFlightPrference = async() => {
  await this.validateAirSpecialRequests();
  await this.validateAirMember();
}

exports.validateAirSpecialRequests = async() => {
    let airSpecialRequestsDetails = gauge.dataStore.scenarioStore.get("airSpecialRequestsDetails")
    let expectAirSpecialRequest = airSpecialRequestsDetails.AirSpecialRequests2 +", "+ airSpecialRequestsDetails.AirSpecialRequests1
    let airSpecialRequest = await $(`${purchase.airSpecialrequests()}`).text()
    assert.strictEqual(airSpecialRequest, expectAirSpecialRequest, `Invalid Airline shown: Expect: ${expectAirSpecialRequest} and Acutal: ${airSpecialRequest}`)
}

exports.validateAirMember = async() => {
    let airSpecialRequestsDetails = gauge.dataStore.scenarioStore.get("airSpecialRequestsDetails")
    let membAirline = await $(`${purchase.membershipsAirlineInPurchase()}`).text()
    let membAirlineNumber = await evaluate($(`${purchase.membershipsNumberInPurchase()}`), (elem) => { return elem.getAttribute('value') });
    assert.strictEqual(membAirline, airSpecialRequestsDetails.MembershipAirline, `Invalid Airline shown: Expect: ${airSpecialRequestsDetails.MembershipAirline} and Acutal: ${membAirline}`)
    assert.strictEqual(membAirlineNumber, airSpecialRequestsDetails.MembershipAirlineNumber, 
        `Invalid Airline Member Number shown: Expect: ${airSpecialRequestsDetails.MembershipAirlineNumber} and Acutal: ${membAirlineNumber}`)
}

exports.hotelSpecialRequests = async(table) => {
    let headerValue;
    let dataEntry; 
    let hotelSpecialRequestsDetails ={};
    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;  
    });

    for (var i = 0; i < headerValue.length; i++){
        switch(headerValue[i]){
            case 'HotelSpecialRequests1':
                await evaluate($(`${travelPrePage.hotelSpecialRequest1Id()}`), (elem) => {return elem.click();});
                break;
                
            case 'HotelSpecialRequests2':
                await evaluate($(`${travelPrePage.hotelSpecialRequest2Id()}`), (elem) => {return elem.click();});
                break;
            
            case 'MembershipHotel':
                await dropDown({ id: `${travelPrePage.membershipHotel()}`}).select(`${dataEntry[headerValue[i]]}`)
                break;
            
            case 'MembershipHotelNumber':
                await write(`${dataEntry[headerValue[i]]}`, $(`${travelPrePage.membershipsHotelNum()}`))
                break; 
        }
        hotelSpecialRequestsDetails[headerValue[i]] = dataEntry[headerValue[i]];
        gauge.dataStore.scenarioStore.put("hotelSpecialRequestsDetails", hotelSpecialRequestsDetails);
    }
    await evaluate($(`${travelPrePage.hotelSaveBtn()}`), (elem) => {
        return elem.click();
      });
}

exports.validateHotelPrference= async() => {
    await this.validateHotelMember()
    await this.validateHotelSpecailRequest()
}

exports.validateHotelMember= async() => {
    let hotelSpecialRequestsDetails= gauge.dataStore.scenarioStore.get("hotelSpecialRequestsDetails" );
    await scrollTo($(`${purchase.membHotel()}`))
    let actualMemberHotel = await $(`${purchase.membHotel()}`).text()
    let actualMemberNumber = await evaluate($(`${purchase.membHotelNumber()}`), (elem) => { return elem.getAttribute('value') });
    assert.strictEqual(actualMemberHotel, hotelSpecialRequestsDetails.MembershipHotel, `Invalid Member Hotel shown. Expected: ${hotelSpecialRequestsDetails.MembershipHotel} and Acutal ${actualMemberHotel}`)
    assert.strictEqual(actualMemberNumber, hotelSpecialRequestsDetails.MembershipHotelNumber, 
        `Invalid Hotel Member Number shown. Expected: ${hotelSpecialRequestsDetails.MembershipHotelNumber} and Acutal ${actualMemberNumber}`)
}

exports.validateHotelSpecailRequest= async() => {
    let hotelSpecialRequestsDetails= gauge.dataStore.scenarioStore.get("hotelSpecialRequestsDetails" );
    let actualHotelSpecialRequest = await $(`${purchase.hotelSpecialreq()}`).text()
    let HotelSpecialReq = hotelSpecialRequestsDetails.HotelSpecialRequests1 +", "+ hotelSpecialRequestsDetails.HotelSpecialRequests2
    assert.strictEqual(actualHotelSpecialRequest, HotelSpecialReq, `Invalid Hotel Request shown. Expected: ${HotelSpecialReq} and Acutal ${actualHotelSpecialRequest}`)
}

exports.carSpecialRequests = async(table) => {
    let headerValue;
    let dataEntry;
    let carSpecialRequestsDetails ={};

    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;  
    });

    for (var i = 0; i < headerValue.length; i++){
        switch(headerValue[i]){
           
            case 'DefaultCarSize':
                await dropDown({ id: `${travelPrePage.defaultCarSize()}` }).select(`${dataEntry[headerValue[i]]}`)
                break;

            case 'CarSpecialRequest1':
                await evaluate($(`${travelPrePage.carSpecialRequest1Id()}`), (elem) => {return elem.click();});
                break;
                
            case 'CarSpecialRequest2':
                await evaluate($(`${travelPrePage.carSpecialRequest2Id()}`), (elem) => {return elem.click();});
                break;
            
            case 'MembershipCar':
                await dropDown({ id: `${travelPrePage.membershipCar()}`}).select(`${dataEntry[headerValue[i]]}`)
                break;
            
            case 'MembershipCarNumber':
                await write(`${dataEntry[headerValue[i]]}`, $(`${travelPrePage.membershipsCarNum()}`))   
                break;
            }
            carSpecialRequestsDetails[headerValue[i]] = dataEntry[headerValue[i]];
            gauge.dataStore.scenarioStore.put("carSpecialRequestsDetails", carSpecialRequestsDetails);
        }
    await evaluate($(`${travelPrePage.carSaveBtn()}`), (elem) => {return elem.click();});
}

exports.validateCarRentalPrference = async () =>{
    await this.validateCarMember()
    await this.validateCarSpecailRequest()
}

exports.validateCarSpecailRequest = async () =>{
    let expecteCarSpecialRequestsDetails = gauge.dataStore.scenarioStore.get("carSpecialRequestsDetails");
    assert.ok(await checkBox({ id: `${purchase.carSpecialRequest2()}` }).isChecked(), `${expecteCarSpecialRequestsDetails.CarSpecialRequest2} is not Checked` )
    assert.ok(await checkBox({ id: `${purchase.carSpecialRequest5()}` }).isChecked(), `${expecteCarSpecialRequestsDetails.CarSpecialRequest1} is not Checked` )
}

exports.validateCarMember = async () =>{
    let expecteCarSpecialRequestsDetails = gauge.dataStore.scenarioStore.get("carSpecialRequestsDetails");
    await scrollTo($(`${purchase.membCar()}`))
    let actualMembCar = await $(`${purchase.membCar()}`).text()
    let actualMembCarNumber = await evaluate($(`${purchase.membCarNumber()}`), (elem) => { return elem.getAttribute('value') });
    assert.strictEqual(actualMembCarNumber, expecteCarSpecialRequestsDetails.MembershipCarNumber, 
        `Invalid Car Member Number shown: Expect: ${expecteCarSpecialRequestsDetails.MembershipCarNumber} and Acutal: ${actualMembCarNumber}`)
    assert.strictEqual(actualMembCar, expecteCarSpecialRequestsDetails.MembershipCar, 
        `Invalid Car Member  shown: Expect: ${expecteCarSpecialRequestsDetails.MembershipCar} and Actual :${actualMembCar}`)
}

exports.trainSpecialRequests = async(table) => {
    let headerValue;
    let dataEntry;
    let trainSpecialRequestsDetails = {}
    
    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;  
    });
    
    for (var i = 0; i < headerValue.length; i++){
        switch(headerValue[i]){
            case 'HomeTrainStation':
                await scrollTo($(`${travelPrePage.trainHeader()}`))
                await write(`${dataEntry[headerValue[i]]}`, $(`${travelPrePage.homeTrainStation()}`))
                break; 
            case 'MembershipTrain':
                await dropDown({ id: `${travelPrePage.membershipTrain()}`}).select(`${dataEntry[headerValue[i]]}`)
                break;
            case 'MembershipTrainNumber':
                await write(`${dataEntry[headerValue[i]]}`, $(`${travelPrePage.membershipTrainNum()}`))
                break;   
        }
        trainSpecialRequestsDetails[headerValue[i]] = dataEntry[headerValue[i]];
        gauge.dataStore.scenarioStore.put("trainSpecialRequestsDetails", trainSpecialRequestsDetails);
    }
    await evaluate($(`${travelPrePage.trainSaveBtn()}`), (elem) => {return elem.click();});
}
    
exports.validateTrainPrference = async () =>{
    await this.validateTrainMember()
}

exports.validateTrainMember = async () =>{
    let expectTrainSpecialRequestsDetails = gauge.dataStore.scenarioStore.get("trainSpecialRequestsDetails")
    await scrollTo($(`${purchase.membTrain()}`))
    let actualMembTrain = await $(`${purchase.membTrain()}`).text()
    let actualMembTrainNumber = await evaluate($(`${purchase.membTrainNumber()}`), (elem) => { return elem.getAttribute('value') });
    assert.strictEqual(actualMembTrain, expectTrainSpecialRequestsDetails.MembershipTrain , 
        `Invalid Train Member shown: Expect: ${expectTrainSpecialRequestsDetails.MembershipTrain } and Acutal: ${actualMembTrain}`)
    assert.strictEqual(actualMembTrainNumber, expectTrainSpecialRequestsDetails.MembershipTrainNumber , 
        `Invalid Train Member Number shown: Expect: ${expectTrainSpecialRequestsDetails.MembershipTrainNumber } and Acutal: ${actualMembTrainNumber}`)
}

exports.clearAirPrferenceData = async () =>{
   await this.clearHomeAirport()
   await this.clearAirSpecialRequest()
   await this.clearAirMember()
   await this.clickFlightSaveBtnAfterClear()
}

exports.clearHomeAirport = async () =>{
    await clear($(`${travelPrePage.homeAirport()}`), { force: true })
}

exports.clearAirSpecialRequest = async () =>{
    await checkBox({ id: `${travelPrePage.airSpecialrequests1()}` }).uncheck();
    await checkBox({ id: `${travelPrePage.airSpecialrequests2()}` }).uncheck();
}

exports.clearAirMember = async () =>{
    await evaluate($(`${travelPrePage.deleteMemberAir()}`), (elem) => {return elem.click();});
}

exports.clickFlightSaveBtnAfterClear = async () =>{
    await waitFor(5000)
    await evaluate($(`${travelPrePage.flightSaveBtn()}`), (elem) => {return elem.click();});
}

exports.clearHotelPrferenceData = async () =>{
    await this.clearHotelRequest()
    await this.clearHotelMember()
    await this.clickHotelSaveBtnAfterClear()
}

exports.clearHotelRequest = async () => {
    await checkBox({ id: `${travelPrePage.hotelSpecialRequest1()}` }).uncheck();
    await checkBox({ id: `${travelPrePage.hotelSpecialRequest2()}` }).uncheck();
}

exports.clearHotelMember = async () => {
    await evaluate($(`${travelPrePage.deleteMemberHotel()}`), (elem) => {return elem.click();});
}

exports.clickHotelSaveBtnAfterClear = async () =>{
    await waitFor(5000)
    await evaluate($(`${travelPrePage.hotelSaveBtn()}`), (elem) => {return elem.click();});
}

exports.clearCarPrferenceData = async () =>{
    await this.clearCarRequest()
    await this.clearCarMember()
    await this.clickCarSaveBtnAfterClear() 
}

exports.clearCarRequest = async () => {
    await checkBox({ id: `${travelPrePage.carSpecialRequest1()}`}).uncheck();
    await checkBox({ id: `${travelPrePage.carSpecialRequest2()}`}).uncheck();
}

exports.clearCarMember = async () => {
    await evaluate($(`${travelPrePage.deleteMemberCar()}`), (elem) => {return elem.click();});
}

exports.clickCarSaveBtnAfterClear = async () => {
    await waitFor(5000)
    await evaluate($(`${travelPrePage.carSaveBtn()}`), (elem) => {return elem.click();});
}

exports.clearTrainPrferenceData = async () =>{
    await this.clearTrainHomeStation()
    await this.clearTrainMember()
    await this.clickTrainSaveBtnAfterClear()
}

exports.clearTrainHomeStation = async () => {
    await clear($(`${travelPrePage.homeTrainStation()}`), { force: true })
}

exports.clearTrainMember = async () => {
    await evaluate($(`${travelPrePage.deleteMemberTrain()}`), (elem) => {return elem.click();});
}

exports.clickTrainSaveBtnAfterClear = async () => {
    await waitFor(5000)
    await evaluate($(`${travelPrePage.trainSaveBtn()}`), (elem) => {return elem.click();});
}

exports.validateHomeTrainStation = async() => {
    await focus($(`${tripPlanner_locator.trainDeparture()}`))
    let actualHomeTrainLocation = await textBox({id: `${tripPlanner_locator.homeTrainStattion()}` }).value()
    let expectTrainSpecialRequestsDetails = gauge.dataStore.scenarioStore.get("trainSpecialRequestsDetails")
    expect(actualHomeTrainLocation).to.contain(expectTrainSpecialRequestsDetails.HomeTrainStation,
        `Train Station do not match, Expected : ${ expectTrainSpecialRequestsDetails.HomeTrainStation}, Actual : ${actualHomeTrainLocation}`)
}

exports.selectSpecialRequestPreference = async(args, table) => {
    await helper.waitForLoaderSvg();
    await helper.waitForSpinner();    
    switch(args){
        case "Air":
          await this.airSpecialRequests(table)
          break;
        case "Hotel":
          await this.hotelSpecialRequests(table)
          break;
        case "Car Rental":
          await this.carSpecialRequests(table)
          break;
        case "Train":
          await this.trainSpecialRequests(table)
          break;
    }
}

exports.validateSpecialRequestPreference = async (args) => {
    switch(args){
        case "Air":
          await this.validateFlightPrference()
          break;
        case "Hotel":
          await this.validateHotelPrference()
          break;
        case "Car Rental":
          await this.validateCarRentalPrference()
          break;
        case "Train":
          await this.validateTrainPrference()
          break;
    }
}
exports.clearAllPreference  = async (args) => {
await helper.waitForLoaderSvg();
await helper.waitForSpinner();    
switch(args){
    case "Air":
      await this.clearAirPrferenceData()
      break;
    case "Hotel":
      await this.clearHotelPrferenceData()
      break;
    case "Car Rental":
      await this.clearCarPrferenceData()
      break;
    case "Train":
      await this.clearTrainPrferenceData()
      break;
    case "AHC":
    await this.clearAHCPrferenceData()
    break;
  }
}

exports.clearAHCPrferenceData = async ()=>{
    await this.clearHomeAirport()
    await this.clearAirSpecialRequest()
    await this.clearAirMember()
    await waitFor(5000)
    await this.clearHotelRequest()
    await this.clearHotelMember()
    await waitFor(5000)
    await this.clearCarRequest()
    await this.clearCarMember()
    await this.clickCarSaveBtnAfterClear()

}

exports.changeLoyalityMembership = async(table) => {
    await scrollTo($(`${purchase.prederenceEdit()}`))
    await click($(`${purchase.prederenceEdit()}`))
    let searchTypeTrip =  gauge.dataStore.specStore.get("searchTypeTrip");
    let headerValue;
    let dataEntry;
    let loyalityMemership= {} 
    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;  
    });
    for (var i = 0; i < headerValue.length; i++){
        loyalityMemership[headerValue[i]] = dataEntry[headerValue[i]];
        gauge.dataStore.scenarioStore.put("loyalityMemership", loyalityMemership);
    }
    switch(searchTypeTrip.searchType){
        case "AirOnly":
            await this.clearAirMember()()
            break;
        case "HotelOnly":
            await this.clearHotelMember()
            break;
        case "CarRentalOnly":
            await this.clearCarMember()
            break;
        case "AHC":
            await this.AHCMember()
            break;
    }
}

exports.changeAirlineMember =async() =>{
    let loyalityMemership=  gauge.dataStore.scenarioStore.get("loyalityMemership");
    await dropDown({ id: `${purchase.frequentFlyerPrograms()}`}).select(loyalityMemership.MembershipAirline) 
    await clear($(`${purchase.airlineNumber()}`))
    await write(loyalityMemership.MembershipAirlineNumber, $(`${purchase.airlineNumber()}`))
}

exports.changeHotelMember =async() =>{
    let loyalityMemership=  gauge.dataStore.scenarioStore.get("loyalityMemership");
    await dropDown({ id: `${purchase.frequentFlyerPrograms()}`}).select(loyalityMemership.MembershipHotel) 
    await clear($(`${purchase.hotelNumber()}`))
    await write(loyalityMemership.MembershipHotelNumber, $(`${purchase.hotelNumber()}`))
}

exports.changeCarMember =async() =>{
    let loyalityMemership=  gauge.dataStore.scenarioStore.get("loyalityMemership");
    await dropDown({ id: `${purchase.frequentFlyerPrograms()}`}).select(loyalityMemership.CarMembership) 
    await clear($(`${purchase.carNumber()}`))
    await write(loyalityMemership.CarMembershipNumber, $(`${purchase.carNumber()}`))
}

exports.AHCMember =async() =>{
    let loyalityMemership =  gauge.dataStore.scenarioStore.get("loyalityMemership");
    await dropDown({ id: `${purchase.frequentFlyerPrograms()}`}).select(loyalityMemership.MembershipAirline) 
    await clear($(`${purchase.airlineNumber()}`))
    await write(loyalityMemership.MembershipAirlineNumber, $(`${purchase.airlineNumber()}`))
    await dropDown({ id: `${purchase.hotelRewardsPrograms()}`}).select(loyalityMemership.MembershipHotel) 
    await clear($(`${purchase.hotelNumber()}`))
    await write(loyalityMemership.MembershipHotelNumber, $(`${purchase.hotelNumber()}`))
    await dropDown({ id: `${purchase.carRentalMembership()}`}).select(loyalityMemership.CarMembership) 
    await clear($(`${purchase.carNumber()}`))
    await write(loyalityMemership.CarMembershipNumber, $(`${purchase.carNumber()}`))
}

exports.clearLoyalityMembership = async() => {
    let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip")
    switch (tripType.searchType) {
        case "AirOnly":
            await this.clearAirMember()
            await this.clickFlightSaveBtnAfterClear()
            break;
        case "HotelOnly":
            await this.clearHotelMember()
            await this.clickHotelSaveBtnAfterClear()
            break;
        case "CarRentalOnly":
            await this.clearCarMember()
            await this.clickCarSaveBtnAfterClear() 
            break;
        case "AHC":
            await this.clearAirMember()
            await this.clearHotelMember()
            await this.clearCarMember()
            await this.clickCarSaveBtnAfterClear() 
            break;
    }
}

exports.clearSpeicalRequest = async() => {
    let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip")
    switch (tripType.searchType) {
        case "AirOnly":
            await this.clearAirSpecialRequest()
            await this.clickFlightSaveBtnAfterClear()
            break;
        case "HotelOnly":
            await this.clearHotelRequest()
            await this.clickHotelSaveBtnAfterClear()
            break;
        case "CarRentalOnly":
            await this.clearCarRequest()
            await this.clickCarSaveBtnAfterClear() 
            break;
        case "AHC":
            await this.clearAirSpecialRequest()
            await this.clearHotelRequest()
            await this.clearCarRequest()
            await this.clickCarSaveBtnAfterClear() 
            break;
    }
}

exports.readXMLFile = async(dataType) => {
    var segmentCount;
    dataType == "Change" ? segmentCount = 1 : segmentCount = 0;
    await write(segmentCount, $(`${globalDashboard.revisionId()}`))
    await click( $(`${globalDashboard.searchPNRXMLBtn()}`))
    var xmlString = await $(`${globalDashboard.xmlFile()}`).text();
    var separator = `<?xml version="1.0" encoding="UTF-8"?><UserPnrData>`;
    segmentCount == 1 ? fieldsCount = 4 : fieldsCount = 2
    var splitData = xmlString.split(separator);
    for (var i=1; i <= fieldsCount; i++){
        var xmlData = separator +  splitData[i]
        gauge.dataStore.scenarioStore.put(`xmlData${i}`,  xmlData)
    }
}

exports.validateLoyalityInPNR = async() =>{
    let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip")
    switch (tripType.searchType) {
        case "AirOnly":
            await this.validateAirlineLoyaltyInPNR();
            break;
        case "HotelOnly":
            await this.validateHotelLoyaltyInPNR()
            break;
        case "CarRentalOnly":
            await this.validateCarLoyaltyInPNR()
            break;
        case "AHC":
            await this.validateAirlineLoyaltyInPNR();
            await this.validateHotelLoyaltyInPNR()
            await this.validateCarLoyaltyInPNR()
        break;
    }
}

exports.validateAirlineLoyaltyInPNR = async() => {
    let airline;
    let airlineCode;
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                    airline =  result['UserPnrData'].User[0].AirlinePreferences[0].MembershipSet[0].Membership[0].AirlineCode[0];
                    airlineCode =  result['UserPnrData'].User[0].AirlinePreferences[0].MembershipSet[0].Membership[0].MembershipNumber[0];
                    await travel_preference_action.validateAirlineLoyalty(airline, airlineCode, datatype);    
                    break;
                case "change":
                    airline =  result['UserPnrData'].User[0].AirlinePreferences[0].MembershipSet[0].Membership[0].AirlineCode[0];
                    airlineCode =  result['UserPnrData'].User[0].AirlinePreferences[0].MembershipSet[0].Membership[0].MembershipNumber[0];
                    await travel_preference_action.validateAirlineLoyalty(airline, airlineCode, datatype);
                    break;
            }
        });
    }
}

exports.validateAirlineLoyalty = async (actualAirline, actualAirlineCode, datatype) =>{
    let expectedAirline = pnrData.AirlineLoyalty.airlineLoyality
    let expectedAirlineCode = pnrData.AirlineLoyalty.airlineLoyalityCode
    assert.strictEqual(actualAirline, expectedAirline, 
        `Invalid Airline is showing on the ${datatype} PNR XML. Expected: ${expectedAirline} and Actual: ${actualAirline}`)
    assert.strictEqual(actualAirlineCode, expectedAirlineCode, 
        `Invalid Airline Code is showing on the ${datatype} PNR XML. Expected: ${expectedAirlineCode} and Actual: ${actualAirlineCode}`)
}


exports.validateHotelLoyaltyInPNR = async() => {
    let hotelMembership;
    let hotelMembershipCode;
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)

        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                    hotelMembership = result['UserPnrData'].User[0].HotelPreferences[0].MembershipSet[0].Membership[0].ChainCode[0];
                    hotelMembershipCode = result['UserPnrData'].User[0].HotelPreferences[0].MembershipSet[0].Membership[0].MembershipNumber[0];
                    await travel_preference_action.validateHotelLoyalty(hotelMembership, hotelMembershipCode, datatype);    
                    break;
                case "change":
                    hotelMembership = result['UserPnrData'].User[0].HotelPreferences[0].MembershipSet[0].Membership[0].ChainCode[0];
                    hotelMembershipCode = result['UserPnrData'].User[0].HotelPreferences[0].MembershipSet[0].Membership[0].MembershipNumber[0];
                    await travel_preference_action.validateHotelLoyalty(hotelMembership, hotelMembershipCode, datatype);
                    break;
            }
        });
    }
}

exports.validateHotelLoyalty = async (actualHotelMembership, actualHotelMembershipCode, datatype) =>{
    let expectedHotelMembership = pnrData.HotelLoyalty.hotelLoyality
    let expectedHotelMembershipCode = pnrData.HotelLoyalty.hotelLoyalityCode

    assert.strictEqual(actualHotelMembership, expectedHotelMembership, 
        `Invalid Hotel is showing on the ${datatype} PNR XML. Expected: ${expectedHotelMembership} and Actual: ${actualHotelMembership}`)
    assert.strictEqual(actualHotelMembershipCode, expectedHotelMembershipCode, 
        `Invalid Hotel Code is showing on the ${datatype} PNR XML. Expected: ${expectedHotelMembershipCode} and Actual: ${actualHotelMembershipCode}`)
}


exports.validateCarLoyaltyInPNR = async() => {
    let carMembership;
    let carMembershipCode;
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                    carMembership = result['UserPnrData'].User[0].CarRentalPreferences[0].MembershipSet[0].Membership[0].CompanyCode[0];
                    carMembershipCode = result['UserPnrData'].User[0].CarRentalPreferences[0].MembershipSet[0].Membership[0].MembershipNumber[0];
                    await travel_preference_action.validateCarLoyalty(carMembership, carMembershipCode, datatype);    
                    break;
                case "change":
                    carMembership = result['UserPnrData'].User[0].CarRentalPreferences[0].MembershipSet[0].Membership[0].CompanyCode[0];
                    carMembershipCode = result['UserPnrData'].User[0].CarRentalPreferences[0].MembershipSet[0].Membership[0].MembershipNumber[0];
                    await travel_preference_action.validateCarLoyalty(carMembership, carMembershipCode, datatype);
                    break;
            }
        });
    }
}

exports.validateCarLoyalty = async (actualCarMembership, actualCarMembershipCode, datatype) =>{
    let expectedCarMembership = pnrData.CarLoyalty.carLoyality
    let expectedCarMembershipCode = pnrData.CarLoyalty.carLoyalityCode

    assert.strictEqual(actualCarMembership, expectedCarMembership, 
        `Invalid Car is showing on the ${datatype} PNR XML. Expected: ${expectedCarMembership} and Actual: ${actualCarMembership}`)
    assert.strictEqual(actualCarMembershipCode, expectedCarMembershipCode, 
        `Invalid Car Code is showing on the ${datatype} PNR XML. Expected: ${expectedCarMembershipCode} and Actual: ${actualCarMembershipCode}`)
}

exports.clickPreferenceAndRewardsProgramsEdit = async () =>{
    await evaluate($(`${purchase.editpreferenceAndRewardsPrograms()}`), (elem) => {return elem.click();});           
}

exports.changeTravelPreference = async (table) => {
    await this.getChangeTravelPeferenceDataFromTable(table)
    let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip")
    switch (tripType.searchType) {
        case "AHC":
            await this.changeFlightTravelPreference();
            await this.changeHotelTravelPreference()
            await this.changeCarRentalTravelPreference()
    }
}

exports.validateSpecailRequest = async() => {
    await helper.waitForLoaderSvg();
    let searchTypeTrip =  gauge.dataStore.scenarioStore.get("searchTypeTrip");
    switch(searchTypeTrip.searchType){
        case "AirOnly":
            await this.validateAirSpecialRequests()
            break;
        case "HotelOnly":
            await this.validateHotelSpecailRequest()
            break;
        case "CarRentalOnly":
            await this.validateCarSpecailRequest()
            break;
        case "AHC":
            await this.validateAirSpecialRequests()
            await this.validateHotelSpecailRequest()
            await this.validateCarSpecailRequest()
            break;
    }
}


exports.validateSpecailRequestInPNR = async() =>{
    let tripType = await gauge.dataStore.scenarioStore.get("searchTypeTrip")
    switch (tripType.searchType) {
        case "AirOnly":
            await this.validateAirlineSpecialRequestInPNR();
            break;
        case "HotelOnly":
            await this.validateHotelSpecailRequestInPNR()
            break;
        case "CarRentalOnly":
            await this.validateCarSpecailRequestInPNR()
            break;
        case "AHC":
            await this.validateAirlineSpecialRequestInPNR();
            await this.validateHotelSpecailRequestInPNR()
            await this.validateCarSpecailRequestInPNR()
        break;
    }
}

exports.getChangeTravelPeferenceDataFromTable = async(table) => {
    let headerValue;
    let dataEntry;
    let changeTravelPeferenceData= {}

    await table.entries(async (entry) => {
    headerValue = Object.keys(entry);
    dataEntry = entry;
    });

    for (var i = 0; i < headerValue.length; i++) {
        changeTravelPeferenceData[headerValue[i]] = dataEntry[headerValue[i]];
        gauge.dataStore.scenarioStore.put("changeTravelPeferenceData", changeTravelPeferenceData);
    }
}

exports.changeFlightTravelPreference = async () => {
   let changeTravelPeferenceData=  gauge.dataStore.scenarioStore.get("changeTravelPeferenceData");
   await clear($(`${purchase.selectFrequentFlyerProgramsNumber()}`))
   await dropDown({ name: `${purchase.selectFrequentFlyerPrograms()}` }).select(changeTravelPeferenceData.MembershipAirline)  
   await write(changeTravelPeferenceData.MembershipAirlineNumber, $(`${purchase.selectFrequentFlyerProgramsNumber()}`))
   await evaluate($(`${purchase.specialRequest1()}`), (elem) => {return elem.click();});    
   await evaluate($(`${purchase.specialRequest2()}`), (elem) => {return elem.click();});
   await evaluate($(`${purchase.specialRequest3()}`), (elem) => {return elem.click();});  
}

exports.changeHotelTravelPreference = async () => {
    let changeTravelPeferenceData=  gauge.dataStore.scenarioStore.get("changeTravelPeferenceData");
    await clear($(`${purchase.hotelRewardsProgramssNumber()}`))
    await dropDown({ name: `${purchase.hotelRewardsPrograms()}` }).select(changeTravelPeferenceData.MembershipHotel)  
    await write(changeTravelPeferenceData.MembershipHotelNumber, $(`${purchase.hotelRewardsProgramssNumber()}`))
    await evaluate($(`${purchase.hotelSpecialRequest0()}`), (elem) => {return elem.click();});    
    await evaluate($(`${purchase.hotelSpecialRequest1()}`), (elem) => {return elem.click();});
    await evaluate($(`${purchase.hotelSpecialRequest2()}`), (elem) => {return elem.click();});  
}

exports.changeCarRentalTravelPreference = async () => {
    let changeTravelPeferenceData=  gauge.dataStore.scenarioStore.get("changeTravelPeferenceData");
    await clear($(`${purchase.carRentalMembershipNumber()}`))
    await dropDown({ name: `${purchase.carRentalMembership()}` }).select(changeTravelPeferenceData.MembershipCar)  
    await write(changeTravelPeferenceData.MembershipCarNumber, $(`${purchase.carRentalMembershipNumber()}`))
    await evaluate($(`${purchase.carSpecialRequest2Id()}`), (elem) => {return elem.click();}); 
    await evaluate($(`${purchase.carSpecialRequest5Id()}`), (elem) => {return elem.click();}); 
    await checkBox({ id: `${purchase.carSpecialRequest6()}`}).check();
}

exports.validateChangeTravelPreference = async () =>{
    let changeTravelPeferenceData=  gauge.dataStore.scenarioStore.get("changeTravelPeferenceData");
    assert.ok (!(await text(changeTravelPeferenceData.MembershipAirline).isVisible()),`${changeTravelPeferenceData.MembershipAirline} should not be shown`)
    assert.ok (!await text(changeTravelPeferenceData.MembershipAirlineNumber).exists(),`${changeTravelPeferenceData.MembershipAirline} should not be shown`)
    assert.ok (!await checkBox({ id:  `${travelPrePage.airSpecialrequests3()}` }).isChecked(),`${changeTravelPeferenceData.AirSpecialRequests1} is selected`)

    assert.ok (!await text(changeTravelPeferenceData.MembershipHotel).isVisible(),`${changeTravelPeferenceData.MembershipHotel} should not be shown`)
    assert.ok (!await text(changeTravelPeferenceData.MembershipHotelNumber).exists(),`${changeTravelPeferenceData.MembershipHotelNumber} should not be show`)
    assert.ok (!await checkBox({ id: `${travelPrePage.hotelSpecialRequest3()}` }).isChecked(),`${changeTravelPeferenceData.HotelSpecialRequests1} is selected`)

    assert.ok (!await text(changeTravelPeferenceData.MembershipCar).isVisible(),`${changeTravelPeferenceData.MembershipCar} should not be shown`)
    assert.ok (!await text(changeTravelPeferenceData.MembershipCarNumber).exists(),`${changeTravelPeferenceData.MembershipCarNumber} should not be show`)
    assert.ok (!await checkBox({ id: `${travelPrePage.carSpecialRequest3()}` }).isChecked(),`${changeTravelPeferenceData.CarSpecialRequest1} is selected`)
}

exports.validateAirlineSpecialRequestInPNR = async() => {
    let airlineReq1;
    let airlineReq2;
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                    airlineReq1 =  result['UserPnrData'].User[0].AirlinePreferences[0].SpecialRequestSet[0].SpecialRequest[0];
                    airlineReq2 =  result['UserPnrData'].User[0].AirlinePreferences[0].SpecialRequestSet[0].SpecialRequest[1];
                    await travel_preference_action.validateAirlineLSpecialRequestPnr(airlineReq1, airlineReq2, datatype);    
                    break;
                case "change":
                    airlineReq1 =  result['UserPnrData'].User[0].AirlinePreferences[0].SpecialRequestSet[0].SpecialRequest[0];
                    airlineReq2 =  result['UserPnrData'].User[0].AirlinePreferences[0].SpecialRequestSet[0].SpecialRequest[1];
                    await travel_preference_action.validateAirlineLSpecialRequestPnr(airlineReq1, airlineReq2, datatype);    
                    break;
            }
        });
    }
}

exports.validateAirlineLSpecialRequestPnr = async (actualAirSpeciaRequest1, actualAirSpeciaRequest2, datatype) =>{
    let expectedairSpeciaRequest1 = pnrData.AirSpecialRequest.airSpeciaRequest1
    let expectedairSpeciaRequest2 = pnrData.AirSpecialRequest.airSpeciaRequest2
    assert.strictEqual(actualAirSpeciaRequest1, expectedairSpeciaRequest1, 
        `Invalid Airline Request 1 is showing on the ${datatype} PNR XML. Expected: ${expectedairSpeciaRequest1} and Actual: ${actualAirSpeciaRequest1}`)
    gauge.message(`Sucessfully validated Airline Request 1 in ${datatype} PNR XML. Expected: ${expectedairSpeciaRequest1} and Actual: ${actualAirSpeciaRequest1}`)
    assert.strictEqual(actualAirSpeciaRequest2, expectedairSpeciaRequest2, 
        `Invalid Airline Request 2 is showing on the ${datatype} PNR XML. Expected: ${expectedairSpeciaRequest2} and Actual: ${actualAirSpeciaRequest2}`)
    gauge.message(`Sucessfully validated Airline Request 2 in ${datatype} PNR XML. Expected: ${expectedairSpeciaRequest2} and Actual: ${actualAirSpeciaRequest2}`)
        
}


exports.validateHotelSpecailRequestInPNR = async() => {
    let hotelReq1;
    let hotelReq2;
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)

        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                    hotelReq1 = result['UserPnrData'].User[0].HotelPreferences[0].SpecialRequestSet[0].SpecialRequest[0];
                    hotelReq2 = result['UserPnrData'].User[0].HotelPreferences[0].SpecialRequestSet[0].SpecialRequest[1];
                    await travel_preference_action.validateHotelSpecailRequestPnr(hotelReq1, hotelReq2, datatype);    
                    break;
                case "change":
                    hotelReq1 = result['UserPnrData'].User[0].HotelPreferences[0].SpecialRequestSet[0].SpecialRequest[0];
                    hotelReq2 = result['UserPnrData'].User[0].HotelPreferences[0].SpecialRequestSet[0].SpecialRequest[1];
                    await travel_preference_action.validateHotelSpecailRequestPnr(hotelReq1, hotelReq2, datatype);  
                    break;
            }
        });
    }
}

exports.validateHotelSpecailRequestPnr = async (actualHotelReq1, actualHotelReq2, datatype) =>{
    let expectedHotelReq1 = pnrData.HotelSpecialRequest.hotelSpeciaRequest1
    let expectedHotelReq2 = pnrData.HotelSpecialRequest.hotelSpeciaRequest2

    assert.strictEqual(actualHotelReq1, expectedHotelReq1, 
        `Invalid Hotel Request 1 is showing on the ${datatype} PNR XML. Expected: ${expectedHotelReq1} and Actual: ${actualHotelReq1}`)
    gauge.message(`Successfully validated Hotel Request 1 in ${datatype} PNR XML. Expected: ${expectedHotelReq1} and Actual: ${actualHotelReq1}`)
        
    assert.strictEqual(actualHotelReq2, expectedHotelReq2, 
        `Invalid Hotel Request 2 is showing on the ${datatype} PNR XML. Expected: ${expectedHotelReq2} and Actual: ${actualHotelReq2}`)
    gauge.message(`Successfully validated Hotel Request 2 in ${datatype} PNR XML. Expected: ${expectedHotelReq2} and Actual: ${actualHotelReq2}`)

}


exports.validateCarSpecailRequestInPNR = async() => {
    let carReq1;
    let carReq2;
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                    carReq1 = result['UserPnrData'].User[0].CarRentalPreferences[0].SpecialRequestSet[0].SpecialRequest[0];
                    carReq2 = result['UserPnrData'].User[0].CarRentalPreferences[0].SpecialRequestSet[0].SpecialRequest[1];
                    await travel_preference_action.validateCarSpecailRequestPnr(carReq1, carReq2, datatype);    
                    break;
                case "change":
                    carReq1 = result['UserPnrData'].User[0].CarRentalPreferences[0].SpecialRequestSet[0].SpecialRequest[0];
                    carReq2 = result['UserPnrData'].User[0].CarRentalPreferences[0].SpecialRequestSet[0].SpecialRequest[1];
                    await travel_preference_action.validateCarSpecailRequestPnr(carReq1, carReq2, datatype);
                    break;
            }
        });
    }
}

exports.validateCarSpecailRequestPnr = async (actualCarReq1, actualCarReq2, datatype) =>{
    let expectedCarReq1 = pnrData.CarSpecialRequest.carSpeciaRequest1
    let expectedCarReq2 = pnrData.CarSpecialRequest.carSpeciaRequest2
    assert.strictEqual(actualCarReq1, expectedCarReq1, 
        `Invalid Car Request 1 is showing on the ${datatype} PNR XML. Expected: ${expectedCarReq1} and Actual: ${actualCarReq1}`)
    gauge.message(`Successfully validated Car Request 1 in ${datatype} PNR XML. Expected: ${expectedCarReq1} and Actual: ${actualCarReq1}`)
    assert.strictEqual(actualCarReq2, expectedCarReq2, 
        `Invalid Car Request 2 is showing on the ${datatype} PNR XML. Expected: ${expectedCarReq2} and Actual: ${actualCarReq2}`)
    gauge.message(`Successfully validated Car Request 2 in ${datatype} PNR XML. Expected: ${expectedCarReq2} and Actual: ${actualCarReq2}`)
}

exports.validateCostAllocationInPNRXML = async () => {
    let mis=[];
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                    for(var j=1; j<=7; j++){
                        mis[j] =  result['UserPnrData'].User[0].UserInfo[0][`MisField${j}`][0].Name[0];
                    }   
                    break;
            }
        });
        await travel_preference_action.validateMISFields(mis);
    }
}

exports.validateMISFields = async (mis) => {
     let pnrData = helper.pnrData()
     for(let i = 1; i < mis.length; i++)
     {
       assert.strictEqual(mis[i], pnrData.MisField[`MisField${i}`], 
        `MIS Fileds validation failed in PNR XML. Actual: ${mis[i]} and Expected: ${pnrData.MisField[`MisField${i}`]}`)
        gauge.message(`MIS Fileds validation failed in PNR XML. Actual: ${mis[i]} and Expected: ${pnrData.MisField[`MisField${i}`]}`)
     }
}

exports.clearTravelPreference = async (args) => {
    await helper.waitForLoaderSvg();
    await helper.waitForSpinner();
    switch(args){
        case "Air":
            await this.clearAirTravelPreference()
            await this.clickFlightSaveBtnAfterClear()
            break;
        case "Hotel":
            await this.clearHotelTravelPreference()
            await this.clickHotelSaveBtnAfterClear()
            break;
        case "Car":
            await this.clearCarTravelPreference()
            await this.clickCarSaveBtnAfterClear() 
            break;
        case "Train":
            await this.clearTrainTravelPreference()
            await this.clickTrainSaveBtnAfterClear()
            break;
        case "AHC":
            await this.clearAirTravelPreference()
            await this.clearHotelTravelPreference()
            await this.clearCarTravelPreference()
            await this.clickCarSaveBtnAfterClear() 
            break;
        default :
            break;
    }
} 

exports.clearAirTravelPreference = async () => {
    await this.HomeAirportClear()
    await this.AirSpecialRequestClear()
    await this.AirMemberClear()
   
}

exports.HomeAirportClear = async () => {
    let airportName = await evaluate($(`${travelPrePage.homeAirport()}`), (elem) => { return elem.getAttribute('value') });
    if(airportName != ""){
        await this.clearHomeAirport()
    }
}

exports.AirSpecialRequestClear = async () => {
    if (await checkBox({ id: `${travelPrePage.airSpecialrequests1()}` }).isChecked()) {
        await evaluate($(`${travelPrePage.airSpecialrequests1Id()}`), (elem) => {return elem.click();});
    }
    
    if (await checkBox({ id: `${travelPrePage.airSpecialrequests2()}`}).isChecked()) {
        await evaluate($(`${travelPrePage.airSpecialrequests2Id()}`), (elem) => {return elem.click();});
    }   
}

exports.AirMemberClear = async () =>{
    if(await ($(`${travelPrePage.deleteMemberAir()}`)).exists(0,0)){
        await evaluate($(`${travelPrePage.deleteMemberAir()}`), (elem) => {return elem.click();});
    }
}

exports.clearHotelTravelPreference = async () => {
    await this.hotelSpecialRequestClear()
    await this.hotelMemberClear()
}

exports.hotelSpecialRequestClear = async () => {
    if (await checkBox({ id: `${travelPrePage.hotelSpecialRequest1()}` }).isChecked()) {
        await evaluate($(`${travelPrePage.hotelSpecialRequest1Id()}`), (elem) => {return elem.click();});
    }
    
    if (await checkBox({ id: `${travelPrePage.hotelSpecialRequest2()}`}).isChecked()) {
        await evaluate($(`${travelPrePage.hotelSpecialRequest2Id()}`), (elem) => {return elem.click();});
    }   
}

exports.hotelMemberClear = async () => {
    if(await ($(`${travelPrePage.deleteMemberHotel()}`)).exists(0,0)){
        await evaluate($(`${travelPrePage.deleteMemberHotel()}`), (elem) => {return elem.click();});
    }
}

exports.clearCarTravelPreference = async () => {
    await scrollTo ($(`${travelPrePage.carRentalFrame()}`));
    await this.carSpecialRequestClear()
    await this.carMemberClear()
}

exports.carSpecialRequestClear = async () => {
    if (await checkBox({ id: `${travelPrePage.carSpecialRequest1()}` }).isChecked()) {
        await evaluate($(`${travelPrePage.carSpecialRequest1Id()}`), (elem) => {return elem.click();});
    }
    
    if (await checkBox({ id: `${travelPrePage.carSpecialRequest2()}`}).isChecked()) {
        await evaluate($(`${travelPrePage.carSpecialRequest2Id()}`), (elem) => {return elem.click();});
    }   
}

exports.carMemberClear = async () => {
    if(await ($(`${travelPrePage.deleteMemberCar()}`)).exists(0,0)){
        await evaluate($(`${travelPrePage.deleteMemberCar()}`), (elem) => {return elem.click();});
    }
}

exports.clearTrainTravelPreference = async () => {
    await this.trainHomeStationClear()
    await this.trainMemberClear()
}


exports.trainHomeStationClear = async () => {
    let trainHomeStation = await evaluate($(`${travelPrePage.homeTrainStation()}`), (elem) => { return elem.getAttribute('value') });
    if(trainHomeStation != ""){
        await this.clearTrainHomeStation()
    }
}

exports.trainMemberClear = async () => {
    if(await ($(`${travelPrePage.deleteMemberTrain()}`)).exists(0,0)){
        await evaluate($(`${travelPrePage.deleteMemberTrain()}`), (elem) => {return elem.click();});
    }
}

exports.validateCostAllocationInPNR = async() => {
    let actualCostAllocation;
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                case "Change":
                    actualCostAllocation = await travel_preference_action.readCostAllocationFromPNR(result['UserPnrData']);
                    await travel_preference_action.validateCostAllocation(actualCostAllocation, datatype);    
                    break;
                default:
                    break;
            }
        });
    }
}

exports.readCostAllocationFromPNR = async (jsonData) => {
    return jsonData.UserBooking[0].CostAllocations[0].Allocation[0].Name[0];
}

exports.validateCostAllocation = async (actualCostAllocation, datatype ) => {
    let expectedCostAllocation =  gauge.dataStore.scenarioStore.get("thirdCostAllocation")
    assert.strictEqual(actualCostAllocation, expectedCostAllocation, 
        `Invalid Cost Allocation is showing on the ${datatype} PNR XML. Expected: ${expectedCostAllocation} and Actual: ${actualCostAllocation}`)
    gauge.message(`Successfully validated on the ${datatype} PNR XML. Expected: ${expectedCostAllocation} and Actual: ${actualCostAllocation} `)
}
    
exports.validateCustomFieldsInPNR = async() => {
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                    await travel_preference_action.readCustomFieldsDataFromPNR(result['UserPnrData']);
                    break;
                case "change":
                    await travel_preference_action.readCustomFieldsDataFromPNR(result['UserPnrData']);
                    break;
            }
        });
    }
}

exports.validateCustomFields = async (actualTripPurpose, datatype ) =>{
    let expectedTripPurpose = pnrData.CustomFields.TripPurpose

    assert.strictEqual(actualTripPurpose, expectedTripPurpose, 
        `Invalid Department List is showing on the ${datatype} PNR XML. Expected: ${expectedTripPurpose} and Actual: ${actualTripPurpose}`)
}

exports.readCustomFieldsDataFromPNR = async (pnrData) => {
    let tripPurpose;
    tripPurpose = pnrData.CustomFields[0].TripPurposeTripPlanner[0].TripPurpose[0];
    await travel_preference_action.validateCustomFields(tripPurpose);  
    
}

exports.validateSplitCostAllocationInPNR = async(splitType) => {
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                   await travel_preference_action.validateSplitCostAllocation(result['UserPnrData'], datatype, splitType);    
                    break;
                default:
                    break;
            }
        });
    }
}

exports.validateSplitCostAllocation = async(pnrXMLData , datatype, splitType) => {
    let costAllocationData = helper.purchaseData();
    switch(splitType){
        case "Split":
            let expectedSplitCostAllocation1 = costAllocationData.CostAllocation.splitPrimaryChild;
            let expectedSplitCostAllocation2 = costAllocationData.CostAllocation.splitSecondaryChild;
            let actualSplitCostAllocation1 = pnrXMLData.UserBooking[0].CostAllocations[0].Allocation[0].Name[0]
            let actualSplitCostAllocation2 =pnrXMLData.UserBooking[0].CostAllocations[0].Allocation2[0].Name[0]

            assert.strictEqual(expectedSplitCostAllocation1, actualSplitCostAllocation1, `Invalid Primary Split cost allocation is showing on the ${datatype} PNR XML. Expected: ${expectedSplitCostAllocation1} and Actual: ${actualSplitCostAllocation1}`)
            gauge.message(`Valid Primary Split cost allocation is showing on the ${datatype} PNR XML. Expected: ${expectedSplitCostAllocation1} and Actual: ${actualSplitCostAllocation1}`)
           
            assert.strictEqual(expectedSplitCostAllocation2, actualSplitCostAllocation2, `Invalid Secondary Split cost allocationis showing on the ${datatype} PNR XML. Expected: ${expectedSplitCostAllocation2} and Actual: ${actualSplitCostAllocation2}`)
            gauge.message(`Valid Secondary Split cost allocationis showing on the ${datatype} PNR XML. Expected: ${expectedSplitCostAllocation2} and Actual: ${actualSplitCostAllocation2}`)
            break;
        case "Single":
            let expectedSingleCostAllocation = costAllocationData.CostAllocation.singleCostAllocationChild;
            let actualSingleCostAllocation = pnrXMLData.UserBooking[0].CostAllocations[0].Allocation[0].Name[0]

            assert.strictEqual(expectedSingleCostAllocation, actualSingleCostAllocation, `Invalid Primary Split cost allocation is showing on the ${datatype} PNR XML. Expected: ${expectedSingleCostAllocation} and Actual: ${actualSingleCostAllocation}`)
            gauge.message(`Valid Primary Split cost allocation is showing on the ${datatype} PNR XML. Expected: ${expectedSingleCostAllocation} and Actual: ${actualSingleCostAllocation}`)
            break;
    }
} 

exports.validatePreTripApprovalInPNR = async() => {
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                case "change":
                    let travelApproverID=  result['UserPnrData'].User[0].UserInfo[0].TravelApproverId[0] 
                    let travelApproverEmail= result['UserPnrData'].User[0].UserInfo[0].TravelApproverEmail[0] 
                    let travelApproverName = result['UserPnrData'].User[0].UserInfo[0].TravelApproverName[0]  
                    await travel_preference_action.validatePreTripApproval(travelApproverID, travelApproverEmail, travelApproverName, datatype )
                    break;
            }
        });
    }
}

exports.validatePreTripApproval = async (actualTravelApproverId, actualTravelApproverEmail, actualTravelApproverName, datatype ) =>{
    let expectedTravelApproverID = pnrData.PreTripApproval.TravelApproverId
    let expectedTravelApproverEmail = pnrData.PreTripApproval.TravelApproverEmail
    let expectedTravelApproverName = pnrData.PreTripApproval.travelApproverName
    assert.strictEqual(actualTravelApproverId, expectedTravelApproverID, 
        `Invalid Travel ApproverId is showing on the ${datatype} PNR XML. Expected: ${expectedTravelApproverID} and Actual: ${actualTravelApproverId}`)
    gauge.message(`Successfull! Travel ApproverId is showing on the ${datatype} PNR XML. Expected: ${expectedTravelApproverID} and Actual: ${actualTravelApproverId}`)

    assert.strictEqual(actualTravelApproverEmail, expectedTravelApproverEmail, 
        `Invalid Travel Approver Email is showing on the ${datatype} PNR XML. Expected: ${expectedTravelApproverEmail} and Actual: ${actualTravelApproverEmail}`)
    gauge.message(`Sucessfull! Travel Approver Email is showing on the ${datatype} PNR XML. Expected: ${expectedTravelApproverEmail} and Actual: ${actualTravelApproverEmail}`)

    assert.strictEqual(actualTravelApproverName, expectedTravelApproverName, 
        `Invalid Travel Approver Name is showing on the ${datatype} PNR XML. Expected: ${expectedTravelApproverName} and Actual: ${actualTravelApproverName}`)
    gauge.message(`Successfull! Travel Approver Name is showing on the ${datatype} PNR XML. Expected: ${expectedTravelApproverName} and Actual: ${actualTravelApproverName}`)
}

exports.goToAccountPage = async () => {
    await click($(`${tripPlanner_locator.settingIcon()}`));
    await click($(`${tripPlanner_locator.account()}`))
}

exports.paymentCard = async(action) =>{
    switch(action){
        case "Add":
            await this.clickOnAddPayment();
            await this.enterPaymentCardInformation()
            await this.enterBillingAddress()
            await this.cardSavebutton()
            break;
        case "Edit":
            await this.clickOnEditPayment();
            await waitFor(5000)
            await this.clearCardName()
            await this.enterCardName()
            await this.cardSavebutton()
            break;
        case "Delete":
            await this.clickOnDeletePayment()
            break;
        case "Delete existing": 
            await this.deleteExistingPaymentCard()
            break;
        default:
            break;
    }
}

exports.clearCardName = async() =>{
    await click($(`${travelPrePage.cardName()}`))
    await clear($(`${travelPrePage.cardName()}`))
}

exports.clickOnAddPayment = async() => {
    let addFlag= gauge.dataStore.scenarioStore.get("addFlag")
    addFlag == true ? await click($(`${travelPrePage.addPaymentCard()}`)) 
    : await click($(`${travelPrePage.editPaymentCard()}`))
}

exports.enterCardName = async() =>{
    let otfopDetails = helper.otfopDetails("MasterCard")
    await write(otfopDetails.carHolderName + Math.random().toString(36).substring(10), $(`${travelPrePage.cardName()}`))

}

exports.enterPaymentCardInformation = async() => {
    let otfopDetails = helper.otfopDetails("MasterCard")
    await this.enterCardName()
    await dropDown({ name: `${travelPrePage.cardType()}` }).select(otfopDetails.cardType);
    await write(otfopDetails.cardNumber, $(`${travelPrePage.cardNumber()}`))
    await dropDown({ name: `${travelPrePage.cardExpiryYear()}`}).select({ index: "2" });
}

exports.enterBillingAddress = async() => {
    let otfopDetails = helper.otfopDetails("MasterCard")
    await write(otfopDetails.billingStreetAddress, $(`${travelPrePage.cardStreetAddress()}`))
    await write(otfopDetails.billingCity, $(`${travelPrePage.cardCity()}`))
    await dropDown({ id: `${travelPrePage.cardState()}` }).select(otfopDetails.billingState);
    await write(otfopDetails.billingZipCode, $(`${travelPrePage.cardZipCode()}`))
}

exports.cardSavebutton = async () => {
    await click($(`${travelPrePage.cardSavebtn()}`));
}

exports.clickOnEditPayment = async() => {
    let addFlag= gauge.dataStore.scenarioStore.get("addFlag")
    if(addFlag == true){
        await click($(`${travelPrePage.editCard()}`)) 
    }
    else{
        await click($(`${travelPrePage.editPaymentCard()}`))
        await click($(`${travelPrePage.editCard()}`))
    } 
}

exports.clickOnDeletePayment = async() => {
    await click($(`${travelPrePage.deleteCard()}`));
    await click($(`${travelPrePage.deleteBtn()}`));
}

exports.deleteExistingPaymentCard = async() => {
    let addFlag = false
    if(await($(`${travelPrePage.paymentCard()}`)).exists())
    {
        addFlag = true
        await click($(`${travelPrePage.editPaymentCard()}`));
        let count = await $(`${travelPrePage.paymentlist()}`).elements().then(elem => elem.length);
        for(var i = 1; i !== count;) {
            await waitFor(3000)
            await this.clickOnDeletePayment()
            count = await $(`${travelPrePage.paymentlist()}`).elements().then(elem => elem.length);
        }
    }
    gauge.dataStore.scenarioStore.put("addFlag", addFlag )
}

exports.passport = async(action) =>{
    switch(action){
        case "Add":
            await this.clickAddPassport()
            await this.addNumber()
            await this.enterInformation()
            await this.clickSaveBtn()
            break;
        case "Edit":
            await this.clickEditPassport()
            await waitFor(3000)
            await this.clearNumber()
            await this.addNumber()
            await this.clickSaveBtn()
            break;
        case "Delete":
        case "Delete existing": 
            await this.deleteExistingTravelDocument()
            break;
        default:
            break;
    }
}

exports.clickAddPassport = async () => {
    await evaluate($(`${travelPrePage.addAPassports()}`), (elem) => {return elem.click();});
}

exports.clickSaveBtn = async () => {
    await evaluate($(`${travelPrePage.saveBtn()}`), (elem) => {return elem.click();});
}

exports.addNumber = async () => {
    await write(Math.floor(Math.random() * 1000000000), $(`${travelPrePage.number()}`))
}

exports.clearNumber = async() =>{
    await click($(`${travelPrePage.number()}`))
    await clear($(`${travelPrePage.number()}`))
}

exports.enterInformation = async () => {
    await dropDown({ id: `${travelPrePage.expirayYear()}` }).select({index: 2});
    await dropDown({ id: `${travelPrePage.issueYear()}` }).select({index: 5});
}

exports.clickEditPassport= async () => {
    await evaluate($(`${travelPrePage.editPassport()}`), (elem) => {return elem.click();});
}

exports.visa = async(action) =>{
    switch(action){
        case "Add":
            await this.clickAddVisa()
            await this.addNumber()
            await this.enterVisaInformation()
            await this.clickSaveBtn()
            break;
        case "Edit":
            await this.clickEditVisa()
            await waitFor(3000)
            await this.clearNumber()
            await this.addNumber()
            await this.clickSaveBtn()
            break;
        case "Delete":
        case "Delete existing": 
            await this.deleteExistingTravelDocument()
            break;
        default:
            break;
    }
}

exports.clickAddVisa = async () => {
    await evaluate($(`${travelPrePage.addAVisa()}`), (elem) => {return elem.click();});
}

exports.enterVisaInformation = async () => {
    await dropDown({ id: `${travelPrePage.expirayYear()}` }).select({index: 2});
    await dropDown({ name: `${travelPrePage.visaType()}` }).select({index: 2});
}

exports.deleteExistingTravelDocument = async() => {
    let count = await $(`${travelPrePage.visaList()}`).elements().then(elem => elem.length);
    for(var i = 0; i !== count;) {
        await waitFor(3000)
        await evaluate($(`${travelPrePage.visaDelete()}`), (elem) => {return elem.click();});
        count = await $(`${travelPrePage.passportList()}`).elements().then(elem => elem.length);
    }
}

exports.clickEditVisa= async () => {
    await evaluate($(`${travelPrePage.visaEdit()}`), (elem) => {return elem.click();});
}

exports.nationalIdCard = async(action) =>{
    switch(action){
        case "Add":
            await this.clickAddNationalIdCard()
            await this.addNumber()
            await this.enterInformation()
            await this.clickSaveBtn()
            break;
        case "Edit":
            await this.clickEditVisa()
            await waitFor(3000)
            await this.clearNumber()
            await this.addNumber()
            await this.clickSaveBtn()
            break;
        case "Delete":
        case "Delete existing": 
            await this.deleteExistingTravelDocument()
            break;
        default:
            break;
    }
}

exports.clickAddNationalIdCard = async () => {
    await evaluate($(`${travelPrePage.addNationalIdCard()}`), (elem) => {return elem.click();});
}

exports.userDetails = async(action) =>{
    switch(action){
        case "Personal":
            await this.changeUserPersonalDetails()
            await this.clickSaveBtn()
            break;
        case "Emergency":
            await this.emergencyContactDetails()
            await this.clickSaveBtn()
            break;
        case "Display Setting":
            await this.changeDisplaySetting()
            await this.clickSaveBtn()
            break;
        default:
            break;
    }
}

exports.changeUserPersonalDetails = async () => {
    await click($(`${travelPrePage.editPersonalInfo()}`))
    await waitFor(3000)
    await dropDown({ name: `${travelPrePage.title()}` }).select({index : Math.floor(Math.random() * 6) + 1});
    await clear($(`${travelPrePage.middleName()}`), {force: true})
    await write(Math.random().toString(36).substring(2).replace(/[\d]/g, ''), $(`${travelPrePage.middleName()}`))
    
    await clear($(`${travelPrePage.suffix()}`), {force: true})
    await write(Math.random().toString(36).substring(2).replace(/[\d]/g, ''), $(`${travelPrePage.suffix()}`))
    
    await dropDown({ name: `${travelPrePage.birthYear()}` }).select({index :Math.floor(Math.random() * (50 - 20) ) + 20});
    await dropDown({ name: `${travelPrePage.birthDay()}` }).select({index :Math.floor(Math.random() * 26) + 1});
    await dropDown({ name: `${travelPrePage.birthMonth()}` }).select({index :Math.floor(Math.random() * 10) + 1});    
}

exports.emergencyContactDetails = async () => {
    let userDetails = helper.guestUserDetails("User");
    await click($(`${travelPrePage.editEmergencyContact()}`))
    await waitFor(3000)
    await click($(`${travelPrePage.emergencyFullName()}`))
    await clear($(`${travelPrePage.emergencyFullName()}`))
    await write(userDetails.firstName +" "+ userDetails.lastName , $(`${travelPrePage.emergencyFullName()}`))

    await dropDown({ name: `${travelPrePage.emergencyRelationship()}` }).select({index : Math.floor(Math.random() * 6) + 1});
    
    await clear($(`${travelPrePage.emergencyEmail()}`), {force: true})
    await write(userDetails.email, $(`${travelPrePage.emergencyEmail()}`))

    await clear($(`${travelPrePage.emergencystreetAddress()}`), {force: true})
    await write(userDetails.street, $(`${travelPrePage.emergencystreetAddress()}`))

    await clear($(`${travelPrePage.emergencyCity()}`), {force: true})
    await write(userDetails.city, $(`${travelPrePage.emergencyCity()}`))

    await dropDown({ id: `${travelPrePage.emergencyState()}` }).select(userDetails.state);

    await clear($(`${travelPrePage.emergencyZipcode()}`), {force: true})
    await write(userDetails.postalCode, $(`${travelPrePage.emergencyZipcode()}`))

    await clear($(`${travelPrePage.emergencyPrimaryPhone()}`), {force: true})
    await write(userDetails.businessPhone, $(`${travelPrePage.emergencyPrimaryPhone()}`))

    await clear($(`${travelPrePage.emergencySecondaryPhone()}`), {force: true})
    await write(userDetails.cellPhone, $(`${travelPrePage.emergencySecondaryPhone()}`))
}

exports.changeDisplaySetting = async () => {
    await click($(`${travelPrePage.displaySettingTab()}`))
    await waitFor(3000)
    await click($(`${travelPrePage.displayDate(Math.floor(Math.random() * 2) + 1)}`))
    await click($(`${travelPrePage.displayTime(Math.floor(Math.random() * 2) + 1)}`))
    await dropDown({ name: `${travelPrePage.displayTimeZome()}` }).select({index : Math.floor(Math.random() * 30) + 1});
    await click($(`${travelPrePage.displayMeasurement(Math.floor(Math.random() * 2) + 1)}`))
}

exports.delegates = async(action) =>{
    await click($(`${travelPrePage.delegatesTab()}`))
    switch(action){
        case "Add":
            await this.addDelegates()
            break;
        case "Delete":
        case "Delete existing": 
            await this.deleteExistingDelegates()
            break;
        default:
            break;
    }
}

exports.deleteExistingDelegates = async() => {
    let count = await $(`${travelPrePage.delegateUserList()}`).elements().then(elem => elem.length);
    for(var i = 0; i !== count;) {
        await waitFor(5000)
        await evaluate($(`${travelPrePage.delegateDeleteLink()}`), (elem) => {return elem.click();});
        count = await $(`${travelPrePage.delegateUserList()}`).elements().then(elem => elem.length);
    }
}

exports.addDelegates = async () => {
    let userDetails = helper.guestUserDetails("delegate");
    await click($(`${travelPrePage.addDelegates()}`))
    await write(userDetails.delegateUser, $(`${travelPrePage.searchNameOrEmailAddress()}`))
    await click($(`${travelPrePage.delegateSearchBtn()}`))
    await click($(`${travelPrePage.delegateSelectBtn()}`))
}

exports.changeHotelLoyaltyNumber = async (loyaltyNum) => { 
    await write(loyaltyNum, $(`${purchase.hotelRewardsProgramssNumber()}`))
    let failHotelCount;
    gauge.dataStore.scenarioStore.put("loyaltyNum", loyaltyNum)
    "FAIL-ME" == loyaltyNum? failHotelCount = 2 :  failHotelCount = 1
    gauge.dataStore.scenarioStore.put("failHotelCount", failHotelCount)
}

exports.validateFailedHotel =async(page) => {
    switch(page){
        case "trip confirmation":
            await this.validateFailedHotelMessage()
            await this.validateFailedHotelCount()
        break;
        case "trip details":
            await this.validateHotelFailedMsgNotShown()
            break;
    }
    await this.validateHotelPriceNotShown()
}

exports.validateFailedHotelMessage = async() =>{
    let expectedHotelFailMsg = helper.messageContent("hotelFailedMsg");
    console.log("expectedHotelFailMsg.msg:",expectedHotelFailMsg.msg)

    await assert.ok(await $(`${tripConfiramtionPage.hotelFailMsg()}`).exists(), `Hotel failed message didnot exist`)
    let actualHotelFailMsg = await ($(`${tripConfiramtionPage.hotelFailMsg()}`)).text()
    assert.ok(expectedHotelFailMsg.msg, actualHotelFailMsg, `Hotel Failed message validation failed. Expected:${expectedHotelFailMsg.msg} Actual: ${actualHotelFailMsg}` )
    gauge.message(` Expected:${expectedHotelFailMsg.msg} Actual: ${actualHotelFailMsg}`)

}

exports.validateFailedHotelCount = async () => { 
    let failedHotelCount = gauge.dataStore.scenarioStore.get("failHotelCount")
    for(var i = 1 ; i<= failedHotelCount; i++ ){
        await ($(`${tripConfiramtionPage.hotelFailIcon(i)}`)).exists()
    }
}

exports.validateHotelPriceNotShown= async () => { 
    let failHotelCount = gauge.dataStore.scenarioStore.get("failHotelCount")
    if(failHotelCount == 2){
        await assert.ok (!await $(`${tripConfiramtionPage.hotelPrice()}`).exists(),  "Hotel price is shown in Trip cost summary")
        gauge.message("Hotel price not is shown in Trip cost summary")
    }
}

exports.validateHotelFailedMsgNotShown= async () => { 
    let expectedHotelFailMsg = helper.messageContent("hotelFailedMsg");
    assert.ok (!await text(expectedHotelFailMsg.msg).exists(),`Hotel failed message is shown`)
    gauge.message("Hotel failed message is not shown")
}

exports.selectUserTitle = async(title) => {
    await click($(`${travelPrePage.editPersonalInfo()}`))
    await click($(`${travelPrePage.selectTitle()}`))
    await dropDown({ name: `${travelPrePage.title()}` }).select(title);
    await this.clickSaveBtn()
    gauge.dataStore.scenarioStore.put("profileUserTitle", title)
}

exports.validateTitleAndGenderInPNR = async() => {
    for (var i=1; i <= fieldsCount; i++){
        let xmldata =gauge.dataStore.scenarioStore.get(`xmlData${i}`)
        parser.parseString(xmldata, async function (err, result) {
            let datatype = result['UserPnrData'].DataType[0];
            switch(datatype){
                case "new":
                case "change":
                    let actualUserTitle=  result['UserPnrData'].UserSession[0].PurchaseInfo[0].Passenger[0].Title[0]
                   
                    let actualUserGender= result['UserPnrData'].UserSession[0].PurchaseInfo[0].Passenger[0].Gender[0] 
                   

                   await travel_preference_action.validateTitleAndGender(actualUserTitle, actualUserGender, datatype )
                    break;
            }
        });
    }
}

exports.validateTitleAndGender = async (actualUserTitle, actualUserGender, datatype ) =>{
    let expectedUserGender = pnrData.UserInfo[`Non-binary/Unspecified (X)`]
    let expectedUserTitle = pnrData.UserInfo.Title
    
    assert.strictEqual(actualUserTitle, expectedUserTitle, 
        `Invalid user title is showing on the ${datatype} PNR XML. Expected: ${expectedUserTitle} and Actual: ${actualUserTitle}`)
    gauge.message(`Successfull! User title is showing on the ${datatype} PNR XML. Expected: ${expectedUserTitle} and Actual: ${actualUserTitle}`)

    assert.strictEqual(actualUserGender, expectedUserGender, 
        `Invalid user gender  is showing on the ${datatype} PNR XML. Expected: ${expectedUserGender} and Actual: ${actualUserGender}`)
    gauge.message(`Sucessfull! User gender is showing on the ${datatype} PNR XML. Expected: ${expectedUserGender} and Actual: ${actualUserGender}`)

}