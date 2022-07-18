"use strict";
const { goto, click, $, waitFor, write, scrollTo, hover, evaluate } = require("taiko");
const airAction = require("../air_only/air_actions");
const EHILocatrs = require('../EHI/EHI_Locators');
const EHI_Action = require("../EHI/EHI_actions");
const assert = require("assert").strict;
const helper = require("../helpers/helper.js");

step("Select <loactionType> Delivery & collection locations on Trip Planner page", async function (loactionType) {

     
     switch (loactionType) {
          case "Same":
               await EHI_Action.enterDeliveryLocation();
               await EHI_Action.checkCollection();
               await EHI_Action.selectCollectionLocation("Peter Bret Associates, Peter Bret Associate...");
               await airAction.clickSearch();
              // await EHI_Action.checkForErrorMessage();
               break;
          case "Different":
               await EHI_Action.enterCollectionLocation();
               await EHI_Action.checkDelivery();
               await EHI_Action.selectDeliveryLocation("Peter Bret Associates, Peter Bret Associate...");
               await airAction.clickSearch();
              // await EHI_Action.checkForErrorMessage();
               break;
          default:
               break;
     }
});


step("Navigate to Account Page and close pop up", async function () {
     await EHI_Action.navigateToAccountsPage();
     await EHI_Action.closePopUpModal();
  });
  
  step("Navigate to <pageName> Page", async function (pageName) {
      switch (pageName) {
          case "Account":
              await EHI_Action.navigateToAccountsPage();
              break;
          case "Travel Preferences":
              await EHI_Action.navigateToTravelPreferencesPage();
              break;
          case "Travel":
              await EHI_Action.navigateToTravelPage();
              break;
          default:
              break;
      }
   });

step("Click Save on <travelType> membership in profile page", async function (travelType){

     switch(travelType){
          case "Car":
               await EHI_Action.clickOnSaveforCarRentalOnProfilePage();
               break;
          default:
               break;

     }
     
} );

step("Click on <buttonType> button in the pop up", async function (buttonType){

     switch(buttonType){
          case "Save":
               await EHI_Action.clickOnSaveButtonInPopUp();
               break;
          case "Skip":
               await EHI_Action.clickOnSkipButtonInPopUp();
               break;
          default:
               break;

     }
     
} );

step("Validate Emerald Club Enrollment modal for <profiletype> and the pop up message", async function (profiletype){
     await EHI_Action.validatePopUpModalIsPresent();
     await EHI_Action.validatePopUpModalMessage(profiletype);
} );


step("Add EC Number <number> to suggested profile and Save", async function (number){
     await EHI_Action.addEcNumberAndSave(number);
} );


step("Click save EC Number on suggested profile", async function (){
     await EHI_Action.clickOnSaveButtonInPopUp();
} );

step("Validate <profileType> membership", async function (profileType){
     await waitFor(4000)
     switch(profileType){
          case "National and Enterprise":
               await EHI_Action.validateMembershipSavedForGivenProfile("National");
               await EHI_Action.validateMembershipSavedForGivenProfile("Enterprise");
               break;
          case"National":
          case"Enterprise":
               await EHI_Action.validateMembershipSavedForGivenProfile(profileType);
               break;
          default:
               break;
     }
     
});


step("Set Emerald Club membership based on below table data <table>", async function (table) {   
     await EHI_Action.addMemberProfile(table);    
 });

 step("Remove Emerald Club membership for <profileType> profile", async function (profileType) {   
     await EHI_Action.deleteMemberProfile(profileType);    
 });
 
step("Check and Select <arg0> Address", async function(arg0) {
     await EHI_Action.checkAndSelectAddress(arg0)
   });

step("Validate Delivery and Collection address", async function() {
	await EHI_Action.validateDeliveryAndCollectionAddress()
});

step("Get Delivery and Collection address", async function() {
     await helper.waitForLoaderSvg();
     await helper.waitForWalkmePlayer();
     await waitFor(2000)
	await EHI_Action.getCarDeliveryAddressFromResut()
     await EHI_Action.getCarCollectionAddressFromResut()
});

step("Click car rental pick up select button", async function() {
     await helper.waitForLoaderSvg();
     await helper.waitForWalkmePlayer();
	await EHI_Action.clickSelectButton();
});

 step("Validate <arg0> Policy", async function (policy) {
     let carPolicy = await ($(`${EHILocatrs.validatePolicy()}`).exists());

     switch (policy) {
          case "Intermediate":
           assert.strictEqual(false, carPolicy);
           break; 
        case "Economy":
          assert.strictEqual(carPolicy, false);
          break; 
        case "Premium":
          assert.strictEqual(carPolicy, true);
          break;
        case "Standard":
          assert.strictEqual(carPolicy, false);
          break;
        case "Luxury":
          assert.strictEqual(carPolicy, true);
          break;
        case "Full size":
          assert.strictEqual(carPolicy, false);
          break;
        case "Mini":
          assert.strictEqual(carPolicy, false);
          break;
        case "Compact":
          assert.strictEqual(carPolicy, false);
          break;   
          default:
              break;

   }})

 step("Click car rental Drop off select button", async function() {
     await helper.waitForLoaderSvg();
     await helper.waitForWalkmePlayer();
	await EHI_Action.clickSelectButton();
});

step("Check Emerald Club Enrollment if not clear membership", async function() {
	await EHI_Action.clearCarMemeber()
});

step("Clear Membership if available", async function() {
	await EHI_Action.clearExistingCarMember()
});
