"use strict";

const { click, $, evaluate, waitFor, write, scrollTo, text, clear,dropDown, focus, above, textBox} = require("taiko");
const assert = require("assert");
const tripPlanner = require("../Locators/tripPlanner_po")
const hotelPage = require("../Locators/hotel_po.js");
const helper = require("../helpers/helper.js");
const tripConfiramtionPage = require("../Locators/tripConfirmation_po")
const tripReviewPage = require('../Locators/tripReviewPage_po.js');
const { expect } = require("chai");


exports.clickAddHotel = async () => await click($(`${tripPlanner.hotelSegment()}`));
exports.validateHotel = async () => {
    let hotelLoc = await evaluate($(`${hotelPage.hotelSearchLocation()}`), (elem) => {
        return elem.getAttribute('value')
    });
    return hotelLoc;
}
exports.clickHotel = async () => await click($(`${hotelPage.selectHotel()}`));
exports.saveHotelName = async () => {
    await waitFor(async () => (await $(`${hotelPage.hotelName()}`).exists()));
    await $(`${hotelPage.hotelName()}`).text();
}

exports.getSelectedHotelName = async () => await $(`${hotelPage.hotelName()}`).text();
exports.getSelectedHotelNameEHI = async () => await $(`${hotelPage.hotelNameEHI()}`).text();
exports.getHotelAddress = async () => await $(`${hotelPage.hotelAddress()}`).text();
exports.getHotelAddressEHI = async () => await $(`${hotelPage.hotelAddressEHI()}`).text();
exports.getRoomType = async () => await $(`${hotelPage.roomType()}`).text();
exports.getRoomFare = async () => await $(`${hotelPage.roomFare()}`).text();
exports.clickSelect = async () => await click($(`${hotelPage.selectRoom()}`), { waitForNavigation: true });
exports.clickRoomsMenu = async () => await click(`${hotelPage.selectRoomsMenu()}`);
exports.clickSearch = async () => await click($(`${tripPlanner.searchButton()}`));
exports.hotelMoreSearchOption = async () => await click($(`${tripPlanner.hotelMoreSearchOption()}`));

exports.getHotelDetails = async (table) => {
    await waitFor(async () => !(await $("#web-loader-svg").exists()));
    let headerValue;
    let dataEntry;
    let hotelDetails = {};
    let checkInDate;
    let checkOutDate;

    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });

    for (let i = 0; i < headerValue.length; i++) {
        switch (headerValue[i]) {
            case 'HotelSearchValue':
                gauge.dataStore.scenarioStore.put("hotelSearchValue",dataEntry[headerValue[i]]);
                await write(`${dataEntry[headerValue[i]]}`, $(tripPlanner.hotelsearch()));
                process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("hotelSearchData", `${dataEntry[headerValue[i]]}`) : gauge.dataStore.scenarioStore.put("hotelSearchData", `${dataEntry[headerValue[i]]}`)
                break;
            case 'CheckInAfterXDays':
                checkInDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]));
                await write(checkInDate, $(tripPlanner.checkInDateBox()))
                break;
            case 'CheckOutAfterXDays':
                checkOutDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]));
                await write(checkOutDate, $(tripPlanner.checkOutDateBox()))
                await click($(`${tripPlanner.checkOutDateBox()}`))
                break;
        }
        hotelDetails[headerValue[i]] = dataEntry[headerValue[i]];
        process.env.gdName == "amadeus" ? gauge.dataStore.specStore.put("hotelDetails0", hotelDetails) : gauge.dataStore.scenarioStore.put("hotelDetails0", hotelDetails);
    }
}

exports.referencePoint = async (table) => {
    let HotelSearchLocType = table.rows[0].cells[3];
    let refPoint;
    refPoint = await $(`${tripPlanner.refePoint(HotelSearchLocType)}`).text();
    gauge.dataStore.scenarioStore.put('RefPoint', refPoint);
    await click($(`${tripPlanner.refePoint(HotelSearchLocType)}`));
}

exports.validateRefPoint = async () => {
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    let hotelFiltersFlag = true;
    gauge.dataStore.scenarioStore.put("hotelFiltersFlag", hotelFiltersFlag);
    let ExpectedRefPoint = gauge.dataStore.scenarioStore.get('RefPoint');
    let ActualRefPoint = await this.validateHotel();
    assert.notDeepEqual(ActualRefPoint, ExpectedRefPoint,`Ref Point doesn't match, Expected :${ExpectedRefPoint} ,Actual :${ActualRefPoint}`);
}

exports.selectHotel = async (tableData) => {
    await waitFor(2000);
    if (tableData == 'NA' || tableData == 'GDS') {
        await this.selectHotelWithoutBadge();
    } else {
        await this.selectHotelWithBadge(tableData);
    }
}
exports.selectHotelEHI = async () => { 
    let cardLength = 10;
    try {
        for (let i = 0; i <= cardLength; i++){
            if (await $(`${hotelPage.EHIHotels(i)}`).exists() == true) {
                await evaluate($(`${hotelPage.EHIHotels(i)}`), (elem) => {
                    return elem.click();
                });
                break;
            } 
        }
    } catch (err) {
        assert.fail("..........HOTEL NOT FOUND..........");
    } 
}
exports.selectHotelWithoutBadge = async () => {
    let cardLength = 10;
    for (let i = 1; i <= cardLength; i++) {
            if (await $(`${hotelPage.hotelPrice(i)}`).exists() == true) {
                await focus($(`${hotelPage.hotelPrice(i)}`));
                await evaluate($(`${hotelPage.hotelPrice(i)}`), (elem) => {
                    return elem.click();
                  });
                i = cardLength + 1;
                break;
            }
        
    }
}
exports.selectHotelWithBadge = async (tableData) => {
    let cardLength =10;
    for (let i = 1; i <= cardLength; i++) {
        let batchLength = await $(`${hotelPage.hotelTypeBatchLength(i)}`).elements().then(elem => elem.length);
        for (let j = 1; j <= batchLength; j++){
            let batchName = [];
            batchName[j] = await $(`${hotelPage.hotelTypeBatch(i, j)}`).text();
            if (batchName.includes(tableData)) {
                if (await $(`${hotelPage.hotelPrice(i)}`).exists() == true) {
                    console.log(hotelPage.hotelPrice(i));
                    await focus($(`${hotelPage.hotelPrice(i)}`));
                    await evaluate($(`${hotelPage.hotelPrice(i)}`), (elem) => {
                        return elem.click();
                      });
                    i = cardLength + 1;
                    break;
                }
            }
        }

    }
}

exports.selectTheHotel = async () => {
    await click($(`${hotelPage.selectHotel()}`));
}

exports.hotelAndRoomInfoEHI = async () => {
    let hotelInfoDetailsEHI = {};
    let nameOfHotel = await this.getSelectedHotelNameEHI();
    let addressOfHotel = await this.getHotelAddressEHI();
    hotelInfoDetailsEHI.nameOfHotel = nameOfHotel;
    hotelInfoDetailsEHI.addressOfHotel = addressOfHotel;
    console.log(hotelInfoDetailsEHI);
    gauge.dataStore.scenarioStore.put(`hotelInfoDetailsEHI`, hotelInfoDetailsEHI)
}
exports.hotelAndRoomInfo = async (segmentLength) => {
    let hotelInfoDetails = {};
    let nameOfHotel = await this.getSelectedHotelName();
    let addressOfHotel = await this.getHotelAddress();
    let typeOfRoom = await this.getRoomType();
    let fareOfRoom = await this.getRoomFare();
    hotelInfoDetails.nameOfHotel = nameOfHotel;
    hotelInfoDetails.addressOfHotel = addressOfHotel;
    hotelInfoDetails.typeOfRoom = typeOfRoom;
    hotelInfoDetails.fareOfRoom = fareOfRoom;
    if (segmentLength == 0) {
        process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put(`hotelInfoDetails0`, hotelInfoDetails) : gauge.dataStore.scenarioStore.put(`hotelInfoDetails0`, hotelInfoDetails)
        console.log("hotelInfoDetails0",gauge.dataStore.scenarioStore.get(`hotelInfoDetails0`));
    } else {
        process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put(`hotelInfoDetails1`, hotelInfoDetails) : gauge.dataStore.scenarioStore.put(`hotelInfoDetails1`, hotelInfoDetails)
        console.log("hotelInfoDetails1",gauge.dataStore.scenarioStore.get(`hotelInfoDetails1`));
    }
}

exports.validateTripSourceBadge = async () => { 
    let hotelInfo = gauge.dataStore.scenarioStore.get(`hotelInfoDetails0`);
    let badge = gauge.dataStore.scenarioStore.get(`roomBadge`);
    await focus(text(badge,above(hotelInfo.nameOfHotel)));
}
exports.reviewPageHotelInfo = async (validateTripType) => {
    let searchType = null;
    let hotelInfoDetails;
    let hotelInfoDetails1;
    let searchTripType = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("searchTypeTrip") : gauge.dataStore.scenarioStore.get("searchTypeTrip");
    searchTripType !== 'HotelOnly' || 'HC' && (searchType = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("tripDetails") : gauge.dataStore.scenarioStore.get("tripDetails"))         
    hotelInfoDetails = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("hotelInfoDetails0") : gauge.dataStore.scenarioStore.get('hotelInfoDetails0');

    let loyaltyNum = gauge.dataStore.scenarioStore.get("loyaltyNum")
    if(loyaltyNum == null ){
        await this.validatHotelNameIsAsExpected(validateTripType, hotelInfoDetails.nameOfHotel);
        await this.validatHotelAddressIsAsExpected(validateTripType, hotelInfoDetails.addressOfHotel);
        await this.validateInCancellPage(validateTripType);
    }
   
    if(loyaltyNum == "FAIL-INV" || loyaltyNum == null ){
        if (searchType !== null && (searchType.TripType == "MD") ) {
            hotelInfoDetails1 = await gauge.dataStore.scenarioStore.get('hotelInfoDetails1');
            await this.validatHotelNameIsAsExpected(validateTripType, hotelInfoDetails1.nameOfHotel);
            await this.validatHotelAddressIsAsExpected(validateTripType, hotelInfoDetails1.addressOfHotel);
        }
    }
}

exports.validatHotelNameIsAsExpected = async (pageType, nameOfHotel) => {
    switch(pageType){
        case 'trip review':
        case "post trip review":
        case 'trip confirmation':
        case "trip cancellation":
        case "post trip cancellation":
        case "post trip confirmation":
           await scrollTo(text(nameOfHotel));
            break;
    }
}

exports.validatHotelAddressIsAsExpected = async (pageType, expectedValue) => {
    switch(pageType){
        case 'trip review':
        case "post trip review":
        case 'trip confirmation':
        case "trip cancellation":
        case "post trip cancellation":
        case "post trip confirmation":
            await scrollTo(text(expectedValue.split(" ")[0]));
            break;
    }
}

exports.validatHotelRoomFareIsAsExpected = async (pageType, expectedValue) => {
    expectedValue = expectedValue.split(".")[0].replace(/[^\d]/g, '').trim();
    let actualValue ;
    switch(pageType){
        case 'trip review':
        case "post trip review":
            actualValue = await (await $(`${tripReviewPage.displayHotelFare()}`).text()).split(".")[0].split(",")[0].replace(/[^\d]/g, '').trim();
            break;
        case 'trip confirmation':
        case "trip cancellation":
        case "post trip cancellation":
        case "post trip confirmation":
            actualValue = await (await $(`${tripConfiramtionPage.hotelFareInDollar()}`).text()).split(".")[0].split(",")[0].replace(/[^\d]/g, '').trim();
            break;
    }
    console.log(`Expected Room fare of Hotel ${expectedValue} and actual Room fare of hotel ${actualValue} is same?`);
    assert.strictEqual(actualValue, expectedValue, `Expected Room fare of Hotel ${expectedValue} and actual Room fare of hotel: ${actualValue} is same in `+ pageType +"?");
}

exports.validateBadgePresenceForCategory = async ( category, pageType = "default") => {
    let badgeDisplay ;
    switch(pageType){
        case 'trip review':
        case "post trip review":
            badgeDisplay = await $(`${tripReviewPage.hotelCategoryBadgeForCatInTRP(category)}`).exists();
            assert.equal(badgeDisplay, true, "Hotel result belonging to " + category + " hotel category should exist?");
            break;
        default:
            badgeDisplay = await $(`${hotelPage.hotelCategoryBadgeForCat(category)}`).exists();
            assert.equal(badgeDisplay, true, "Hotel result belonging to " + category + " hotel category should exist?");
            break;
    }
}

exports.validateBadgePresenceForPenalty = async (pageType = "default") => {
    let badgeDisplay ;
    switch(pageType){
        case 'trip review':
        case "post trip review":
            badgeDisplay = await $(`${tripReviewPage.hotelCategoryBadgeForCatInTRP()}`).exists();
            assert.equal(badgeDisplay, true, "Hotel result belonging to penalty badge should exist?");
            break;
        case 'default':
            badgeDisplay = await $(`${hotelPage.hotelCategoryBadgeForPenalty()}`).exists();
            assert.equal(badgeDisplay, true, "Hotel result belonging to penalty badge should exist?");
            break;
    }
}
exports.validateBadgePresenceForCancellable = async (pageType = "default") => {
    let badgeDisplay ;
    switch(pageType){
        case 'trip review':
        case "post trip review":
            badgeDisplay = await $(`${tripReviewPage.hotelCategoryBadgeForCatInTRP()}`).exists();
            assert.equal(badgeDisplay, true, "Hotel result belonging to cancellable badge should exist?");
            break;
        case 'default':
            badgeDisplay = await $(`${hotelPage.hotelCategoryBadgeForCancellable()}`).exists(); 
            if(!badgeDisplay){
                let hotelCatDetails = await gauge.dataStore.scenarioStore.get('hotelCatDetails');
                gauge.dataStore.scenarioStore.put("hotelCatDetails", hotelCatDetails.filter(a => a !== 'Cancellable'));
            }
            console.log("Cancellable badge in the hotel result exist is ?"+ badgeDisplay);
            break;
    }
}
exports.validateBadgePresenceForGBT = async (hotelBadges, roomBadge, validateType) => {
    let segmentLength = 1;
    let searchType = gauge.dataStore.scenarioStore.get("tripDetails");
    searchType.TripType == "MD" && (segmentLength = gauge.dataStore.scenarioStore.get("segmentLength"));
   // let hotelDetails =gauge.dataStore.scenarioStore.get("hotelInfoDetails0");
    switch(validateType){
        case 'trip review':
        case "post trip review":
            for (let i = 0; i < segmentLength; i++) {
                let hotelDetails = gauge.dataStore.scenarioStore.get(`hotelInfoDetails${i}`);
                if (hotelBadges !== 'PRIVATERATE') {
                    scrollTo(text(hotelBadges), above(text(hotelDetails.nameOfHotel)));
                }
                scrollTo(text(roomBadge), above(text(hotelDetails.nameOfHotel)));
            }       
            break;
        case 'default':
            badgeDisplay = await $(`${hotelPage.hotelCategoryBadgeForGBT()}`).exists();
            assert.equal(badgeDisplay, true, "Hotel result belonging to GBT hotel category should exist?");
            break;
    }
}

exports.validateBadgePresenceForBooking = async (pageType = "default") => {
    let badgeDisplay ;
    switch(pageType){
        case 'trip review':
        case "post trip review":
            badgeDisplay = await $(`${tripReviewPage.hotelCategoryBadgeForBookingInTRP()}`).exists();
            assert.equal(badgeDisplay, true, "Hotel result belonging to GBT hotel category should exist?");
            break;
        case 'default':
            badgeDisplay = await $(`${hotelPage.hotelCategoryBadgeForBookingCom()}`).exists();
            assert.equal(badgeDisplay, true, "Hotel result belonging to GBT hotel category should exist?");
            break;
    }
}

exports.validateBadgePresenceForPRH = async () => {
    let countOfHotelByPRH = (await $(`${hotelPage.prhBadgeInHotelResultList()}`).elements()).length;
    let countOfHotelListed = (await $(`${hotelPage.hotelList()}`).elements()).length;
    console.log("Count of hotel by PRH vs hotel list: " + countOfHotelByPRH + " - " + countOfHotelListed);
    console.log("Count of hotel by PRH vs hotel list: " + countOfHotelByPRH + " - " + countOfHotelListed);
    assert.equal(countOfHotelByPRHs, countOfHotelListed, `The count of Total Hotel Result displayed and Private Rate Hotel Displayed should be same and equal?`);
}

exports.validateHotelSearchLoc = async () => {
    let ExpectedHotel = process.env.gdsName == "amadeus" ? gauge.dataStore.scenarioStore.get('hotelSearchData') : gauge.dataStore.scenarioStore.get('hotelSearchData');
    let ActualHotel = await this.validateHotel();
    expect(ActualHotel).to.include(ExpectedHotel,`Hotel search location not matched, Expected : ${ExpectedHotel} , Actual :${ActualHotel}`);
}

exports.validateHotelLocation = async () => {
    await helper.waitForLoaderSvg();
    let segmentLength = gauge.dataStore.scenarioStore.get('segmentLength');
    let searchLoc = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get('tripDetails') : gauge.dataStore.scenarioStore.get("tripDetails");
    let hotelDetails = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get('hotelInfoDetails0') : gauge.dataStore.scenarioStore.get("hotelInfoDetails0");
    let changeFlag = await gauge.dataStore.scenarioStore.get('changeFlag');
    let hotelLoc = await this.validateHotel();
    let searchTripType = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get('searchTypeTrip') : gauge.dataStore.scenarioStore.get("searchTypeTrip");
    searchTripType.TripType === "HotelOnly" && (
        segmentLength >= 2 && searchLoc.TripType === "MD" ? assert.ok(hotelLoc.includes(searchLoc.MultiLeg),`Hotel location doesnot includes ${searchLoc.MultiLeg}`)
            : assert.ok(hotelLoc.includes(searchLoc.Destination), "Hotel checkin loc is not same as destination loc"))
   searchLoc !==null && (searchLoc.TripType === "MD") ? assert.strictEqual(hotelLoc, searchLoc.MultiLeg,`Hotel Location doesnot match ,Expected : ${searchLoc.MultiLeg} ,Actual :${hotelLoc}`) :
    assert.ok(hotelLoc.includes(changeFlag == null ? searchLoc.Destination : hotelDetails.nameOfHotel), `Hotel location doesnot match , Expected :${changeFlag == null ? searchLoc.Destination : hotelDetails.nameOfHotel} , Actual :${hotelLoc}`);
    searchLoc !==null && (searchLoc.TripType === "MD") && (gauge.dataStore.scenarioStore.put("segmentLength", segmentLength - 1));
}


exports.selectRoomTypeAndValidateBadges = async (roomType) => {
    gauge.dataStore.scenarioStore.put(`roomBadge`, roomType);
    if (roomType == 'NA') {
        await this.selectRoomWithoutBadge();
    } else {
        await this.selectRoomHavingBadge(roomType);
   }
}
exports.selectRoomEHI = async () => { 
        if (await $(`${hotelPage.EHIRooms()}`).exists() == true) {
            await evaluate($(`${hotelPage.EHIRooms()}`), (elem) => {
                return elem.click();
              });
        } else {
            assert.fail("..........NO ROOMS AVAILABLE.........")
        }
}

exports.selectRoomHavingBadge = async (roomType) => {
    let hotelCardBatchLength;
    let hotelRoomCard = await $(`${hotelPage.hotelRoomCard()}`).elements().then(elem => elem.length);
    for (let i = 1; i < hotelRoomCard; i++) {
        if (await $(`${hotelPage.hotelRoomCardBatchLength(i)}`).exists(0,0) == true) {
            hotelCardBatchLength = await $(`${hotelPage.hotelRoomCardBatchLength(i)}`).elements().then(elem => elem.length);
            for (let j = 1; j <= hotelCardBatchLength; j++){
                let hotelRoombatchName = [];
                hotelRoombatchName[j] = await $(`${hotelPage.hotelRoomCardBatch(i, j)}`).text();
                console.log(roomType);
                if (hotelRoombatchName.includes(roomType)) {
                        await focus($(`${hotelPage.selectButton(i)}`));
                        await evaluate($(`${hotelPage.selectButton(i)}`), (elem) => {
                            return elem.click();
                          });
                        i = hotelRoomCard + 1;
                        break;    
                }
            }
        }
        
        
    }

}
exports.selectRoomWithoutBadge = async () => {
    await focus($(`${hotelPage.selectButton(1)}`));
    await evaluate($(`${hotelPage.selectButton(1)}`), (elem) => {
        return elem.click();
     });
}

exports.validateBadgesInPage = async (tableData,validateType) => {
    let hotelBadges = tableData.rows[0].cells[0];
    let roomBadge = tableData.rows[0].cells[1];
     this.validateBadgePresenceForGBT(hotelBadges,roomBadge,validateType);
}

exports.oopHotelTextBox = async () => await click($(`${hotelPage.OOPHotelTextBox()}`));
exports.selectRoom = async () => await hotelPage.selectRoom();

exports.clickAddHotelFromTripReview = async () => {
    await waitFor(async () => (await $(`${hotelPage.AddHotelFromTripReview()}`).exists()), process.env.test_timeout);
    await scrollTo($(`${hotelPage.AddHotelFromTripReview()}`));
    await click($(`${hotelPage.AddHotelFromTripReview()}`));
}
exports.selectContinueWithOriginalSelection = async () => {
    await click($(`${hotelPage.selectContinueWithOriginalSelection()}`));
}

exports.clickContinueButtonInHotelAlignment = async () => {
    await evaluate($(`${hotelPage.idForContinueButtonInHotelAlignment()}`), (elem) => { return elem.click() });
}
exports.selectContinueWithoutThisHotel = async () => {
    let searchTypeTrip = gauge.dataStore.scenarioStore.get("searchTypeTrip")
    searchTypeTrip.searchType= "AC"
    gauge.dataStore.scenarioStore.put("searchTypeTrip", searchTypeTrip )
    await click($(`${hotelPage.selectContinueWithoutThisHotel()}`));
}

exports.selectAddExtraNight = async () => {
    await click($(`${hotelPage.selectAddExtraNight()}`));
}
exports.selectRemoveLastNight = async () => {
    await click($(`${hotelPage.selectRemoveLastNight()}`));
}

exports.validateFirstHotelName = async () => {
    await helper.waitForLoaderSvg();
    let expectedHotelName = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("hotelSearchData") : gauge.dataStore.scenarioStore.get("hotelSearchData");
    let actualFirstHotelName = await $(`${hotelPage.firstHotel()}`).text();
    assert.strictEqual(expectedHotelName, actualFirstHotelName, `Hotel Name doesnot match ,Expected :${expectedHotelName} , Actual : ${actualFirstHotelName}`)
}

exports.hotelSelectionEHI = async (table) => { 
    await waitFor(5000);
    await this.verifySearchResutls();
    await this.selectHotelEHI(table);
    await this.hotelAndRoomInfoEHI()
    await this.selectRoomEHI(table.rows[0].cells[1])
}
exports.verifySearchResutls = async () => { 
    let searchedText = await $(`${hotelPage.searchedText()}`).text();
    expect(gauge.dataStore.scenarioStore.get("hotelSearchValue")).to.contain(searchedText);
}

exports.hotelSelection = async (table) => {
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    let changeTripFlag = false ;
    let hotelFiltersFlag = false;
    changeTripFlag = gauge.dataStore.scenarioStore.get("changeFlag");
    hotelFiltersFlag = gauge.dataStore.scenarioStore.get("hotelFiltersFlag");
    hotelFiltersFlag == null && (hotelFiltersFlag = false)
    changeTripFlag == null && (changeTripFlag = false)
    let tripSearchType = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("searchTypeTrip") : gauge.dataStore.scenarioStore.get("searchTypeTrip");
    gauge.dataStore.scenarioStore.put("tableData", table);
    switch (tripSearchType.searchType) {
        case "HotelOnly":
        case "HC":
            let segmentLengths = 1;
            for (let i = 0; i < segmentLengths; i++) {
                await this.selectHotel(table.rows[0].cells[0])
                await this.hotelAndRoomInfo(i)
                await this.selectRoomTypeAndValidateBadges(table.rows[0].cells[1])
            }
            break;
        case "AHC":
        case "AH":
        case "AHH":
        case "AHHC" :
            let segmentLengthss = 1;
            let searchType = process.env.gdsName =="amadeus" ? gauge.dataStore.specStore.get("tripDetails") : gauge.dataStore.scenarioStore.get("tripDetails");
            searchType.TripType == "MD" && (segmentLengthss = gauge.dataStore.scenarioStore.get("segmentLength"));
            let search = gauge.dataStore.scenarioStore.get("searchTypeTrip");
            search.searchType == "AHH" && (segmentLengthss = 2);
            search.searchType == "AHHC" && (segmentLengthss = 2);
            for (let i = 0; i < segmentLengthss; i++) {
                if(i > 0){
                    await helper.waitForSpinner();
                    await helper.waitForLoaderSvg();
                }
                await this.selectHotel(table.rows[0].cells[0])
                await this.hotelAndRoomInfo(i)
                await this.selectRoomTypeAndValidateBadges(table.rows[0].cells[1])
            }
            break;
        case "THC":
        case "TH":
            let segmentLength = 1;
            for (let i = 0; i < segmentLength; i++) {
                await this.selectHotel(table.rows[0].cells[0])
                await this.hotelAndRoomInfo(i)
                await this.selectRoomTypeAndValidateBadges(table.rows[0].cells[1])
            }
            break;
        default:
            break;
    }
}

exports.addHotelFromReview = async () => {
    let destinationCity = gauge.dataStore.scenarioStore.get("tripDetails");
    await waitFor($(`${tripPlanner.reviewHotelSection()}`), process.env.test_timeout);
    let hotelCity = await evaluate($(`${tripPlanner.reviewAddHotelField()}`), (elem) => { return elem.getAttribute('value') });
    assert.ok(hotelCity.includes(destinationCity.Destination), "Hotel checkin loc is not same as destination loc");
}

exports.clickClearLinkInHotelFilter = async (label) => {
    let clearLinkExist = await $(`${hotelPage.clearFilterLinkLocatorForLabel(label)}`).exists();
    if (clearLinkExist) await click($(`${hotelPage.clearFilterLinkLocatorForLabel(label)}`))
}
exports.clickClearAllLinkInHotelFilter = async () => {
    let clearLinkExist = await $(`${hotelPage.clearAllFilterLocator()}`).exists();
    if (clearLinkExist) await click($(`${hotelPage.clearAllFilterLocator()}`))
}

exports.hotelFilters = async (table, validate = false, singleSearch = false) => {
    let hotelFiltersFlag = true;
    gauge.dataStore.scenarioStore.put("hotelFiltersFlag", hotelFiltersFlag);
    let headerValue;
    let dataEntry;
    await helper.waitForLoaderSvg();
    await helper.waitForSpinner();
    if (!singleSearch) await click($(`${hotelPage.expandFiltersLocator()}`));

    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });

    for (var i = 0; i < headerValue.length; i++) {
        let userInputData = dataEntry[headerValue[i]];
        if (singleSearch) { await click($(`${hotelPage.expandFiltersLocator()}`)); await this.clickClearAllLinkInHotelFilter(); }
        switch (headerValue[i]) {
            case "Hotel Categories":
                await focus($(`${hotelPage.hotelCategories(userInputData)}`))
                await click($(`${hotelPage.hotelCategoriesRadio(userInputData)}`))
                console.log(`Clicked on ${headerValue[i]}, with given data: ${userInputData}`);
                break;
            case 'HotelName':
                if (singleSearch) {
                    await clear($(`${hotelPage.hotelSearchByNameInputLocator()}`))
                    await write(`${userInputData}`, $(hotelPage.hotelSearchByNameInputLocator()));
                    console.log(`Input on ${headerValue[i]}, with given data: ${userInputData}`);
                }
                else {

                    await clear($(`${hotelPage.hotelSearchLocation()}`))
                    await write(`${dataEntry[headerValue[i]]}`, $(hotelPage.hotelSearchLocation()));
                }
                break;
            case 'Amenities':
                await focus($(`${hotelPage.amnenitiesSelectorByName(userInputData)}`))
                await click($(`${hotelPage.amnenitiesSelectorByName(userInputData)}`))
                console.log(`Clicked on ${headerValue[i]}, with given data: ${userInputData}`);
                break;
            case "Distance":
                if (['1', '5', '25'].indexOf(userInputData) >= 0) {
                    await focus($(`${hotelPage.distanceRadioButtonLocator(userInputData)}`))
                    await click($(`${hotelPage.distanceRadioButtonLocator(userInputData)}`))
                }
                else {
                    await focus($(`${hotelPage.customDistanceInputLocator()}`))
                    await clear($(`${hotelPage.customDistanceInputLocator()}`))
                    await write(`${userInputData}`, $(hotelPage.customDistanceInputLocator()));
                }
                console.log(`Clicked on ${headerValue[i]}, with given data: ${userInputData}`);
                break;
            case 'Rating':
                console.log(headerValue[i] + " - " + userInputData);
                await focus($(`${hotelPage.starRatingCheckboxLocator(userInputData)}`))
                await click($(`${hotelPage.starRatingCheckboxLocator(userInputData)}`))
                console.log(`Clicked on ${headerValue[i]}, with given data: ${userInputData}`);
                break;
            case 'BrandName':
                await focus($(`${hotelPage.brandFilterDropDownLocator()}`))
                await click($(`${hotelPage.brandFilterDropDownLocator()}`))
                console.log(`Clicked on dropdown for ${headerValue[i]}`);
                await clear($(`${hotelPage.brandFilterSearchLocator()}`))
                await write(`${userInputData}`, $(hotelPage.brandFilterSearchLocator()));
                console.log(`Value input on ${headerValue[i]}, with given data: ${userInputData}`);
                await focus($(`${hotelPage.hotelByBrandNameCheckboxUnderBrandNameFilter(userInputData)}`))
                await click($(`${hotelPage.hotelByBrandNameCheckboxUnderBrandNameFilter(userInputData)}`))
                console.log(`Clicked on ${headerValue[i]}, with given data: ${userInputData}`);
                break;
            case 'Guests':
                await focus($(`${hotelPage.guestRadioButtonLocator(userInputData)}`))
                await click($(`${hotelPage.guestRadioButtonLocator(userInputData)}`))
                console.log(`Clicked on ${headerValue[i]}, with given data: ${userInputData}`);
                break;

        }
        if (singleSearch) {
            await focus($(`${hotelPage.searchHotelButtonLocator()}`));
            await click($(`${hotelPage.searchHotelButtonLocator()}`));
            console.log("Clicked on Search button on hotel results page");
            await helper.waitForSpinner();
            if (validate) await this.validateHotelResults(headerValue[i], userInputData);
        }
    }
    if (!singleSearch) {
        await waitFor(2000)
        await focus($(`${hotelPage.searchHotelButtonLocator()}`));
        await click($(`${hotelPage.searchHotelButtonLocator()}`));
        await helper.waitForSpinner();
    }
};


exports.getDistanceListForHotelResult = async () => {
    let allDistanceValue = await $(`${hotelPage.hotelDistanceOfAllHotelInResultList()}`).elements();
    let distanceArray = [];
    for (let i = 0; i < allDistanceValue.length; i++) {
        var valWithMi = await allDistanceValue[i].text();
        var distanceVal = await valWithMi.split(' ');
        await distanceArray.push(distanceVal[0]);
    }
    return distanceArray;
}

exports.validateHotelResults = async (headerValue, expectedData) => {

    await helper.waitForLoaderSvg();
    await helper.waitForSpinner();

    console.log("Starting the validation of result");
    switch (true) {
        case ((headerValue == "HotelCategory") && (expectedData == "GDS")):
            await focus($(`${hotelPage.selectHotelByRowIndex(1)}`))
            await click($(`${hotelPage.selectHotelByRowIndex(1)}`))
            let gbtNone = await $(`${hotelPage.hotelCategoryBadgeForCat("GBT")}`).exists();
            assert.equal(gbtNone, false, "Hotel result belonging to " + expectedData + " hotel category exist?");
            console.log("No GBT hotels displayed");
            let booking = await $(`${hotelPage.hotelCategoryBadgeForBookingCom()}`).exists();
            assert.equal(booking, false, "Hotel result belonging to " + expectedData + " hotel category exist?");
            console.log("No Booking.com hotels displayed");
            break;
        case ((headerValue == "HotelCategory") && (expectedData == "GBT")):
            await focus($(`${hotelPage.selectHotelByRowIndex(1)}`))
            await click($(`${hotelPage.selectHotelByRowIndex(1)}`))
            let gbt = await $(`${hotelPage.hotelCategoryBadgeForCat(expectedData)}`).exists();
            assert.equal(gbt, true, "Hotel result belonging to " + expectedData + " hotel category exist?");
            console.log(" GBT hotels are displayed");
            break;
        case ((headerValue == "HotelCategory") && (expectedData == "Booking.com")):
            await this.selectHotel();
            let bcom = await $(`${hotelPage.hotelCategoryBadgeForBookingCom()}`).exists();
            assert.equal(bcom, true, "Hotel result belonging to " + expectedData + " hotel category exist?");
            console.log("Booking.com hotels displayed");
            break;
        case headerValue == 'HotelName':
            let countOfHotelByName = (await $(`${hotelPage.hotelNameTitleOfAllHotelInResultListForGivenHotelName(expectedData)}`).elements()).length;
            let countOfHotelListed = (await $(`${hotelPage.hotelList()}`).elements()).length;
            console.log("Count of hotel by name vs hotel list: " + countOfHotelByName + " - " + countOfHotelListed);
            assert.equal(countOfHotelByName, countOfHotelListed, "Total Hotel Result for hotel name displayed equals total hotel result in general?");
            break;
        case headerValue == 'BrandName':
            let brandNameHotel = await $(`${hotelPage.hotelNameTitleOfAllHotelInResultListForGivenHotelName(expectedData)}`).exists();
            assert.equal(brandNameHotel, true, "Hotel result belonging to " + expectedData + " hotel brand exist?");
            console.log("Hotel Brand Name validation for " + expectedData + " gives " + brandNameHotel);
            break;
        case headerValue == 'Amenities':
            await this.selectHotel("NA")
            await evaluate($(`${hotelPage.showAllAmenitiesInOverview()}`), (elem) => {
                return elem.click();
              });
            let amenity = await $(`${hotelPage.checkPresenceOfAmenityInOverview(expectedData)}`).exists();
            assert.equal(amenity, true, "Hotel result with given " + expectedData + " amenity exist?");
            console.log(expectedData + " Amenity is displayed in the result");
            break;
        case headerValue == 'Distance':
            let valueOfDistanceForAllResult = await this.getDistanceListForHotelResult();
            let valuesWithinRange = (await valueOfDistanceForAllResult).every(el => parseInt(el) <= parseInt(expectedData));
            console.table(valueOfDistanceForAllResult);
            assert.equal(valuesWithinRange, true, "The listed hotel results are within the " + expectedData + " mi radius range?");
            break;
        case headerValue == 'Rating':
            let countOfHotelByRating = (await $(`${hotelPage.starRatingOfAllHotelInResultList()}`).elements()).length;
            for (var i = 0; i < countOfHotelByRating; i++) {
                let countOfStarRating = (await $(`${hotelPage.countOfStarRating(i + 1)}`).elements()).length;
                console.log("Hotel rating for the hotel of row " + i + " equals to " + countOfStarRating + ", expected rating is: " + expectedData);
                assert.equal(countOfStarRating.toString(), expectedData, "The listed hotel results have " + expectedData + " star rating?");
            }
            break;
        case headerValue == 'Guests':
            var countOfHotelListedForGuest = (await $(`${hotelPage.hotelList()}`).elements()).length;
            assert.equal(countOfHotelListedForGuest > 0, true, "The hotel results are listed for " + expectedData + " no of guest?");
            console.log("Result displayed for " + expectedData + " no of guest");
            break;


    }
};

exports.getCheckInDate = async() =>{
    const checkInDate = await evaluate($(`${hotelPage.getCheckInDateValue()}`), (elem) => {
        return elem.getAttribute('value')
    });
    return checkInDate;
}

exports.getCheckOutDate = async() =>{
    const checkOutDate = await evaluate($(`${hotelPage.getCheckOutDateValue()}`), (elem) => {
        return elem.getAttribute('value')
    });
    return checkOutDate;
}
exports.openHotelSegment = async () => {
    let multiHotelDetails = gauge.dataStore.scenarioStore.get("multiHotelDetails");
    for (let i=1; i < multiHotelDetails.HotelSegment; i++){
        await this.clickAddHotel();
    }   
}

exports.fillHotelDetails = async (table) => {
    await helper.waitForLoaderSvg();
    await this.fetchMultiHotelData(table)
    await this.openHotelSegment();
    await this.enterHotelDetails()
}

exports.fetchMultiHotelData = async(table) =>{
    let headerValue;
    let dataEntry;
    let multiHotelDetails = {};
    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });
    gauge.dataStore.scenarioStore.put("headerValue",headerValue );
    for (let i = 0; i < headerValue.length; i++) {
        multiHotelDetails[headerValue[i]] = dataEntry[headerValue[i]];
        gauge.dataStore.scenarioStore.put("multiHotelDetails", multiHotelDetails);
    }
}  


exports.enterHotelDetails = async()=>{
    let headerValue = gauge.dataStore.scenarioStore.get("headerValue");
    let multiHotelDetails = gauge.dataStore.scenarioStore.get("multiHotelDetails");       
    for (let i=0; i < multiHotelDetails.HotelSegment; i++){
        await write(multiHotelDetails[`HotelSearchValue${i}`], $(tripPlanner.hotelSearchLocation(i)));
        let checkInDate = helper.getFutureDate(parseInt(multiHotelDetails[`CheckInAfterXDays${i}`]));
        await write(checkInDate, $(tripPlanner.hotelCheckInDate(i)));
        let checkOutDate = helper.getFutureDate(parseInt(multiHotelDetails[`CheckOutAfterXDays${i}`]));
        await click($(`${tripPlanner.hotelCheckOutDate(i)}`));
        await write(checkOutDate, $(tripPlanner.hotelCheckOutDate(i)));
        if (headerValue.includes(`Numberofguests${i}`)){
            await click($(`${tripPlanner.hotelMoreSearchOptionLink(i)}`));
            await dropDown({ id: `${tripPlanner.locatorGuestType(i)}` }).select({index : multiHotelDetails[`Numberofguests${i}`] -1});
    }  
    }
}   

exports.selectMultiHotelAndRoom = async (table)=>{ 
    let multiHotelDetails = gauge.dataStore.scenarioStore.get("multiHotelDetails");    
    for (let i=0; i < multiHotelDetails.HotelSegment; i++){
        await helper.waitForLoaderSvg();
        await this.selectHotel(table.rows[0].cells[0])
        await this.getMultiHotelAndRoomInfo(i)
        await this.selectRoomTypeAndValidateBadges(table.rows[0].cells[1])
    }
}

exports.getMultiHotelAndRoomInfo = async (i) => {
    let hotelInfoDetails = {};
    let nameOfHotel = await $(`${hotelPage.hotelName()}`).text();
    let addressOfHotel = await this.getHotelAddress();
    let typeOfRoom = await this.getRoomType();
    let fareOfRoom = await this.getRoomFare();
    hotelInfoDetails[`nameOfHotel${i}`] = nameOfHotel;
    hotelInfoDetails[`addressOfHotel${i}`] = addressOfHotel;
    hotelInfoDetails[`typeOfRoom${i}`] = typeOfRoom;
    hotelInfoDetails[`fareOfRoom${i}`] = fareOfRoom;
    gauge.dataStore.scenarioStore.put(`hotelInfoDetails${i}`, hotelInfoDetails);
}

exports.validateHotelSearchLocation = async () => {
    let ExpectedHotel;
    let ActualHotel
    let tripType = process.env.gdsName =="amadeus" ? gauge.dataStore.specStore.get("searchTypeTrip") : gauge.dataStore.scenarioStore.get("searchTypeTrip");
    switch (tripType.searchType) {
        case "AHC":
        case "THC":
        case "AH":
        case "TH":
            ExpectedHotel = process.env.gdsName =="amadeus" ? gauge.dataStore.specStore.get("tripDetails") : gauge.dataStore.scenarioStore.get('tripDetails');
            ActualHotel = await this.validateHotel();
            expect(ActualHotel).to.include(ExpectedHotel.Destination,`Hotel search location not matched, Expected : ${ExpectedHotel.Destination} , Actual :${ActualHotel}`);
            break;
        case "HotelOnly":
            ExpectedHotel = process.env.gdsName =="amadeus" ? gauge.dataStore.specStore.get("hotelDetails0") : gauge.dataStore.scenarioStore.get('hotelDetails0');
            ActualHotel = await this.validateHotel();
            expect(ActualHotel).to.include(ExpectedHotel.HotelSearchValue, `Hotel search location not matched, Expected : ${ExpectedHotel.HotelSearchValue} , Actual :${ActualHotel}`);
            break;
        default:
            break;
    }
    
    
    
}

exports.HotelCheckbox = async () => {
    await evaluate($(`${tripPlanner.hotelCheckBoxLoc()}`), (elem) => {
        return elem.click();
    }
)};

exports.validateInCancellPage = async (validateTripType) => {
    switch(validateTripType){
        case "trip cancellation":
        case "post trip cancellation":
            let value1 = await ($(`${tripConfiramtionPage.payableLaterLoc()}`).exists());
            if(value1 != false) {
            console.log("Payable Later is displayed.")
             } 
            break;
    }
}
exports.enterHotelLoyalityNumer = async (loyalityNumber) => {
    await write(loyalityNumber, $(`${hotelPage.hotelLoyalityNumber()}`));
}
exports.validateMessagesInTripConfirmation = async () => { 
    let expectedTextMessageFaliure = "Your hotel is not booked. Please book a new one.";
    let expectdBookAgainLink = "Book a different Hotel in the same vicinity/city  >";
    let failedHotelErrorText = await $(`${hotelPage.failedHotelErrorText()}`).text();
    let bookAgainLinkText = await $(`${hotelPage.bookAgainLinkSameVicinty()}`).text();
    assert.equal(expectedTextMessageFaliure, failedHotelErrorText, "Failed Hotel Error Message is not displayed");
    if (await $(hotelPage.hotelPartialConfirmation()).exists() == true) {
        let details = gauge.dataStore.scenarioStore.get("tripDetails");
        let carDetails = gauge.dataStore.scenarioStore.get("carDetailsResultPage0");
        let search = gauge.dataStore.scenarioStore.get("searchTypeTrip");
        if (details.TripType == "RT" && search.searchType == ("AHC" || "AH")) {
            let carCost = await $(`${hotelPage.tripCost()}`).text();
            assert.equal(carCost, carDetails.carTotalCostResultPage.trim(), "Car cost is not matching");
        } else {
            let flightDetails = gauge.dataStore.scenarioStore.get("departFlightDetails");
            let tripCostSummary = await $(`${hotelPage.tripCostSummary()}`).text();
            assert.equal(tripCostSummary, flightDetails.flightDepartPageAirFare, "Trip cost is not matching");
        }
    } else {
        assert.fail("Hotel is not failed...")
    }
}
exports.bookAgainTheFailedHotelTrip = async () => { 
    await click($(`${hotelPage.bookAgainLinkSameVicinty()}`));
}
exports.verifyTheDatesAndLocation = async () => { 
    const hotelValue = await evaluate($(`${hotelPage.getHotelValue()}`), (elem) => { return elem.getAttribute('value') })
    const hotelCheckInDate = ($(`${hotelPage.getHotelCheckInDate()}`).exists() ==true) &&
        await evaluate($(`${hotelPage.getHotelCheckInDate()}`), (elem) => { return elem.getAttribute('value') })
    const hotelCheckOutDate = ($(`${hotelPage.getHotelCheckoutDate()}`).exists == true &&
        await evaluate($(`${hotelPage.getHotelCheckoutDate()}`), (elem) => { return elem.getAttribute('value') }))
    let tripDetails = gauge.dataStore.scenarioStore.get("tripDetails");
    expect(hotelValue).to.include(tripDetails.Destination, "Hotel Name didnot match");
    expect(hotelCheckInDate).to.not.be.null;
    expect(hotelCheckOutDate).to.not.be.null;
    
}
exports.selectMatchHotel = async () => { 
    await click($(`${hotelPage.selectMatchHotel()}`));
}
exports.enterNewHotelName = async (newHotelName) => { 
    await clear($(`${hotelPage.getHotelValue()}`));
    await write(newHotelName,$(`${hotelPage.getHotelValue()}`));
}
exports.validateNewLayoutAfterHotelFaliure = async () => { 
    if ($(`${hotelPage.tripCost()}`).exists()) {
        let hotelFaliureMessafe = await $(`${hotelPage.hotelErrorMessage()}`).text();
        assert.equal(hotelFaliureMessafe, "Your hotel is not booked. Please book a new one.")
    } 
}