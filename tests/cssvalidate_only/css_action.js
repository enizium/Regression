"use strict";
const { click, $, evaluate, waitFor, write, scrollTo, dropDown, text, openBrowser } = require("taiko");
const assert = require("assert");
const helper = require("../helpers/helper.js");
const tripReviewPage = require("../Locators/tripReviewPage_po.js");

const { expect } = require("chai");
const tripPlanner = require("../Locators/tripPlanner_po");


exports.tripPlannerPage = async () => {
    let colorRGBValues = helper.colorRGBValues();
    let navbarLinkColor = await evaluate(() => {
        const element = document.querySelector('.deem-chrome-navbar-link')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
   });
   assert.equal(navbarLinkColor,colorRGBValues.ColorNames.White,"Color Matched");
   gauge.message(navbarLinkColor,"NavbarLink");

   let navbarColor = await evaluate(() => {
    const element = document.querySelector('.deem-chrome-navbar')
    const style = getComputedStyle(element)
    return style.getPropertyValue("background-color")
    });
    assert.equal(navbarColor,colorRGBValues.ColorNames.Gray,"Color Matched");
    gauge.message(navbarColor, "navbar");

    let summaryTitleTextColor = await evaluate(() => {
        const element = document.querySelector('.sectionTitle')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
   });
   assert.equal(summaryTitleTextColor,colorRGBValues.ColorNames.LightBlack,"Color Matched")
   gauge.message(summaryTitleTextColor,"search summary title");

   let segmentAddFomSummaryColor = await evaluate(() => {
    const element = document.querySelector('.v3')
    const style = getComputedStyle(element)
    return style.getPropertyValue("color")
});
    assert.equal(segmentAddFomSummaryColor,colorRGBValues.ColorNames.LightBlack,"Color Matched")
    gauge.message(segmentAddFomSummaryColor,"segmentAddFomSummarytitle");
};

exports.cssSearchBtn = async () =>{
    let colorRGBValues = helper.colorRGBValues();
    let searchButtonColor = await evaluate(() => {
        const element = document.querySelector('.bodyBackgroundV3 a')
        const style = getComputedStyle(element)
        return style.getPropertyValue("background").split(")")[0]+")"
    });
    gauge.message(searchButtonColor,"searchbuttons");
    assert.equal(searchButtonColor,colorRGBValues.ColorNames.Black,"Color Matched");

    let searchButtontextColor = await evaluate(() => {
        const element = document.querySelector('.buttonText')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    gauge.message(searchButtontextColor,"searchbuttonstext");
    assert.equal(searchButtontextColor,colorRGBValues.ColorNames.LightBlue,"Color Matched");
};

exports.selectDepartureFlightPage = async () =>{
    let colorRGBValues = helper.colorRGBValues();
    let changeTripLinkColor = await evaluate(() => {
        const element = document.querySelector('.buttonText')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(changeTripLinkColor,colorRGBValues.ColorNames.LightBlue,"Color Matched");
    gauge.message(changeTripLinkColor,"change trip");

    let stoptextColor = await evaluate(() => {
        const element = document.querySelector('.multiCheckboxSelect li label')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(stoptextColor,colorRGBValues.ColorNames.LightGray,"Color Matched");
    gauge.message(stoptextColor,"stoptext");

    let checkMarkboxColor = await evaluate(() => {
        const element = document.querySelector('.multiCheckboxSelect')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(checkMarkboxColor,colorRGBValues.ColorNames.LightBlack,"Color Matched");
    gauge.message(checkMarkboxColor,"check mark Box");

    let checkMarkColor = await evaluate(() => {
        const element = document.querySelector('.multiCheckboxSelect')
        const style = getComputedStyle(element)
        return style.getPropertyValue("background-color")
    });
    assert.equal(checkMarkColor,colorRGBValues.ColorNames.White,"Color Matched");
    gauge.message(checkMarkColor,"check mark");

    let flightSearchButtonColor = await evaluate(() => {
        const element = document.querySelector('.bodyBackgroundV3')
        const style = getComputedStyle(element)
        return style.getPropertyValue("background-color")
    });
    assert.equal(flightSearchButtonColor,colorRGBValues.ColorNames.Black,"Color Matched");
    gauge.message(flightSearchButtonColor,"select Flight");
};

exports.selectReturnFlightPage = async () =>{
    let colorRGBValues = helper.colorRGBValues();
    // let selectedFlight = await evaluate(() => {
    //     const element = document.querySelector('.selected-flight')
    //     const style = getComputedStyle(element)
    //     return style.getPropertyValue("color")
    // });
    // gauge.message(selectedFlight,"selected flight");
    let journeyTimeTextColor = await evaluate(() => {
        const element = document.querySelector('.m-resultBlock ')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(journeyTimeTextColor,colorRGBValues.ColorNames.LightBlack,"Color Matched");
    gauge.message(journeyTimeTextColor,"journeyTime");

    let flightReturnSearchButtonColor = await evaluate(() => {
        const element = document.querySelector('.bodyBackgroundV3')
        const style = getComputedStyle(element)
        return style.getPropertyValue("background-color")
    });
    assert.equal(flightReturnSearchButtonColor,colorRGBValues.ColorNames.Black,"Color Matched");
    gauge.message(flightReturnSearchButtonColor,"select return Flight");
    
}

exports.tripReviewcss = async () =>{
    let colorRGBValues =helper.colorRGBValues();
    let changetripLinkColor = await evaluate($(`${tripReviewPage.changeTripNew()}`), 
    (element) => { const style = getComputedStyle(element)
        console.log(style)
        return style.getPropertyValue("color") });
    
    assert.equal(changetripLinkColor,colorRGBValues.ColorNames.Blue,"Color Matched");
    gauge.message(changetripLinkColor,"change trip from review page");

    let locationTextColor = await evaluate($(`${tripReviewPage.LocationNew()}`), 
    (element) => { const style = getComputedStyle(element)
        console.log(style)
        return style.getPropertyValue("color") });

    assert.equal(locationTextColor,colorRGBValues.ColorNames.LightGrayBlack,"Color Matched");
    gauge.message(locationTextColor,"validate location");

    let holdTripButtonColor = await evaluate($(`${tripReviewPage.HoldTripNew()}`), 
    (element) => { const style = getComputedStyle(element)
        console.log(style)
        return style.getPropertyValue("color") });

    assert.equal(holdTripButtonColor,colorRGBValues.ColorNames.LightGrayBlack,"Color Matched");
    gauge.message(holdTripButtonColor,"hold this trip");

    let continueButtonColor = await evaluate($(`${tripReviewPage.ContinueNew()}`), 
    (element) => { const style = getComputedStyle(element)
        console.log(style)
        return style.getPropertyValue("color") });

    assert.equal(continueButtonColor,colorRGBValues.ColorNames.White,"Color Matched");
    gauge.message(continueButtonColor,"continue btn");
};

exports.purchasePagecss = async () =>{
    let colorRGBValues = helper.colorRGBValues();
    let purchaseButtonColor = await evaluate(() => {
        const element = document.querySelector('.wrap')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(purchaseButtonColor,colorRGBValues.ColorNames.LightBlue,"Color Matched");
    gauge.message(purchaseButtonColor,"purchase button");

    let purchasetextColor = await evaluate(() => {
        const element = document.querySelector('.buttonText')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(purchasetextColor,colorRGBValues.ColorNames.LightBlue,"Color Matched");
    gauge.message(purchasetextColor,"purchase text");
}

exports.tripConfirmationcss = async () =>{
    let colorRGBValues = helper.colorRGBValues();

    let clickDoneButtonColor = await evaluate(() => {
        const element = document.querySelector('.btn2')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(clickDoneButtonColor,colorRGBValues.ColorNames.LightBlue,"Color Matched")
    gauge.message(clickDoneButtonColor,"Click Done");

    let donetextColor = await evaluate(() => {
        const element = document.querySelector('.buttonText')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(donetextColor,colorRGBValues.ColorNames.LightBlue,"Color Matched")
    gauge.message(donetextColor,"done text");

    let tripSummaryTextColor = await evaluate(() => {
        const element = document.querySelector('.sectionTitle')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(tripSummaryTextColor,colorRGBValues.ColorNames.LightBlack,"Color Matched")
    gauge.message(tripSummaryTextColor,"tripSummary segment");

}
exports.reservationscss = async () =>{
    let colorRGBValues = helper.colorRGBValues();
    let SearchButtonColor = await evaluate(() => {
        const element = document.querySelector('.m-selectSearch')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(SearchButtonColor,colorRGBValues.ColorNames.Black1,"Color Matched")
    gauge.message(SearchButtonColor,"color");

    let AscendingButtonColor = await evaluate(() => {
        const element = document.querySelector('.m-selectSort')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(AscendingButtonColor,colorRGBValues.ColorNames.Black1,"Color Matched")
    gauge.message(AscendingButtonColor,"color");

    let AllTypesButtonColor = await evaluate(() => {
        const element = document.querySelector('.m-selectFilter')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(AllTypesButtonColor,colorRGBValues.ColorNames.Black1,"Color Matched")
    gauge.message(AllTypesButtonColor,"color");

    let RadioButtonColor = await evaluate(() => {
        const element = document.querySelector('.option')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(RadioButtonColor,colorRGBValues.ColorNames.LightGray,"Color Matched")
    gauge.message(RadioButtonColor,"color");

    let ApplyLinkColor = await evaluate(() => {
        const element = document.querySelector('.m-action')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(ApplyLinkColor,colorRGBValues.ColorNames.LightBlue1,"Color Matched")
    gauge.message(ApplyLinkColor,"color");

    let ConfirmedIconColor = await evaluate(() => {
        const element = document.querySelector('.statusMessage')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(ConfirmedIconColor,colorRGBValues.ColorNames.Green,"Color Matched")
    gauge.message(ConfirmedIconColor,"color");

    let CancelTripLinkColor = await evaluate(() => {
        const element = document.querySelector('.m-cancel')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(CancelTripLinkColor,colorRGBValues.ColorNames.LightBlue1,"Color Matched")
    gauge.message(CancelTripLinkColor,"color");
}

exports.tripCancellationcss = async () =>{
    let colorRGBValues = helper.colorRGBValues();
    let DoneButtonColor = await evaluate(() => {
        const element = document.querySelector('.btn')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(DoneButtonColor,colorRGBValues.ColorNames.LightBlue,"Color Matched")
    gauge.message(DoneButtonColor,"color");

    let CrossSignButtonColor = await evaluate(() => {
        const element = document.querySelector('.serviceTooltip ')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(CrossSignButtonColor,colorRGBValues.ColorNames.Red,"Color Matched")
    gauge.message(CrossSignButtonColor,"color");

    let CostLinkColor = await evaluate(() => {
        const element = document.querySelector('.OneLinkNoTx')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(CostLinkColor,colorRGBValues.ColorNames.LightBlack,"Color Matched")
    gauge.message(CostLinkColor,"color");
}

exports.TSAcss = async () =>{
    let colorRGBValues = helper.colorRGBValues();
    let TSATextColor = await evaluate(() => {
        const element = document.querySelector('.selected')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(TSATextColor,colorRGBValues.ColorNames.White,"Color Matched")
    gauge.message(TSATextColor,"color");

    let ContinueButtonColor = await evaluate(() => {
        const element = document.querySelector('.m-selectSort')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(ContinueButtonColor,colorRGBValues.ColorNames.Black,"Color Matched")
    gauge.message(ContinueButtonColor,"color");

    let CancelButtonColor = await evaluate(() => {
        const element = document.querySelector('.m-selectSort')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(CancelButtonColor,colorRGBValues.ColorNames.White,"Color Matched")
    gauge.message(CancelButtonColor,"color");

}
exports.TripDetailscss = async () =>{
    let colorRGBValues = helper.colorRGBValues();
    let BookAgainTextColor = await evaluate(() => {
        const element = document.querySelector('#bookAgain')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(BookAgainTextColor,colorRGBValues.ColorNames.LightBlue1,"Color Matched")
    gauge.message(BookAgainTextColor,"color");

    let ChangeLinkColor = await evaluate(() => {
        const element = document.querySelector('#tripChangeLink')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(ChangeLinkColor,colorRGBValues.ColorNames.Black,"Color Matched")
    gauge.message(ChangeLinkColor,"color");
    
    let CancelLinkColor = await evaluate(() => {
        const element = document.querySelector('#tripCancelLink')
        const style = getComputedStyle(element)
        return style.getPropertyValue("color")
    });
    assert.equal(CancelLinkColor,colorRGBValues.ColorNames.White,"Color Matched")
    gauge.message(CancelLinkColor,"color");

}
