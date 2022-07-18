"use strict";
const { assert } = require("chai");
const { goto, click, $, write, waitFor, scrollTo, scrollDown, focus, evaluate, hover, dropDown, scrollUp,checkBox} = require("taiko");
const EHILocatrs = require('../EHI/EHI_Locators');
const carRental = require('../Locators/car_rental_po');
const tripPlanner_po = require('../Locators/tripPlanner_po');
const helper = require("../helpers/helper.js");
const { expect } = require("chai");


exports.enterUserName = async (username) => await write(username, $(`${EHILocatrs.enterUsername()}`))
exports.gotToTripPlannerPage = async () => {
     await hover($(`${EHILocatrs.homeButton()}`));
     await click($(`${EHILocatrs.travelIcon()}`));
}
exports.checkDelivery = async () => {
     await checkBox({ id: `${EHILocatrs.carPickUpDeliveryAddress()}` }).isChecked() === false && (await checkBox({ id: `${EHILocatrs.carPickUpDeliveryAddress()}` })).check()
}
exports.checkCollection = async () => {
     await checkBox({ id: `${EHILocatrs.carDropOffCollectionAddress()}` }).isChecked() === false && (await checkBox({ id: `${EHILocatrs.carDropOffCollectionAddress()}` })).check()
}
exports.selectDeliveryLocation = async (location) => {
     await click($(`${EHILocatrs.deliveryDropDown()}`));
     let locationList = await $(EHILocatrs.deliveryLocation()).elements().then(ele => (ele.length));
     for (let i = 1; i <= locationList; i++) {
          let loactionName = await $(`${EHILocatrs.deliveryLocation(i)}[${i}]`).text();
          console.log(loactionName);
          loactionName === location && (await click($(`${EHILocatrs.deliveryLocation(i)}[${i}]`)));
     }
}
exports.selectCollectionLocation = async (location) => {
     await click($(`${EHILocatrs.collectionDropDown()}`));
     let locationList = await $(EHILocatrs.collectionLocation()).elements().then(ele => (ele.length));
     for (let i = 1; i <= locationList; i++) {
          let loactionName = await $(`${EHILocatrs.collectionLocation(i)}[${i}]`).text();
          console.log(loactionName);
          loactionName === location && (await click($(`${EHILocatrs.collectionLocation(i)}[${i}]`)));
     }
}
exports.enterCollectionLocation = async () => {
     await write('LHR', $(`${tripPlanner_po.dropoff()}`));
}
exports.enterDeliveryLocation = async () => {
     await write('LHR', $(`${tripPlanner_po.pickup()}`));
}
exports.checkForErrorMessage = async () => {
     await EHILocatrs.errorMessage().isDisplayed() === true && console.log('Error message is displayed');
}

exports.navigateToAccountsPage = async () => {
     await hover($(`${EHILocatrs.mainHeaderMenu()}`));
     await click($(`${EHILocatrs.accountMenuLink()}`));

}
exports.navigateToTravelPreferencesPage = async () => {
     await click($(`${EHILocatrs.travelPreferencesLink()}`));

}
exports.goToTravelPreferencePage = async () => {
     await goto(helper.ehiTravelPreferenceUrl());

}
exports.navigateToTravelPage = async () => {
     await hover($(`${EHILocatrs.mainHeaderMenu()}`));
     await click($(`${EHILocatrs.travelMenuLink()}`));

}
exports.checkIfPopUpExist = async () => {
      return await $(`${EHILocatrs.popUpModal()}`).exists();
}

exports.closePopUpModalIfExist = async () => {
     let popUpExist = await this.checkIfPopUpExist();
     if (popUpExist) await click($(`${EHILocatrs.emeraldClubEnrollmentSkipButton()}`))
}
exports.closePopUpModal = async () => {
      await click($(`${EHILocatrs.emeraldClubEnrollmentSkipButton()}`))
}

exports.validatePopUpModalIsPresent = async (present = true) => {
     await waitFor(3000)
     let isPresent = await this.checkIfPopUpExist();
     assert.equal(present, isPresent, "Pop up modal is present?");
}

exports.validatePopUpModalMessage = async (messageCard) => {
     let messageExpected = helper.messageContent("emeraldClubThankYouContent");
     let actualMessage = await $(`${EHILocatrs.popupMessageContent()}`).text() + " " + await $(`${EHILocatrs.popupAddToProfileMessageContent()}`).text()
     switch (messageCard) {
          case "NoCard":
               assert.equal(actualMessage, messageExpected[messageCard], "Pop up message is as expected for membership suggestion when no card is set?");
               await assert.ok(await $(`${EHILocatrs.deepLinkInPopup()}`).exists(), "Join Now link is present?");
               let actualDeepLink = await evaluate($(`${EHILocatrs.deepLinkInPopup()}`), (elem) => { return elem.getAttribute('href') });
               assert.equal(actualDeepLink.split("ehidirect:")[0], messageExpected["deepLink"], "Pop up message is as expected for membership suggestion when no card is set?");
               break;
          default:
               assert.equal(actualMessage, messageExpected[messageCard], "Pop up message is as expected for membership suggestion of " + messageCard + "?");
               break;
     }

}

exports.clickOnSaveforCarRentalOnProfilePage = async () => {
     await scrollTo($(`${EHILocatrs.carSpecialRequest()}`));
     await scrollUp();
     await focus($(`${EHILocatrs.clickOnSaveOnCar()}`));
     await click($(`${EHILocatrs.clickOnSaveOnCar()}`));
}

exports.clickOnSaveButtonInPopUp = async () => {
     await click($(`${EHILocatrs.emeraldClubEnrollmentSaveButton()}`));
}

exports.clickOnSkipButtonInPopUp = async () => {
     await click($(`${EHILocatrs.emeraldClubEnrollmentSkipButton()}`));
}

exports.addEcNumberAndSave = async (number) => {
     await write(number, $(`${EHILocatrs.emeraldClubNumberFieldInPopUp()}`));
     await this.clickOnSaveButtonInPopUp();
}

exports.validateMembershipSavedForGivenProfile = async (profileType) => {
     await scrollTo($(`${EHILocatrs.clickOnSaveOnCar()}`));
     let alreadyExist = await this.checkIfMembershipExistForGivenProfile(profileType);
     assert.equal(alreadyExist, true, profileType + " Profile has been added as expected?");

}

exports.addGivenProfileInMembership = async (givenProfile) => {
     await this.clickCarMembershipDropdown();
     await this.selectProfileForCarMembershipFromDropDown(givenProfile);
}
exports.clickCarMembershipDropdown = async() =>{
     await scrollTo($(`${EHILocatrs.carSpecialRequest()}`));
     await scrollUp();
     await click($(`${EHILocatrs.xpathIdForCanrentalMembershipDropdown()}`));
     console.log(`Car Membership dropdown clicked`);
 }
 
 exports.selectProfileForCarMembershipFromDropDown = async(givenProfile) =>{ 
      switch(givenProfile){
           case "Enterprise":
               await dropDown({ id: `${EHILocatrs.idCarRentalWithMembershipDropDown()}` }).select("ET");
                break;
          case "National":
               await dropDown({ id: `${EHILocatrs.idCarRentalWithMembershipDropDown()}` }).select("ZL");
               break;
          default:
               break;
      }   
     console.log(`Car Membership dropdown selected for `+ givenProfile);
 }
exports.checkIfMembershipExistForGivenProfile = async (profile) => {
     return await $(`${EHILocatrs.existingCarRentalMemberShipForGivenProfile(profile)}`).exists();
}

exports.addMemberProfile = async (table) => {
     await scrollDown();
     await scrollTo($(`${EHILocatrs.clickOnSaveOnCar()}`));
     let headerValue;
     let dataEntry;
     let carProfile = null;
     await helper.waitForLoaderSvg();
     await helper.waitForSpinner();

     await table.entries(async (entry) => {
          headerValue = Object.keys(entry);
          dataEntry = entry;
     });

     for (var i = 0; i < headerValue.length; i++) {
          let userInputData = dataEntry[headerValue[i]];
          switch (headerValue[i]) {
               case "Rental Company":
                    carProfile = userInputData;
                    await this.addGivenProfileInMembership(userInputData);
                    
                    break;
               case 'Number':
                    await focus($(`${EHILocatrs.carMembershipNumberInputField()}`))
                    await write(userInputData, $(`${EHILocatrs.carMembershipNumberInputField()}`))
                    console.log(`Car Membership Value for profile: ${headerValue[i]}, with given data: ${userInputData}`);
                   
                    break;       
          }

     }

     await focus($(`${EHILocatrs.addButtonInCarRentalMembership()}`))
     await click($(`${EHILocatrs.addButtonInCarRentalMembership()}`))
}


exports.deleteMemberProfile = async (profileType) => {
     await scrollTo($(`${EHILocatrs.carSpecialRequest()}`));
     await focus($(`${EHILocatrs.deleteButtonInCarRentalMembershipForGivenProfile(profileType)}`))
     await click($(`${EHILocatrs.deleteButtonInCarRentalMembershipForGivenProfile(profileType)}`))     
}

exports.checkAndSelectAddress = async (address) => {
     switch(address){
         case "Delivery":
                 await this.checkAndSelectDeliveryAddress();
             break;
         case "Collection":
                 await this.checkAndSelectCollectionAddress()
             break;
         default:
             break;
     }
 }
 
 exports.checkAndSelectDeliveryAddress = async() => {
     await this.clickDeliveryCheckBox()
     await this.clickCarDeliveryAddressSelectBox()
     await this.selectCarFirstDeliveryAddress()
 }

 exports.clickCarDeliveryAddressSelectBox= async () => {
     await click($(`${EHILocatrs.carDeliveryAddressSelectBox()}`)); 
}

exports.clickDeliveryCheckBox = async () => {
     await click($(`${EHILocatrs.carDeliveryCheckbox()}`));
}

exports.selectCarFirstDeliveryAddress = async () => {
     await click($(`${EHILocatrs.carFirstDeliveryAddress()}`)); 
}

 exports.checkAndSelectCollectionAddress = async() => {
     await click($(`${EHILocatrs.carCollectionCheckbox()}`));
     await click($(`${EHILocatrs.carCollectionAddressSelectBox()}`));
     await click($(`${EHILocatrs.carFirstCollectionAddress()}`)); 
 }

exports.validateDeliveryAndCollectionAddress = async () => {
     let expected = gauge.dataStore.scenarioStore.get("addresses")
     let actualDeliveryAddress = await $(`${EHILocatrs.deliveryAddres()}`).text() 
     let actualCollectionAddress = await $(`${EHILocatrs.collectionAddress()}`).text() 
     
     assert.strictEqual(actualDeliveryAddress, expected.carDeliveryAddress, `Car Rental search location not matched, Expected : ${expected.carDeliveryAddress} , Actual :${actualDeliveryAddress}`);
     assert.strictEqual(actualCollectionAddress, expected.carCollectionAddress, `Car Rental search location not matched, Expected : ${expected.carCollectionAddress} , Actual :${actualCollectionAddress}`);
}

exports.getCarDeliveryAddressFromResut = async() => {
     await waitFor(5000);
     let addresses ={}
     addresses.carDeliveryAddress = await $(`${EHILocatrs.deliveryAddres()}`).text() 
     gauge.dataStore.scenarioStore.put("addresses", addresses)
}

exports.getCarCollectionAddressFromResut = async() => {
     let addresses = gauge.dataStore.scenarioStore.get("addresses")
     addresses.carCollectionAddress = await $(`${EHILocatrs.collectionAddress()}`).text() 
     gauge.dataStore.scenarioStore.put("addresses", addresses)
}
exports.clickSelectButton = async() => {
     await waitFor(2000)
     await click ($(`${EHILocatrs.clickSelectButtonLoc()}`));
}

exports.carlistCount = async()=> {
     await helper.waitForLoaderSvg();
     await waitFor(5000)
     let count = (await $(`${EHILocatrs.carListCount()}`).elements()).length;
     console.log("Count:", count)
     for(var i=2; i<count; i++){
          console.log("I:", i)
          await click ($(`${EHILocatrs.carMembershipDeleteBtn()}`));
          await waitFor(3000)
     }
}

exports.clearCarMemeber = async () => {
     if(!await $(`${EHILocatrs.emeraldClubEnrollmentPopup()}`).exists() == true){
          await this.navigateToTravelPreferencesPage();
          await this.carlistCount()
          await this.clickOnSaveforCarRentalOnProfilePage()
          await waitFor(2000)
     }
}
exports.clearExistingCarMember = async() =>{
     let count = (await $(`${EHILocatrs.carListCount()}`).elements()).length;
     if(count > 2){
          for(var i = 2; i<count; i++){
               await click ($(`${EHILocatrs.carMembershipDeleteBtn()}`));
               await waitFor(3000)
          }
          await this.clickOnSaveforCarRentalOnProfilePage()
          await waitFor(3000)
          await this.clickOnSkipButtonInPopUp()
          await this.navigateToTravelPreferencesPage();
     }
}
