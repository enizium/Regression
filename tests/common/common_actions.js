"use strict";
const { click, write, $, dropDown, evaluate, waitFor, textBox, hover, into, clear,scrollDown, scrollTo, window, press, checkBox, confirm, accept, reload, openTab, closeTab, text, focus, goto, below } = require('taiko');
const airAction = require('../air_only/air_actions.js');
const carServicePo = require('../Locators/car_services_po.js');
const trainAction = require('../train_Only/train_actions.js');
const hotelAction = require('../hotel_only/hotel_actions.js');
const carAction = require('../car_only/car_actions.js');
const purchase = require('../Locators/purchase_po.js');
const tripPlanner_locator = require('../Locators/tripPlanner_po.js');
const tripReviewPage = require('../Locators/tripReviewPage_po.js');
const helper = require('../helpers/helper.js');
const login = require('../Locators/login_po.js');
const languageLoc = require('../Locators/language_po.js');
const selReturnFlight = require("../Locators/select_Return_Flight_po");
const reservation = require('../Locators/reservation_po.js');
const tripConfiramtionPage = require("../Locators/tripConfirmation_po");
const dynamicAirPolicy = require("../Locators/dynamicAirPolicyModel_po");
const companyPolicyComplainceOOP = require("../Locators/companyPolicyCompliance_po")
const tripDetail = require('../Locators/tripDetails_po.js')
const hotelPage = require('../Locators/hotel_po.js')
const delegate = require('../Locators/delegate_po');
const carRental_po = require('../Locators/car_rental_po');
const departTrainPage = require('../Locators/select_Departure_Train_po.js');
const EHILocatrs = require('../EHI/EHI_Locators');

const assert = require('assert').strict;
const chai = require('chai');
var expect = chai.expect
const pta_po = require('../Locators/pta_po');

let bookAgainFlag = false;

exports.languageButton = async (language) => {
    await click($(`${languageLoc.language(language)}`));
}
exports.enterUserName = (username) => write(username, $(`${login.username()}`))
exports.enterPassword = (password) => write(password, $(`${login.password()}`))
exports.clickSignIn = () => click($(`${login.signIn()}`));

exports.closeAllSegments = async () => {
    let openSearchArea = await $(tripPlanner_locator.segmentClose()).elements().then(ele => (ele.length));
    for (var i = 0; i < openSearchArea; i++) {
        await click($(tripPlanner_locator.closeAllOpenSegments()));
    }  
}
exports.closeAllMDSegments = async () => {
    await click($(tripPlanner_locator.closeSegment()));
    let openSearchArea = await $(tripPlanner_locator.segmentClose()).elements().then(ele => (ele.length));
    for (var i = 0; i < openSearchArea; i++) {
        await click($(tripPlanner_locator.closeAllOpenSegments()));
    }  
}

exports.reloadCurrentPage = async() => {
    await reload();
}

exports.bookTripType = async (searchType) => {
    switch (searchType) {
        case "AirOnly":
            await airAction.clickAddFlight();
            break;
        case "HotelOnly":
            await hotelAction.clickAddHotel();
            break;
        case "CarRentalOnly":
            await carAction.clickAddCar();
            break;
        case "AHC":
            await airAction.clickAddFlight();
            await hotelAction.clickAddHotel();
            await carAction.clickAddCar();
            break;
        case "AC":
            await airAction.clickAddFlight();
            await carAction.clickAddCar();
            break;
        case "AH":
            await airAction.clickAddFlight();
            await hotelAction.clickAddHotel();
            break;
        case "THC":
            await trainAction.clickAddTrain();
            await hotelAction.clickAddHotel();
            await carAction.clickAddCar();
            break;
        case "TrainOnly":
            await trainAction.clickAddTrain();
            break;
        case "TH":
            await trainAction.clickAddTrain();
            await hotelAction.clickAddHotel();
            break;
        case "TC":
            await trainAction.clickAddTrain();
            await carAction.clickAddCar();
            break;
        case "HC":
            await carAction.clickAddCar();
            await hotelAction.clickAddHotel();
            break;
        case "AHH":
            await airAction.clickAddFlight();
            await hotelAction.clickAddHotel();
            await hotelAction.clickAddHotel();
            break;
        case "AHHC":
            await airAction.clickAddFlight();
            await hotelAction.clickAddHotel();
            await hotelAction.clickAddHotel();
            await carAction.clickAddCar();
            break;
        default:
            break;
    }
}

exports.clickContinue = async () => await evaluate($(`${tripReviewPage.continueButton()}`), (elem) => { return elem.click() });
exports.clickHoldTripContinue = async () => {
            await click($(`${tripReviewPage.holdripContinueButton()}`)); 
        if (await $(`${purchase.travelAcknoledgementContinueBtnInHoldTrip()}`).exists()) 
        {
            await click($(`${purchase.travelAcknoledgementContinueBtnInHoldTrip()}`))
        }else{
            console.log("No pop up modal");
        }
}

exports.enterTripName = async () => {
    await gauge.dataStore.specStore.put('tripName', "Deem Automation Test Booking " + Math.random().toString(36).substring(7));
    await write(gauge.dataStore.specStore.get('tripName'), $(`${purchase.tripName()}`));
}
exports.enterProjectCodeAdditionalInfo = async () => {
    let additionalInfo = helper.additionalInformation("additionalInformation")
    await scrollTo($(`${purchase.projectCode()}`));
    await write(additionalInfo["projectCode"], $(`${purchase.projectCode()}`));
    await dropDown({ id: `${purchase.billableNonBillable()}` }).select({ index: '1' });
    await dropDown({ id: `${purchase.tripPurpose()}` }).select({ index: '1' });
}

exports.reasonForNotBookingHotel = async () => {
    await dropDown({ id: `${purchase.reasonForHotel()}` }).select({ index: '1' });
}

exports.clickPurchase = async () => {
    await click($(`${purchase.purchaseButton()}`));
    if (await $(`${purchase.travelAcknoledgementPopup()}`).exists()) {
        await click($(`${purchase.travelAcknoledgementContinueBtn()}`))
    }else{
        console.log("No pop up modal");
    }
}

exports.clickModifyOrPurchase = async () => {
    await click($(`${purchase.modifyOrPurchase()}`));
}

exports.clickHoldThisTrip = async () => {
    await click($(`${tripReviewPage.holdThisTrip()}`));
}
exports.clickHoldThisTripInPurchasePage = async () => {
    await click($(`${purchase.holdThisTripPurchasePage()}`));
}

exports.clickDone = async () => {
    await helper.waitForLoaderSvg();
    await click($(`${tripConfiramtionPage.doneButton()}`))
}

exports.otfopInfo = async (cardType) => {
    await waitFor(async () => (await $(`${(purchase.cardHolderNameLoc())}`).exists()));
    let otfopDetails = helper.otfopDetails(cardType)
    await write(otfopDetails["carHolderName"],  $(`${(purchase.cardHolderNameLoc())}`));
    await dropDown({ id: `${purchase.paymentCreditCardType()}` }).select({ index: '1' });
    await write(otfopDetails["cardNumber"], $(`${(purchase.creditCard_number())}`));
    await dropDown({ id: `${purchase.paymentCreditCard_ExpiryMth()}` }).select({ index: 10 });
    await dropDown({ id: `${purchase.paymentCreditCard_ExpiryYr()}` }).select({ index: 2 });
}

exports.otfopTrainInfo = async (cardType) => {
    let otfopDetails = helper.otfopDetails(cardType)
    await this.otfopInfo(cardType)
    await write(otfopDetails["cvv"], $(`${purchase.paymentCreditCard_cid()}`));
    await dropDown({ id: `${purchase.paymentCreditCardBillingCountry()}` }).select({ index: 227 });
    await write(otfopDetails["billingStreetAddress"], $(`${(purchase.billingStreetAddress())}`));
    await write(otfopDetails["billingCity"], $(`${(purchase.billingCity())}` ));
    await dropDown({ id: `${purchase.paymentCreditCardBillingAddress()}` }).select(`${otfopDetails["billingState"]}`);
    await write(otfopDetails["billingZipCode"], $(`${(purchase.billingZipCode())}` ));
}

exports.cvvCode = async (code, tripType) => {
    let cvvCode = helper.otfopDetails(code);
    await write(cvvCode["cvv"], $(`${purchase.cvvTextBox(tripType)}`));
} 

exports.priceIncDecAlert = async () => {
    if(await $(`${selReturnFlight.priceIncDecAlertPopup()}`).exists()){
        if(await $(`${selReturnFlight.priceIncDecContinueBtn()}`).exists()){
            await click($(`${selReturnFlight.priceIncDecContinueBtn()}`)) 
            console.log("clicked contiune botton in priceIncDecAlert ")
        }
    }
}

exports.clickReservation = async () => await evaluate($(`${tripPlanner_locator.clickReservations()}`), (elem) => {
    return elem.click();
});
exports.clickSearch = async () => await click($(`${reservation.clickSearch()}`));
exports.clickSearchByIdSelector = async () => await click($(`${reservation.selectorForSearchButton()}`));
exports.clickApply = async () => await click($(`${reservation.clickApply()}`));
exports.searchTripName = async () => {
    await waitFor(1000);
    await write(gauge.dataStore.specStore.get('tripName'), textBox({ name: `${reservation.tripName()}`}));
}
exports.hotelValidateInReviewPage = async () => {
    await helper.waitForSpinner();
    await waitFor(async () => (await $(`${tripReviewPage.displayHotelName()}`).exists()), process.env.test_timeout)
    let hotelName = await $(`${tripReviewPage.displayHotelName()}`).text()
    let hotelAddress = await $(`${tripReviewPage.displayHotelAddress()}`).text()
    let dispalyHotelFare = await $(`${tripReviewPage.displayHotelFare()}`).text()
    let hotelFare = String(dispalyHotelFare).replace(/\.00/, '');

    let hotelInfoDetails = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get('hotelInfoDetails') : gauge.dataStore.scenarioStore.get('hotelInfoDetails');

    assert.strictEqual(hotelName, hotelInfoDetails.nameOfHotel, `In-correct name displayed  on review page , 
    Expected : ${hotelInfoDetails.nameOfHotel} ,Actual :${hotelName}`);
    assert.notDeepEqual(hotelAddress, hotelInfoDetails.addressOfHotel, `In-correct hotel address displayed  on review page , 
    Expected : ${hotelInfoDetails.addressOfHotel} ,Actual :${hotelAddress}`)
    assert.strictEqual(hotelFare, hotelInfoDetails.fareOfRoom, `In-correct hotel fare displayed  on review page , 
    Expected : ${hotelInfoDetails.fareOfRoom} ,Actual :${hotelFare}`)
}

exports.hotelValidateInTripConfiramtionPage = async () => {
    await waitFor(async () => (await $(`${tripConfiramtionPage.hotelName()}`).exists()), process.env.test_timeout)
    let hotelName = await $(`${tripConfiramtionPage.hotelName()}`).text()
    let hotelAddress = await $(`${tripConfiramtionPage.hotelAddress()}`).text()
    let dispalyHotelFare = await $(`${tripConfiramtionPage.hotelFare()}`).text()
    let hotelFare = String(dispalyHotelFare).replace(/\.00/, '');
    let hotelInfoDetails = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get('hotelInfoDetails') : gauge.dataStore.scenarioStore.get('hotelInfoDetails');
    assert.strictEqual(hotelName, hotelInfoDetails.nameOfHotel, `In-correct name displayed  on trip confirmation page , 
    Expected : ${hotelInfoDetails.nameOfHotel} ,Actual :${hotelName}`);
    assert.notDeepEqual(hotelAddress, hotelInfoDetails.addressOfHotel, `In-correct hotel address displayed  on trip confirmation page, 
    Expected : ${hotelInfoDetails.addressOfHotel} ,Actual :${hotelAddress}`)
    assert.notDeepEqual(hotelFare, hotelInfoDetails.fareOfRoom, `In-correct hotel fare displayed  on trip confirmation page , 
    Expected : ${hotelInfoDetails.fareOfRoom} ,Actual :${hotelFare}`)
}

exports.doneButtonInTripConfirmation = async () => {
    await click($(`${tripConfiramtionPage.doneButton()}`))
}

exports.changeTripInTripDetail = async () => await click($(`${tripDetail.clickChange()}`));
exports.cancelTripInTripDetail = async () => await click($(`${tripDetail.clickCancel()}`));
exports.cancelTrip = async () =>{
    await waitFor(2000);
    await click($(`${reservation.clickCancelTrip()}`));
}

exports.selectTrip = async () => {
    await helper.waitForSpinner();
    await waitFor(2000);
    await click($(`${reservation.selectTripName()}`));
}
exports.clickConfirmCancel = async () => await click($(`${reservation.confirmCancel()}`))
exports.changeTrip = async () => {
    let tripSearchType = process.env.gdsName == "amadeus" ?  gauge.dataStore.specStore.get("searchTypeTrip") : gauge.dataStore.scenarioStore.get("searchTypeTrip");
    if (tripSearchType.searchType !== "HotelOnly") {
        let changeFlag = true;
        await gauge.dataStore.scenarioStore.put('changeFlag', changeFlag);
    }
    await click($(`${reservation.clickChangeTrip()}`));
}
exports.clickContinueChange = async () => await click($(`${reservation.continueChange()}`));
exports.bookAgainTrip = async () => await click($(`${reservation.clickBookAgain()}`));
exports.setBookAgainTripName = async () => { await gauge.dataStore.scenarioStore.put('bookAgainTrip', gauge.dataStore.specStore.get('tripName'));}
exports.clickBookAgainPopUp = async () => await click($(`${reservation.bookAgainLOC()}`));
exports.clickBookAgainInHoldTrip = async () => await click($(`${reservation.bookAgainHoldTrip()}`));
exports.clickBookAgainInReservation = async () => await click($(`${reservation.bookAgainInReservation()}`));
exports.clickViewDetails = async () => await click($(`${reservation.clickViewDetails()}`));

exports.oopModalBox = async () => {
    await helper.waitForSpinner();
    if (await $(`${dynamicAirPolicy.oopModal()}`).exists()) {
        await hover($(dynamicAirPolicy.oopContinueButton()));
        await evaluate($(dynamicAirPolicy.oopContinueButton()), (elem) => { return elem.click() });
        await waitFor(async () => !(await $(".pwsV3Spinner").exists()), process.env.test_timeout);
    }

}

exports.clickConfirmCancellation = async () => await click($(`${tripConfiramtionPage.confirmCancellation()}`))

exports.clickHotelContinueButton = async () => {
    await click($(`${purchase.clickHotelContinueButton()}`));
}

exports.delegateStartAssisting = async () => {
    await waitFor($(`${delegate.delegateIcon()}`), process.env.test_timeout);
    await hover($(`${delegate.delegateIcon()}`));
    let expectedDelegateUserName = await $(`${delegate.delegateExpectedUserName()}`).text();
    gauge.dataStore.scenarioStore.put('expectedDelegateUserName', expectedDelegateUserName);
    await click($(`${delegate.delegateExpectedUserName()}`));
    await waitFor($(`${delegate.delegateDisplayedUserName()}`), process.env.test_timeout);
    let actualDeleagateUserName = await $(`${delegate.delegateDisplayedUserName()}`).text();
    gauge.dataStore.scenarioStore.put('actualDeleagateUserName', actualDeleagateUserName);
    await helper.waitForLoaderSvg();
}

exports.delegateValidate = async () => {
    let actualDelegateName = gauge.dataStore.scenarioStore.get('actualDeleagateUserName').toString().replace(/[0-9]/g, '').trim()
    let expectedDelagateName = gauge.dataStore.scenarioStore.get('expectedDelegateUserName')
    assert.strictEqual(actualDelegateName, expectedDelagateName,`Delegate name not matched, Expected : ${expectedDelagateName} ,Actual :${actualDelegateName}`)
}
exports.clickHotelContinueButton = async () => {
    await click($(`${purchase.clickHotelContinueButton()}`));
}

// exports.travelerAcknowledgement = async () => {
//     if (await $(`${purchase.travelAcknoledgementPopup()}`).exists()) {
//         await click($(`${purchase.travelAcknoledgementContinueBtn()}`))
//     }
// }
// exports.travelerAcknowledgementInHoldTrip = async () => {
//     if (await $(`${purchase.travelAcknoledgementContinueBtnInHoldTrip()}`).exists()) {
//         await click($(`${purchase.travelAcknoledgementContinueBtnInHoldTrip()}`))
//     }
// }

exports.fillBookAgainLeaveAndReturnDate = async (table) => {
    let headerValue;
    let dataEntry;
    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });
    for (var i = 0; i < headerValue.length; i++) {
        switch (headerValue[i]) {
            case 'BookingAfterXDays':
                let leaveDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]));
                let returnDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]) + 4);
                await this.enterLeaveAndReturnDate(leaveDate, returnDate);
                break;
            case 'BookTripFor':
                await click($(`${reservation.bookTripFor()}`)); 
                await waitFor(5000)
                await click($(`${reservation.bookAgainTripFor(dataEntry[headerValue[i]])}`));
                break;
            default:
                break;
        }
    }
    await evaluate($(`${reservation.clickDoneBA()}`), (elem) => {
        return elem.click();
    });
}
exports.enterBookAgainLeaveAndReturnDate = async (table) => {
    let headerValue;
    let dataEntry;
    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });
    for (var i = 0; i < headerValue.length; i++) {
        switch (headerValue[i]) {
            case 'BookingAfterXDays':
                let leaveDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]));
                let returnDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]) + 32);
                await this.enterLeaveAndReturnDate(leaveDate, returnDate);
                break;
                default:
                    break;
            }
        }
        await evaluate($(`${reservation.clickDoneBA()}`), (elem) => {
            return elem.click();
        });
    }

exports.enterLeaveAndReturnDate = async (departureDate, returnDate) => {
    await write(departureDate, $(reservation.enterDepartDateBA()))
    await write(returnDate, $(reservation.enterReturnDateBA()))
}

exports.validateAirlineBaggageFee = async () => {
    await helper.waitForLoaderSvg();
    await hover($(`${tripConfiramtionPage.baggageIcon()}`));
    await scrollTo($(`${tripConfiramtionPage.airline()}`));
    let baggageVendor = await $(`${tripConfiramtionPage.airline()}`).text();
    let baggageAirline = String(baggageVendor).replace(/[\s\n\r\t]/g, "").trim();
    assert.notDeepEqual(gauge.dataStore.scenarioStore.get('airlineNameInBag'), baggageAirline,`Airline name in baggge not matched ,Expected :${gauge.dataStore.scenarioStore.get('airlineNameInBag')} ,Actual: ${baggageAirline}`)
}

exports.validateCountBaggageFee = async () => {
    let chckdBagTypCountOnReview = (await $(`${tripConfiramtionPage.baggageCount()}`).get()).length;
    for (var i = 1; i <= chckdBagTypCountOnReview; i++) {
        let checkedBagType = gauge.dataStore.scenarioStore.get('checkedBagType' + i);
        let chckBagTyp = String(checkedBagType).replace(/[\s\n\r\t]/g, "").trim();
        let checkedBagfees = gauge.dataStore.scenarioStore.get('checkedBagfees' + i);
        let chckBagfees = String(checkedBagfees).replace(/[\s\n\r\t]/g, "").trim();
        let BagType = await $(`${tripConfiramtionPage.checkedBagType(i)}`).text();
        let Bagefees = await $(`${tripConfiramtionPage.checkedBagfees(i)}`).text();

        assert.notDeepEqual(chckBagTyp, BagType,`Baggage Type not matched ,Expected : ${BagType} , Actual : ${chckBagTyp}`)
        assert.notDeepEqual(chckBagfees, Bagefees,`Baggage Type not matched ,Expected : ${Bagefees} , Actual : ${chckBagfees}`)
    }
}

exports.getHotelBookAgainDetails = async (table) => {
    let checkInDate = table.rows[0].cells[0];
    let checkOutDate = table.rows[0].cells[1];
    await write(helper.getFutureDate(parseInt(checkInDate)), $(tripDetail.enterBookAgainPopUpLeave()));
    await write(helper.getFutureDate(parseInt(checkOutDate)), $(tripDetail.enterBookAgainPopUpReturn()));
    await waitFor(2000);
    await click($(`${tripDetail.clickBookAgainPopUpBookAgain()}`));
}

exports.changeTravelerUserName = async (guestUserKey) => {
    await this.changeTravelerEditButton()
    await this.changeTravelerName(guestUserKey)
    await this.changeTravelerDOB(guestUserKey)
    await this.travelerGender(guestUserKey)
    await this.travelerContactDetails(guestUserKey)
    await this.travelerAddressDetails(guestUserKey)
}

exports.changeTravelerDOB = async (guestUserKey) => {
    let guestOneUserDetails = helper.guestUserDetails(guestUserKey);
    await dropDown({ id: `${purchase.dob_month()}` }).select(guestOneUserDetails["dateOfBirth"].split(" ")[0]);
    await dropDown({ id: `${purchase.dob_day()}`}).select(guestOneUserDetails["dateOfBirth"].split(" ")[1]);
    await dropDown({ id: `${purchase.dob_year()}` }).select(guestOneUserDetails["dateOfBirth"].split(" ")[2]);
}

exports.changeTraveler = async (guestUserKey) => {
    await this.changeTravelerEditButton()
    await this.changeTravelerName(guestUserKey)
    await this.travelerContactDetails(guestUserKey)
    await this.travelerAddressDetails(guestUserKey)
    }

exports.changeTravelerEditButton = async () => {
    await helper.waitForSpinner();
    await waitFor($(`${purchase.changeTraveler()}`), process.env.test_timeout);
    await click($(`${purchase.changeTraveler()}`));
}

exports.changeTravelerName = async (guestUserKey) => {
    let guestOneUserDetails = helper.guestUserDetails(guestUserKey);
    await dropDown({ id: `${purchase.salutation()}` }).select(guestOneUserDetails["phxTitle"]);
    await write(guestOneUserDetails["firstName"], $(`${purchase.ownerPaxFName()}`));
    await write(guestOneUserDetails["lastName"], $(`${purchase.ownerPaxLName()}`));
}

exports.emailTrainDetail = async (guestUserKey) => {
    let guestOneUserDetails = helper.guestUserDetails(guestUserKey);
    await $(`${purchase.railDeliveryEmail()}`).exists();
    await write(guestOneUserDetails["email"], $(`${purchase.railDeliveryEmailAdress()}`));
    console.log("Email id for train company entered.");
}

exports.guestTravelerDetails = async () => {
    let guestOneUserDetails = helper.guestUserDetails('User');
    let actualGuestUserName = await $(`${tripConfiramtionPage.changeTravelerNameDisplayed()}`).text();
    console.log("Validating Guest Traveler Name");
    assert.ok(actualGuestUserName.includes(guestOneUserDetails["firstName"]),`Guest user name doesn't include first name as : ${guestOneUserDetails["firstName"]}`)
    assert.ok(actualGuestUserName.includes(guestOneUserDetails["lastName"]),`Guest user name doesn't include last name as : ${guestOneUserDetails["firstName"]}`)
}

exports.trainTicketNotification = async () => {
    await evaluate($(`${purchase.trainTicketNotiCheckbox()}`), (elem) => {return elem.click(); });
}
exports.trainOOP = async () => {
    await click($(`${tripReviewPage.trainReasonOptions()}`));
    await click($(`${tripReviewPage.trainSelectReason()}`));
    await write('Automation', $(`${tripReviewPage.textareaCPC()}`));
    await click("Continue");
}
exports.hotelOOP = async () => {
    await click($(`${tripReviewPage.hotelReasonOptions()}`));
    await click($(`${tripReviewPage.hotelSelectReason()}`));
    if(await $(`${tripReviewPage.textareaCPC()}`).exists(0,0)){
        await write('Automation', $(`${tripReviewPage.textareaCPC()}`));
    }
    await click("Continue");
}

exports.hotelOOPWithoutReason = async () => {
    await click($(`${tripReviewPage.hotelReasonOptions()}`));
    await click($(`${tripReviewPage.hotelSelectReason()}`));
    await click("Continue");
}

exports.carRentalOOP = async () => {
    await click($(`${tripReviewPage.carRentalReasonOptions()}`));
    await click($(`${tripReviewPage.carRentalSelectReason()}`));
    await write('Automation', $(`${tripReviewPage.textareaCPC()}`));
    await click("Continue");
}
exports.flightOOP = async () => {
    await click($(`${tripReviewPage.flightReasonOptions()}`));
    await click($(`${tripReviewPage.flightSelectReason()}`));
    await write('Automation', $(`${tripReviewPage.textareaCPC()}`));
    await click("Continue");
}

exports.checkflightOOPPopUpExist = async () => {
    return await $(`${tripReviewPage.flightReasonOptions()}`).exists();
  
  }

exports.clickAcknowledgeCheckbox = async () => {
    await evaluate($(`${purchase.acknowledgeCheckBox()}`), (elem) => {
        return elem.click();
      });
} 

exports.tripAdditionType = async (segmentAdd) => {
    let searchType = await gauge.dataStore.scenarioStore.get("searchTypeTrip");
    let searchTypeTrip = {};
    let caseVal = searchType.searchType + " " + segmentAdd;
    switch (caseVal) {
        case "AirOnly Car":
        case "CarRentalOnly Flight":
            searchType = "AC";
            break;
        case "AirOnly Hotel":
        case "HotelOnly Flight":
            searchType = "AH";
            break;
        case "HotelOnly Car":
        case "CarRentalOnly Hotel":
            searchType = "HC";
            break;
        case "AH Car":
        case "AC Hotel":
            searchType = "AHC";
            break;
        case "TrainOnly Car":
            searchType = "TC";
            break;
        case "TrainOnly Hotel":
            searchType = "TH";
            break;
        case "TH Car":
        case "TC Hotel":
            searchType = "THC";
            break;
        default:
            break;
    }

    searchTypeTrip.searchType = searchType;
    gauge.dataStore.scenarioStore.put("searchTypeTrip", searchTypeTrip);
}

exports.carProfileCard = async () => {
    await click($(`${purchase.selectCarBilling()}`));
    await dropDown({ id: 'carBilling1' }).select({ index: '2' });
}

exports.airOtfopDelegate = async () => {
    await click($(`${purchase.selectAirBilling()}`));
    await dropDown({ id: 'airBilling1' }).select({ index: '3' });
}

exports.carOtfopDelegate = async () => {
    await click($(`${purchase.selectCarBilling()}`));
    await dropDown({ id: 'carBilling1' }).select({ index: '3' });
}
exports.selectDestinationType =async  (destinationType) => {
    switch (destinationType) {
        case 'Single Destination':
            await click($(`${tripPlanner_locator.singleDestination()}`));
            break;
        case 'Multi Destination':
            await click($(`${tripPlanner_locator.multiDestination()}`));
            break;
        default:
            break;
    }
}
exports.bookTripTypeMultiDestination = async (searchType) => {
    let segmentLength = await $(tripPlanner_locator.travelSegmentHeader()).elements().then(ele => (ele.length));
    let air = "Air";
    let car = "Car";
    let hotel = "Hotel";
    gauge.dataStore.scenarioStore.put("segmentLength", segmentLength);
    for (let i = 0; i < segmentLength; i++) {
        switch (searchType) {
            case "AirOnly":
                await click($(`${tripPlanner_locator.multiDestinationSegment(air+i)}`));
                break;
            case "HotelOnly":
                await click($(`${tripPlanner_locator.multiDestinationSegment(hotel+i)}`));
                break;
            case "CarRentalOnly":
                await click($(`${tripPlanner_locator.multiDestinationSegment(car+i)}`));
                break;
            case "AHC":
                await click($(`${tripPlanner_locator.multiDestinationSegment(air+i)}`));
                await click($(`${tripPlanner_locator.multiDestinationSegment(hotel+i)}`));
                await click($(`${tripPlanner_locator.multiDestinationSegment(car+i)}`));
                break;
            case "AC":
                await click($(`${tripPlanner_locator.multiDestinationSegment(air+i)}`));
                await click($(`${tripPlanner_locator.multiDestinationSegment(car+i)}`));
                break;
            case "AH":
                await click($(`${tripPlanner_locator.multiDestinationSegment(air+i)}`));
                await click($(`${tripPlanner_locator.multiDestinationSegment(hotel+i)}`));
                break;
            default:
                break;
        }
    }
}

exports.travelerContactDetails = async (guestUserKey)  => {
    let guestOneUserDetails = helper.guestUserDetails(guestUserKey);
    await write(guestOneUserDetails["businessPhone"], $(`${purchase.businessPhone()}`));
    await write(guestOneUserDetails["cellPhone"], $(`${purchase.cellPhone()}`));
    
}

exports.travelerAddressDetails = async (guestUserKey)  => {
    let guestOneUserDetails = helper.guestUserDetails(guestUserKey);
    await dropDown({ id: `${purchase.countryCode()}`}).select(guestOneUserDetails["country"]);
    await write(guestOneUserDetails["street"], $(`${purchase.street()}` ));
    await write(guestOneUserDetails["city"], $(`${purchase.city()}`));
    await write(guestOneUserDetails["stateCode"], $(`${purchase.stateCode()}`));
    await write(guestOneUserDetails["postalCode"], $(`${purchase.postalCode()}`));     
}

exports.convertTime12to24 = async(time12h) => {
    console.log(time12h);
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  }


exports.clickAddService = async () =>{
    await click($(`${reservation.clickAddService()}`));
}

exports.clickPaymentDropdown = async(type) =>{
    await scrollTo($(`${purchase.selectBillingDropdown(type)}`));
    await click($(`${purchase.selectBillingDropdown(type)}`));
}

exports.selectPaymentCardByIndex = async(type, indexVal) =>{ 
    await dropDown({ id: `${purchase.selectBillingCard(type)}`}).select({ index: indexVal });
}

exports.travelerGender = async (guestUserKey)  => {
    let guestOneUserDetails = helper.guestUserDetails(guestUserKey);
    await dropDown({ class: `${purchase.gender()}`}).select(guestOneUserDetails["gender"]);
}

exports.hideSegment =async (segment, page) => {
    switch(page){
        case "Trip Planner":
            this.hideSegmentInTripPlanner(segment)
            break;
        case "Review":
            this.hideSegmentInReview(segment)
            break;
        case "Reservation":
            this.hideSegmentInReservation(segment)
            break;
    }
}

exports.hideSegmentInTripPlanner = async (segment) => {
    switch(segment){
        case "Air":
            await assert.ok (!await $(`${tripPlanner_locator.addFlight()}`).exists(),  "Air segment is displayed")
            gauge.message(`Air segment is not displayed`)
            break
        case "Hotel":
            await assert.ok (!await $(`${tripPlanner_locator.addHotel()}`).exists(), "Hotel segment is displayed")
            gauge.message(`Hotel segment is not displayed`)
            break
        case "Car Rental":
            await assert.ok (!await $(`${tripPlanner_locator.addCar()}`).exists(), "Car Rental segment is displayed")
            gauge.message(`Car Rental segment is not displayed`)
            break
    }
}

exports.hideSegmentInReview = async (segment) => {
    switch(segment){
        case "Air":
            await assert.ok (!await $(`${tripReviewPage.reviewAddFlightOption()}`).exists(), "Air segment is displayed")
            gauge.message(`Air segment is not displayed`)
            break
        case "Hotel":
            await assert.ok (!await $(`${tripReviewPage.reviewAddHotelOption()}`).exists(), "Hotel segment is displayed")
            gauge.message(`Hotel segment is not displayed`)
            break
        case "Car Rental":
            await assert.ok (!await $(`${tripReviewPage.reviewAddCarOption()}`).exists(), "Car Rental segment is displayed")
            gauge.message(`Car Rental segment is not displayed`)
            break
    }
}

exports.hideSegmentInReservation = async (segment) => {
    switch(segment){
        case "Air":
            await this.clickAddService()
            await assert.ok (!await $(`${reservation.clickAddFlight()}`).exists(), "Air segment is displayed")
            gauge.message(`Air segment is not displayed`)
            break
        case "Hotel":
            await this.clickAddService()
            await assert.ok (!await $(`${reservation.clickAddHotel()}`).exists(), "Hotel segment is displayed")
            gauge.message(`Hotel segment is not displayed`)
            break
        case "Car Rental":
            await this.clickAddService()
            await assert.ok (!await $(`${reservation.clickAddCarRental()}`).exists(), "Car Rental segment is displayed")
            gauge.message(`Car Rental segment is not displayed`)
            break
    }
}

exports.hideEmergencyContact = async function(){
    await assert.ok (!await $(`${purchase.emergencyContact()}`).exists(), "Emergency Contact segment is displayed")
    gauge.message(`Emergency Contact segment is not displayed`)
}

exports.hideUnusedTicket = async function(){
    await assert.ok (!await $(`${purchase.emergencyContact()}`).exists(), "Unused Ticket is displayed in nav bar")
    gauge.message(`Unused Ticket is not displayed in nav bar`)
}
exports.TSAMessagePopup = async () =>{
    await assert.ok (!await $(`${(purchase.travelAcknoledgementPopup())}`).exists(), "TSA pop up is displayed")
    gauge.message("TSA Pop up is not shown")
}

exports.validateTSAMessage = async () =>{
    await assert.ok (await $(`${(purchase.travelAcknoledgementPopup())}`).exists(), "TSA pop up is not displayed")
    gauge.message("TSA Pop up is shown")
    let hotelDetails = gauge.dataStore.scenarioStore.get("hotelInfoDetails0")
    let hotelName = await $(`${(purchase.travelAcknoledgementHotelName())}`).text();
    assert.strictEqual(hotelName, hotelDetails.nameOfHotel,`Hotel name not matched, Expected : ${hotelDetails.nameOfHotel} ,Actual : ${hotelName}`)
    await click($(`${purchase.travelAcknoledgementContinueBtn()}`))
}
exports.clickcontinueWebFare = async () => await evaluate($(`${purchase.continueWebFare()}`), (elem) => { return elem.click() });

exports.bagsToCheck = async (num) => {
    let bagCount = helper.bagsCount(num);
    await dropDown({ name: `${purchase.bagsToCheckloc()}` }).select(bagCount["totalBags"]);
}

exports.termsAndConditionAcknowledgement = async () => {
        await helper.waitForSpinner();
        await evaluate($(`${purchase.termsAndConditionAcknowledgementLoc()}`), (elem) => {return elem.click();});
}

exports.okPopup = async (msg) => {
    let popupMessage = helper.messageContent(msg);
    await scrollTo($(`${purchase.purchaseButton()}`));
    await confirm(popupMessage["message"], async () => await accept());
    await this.clickPurchase();
}

exports.flightTermsAndConditions = async() => {
    await click($(`${purchase.flightTermsAndConditionsLoc()}`));
}

exports.validateCheckInCheckoutDateIsSameForFlights = async(pageType) =>{
    await helper.waitForLoaderSvg();
    await helper.waitForSpinner();
    await helper.waitForWalkmePlayer();
    let checkInDate = null; let checkOutDate = null;
    let departureReturnDate = await gauge.dataStore.scenarioStore.get("departureReturnDate");
    let flightCheckin =  departureReturnDate.checkInDate;
    let flightCheckout =  departureReturnDate.checkOutDate;
    var checkInDateObj = new Date(flightCheckin);
    var checkOutDateObj = new Date(flightCheckout);
    let year = checkInDateObj.getFullYear();
     switch(pageType){
        case "Hotel":
            checkInDate =  await hotelAction.getCheckInDate();
            checkOutDate = await hotelAction.getCheckOutDate();
            break;
        case "Review":
            await focus($(`${tripReviewPage.checkInDate()}`));
            checkInDate =  await $(`${tripReviewPage.reviewDepartDate()}`).text() ; //format Weekday, Month Day, year: eg. Fri, Jan 12, 2022
            checkOutDate = await $(`${tripReviewPage.reviewArrivalDate()}`).text() ;
            break;
        case "Trip Confirmation":
            await focus($(`${tripConfiramtionPage.depDayAndDate()}`));
            let checkInDateWithTimeStamp =  await $(`${tripConfiramtionPage.depDayAndDate()}`).text()
            checkInDate = checkInDateWithTimeStamp.split(' ').slice(0, 3).join(' ') + ' ' + year; //format Weekday, Month Day, year: eg. Fri, Jan 12, 2022
            let checkoutDateWithTimeStamp =  await $(`${tripConfiramtionPage.arrivalDayAndDate()}`).text()
            checkOutDate = checkoutDateWithTimeStamp.split(' ').slice(0, 3).join(' ') + ' ' + year; //format Weekday, Month Day, year: eg. Fri, Jan 12, 2022
            break;
        default:
            break; 
    }

    var checkInDateObjInFlight = new Date(checkInDate);
    var checkOutDateObjInFlight = new Date(checkOutDate);
    console.log(`Actual Flight check in date is  ${checkInDateObjInFlight} vs expected flight check in date is ${checkInDateObj} `);
    gauge.message(`Actual check in  date is  ${checkInDateObjInFlight} vs expected flight check in date is ${checkInDateObj} `);
    assert.equal(checkInDateObj.getTime() === checkInDateObjInFlight.getTime(), true, `Actual Flight Check In Date is same as  expected flight check in date in ${pageType} page?`);
    assert.equal(checkOutDateObjInFlight.getTime() === checkOutDateObj.getTime(), true, "Actual Check Out Date is same as expected flight check out date in"+ pageType + " page?");
}

exports.validateCheckInCheckoutDateIsGreater = async(pageType, status) =>{
    await helper.waitForLoaderSvg();
    await helper.waitForSpinner();
    await helper.waitForWalkmePlayer();
    let checkSame  =  (status === 'true');
    let checkInDate = null; let checkOutDate = null;
    let departureReturnDate = await gauge.dataStore.scenarioStore.get("departureReturnDate");
    let flightCheckin =  departureReturnDate.checkInDate;
    let flightCheckout =  departureReturnDate.checkOutDate;
    var checkInDateObj = new Date(flightCheckin);
    var checkOutDateObj = new Date(flightCheckout);
    let year = checkInDateObj.getFullYear();
     switch(pageType){
        case "Hotel":
            checkInDate =  await hotelAction.getCheckInDate();
            checkOutDate = await hotelAction.getCheckOutDate();
            break;
        case "Review":
            await focus($(`${tripReviewPage.checkInDateLocatorInsideHotelDiv()}`));
            checkInDate =  await $(`${tripReviewPage.checkInDateLocatorInsideHotelDiv()}`).text() + ' ' + year; //format Weekday, Month Day, year: eg. Fri, Jan 12, 2022
            checkOutDate = await $(`${tripReviewPage.checkOutDateLocatorInsideHotelDiv()}`).text() + ' ' + year;
            break;
        case "Trip Confirmation":
            await focus($(`${tripConfiramtionPage.checkInDate()}`));
            checkInDate =  await $(`${tripConfiramtionPage.checkInDate()}`).text() + ' ' + year; //format Weekday, Month Day, year: eg. Fri, Jan 12, 2022
            checkOutDate = await $(`${tripConfiramtionPage.checkOutDate()}`).text() + ' ' + year;
            break;
        default:
            break; 
    }
    var checkInDateObjInHotel = new Date(checkInDate);
    var checkOutDateObjInHotel = new Date(checkOutDate);
    console.log(`Hotel check in date is  ${checkInDateObjInHotel} vs flight check in date is ${checkInDateObj} `);
    gauge.message(`Hotel check in  date is  ${checkInDateObjInHotel} vs flight check in date is ${checkInDateObj} `);
    let checkInIsSame = checkSame? checkInDateObj.getTime() === checkInDateObjInHotel.getTime() : checkInDateObj.getTime() > checkInDateObjInHotel.getTime();
    var checkOutIsAsItIs = checkOutDateObjInHotel.getTime() === checkOutDateObj.getTime();
    assert.equal(checkInIsSame, checkSame, `Hotel Check In Date is greater as than flight check in date in ${pageType} page?`);
    assert.equal(checkOutIsAsItIs, true, "Hotel Check Out Date is same as flight check out date in"+ pageType + " page?");
}

exports.addPostService = async (ags) => {
    let segments = gauge.dataStore.scenarioStore.get("searchTypeTrip")
    switch(segments.searchType){
        case "AirOnly":
            await this.addServiceInAir(ags);
            break;
        case "TrainOnly":
            await this.addServiceInTrain(ags)
            break;
        case "CarRentalOnly":
            await this.addServiceInCar(ags)
            break;
        case "HotelOnly":
            await this.addServiceInHotel(ags)
            break;
        default:
            break;  
    }
    await waitFor(5000)
}

exports.addServiceInAir = async (ags) => {
    let newSearchTypeTrip={};
    switch(ags){
        case "Hotel":
            newSearchTypeTrip.searchType= "AH"
            break;
        case "Car Rental":
            newSearchTypeTrip.searchType= "AC"
            break
        default:
            break;  
    }
    gauge.dataStore.scenarioStore.put("searchTypeTrip", newSearchTypeTrip )
}

exports.addServiceInTrain = async (ags) => {
    let newSearchTypeTrip={};
    switch(ags){
        case "Hotel":
            newSearchTypeTrip.searchType= "TH"
            break;
        default:
            break;  
    }
    gauge.dataStore.scenarioStore.put("searchTypeTrip", newSearchTypeTrip )
}

exports.addServiceInCar = async (ags) => {
    let newSearchTypeTrip={};
    switch(ags){
        case "Hotel":
            newSearchTypeTrip.searchType= "HC"
            break;
        default:
            break;  
    }
    gauge.dataStore.scenarioStore.put("searchTypeTrip", newSearchTypeTrip )
}

exports.addServiceInHotel = async (ags) => {
    let newSearchTypeTrip={};
    switch(ags){
        case "Air":
            newSearchTypeTrip.searchType= "AH"
            break;
        case "Car Rental":
            newSearchTypeTrip.searchType= "HC" 
            gauge.dataStore.scenarioStore.put("tripDetails", newSearchTypeTrip);
            break;
        default:
            break;  
    }
    gauge.dataStore.scenarioStore.put("searchTypeTrip", newSearchTypeTrip )
}

exports.valiateMultiHotelInfo = async (validateType) => {
    await helper.waitForLoaderSvg();
    let multiHotelDetails = gauge.dataStore.scenarioStore.get("multiHotelDetails");    
    for (let i=0; i < multiHotelDetails.HotelSegment; i++){
        let hotelInfoDetails = await gauge.dataStore.scenarioStore.get(`hotelInfoDetails${i}`);
        await scrollTo(hotelInfoDetails[`nameOfHotel${i}`]);
        let actualHotelName  = await $(`${tripReviewPage.checkHotelNameForGivenValue(hotelInfoDetails[`nameOfHotel${i}`])}`).text();
        let hotelName = await $(`${tripReviewPage.checkHotelNameForGivenValue(hotelInfoDetails[`nameOfHotel${i}`])}`).exists();
        assert.equal(hotelName, true, "Expected Hotel Name: "+hotelInfoDetails[`nameOfHotel${i}`]+" vs Actual Hotel Name: "+ actualHotelName+" should match? ");
        let expectedHotelAddress = hotelInfoDetails[`addressOfHotel${i}`].split(",")[0];
        let actualHotelAddress  = await $(`${tripReviewPage.checkHotelAddressForGivenValue(expectedHotelAddress)}`).text();
        let hotelAdd = await $(`${tripReviewPage.checkHotelAddressForGivenValue(expectedHotelAddress)}`).exists();
        assert.equal(hotelAdd, true, "Expected Hotel Address: "+hotelInfoDetails[`addressOfHotel${i}`]+" vs Actual Hotel Address: "+ actualHotelAddress+" should match? ");
    }
}
exports.validateAppleMap = async () => {
    assert.ok(await $(`${carRental_po.appleMapLoc()}`).exists(), "Apple Map is not Visible");
}

exports.validatePageTitle = async (title) => {
    let language = process.env.i18N_lang;
    await helper.waitForSpinner();
    await helper.waitForLoaderSvg();
    let actualPageTitle = await $(`${purchase.pageTitle()}`).text()
    let pageTitles = title.replace(/\s/g, '');
    let expectedPageTitle = helper.allPageTitle()
    assert.strictEqual(actualPageTitle, expectedPageTitle[language][pageTitles], `${actualPageTitle} is invalid`)
    gauge.message(`Validation Successful!! Actual : ${actualPageTitle} and Expected : ${expectedPageTitle[language][pageTitles]}`)
}

exports.selectPaymentByIndex = async (type,cardType) => {
    switch (cardType) {
        case "Site Payment Card":
           await  this.selectPaymentCardByIndex(type, 1); 
        break;
        case "OTFOP":
          await this.selectPaymentCardByIndex(type, 3); 
        break;
        case "Profile Card":
         await this.selectPaymentCardByIndex(type, 2);
        break;
        case "Virtual Payment Card":
          await this.selectPaymentCardByIndex(type,1);
        break;
      default:
        break;
    }
}
exports.reviewPageDepartTrainName = async () => {
    let trainDepartName = await $(`${tripReviewPage.reviewPageDepartTrainNameLoc()}`).text();
    return trainDepartName;
}
exports.reviewPageDepartTrainExtraName = async () => {
    let trainDepartExtraName = await $(`${tripReviewPage.reviewPageDepartTrainExtraNameLoc()}`).text();
    return trainDepartExtraName;
}
exports.reviewPageReturnTrainName = async () => {
    let trainReturnName = await $(`${tripReviewPage.reviewPageReturnTrainNameLoc()}`).text();
    return trainReturnName;
}
exports.reviewPageReturnTrainExtraName = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageReturnTrainExtraNameLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainDepartureDepartTime = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainDepartureDepartTimeLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainDepartureArrivalTime = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainDepartureArrivalTimeLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainReturnDepartTime = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainReturnDepartTimeLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainReturnArrivalTime = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainReturnArrivalTimeLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainReturnArrivalTime = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainReturnArrivalTimeLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainDepartureDepartDate = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainDepartureDepartDateLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainDepartureArrivalDate = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainDepartureArrivalDateLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainReturnDepartDate = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainReturnDepartDateLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainReturnArrivalDate = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainReturnArrivalDateLoc()}`).text();
    return trainReturnExtraName;
}
exports.reviewPageTrainFare = async () => {
    let trainReturnExtraName = await $(`${tripReviewPage.reviewPageTrainFareLoc()}`).text();
    return trainReturnExtraName;
}
exports.departureTrainFullName = async()=> {
    let departFirstTrainName = await this.reviewPageDepartTrainName();
    let departLastTrainName = await this.reviewPageDepartTrainExtraName();
    let fullTrainNameDeparture = departFirstTrainName + " "+ departLastTrainName;
    return fullTrainNameDeparture;
}
exports.returnTrainFullName = async()=> {
    let returnFirstTrainName = await this.reviewPageReturnTrainName();
    let returnLastTrainName = await this.reviewPageReturnTrainExtraName();
    let fullTrainNameReturn = returnFirstTrainName +" "+ returnLastTrainName;
    return fullTrainNameReturn;
}
exports.validateTrainOnlyDepartureTrainName = async (validateType) => {
    let departTrainName = gauge.dataStore.scenarioStore.get("departTrainDetails");
    switch(validateType){
        case "trip review":
            let validateDepartureTrainName = await this.departureTrainFullName();
            expect(validateDepartureTrainName).to.contain(departTrainName.departureTrainName, `Invalid train name is showing in trip review page, Expected: ${departTrainName.departureTrainName}, Actual: ${validateDepartureTrainName}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateDepartureTrainNameConfirm = await this.confirmationPageDepartTrainName();
            expect(validateDepartureTrainNameConfirm).to.contain(departTrainName.departureTrainName.split(" ")[0], `Invalid train name is showing on ${validateType} page, Actual: ${validateDepartureTrainNameConfirm}, Expected: ${departTrainName.departureTrainName.split(" ")[0]}`);
            break;
        default:
            break;
        }
}
exports.validateTrainOnlyReturnTrainName = async (validateType) => {
    let returnTrainNameValidation = gauge.dataStore.scenarioStore.get("returnTrainDetails");
    switch(validateType){
        case "trip review":
            let validateReturnTrainName = await this.returnTrainFullName();
            expect(validateReturnTrainName).to.contain(returnTrainNameValidation.returnTrainName, `Invalid return train name is showing in trip review page, Expected: ${returnTrainNameValidation.returnTrainName}, Actual: ${validateReturnTrainName}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateReturnTrainNameConfirm = await this.confirmationPageReturnTrainName();
            expect(validateReturnTrainNameConfirm).to.contain(returnTrainNameValidation.returnTrainName.split(" ")[0], `Invalid return train name is showing on ${validateType} page, Actual: ${validateReturnTrainNameConfirm}, Expected: ${returnTrainNameValidation.returnTrainName.split(" ")[0]}`);
            break;
        default:
            break;
        }
    
}
exports.validateTrainOnlyDepartureDepartTime = async (validateType) => {
    let departureTime = gauge.dataStore.scenarioStore.get("departTrainDetails");
    switch(validateType){
        case "trip review":
            let validateDepartureDepartTime = await this.reviewPageTrainDepartureDepartTime();
            expect(validateDepartureDepartTime).to.equal(departureTime.departPageTrainDepartTime, `Invalid train departure time is showing in trip review page, Expected: ${departureTime.departPageTrainDepartTime}, Actual: ${validateDepartureDepartTime}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateDepartureTrainTimeConfirm = await this.confirmationPageDepartureDepartTrainTime();
            expect(validateDepartureTrainTimeConfirm).to.equal(departureTime.departPageTrainDepartTime, `Invalid train departure time is showing on ${validateType} page, Actual: ${departureTime.departPageTrainDepartTime}, Expected: ${validateDepartureTrainTimeConfirm}`);
            break;
        default:
            break;
        }
    
}
exports.validateTrainOnlyDepartureArrivalTime = async (validateType) => {
    let departureArrivalTime = gauge.dataStore.scenarioStore.get("departTrainDetails");
    switch(validateType){
        case "trip review":
            let validateDepartureArrivalTime = await this.reviewPageTrainDepartureArrivalTime();
            expect(validateDepartureArrivalTime).to.equal(departureArrivalTime.departPageTrainArrivalTime, `Invalid train arrival time is showing in trip review page, Expected: ${departureArrivalTime.departPageTrainArrivalTime}, Actual: ${validateDepartureArrivalTime}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateDepartureTrainArrivalTimeConfirm;
            gauge.dataStore.scenarioStore.get("transfer").includes("Transfer") ? validateDepartureTrainArrivalTimeConfirm = await this.confirmationpageDepartureArrivalTrainTime(4) : validateDepartureTrainArrivalTimeConfirm = await this.confirmationpageDepartureArrivalTrainTime(2)
            expect(validateDepartureTrainArrivalTimeConfirm).to.equal(departureArrivalTime.departPageTrainArrivalTime, `Invalid train arrival time is showing on ${validateType} page, Actual: ${departureArrivalTime.departPageTrainArrivalTime}, Expected: ${validateDepartureTrainArrivalTimeConfirm}`);
            break;
        default:
            break;
        }
    
}
exports.validateTrainOnlyDepartureDepartDate = async (validateType) => {
    let departureDate = gauge.dataStore.scenarioStore.get("departTrainDetails");
    switch(validateType){
        case "trip review":
            let validateDepartureDepartDate = await this.reviewPageTrainDepartureDepartDate();
            expect(validateDepartureDepartDate).to.contain(departureDate.departPageTrainDepartDate, `Invalid train departure date is showing in trip review page, Expected: ${departureDate.departPageTrainDepartDate}, Actual: ${validateDepartureDepartDate}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateDepartureTrainDepartDateConfirm = await this.confirmationPageDepartureDepartTrainDate();
            expect(validateDepartureTrainDepartDateConfirm).to.contain(departureDate.departPageTrainDepartDate, `Invalid train departure date is showing on ${validateType} page, Actual: ${departureDate.departPageTrainDepartDate}, Expected: ${validateDepartureTrainDepartDateConfirm}`);
            break;
        default:
            break;
        }
    
}
exports.validateTrainOnlyDepartureArrivalDate = async (validateType) => {
    let departureArrivalDate = gauge.dataStore.scenarioStore.get("departTrainDetails");
    switch(validateType){
        case "trip review":
            let validateDepartureArrivalDate = await this.reviewPageTrainDepartureArrivalDate();
            expect(validateDepartureArrivalDate).to.contain(departureArrivalDate.departPageTrainArrivalDate, `Invalid train arrival time is showing in trip review page, Expected: ${departureArrivalDate.departPageTrainArrivalDate}, Actual: ${validateDepartureArrivalDate}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateDepartureTrainArrivalDateConfirm = await this.confirmationpageDepartureArrivalTrainDate();
            expect(validateDepartureTrainArrivalDateConfirm).to.contain(departureArrivalDate.departPageTrainArrivalDate, `Invalid train arrival time is showing on ${validateType} page, Actual: ${departureArrivalDate.departPageTrainArrivalDate}, Expected: ${validateDepartureTrainArrivalDateConfirm}`);
            break;
        default:
            break;
        }
    
}
exports.validateTrainOnlyReturnDepartTime = async (validateType) => {
    let returnTime = gauge.dataStore.scenarioStore.get("returnTrainDetails");
    switch(validateType){
        case "trip review":
            let validateReturnDepartTime = await this.reviewPageTrainReturnDepartTime();
            expect(validateReturnDepartTime).to.equal(returnTime.returnPageTrainDepartTime, `Invalid return train Departure time  is showing in trip review page, Expected: ${returnTime.returnPageTrainDepartTime}, Actual: ${validateReturnDepartTime}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateReturnTrainDepartTimeConfirm;
            gauge.dataStore.scenarioStore.get("transfer").includes("Transfer") ? validateReturnTrainDepartTimeConfirm = await this.confirmationpageReturnDepartTrainTime(5) : validateReturnTrainDepartTimeConfirm = await this.confirmationpageReturnDepartTrainTime(3)
            expect(validateReturnTrainDepartTimeConfirm).to.equal(returnTime.returnPageTrainDepartTime, `Invalid return train departure time is showing on ${validateType} page, Actual: ${returnTime.returnPageTrainDepartTime}, Expected: ${validateReturnTrainDepartTimeConfirm}`);
            break;
        default:
            break;
        }
    
}
exports.validateTrainOnlyReturnArrivalTime = async (validateType) => {
    let returnArrivalTime = gauge.dataStore.scenarioStore.get("returnTrainDetails");
    switch(validateType){
        case "trip review":
            let validateReturnArrivalTime = await this.reviewPageTrainReturnArrivalTime();
            expect(validateReturnArrivalTime).to.equal(returnArrivalTime.returnPageTrainArrivalTime, `Invalid return train arrival time is showing in trip review page, Expected: ${returnArrivalTime.returnPageTrainArrivalTime}, Actual: ${validateReturnArrivalTime}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateReturnTrainArrivalTimeConfirm;
            gauge.dataStore.scenarioStore.get("transfer").includes("Transfer") ? validateReturnTrainArrivalTimeConfirm = await this.confirmationpageReturnDepartTrainTime(6) : validateReturnTrainArrivalTimeConfirm = await this.confirmationpageReturnDepartTrainTime(4)
            expect(validateReturnTrainArrivalTimeConfirm).to.equal(returnArrivalTime.returnPageTrainArrivalTime, `Invalid return train arrival time is showing on ${validateType} page, Actual: ${returnArrivalTime.returnPageTrainArrivalTime}, Expected: ${validateReturnTrainArrivalTimeConfirm}`);
            break;
        default:
            break;
        }
    
}
exports.validateTrainOnlyReturnDepartDate = async (validateType) => {
    let returnDate = gauge.dataStore.scenarioStore.get("returnTrainDetails");
    switch(validateType){
        case "trip review":
            let validateReturnDepartDate = await this.reviewPageTrainReturnDepartDate();
            expect(validateReturnDepartDate).to.contain(returnDate.returnPageTrainDepartDate, `Invalid return train depart date is showing in trip review page, Expected: ${returnDate.returnPageTrainDepartDate}, Actual: ${validateReturnDepartDate}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateReturnTrainDepartDateConfirm = await this.confirmationpageReturnDepartTrainDate();
            expect(validateReturnTrainDepartDateConfirm).to.contain(returnDate.returnPageTrainDepartDate, `Invalid return train depart date is showing on ${validateType} page, Actual: ${returnDate.returnPageTrainDepartDate}, Expected: ${validateReturnTrainDepartDateConfirm}`);
            break;
        default:
            break;
        }
    
}
exports.validateTrainOnlyReturnArrivalDate = async (validateType) => {
    let returnArrivalDate = gauge.dataStore.scenarioStore.get("returnTrainDetails");
    switch(validateType){
        case "trip review":
            let validateReturnArrivalDate = await this.reviewPageTrainReturnArrivalDate();
            expect(validateReturnArrivalDate).to.contain(returnArrivalDate.returnPageTrainArrivalDate, `Invalid return train arrival date is showing on trip review page, Actual: ${returnArrivalDate.returnPageTrainArrivalDate}, Expected: ${validateReturnArrivalDate}`);
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateReturnTrainArrivalDateConfirm = await this.confirmationpageReturnArrivalTrainDate();
            expect(validateReturnTrainArrivalDateConfirm).to.contain(returnArrivalDate.returnPageTrainArrivalDate, `Invalid return train arrival date is showing on ${validateType} page, Actual: ${returnArrivalDate.returnPageTrainArrivalDate}, Expected: ${validateReturnTrainArrivalDateConfirm}`);
            break;
        default:
            break;
        }
    
}
exports.validateTrainFare = async (validateType) => {
    let returnTrainFare = gauge.dataStore.scenarioStore.get("returnTrainDetails");
    switch(validateType){
        case "trip review":
            let validateTrainFare = await this.reviewPageTrainFare();
            expect(validateTrainFare).to.contain(returnTrainFare.returnPageTrainFare, `Invalid train fare is showing in trip review page, Expected: ${returnTrainFare.returnPageTrainFare}, Actual: ${validateTrainFare}` );
            break;
        case "trip confirmation":
        case "trip cancellation":
            let validateTrainFareConfirm = await this.confirmationPageTrainFare();
            expect(validateTrainFareConfirm).to.contain(returnTrainFare.returnPageTrainFare, `Invalid train fare is showing on ${validateType} page, Actual: ${returnTrainFare.returnPageTrainFare}, Expected: ${validateTrainFareConfirm}`);
            break;
        default:
            break;
        }
    
}
exports.confirmationPageDepartTrainName = async () => {
    let trainDepartName = await $(`${tripConfiramtionPage.confirmationPageDepartTrainNameLoc()}`).text();
    return trainDepartName;
}
exports.confirmationPageReturnTrainName = async () => {
    let trainReturnName = await $(`${tripConfiramtionPage.confirmationPageReturnTrainNameLoc()}`).text();
    return trainReturnName;
}
exports.confirmationPageTrainFare = async () => {
    let trainReturnExtraName = await $(`${tripConfiramtionPage.confirmationPageTrainFareLoc()}`).text();
    return trainReturnExtraName;
}
exports.confirmationPageDepartureDepartTrainTime = async() => {
    let trainDepartureDepartTime = await $(`${tripConfiramtionPage.confirmationPageDepartureDepartTrainTimeLoc()}`).text();
    return trainDepartureDepartTime;
}
exports.confirmationpageDepartureArrivalTrainTime = async(index) => {
    let trainDepartureArrivalTime = await $(`${tripConfiramtionPage.confirmationPageDepartureArrivalTrainTimeLoc(index)}`).text();
    return trainDepartureArrivalTime;
}
exports.confirmationpageReturnDepartTrainTime = async(index) => {
    let trainDepartureArrivalTime = await $(`${tripConfiramtionPage.confirmationPageReturnDepartTrainTimeLoc(index)}`).text();
    return trainDepartureArrivalTime;
}
exports.confirmationpageReturnArrivalTrainTime = async() => {
    let trainDepartureArrivalTime = await $(`${tripConfiramtionPage.confirmationPageReturnArrivalTrainTimeLoc()}`).text();
    return trainDepartureArrivalTime;
}
exports.confirmationPageDepartureDepartTrainDate = async() => {
    let trainDepartureDepartTime = await $(`${tripConfiramtionPage.confirmationPageDepartureDepartTrainDateLoc()}`).text();
    return trainDepartureDepartTime;
}
exports.confirmationpageDepartureArrivalTrainDate = async() => {
    let trainDepartureArrivalTime = await $(`${tripConfiramtionPage.confirmationPageDepartureArrivalTrainDateLoc()}`).text();
    return trainDepartureArrivalTime;
}
exports.confirmationpageReturnDepartTrainDate = async() => {
    let trainDepartureArrivalTime = await $(`${tripConfiramtionPage.confirmationPageReturnDepartTrainDateLoc()}`).text();
    return trainDepartureArrivalTime;
}
exports.confirmationpageReturnArrivalTrainDate = async() => {
    let trainDepartureArrivalTime = await $(`${tripConfiramtionPage.confirmationPageReturnArrivalTrainDateLoc()}`).text();
    return trainDepartureArrivalTime;
}

exports.trainOnlyValidation = async (validateType) => {
    await this.validateTrainOnlyDepartureTrainName(validateType);
    await this.validateTrainOnlyReturnTrainName(validateType);
    await this.validateTrainOnlyDepartureDepartTime(validateType);
    await this.validateTrainOnlyDepartureArrivalTime(validateType);
    await this.validateTrainOnlyReturnDepartTime(validateType);
    await this.validateTrainOnlyReturnArrivalTime(validateType);
}

exports.holdThisTripTrain = async () => {
    await click($(`${purchase.holdThisTripTrainLoc()}`));
}
exports.searchOriginalTripName = async () =>{
await waitFor(1000);
    await write(gauge.dataStore.scenarioStore.get('bookAgainTrip'), textBox({ name: `${reservation.tripName()}`}));
}

exports.verifyMoreSearch = async () =>{
    let checkMoreSearch = await ($(`${tripPlanner_locator.moreSearchText()}`).exists());
    assert.strictEqual(checkMoreSearch, false, "more search option display");}
 
exports.additionalInfoPopUp = async () => {
    await click($(`${tripPlanner_locator.additionalPopUp()}`));
    await write('Automation', $(`${tripPlanner_locator.textAreaAddinfo()}`));
    await click("Continue");
}

exports.clickTravel = async () => {
    await focus($(`${tripPlanner_locator.clickTravelbtn()}`));
    await click($(`${tripPlanner_locator.clickTravelbtn()}`));
}
exports.getProcessID = async () => {
    let processIDArr = String(await evaluate($(`${tripConfiramtionPage.printBtn()}`), (elem) => { return elem.getAttribute('onclick') }));
    let processId = processIDArr.match(/_processId=(.*)$/g)[0].match(/(.*)&/g)[0].match(/(=[0-9]*)/g)[0].replace("=", "");
    gauge.dataStore.scenarioStore.put('processID', processId);
    console.log(`processID for the recent booking: ${gauge.dataStore.scenarioStore.get('processID')}`);
    gauge.message(`processID for the recent booking: ${gauge.dataStore.scenarioStore.get('processID')}`);
}
exports.clikAddHotelInReview = async () => {
    await click($(`${tripReviewPage.reviewAddHotelOption()}`));
}

exports.clikAddCarInReview = async () => {
    await click($(`${tripReviewPage.reviewAddCarOption()}`));
}

exports.addSeriveInReviewPage = async (ags) =>{
    let segments = gauge.dataStore.scenarioStore.get("searchTypeTrip")
    let addSerive = segments.searchType+ags
    var newSearchTypeTrip ={}
    await scrollDown()
    switch(addSerive){
        case "AH"+"Car":
            await this.clikAddCarInReview()
            newSearchTypeTrip.searchType= "AHC"
            break;
        case "AirOnly"+"Hotel":
            await this.clikAddHotelInReview()
            newSearchTypeTrip.searchType= "AH"
            break;
        case "AirOnly"+"Car":
            await this.clikAddCarInReview()
            newSearchTypeTrip.searchType= "AC"
            break;
        default:
            break;  
    }
    gauge.dataStore.scenarioStore.put("searchTypeTrip", newSearchTypeTrip )
    await waitFor(5000)
}

exports.costAllocation = async () => {
    this.costAllocationValidation()
}

exports.costAllocationValidation = async () => {
    let data = helper.purchaseData();
    let actualCostAllocationFieldName = (await $(`${purchase.costAllocationValidationLoc()}`).text()).trim(); //costallocationValueLoc
    let expectedCostAllocationFieldName = data.purchaseData.costallocationfields;
    assert.equal(actualCostAllocationFieldName, expectedCostAllocationFieldName, `Cost Allocation Field is not displayed.`)
}
exports.validateCat35 = async (title) => {
    let pageTitle = title.replace(/\s/g, '');
    let cat35Data = helper.cat35Data();
    let expectedCat35Data = cat35Data.cat35[`${pageTitle}`]
    let count ;
    switch (title){
        case "Select Departure Flight":
        case "Select Return Flight":
            count = 1
            await this.validateCat35InPage(expectedCat35Data, title, count)
            break

        case "Trip Confirmation":
        case "Trip Cancellation":
        case "TripDetails":
            count =2;
            await this.validateCat35InPage(expectedCat35Data, title, count)
        break;
    }
}

exports.validateCat35InPage = async (expectedCat35Data, title, count)=> {
    for(var i=1; i <= count; i++){
        await scrollTo($(`${tripConfiramtionPage.cat35Msg(i)}`))
        let actualCat35 =  await $(`${tripConfiramtionPage.cat35Msg(i)}`).text()
        assert.strictEqual(actualCat35, expectedCat35Data, `Validation Cat35 message fail in ${title} page. Actual : ${actualCat35} and Expected : ${expectedCat35Data} `)
        gauge.message(`Validation Successful in ${title} page!! Actual : ${actualCat35} and Expected : ${expectedCat35Data}`)
    }
}
exports.validatePTAPageTitleMsgAndFullname = async () =>{
    await this.validatePTAMessage()
    await this.validatePTAFullname()
    await this.validatePTAFullname()
}

exports.validatePTAPageTitle = async () => {
    let expectedPageTitle = helper.allPageTitle()
    let actualPagetitle = await $(`${pta_po.pageTitle()}`).text()
    assert.strictEqual(actualPagetitle, expectedPageTitle.PageTitle.pta, `Invalid page title. Actual : ${actualPagetitle} and Expected : ${expectedPageTitle.PageTitle.pta}`)
    gauge.message(`Validation Successful!! Actual : ${actualPagetitle} and Expected : ${expectedPageTitle.PageTitle.pta}`)
} 

exports.validatePTAMessage =async () =>{
    let PTAData =  gauge.dataStore.scenarioStore.get("PTAData")
    let expectedMessage = helper.messageContent(PTAData.decision)
    let actualPTAMessage = await $(`${pta_po.preTripmsg()}`).text()
    assert.strictEqual(actualPTAMessage, expectedMessage['msg'], `Invalid message. Actual : ${actualPTAMessage} and Expected : ${expectedMessage['msg']}`)
    gauge.message(`Validation Successful!! Actual : ${actualPTAMessage} and Expected : ${expectedMessage['msg']}`)
}

exports.validatePTAFullname = async () => {
    let tripInformation =  gauge.dataStore.scenarioStore.get("tripInformation")
    let name = (await $(`${pta_po.fullname()}`).text()).split(" ")
    let actualFullName = name[2]+name[3]
    assert.strictEqual(actualFullName, tripInformation.fullName, `Invalid user full name, Expected: ${tripInformation.fullName}, Actual: ${actualFullName}`)
    gauge.message(`Validation Successful!! Actual : ${actualFullName} and Expected : ${tripInformation.fullName}`)
}

exports.validatePTAUserEnteredMsg = async () =>{
    let PTAData =  gauge.dataStore.scenarioStore.get("PTAData")
    let actualUserEnterMsg = await $(`${pta_po.userEnterMsg()}`).text()
    assert.ok (await text(PTAData.msg).exists(),`Invalid user full name, Expected: ${PTAData.msg}, Actual: ${actualUserEnterMsg}`)
    gauge.message(`Validation Successful!! Actual : ${actualUserEnterMsg} and Expected : ${PTAData.msg}`)
}

exports.getTripInformationFromTripConfirmationPage = async () =>{
    let tripInformation = {}
    tripInformation.fullName = (await $(`${tripConfiramtionPage.fullName()}`).text()).replace(/\s/g, '');
    tripInformation.approvalURL = await evaluate($(`${tripConfiramtionPage.ptaURL()}`), (elem) => { return elem.getAttribute('value')});
    gauge.dataStore.scenarioStore.put("tripInformation",tripInformation)
}

exports.goToPTAPage = async () => {
    let tripInformation =  gauge.dataStore.scenarioStore.get("tripInformation")
    await openTab(tripInformation.approvalURL); 
}

exports.closeCurrentActiveTab =async () =>{
    await closeTab()
}

exports.approveOrDeclinePTA =async (decision) =>{
    let PTAData = {}
    PTAData.decision = decision;
    let msg = `Trip ${decision} by Manager`
    PTAData.msg = msg;
    gauge.dataStore.scenarioStore.put("PTAData",PTAData)
    await write(msg, $(`${pta_po.noteToTraveler()}`));
    switch (decision){
        case "Approve":
            await click($(`${pta_po.approveBtn()}`)); 
            break;
        case "Decline":
            await click($(`${pta_po.declineBtn()}`)); 
            break;
    }
}
exports.amexGbtProfileConnectConfigure = async (View) => {
        this.customMessageDisplayed();
        this.viewValidation(View);
}

exports.viewValidation = async (View) => {
    let contactDetail = await $(`${purchase.contactDetailViewLoc()}`).text();
    assert.strictEqual(View, contactDetail, `View is not displayed for Contact Detail.`);
    let delegateView = await $(`${purchase.delegatesViewLoc()}`).text();
    assert.strictEqual(View, delegateView, `View is not displayed for Delegate.`);
    let addressBook = await $(`${purchase.addressBookViewLoc()}`).text();
    assert.strictEqual(View, addressBook, `View is not displayed for Address Book.`);
    let displaySetting = await $(`${purchase.displaySettingViewLoc()}`).text();
    assert.strictEqual(View, displaySetting, `View is not displayed for Display Setting.`);
}

exports.customMessageDisplayed = async () => {
    let data = helper.partnerData();
    let actualCustomMessage = (await $(`${purchase.amexGbtProfileConnectConfigureLoc()}`).text()).trim();
    let expectedCustomMessage = data.CustomMessage.message;
    assert.equal(actualCustomMessage, expectedCustomMessage,`Cannot Edit message is not displayed.`);
}

exports.costAllocationField = async () => {
    let data = helper.purchaseData();
    await scrollTo($(`${purchase.costallocationValueLoc()}`));
    await write(data.purchaseData.costAllocationValue, $(`${(purchase.costallocationValueLoc())}`));
    await click($(`${purchase.costallocationValueLocSuggested()}`));
}

exports.railTermsAndConditions = async () => {
    await click($(`${purchase.railTermsAndConditionsLoc()}`));
}

exports.tripAction = async (action) => {
    let actions = action.replace(/\s/g, '');
    let tripAction = helper.messageContent("TripAction");
    let actionOption = tripAction[actions]
    await this.storeProcessIdOfBookAgain(action)
    await this.tripActionURL(actionOption)
}

exports.storeProcessIdOfBookAgain = async (action) =>{
    let processId;
    action == "Book Again"&&
    (processId =  await gauge.dataStore.scenarioStore.get('processID'), 
    await gauge.dataStore.scenarioStore.put('firstProcessId', processId),
    bookAgainFlag=true,
    await gauge.dataStore.scenarioStore.put("bookAgainFlag",bookAgainFlag)) 
}

exports.tripActionURL = async (actionOption) =>{
    let bookAgainFlag = await gauge.dataStore.scenarioStore.get("bookAgainFlag")
    let url = helper.travelsiteUrl();
    let firstProcessId;
    let processId; 
    actionOption == "tripDetailsAction=cancelTrip" && bookAgainFlag == true ? (firstProcessId =  await gauge.dataStore.scenarioStore.get('firstProcessId'),
    bookAgainFlag = false,
    await gauge.dataStore.scenarioStore.put("bookAgainFlag",bookAgainFlag),
    await goto(`${url}/rc/services/common/details.do?_proc_id=${firstProcessId}&isChangeLinkVisible=1&_${actionOption}`))
    :  (processId =  gauge.dataStore.scenarioStore.get('processID'),
    await goto(`${url}/rc/services/common/details.do?_proc_id=${processId}&isChangeLinkVisible=1&_${actionOption}`))
}

exports.confirmTripAction = async (action) =>{
    switch (action) {
        case "Cancel":
            await this.clickConfirmCancel();
            break;
        case "Change":
            let tripSearchType = gauge.dataStore.scenarioStore.get("searchTypeTrip");
            if (tripSearchType.searchType !== "HotelOnly") {
                let changeFlag = true;
                await gauge.dataStore.scenarioStore.put('changeFlag', changeFlag);
            }
            await waitFor(5000)
            await this.clickContinueChange();
            break;
        default:
            break;
    }   
}

//Billing Address form appears after OTFOP card is selected
exports.billingAddress = async () => {
    let otfopDetails = helper.otfopDetails("MasterCard")
    await write(otfopDetails["billingStreetAddress"], $(`${(purchase.billingStreetAddress())}`));
    await write(otfopDetails["billingCity"], $(`${(purchase.billingCity())}` ));
    await dropDown({ id: `${purchase.paymentCreditCardBillingAddress()}` }).select(`${otfopDetails["billingState"]}`);
    await write(otfopDetails["billingZipCode"], $(`${(purchase.billingZipCode())}` ));
}

exports.checkUnusedTicket = async function (){
    if(await $(`${purchase.termsAndConditionAcknowledgementLoc()}`).exists()){
        await evaluate($(`${purchase.termsAndConditionAcknowledgementLoc()}`), (elem) => {return elem.click();});
    }
}

exports.checkOOP = async () => {
    if(await $(`${tripReviewPage.hotelReasonOptions()}`).exists(0,0)){
        await this.hotelOOP();
    }else if(await $(`${tripReviewPage.trainReasonOptions()}`).exists(0,0)){
        await this.trainOOP();
    }else if(await $(`${tripReviewPage.carRentalReasonOptions()}`).exists(0,0)){
        await this.carRentalOOP();
    }else if (await $(`${tripReviewPage.flightReasonOptions()}`).exists(0,0)){
        await this.flightOOP();
    }else{
        console.log("No pop up modal");
    }
}

exports.validateDetailsAndRulePopup = async () =>{
    await click($(`${tripConfiramtionPage.carRentalDetailsAndRuleslink()}`)) 
    assert.ok(await $(`${tripConfiramtionPage.carRentalDetailsAndRulesPopup()}`).exists(),
    "Car Rental Details & Rules pop up not shown");
    gauge.message(`Car Rental Details & Rules pop up is displayed`)
    await click($(`${tripConfiramtionPage.carRentalDetailsAndRulesPopupClose()}`)) 
}

exports.validateLocations = async () => { 
    let tripType = gauge.dataStore.scenarioStore.get("searchTypeTrip");
    let carAddress;
    let expectedAddress;
    switch (tripType.searchType) {
        case "HC":
            carAddress = await $(`${tripReviewPage.carAddressText()}`).text();
            expectedAddress = gauge.dataStore.scenarioStore.get("hotelDetails0")
            let expectedHotelAddress = gauge.dataStore.scenarioStore.get("hotelInfoDetails0")
            expect(carAddress).to.contain(expectedAddress.HotelSearchValue.split(" ")[0]);
            hover(`${expectedAddress.HotelSearchValue.split(" ")[0]}`,below(text(`${expectedHotelAddress.nameOfHotel}`)));
            break;
        case "AHC":
            let airLocation = await $(`${tripReviewPage.airportLocation()}`).text();
            carAddress = await $(`${tripReviewPage.carAddressText()}`).text();
            let expectedAddressAir = gauge.dataStore.scenarioStore.get("tripDetails")
            let expectedAddessHotel = gauge.dataStore.scenarioStore.get("hotelInfoDetails0")
            expect(airLocation).to.contain(expectedAddressAir.Destination);
            expect(`${expectedAddessHotel.addressOfHotel}`).to.contain(`${expectedAddressAir.Destination}`);
            break;
    }
}

exports.selectFirstCostAllocaton = async () => {
    await click($(`${tripPlanner_locator.costAllocationFirstInputTextbox()}`)) 
    let firstCostAllocation = await ($(`${tripPlanner_locator.selectFirstCostAllocation()}`)).text()
    await click($(`${tripPlanner_locator.selectFirstCostAllocation()}`)) 
    return firstCostAllocation;
}

exports.selectSecondCostAllocaton = async () => {
    await waitFor(3000)
    await click($(`${tripPlanner_locator.costAllocationSecondInputTextbox()}`)) 
    let secondCostAllocation = await ($(`${tripPlanner_locator.selectSecondCostAllocation()}`)).text()
    await click($(`${tripPlanner_locator.selectSecondCostAllocation()}`)) 
    return secondCostAllocation;
}

exports.selectThirdCostAllocaton = async () => {
    await waitFor(3000)
    await click($(`${tripPlanner_locator.costAllocationThirdInputTextbox()}`)) 
    let selectThirdCostAllocation = await ($(`${tripPlanner_locator.selectThirdCostAllocation()}`)).text()
    await click($(`${tripPlanner_locator.selectThirdCostAllocation()}`)) 
    gauge.dataStore.scenarioStore.put("thirdCostAllocation",selectThirdCostAllocation )
    return selectThirdCostAllocation;
}

exports.validateCostAllocation = async () => {
    let actualCostAllocation = await ($(`${purchase.costAllocation()}`)).text()
    let expectedCostAllocation = gauge.dataStore.scenarioStore.get("costAllocation")
    assert.strictEqual(actualCostAllocation,expectedCostAllocation, `Assertion Failed. Expected = ${expectedCostAllocation} and Actual = ${actualCostAllocation}` )
    gauge.message(`Expected = ${expectedCostAllocation} and Actual = ${actualCostAllocation}`)
    console.log(`Expected = ${expectedCostAllocation} and Actual = ${actualCostAllocation}`)
}

exports.validateFoxCostAlloNotDisplayedOnTripplaner = async () => {
    assert.ok (!await ($(`${tripPlanner_locator.costAllocationBody()}`)).exists(),`Failed!!! Cost allocation fields doesnot exists.`)
    gauge.message(`Successfull !!!! Cost allocation fields doesnot exists.`);
}

exports.selectCostAllocation = async (splitType) => {
    let costAllocationData = helper.purchaseData();
    switch (splitType) {
        case "Split":
            await write(costAllocationData.CostAllocation.splitPrimary, $(`${purchase.primaryCostAllocation()}`));
            await click($(`${purchase.primaryCostAllocation1stOption()}`))
            await write(costAllocationData.CostAllocation.splitSecondary, $(`${purchase.secondaryCostAllocation()}`));
            await click($(`${purchase.secondaryCostAllocation1stOption()}`))
            break;
        case "Single":
            await write(costAllocationData.CostAllocation.singleCostAllocation, $(`${purchase.singleCostAllocation()}`)); 
            await click($(`${purchase.singleCostAllocation1stOption()}`))
            break;
        case "Fox":
            let firstCostAllocation= await this.selectFirstCostAllocaton()
            let secondCostAllocation = await this.selectSecondCostAllocaton()
            let selectThirdCostAllocation = await this.selectThirdCostAllocaton()
            let costAllocation = firstCostAllocation + " : " + secondCostAllocation + " : " + selectThirdCostAllocation
            gauge.dataStore.scenarioStore.put("costAllocation",costAllocation)
            break;
        } 
}
exports.flightBatchValidation = async (pageType) => {
    let nonRefundableBadgesDepart = gauge.dataStore.scenarioStore.get("badgeInfoDepart");
    let nonRefundableBadgesReturn = gauge.dataStore.scenarioStore.get("badgeInfoReturn");
    switch(pageType){
        case 'trip review':
            assert.strictEqual(await $(`${tripReviewPage.nonRefundableBadgeLoc(1)}`).text(), nonRefundableBadgesDepart.nonRefundableBadgeDepart, `Invalid flight batch in trip review page ${await $(`${tripReviewPage.nonRefundableBadgeLoc(1)}`).text()} and in flight depart page ${nonRefundableBadgesDepart.nonRefundableBadgeDepart}`); 
            assert.strictEqual(await $(`${tripReviewPage.nonRefundableBadgeLoc(2)}`).text(), nonRefundableBadgesReturn.nonRefundableBadgeReturn, `Invalid flight batch in trip review page ${await $(`${tripReviewPage.nonRefundableBadgeLoc(2)}`).text()} and flight return page ${nonRefundableBadgesReturn.nonRefundableBadgeReturn}`);
            break;
        case 'trip confirmation':
            assert.strictEqual(await $(`${tripConfiramtionPage.nonRefundableBatchLoc(1)}`).text(), nonRefundableBadgesDepart.nonRefundableBadgeDepart, `Invalid flight batch in flight depart page ${nonRefundableBadgesDepart.nonRefundableBadgeDepart} and trip confirmation page ${await $(`${tripConfiramtionPage.nonRefundableBatchLoc(1)}`).text()}`); 
            assert.strictEqual(await $(`${tripConfiramtionPage.nonRefundableBatchLoc(2)}`).text(), nonRefundableBadgesReturn.nonRefundableBadgeReturn, `Invalid flight batch in flight depart page ${nonRefundableBadgesReturn.nonRefundableBadgeReturn} and trip confirmation page ${await $(`${tripConfiramtionPage.nonRefundableBatchLoc(2)}`).text()}`);
            break;
        default:
            break;
    }
}
exports.refundableFlightBatchValidation = async (pageType) => {
    let refundableBadgesDepart = gauge.dataStore.scenarioStore.get("badgeInfoDepart");
    let refundableBadgesReturn = gauge.dataStore.scenarioStore.get("badgeInfoReturn");
    switch(pageType){
        case 'trip review':
            assert.strictEqual(await $(`${tripReviewPage.refundableBadgeLoc(1)}`).text(), refundableBadgesDepart.refundableBadgeDepart, `Invalid flight batch in flight depart page ${refundableBadgesDepart.refundableBadgeDepart} and trip review page ${await $(`${tripReviewPage.refundableBadgeLoc(1)}`).text()}`); 
            assert.strictEqual(await $(`${tripReviewPage.refundableBadgeLoc(2)}`).text(), refundableBadgesReturn.refundableBadgeReturn, `Invalid flight batch in flight depart page ${refundableBadgesReturn.refundableBadgeReturn} and trip review page ${await $(`${tripReviewPage.refundableBadgeLoc(2)}`).text()}`);
            break;
        case 'trip confirmation':
            assert.strictEqual(await $(`${tripConfiramtionPage.refundableBatchLoc(1)}`).text(), refundableBadgesDepart.refundableBadgeDepart, `Invalid flight batch in flight depart page ${refundableBadgesDepart.refundableBadgeDepart} and trip confirmation page ${await $(`${tripConfiramtionPage.refundableBatchLoc(1)}`).text()}`); 
            assert.strictEqual(await $(`${tripConfiramtionPage.refundableBatchLoc(2)}`).text(), refundableBadgesReturn.refundableBadgeReturn, `Invalid flight batch in flight depart page ${refundableBadgesReturn.refundableBadgeReturn} and trip confirmation page ${await $(`${tripConfiramtionPage.refundableBatchLoc(2)}`).text()}`);
            break;
        default:
            break;
    }
}

exports.validateUserTitle = async() => {
    let actualTitle =  await dropDown({ id: `${purchase.salutation()}`}).value()
    let expectedTitle = gauge.dataStore.scenarioStore.get("profileUserTitle")
    assert.ok(actualTitle, expectedTitle, `Title assertion failed. Expected: ${expectedTitle} and Actual: ${actualTitle}`)
    gauge.message(`Title assertion passed. Expected: ${expectedTitle} and Actual: ${actualTitle}`)
}

exports.changeTravelerDetails = async (table)  => {
    let headerValue;
    let dataEntry;
    await table.entries(async (entry) => {
        headerValue = Object.keys(entry);
        dataEntry = entry;
    });
    for (var i = 0; i < headerValue.length; i++) {
        switch (headerValue[i]) {
            case 'Title':
                await dropDown({ id: `${purchase.salutation()}`}).select(dataEntry[headerValue[i]]);
                break;
            case 'Gender':
                await dropDown({ class: `${purchase.gender()}`}).select(dataEntry[headerValue[i]]);
                break;
            default:
                break;
        }
    }   
}
exports.removeFailMe = async () => {
    await click($(`${purchase.editFailMe()}`));
    await clear($(`${purchase.hotelRewardsProgramssNumber()}`))
}
exports.validateKTNExpirayMessage = async (user) => {
    let validatingMsg;
    let delegateUsername;
    let delegateMessage;
     let expectedKTNExpirayMessage = helper.messageContent("KTNExpirayMessage");
        user == "delegate" ? (delegateUsername = gauge.dataStore.scenarioStore.get('expectedDelegateUserName'),
            delegateMessage = expectedKTNExpirayMessage[user],
            validatingMsg = delegateMessage + delegateUsername) : validatingMsg = expectedKTNExpirayMessage[user]
        await hover($(`${tripPlanner_locator.notificationCountIcon()}`))
        assert.ok((await text(validatingMsg).exists()), `Notification not shown`)
}

    exports.clickStopAssisting = async () => {
        await helper.waitForSpinner();
        await evaluate($(`${tripPlanner_locator.stopAssisting()}`), (elem) => { return elem.click(); });
    }

    exports.getDateWithConfermaAPISupported = function (daysCount) {
        var targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + daysCount);
        var month = targetDate.getMonth() + 1;
        return `${targetDate.getFullYear()}-${month < 10 ? '0' + month : '' + month}-${targetDate.getDate()}`;
    }

exports.checkProviderAndClickSelect = async (buttonName,provider) => { 
    let providerList = (await $(`${carServicePo.carServiceProviders()}`).get()).length;
    for (let i = 1; i <= providerList; i++) {
        var providerName = await ($(`${carServicePo.carServiceProvider(i)}`)).text();
        if (providerName == provider) {
            await click($(`${tripPlanner_locator.carServiceSelectButton(i)}`))
            break;
        } else {
            console.log(buttonName+"Not Clicked..." +"Provider not found")
        }   
    }
}
exports.buttonClickEvents = async (buttonEvent,pageName) => { 
    let property = "clickCS"+buttonEvent+pageName;
        var button = {
          [buttonEvent]:await this[property]() ,
        };
}
exports.clickCSAddServicesReservation = async () => { 
    await click($(`${reservation.addServiceButton()}`));
    await click($(`${reservation.addCarServiceButton()}`));
}
exports.clickCSContinueTripPlanner = async () => {
    let index;
    let newServiceFlag;
    let flag = gauge.dataStore.scenarioStore.get("changeFlag");
    let addCarServiceFromReservationFlag = gauge.dataStore.scenarioStore.get("addCarServiceFromReservationFlag");
    newServiceFlag = gauge.dataStore.scenarioStore.get("newServiceFlag");
    index= (flag !== null) ? "4" : "3";
    if (newServiceFlag !== null || addCarServiceFromReservationFlag !==null) { index = "7" }; 
    await evaluate($(`${tripPlanner_locator.carServiceContinueButton(index)}`), (elem) => { return elem.click(); })
}
exports.clickSelect = async () => { 
    await click($(`${tripPlanner_locator.carServiceSelectButton()}`)); 
}
exports.clickCSContinueReview = async () => { 
    let index; 
    let addCarServiceFromReservationFlag = gauge.dataStore.scenarioStore.get("addCarServiceFromReservationFlag");
    addCarServiceFromReservationFlag !== null ? index = "5" : index = "3";
    await evaluate($(`${tripPlanner_locator.carServiceReviewContinueButton(index)}`), (elem) => { return elem.click(); });
    waitFor(5000);
}
exports.cancelBookings = async () => {
    await click($(`${tripReviewPage.cancelTrip()}`));
}
exports.confirmCancellation = async () => {
    await click($(`${tripReviewPage.confirmCancellationElement()}`));
}
exports.hotelDatesPopup = async () => {
    if(await $(`${selReturnFlight.hotelDatesPopup()}`).exists()){
        if(await $(`${selReturnFlight.hotelDatesPopupID()}`).exists()){
            await click($(`${selReturnFlight.hotelDatesPopupContinueBtn()}`)) 
            console.log("clicked contiune botton in hotelDatesPopup ")
        }
    }
}
exports.tripChange = async () => {
    await click($(`${tripDetail.clickChange()}`));
    await click($(`${tripDetail.clickContinueButton()}`));
    await waitFor(5000);
}
exports.clickCSContinueTripDetails = async () => {
    await evaluate ($(`${tripDetail.clickCSContinue()}`), (elem) => { return elem.click(); });
}
exports.clickonPreChange = async () => {
    await click($(`${tripReviewPage.carServicePreChange()}`));
}
exports.selectCarServicePaymentByIndex = async (carService,cardName) => { 
    let cardIndex = cardName =="ProfileCard" ? "2" : "1" ;
    let carServicePayment = {
        cardName: await this.selectPaymentOption(carService,cardIndex),
    }
}
exports.selectPaymentOption = async (carService,cardIndex) => { 
    await dropDown({ id: `${purchase.selectBillingCardCarService(carService)}`}).select({ index: cardIndex });
}

exports.bookingActions = async () => {
    let bookingActions = helper.bookingActions();
    if (await text(bookingActions.reservation.noReservation).exists() === true) { 
        console.log(bookingActions.reservation.messageOne);
        gauge.message(bookingActions.reservation.messageOne);
    }    
    else {
        await expect(waitFor($(`${tripPlanner_locator.bookingList()}`)));
        let availableTripsforCancellation = (await $(`${tripPlanner_locator.confirmedBooking()}`).elements()).length;
        gauge.dataStore.scenarioStore.put('availableTripsforCancellation', availableTripsforCancellation);
        console.log(bookingActions.reservation.messageThree + `${availableTripsforCancellation}`);
        gauge.message(bookingActions.reservation.messageThree + `${availableTripsforCancellation}`);
        await this.actionsOnBooking();
    }
}

exports.actionsOnBooking = async () => {
    let bookingActions = helper.bookingActions();
    let tripsforCancellation = gauge.dataStore.scenarioStore.get('availableTripsforCancellation');
    for (var i = 1; i <= tripsforCancellation; i++) {
        let availableTripStatus = await $(`${tripPlanner_locator.confirmedBookings(i)}`).text();
        gauge.dataStore.scenarioStore.put('availableTripStatus', availableTripStatus);
        console.log( bookingActions.reservation.messageFour + `${availableTripStatus}`);
        if (availableTripStatus == bookingActions.reservation.statusOne) {
            console.log(bookingActions.reservation.messageFive);
            gauge.message(bookingActions.reservation.messageFive);
        }else{
            await click($(`${tripPlanner_locator.confirmedBookings(i)}`));
            await scrollTo($(`${reservation.optionsBar(i)}`));
            if (await $(`${reservation.resCancelTrip(i)}`).isVisible() !== true) {
                console.log(bookingActions.reservation.messageSix);
            } else {  
            await this.bookingCancellation(i);
            }
        }
    }
}

exports.bookingCancellation = async (i) => {
    let bookingActions = helper.bookingActions();
    let onActiveTripName = await $(`${tripPlanner_locator.bookingListName(i)}`).text();
    await focus($(`${reservation.resCancelTrip(i)}`));
    await evaluate($(`${reservation.resCancelTrip(i)}`), (elem) => {return elem.click()});
    await expect(waitFor($(`${reservation.confirmCancel()}`)));
    await click($(`${reservation.confirmCancel()}`));
    await helper.waitForSpinner();
    await this.clickReservation();
    await helper.waitForSpinner();
    await helper.waitForWalkmePlayer();
    console.log(bookingActions.reservation.messageSeven + `${onActiveTripName}`);
    gauge.message(bookingActions.reservation.messageSeven + `${onActiveTripName}`);
}

exports.companyReporting = async () =>{
    await write('pro1', $(`${purchase.companyReporting()}`));
}

exports.CarServiceCompanyPolicyCompliance = async () => {
    if(await $(`${tripReviewPage.CPCTitle()}`).exists(0,0)){
    await click($(`${tripReviewPage.textareaCPC()}`))
    await write('Automation', $(`${tripReviewPage.textareaCPC()}`));
    await click("Continue");
    }else{
    console.log("No pop up modal");
    }
}

exports.addCarService = async () => {
    await click($(`${reservation.clickAddCarServiceLoc()}`));
}