"use strict";
const { click, $, write, waitFor, scrollTo, focus, evaluate, hover, dropDown, radioButton, text, toRightOf, checkBox } = require("taiko");
const tripPlanner = require("../Locators/tripPlanner_po.js");
const departFlightPage = require("../Locators/select_Departure_Flight_po.js");
const returnFlightPage = require("../Locators/select_Return_Flight_po.js");
const tripReviewPage = require("../Locators/tripReviewPage_po.js");
const helper = require("../helpers/helper.js");

const assert = require("assert").strict;
const tripConfirmationPage = require("../Locators/tripConfirmation_po.js");
const dynamicAirPolicy = require("../Locators/dynamicAirPolicyModel_po.js");
const { expect } = require("chai");
const commonAction = require("../common/common_actions")
const airAction = require('../air_only/air_actions.js');

exports.clickAddFlight = async () =>
  await click($(`${tripPlanner.flightSegment()}`));
exports.enterFlightDetails = async (table) =>
  await this.getFlightDetails(table);
exports.clickMoreSearchOption = async () =>
  await click($(`${tripPlanner.moreSearchOption()}`));
exports.clickSearch = async () =>
  await click($(`${tripPlanner.searchButton()}`));
  exports.clickSelectFlight = async () => {
    if (await $(returnFlightPage.flightTabs(1)).exists() == true) {
      let tabLength = await $(returnFlightPage.flightTabs(1)).elements().then(ele => (ele.length));
      for (let i = 1; i <= tabLength; i++) {
          let classAtrribute = await evaluate($(`${returnFlightPage.getflightTabsAttribute(i)}`), (elem) => { return elem.getAttribute('class') });
          console.log(classAtrribute);
          if (classAtrribute.includes(" active")) {
          await evaluate($(`${returnFlightPage.selectFlight(i)}`), (elem) => {
            return elem.click();
          });
          break;
        }
      }
    } else {
      await evaluate($(`${returnFlightPage.selectFlight(1)}`), (elem) => {
        return elem.click();
      });
    }
  };

exports.getFlightDetails = async (table) => {
  let headerValue;
  let dataEntry;
  let flightDetails = {};
  let tripType;
  let departureDate;
  let returnDate;

  await table.entries(async (entry) => {
    headerValue = Object.keys(entry);
    dataEntry = entry;
  });

  for (var i = 0; i < headerValue.length; i++) {
    switch (headerValue[i]) {
      case "Departure":
        await write(
          `${dataEntry[headerValue[i]]}`,
          $(`${tripPlanner.departureLocation()}`)
        );
        break;
      case "Destination":
        await write(
          `${dataEntry[headerValue[i]]}`,
          $(`${tripPlanner.destinationLocation()}`)
        );
        break;
      case "BookingAfterXDays":
        departureDate = helper.getFutureDate(
          parseInt(dataEntry[headerValue[i]])
        );
        returnDate = helper.getFutureDate(
          parseInt(dataEntry[headerValue[i]]) + 4
        );
        tripType === "RT"
          ? await this.enterDepartureReturnDate(departureDate, returnDate)
          : await this.enterDepartureDAte(returnDate);
        break;
      case "TripType":
        let changeTripFlag = null;
        changeTripFlag = await gauge.dataStore.scenarioStore.get('changeFlag');

        tripType = dataEntry[headerValue[i]];
        tripType === "RT"
          ? console.log("")
          : changeTripFlag !== true &&
          (await click($(`${tripPlanner.locatorOneWayToggle()}`), {
            waitForNavigation: true,
          }));
        break;
      case "DepartTime":
        await click($(`${tripPlanner.departTime()}`));
        await dropDown({ id: `${tripPlanner.locatorDepartTime()}` }).select(
          `${dataEntry[headerValue[i]]}`
        );
        break;
      case "ClassType":
        await dropDown({ id: `${tripPlanner.locatorClassType()}` }).select(
          `${dataEntry[headerValue[i]]}`
        );
        break;
      case "Fare Type":
        await dropDown({ id: `${tripPlanner.locatorFareType()}` }).select(
          `${dataEntry[headerValue[i]]}`
        );
        break;
      case "Hotel2":
          await write(
            `${dataEntry[headerValue[i]]}`,
            $(`${tripPlanner.hotel2TextBox()}`)
          );
          await write(
            `${returnDate}`,
            $(`${tripPlanner.hotel2CheckIn()}`)
          );
          break;
    }
    flightDetails[headerValue[i]] = dataEntry[headerValue[i]];
    process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("tripDetails", flightDetails) : 
    gauge.dataStore.scenarioStore.put("tripDetails", flightDetails);
  }
};
exports.FillFlightDetails = async (table) => {
  let headerValue;
  let dataEntry;
  let flightDetails = {};
  let tripType;
  let departureDate;
  let returnDate;

  await table.entries(async (entry) => {
    headerValue = Object.keys(entry);
    dataEntry = entry;
  });
for (var i = 0; i < headerValue.length; i++) {
  switch (headerValue[i]) {
    case "Departure":
      await write(
        `${dataEntry[headerValue[i]]}`,
        $(`${tripPlanner.departureLocation()}`)
      );
      break;
    case "Destination":
      await write(
        `${dataEntry[headerValue[i]]}`,
        $(`${tripPlanner.destinationLocation()}`)
      );
      break;
    case "BookingAfterXDays":
      departureDate = helper.getFutureDate(
        parseInt(dataEntry[headerValue[i]])
      );
      returnDate = helper.getFutureDate(
        parseInt(dataEntry[headerValue[i]]) + 32
      );
      tripType === "RT"
        ? await this.enterDepartureReturnDate(departureDate, returnDate)
        : await this.enterDepartureDAte(returnDate);
      break;
    case "TripType":
      let changeTripFlag = null;
      changeTripFlag = await gauge.dataStore.scenarioStore.get('changeFlag');

      tripType = dataEntry[headerValue[i]];
      tripType === "RT"
        ? console.log("")
        : changeTripFlag !== true &&
        (await click($(`${tripPlanner.locatorOneWayToggle()}`), {
          waitForNavigation: true,
        }));
      break;
    case "DepartTime":
      await click($(`${tripPlanner.departTime()}`));
      await dropDown({ id: `${tripPlanner.locatorDepartTime()}` }).select(
        `${dataEntry[headerValue[i]]}`
      );
      break;
    case "ClassType":
      await dropDown({ id: `${tripPlanner.locatorClassType()}` }).select(
        `${dataEntry[headerValue[i]]}`
      );
      break;
    case "Fare Type":
      await dropDown({ id: `${tripPlanner.locatorFareType()}` }).select(
        `${dataEntry[headerValue[i]]}`
      );
      break;
  }
  flightDetails[headerValue[i]] = dataEntry[headerValue[i]];
  process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("tripDetails", flightDetails) : 
  gauge.dataStore.scenarioStore.put("tripDetails", flightDetails);
}
};


exports.getFilterDetails = async (table) => {
  await helper.waitForSpinner();
  await helper.waitForWalkmePlayer();
  let totalColumn = table.rows[0].cells;
  let flightFilterDetails = {};
  for (var i = 0; i < totalColumn.length; i++) {
    switch (table.rows[0].cells[i]) {
      case "AA":
      case "B6":
      case "UA":
      case "WN":
      case "FR":
      case "DL":
        await this.respectiveAirlinesSelection(table.rows[0].cells[i]);
        flightFilterDetails.airline = table.rows[0].cells[i];
        break;
      case "In Policy":
        await evaluate($(`${departFlightPage.inPolicy()}`), (elem) => {
          return elem.click();
        });
        break;
      case "Non Stop":
        let nonStopSpell = 'Non-stop'
        await this.clickNonStopFlight(nonStopSpell);
        break;
      case "2+ Stops":
        let twoStopSpell = 'stops'
        await focus($(`${departFlightPage.twoPlusStops(twoStopSpell)}`));
        await this.clickTwoStopsFlight(twoStopSpell);
        break;
      case "Price":
        await this.selectByPrice();
        break;
      case "Out of Policy":
        await this.outOfPolicy();
          break;
      case "Any Stops":
        await this.anyStop(); 
        break;
        default:
          break; 
    }
    gauge.dataStore.scenarioStore.put("flightFilterDetails", flightFilterDetails);
  }
};

exports.departPageFlightInfo = async () => {
  let departFlightDetails = {};
  await scrollTo($(`${departFlightPage.departFlightLoc()}`));
  departFlightDetails.flightDepartPageFromLoc = await this.flightDepartPageFromLoc()
  departFlightDetails.flightDepartPageToLoc = await this.flightDepartPageToLoc()
  departFlightDetails.flightDepartPageFromTime = await this.flightDepartPageFromTime();
  departFlightDetails.flightDepartPageToTime = await this.flightDepartPageToTime();
  // departFlightDetails.flightDepartPageFromDate = await this.flightDepartPageFromDate(); 
  // departFlightDetails.flightDepartPageToDate = await this.flightDepartPageToDate();
  departFlightDetails.flightDepartPageAirline= await this.flightDepartPageAirline();
  departFlightDetails.flightDepartPageAirlineNum = await this.flightDepartPageAirlineNum();
  //departFlightDetails.flightDepartPageAirFare = await this.flightDepartPageAirfare();
  departFlightDetails.flightDepartPageCabinClass = await this.flightDepartPageCabinClass();

  await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("departFlightDetails", departFlightDetails) : 
  gauge.dataStore.scenarioStore.put("departFlightDetails", departFlightDetails);
  console.log(departFlightDetails);
};

exports.returnPageFlightInfo = async () => {
  await helper.waitForSpinner();
  await helper.waitForWalkmePlayer();
  let returnFlightDetails = {};
  await scrollTo($(`${departFlightPage.departFlightLoc()}`));
  returnFlightDetails.flightReturnPageFromLoc = await this.flightDepartPageFromLoc()
  returnFlightDetails.flightReturnPageToLoc = await this.flightDepartPageToLoc()
  returnFlightDetails.flightReturnPageFromTime = await this.flightDepartPageFromTime();
  returnFlightDetails.flightReturnPageToTime = await this.flightDepartPageToTime();
  // returnFlightDetails.flightReturnPageFromDate = await this.flightDepartPageFromDate();
  // returnFlightDetails.flightDepartPageToDate = await this.flightDepartPageToDate();
  returnFlightDetails.flightReturnPageAirline= await this.flightDepartPageAirline();
  returnFlightDetails.flightReturnPageAirlineNum = await this.flightDepartPageAirlineNum();
  //returnFlightDetails.flightReturnPageAirFare = await this.flightDepartPageAirfare();
  returnFlightDetails.flightReturnPageClassCabin = await this.flightDepartPageCabinClass();

  await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("returnFlightDetails", returnFlightDetails) : 
  gauge.dataStore.scenarioStore.put("returnFlightDetails", returnFlightDetails);
  console.log(returnFlightDetails);
};

exports.reviewPageFlightInfo = async (validateTripType) => {
  switch (validateTripType) {
    case "trip review":
      await this.validateFlightInfoInReviewPage();
      break;

    case "trip cancellation":
    case "trip confirmation":
      await this.validateFlightTripConfirmationPageInfo(validateTripType)
      break; 

    default:
      break;
  }
};


exports.validateDepartFlightInfo = async () => {
  await this.validateDepartAirlineName();
  await this.validateDepartFromLoc();
  await this.validateDepartToLoc();
  await this.validateDepartFromTime();
  await this.validateDepartToTime();
  // await this.validateDepartFromDate();    //date are not visible in select departure flige page due to issue
  //await this.validateDepartToDate();
 // await this.validateDepartAirlineFare(); // as of now air fare is not validating
  await this.validateDepartAirlineNumber();
  await this.validateDepartClassCabin();
};

exports.validateFlightInfoInReviewPage = async () => {
  let flightTripType = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("tripDetails") : gauge.dataStore.scenarioStore.get("tripDetails");
  await this.validateDepartFlightInfo();
  switch (flightTripType.TripType) {
    case "RT":
      await this.validateReturnAirlineName();
      await this.validateReturnFromLoc();
      await this.validateReturnToLoc();
      await this.validateReturnFromTime();
      await this.validateReturnToTime();
      // await this.validateReturnFromDate();
      // await this.validateReturnToDate();
      await this.validateReturnAirlineNumber();
      await this.validateReturnClassCabin();
      break;
    default:
      break;
  }
};


exports.validateFlightTripConfirmationPageInfoOneWay = async(validateTripType) => {
  await this.validateTripConfirmationDepartAirlineName(validateTripType);
  await this.validateTripConfirmationDepartFromLoc(validateTripType);
  await this.validateTripConfirmationDepartToLoc(validateTripType);
  await this.validateTripConfirmationDepartFromTime(validateTripType);
  await this.validateTripConfirmationDepartToTime(validateTripType);
  //await this.validateTripConfirmationDepartFromDate(validateTripType);        // due to date not available flight page
  await this.validateTripConfirmationDepartAirlineNumber(validateTripType);
  await this.validateTripConfirmationDepartCabinClass(validateTripType);
  //await this.validateTripConfirmationDepartAirlineFare(validateTripType);     // as of now not validating due to inconsistent fare in select flight and confirmation 
}

exports.validateFlightTripConfirmationPageInfo = async (validateTripType) => {
  let flightTripType = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("tripDetails") : gauge.dataStore.scenarioStore.get("tripDetails");
  await this.validateFlightTripConfirmationPageInfoOneWay(validateTripType);
  switch (flightTripType.TripType) {
    case "RT":
      await this.validateTripConfirmationReturnAirlineName(validateTripType);
      await this.validateTripConfirmationReturnFromLoc(validateTripType);
      await this.validateTripConfirmationReturnToLoc(validateTripType);
      await this.validateTripConfirmationReturnFromTime(validateTripType);
      await this.validateTripConfirmationReturnToTime(validateTripType);
      // await this.validateTripConfirmationReturnFromDate(validateTripType);
      await this.validateTripConfirmationReturnAirlineNumber(validateTripType);
      await this.validateTripConfirmationReturnCabinClass(validateTripType);
      break;
    default:
      break;
  }
};

exports.reviewPageCarInfo = async () => {
  await helper.waitForSpinner();
  let validateCarDetails = await process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("selectedCarInfo") : gauge.dataStore.scenarioStore.get(
    "selectedCarInfo"
  );
  await scrollTo(validateCarDetails.carrierName.split(" ")[0]);
  await scrollTo(validateCarDetails.userCount);
  await scrollTo(validateCarDetails.pickupTime);
  await scrollTo(validateCarDetails.dropOffTime);
  await scrollTo(validateCarDetails.carFare.split("USD")[1]);
};

exports.reviewPageOneWayFlightInfo = async () => {
  await helper.waitForSpinner();
  await helper.waitForLoaderSvg();
  let validateFlightDetails = await gauge.dataStore.scenarioStore.get(
    "tripDetails"
  );
  let validateDepartFlightDetail = await gauge.dataStore.scenarioStore.get(
    "departFlightDetails"
  );
  await scrollTo(validateFlightDetails.Departure);
  await scrollTo(validateFlightDetails.Destination);
  await scrollTo(validateDepartFlightDetail.flightDepartPageFromTime);
  await scrollTo(validateDepartFlightDetail.flightDepartPageToTime);
};

exports.locationFrom = async () =>
  await $(`${departFlightPage.departLocBooking()}`).text();
exports.locationTo = async () =>
  await $(`${departFlightPage.returnLocBooking()}`).text();
exports.timeFrom = async () =>
  await $(`${departFlightPage.departTimeBooking()}`).text();
exports.timeTo = async () =>
  await $(`${departFlightPage.returnTimeBooking()}`).text();

exports.validateDepartLocText = async () =>
  await $(`${departFlightPage.departLocText()}`);

exports.validateReturnLocText = async () =>
  await $(`${departFlightPage.returnLocText()}`);

exports.collapseExpandFilter = async () =>
  await click($(`${returnFlightPage.closeExpandFilter()}`));

exports.enterDepartureReturnDate = async (departureDate, returnDate) => {
  await write(departureDate, $(tripPlanner.departureDateTextBox()));
  await write(returnDate, $(tripPlanner.returnDateTextBox()));
  let departureReturnDate = [];
  departureReturnDate.checkInDate = departureDate;
  departureReturnDate.checkOutDate = returnDate;
  gauge.message(departureDate + " "+ returnDate);
  process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("departureReturnDate", departureReturnDate) : gauge.dataStore.scenarioStore.put("departureReturnDate", departureReturnDate);
  await click($(tripPlanner.returnDateTextBox()));
};
exports.enterDepartureDAte = async (departureDate) => {
  await waitFor(1000);
  await write(departureDate, $(tripPlanner.departureDateTextBox()));
  await click($(tripPlanner.departureDateTextBox()));
};

exports.baggageFee = async () => {
  await hover($(`${departFlightPage.bagIcon()}`));
  await scrollTo($(`${departFlightPage.airlineNameInBag()}`));
  let airlineNameInBag = await $(
    `${departFlightPage.airlineNameInBag()}`
  ).text();
  gauge.dataStore.scenarioStore.put("airlineNameInBag", airlineNameInBag);
  let checkedBagCount = (
    await $(`${departFlightPage.checkedBagsCount()}`).get()
  ).length;
  gauge.dataStore.scenarioStore.put("checkedBagCount", checkedBagCount);
  for (var i = 1; i <= checkedBagCount; i++) {
    let checkedBagType = await $(
      `${departFlightPage.checkedBagType(i)}`
    ).text();
    let checkedBagfees = await $(
      `${departFlightPage.checkedBagfees(i)}`
    ).text();
    gauge.dataStore.scenarioStore.put("checkedBagType" + i, checkedBagType);
    gauge.dataStore.scenarioStore.put("checkedBagfees" + i, checkedBagfees);
  }
};

exports.selectFlight = async () => {
  await click($(`${departFlightPage.selectFlight()}`));
};
exports.clickOOPContinue = async () => {
  await helper.waitForSpinner();
  await click($(`${returnFlightPage.OOPContinue()}`));
};

exports.checkOOPContinuePopUpExist = async () => {
  await helper.waitForSpinner();
  return await $(`${returnFlightPage.OOPContinue()}`).exists();

}
exports.clickonSortByButton = async () => {
  await scrollTo($(`${departFlightPage.purchasePageTitle()}`));
  await click($(`${departFlightPage.purchasePageTitle()}`));
  await click($(`${departFlightPage.sortByButton()}`));
};
/* Company Policy, Cost, Departure,  Arrival, Duration */
exports.clickOnSortFlightByLabel = async (label) => {
    await this.clickonSortByButton();
    await click($(`${departFlightPage.sortByInputSelectionForGivenLabel(label)}`));
    await helper.waitForSpinner();
    await this.closeSortDropDown();
}

exports.checkIfFlightIsSortedByLabel = async (label) => {
  await helper.waitForSpinner();
  switch (label) {
    case "Cost":
      await this.isPriceListSortedForFlight();
      break;
    case "Departure":
      await this.isDepartureArrivalListSortedForFlight(label);
      break;
    case "Arrival":
      await this.isDepartureArrivalListSortedForFlight(label);
      break;
    case "Duration":
      await this.isDurationListSortedForFlight();
      break;
  }
};

exports.getPriceListForFlight = async () => {
  let allPriceListsValue = await $(
    `${departFlightPage.xpathForSortedPriceList()}`
  ).elements();
  let amountArray = [];
  for (let i = 0; i < allPriceListsValue.length; i++) {
    var individualPrice = await allPriceListsValue[i].text();
    var priceSplitValue = await individualPrice.split("$");
    await amountArray.push(priceSplitValue[priceSplitValue.length - 1]);
  }
  return amountArray;
};

exports.isPriceListSortedForFlight = async () => {
  let amountArray = await this.getPriceListForFlight();
  if (amountArray.length > 0) {
    assert.ok(
      await this.isListSorted(amountArray),
      "List is sorted as expected?"
    );
  }
};
exports.clickContinueButton = async () =>
  await click($(`${tripReviewPage.continueButton()}`));
exports.getCountOfTotalFlightListed = async () => {
  return (await $(`${departFlightPage.idForTotalFlightList()}`).elements())
    .length;
};

exports.getDepartureArrivalListForFlight = async (label) => {
  let allDepartureListsValue = [];
  let departureArray = [];
  switch (label) {
    case "Departure":
      allDepartureListsValue = await $(
        `${departFlightPage.xpathForSortedDepartureList()}`
      ).elements();
      break;
    case "Arrival":
      allDepartureListsValue = await $(
        `${departFlightPage.xpathForSortedArrivalList()}`
      ).elements();
      break;
  }
  for (let i = 0; i < allDepartureListsValue.length; i++) {
    var timeValue = await allDepartureListsValue[i].text();
    let timeIn24hr = await commonAction.convertTime12to24(timeValue);
    await departureArray.push(timeIn24hr);
  }
  return departureArray;
};
exports.clickChangeLink = async () => {
  let changeFlag = true;
  await gauge.dataStore.scenarioStore.put('changeFlag', changeFlag);
  await evaluate($(`${tripReviewPage.changeTrip()}`), (elem) => {
    return elem.click();
  });
};


exports.selectFlightWithArrivalDepartureAndDurationForGivenData = async(flightType, time, duration) => {
  let allDurationListsValue = [];
  let timeInFirstElement = null;
  let durationinFirstElement = null;
  let timeIn24hr = null;
  let durationValue = null;
  switch (flightType) {
      case 'OutBound':
          await this.clickOnSortFlightByLabel("Arrival");
          let allArrivalListsValue =  await $(`${departFlightPage.xpathForSortedArrivalList()}`).elements();
          allDurationListsValue = await $(`${departFlightPage.classForSortedDurataionList()}`).elements();
          timeInFirstElement = await allArrivalListsValue[0].text();
          timeIn24hr = await commonAction.convertTime12to24(timeInFirstElement);
          durationinFirstElement = await allDurationListsValue[0].text();
          durationValue = await this.convertToMinutes(durationinFirstElement);
          if(timeIn24hr < time && durationValue > duration){
            await this.departPageFlightInfo();
            await scrollTo($(`${departFlightPage.xpathForFlightSelectionForGivenRow(1)}`));
            await focus($(`${departFlightPage.xpathForFlightSelectionForGivenRow(1)}`));
            await click($(`${departFlightPage.xpathForFlightSelectionForGivenRow(1)}`));
            await this.returnPageFlightInfo();
            await this.clickSelectFlight();
          }else {
            console.log("Suitable flight is not available");
            assert.equal(true, false, "Test cannot pass because Suitable flight is not available" );
          }
              
          break;
      case 'InBound':
          await this.departPageFlightInfo();
          await this.clickSelectFlight();
          await helper.waitForSpinner();
          await helper.waitForWalkmePlayer();
          await this.clickOnSortFlightByLabel("Departure");
          let allDepartureListsValue =  await $(`${departFlightPage.xpathForSortedDepartureList()}`).elements();
          allDurationListsValue = await $(`${departFlightPage.classForSortedDurataionList()}`).elements();
          timeInFirstElement = await allDepartureListsValue[0].text();
          timeIn24hr = await commonAction.convertTime12to24(timeInFirstElement);
          durationinFirstElement = await allDurationListsValue[0].text();
          durationValue = await this.convertToMinutes(durationinFirstElement);
          if(timeIn24hr < time && durationValue > duration){
            await this.returnPageFlightInfo();
            await scrollTo($(`${departFlightPage.xpathForFlightSelectionForGivenRow(1)}`));
            await focus($(`${departFlightPage.xpathForFlightSelectionForGivenRow(1)}`));
            await click($(`${departFlightPage.xpathForFlightSelectionForGivenRow(1)}`));
          }else {
            console.log("Suitable flight is not available");
            assert.equal(true, false, "Test cannot pass because Suitable flight is not available" );
          }
          break;
      default:
          break;
  }

}
 
exports.closeSortDropDown = async() => {
  await $(`${departFlightPage.sortByButtonActive()}`).exists() ?
  await click($(`${departFlightPage.sortByButton()}`)) : console.log("Sort by Button is not active.")
}

exports.baggageFee = async () => {
  await hover($(`${departFlightPage.bagIcon()}`));
  await scrollTo($(`${departFlightPage.airlineNameInBag()}`));
  let airlineNameInBag = await $(
    `${departFlightPage.airlineNameInBag()}`
  ).text();
  gauge.dataStore.scenarioStore.put("airlineNameInBag", airlineNameInBag);
  let checkedBagCount = (
    await $(`${departFlightPage.checkedBagsCount()}`).get()
  ).length;
  gauge.dataStore.scenarioStore.put("checkedBagCount", checkedBagCount);
  for (var i = 1; i <= checkedBagCount; i++) {
    let checkedBagType = await $(
      `${departFlightPage.checkedBagType(i)}`
    ).text();
    let checkedBagfees = await $(
      `${departFlightPage.checkedBagfees(i)}`
    ).text();
    gauge.dataStore.scenarioStore.put("checkedBagType" + i, checkedBagType);
    gauge.dataStore.scenarioStore.put("checkedBagfees" + i, checkedBagfees);
  }
};
exports.isListSorted = async (arrayList) => {
  let sortedArray = arrayList.sort(function (a, b) {
    return a - b;
  });
  console.table(arrayList);
  console.table(sortedArray);
  return JSON.stringify(sortedArray) == JSON.stringify(arrayList);
};

exports.isDepartureArrivalListSortedForFlight = async (label) => {
  let departureArray = await this.getDepartureArrivalListForFlight(label);
  if (departureArray.length > 0) {
    assert.ok(
      await this.isListSorted(departureArray),
      "List is sorted as expected?"
    );
  }
};

exports.getDurationListForFlight = async () => {
  let allDurationListsValue = await $(
    `${departFlightPage.classForSortedDurataionList()}`
  ).elements();
  let durationArray = [];
  for (let i = 0; i < allDurationListsValue.length; i++) {
    var durationValue = await allDurationListsValue[i].text();
    var durationSplitValue = await this.convertToMinutes(durationValue);
    durationArray.push(durationSplitValue);
  }
  return durationArray;
};
exports.isDurationListSortedForFlight = async () => {
  let durationArray = await this.getDurationListForFlight();
  if (durationArray.length > 0) {
    assert.ok(
      await this.isListSorted(durationArray),
      "List is sorted as expected?"
    );
  }
};

exports.convertToMinutes = async (duration) => {
  let [hour, minutes] = [];
  if (duration.includes("Total")) {
    [hour, minutes] = duration.split("Total")[1].split("h");
  } else {
    [hour, minutes] = duration.split("h");
  }
  return Number(hour.trim() * 60) + Number(minutes.trim().split("m")[0]);
};

exports.ValidateViewTypes = async (viewtype) => {
  await helper.waitForSpinner();
  gauge.dataStore.scenarioStore.put("scheduleOrPrice", viewtype);
  await click($(`${departFlightPage.viewByButton()}`));
  await focus(viewtype);
  switch (viewtype) {
    case "Schedule":
      assert.ok(
        await radioButton({
          id: `${departFlightPage.scheduleRadio()}`,
        }).isSelected()
      ,"Schedule radio button not selected.");
      assert.ok(
        !(await $(`${departFlightPage.tierGroup()}`).exists()),
        "Fare Tier is displayed on departure flight results page for schedule search"
      );
      gauge.message(
        "Fare Tier is not displayed on departure flight results page for schedule search"
      );
      assert.strictEqual(
        await $(`${departFlightPage.airFare()}`).text(),
        "Select for Price",
        "Air fare is displayed on departure flight results page for schedule search"
      );
      gauge.message(
        "Air fare is not displayed on departure flight results page for schedule search"
      );
      break;
    case "Price":
      assert.ok(
        await radioButton({
          id: `${departFlightPage.priceRadio()}`,
        }).isSelected()
      ,"Price Radio button not selected.");
      break;
    default:
      break;
  }
};

exports.selectSearchType = async (searchBy) => {
  await click($(`${tripPlanner.searchByPriceSchdule(searchBy)}`));
};

exports.selectFlights = async () => {
  let flightTripType = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("tripDetails") : gauge.dataStore.scenarioStore.get("tripDetails");
  let title = helper.allPageTitle()
  switch (flightTripType.TripType) {
    case "RT":
    case "MD":
      await commonAction.validatePageTitle(title["en-us"]["SelectDepartureFlight"])
      await this.departPageFlightInfo();
      await this.clickSelectFlight();
      await commonAction.validatePageTitle(title["en-us"]["SelectReturnFlight"])
      await this.returnPageFlightInfo();
      await this.clickSelectFlight();
      await commonAction.hotelDatesPopup() 
      await commonAction.priceIncDecAlert()
      break;
    case "OW":
      await commonAction.validatePageTitle(title["en-us"]["SelectDepartureFlight"])
      await this.departPageFlightInfo();
      await this.clickSelectFlight();
      await commonAction.priceIncDecAlert()
      break;
    default:
      break;
  }
};

exports.clickMoreSearchOptionMD = async (index) =>
  await click($(`${tripPlanner.moreSearchOptionMD(index)}`));

exports.getMultiDestinationFlightDetails = async (table) => {
  let headerValue;
  let dataEntry;
  let tripDetails = {};
  let segmentLength =  gauge.dataStore.scenarioStore.get("segmentLength");

  await table.entries(async (entry) => {
    headerValue = Object.keys(entry);
    dataEntry = entry;
  });
  for (var i = 0; i < headerValue.length; i++) {
    switch (headerValue[i]) {
      case "Departure":
        await this.enterDepartureDetails(i, dataEntry, headerValue);
        break;
      case "Destination":
        await this.enterDestinationDetails(i, dataEntry, headerValue);
        break;
      case "BookingAfterXDays":
        await this.enterBookingDates(i, dataEntry, headerValue);
        break;
      case "TripType":
        await this.enterTripType(i, dataEntry, headerValue);
        break;
      case "MultiLeg":
        await this.enterMultiLeg(i, dataEntry, headerValue);
        break;
    }
    (i < segmentLength) && (await airAction.clickMoreSearchOptionMD(i));

    tripDetails[headerValue[i]] = dataEntry[headerValue[i]];
    gauge.dataStore.scenarioStore.put("tripDetails", tripDetails);
    console.log(tripDetails);
  }
};
exports.enterDepartureDetails = async (i, dataEntry, headerValue) => {
  await write(
    `${dataEntry[headerValue[i]]}`,
    $(`${tripPlanner.departureCity(0)}`)
  );
};
exports.enterDestinationDetails = async (i, dataEntry, headerValue) => {
  await write(
    `${dataEntry[headerValue[i]]}`,
    $(`${tripPlanner.destinationCity(1)}`)
  );
};
exports.enterBookingDates = async (i, dataEntry, headerValue) => {
  let departureDate = helper.getFutureDate(parseInt(dataEntry[headerValue[i]]));
  let nextLegDate = helper.getFutureDate(
    parseInt(dataEntry[headerValue[i]]) + 4
  );
  await click($(`${tripPlanner.departureDate(0)}`));
  await write(`${departureDate}`, $(`${tripPlanner.departureDate(0)}`));
  await write(`${nextLegDate}`, $(`${tripPlanner.departureDate(1)}`));
};
exports.enterTripType = async (i, dataEntry, headerValue) => {
  let tripType;
  tripType = dataEntry[headerValue[i]];
};
exports.enterMultiLeg = async (i, dataEntry, headerValue) => {
  await write(
    `${dataEntry[headerValue[i]]}`,
    $(`${tripPlanner.destinationCity(0)}`)
  );
};

exports.clickAddFlightsFromTripReview = async () =>
  await click($(`${tripPlanner.AddFlightsFromTripReview()}`));
exports.clickNonStopFlight = async (nonStopSpell) => {
  await click($(`${departFlightPage.nonStop(nonStopSpell)}`));
};
exports.clickTwoStopsFlight = async (twoStopSpell) => {
  await click($(`${departFlightPage.twoPlusStops(twoStopSpell)}`));
};

exports.nearbyAirportsResults = async (refineType) => {
  await helper.waitForSpinner();
  await waitFor(
    $(`${departFlightPage.resultFlight()}`),
    process.env.test_timeout
  );
  let countAfter = (await $(`${departFlightPage.locatorResultCount()}`).get())
    .length;
  for (var i = 1; i <= countAfter; i += 2) {
    await scrollTo($(`${departFlightPage.resultDepartLoc(i)}`));
    let locDepart = await $(`${departFlightPage.resultDepartLoc(i)}`).text();
    assert.strictEqual(refineType, locDepart,`In-correct Nearby Airport displayed : Expected ${locDepart} : Actual : ${refineType}`);
    if (i === 7) {
      break;
    }
  }
};

exports.unitedAirlines = async (refineType) => {
  await evaluate($(`${departFlightPage.airlinesSelectionByName(refineType)}`), (elem) => {
    return elem.click();
  });
};

exports.respectiveAirlinesSelection = async (airlineName) => {
  await evaluate(
    $(`${departFlightPage.airlinesSelectionByName(airlineName)}`),
    (elem) => {
      return elem.click();
    }
  );
};
exports.refineUniteAirlines = async () => {
  await waitFor(
    $(`${departFlightPage.resultFlight()}`),
    process.env.test_timeout
  );
  let countAfter = (await $(`${departFlightPage.locatorResultCount()}`).get())
    .length;
  for (var i = 1; i <= countAfter; i++) {
    await scrollTo($(`${departFlightPage.resultUnitedAir(i)}`));
    if (i === 4) {
      break;
    }
  }
};

exports.refineClassType = async () => {
  await waitFor(
    $(`${departFlightPage.resultFlight()}`),
    process.env.test_timeout
  );
  let countAfter = (await $(`${departFlightPage.locatorResultCount()}`).get())
    .length;
  for (var i = 1; i <= countAfter; i++) {
    await scrollTo($(`${departFlightPage.resultClassType(i)}`));
    if (i === 4) {
      break;
    }
  }
};

exports.outOfPolicy = async () => {
  await evaluate($(`${departFlightPage.outOfPolicy()}`), (elem) => {
    return elem.click();
  });
};

exports.refinePolicyType = async () => {
  await waitFor(
    $(`${departFlightPage.resultFlight()}`),
    process.env.test_timeout
  );
  let countAfter = (await $(`${departFlightPage.locatorResultCount()}`).get())
    .length;
  for (var i = 1; i <= countAfter; i++) {
    await scrollTo($(`${departFlightPage.resultOutOfPolicyType(i)}`));
    if (i === 4) {
      break;
    }
  }
};

exports.refineOneStopType = async () => {
  await waitFor(
    $(`${departFlightPage.resultFlight()}`),
    process.env.test_timeout
  );
  let countAfter = (await $(`${departFlightPage.locatorResultCount()}`).get())
    .length;
  for (var i = 1; i <= countAfter; i++) {
    await scrollTo($(`${departFlightPage.resultOneStopType(i)}`));
    if (i === 4) {
      break;
    }
  }
};

exports.clickOneStopFlight = async () => {
  await click($(`${departFlightPage.oneStop()}`));
};

exports.clickFareBasic = async () => {
  await click($(`${departFlightPage.locatorFareBasic()}`));
};
exports.clickFareRefundable = async () => {
  await click($(`${departFlightPage.locatorFareRefundable()}`));
};
exports.clickFareUnrestricted = async () => {
  await click($(`${departFlightPage.locatorFareUnrestricted()}`));
};
exports.refineFareTierStandard = async (refineType) => {
  let countAfter = (await $(`${departFlightPage.locatorResultCount()}`).get())
    .length;
  for (var i = 1; i < countAfter; i++) {
    await scrollTo($(`${departFlightPage.locatorFareTab(i)}`));
    let textFareTier = String(
      await $(`${departFlightPage.locatorFareTab(i)}`).text()
    );
    let textStandard = textFareTier.slice(textFareTier.length - 8);
    assert.strictEqual(refineType, textStandard,`In- Correct Fare Standard displayed  ,Expected : ${textStandard} , Actual : ${refineType}`);
    if (i === 4) {
      break;
    }
  }
};
exports.validateFlightResult = async () => {
  let flightResult = parseInt(
    await $(`${departFlightPage.flightCount()}`).text()
  );
  expect(flightResult, "No Flight data returned....").to.be.above(0);
};

exports.selectFlightInfoOOP = async () => {
  await this.getDepartFlightDetailsFromOOP();
  let flightTripType = gauge.dataStore.scenarioStore.get("tripDetails");
  switch (flightTripType.TripType) {
    case "RT":
      await this.getReturnFlightDetailsFromOOP();
      break;
    default:
      break;
  }
  await click($(`${departFlightPage.recomemdedFlightSelectBtn()}`));
};

exports.getDepartFlightDetailsFromOOP = async () => {
  let departFlightDetails = gauge.dataStore.scenarioStore.get("departFlightDetails");
  departFlightDetails.flightDepartPageAirline = await $(`${departFlightPage.departAirlineNameOOP()}`).text();
  departFlightDetails.flightDepartPageAirlineNum = await $(`${departFlightPage.departAirlineNumberOOP()}`).text();
  departFlightDetails.flightDepartPageFromTime = await $(`${departFlightPage.departFromTimeOOP()}`).text();
  departFlightDetails.flightDepartPageToTime = await $(`${departFlightPage.departToTimeOOP()}`).text();
  gauge.dataStore.scenarioStore.put("departFlightDetails", departFlightDetails);
};

exports.getReturnFlightDetailsFromOOP = async () => {
  let returnFlightDetails = gauge.dataStore.scenarioStore.get("returnFlightDetails");
  returnFlightDetails.flightReturnPageAirline = await $(`${departFlightPage.returnAirlineNameOOP()}`).text();
  returnFlightDetails.flightReturnPageAirlineNum = await $(`${departFlightPage.returnAirlineNumberOOP()}`).text();
  returnFlightDetails.flightReturnPageFromTime = await $(`${departFlightPage.returnFromTimeOOP()}`).text();
  returnFlightDetails.flightReturnPageToTime = await $(`${departFlightPage.returnToTimeOOP()}`).text();
  gauge.dataStore.scenarioStore.put("returnFlightDetails", returnFlightDetails);
};

exports.defaultSearchType = async (searchBy) => {
  assert.ok(
    await radioButton({
      id: `${tripPlanner.defaultSelectPriceSchdule(searchBy)}`,
    }).isSelected(),
    `Default air search type ${searchBy} is not selected`
  );
  gauge.message(`Default air search type ${searchBy} is selected`);
};

exports.respectiveAirlinesSelection = async (airlineName) => {
  await evaluate(
    $(`${departFlightPage.airlinesSelectionByName(airlineName)}`),
    (elem) => {
      return elem.click();
    }
  );
};

exports.validatWebFare = async () => {
  let ExpectedBadgeName = gauge.dataStore.specStore.get(
    "badgeNameOnResultsPage"
  );
  let flightSegmentCount = (
    await $(`${tripReviewPage.flightCount()}`).elements()
  ).length;
  for (var i = 1; i <= flightSegmentCount; i++) {
    let webFarebadgeNameOnReviewPage = await $(
      `(${tripReviewPage.webFareBadge()})[${i}]`
    ).text();
    assert.ok(
      ExpectedBadgeName.includes(String(webFarebadgeNameOnReviewPage).trim(),`Badge name doesnot include ${webFarebadgeNameOnReviewPage}`)
    );
  }
};

exports.travelFusionReport = async () => {
  let badgeNameOnResultsPage = await $(
    `${departFlightPage.badgename()}`
  ).text();
  gauge.dataStore.specStore.put(
    "badgeNameOnResultsPage",
    badgeNameOnResultsPage
  );
  let faretierTabLength = (await $(`${departFlightPage.fareTier()}`).elements())
    .length;
  assert.equal(
    faretierTabLength,
    1,
    "MultiFare Tabs are Displayed for Travelfusion flights"
  );
  let brandedfares = !(await text("(.*?)", toRightOf("Ryanair 7256")).exists());
  assert.equal(
    brandedfares,
    true,
    "Branded Fares are Displayed for Travelfusion flights"
  );
  let badgeName = await $(`${departFlightPage.badgename()}`).exists();
  assert.equal(
    badgeName,
    true,
    "Web Fare Badge Is not displayed in the flight results"
  );
};

exports.validateStops = async()=> 
{
  await waitFor(
    $(`${departFlightPage.resultFlight()}`),
    process.env.test_timeout
  )
  let isOneStopChecked = await radioButton({ id: `${departFlightPage.oneStopWithoutHash()}` }).isSelected();
  let message = isOneStopChecked ? "Non stop is not checked" : "One stop is not checked";
  console.log(message);
  
  let isNonStopSelected = await radioButton({ id: `${departFlightPage.nonStopWithoutHash()}` }).isSelected();
  
  if(isOneStopChecked) 
  {
    assert.strictEqual(true, isOneStopChecked, message);
  }
  else
  {
    assert.strictEqual(true, isNonStopSelected, message);
  }
  await scrollTo($(`${departFlightPage.resultFlight()}`));
  await $(`${departFlightPage.viewStops()}`).exists();
}
  
exports.selectNewFlights = async () => {
  await helper.waitForSpinner();
  await hover($(`${dynamicAirPolicy.selectNewFlightButton()}`));
  await evaluate($(`${dynamicAirPolicy.selectNewFlightButton()}`), (elem) => {
    return elem.click();
  });
  await helper.waitForSpinner();
};

exports.lowestPriceValidation = async () => {
  let fareTabLength = (await $(`${departFlightPage.fareTabLengthLoc()}`).elements()).length;
  let priceValue = [];
  let thirdTabValue;
  let firstTabValue = (await $(`${departFlightPage.firstValue()}`).text()).replace(/[^0-9]/g, '').trim();
  let secondTabValue = (await $(`${departFlightPage.secondValue()}`).text()).replace(/[^0-9]/g, '').trim();
  fareTabLength > 2 &&  (thirdTabValue = (await $(`${departFlightPage.thirdValue()}`).text()).replace(/[^0-9]/g, '').trim());
  fareTabLength === 2 ? priceValue.push(firstTabValue, secondTabValue) : priceValue.push(firstTabValue, secondTabValue, thirdTabValue);
  let priceValues = priceValue.map(i=>Number(i));
  assert.ok(await this.isListSorted(priceValues), "List is not sorted as expected.") == true && (this.checkForTabActivation(fareTabLength))
 
}

exports.checkForTabActivation = async (fareTabLength) => {
  for (var i=1; i<=fareTabLength; i++)
  {
    let fareValue = await evaluate($(`${departFlightPage.fareTabValue(i)}`), (elem) => { return elem.getAttribute('class')});
    assert.ok(fareValue.includes("active"),"Tab is not active.");
  }
}

exports.anyStop = async () => {
  await evaluate($(`${departFlightPage.anyStopLoc()}`), (elem) => {
    return elem.click();
  });
};

exports.clickSearchForMoreAirports = async () => {
  await evaluate($(`${departFlightPage.searchForMoreAirportsLoc()}`), (elem) => {
    return elem.click();
  });
};
exports.clickSearchForMoreTrains = async () => {
  await evaluate($(`${departFlightPage.searchForMoreTrainLoc()}`), (elem) => {
    return elem.click();
  });
};

exports.seatMap = async () => {
  await scrollTo($(`${departFlightPage.seatMapIcon()}`));
  await evaluate($(`${departFlightPage.seatMapIcon()}`), (elem) => {
    return elem.click();
  });
  await waitFor($(`${departFlightPage.seatMapModal()}`), process.env.test_timeout);
  await waitFor($(`${departFlightPage.seatMapLegendItems()}`), process.env.test_timeout);
  await click($(`${departFlightPage.cancelSeatRequestButton()}`));
}
exports.flightDepartPageFromLoc = async () => {
  return (await $(`${departFlightPage.departFlightLoc()}`).text()).trim()
};

exports.flightDepartPageToLoc = async () => {
  return (await $(`${departFlightPage.destinationFlightLoc()}`).text()).trim()
};

exports.flightDepartPageFromTime = async () => {
  return await $(`${departFlightPage.departFromTime()}`).text();
};

exports.flightDepartPageToTime = async () => {
  return await $(`${departFlightPage.departToTime()}`).text();
};

exports.flightDepartPageAirline = async () => {
  let airline = await $(`${departFlightPage.airlineName()}`).text();
  let airlineName = airline.split(/(\d+)/)
  return airlineName[0].toString().trim();
};

exports.flightDepartPageAirlineNum= async () => {
  return await $(`${departFlightPage.airlineNumber()}`).text();
};

exports.flightDepartPageFromDate = async () => {
  return (await $(`${departFlightPage.departFromDate()}`).text()).replace(/[()]/g, '');
};

exports.flightDepartPageToDate = async () => {
  return (await $(`${departFlightPage.departToDate()}`).text()).replace(/[()]/g, '');
};

exports.flightDepartPageAirfare= async () => {
    return await $(`${departFlightPage.airFare()}`).text()
};

exports.flightDepartPageCabinClass = async () => {
  if (await $(departFlightPage.departClasCabin()).exists() == true) {
    return await $(`${departFlightPage.departClasCabin()}`).text()
  }
  else{
    return await $(`${departFlightPage.departClasCabin2()}`).text()
  }
}

//--------------Review depart-----------------------------------

exports.reviewPageDepartFromLoc = async () => {
  return (await $(`${tripReviewPage.reviewDepartFromLoc()}`).text()).trim()
};

exports.reviewPageDepartToLoc = async () => {
  return (await $(`${tripReviewPage.reviewDepartToLoc()}`).text()).trim()
};

exports.reviewPageDepartFromTime = async () => {
  return await $(`${tripReviewPage.reviewDepartFromTime()}`).text();
};

exports.reviewPageDepartToTime = async () => {
  return await $(`${tripReviewPage.reviewDepartToTime()}`).text();
};

exports.reviewPageDepartAirline = async () => {
  return await $(`${tripReviewPage.reviewDepartAirline()}`).text();
};

exports.reviewPageDepartAirlineNum= async () => {
  return ((await $(`${tripReviewPage.reviewDepartAirlineNum()}`).text()).replace(/[a-zA-Z_-]/g, '')).trim()
};

exports.reviewPageDepartFromDate = async () => {
  return await $(`${tripReviewPage.reviewDepartFromDate()}`).text();
};

exports.reviewPageDepartToDate = async () => {
  return await $(`${tripReviewPage.reviewDepartToDate()}`).text();
};

exports.reviewPageDepartAirfare= async () => {
  return await $(`${tripReviewPage.reviewDepartAirlineFare()}`).text();
};

exports.reviewPageDepartCabinClass= async () => {
  return await $(`${tripReviewPage.reviewDepartAirlineNum()}`).text() // airline number and class cabin on same div
};

//-----------------review return---
exports.reviewPageReturnFromLoc = async () => {
  return (await $(`${tripReviewPage.reviewReturnFromLoc()}`).text()).trim()
};

exports.reviewPageReturnToLoc = async () => {
  return (await $(`${tripReviewPage.reviewReturnToLoc()}`).text()).trim()
};

exports.reviewPageReturnFromTime = async () => {
  return await $(`${tripReviewPage.reviewReturnFromTime()}`).text();
};

exports.reviewPageReturnToTime = async () => {
  return await $(`${tripReviewPage.reviewReturnToTime()}`).text();
};

exports.reviewPageReturnAirline = async () => {
  return await $(`${tripReviewPage.reviewReturnAirline()}`).text();
};

exports.reviewPageReturnAirlineNum= async () => {
  return ((await $(`${tripReviewPage.reviewReturnAirlineNum()}`).text()).replace(/[a-zA-Z_-]/g, '')).trim()
};

exports.reviewPageReturnFromDate = async () => {
  return await $(`${tripReviewPage.reviewReturnFromDate()}`).text();
};

exports.reviewPageReturnToDate = async () => {
  return await $(`${tripReviewPage.reviewReturnToDate()}`).text();
};

exports.reviewPageReturnCabinClass= async () => {
  return await $(`${tripReviewPage.reviewReturnAirlineNum()}`).text()
}

//------------review page air validation-------

exports.validateDepartAirlineName = async () => {
  let expectedDepartAirlineName = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartAirlineName = await this.reviewPageDepartAirline();
  assert.equal(expectedDepartAirlineName.flightDepartPageAirline, actualDepartAirlineName, `Invalid Airline Name is showing in trip review page, Expected: ${expectedDepartAirlineName.flightDepartPageAirline}, Actual: ${actualDepartAirlineName}`);
}

exports.validateDepartFromLoc = async () =>{
  let expectedDepartFromLoc = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartFromLoc = await this.reviewPageDepartFromLoc();
  expect(actualDepartFromLoc).to.contain(expectedDepartFromLoc.flightDepartPageFromLoc, `Invalid Departure From Location is showing in trip review page, Expected: ${expectedDepartFromLoc.flightDepartPageFromLoc}, Actual: ${actualDepartFromLoc}`)
  //assert.equal(expectedDepartFromLoc.flightDepartPageFromLoc, actualDepartFromLoc, `Invalid Departure From Location is showing in trip review page, Expected: ${expectedDepartFromLoc.flightDepartPageFromLoc}, Actual: ${actualDepartFromLoc}`)
}

exports.validateDepartToLoc = async () =>{
  let expectedDepartToLoc = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartToLoc = await this.reviewPageDepartToLoc();
  assert.equal(expectedDepartToLoc.flightDepartPageToLoc, actualDepartToLoc, `Invalid Departure To Location is showing in trip review page, Expected: ${expectedDepartToLoc.flightDepartPageToLoc}, Actual: ${actualDepartToLoc}`)
}

exports.validateDepartFromTime = async () =>{
  let expectedDepartFromTime = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartFromTime = await this.reviewPageDepartFromTime();
  expect(expectedDepartFromTime.flightDepartPageFromTime).to.contain(actualDepartFromTime, `Invalid Departure From Time is showing in trip review page, Expected: ${expectedDepartFromTime.flightDepartPageFromTime}, Actual: ${actualDepartFromTime}`)
}

exports.validateDepartToTime = async () =>{
  let expectedDepartToTime = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartToTime = await this.reviewPageDepartToTime();
  expect(expectedDepartToTime.flightDepartPageToTime).to.contain(actualDepartToTime, `Invalid Departure To Time is showing in trip review page, Expected: ${expectedDepartToTime.flightDepartPageToTime}, Actual: ${actualDepartToTime}`)
}

exports.validateDepartFromDate = async () =>{
  let expectedDepartFromDate = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartFromDate = await this.reviewPageDepartFromDate();
  assert.notDeepEqual(expectedDepartFromDate.flightDepartPageFromDate, actualDepartFromDate, `Invalid Departure From Date is showing in trip review page, Expected: ${expectedDepartFromDate.flightDepartPageFromDate}, Actual: ${actualDepartFromDate}`)
}
exports.validateDepartToDate = async () =>{
  let expectedDepartFromDate = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartFromDate = await this.reviewPageDepartToDate();
  assert.notDeepEqual(expectedDepartFromDate.flightDepartPageFromDate, actualDepartFromDate, `Invalid Departure To Date is showing in trip review page, Expected: ${expectedDepartFromDate.flightDepartPageFromDate}, Actual: ${actualDepartFromDate}`)
}

exports.validateDepartAirlineNumber = async () =>{
  let expectedDepartAirlineNumber = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartAirlineNum = await this.reviewPageDepartAirlineNum();
  expect(actualDepartAirlineNum).to.contain(expectedDepartAirlineNumber.flightDepartPageAirlineNum, 
  `Invalid Airline Number is showing in trip review page, Expected: ${expectedDepartAirlineNumber.flightDepartPageAirlineNum}, Actual: ${actualDepartAirlineNum}` )

  expect(actualDepartAirlineNum).to.contain(expectedDepartAirlineNumber.flightDepartPageAirlineNum, `Invalid Airline Number is showing in trip review page, Expected: ${expectedDepartAirlineNumber.flightDepartPageAirlineNum}, Actual: ${actualDepartAirlineNum}`)
  }

  exports.validateDepartClassCabin = async () =>{
    let expectedDepartClassCabin = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
    let actualDepartClassCabin = await this.reviewPageDepartCabinClass();
    
   expect(actualDepartClassCabin).to.contain(expectedDepartClassCabin.flightDepartPageCabinClass, 
    `Invalid Cabin Class is showing in trip review page, Expected: ${expectedDepartClassCabin.flightDepartPageCabinClass}, Actual: ${actualDepartClassCabin}` )  
}


exports.validateDepartAirlineFare= async () =>{
  let scheduleOrPrice = gauge.dataStore.scenarioStore.get("scheduleOrPrice");
  let expectedDepartAirlineFare
  let actualDepartAirlineFare
  console.log ("scheduleOrPrice:,",scheduleOrPrice)
  scheduleOrPrice == "Price" && (
    expectedDepartAirlineFare = gauge.dataStore.scenarioStore.get("departFlightDetails"),
    actualDepartAirlineFare = await this.reviewPageDepartAirfare(),
    console.log("expectedDepartAirlineFare.flightDepartPageAirFare: ", expectedDepartAirlineFare.flightDepartPageAirFare),
    console.log("actualDepartAirlineFare : ", actualDepartAirlineFare),
    assert.notDeepEqual(expectedDepartAirlineFare.flightDepartPageAirFare, actualDepartAirlineFare, `Invalid Airline Fare is showing in trip review page, Expected: ${expectedDepartAirlineFare.flightDepartPageAirFare}, Actual: ${actualDepartAirlineFare}`)
  )
}

//************review return flight **************** */

exports.validateReturnAirlineName = async () => {
  let expectedReturnAirlineName = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnAirlineName = await this.reviewPageReturnAirline();
  assert.equal(expectedReturnAirlineName.flightReturnPageAirline, actualReturnAirlineName, `Invalid Airline Name is showing in trip review page, Expected: ${expectedReturnAirlineName.flightReturnPageAirline}, Actual: ${actualReturnAirlineName}`);
}

exports.validateReturnFromLoc = async () =>{
  let expectedReturnFromLoc = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnFromLoc = await this.reviewPageReturnFromLoc();
  assert.equal(expectedReturnFromLoc.flightReturnPageFromLoc, actualReturnFromLoc, `Invalid Return From Location is showing in trip review page, Expected: ${expectedReturnFromLoc.flightReturnPageFromLoc}, Actual: ${actualReturnFromLoc}`)
}

exports.validateReturnToLoc = async () =>{
  let expectedReturnToLoc = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnToLoc = await this.reviewPageReturnToLoc();
  assert.equal(expectedReturnToLoc.flightReturnPageToLoc, actualReturnToLoc, `Invalid  Return to Location is showing in trip review page, Expected: ${expectedReturnToLoc.flightReturnPageToLoc}, Actual: ${actualReturnToLoc}`)
}

exports.validateReturnFromTime = async () =>{
  let expectedReturnFromTime = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnFromTime = await this.reviewPageReturnFromTime();
  expect(expectedReturnFromTime.flightReturnPageFromTime).to.contain(actualReturnFromTime, `Invalid Return From Time is showing in trip review page, Expected: ${expectedReturnFromTime.flightReturnPageFromTime}, Actual: ${actualReturnFromTime}`)
}

exports.validateReturnToTime = async () =>{
  let expectedReturnToTime = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnToTime = await this.reviewPageReturnToTime();
  expect(expectedReturnToTime.flightReturnPageToTime).to.contain(actualReturnToTime, `Invalid Return To Time is showing in trip review page, Expected: ${expectedReturnToTime.flightReturnPageToTime}, Actual: ${actualReturnToTime}`)
}

exports.validateReturnFromDate = async () =>{
  let expectedReturnFromDate = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnFromDate = await this.reviewPageReturnFromDate();
  assert.notDeepEqual(actualReturnFromDate, expectedReturnFromDate.flightReturnPageFromDate, `Invalid Return From Date is showing in trip review page, Expected: ${expectedReturnFromDate.flightReturnPageFromDate}, Actual: ${actualReturnFromDate}`)
}

exports.validateReturnToDate = async () =>{
  let expectedReturnFromDate = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualReturnToDate = await this.reviewPageReturnToDate();
  assert.notDeepEqual(actualReturnToDate, expectedReturnFromDate.flightReturnPageToDate, `Invalid Return To Date is showing in trip review page, Expected: ${expectedReturnFromDate.flightReturnPageToDate}, Actual: ${actualReturnToDate}`)
}

exports.validateReturnAirlineNumber = async () =>{
  let expectedReturnAirlineNumber = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnAirlineNum = await this.reviewPageReturnAirlineNum();
  expect(actualReturnAirlineNum).to.contain(expectedReturnAirlineNumber.flightReturnPageAirlineNum, `Invalid Airline Number is showing in trip review page, Expected: ${expectedReturnAirlineNumber.flightReturnPageAirlineNum}, Actual: ${actualReturnAirlineNum} `)
}

exports.validateReturnClassCabin = async () =>{
  let expectedReturnClassCabin = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnClassCabin = await this.reviewPageReturnCabinClass();
  expect(actualReturnClassCabin).to.contain(expectedReturnClassCabin.flightReturnPageClassCabin, `Invalid Cabin Class is showing in trip review page, Expected: ${expectedReturnClassCabin.flightReturnPageClassCabin}, Actual: ${actualReturnClassCabin} `)
}

/** trip confirmation departure flight data */
exports.tripConfirmationPageDepartFromLoc = async () => {
  return (await $(`${tripConfirmationPage.tripConfirmationDepartFromLoc()}`).text()).trim()
};

exports.tripConfirmationPageDepartToLoc = async () => {
  let count = await this.departStopCountInTripConfirmation()
  return (await $(`${tripConfirmationPage.tripConfirmationDepartToLoc (count)}`).text()).trim()
};

exports.tripConfirmationPageDepartFromTime = async () => {
  return await $(`${tripConfirmationPage.tripConfirmationDepartFromTime()}`).text();
};

exports.tripConfirmationPageDepartToTime = async () => {
  return await $(`${tripConfirmationPage.tripConfirmationDepartToTime()}`).text();
};

exports.tripConfirmationPageDepartAirline = async () => {
  return (await $(`${tripConfirmationPage.tripConfirmationDepartAirline()}`).text()).replace(/[0-9]/g, '').trim();
};

exports.tripConfirmationPageDepartAirlineNum= async () => {
  return (await $(`${tripConfirmationPage.tripConfirmationDepartAirlineNum()}`).text()).trim()
};

exports.tripConfirmationPageDepartFromDate = async () => {
  return await $(`${tripConfirmationPage.tripConfirmationDepartDate()}`).text()
};

exports.tripConfirmationPageDepartAirfare= async () => {
  return await $(`${tripConfirmationPage.tripConfirmationDepartAirlineFare()}`).text();
};

exports.tripConfirmationPageDepartCabinClass= async () => {
  return (await $(`${tripConfirmationPage.tripConfirmationDepartClassCabin()}`).text()).trim()
};

//-----------------trip Confirmation return fight---
exports.tripConfirmationPageReturnFromLoc = async () => {
  return (await $(`${tripConfirmationPage.tripConfirmationReturnFromLoc()}`).text()).trim()
};

exports.tripConfirmationPageReturnToLoc = async () => {
  let count = await this.returnStopCountInTripConfirmation()
  return (await $(`${tripConfirmationPage.tripConfirmationReturnToLoc (count)}`).text()).trim()
};

exports.tripConfirmationPageReturnFromTime = async () => {
  return await $(`${tripConfirmationPage.tripConfirmationReturnFromTime()}`).text();
};

exports.tripConfirmationPageReturnToTime = async () => {
  let count = await this.returnStopCountInTripConfirmation()
  return await $(`${tripConfirmationPage.tripConfirmationReturnToTime(count)}`).text();
};

exports.tripConfirmationPageReturnAirline = async () => {
  return (await $(`${tripConfirmationPage.tripConfirmationReturnAirline()}`).text()).replace(/[0-9]/g, '').trim();
};

exports.tripConfirmationPageReturnAirlineNum= async () => {
  return await $(`${tripConfirmationPage.tripConfirmationReturnAirlineNum()}`).text()
};

exports.tripConfirmationPageReturnFromDate = async () => {
  return await $(`${tripConfirmationPage.tripConfirmationReturnDate()}`).text();
};

exports.tripConfirmationPageReturnCabinClass= async () => {
  return await $(`${tripConfirmationPage.tripConfirmationReturnClassCabin()}`).text()
};

//------------confirmation page departure flight air validation-------

exports.validateTripConfirmationDepartAirlineName = async (validateTripType) => {
  let expectedDepartAirlineName = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartAirlineName = await this.tripConfirmationPageDepartAirline();
  assert.equal(expectedDepartAirlineName.flightDepartPageAirline , actualDepartAirlineName, `Invalid Airline Name is showing in ${validateTripType} page, Expected: ${expectedDepartAirlineName.flightDepartPageAirline}, Actual: ${actualDepartAirlineName}`);
}

exports.validateTripConfirmationDepartFromLoc = async (validateTripType) =>{
  let expectedDepartFromLoc = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartFromLoc = await this.tripConfirmationPageDepartFromLoc();
  assert.equal(expectedDepartFromLoc.flightDepartPageFromLoc, actualDepartFromLoc,`Invalid Departure From location is showing in ${validateTripType} page, Expected: ${expectedDepartFromLoc.flightDepartPageFromLoc}, Actual: ${actualDepartFromLoc}`)
}

exports.validateTripConfirmationDepartToLoc = async (validateTripType) =>{
  let expectedDepartToLoc = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartToLoc = await this.tripConfirmationPageDepartToLoc();
  assert.equal(expectedDepartToLoc.flightDepartPageToLoc, actualDepartToLoc, `Invalid Departure To location is showing in ${validateTripType} page, Expected: ${expectedDepartToLoc.actualDepartToLoc}, Actual: ${actualDepartToLoc}`)
}

exports.validateTripConfirmationDepartFromTime = async (validateTripType) =>{
  let expectedDepartFromTime = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartFromTime = await this.tripConfirmationPageDepartFromTime();
  //assert.equal(expectedDepartFromTime.flightDepartPageFromTime, actualDepartFromTime, `Invalid Departure From Time is showing in ${validateTripType} page, Expected: ${expectedDepartFromTime.flightDepartPageFromTime}, Actual: ${actualDepartFromTime}`)
}
  
exports.validateTripConfirmationDepartToTime = async (validateTripType) =>{
  let expectedDepartToTime = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartToTime = await this.tripConfirmationPageDepartToTime();
 // assert.equal(expectedDepartToTime.flightDepartPageToTime, actualDepartToTime, `Invalid Departure To Time is showing in ${validateTripType} page, Expected: ${expectedDepartToTime.flightDepartPageToTime}, Actual: ${actualDepartToTime}`)
}

exports.validateTripConfirmationDepartFromDate = async (validateTripType) =>{
  let expectedDepartFromDate = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartFromDate = await this.tripConfirmationPageDepartFromDate();
  assert.notDeepEqual(actualDepartFromDate.toUpperCase()).to.contain(expectedDepartFromDate.flightDepartPageFromDate,`Invalid Departure From Date is showing in ${validateTripType} page, Expected: ${expectedDepartFromDate.flightDepartPageFromDate}, Actual: ${actualDepartFromDate}`)
}

exports.validateTripConfirmationDepartAirlineNumber = async (validateTripType) =>{
  let expectedDepartAirlineNumber = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartAirlineNum = await this.tripConfirmationPageDepartAirlineNum();
  expect(expectedDepartAirlineNumber.flightDepartPageAirlineNum).to.contain(actualDepartAirlineNum, `Invalid Airline Number is showing in ${validateTripType} page, Expected: ${expectedDepartAirlineNumber.flightDepartPageAirlineNum}, Actual: ${actualDepartAirlineNum}`)
}

exports.validateTripConfirmationDepartCabinClass = async (validateTripType) =>{
  let expectedDepartCabinClass = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualDepartCabinClass = await this.tripConfirmationPageDepartCabinClass();
  expect(actualDepartCabinClass ).to.contain(expectedDepartCabinClass.flightDepartPageCabinClass, `Invalid Cabin Class is showing in ${validateTripType} page, Expected: ${expectedDepartCabinClass.flightDepartPageCabinClass}, Actual: ${actualDepartCabinClass}`)
}

exports.validateTripConfirmationDepartAirlineFare= async (validateTripType) =>{
  let scheduleOrPrice = gauge.dataStore.scenarioStore.get("scheduleOrPrice");
  let expectedDepartAirlineFare
  let actualDepartAirlineFare
  scheduleOrPrice == "Price" && (
    expectedDepartAirlineFare = gauge.dataStore.scenarioStore.get("departFlightDetails"),
    actualDepartAirlineFare =await this.tripConfirmationPageDepartAirfare(),
    assert.notDeepEqual(expectedDepartAirlineFare.flightDepartPageAirFare, actualDepartAirlineFare, `Invalid Airline Fare is showing in ${validateTripType} page, Expected: ${expectedDepartAirlineFare.flightDepartPageAirFare}, Actual: ${actualDepartAirlineFare}`)
  )
}

//------------confirmation page return flight air validation-------

exports.validateTripConfirmationReturnAirlineName = async (validateTripType) => {
  let expectedReturnAirlineName = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnAirlineName = await this.tripConfirmationPageReturnAirline();
  assert.equal(expectedReturnAirlineName.flightReturnPageAirline, actualReturnAirlineName, `Invalid Return Airline Name is showing in ${validateTripType} page, Expected: ${expectedReturnAirlineName.flightReturnPageAirline}, Actual: ${actualReturnAirlineName}`);
}

exports.validateTripConfirmationReturnFromLoc = async (validateTripType) =>{
  let expectedReturnFromLoc = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnFromLoc = await this.tripConfirmationPageReturnFromLoc();
  assert.equal(expectedReturnFromLoc.flightReturnPageFromLoc, actualReturnFromLoc, `Invalid Return From Location is showing in ${validateTripType} page, Expected: ${expectedReturnFromLoc.flightReturnPageFromLoc}, Actual: ${actualReturnFromLoc}`)
}

exports.validateTripConfirmationReturnToLoc = async (validateTripType) =>{
  let expectedReturnToLoc = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnToLoc = await this.tripConfirmationPageReturnToLoc();
  assert.equal(expectedReturnToLoc.flightReturnPageToLoc, actualReturnToLoc, `Invalid Return To Location is showing in ${validateTripType} page, Expected: ${expectedReturnToLoc.flightReturnPageToLoc}, Actual: ${actualReturnToLoc}`)
}

exports.validateTripConfirmationReturnFromTime = async (validateTripType) =>{
  let expectedReturnFromTime = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnFromTime = await this.tripConfirmationPageReturnFromTime();
  assert.equal(expectedReturnFromTime.flightReturnPageFromTime, actualReturnFromTime, `Invalid Return From Time is showing in ${validateTripType} page, Expected: ${expectedReturnFromTime.flightReturnPageFromTime}, Actual: ${actualReturnFromTime}`)
}

exports.validateTripConfirmationReturnToTime = async (validateTripType) =>{
  let expectedReturnToTime = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnToTime = await this.tripConfirmationPageReturnToTime();
  // assert.equal(expectedReturnToTime.flightReturnPageToTime, actualReturnToTime.split('+')[0], `Invalid Return To Time is showing in ${validateTripType} page, Expected: ${expectedReturnToTime.flightReturnPageToTime}, Actual: ${actualReturnToTime}`)
  expect(expectedReturnToTime.flightReturnPageToTime).to.contain(actualReturnToTime.split('+')[0], `Invalid Return To Time is showing in ${validateTripType} page, Expected: ${expectedReturnToTime.flightReturnPageToTime}, Actual: ${actualReturnToTime}`)

}

exports.validateTripConfirmationReturnFromDate = async (validateTripType) =>{
  let expectedReturnFromDate = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnFromDate = await this.tripConfirmationPageReturnFromDate();
  assert.notDeepEqual(actualReturnFromDate, expectedReturnFromDate.flightReturnPageFromDate, `Invalid Return From Date is showing in ${validateTripType} page, Expected: ${expectedReturnFromDate.flightReturnPageFromDate}, Actual: ${actualReturnFromDate}`)
}

exports.validateTripConfirmationReturnAirlineNumber = async (validateTripType) =>{
  let expectedReturnAirlineNumber = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("returnFlightDetails") : gauge.dataStore.scenarioStore.get("returnFlightDetails");
  let actualReturnAirlineNum = await this.tripConfirmationPageReturnAirlineNum();
  expect(expectedReturnAirlineNumber.flightReturnPageAirlineNum).to.contain(actualReturnAirlineNum, `Invalid Airline Number is showing in ${validateTripType} page, Expected: ${expectedReturnAirlineNumber.flightReturnPageAirlineNum}, Actual: ${actualReturnAirlineNum}`)
}

exports.validateTripConfirmationReturnCabinClass = async (validateTripType) =>{
  let expectedReturnCabinClass = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("departFlightDetails") : gauge.dataStore.scenarioStore.get("departFlightDetails");
  let actualReturnCabinClass = await this.tripConfirmationPageReturnCabinClass();
  expect(actualReturnCabinClass ).to.contain(expectedReturnCabinClass.flightDepartPageCabinClass, `Invalid Cabin Class is showing in ${validateTripType} page, Expected: ${expectedReturnCabinClass.flightReturnPageCabinClass}, Actual: ${actualReturnCabinClass}`)
}

exports.validateSearchMessageIsShown = async (msg) => {
  let message = helper.messageContent(msg);
  await click($(`${departFlightPage.changeLink()}`));
  await click($(`${departFlightPage.searchButon()}`));
  assert.ok (await text(message["msg"]).exists(), `Invalid Message Shown. Expected message: `+ message["msg"])
  gauge.message(`Search button is Disable and Shown Message : `+message["msg"])
}

exports.validateReturnClass = async () =>{
  let tripType = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("tripDetails") : gauge.dataStore.scenarioStore.get("tripDetails");

    switch (tripType.TripType) {
    case "RT": 
      await checkBox({ id: "flightClassCheck0" }).uncheck();
      let leavingClassName = await ($(`${tripPlanner.leavingClassText()}`)).text();
      let returnClassName = await ($(`${tripPlanner.returnClassText()}`)).text();
      assert.strictEqual(leavingClassName, "Class - Leaving")
      assert.strictEqual(returnClassName, "Class - Returning")
      break;
    case "OW":
      let checkFlightClass = await ($(`${tripPlanner.flightClassChecks()}`).isVisible());
      assert.strictEqual(checkFlightClass, false)
      break
    case "MD":
      let checkFlightClassMD = await ($(`${tripPlanner.flightClassChecks()}`).exists());
      assert.strictEqual(checkFlightClassMD, false)
      break;
  }

}

exports.clickValidateSearchSummary = async () =>{
  await click($(`${tripPlanner.validateSearchSummary()}`));
}

exports.departStopCountInTripConfirmation = async () =>{
  let count = (await $(`${tripConfirmationPage.tripConfirmationDepartStopCount()}`).elements()).length;
  return count;
}
exports.returnStopCountInTripConfirmation = async () =>{
  let count = (await $(`${tripConfirmationPage.tripConfirmationReturnStopCount()}`).elements()).length;
  return count;
}

exports.tripPurposeLabel = async () => {
    await ($(`${tripPlanner.additionalInformationLoc()}`).isVisible())
    await dropDown({ id: `${tripPlanner.tripPurposeLoc()}` }).select({ index: 1 });
    await evaluate($(`${tripPlanner.continueCustomFieldsLoc()}`), (elem) => { return elem.click()});
}

exports.selectByPrice = async () => {
  await focus($(`${departFlightPage.viewByButton()}`));
  await click($(`${departFlightPage.viewByButton()}`));
  await evaluate($(`${departFlightPage.viewByPrice()}`), (elem) => {
    return elem.click();
  });
}

exports.defaultPostSearchType = async (searchBy) => {
  var chai = require('chai');
  chai.assert.isFalse(
    await radioButton({
      id: `${tripPlanner.defaultSelectPriceSchdule(searchBy)}`,
    }).isSelected(),
    `Default air search type ${searchBy} is selected`
  );
  gauge.message(`Default air search type ${searchBy} is not selected`);
};
exports.flexfare = async () => {
  await waitFor(5000);
  let flightName = gauge.dataStore.scenarioStore.get("flightFilterDetails");
  let multiFareLength = (await $(`${departFlightPage.fareTier()}`).elements()).length;
  flightName.airline == "WN" ? expect(multiFareLength).to.above(1) : expect(multiFareLength).to.equals(1);
}

exports.selectNonRefundableFlightDepart = async () => {
  await this.clickCollapseFilter();
  await this.clickFareTierDropdown();
  
  await evaluate($(`${departFlightPage.refundableFareTierLoc()}`), (elem) => {
    return elem.click()
  });
  await evaluate($(`${departFlightPage.unrestrictedFareTierLoc()}`), (elem) => {
    return elem.click()
  });
  await evaluate($(`${departFlightPage.basicFareTierLoc()}`), (elem) => {
    return elem.click()
  });
  await this.nonRefundableBadgeSelection();
}
exports.clickCollapseFilter = async () => await click($(`${departFlightPage.clickCollapseFilterLoc()}`));
exports.clickFareTierDropdown = async () => await click($(`${departFlightPage.clickFareTierDropdownLoc()}`));
exports.nonRefundableBadgeSelection = async () => {
  let badgeInfoDepart = {};
  for(var i = 1; i <= 10; i++){
    if(await $(`${departFlightPage.flightBadgeNonRefundable(i)}`).exists(0,0)){
           badgeInfoDepart.nonRefundableBadgeDepart = await $(`${departFlightPage.flightBadgeNonRefundable(i)}`).text();
           await focus($(`${departFlightPage.flightBadgeNonRefundable(i)}`));
           await this.getFareBasisDepart(i);
           await this.getBookingCodeDepart(i);
           break;
         }
  }
  gauge.dataStore.scenarioStore.put("badgeInfoDepart", badgeInfoDepart);
  console.log(badgeInfoDepart);
}
exports.selectNonRefundableFlightReturn = async () => {
  await helper.waitForSpinner();
  await helper.waitForWalkmePlayer();
  let badgeInfoReturn = {};
  for(var i = 1; i <= 10; i++){
    if(await $(`${departFlightPage.flightBadgeNonRefundable(i)}`).exists(0,0)){
           badgeInfoReturn.nonRefundableBadgeReturn = await $(`${departFlightPage.flightBadgeNonRefundable(i)}`).text();
           await focus($(`${departFlightPage.flightBadgeNonRefundable(i)}`));
           await this.getFareBasisReturn(i);
           await this.getBookingCodeReturn(i);
           break;
         }
  }
  gauge.dataStore.scenarioStore.put("badgeInfoReturn", badgeInfoReturn);
  console.log(badgeInfoReturn);
}
exports.selectRefundableFlightDepart = async () => {
  await this.clickCollapseFilter();
  await this.clickFareTierDropdown();
  
  await evaluate($(`${departFlightPage.refundableFareTierLoc()}`), (elem) => {
    return elem.click()
  });
  await evaluate($(`${departFlightPage.standardFareTierLoc()}`), (elem) => {
    return elem.click()
  });
  await evaluate($(`${departFlightPage.basicFareTierLoc()}`), (elem) => {
    return elem.click()
  });
    await this.refundableBadgeSelection();
}
exports.selectRefundableFlightReturn = async () => {
  await helper.waitForSpinner();
  await helper.waitForWalkmePlayer();
  let badgeInfoReturn = {};
  for(var i = 1; i <= 10; i++){
    if(await $(`${departFlightPage.flightBadgeRefundable(i)}`).exists()){
           badgeInfoReturn.refundableBadgeReturn = await $(`${departFlightPage.flightBadgeRefundable(i)}`).text();
           await focus($(`${departFlightPage.flightBadgeRefundable(i)}`));
           await this.getFareBasisReturn(i);
           await this.getBookingCodeReturn(i);
           break;
         }
  }
  gauge.dataStore.scenarioStore.put("badgeInfoReturn", badgeInfoReturn);
  console.log(badgeInfoReturn);
}
exports.refundableBadgeSelection = async () => {
  let badgeInfoDepart = {};
  for(var i = 1; i <= 10; i++){
    if(await $(`${departFlightPage.flightBadgeRefundable(i)}`).exists()){
           badgeInfoDepart.refundableBadgeDepart = await $(`${departFlightPage.flightBadgeRefundable(i)}`).text();
           await focus($(`${departFlightPage.flightBadgeRefundable(i)}`));
           await this.getFareBasisDepart(i);
           await this.getBookingCodeDepart(i);
           break;
         }
  }
  gauge.dataStore.scenarioStore.put("badgeInfoDepart", badgeInfoDepart);
  console.log(badgeInfoDepart);
}
exports.getFareBasisDepart = async (i) => {
  let fareBasisDepart = {};
  console.log(await $(`${departFlightPage.fareBasisLoc(i)}`).text());
  fareBasisDepart.fareBasis = await $(`${departFlightPage.fareBasisLoc(i)}`).text();
  gauge.dataStore.scenarioStore.put("fareBasisDepart", fareBasisDepart);
}
exports.getBookingCodeDepart = async (i) => {
  let bookingCodeDepart = {};
  bookingCodeDepart.bookingCode = await $(`${departFlightPage.bookingCodeLoc(i)}`).text();
  console.log(await $(`${departFlightPage.bookingCodeLoc(i)}`).text());
  gauge.dataStore.scenarioStore.put("bookingCodeDepart", bookingCodeDepart);
}
exports.getFareBasisReturn = async (i) => {
  let fareBasisReturn = {};
  await hover($(`${departFlightPage.hoverFareBasis(i)}`));
  fareBasisReturn.fareBasis = await $(`${departFlightPage.fareBasisLoc(i)}`).text();
  console.log(await $(`${departFlightPage.fareBasisLoc(i)}`).text());
  gauge.dataStore.scenarioStore.put("fareBasisReturn", fareBasisReturn);
}
exports.getBookingCodeReturn = async (i) => {
  let bookingCodeReturn = {};
  bookingCodeReturn.bookingCode = await $(`${departFlightPage.bookingCodeLoc(i)}`).text();
  console.log(await $(`${departFlightPage.bookingCodeLoc(i)}`).text());
  gauge.dataStore.scenarioStore.put("bookingCodeReturn", bookingCodeReturn);
}
exports.clickExpandFilter = async () =>{
  await click($(`${departFlightPage.expandFilter()}`));
}

//Sanity
exports.selectSchedule = async () => {
  await click($(`${tripPlanner.radioOption()}`));  
};

exports.selectChangeReturnFlightOnly = async() => {
  await click($(`${tripPlanner.changeReturnFlightOnly()}`));  
}

exports.getRoundTripFlightDetails = async (table) => {
  let headerValue;
  let dataEntry;
  let flightDetails = {};
  let tripType;
  let returnDate;

  await table.entries(async (entry) => {
    headerValue = Object.keys(entry);
    dataEntry = entry;
  });

  for (var i = 0; i < headerValue.length; i++) {
    switch (headerValue[i]) {
      case "BookingAfterXDays":
 
        returnDate = helper.getFutureDate(
          parseInt(dataEntry[headerValue[i]]) + 4
        );
        tripType === "RT"
          await this.enterReturnDate(returnDate);
          break;
    }
    flightDetails[headerValue[i]] = dataEntry[headerValue[i]];
    process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.put("tripDetails", flightDetails) : 
    gauge.dataStore.scenarioStore.put("tripDetails", flightDetails);
  }
};

exports.enterReturnDate = async (returnDate) => {
  await write(returnDate, $(tripPlanner.returnDateTextBox()));
  await click($(tripPlanner.returnDateTextBox()));
};

exports.selectRoundTripFlights = async () => {
  let flightTripType = process.env.gdsName == "amadeus" ? gauge.dataStore.specStore.get("tripDetails") : gauge.dataStore.scenarioStore.get("tripDetails");
  let title = helper.allPageTitle()
  switch (flightTripType.TripType) {
    case "RT":
      await commonAction.validatePageTitle(title["en-us"]["SelectReturnFlight"])
      await this.returnPageFlightInfo();
      await this.clickSelectFlight();
      await commonAction.priceIncDecAlert()
      break;
    default:
      break;
  }
};