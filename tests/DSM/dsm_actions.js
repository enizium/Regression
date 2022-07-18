"use strict";
const assert = require("assert");
const { click, write, $, evaluate, waitFor,text } = require('taiko');
const tripPlanner = require("../Locators/tripPlanner_po")
const helper = require("../helpers/helper.js");

exports.newvalidateDSMLightboxMessage = async(page, partnersite) =>{
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    await waitFor(5000)
    let partnerSiteDsm = partnersite.replace(/\s/g, '');
  
    switch(page){
        case "Trip planner":
            await this.newvalidateDSMLightboxForAllTrips(partnerSiteDsm, page)
            break;
        default:
            await this.newvalidateDSMLightboxForAllTrips(partnerSiteDsm, page)
            await this.newvalidateDSMLightboxForInternationalDosmesticTrips(partnerSiteDsm, page)
            break ;
    }
}

exports.newvalidateDSMLightboxForAllTrips = async (partnerSiteDsm, page) =>{
    let partnerSiteDsmMsg = helper.partnerSiteLevelLightboxDSM(partnerSiteDsm)
    assert.ok((await text(partnerSiteDsmMsg["DSMLightboxMessage1foralltrips"]).exists()), `${partnerSiteDsmMsg["DSMLightboxMessage1foralltrips"]} is not displayed on ${page}`)
    assert.ok((await text(partnerSiteDsmMsg["DSMLightboxMessage2foralltrips"]).exists()), `${partnerSiteDsmMsg["DSMLightboxMessage2foralltrips"]} is not displayed on ${page}`)
    gauge.message(`Message is verified: ${partnerSiteDsmMsg["DSMLightboxMessage1foralltrips"]}, ${partnerSiteDsmMsg["DSMLightboxMessage2foralltrips"]}`)
}

exports.newvalidateDSMLightboxForInternationalDosmesticTrips = async (partnerSiteDsm,page) =>{
    let partnerSiteDsmMsg = helper.partnerSiteLevelLightboxDSM(partnerSiteDsm)
    assert.ok((await text(partnerSiteDsmMsg["DSMLightBoxMessage1fortrips"]).exists()), `${partnerSiteDsmMsg["DSMLightBoxMessage1fortrips"]} is not displayed on ${page}`)
    assert.ok((await text(partnerSiteDsmMsg["DSMLightBoxMessage2fortrips"]).exists()), `${partnerSiteDsmMsg["DSMLightBoxMessage2fortrips"]} is not displayed on ${page}`)
    gauge.message(`Message is verified: ${partnerSiteDsmMsg["DSMLightBoxMessage1fortrips"]}, ${partnerSiteDsmMsg["DSMLightBoxMessage2fortrips"]}`)
}

exports.newvalidateDSMInlineMessage = async(page, partnersite) =>{
    let partnerSiteDsm = partnersite.replace(/\s/g, '');
    switch(page){
        case "Trip planner":
            await this.newvalidateDSMInlineForAllTrips(partnerSiteDsm, page)
            break;
        default:
            await this.newvalidateDSMInlineForAllTrips(partnerSiteDsm, page)
            await this.newvalidateDSMInlineForInternationalDosmesticTrips(partnerSiteDsm, page)
            break;
    }
}

exports.newvalidateDSMInlineForAllTrips = async (partnerSiteDsm, page) =>{
    let partnerSiteDsmMsg = helper.partnerSiteLevelInlineDSM(partnerSiteDsm)
    assert.ok((await text(partnerSiteDsmMsg["DSMInlineMessage1foralltrips"]).exists()), `${partnerSiteDsmMsg["DSMInlineMessage1foralltrips"]} is not displayed on ${page}`)
    assert.ok((await text(partnerSiteDsmMsg["DSMInlineMessage2foralltrips"]).exists()), `${partnerSiteDsmMsg["DSMInlineMessage2foralltrips"]} is not displayed on ${page}`)
    gauge.message(`Message is verified: ${partnerSiteDsmMsg["DSMInlineMessage1foralltrips"]}, ${partnerSiteDsmMsg["DSMInlineMessage2foralltrips"]}`)
}

exports.newvalidateDSMInlineForInternationalDosmesticTrips = async (partnerSiteDsm,page) =>{
    let partnerSiteDsmMsg = helper.partnerSiteLevelInlineDSM(partnerSiteDsm)
    assert.ok((await text(partnerSiteDsmMsg["DSMInlineMessage1fortrips"]).exists()), `${partnerSiteDsmMsg["DSMInlineMessage1fortrips"]} is not displayed on ${page}`)
    assert.ok((await text(partnerSiteDsmMsg["DSMInlineMessage2fortrips"]).exists()), `${partnerSiteDsmMsg["DSMInlineMessage2fortrips"]} is not displayed on ${page}`)
    gauge.message(`Message is verified: ${partnerSiteDsmMsg["DSMInlineMessage1fortrips"]}, ${partnerSiteDsmMsg["DSMInlineMessage2fortrips"]}`)
}

exports.DSMCloseBtn = async() =>{
    await evaluate($(`${tripPlanner.DSMCloseBtn()}`), (elem) => { return elem.click()});
}
exports.DSMCloseXBtn = async() =>{
    await evaluate($(`${tripPlanner.DSMCloseXBtn()}`), (elem) => { return elem.click()});
}
exports.collapseDsmMsg = async() => {
    await evaluate($(`${tripPlanner.DsmMsg()}`), (elem) => { return elem.click()});   
}