"use strict";
const dashboard_po = require ('../Locators/dashboard_po')
const { evaluate,click, $, checkBox, write, toLeftOf,text, clear, dropDown, toRightOf,currentURL, scrollTo,switchTo, radioButton, waitFor, scrollDown, accept, confirm, alert, below, press, hover,openTab, closeTab, attach, focus, fileField, above } = require("taiko");
const helper = require("../helpers/helper");
const globalDashboard = require('../Locators/globalDashboard_po.js');
const commonAction = require('../common/common_actions')
const onboarding = require('../Locators/onboarding_po')
const { assert } = require('chai');
const { expect } = require("chai");
const { password } = require('../Locators/login_po');
const randomText = Math.random().toString(36).substring(7);
const travelPrePage = require("../Locators/travel_preference_po")

exports.addPartner = async () => {
     await click($(`${dashboard_po.addNew()}`));   
}
exports.fillRequiredFields = async () => {
     let paymentCards = helper.partnerData();
     console.log(randomText);
 
     await write(`${paymentCards.PartnerData.SuperDomain}` + randomText, $(`${dashboard_po.superDomainTextBox()}`));
     await write(paymentCards.PartnerData.FullName, $(`${dashboard_po.fullNameTextBox()}`));
     await write(paymentCards.PartnerData.SmallName, $(`${dashboard_po.smallNameTextBox()}`));
     await write(paymentCards.PartnerData.ApplicationTitleLable, $(`${dashboard_po.applicationTitleLebelTextBox()}`));
     await write(paymentCards.PartnerData.WebSiteURL, $(`${dashboard_po.websiteURLTextBox()}`));
     await write(paymentCards.PartnerData.TopLevelDomain, $(`${dashboard_po.topLevelDomainTextBox()}`));
     
     await write(paymentCards.PartnerData.Copyright, $(`${dashboard_po.copyrightTextarea()}`));
     await write(paymentCards.PartnerData.emailReskinColor, $(`${dashboard_po.emailReskinColor()}`));
     await write(paymentCards.PartnerData.termsOfUseHTMLPage, $(`${dashboard_po.termsOfUseTextarea()}`));
     await write(paymentCards.PartnerData.HelpDeskContactName, $(`${dashboard_po.helpDeskContactNameTextBox()}`));
     await write(paymentCards.PartnerData.HelpDeskContactMethod, $(`${dashboard_po.helpDeskContactMethodTextBox()}`));
     await write(paymentCards.PartnerData.EmailSenderDomain, $(`${dashboard_po.emailSenderDomainTextBox()}`));
     await write(paymentCards.PartnerData.TextMessageSenderName, $(`${dashboard_po.TextMessageSenderNameTextBox()}`));
     
     await write(paymentCards.PartnerData.EmailSenderName, $(`${dashboard_po.emailSenderNameTextBox()}`));
     await write(paymentCards.PartnerData.FaxSenderName, $(`${dashboard_po.faxSenderNameTexBox()}`));
     await write(paymentCards.PartnerData.Address1, $(`${dashboard_po.address1Name()}`));
     await write(paymentCards.PartnerData.Address2, $(`${dashboard_po.address2Name()}`));
     
     await checkBox(toLeftOf(text("clustera"))).check();

}
exports.editPartner = async () => {
     await clear($(`${dashboard_po.fullNameTextBox()}`));
}
exports.editAndclickSaveButton = async () => {
     let paymentCards = helper.partnerData();
     await write(paymentCards.PartnerData.FullNametoEdit, $(`${dashboard_po.fullNameTextBox()}`));
     await click($(`${dashboard_po.saveButton()}`));
}
exports.clickSaveButton = async () => {
     await click($(`${dashboard_po.saveButton()}`));
}

exports.addAdminSaveButton = async () => {
     await click($(`${dashboard_po.addAdminSaveButton()}`));
}
exports.searchPartner = async (searchText) => {
     let partner = helper.partnerData();
     await write(`${partner.PartnerData.SuperDomain}` + randomText, $(`${dashboard_po.searchPartnerTextBox()}`));
     await click($(`${dashboard_po.clickGoButton()}`));
}
exports.searchPartnerInChangeTools = async (searchText) => {
     let data = helper.partnerData();
     await write(data.PartnerData.SuperDomain, $(`${dashboard_po.changeToolsSearchTextBox()}`)); 
}
exports.searchSitesInChangeTools = async (searchText) => {
     let data = helper.partnerData();
     await write(data.PartnerData.SuperDomain, $(`${dashboard_po.changeToolsSearchTextBox()}`));
     await click($(`${dashboard_po.changeToolsGoButton()}`));
}
exports.clickGoPartner = async () => {
     await click($(`${dashboard_po.clickGoPartner()}`));
}
exports.verifyPartnerCreated = async () => {
     let partner = helper.partnerData();
     let partnerID = await $( `${dashboard_po.partnerID(`${partner.PartnerData.SuperDomain.toUpperCase()}`+randomText.toUpperCase())}`).text();
     assert.equal(partnerID, partner.PartnerData.SuperDomain.toUpperCase()+randomText.toUpperCase(),"Partner Not Created.....");
}
exports.clickGlobalSettings = async (settingName) => {
     await click($(`${dashboard_po.globalSettings()}`));
     let partnerSettingsLength;
     let settingsText;
     partnerSettingsLength = await $(`${dashboard_po.partnerSettingsOptions()}`).elements().then(elem => elem.length);
     for (let i = 1; i < partnerSettingsLength; i++) {
          settingsText = await $(`${dashboard_po.partnerSettingsOptions()}[${i}]`).text();
          settingsText === settingName && (await click($(`${dashboard_po.partnerSettingsOptions()}[${i}]`)));
          break;
     }
}
exports.verifyTheEditedData = async () => {
     let paymentCards = helper.partnerData();
     let editedText = await evaluate($(`${dashboard_po.fullNameTextBox()}`), (elem) => { return elem.getAttribute('value') });
     expect(editedText).contain(paymentCards.PartnerData.FullNametoEdit , `Data is not edited ,Expected :${paymentCards.PartnerData.FullNametoEdit}, Actual : ${editedText}`); 
}
     
exports.changeTool = async () => {
     await click($(`${globalDashboard.changeToolsLoc()}`));
}
exports.siteName = async(site) => {
     await write(site, $(`${globalDashboard.siteNameLoc()}`));
}
exports.clickGo = async() => {
     await click($(`${globalDashboard.clickGoLoc()}`));
}
exports.clickSettings = async() => {
     let actualSettingText = await $(`${globalDashboard.clickSettingsLoc()}`).text()
     let expectSettingText = helper.messageContent("Settings");
     assert.strictEqual(actualSettingText, expectSettingText.setting, `Validation successful. Expected: ${expectSettingText.setting} and Actual: ${actualSettingText}`) 
     gauge.message(`Expected: ${expectSettingText.setting} and Actual: ${actualSettingText}`)
     await click($(`${globalDashboard.clickSettingsLoc()}`));
}
exports.clickTab = async(tabName) => {
     await click($(`${globalDashboard.clickTabLoc(tabName)}`));
}
exports.clickAddUser = async() => {
     await click($(`${globalDashboard.clickAddUserLoc()}`));
}
exports.clickSupportAccCheckboxToCreate = async() => {
     await click($(`${globalDashboard.clickSupportAccCheckboxLoc()}`));
}
exports.enterUserNameToCreate = async() => {
     await gauge.dataStore.scenarioStore.put('userNameDashboard', "AutoUser" + Math.random().toString(36).substring(7)+ "@deem.com");
     await write(gauge.dataStore.scenarioStore.get('userNameDashboard'), $(`${globalDashboard.enterUserNameLoc()}`));
}
exports.enterExternalIdToCreate = async() => {
     await gauge.dataStore.scenarioStore.put('externalIdDashboard', "extIdAut" + Math.random().toString(36).substring(7)+ "@deem.com");
     await write(gauge.dataStore.scenarioStore.get('externalIdDashboard'), $(`${globalDashboard.enterExternalIdLoc()}`));
}
exports.enterEmailToCreate = async() => {
     await gauge.dataStore.scenarioStore.put('emailIdDashboard', "autoEmail" + Math.random().toString(36).substring(7));
     await write(gauge.dataStore.scenarioStore.get('emailIdDashboard')+'@deem.com', $(`${globalDashboard.enterEmailLoc()}`));
}
exports.enterFirstNameToCreate = async() => {
     await gauge.dataStore.scenarioStore.put('fName', "FN" + Math.random().toString(36).substring(7));
     await write(gauge.dataStore.scenarioStore.get('fName'), $(`${globalDashboard.enterFirstNameLoc()}`));
}
exports.enterLastNameToCreate = async() => {
     await gauge.dataStore.scenarioStore.put('lName', "LN" + Math.random().toString(36).substring(7));
     await write(gauge.dataStore.scenarioStore.get('lName'), $(`${globalDashboard.enterLastNameLoc()}`));
}
exports.clickSiteAdministratorToCreate = async() => {
     await click($(`${globalDashboard.clickSiteAdministratorLoc()}`));
}
exports.clickActivateAccountToCreate = async() => {
     await click($(`${globalDashboard.clickActivateAccountLoc()}`));
}
exports.clickSaveUserButtonToCreate = async() => {
     await click($(`${globalDashboard.clickSaveUserButtonLoc()}`));
}
exports.clickPartnerIDLink = async () => {
     let data = helper.partnerData();
     await click($(`${globalDashboard.clickPartnerIDLinkLoc(data.PartnerData.SuperDomain.toUpperCase())}`));
    
}
exports.clickPartnersTabInChangeTools = async () => {
     await click($(`${globalDashboard.clickPartnersTabInChangeToolsLoc()}`));
}
exports.validateSiteCreation = async () => {
     let siteData = await gauge.dataStore.scenarioStore.get('siteData')
     let siteId = await ($(`${globalDashboard.sitIdList()}`)).text()
     let siteIdHerf = await evaluate($(`${globalDashboard.sitIdNumber(siteData.siteID)}`), (elem) => { return elem.getAttribute('href') });
     let spilter = "https://console.deemstage3.com/globalcfg/sitedashboard/sitedashboard.do?siteId="
     siteData.siteIDNumber = siteIdHerf.replace(spilter,'')
     assert.equal(siteId, siteData.siteID,`Site is not created, Expected : ${siteData.siteID} ,Actual :${siteId}`);
     await gauge.dataStore.scenarioStore.put('siteData',siteData)
}
exports.createUserValidation = async () => {
     let txtValidation;
     txtValidation = await $(`${globalDashboard.clickAddUserLoc()}`).text();
     return txtValidation;
}

exports.searchSite = async () => {
     let siteData = await gauge.dataStore.scenarioStore.get('siteData')
     await write(siteData.siteID, $(`${globalDashboard.searchForSite()}`)); 
}

exports.goButtonInSiteSearch = async () => {
     await click($(`${globalDashboard.goButtonInSiteSearch()}`));
}
exports.clickAddNewSite = async () => {
     await click($(`${globalDashboard.addNewSiteLink()}`));
}
exports.enterDomainCreationDetails = async () => {
     let data = helper.partnerData();
     let siteData={}
     siteData.siteID = data.SiteData.SiteID + Math.random().toString(36).substring(10);
     siteData.companyName = data.SiteData.CompanyName + Math.random().toString(36).substring(10);
     await gauge.dataStore.scenarioStore.put('siteData', siteData)

     await write(siteData.companyName, $(`${globalDashboard.companyName()}`));
     await write(siteData.siteID, $(`${globalDashboard.siteIDSite()}`));
     await click ($(`${globalDashboard.domainURL()}`));
     await dropDown({ name: `${globalDashboard.topLevelDomain()}` }).select(data.SiteData.topLevelDomain);
     await dropDown({ name: `${globalDashboard.countryDropDown()}` }).select(data.SiteData.Country);
     await write(data.SiteData.NumberOfEmployee, $(`${globalDashboard.noOfEmployee()}`));
     await dropDown({ name: `${globalDashboard.indrustryDropdown()}` }).select(data.SiteData.Indrustry);
     await dropDown({ name: `${globalDashboard.companyUsageTypeDropDown()}` }).select(data.SiteData.CompanyUsageType);
     
     await write(data.SiteData.StreetName, $(`${globalDashboard.streetAddresses()}`));
     await write(data.SiteData.City, $(`${globalDashboard.cityAddressLoc()}`));
     await write(data.SiteData.State, $(`${globalDashboard.stateDropDown()}`));
     
     await write(data.SiteData.PhoneNumber, $(`${globalDashboard.phoneNumberLoc()}`));
     await write(data.SiteData.ZipCode, $(`${globalDashboard.postalCode()}`));
}
exports.clickNewDashboardAdmin = async () => {
     await click($(`${globalDashboard.newDashboardAdmin()}`));
}
exports.clickManageDashboardAdmin = async () => {
     await click($(`${globalDashboard.newManageDashboardAdmin()}`));
}
exports.enterAdminDetails = async () => {
     let data = await helper.partnerData();
     await write(data.Admin.FirstName, $(`${globalDashboard.firstNameTextBoxAU()}`));
     await write(data.Admin.UserName + randomText, $(`${globalDashboard.userNameTextBoxAU()}`));
     await write(data.Admin.LastName, $(`${globalDashboard.lastNameTextBoxAU()}`));
     await write(data.Admin.Email, $(`${globalDashboard.emailTextBoxAU()}`));
     await write(data.Admin.Password, $(`${globalDashboard.passwordTextBoxAU()}`));
     await write(data.Admin.ConfirmPassword, $(`${globalDashboard.confirmPasswordTextBoxAU()}`));
     await click($(`${globalDashboard.globalCheckBox()}`));
     await click($(`${globalDashboard.roleID()}`));
     await click($(`${globalDashboard.addRole()}`));
     await click($(`${globalDashboard.superDomainAdminCheckBox()}`));

     await click($(`${globalDashboard.superDomain()}`));
     await click($(`${globalDashboard.addSuperDomain(3)}`));
     await click($(`${globalDashboard.superDomainRole()}`));
     await click($(`${globalDashboard.addSuperDomain(5)}`));

     await click($(`${globalDashboard.domainAdmin()}`));
     await click($(`${globalDashboard.domainAdminRadioBtn()}`));

     await click($(`${globalDashboard.domainRoles()}`));
     await click($(`${globalDashboard.addDomainRoles()}`));
     
 }
exports.searchAdminDashboard = async () => {
     let data = await helper.partnerData();
     await write(data.Admin.UserName,$(globalDashboard.usernameSearchBox()));
}
exports.ClickSearchButton = async () => {
     await click($(globalDashboard.searchButton()));
}
exports.selectUsersOvervirw = async (optionName) => {
    let tabLength = await $(`${dashboard_po.userOverviewOptions()}`).elements().then(elem =>  elem.length);
     for (let i = 1; i < tabLength; i++){
          let optionText = await $(`${dashboard_po.userOverviewOptions()}[${i}]`).text();
          console.log(optionText)
          if (optionText === optionName) {
               await evaluate($(`${dashboard_po.userOverviewOptions()}[${i}]`), (elem) => {
                    return elem.click();
                  });
               break;
         }   
     }
}
exports.enternewUSerName = async () => {
     let data = helper.partnerData();
     await write(data.NewUser.UserName,$(globalDashboard.adduserNameTextBox()));
}

exports.enternewEmail = async () => {
     let data = helper.partnerData();
     await write(data.NewUser.Email,$(globalDashboard.emailTextBox()));
}
exports.enterNewFirstName = async () => {
     let data = helper.partnerData();
     await write(data.NewUser.FirstName,$(globalDashboard.firstNameTextBox()));
}
exports.enterNewLastName = async () => {
     let data = helper.partnerData();
     await write(data.NewUser.LastName,$(globalDashboard.lastNameTextBox()));
}
exports.searchByUserName = async () => {
     let data = helper.partnerData();
    await write(data.Admin.UserName,$(globalDashboard.searchCriteriaUserNameTextBox()));
}
exports.searchByFirstName = async () => {
     let data = helper.partnerData();
    await write(data.Admin.FirstName,$(globalDashboard.searchCriteriaFirstNameTextBox()));
}
exports.clickUserfromSearchResult = async () => {
     await click($(globalDashboard.searchResult()));
}
exports.clickSignOut = async () => {
     await click($(globalDashboard.signOut()));
}
exports.loginWithNewUser = async () => {
     let data = helper.partnerData();
     await commonAction.enterUserName(data.NewUser.UserName);
     await commonAction.enterPassword(data.NewUser.Password);
     await commonAction.clickSignIn();
}
exports.clickContinueButton = async () => {
     await click($(globalDashboard.continueButton()));
}
exports.clickAddButton = async () => {
     await click($(globalDashboard.addButton()));
}
exports.clickDeactivateButton = async () => {
     await click($(globalDashboard.deactivateButton()));
}
exports.clickSendRemiderNowButton = async () => {
     await click($(globalDashboard.sendReminderNow())); 
}
exports.fillClusters = async () => {
     let data = helper.partnerData();
     await write(data.ClusterValues.valueOne,$(globalDashboard.clustera()));
     await write(data.ClusterValues.valuetwo,$(globalDashboard.clusterb()));
}
exports.editFullName = async () => {
     let data = helper.partnerData();
     await clear($(globalDashboard.partnerFullName()));
     await write(data.PartnerData.FullNametoEdit,$(globalDashboard.partnerFullName()));
}
exports.clickBackToOverviewPage = async () => {
     await click($(globalDashboard.backToOverviewPage()));
}
exports.clickSearchedUser = async () => {
     await click($(globalDashboard.searchedResult()));
}
exports.switchtoNewTab = async () => {
     await switchTo(/deemstage3.com/)
     let url = await currentURL();
     assert.ok(url.includes("deemstage3.com"),"Url doesn't include deemstage3.com");
}
exports.addANewGroup = async () => {
     await click($(globalDashboard.addANewGroupLoc()));
}
exports.typeGroupName = async () => {
     await gauge.dataStore.scenarioStore.put('groupName', "AutomationGroup " + Math.random().toString(36).substring(7));
     await write(gauge.dataStore.scenarioStore.get('groupName'), $(globalDashboard.typeGroupNameLoc()));
}
exports.clickServiceRules = async () => {
     await click($(globalDashboard.clickServiceRulesLoc()));
}
exports.typeUserName = async () => {
     await write("Shree" ,$(globalDashboard.typeUserNameLoc()));
}
exports.clickSaveGroupButton = async () => {
     await click($(globalDashboard.clickSaveGroupButtonLoc()));
}
exports.validateGroupName = async() => {
     assert.ok((await text(gauge.dataStore.scenarioStore.get('groupName')).exists()), `Group Name not found`)
}
exports.clickEditUserName = async () => {
     await click($(`${globalDashboard.clickEditUserNameLoc()}`));
}
exports.enterUserNameToEdit = async() => {
     await write(gauge.dataStore.scenarioStore.get('userNameDashboard'), $(`${globalDashboard.enterUserNameToEditLoc()}`));
}
exports.clickSearchToFindUser = async () => {
     await click($(`${globalDashboard.clickSearchToFindUserLoc()}`));
}
exports.clickUserNameToEdit = async () => {
     await click(gauge.dataStore.scenarioStore.get('fName'), toLeftOf(gauge.dataStore.scenarioStore.get('userNameDashboard')));
}
exports.clickPersonalAndEmployeeInfo = async () => {
     await click($(`${globalDashboard.clickPersonalAndEmployeeInfoLoc()}`));
}
exports.clickTravel = async () => {
     await click($(`${globalDashboard.clickTravel()}`));
}
exports.updateUserName = async () => {
     await clear($(`${globalDashboard.updateUserNameLoc()}`));
     await write(gauge.dataStore.scenarioStore.get('userNameDashboard')+'Edited' ,$(`${globalDashboard.updateUserNameLoc()}`));
}
exports.updateFirstName = async () => {
     await clear($(`${globalDashboard.updateFirstNameLoc()}`));
     await write(gauge.dataStore.scenarioStore.get('fName')+'Edited' ,$(`${globalDashboard.updateFirstNameLoc()}`));
}
exports.updateLastName = async () => {
     await clear($(`${globalDashboard.updateLastNameLoc()}`));
     await write(gauge.dataStore.scenarioStore.get('lName')+'Edited' ,$(`${globalDashboard.updateLastNameLoc()}`));
}
exports.updateExternalId = async () => {
     await clear($(`${globalDashboard.updateExternalIdLoc()}`));
     await write(gauge.dataStore.scenarioStore.get('externalIdDashboard')+'Edited' ,$(`${globalDashboard.updateExternalIdLoc()}`));
}
exports.clickUpdateButton = async () => {
     await click($(`${globalDashboard.clickUpdateButtonLoc()}`));
}
exports.clickSupportInformation = async () => {
     await click($(`${globalDashboard.clickSupportInformationLoc()}`));
}
exports.validateSupportInformationPage = async () => {
     await scrollTo(gauge.dataStore.scenarioStore.get('fName'));
     await scrollTo(gauge.dataStore.scenarioStore.get('lName'));
     await scrollTo(gauge.dataStore.scenarioStore.get('emailIdDashboard'));
     await scrollTo(gauge.dataStore.scenarioStore.get('userNameDashboard'));
}
exports.clickAccountPermissions = async () => {
     await click($(`${globalDashboard.clickAccountPermissionsLoc()}`));
}
exports.validateSupportRadioButton = async () => {
     await radioButton({ name: `${globalDashboard.supportRadioButtonSelectedLoc()}`}).isSelected();
}
exports.clickAddressPhoneNumbers = async () => {
     await click($(`${globalDashboard.clickAddressesPhoneNumbersLoc()}`));
}
exports.clickEmergencyContact = async () => {
     await click($(`${globalDashboard.clickEmergencyContactLoc()}`));
}
exports.clickPaymentCards = async () => {
     await click($(`${globalDashboard.clickPaymentCardsLoc()}`));
}
exports.clickDelegates = async () => {
     await click($(`${globalDashboard.clickDelegatesLoc()}`));
}
exports.clickDisplaySettings = async () => {
     await click($(`${globalDashboard.clickDisplaySettingsLoc()}`));
}
exports.validateFNameLNamePaymentCards = async () => {
     await scrollTo(gauge.dataStore.scenarioStore.get('fName'));
     await scrollTo(gauge.dataStore.scenarioStore.get('lName'));
}
exports.validateEditedDetailsInAddressesPhoneNumber = async () => {
     let userDetails = helper.guestUserDetails('User');
     await scrollTo(userDetails['street']);
     await scrollTo(userDetails['city']);
     await scrollTo(userDetails['state']);
     await scrollTo(userDetails['postalCode']);
     let streetNameHouse = await evaluate($(`${globalDashboard.enterStreetAddPhNoHome()}`),(elem) => {return elem.getAttribute('value')});
     console.log(streetNameHouse, "streetName");
     console.log(userDetails['street'], "json street name");
     assert.strictEqual(userDetails['street'], streetNameHouse, "Street name did not match");
     let cityNameHouse = await evaluate($(`${globalDashboard.enterCityAddPhNoHome()}`),(elem) => {return elem.getAttribute('value')});
     console.log(cityNameHouse)
     assert.strictEqual(userDetails['city'], cityNameHouse, "City name did not match");
     let zipCodeHouse = await evaluate($(`${globalDashboard.enterZipCodeAddPhNoHome()}`),(elem) => {return elem.getAttribute('value')});
     console.log(zipCodeHouse)
     assert.strictEqual(userDetails['postalCode'], zipCodeHouse, "Zip Code name did not match");
}
exports.validateEditedUserName = async () => {
     await scrollTo(gauge.dataStore.scenarioStore.get('userNameDashboard')+'Edited');    
}
exports.validateEditedFirstName = async ()=> {
     await scrollTo(gauge.dataStore.scenarioStore.get('fName')+'Edited');    
}
exports.validateEditedLastName = async ()=> {
     await scrollTo(gauge.dataStore.scenarioStore.get('lName')+'Edited');    
}
exports.validateEditedExternalId = async () => {
     await scrollTo(gauge.dataStore.scenarioStore.get('externalIdDashboard')+'Edited');    
}
exports.enterValidDetailsAddPhNo = async () => {
     let userDetails = helper.guestUserDetails('User');
     await write(userDetails['street'] ,$(`${globalDashboard.enterStreetAddPhNoBSN()}`));
     await write(userDetails['city'] ,$(`${globalDashboard.enterCityAddPhNoBSN()}`));
     await dropDown({id: `${globalDashboard.selectStateAddPhNoBSN()}` }).select(userDetails['state']);
     await write(userDetails['postalCode'] ,$(`${globalDashboard.enterZipCodeAddPhNoBSN()}`));
     await write(userDetails['street'] ,$(`${globalDashboard.enterStreetAddPhNoHome()}`));
     await write(userDetails['city'] ,$(`${globalDashboard.enterCityAddPhNoHome()}`));
     await dropDown({id: `${globalDashboard.selectStateAddPhNoHome()}` }).select(userDetails['state']);
     await write(userDetails['postalCode'] ,$(`${globalDashboard.enterZipCodeAddPhNoHome()}`));
     await click($(`${globalDashboard.clickSaveButtonLoc()}`));
}
exports.validateEmailInAddressesPhoneNumber = async () => {
     await scrollTo(gauge.dataStore.scenarioStore.get('emailIdDashboard'));
}
exports.clickConfigurationsForGroups = async () => {
     await click($(`${globalDashboard.clickConfigurationsForGroupsLink()}`));
}
exports.clickaddANewConfiguration = async () => {
     await click($(`${globalDashboard.addANewConfiguration()}`));
}
exports.fillNewConfiguration = async () => {
     await gauge.dataStore.scenarioStore.put('carService', "carService" + Math.random().toString(36).substring(7));
     await write(gauge.dataStore.scenarioStore.get('carService'), $(`${globalDashboard.configurationName()}`));
     await click($(`${globalDashboard.enableGroundTravel()}`));
     await gauge.dataStore.scenarioStore.put('code', "C" + Math.random().toString(36).substring(7));
     await write(gauge.dataStore.scenarioStore.get('code'), $(`${globalDashboard.companyCode()}`));
}
exports.ValidateConfigurationsForGroups = async () =>{
    await scrollTo(gauge.dataStore.scenarioStore.get('carService'));
}
exports.addAgency = async () => {
     let data = helper.partnerData();
     await write(data.AgencySetting.settingName, $(globalDashboard.agencySettingName()));
     await click($(`${globalDashboard.gdsLoc()}`));
     await press("ArrowDown");
     await press("ArrowDown");
     await press("ArrowDown");
     await press("ArrowDown");
     await press("Enter");
     await dropDown({ name: `${globalDashboard.TAGroup()}` }).select(data.AgencySetting.TAGroup);
     await write(data.AgencySetting.pseudoCityCode, $(globalDashboard.pseudoCityCode()));
     await write(data.AgencySetting.defaultQueue, $(globalDashboard.defaultQueue()));
     await write(data.AgencySetting.salesLocation, $(globalDashboard.salesLocation())); 
     await write(data.AgencySetting.agencyName, $(globalDashboard.agencyName()));
     await write(data.AgencySetting.arcNumber, $(globalDashboard.arcNumber()));
     await write(data.AgencySetting.iataNumber, $(globalDashboard.iataNumber()));
     await write(data.AgencySetting.streetAddress, $(globalDashboard.streetAddress()));
     await write(data.AgencySetting.city, $(globalDashboard.city()));
     await dropDown({id: `${globalDashboard.stateCode()}` }).select(data.AgencySetting.stateCode );
     await write(data.AgencySetting.zipCode, $(globalDashboard.zipCode())); 
     await dropDown({ name: `${globalDashboard.timeZone()}` }).select(data.AgencySetting.timeZone);
     await write(data.AgencySetting.contactName, $(globalDashboard.contactName()));
     await write(data.AgencySetting.contactTitle, $(globalDashboard.contactTitle()));
     await write(data.AgencySetting.contactPhoneNumber, $(globalDashboard.contactPhoneNumber()));
     await write(data.AgencySetting.contactEmail, $(globalDashboard.contactEmail()));

     await dropDown({ id: `${globalDashboard.domesticCountriesList()}` }).select(data.AgencySetting.domesticCountriesList);
     await click($(`${globalDashboard.Add()}`));

     await write(data.AgencySetting.railChannel, $(globalDashboard.railChannel()));
     await write(data.AgencySetting.railAgencyIdentifier, $(globalDashboard.railAgencyIdentifier()));
     await write(data.AgencySetting.railCustomerIdentifier, $(globalDashboard.railCustomerIdentifier()));
}
exports.agencySetting = async () => {
     await click($(`${globalDashboard.agencySetting()}`));
}
exports.travelAgency = async () => {
     await click($(`${globalDashboard.travelAgency()}`));
}
exports.addANewAgencySetting = async () => {
     await click($(`${globalDashboard.addANewAgencySetting()}`));
}
exports.agencySaveBtn = async () => {
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.serviceSaveBtn = async () => {
     await click($(`${globalDashboard.serviceSaveBtn()}`));
}
exports.editEmercyContact = async () => {
     let userDetails = helper.guestUserDetails('User');
     await write(userDetails['firstName'],$(`${globalDashboard.fullNameEmergencyContactLOC()}`));
     await write(userDetails['street'] ,$(`${globalDashboard.streetAddressEmergencyContactLoc()}`));
     await write(userDetails['city'] ,$(`${globalDashboard.cityEmergencyContactLoc()}`));
     await dropDown({id: `${globalDashboard.stateEmergencyContactLoc()}`}).select(userDetails['state']);
     await write(userDetails['postalCode'] ,$(`${globalDashboard.zipCodeEmergencyContactLoc()}`));
     await click($(`${globalDashboard.clickSaveButtonLoc()}`));
}
exports.clickAddPaymentCard = async () => {
     await click($(`${globalDashboard.clickAddPaymentCardLoc()}`))
}
exports.editDetailsOfPaymentCard = async () => {
     let userDetails = helper.guestUserDetails('User');
     let cardDetails = helper.otfopDetails('VisaCard');
     await write(cardDetails['carHolderName'] ,$(`${globalDashboard.nameOfCardPaymentLoc()}`));
     await dropDown({name: `${globalDashboard.cardTypePaymentLoc()}`}).select(cardDetails['cardType']);
     await write(cardDetails['cardNumber'] ,$(`${globalDashboard.carNumberPaymentLoc()}`));
     await dropDown({name: `${globalDashboard.expirationYearPaymentLoc()}`}).select(cardDetails['expiry']);
     await clear($(`${globalDashboard.cardHoldersNamePaymentLoc()}`));
     await write(userDetails['street'] ,$(`${globalDashboard.streetPaymentLoc()}`));
     await write(cardDetails['carHolderName'], $(`${globalDashboard.cardHoldersNamePaymentLoc()}`));
     await write(userDetails['city'] ,$(`${globalDashboard.cityPaymentLoc()}`));
     await dropDown({id: `${globalDashboard.statePaymentLoc()}`}).select(userDetails['state']);
     await write(userDetails['postalCode'] ,$(`${globalDashboard.zipCodePaymentLoc()}`));
     await click($(`${globalDashboard.clickSaveButtonLoc()}`));
}
exports.clickAddADelegate = async () => {
     await click($(`${globalDashboard.clickAddADelegateLoc()}`));
}
exports.clickBecomeADelegate = async () => {
     await click($(`${globalDashboard.clickBecomeADelegateLoc()}`));
}
exports.enterEmailAddressDelegate = async (email) => {
     await write(email, $(`${globalDashboard.enterEmailAddressDelegateLoc()}`));
     gauge.dataStore.scenarioStore.put('emailForValidation', email);
}
exports.validateEmailDelegate = async(email)=> {
     let emailvalidation = await $(`${globalDashboard.validateEmailDelegateLoc()}`).text();
     assert.strictEqual(email, emailvalidation, "Email validation failed"); 
}
exports.validateEmailDelegateAccess = async()=> {
     let emailToValidate = gauge.dataStore.scenarioStore.get('emailForValidation');
     let emailValidation = await $(`${globalDashboard.validateEmailDelegateAccessLoc()}`).text();
     assert.strictEqual(emailToValidate, emailValidation, "Email validation failed");
}
exports.deleteEmailDelegateAccess = async() =>{
     await click($(`${globalDashboard.deleteEmailDelegateAccessLoc()}`));
}
exports.clickSelectButton = async () => {
     await click($(`${globalDashboard.clickSaveButtonLoc()}`))
}
exports.clickTravelPolicyLink = async() => {
     await click($(`${globalDashboard.clickTravelPolicyLinkLoc()}`));
}
exports.clickPolicyListLink = async() => {
     await click($(`${globalDashboard.clickPolicyListLinkLoc()}`));
}
exports.clickAddANewTravelPolicyLink = async() => {
     await click($(`${globalDashboard.clickAddANewTravelPolicyLinkLoc()}`));
}
exports.enterPolicyName = async (service) => {
     let policyName = helper.partnerData();
     await gauge.dataStore.scenarioStore.put('serviceName', "Automation" + Math.random().toString(36).substring(7));
     switch (service){
          case "policy":    
               await write(gauge.dataStore.scenarioStore.get('serviceName'), $(`${globalDashboard.enterPolicyNameLoc()}`));
               await write(policyName.PolicyList.flightPoliy, $(`${globalDashboard.enterFlightPolicyLoc()}`));
               await click ($(`${globalDashboard.flightCarLoc()}`));
               break;
          case "display configuration":
               await write(gauge.dataStore.scenarioStore.get('serviceName'), $(`${globalDashboard.enterConfigurationNameLoc()}`));
               break;
          case "compliance codes":
               await write(gauge.dataStore.scenarioStore.get('serviceName'), $(`${globalDashboard.enterComplianceCodeLoc()}`));
               await write(policyName.PolicyList.name, $(`${globalDashboard.enterDisplayReasonTextLoc()}`));
               break;
          case "Custom fields collection":
               await write(gauge.dataStore.scenarioStore.get('serviceName'), $(`${globalDashboard.enterCollectionNameLoc()}`));
               await click($(`${globalDashboard.agencySaveBtn()}`));
               await click(gauge.dataStore.scenarioStore.get('serviceName'));
               await click($(`${globalDashboard.clickAddANewCustomFieldsLoc()}`));
               await write(gauge.dataStore.scenarioStore.get('serviceName'), $(`${globalDashboard.enterFieldNameLoc()}`))
               break;
          default:
               break;

     }
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.editList = async (service) => {
     let policyNameEdit = gauge.dataStore.scenarioStore.get('serviceName');
     await gauge.dataStore.scenarioStore.put('editedServiceName', "AutoEdit" + Math.random().toString(36).substring(7));
     await click(policyNameEdit);
     await waitFor(2000);
     switch (service) {
          case "policy":
               await write(gauge.dataStore.scenarioStore.get('editedServiceName'), $(`${globalDashboard.enterPolicyNameLoc()}`));
               break;
          case "display configuration":
               await write(gauge.dataStore.scenarioStore.get('editedServiceName'), $(`${globalDashboard.enterConfigurationNameLoc()}`));
               break;
          case "compliance code":
               await write(gauge.dataStore.scenarioStore.get('editedServiceName'), $(`${globalDashboard.enterComplianceCodeLoc()}`));
               break;
          case "custom field":
               await click(policyNameEdit, below(policyNameEdit));
               await write(gauge.dataStore.scenarioStore.get('editedServiceName'), $(`${globalDashboard.enterFieldNameLoc()}`));
               break;
          default:
               break;
     }
     await click($(`${globalDashboard.agencySaveBtn()}`));
}

exports.editPolicyName = async () => {
     let policyName = helper.partnerData();
     let policyNameEdit = gauge.dataStore.scenarioStore.get('policyName');
     await click(policyNameEdit);
     await click($(`${globalDashboard.enterPolicyNameLoc()}`));
     await write(policyName.PolicyList.editPolicyName, $(`${globalDashboard.enterPolicyNameLoc()}`));
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.deletePolicyName = async () => {
     let firstService = await gauge.dataStore.scenarioStore.get('serviceName');
     let editService = await gauge.dataStore.scenarioStore.get('editedServiceName');
     let fullService = editService + firstService;
	await confirm(`Remove definition for '${fullService}' ?`, async () => await accept());
     await click($(`${globalDashboard.deleteIconLoc()}`), toRightOf(fullService));
}
exports.clickDisplayConfigurationLink = async() => {
     await click($(`${globalDashboard.clickDisplayConfigurationLinkLoc()}`));
}
exports.clickAddANewDisplayConfigurationLink = async() => {
     await click($(`${globalDashboard.clickAddANewTravelPolicyLinkLoc()}`));
}
exports.clickDisplayConfigurationListLink = async () => {
     await click($(`${globalDashboard.clickPolicyListLinkLoc()}`));
}
exports.clickComplianceCodesLink = async () => {
     await click($(`${globalDashboard.clickComplianceCodesLinkLoc()}`));
}
exports.clickserviceRules = async () => {
     await click($(`${globalDashboard.serviceRules()}`));
}
exports.clickAddEditRulesInGroup = async () => {
     await click($(`${globalDashboard.addEditRulesInGroup(gauge.dataStore.scenarioStore.get('groupName'))}`));
}
exports.editServicerulesLink = async () => {
     await click($(`${globalDashboard.editServiceRulesLinkLoc()}`), toRightOf(gauge.dataStore.scenarioStore.get('groupName')));
}

exports.clickComplianceCodesListLink = async () => {
     await click($(`${globalDashboard.clickPolicyListLinkLoc()}`));
}
exports.enterComplianceCode = async() => {
     let complianceCode = helper.partnerData();
     await write(complianceCode.ComplianceCodesList.name, $(`${globalDashboard.enterComplianceCodeLoc()}`));
     gauge.dataStore.scenarioStore.put('ComplianceCode', complianceCode.ComplianceCodesList.name);
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.editComplianceCode = async () => {
     let complianceCode = helper.partnerData();
     let complianceCodeEdit = gauge.dataStore.scenarioStore.get('ComplianceCode');
     await click(complianceCodeEdit);
     await clear($(`${globalDashboard.enterComplianceCodeLoc()}`));
     await write(complianceCode.ComplianceCodesList.editComplianceCodesName, $(`${globalDashboard.enterComplianceCodeLoc()}`));
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.clickCustomFieldsLink = async () => {
     await click($(`${globalDashboard.clickCustomFieldsLoc()}`));
}
exports.clickCustomFieldsCollectionLink = async () => {
     await click($(`${globalDashboard.clickPolicyListLinkLoc()}`));
}
exports.clickAddANewCustomFieldsLink = async () => {
     await click($(`${globalDashboard.clickAddANewCustomFieldsLoc()}`));
}
exports.enterCustomFieldsCollection = async() => {
     let customFields = helper.partnerData();
     await write(customFields.CustomFieldsCollection.name, $(`${globalDashboard.enterCollectionNameLoc()}`));
     gauge.dataStore.scenarioStore.put('customFieldsName', customFields.CustomFieldsCollection.name);
     await click($(`${globalDashboard.agencySaveBtn()}`));
     await click(gauge.dataStore.scenarioStore.get('customFieldsName'));
     await click($(`${globalDashboard.clickAddANewCustomFieldsLoc()}`));
     await write(customFields.CustomFieldsCollection.fieldName, $(`${globalDashboard.enterFieldNameLoc()}`))
     gauge.dataStore.scenarioStore.put('fieldName', customFields.CustomFieldsCollection.fieldName);
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.editCustomFieldsCollection = async() => {
     let customFields = helper.partnerData();
     let customFieldsEdit = gauge.dataStore.scenarioStore.get('fieldName');
     await click(customFieldsEdit);
     await clear($(`${globalDashboard.enterFieldNameLoc()}`));
     await write(customFields.CustomFieldsCollection.editCustomFieldsName, $(`${globalDashboard.enterFieldNameLoc()}`));
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.deleteCustomFieldsCollection = async () => {
     await expect(waitFor($(`${globalDashboard.deleteIconLoc()}`), process.env.element_timeout));
	await confirm(`Remove definition for '${await gauge.dataStore.scenarioStore.get('serviceName')}' ?`, async () => await accept());
     await click($(`${globalDashboard.deleteIconLoc()}`), toRightOf(await gauge.dataStore.scenarioStore.get('serviceName')));
}
exports.clickSitePaymentCardLink = async () => {
     await click($(`${globalDashboard.clickSitePaymentCardLinkLoc()}`));
}
exports.clickVPayLink = async() => {
     await click($(`${globalDashboard.clickVPayLinkLoc()}`));
}
exports.clickPrivateRateLink = async() => {
     await click($(`${globalDashboard.clickPrivateRatesLinkLoc()}`));
}
exports.enterSitePaymentCard = async() => {
     let policyName = helper.partnerData();
     await write(await gauge.dataStore.scenarioStore.get('serviceName'), $(`${globalDashboard.enterCardNameLoc()}`));
     await dropDown({name : `${globalDashboard.enterCardTypeLoc()}`}).select(policyName.SitePaymentCard.cardType);
     await write(policyName.SitePaymentCard.cardNumber, $(`${globalDashboard.enterCardNumberLoc()}`));
     await click($(`${globalDashboard.selectHotelLoc()}`));
     await dropDown({name : `${globalDashboard.selectExpiryYearLoc()}`}).select(policyName.PrivateRate.endYear)
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.enterVPay = async() => {
     let vPay = helper.partnerData();
     await write(await gauge.dataStore.scenarioStore.get('serviceName'), $(`${globalDashboard.enterVPayNameLoc()}`));
     await dropDown({name: `${globalDashboard.enterVendorLoc()}`}).select(vPay.VPay.vendor);
     await write(vPay.VPay.AccountCode, $(`${globalDashboard.enterAccountCodeLoc()}`));
     await write(vPay.VPay.AgentId, $(`${globalDashboard.enterAgentIdLoc()}`));
     await write(vPay.VPay.BookerId, $(`${globalDashboard.enterBookerIdLoc()}`));
     await write(vPay.VPay.HotelPaymentInstruction, $(`${globalDashboard.enterHotelPaymentInstructionsLoc()}`));
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.enterPrivateRate = async() => {
     let privateRate = helper.partnerData();
     await write(gauge.dataStore.scenarioStore.get('serviceName'), $(`${globalDashboard.enterPrivateRateNameLoc()}`));
     await dropDown({id : `${globalDashboard.selectStartMonthLoc()}`}).select(privateRate.PrivateRate.startMonth);
     await dropDown({id : `${globalDashboard.selectStartDayLoc()}`}).select(privateRate.PrivateRate.startDay);
     await dropDown({id : `${globalDashboard.selectStartYearLoc()}`}).select(privateRate.PrivateRate.startYear);
     await dropDown({id : `${globalDashboard.selectEndMonthLoc()}`}).select(privateRate.PrivateRate.endMonth);
     await dropDown({id : `${globalDashboard.selectEndDayLoc()}`}).select(privateRate.PrivateRate.endDay);
     await dropDown({id : `${globalDashboard.selectEndYearLoc()}`}).select(privateRate.PrivateRate.endYear);
     await dropDown({id : `${globalDashboard.selectAirlineToApplyPrivateRateLoc()}`}).select(privateRate.PrivateRate.airlineName);
     await click($(`${globalDashboard.agencySaveBtn()}`)); 
}
exports.editSitePaymentCard = async () => {
     await click(gauge.dataStore.scenarioStore.get('serviceName'));
     await waitFor(2000);
     await write(gauge.dataStore.scenarioStore.get('editedServiceName'), $(`${globalDashboard.enterCardNameLoc()}`));
     await click($(`${globalDashboard.agencySaveBtn()}`));
}

exports.editVPay = async () => {
     await click(gauge.dataStore.scenarioStore.get('serviceName'));
     await waitFor(2000);
     await write(await gauge.dataStore.scenarioStore.get('editedServiceName'), $(`${globalDashboard.enterVPayNameLoc()}`));
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.editPrivateRate = async () => {
     await click(gauge.dataStore.scenarioStore.get('serviceName'));
     await waitFor(2000);
     await write(await gauge.dataStore.scenarioStore.get('editedServiceName'), $(`${globalDashboard.enterPrivateRateNameLoc()}`));
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.deleteSitePaymentCard = async () => {
     let sitePayment = helper.partnerData();
     await click($(`${globalDashboard.deleteSitePaymentCardLoc()}`, toRightOf(sitePayment.SitePaymentCard.editSitePaymentCard)));
     confirm(`Remove definition for '${sitePayment.SitePaymentCard.editSitePaymentCard}' ?`, async()=> await accept());
}
exports.deleteVPay = async () => {
     let vPay = helper.partnerData();
     await click($(`${globalDashboard.deleteVPayLoc()}`, toRightOf(vPay.VPay.editVPay)));
     confirm(`Remove definition for '${vPay.VPay.editVPay}' ?`, async()=> await accept());
}
exports.deletePrivateRate = async () => {
     let privateRate = helper.partnerData();
     await click($(`${globalDashboard.deletePrivateRateLoc()}`, toRightOf(privateRate.PrivateRate.editPrivateRate)));
     confirm(`Remove definition for '${privateRate.PrivateRate.editPrivateRate}' ?`, async()=> await accept());
}
exports.clickBackLink = async () => {
     await click($(`${globalDashboard.clickBackLinkLoc()}`));
}
exports.enterPolicySetName = async () => {
     await write(gauge.dataStore.scenarioStore.get('serviceName'), $(`${globalDashboard.enterPolicySetNameLoc()}`));
}
exports.createNewPolicyLink = async () => {
     await click($(`${globalDashboard.addPolicyLoc()}`));
}
exports.selectPolicy = async (service) => {
     switch(service){
          case "policy":
               await click($(`${globalDashboard.selectPolicyLoc()}`));
               await click($(`${globalDashboard.clickOkLoc()}`));
               await click($(`${globalDashboard.clickOkLoc()}`));
               break;
          case "custom set":
               await click($(`${globalDashboard.selectNewCustomSetLoc()}`));
               await click($(`${globalDashboard.clickAddButtonLoc()}`));
               break;
          default:
               break;
     }
}
exports.clickPolicySetsLink = async () => {
     await click($(`${globalDashboard.clickPolicySetsLinkLoc()}`));
}
exports.deletePolicySet = async () => {
     await expect(waitFor($(`//a[contains(@onclick,'doRemove')]`), process.env.element_timeout));
	await confirm(`Remove set '${gauge.dataStore.scenarioStore.get('serviceName')}' ?`, async () => await accept());
     await click($(`//a[contains(@onclick,'doRemove')]`), toRightOf(gauge.dataStore.scenarioStore.get('serviceName')));
}
exports.clickAddACollectionLink = async () => {
     await click($(`${globalDashboard.clickAddACollectionLinkLoc()}`));
}
exports.setPrivateRate = async () => {
     await click($(`${globalDashboard.setPrivateRateLoc()}`));
}
exports.clickSupportCluster = async () => {
     await click($(globalDashboard.supportCuster()));
}

exports.clickViewPNRXML = async () => {
     await click($(globalDashboard.viewPNRXML()));
}

exports.enterProcessID = async () => {
     let processId = gauge.dataStore.scenarioStore.get('processID');
     await write(processId, $(globalDashboard.processID()));
}

exports.clicksearchPNRXMLBtn = async () => {
     await click($(globalDashboard.searchPNRXMLBtn()));
}
 
exports.assignRuleToGroup = async () => {
     await click($(globalDashboard.activeRule())); 
     await click($(globalDashboard.enableDeemTravel())); 
     await click($(globalDashboard.enableTrain()));
     await this.vendorPreferencesRules()
     await this.restrictedCountriesRules()
     await this.travelPoliciesRules()
     await this.complianceCodesRules()
     await this.agencyConfigurationRules()
     await this.alternateAirportsRules()
     await this.displayConfigurationsRules()
     await this.corporatePaymentCardRestrictionsRules()
     await this.corporateSitePaymentCardsRules()
     await this.virtualPaymentProviderssRules()
     await this.hotelPerDiemsRules()
     await this.referencePointsRules()
     await this.privateNegotiatedRateSetsRules()
     await this.companyInformationRules()
     await this.customFieldsRules()
     await this.enableCarServiceWithTheFollowingOptions()
     await click($(globalDashboard.ruleSaveButton()));
}

exports.vendorPreferencesRules = async () => {
     await dropDown({name: `${globalDashboard.airlinePreferenceSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.rentalCarPreferenceSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.hotelChainPreferenceSet()}`}).select({index:'1'}) 
}

exports.restrictedCountriesRules = async () => {
     await dropDown({name: `${globalDashboard.restrictedCountriesSet()}`}).select({index:'1'})
}

exports.travelPoliciesRules = async () => {
     await dropDown({name: `${globalDashboard.tavelPolicies()}`}).select({index:'1'})
}

exports.complianceCodesRules = async () => {
     await dropDown({name: `${globalDashboard.airCodesSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.trainCodesSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.hotelCodesSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.carRentalCodesSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.paymentCodeCodesSet()}`}).select({index:'1'})
}

exports.agencyConfigurationRules = async () => {
     await dropDown({name: `${globalDashboard.agencyConfigurationSet()}`}).select({index:'1'})
}

exports.alternateAirportsRules = async () => {
     await dropDown({name: `${globalDashboard.alternateAirportSet()}`}).select({index:'1'})
}

exports.displayConfigurationsRules = async () => {
     await dropDown({name: `${globalDashboard.configuration()}`}).select({index:'1'})
}

exports.corporatePaymentCardRestrictionsRules = async () => {
     await dropDown({name: `${globalDashboard.paymentCardSet()}`}).select({index:'1'})
}

exports.corporateSitePaymentCardsRules = async () => {
     await dropDown({name: `${globalDashboard.sitePaymentCardSet()}`}).select({index:'1'})
}

exports.virtualPaymentProviderssRules = async () => {
     await dropDown({name: `${globalDashboard.virtualPaymentSet()}`}).select({index:'1'})
}

exports.hotelPerDiemsRules = async () => {
     await dropDown({name: `${globalDashboard.hotelPerDiemSet()}`}).select({index:'1'})
}

exports.referencePointsRules = async () => {
     await dropDown({name: `${globalDashboard.referencePointsSet()}`}).select({index:'1'})
}

exports.privateNegotiatedRateSetsRules = async () => {
     await dropDown({name: `${globalDashboard.airlineRateSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.trainPrivateRateSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.rentalCarHotelDiscountCodeSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.hotelPrivateRateSet()}`}).select({index:'1'})
}

exports.companyInformationRules = async () => {
     await dropDown({name: `${globalDashboard.company()}`}).select({index:'1'})
}

exports.customFieldsRules = async () => {
     await dropDown({name: `${globalDashboard.customFieldSet()}`}).select({index:'1'})
}

exports.enableCarServiceWithTheFollowingOptions = async () => {
     await click($(globalDashboard.enableCarServiceWithTheFollowingOptions()));
     await dropDown({name: `${globalDashboard.configuration()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.referencePointsSets()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.PaymentCardsSet()}`}).select({index:'1'})
     await dropDown({name: `${globalDashboard.sitePaymentCardSet()}`}).select({index:'1'})
}

exports.validateDisplaySettings = async () => {
     let dateText = await $(`${globalDashboard.validateDateLoc()}`).text();
     let timeText = await $(`${globalDashboard.validateTimeLoc()}`).text();
     let measureText = await $(`${globalDashboard.validateMeasurementLoc()}`).text();
     assert.strictEqual("Date", dateText, `Date is not equal to ${dateText} in display settings.`);
     assert.strictEqual("Time", timeText, `Time is not equal to ${timeText} in display settings.`);
     assert.strictEqual("Measurement", measureText, `Measurement is not equal to ${measureText} in display settings.`);
}
exports.deleteAgency = async () => {
     let agency = helper.partnerData();
     await expect(waitFor($(`${globalDashboard.deleteIconLoc()}`), process.env.element_timeout));
	await confirm(`Remove definition for '${agency.AgencySetting.deleteAgencyName}' ?`, async () => await accept());
     await click($(`${globalDashboard.deleteIconLoc()}`), toRightOf(agency.PolicyList.editPolicyName));
}
exports.editAgency = async() => {
     let policyName = helper.partnerData();
     await click(policyName.AgencySetting.settingName);
     await waitFor(2000);
     await write(policyName.PolicyList.editPolicyName, $(`${globalDashboard.agencySettingName()}`));
     await click($(`${globalDashboard.agencySaveBtn()}`));
}
exports.unselectActiveRule = async () => {
     await click($(`${globalDashboard.unselectActiveRuleLoc()}`));
}
exports.removeRule = async () => {
     await confirm(`Click OK to confirm rule deletion ?`, async () => await accept());
     await click($(`${globalDashboard.removeRuleLoc()}`));
}
exports.deleteGroup = async () => {
     await confirm(`Remove '${gauge.dataStore.scenarioStore.get("groupName")}' group`, async () => await accept());
     await click($(`${globalDashboard.deleteIconLoc()}`));
}

exports.clickProfileTab = async() => {
     await click($(`${globalDashboard.clickProfileTabLoc()}`));
}
 
exports.scheduleProfileUpload = async () => {
     await click($(`${globalDashboard.scheduleProfileUploadLoc()}`));
}

exports.singleUserDeactivation = async () => {
     await click($(`${globalDashboard.singleUserDeactivationLoc()}`));
     await this.searchUserName();
     await this.clickUploadSubmitBtn();
     await this.clickAddBtn();
     await this.clickContinueButton();
     await this.clickUploadSubmitBtn();
}

exports.scheduleNow = async() => {
     await this.schedule();
     await this.jobDescription();
     await this.fileSource();
     await this.fileFormat();
     await this.fileUpload();
     await this.allowNewUsers();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.scheduleOnce = async() => {
     await this.schedule()
     await this.stepOver();
     await this.enterSchedule();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.allowNewUsers();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.scheduleDaily = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.allowNewUsers();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.schedulePeriodic = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.periodicMinute();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.allowNewUsers();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.scheduleWeekly = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.occursOn();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.allowNewUsers();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.scheduleBiWeekly = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.occursOnBiWeekly();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.allowNewUsers();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.scheduleMonthly = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.startMonth()
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.allowNewUsers();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.schedule = async () => {
     await click($(`${globalDashboard.scheduleLoc()}`));
}

exports.jobDescription = async () => {
     let data = helper.partnerData();
     await write(data.Job.jobdescription, $(`${globalDashboard.jobDescriptionLoc()}`));
}  

exports.jobCompletionEmail = async () => {
     let data = helper.partnerData();
     await write(data.Job.jobcompletionemail, $(`${globalDashboard.jobCompletionEmailLoc()}`));
}  

exports.fileSource = async () => {
     await evaluate($(`${globalDashboard.fileSourceLoc()}`), (elem) => { return elem.click() });
}

exports.fileFormat = async () => {
     await evaluate($(`${globalDashboard.fileFormatLoc()}`), (elem) => { return elem.click() });
}

exports.fileUpload = async () => {
     await attach ("resources/schedule_profile_upload/testrampsite_upload.csv", fileField({id:`${globalDashboard.browseButtonLoc()}`}));
}

exports.allowNewUsers = async () => {
     await evaluate($(`${globalDashboard.allowNewUserLoc()}`), (elem) => { return elem.click() });
}

exports.useEmptyDoubleQuotes = async () => {
     await evaluate($(`${globalDashboard.useEmptyDoubleQuotesLoc()}`), (elem) => { return elem.click() });
}

exports.status = async () => {
     await waitFor(5000);
     focus($(`${globalDashboard.statusLoc()}`));
     await waitFor("5000");
}

exports.searchUserName = async() => {
     let data = helper.partnerData()
     await write(data.Search.username, $(`${globalDashboard.searchUserNameLoc()}`));
}

exports.clickUploadSubmitBtn = async () => {
     await evaluate($(`${globalDashboard.searchPNRXMLBtn()}`), (elem) => { return elem.click() });
}

exports.clickAddBtn = async () => {
     await evaluate($(`${globalDashboard.clickAddBtnLoc()}`), (elem) => { return elem.click() });
}

exports.periodicMinute = async () => {
     let data = helper.partnerData()
     await clear ($(`${globalDashboard.periodicMinuteLoc()}`));
     await write(data.Minute.minutes, $(`${globalDashboard.periodicMinuteLoc()}`));
}

exports.remoteFile = async () => {
     let data = helper.partnerData()
     await clear ($(`${globalDashboard.remoteFileLoc()}`));
     await write(data.Path.actualpath, $(`${globalDashboard.remoteFileLoc()}`));
}

exports.occursOn = async () => {
     await evaluate($(`${globalDashboard.occursOnLoc()}`), (elem) => { return elem.click() });
}

exports.occursOnBiWeekly = async () => {
     await this.occursOn();
     await evaluate($(`${globalDashboard.occursOnBiWeeklyLoc()}`), (elem) => { return elem.click() });
}

exports.startMonth = async () => {
     await click ($(`${globalDashboard.startMonthLoc()}`));
     for(var i =0; i<=11; i++)
     {
          await this.stepOver();
     }   
}

exports.stepOver = async () => {
     await press("ArrowDown");
}

exports.enterSchedule = async () => {
     await press("Enter");
}

exports.scheduleNowUpdate = async() => {
     await this.schedule();
     await this.jobDescription();
     await this.fileSource();
     await this.fileFormat();
     await this.fileUpload();
     await this.uploadOnly();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();    
}

exports.scheduleOnceUpdate = async() => {
     await this.schedule()
     await this.stepOver();
     await this.enterSchedule();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.uploadOnly();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();   
}

exports.scheduleDailyUpdate = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.uploadOnly();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.schedulePeriodicUpdate = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.periodicMinute();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.uploadOnly();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.scheduleWeeklyUpdate = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.occursOn();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.uploadOnly();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.scheduleBiWeeklyUpdate = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.occursOnBiWeekly();
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.uploadOnly();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.scheduleMonthlyUpdate = async() => {
     await this.schedule();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.stepOver();
     await this.enterSchedule();
     await this.startMonth()
     await this.jobDescription();
     await this.jobCompletionEmail();
     await this.fileFormat();
     await this.remoteFile();
     await this.uploadOnly();
     await this.useEmptyDoubleQuotes();
     await this.clickUploadSubmitBtn();
     await this.status();
}

exports.uploadOnly = async () => {
     await evaluate($(`${globalDashboard.uploadOnlyLoc()}`), (elem) => { return elem.click() });
}

exports.searchPartnerName= async (partner) =>{
     await write(partner, $(`${dashboard_po.changeToolsSearchTextBox()}`)); 
     await click($(`${dashboard_po.clickGoPartner()}`)); 
     let a = partner.toUpperCase()
     console.log(partner)
     await waitFor(2000)
     await click($(`${globalDashboard.clickPartnerIDLinkLoc(partner)}`));
}


exports.manageSiteTemplates = async() => {
     let siteData = gauge.dataStore.scenarioStore.get("siteData")
     await click($(`${globalDashboard.manageSiteTemplates()}`));  
     await hover($(`${globalDashboard.maketTemplateCompanyName(siteData.companyName)}`)); 
     await click($(`${globalDashboard.makeTemplate(siteData.companyName)}`));
     await click($(`${globalDashboard.selfServiceCheckBox(siteData.companyName)}`)); 
     await click($(`${globalDashboard.makeTemplateSaveBtn()}`)); 

}

exports.onboardURL = async () => {
     let siteData = gauge.dataStore.scenarioStore.get("siteData");  
     let url = `https://dashboard.deemstage3.com/sitedashboard/onboarding/init.do?templateId=${siteData.siteIDNumber}&promoCode=MYGAZOO`
     await openTab(url);
}

exports.fillOnboardingForm = async () =>{
     let user= helper.guestUserDetails("User");
     let bussinessName = user.firstName + randomText
     await write(user.firstName + randomText, $(`${onboarding.firstName()}`)); 
     await write(user.lastName + randomText, $(`${onboarding.lastName()}`)); 
     await write(randomText + user.email, $(`${onboarding.emailAddress()}`));
     await write(user.password + randomText, $(`${onboarding.password()}`));
     await write(bussinessName, $(`${onboarding.businessName()}`));
     await write(user.postalCode, $(`${onboarding.zipCode()}`));
     await click($(`${onboarding.IAcceptCheckbox()}`)); 
     await click($(`${onboarding.signUp()}`)); 
     gauge.dataStore.scenarioStore.put("bussinessName",bussinessName)
}
exports.manageSites = async() => {
     await click($(`${globalDashboard.manageSite()}`));  
}

exports.selfServiceSite = async() => {
     await click($(`${globalDashboard.selfServiceSites()}`));  
}

exports.searchSiteByCompanyName = async () => {
     await write(gauge.dataStore.scenarioStore.get("bussinessName"), $(`${globalDashboard.searchForSite()}`)); 
}

exports.selfServiceSitesSetting = async () => {
     let companyName = gauge.dataStore.scenarioStore.get("bussinessName")
     let actualSettingText = await $(`${globalDashboard.selfServiceSitesSetting(companyName)}`).text()
     let expectSettingText = helper.messageContent("Settings");
     assert.strictEqual(actualSettingText, expectSettingText.setting, `Validation successful. Expected: ${expectSettingText.setting} and Actual: ${actualSettingText}`) 
     gauge.message(`Expected: ${expectSettingText.setting} and Actual: ${actualSettingText}`)
     await click($(`${globalDashboard.selfServiceSitesSetting(companyName)}`)); 
}

exports.searchRecentlyCreateSite = async () => {
     let siteData = await gauge.dataStore.scenarioStore.get('siteData')
     await this.siteName(siteData.siteID);
     await this.clickGo();
     await this.clickSettings();
}

exports.validateRegistrationMsg = async () => {
     let expectMsg = helper.messageContent("siteBoradingSuccessfulMsg");
     let actualMsg =  await $(`${onboarding.successfulMsg()}`).text();
     assert.strictEqual(actualMsg, expectMsg.msg, `Validation successful. Expected: ${expectMsg.msg} and Actual: ${actualMsg}`) 
     gauge.message(`Expected: ${expectMsg.msg} and Actual: ${actualMsg}`)
}

exports.closeActiveTab = async () => {
     await closeTab();
}

exports.selectServiceSite = async(args) => {
     var showSites;
     switch(args){
          case "Self Service Sites":
               showSites = "selfServicedSites"
               break;
          case "Service Sites":
               showSites = "servicedSites"
               break;
          default:
               break;
     }
     await click($(`${globalDashboard.serviceSitesRadioBtn(showSites)}`));  
}

exports.searchSiteInGlobalDashboard = async(siteName) =>{
     await this.enterSiteName(siteName)
     await this.goButtonInGlobalDashboard()
}

exports.enterSiteName = async(siteName) => {
     await write(siteName, $(`${globalDashboard.siteNameInGlobalDashboard()}`));
}

exports.goButtonInGlobalDashboard = async() => {
     await click($(`${globalDashboard.goButtonInGlobalDashboard()}`)); 
}

exports.validateSiteAreDisplayed = async() => {
     await waitFor(5000)
     let resultText = await $(`${globalDashboard.resultText()}`).text();
     let siteCount = resultText.split(" ")[0];
     if (siteCount === "0"){
          gauge.message(`Result are not found`)
          assert.fail(resultText)
     }
     else {
          let resultCount = await $(globalDashboard.siteResultList()).elements().then(ele => (ele.length));
          gauge.message(`${resultCount} Records are displayed.`)
     }
}

exports.selectServiceSiteInChangeTool = async(args) => {
     var showSites;
     switch(args){
          case "Self Service Sites":
               showSites = "sitesselfServicedSites"
               break;
          case "Service Sites":
               showSites = "sitesservicedSites"
               break;
          default:
               break;
     }
     await click($(`${globalDashboard.serviceSitesInChangeTools(showSites)}`));  
}

exports.validateSiteAreDisplayedInChangeTool = async() => {
     await waitFor(5000)
     let resultText = await $(`${globalDashboard.resultTextInChangeTools()}`).text();
     let siteCount = resultText.split(" ")[0];
     if (siteCount === "0"){
          gauge.message(`Result are not found`)
          assert.fail(resultText)
     }
     else {
          let resultCount = await $(globalDashboard.siteResultListInChangeTools()).elements().then(ele => (ele.length));
          gauge.message(`${resultCount} Records are displayed.`)
     }
}

exports.enterSiteNameInPartnerDashboard = async(siteName) => {
     await write(siteName, $(`${globalDashboard.searchCompanyName()}`));
}

exports.validateSiteAreDisplayedInPartnerDashboard = async() => {
     await waitFor(5000)
     let resultText = await $(`${globalDashboard.resultTextInPartnerDashboard()}`).text();
     let siteCount = resultText.split(" ")[0];
     if (siteCount === "0"){
          gauge.message(`Result are not found`)
          assert.fail(resultText)
     }
     else {
          let resultCount = await $(globalDashboard.siteResultListInPartnerDashboard()).elements().then(ele => (ele.length));
          gauge.message(`${resultCount} Records are displayed.`)
     }
}

exports.referencePoints = async () => {
     await click($(`${globalDashboard.referencePointsLoc()}`));
}

exports.referencePointSet = async () => {
     await click($(`${globalDashboard.referencePointSetLoc()}`));
}

exports.referencePointsDetails = async () => {
     await this.setNameReferenceSet();
     await this.attachFile();
}

exports.setNameReferenceSet = async () => {
     await gauge.dataStore.scenarioStore.put('refName', "referenceName " + Math.random().toString(36).substring(7));
     await write(gauge.dataStore.scenarioStore.get('refName'), $(`${globalDashboard.referenceSetNameLoc()}`));
}

exports.attachFile = async () => {
     await attach ("resources/reference/Belden_Ref_Points.csv", fileField({name:`${globalDashboard.browseButtonReferenceLoc()}`}));
}

exports.uploadReferenceFile = async () => {
     await evaluate($(`${globalDashboard.uploadAndSaveReferLoc()}`), (elem) => {return elem.click()});
}

exports.validateRefUploadMsg = async () => {
     let expectMsg = helper.messageContent("validateRefUploadMsg");
     let actualMsg =  await $(`${onboarding.successFulRefUploadMsgLoc()}`).text();
     assert.strictEqual(actualMsg, expectMsg.msg, `Validation successful. Expected: ${expectMsg.msg} and Actual: ${actualMsg}`) 
     gauge.message(`Expected: ${expectMsg.msg} and Actual: ${actualMsg}`)
}

exports.deleteReferencePoints = async () => {
     await this.clickDoneButton();
     await waitFor(5000);
     await this.deleteRefPointSetName();
}

exports.commitChanges = async () => {
     await evaluate($(`${globalDashboard.commitChangesLoc()}`), (elem) => {return elem.click()});
     await evaluate($(`${dashboard_po.saveButton()}`), (elem) => {return elem.click()});   
}

exports.clickActivateAccountToCreateInCaseOfPasswordOption = async() => {
     let user= helper.guestUserDetails("User");
     await click($(`${globalDashboard.clickActivateAccountLoc()}`));
     await focus($(`${globalDashboard.passwordOption()}`));
     await click($(`${globalDashboard.preDefinePassword()}`));
     await write(user.password + randomText, $(`${globalDashboard.passwordField()}`))
     gauge.dataStore.scenarioStore.put('passwordField',user.password + randomText);
     await write(user.password + randomText, $(`${globalDashboard.confirmPasswordField()}`));

}
exports.enterUsername = async(username) => {
     gauge.dataStore.scenarioStore.put('userNameDashboard', username)
     await write(username , $(`${globalDashboard.enterUserNameToEditLoc()}`));
}

exports.clickUserNameFromEdit= async () => {
     await click($(`${dashboard_po.searchedUsernameForEdit()}`));
}
exports.selectUserTitle = async(title)=> {
     await dropDown({ name: `${dashboard_po.title()}` }).select(title);
     await gauge.dataStore.scenarioStore.put('title', title);
}

exports.validateUserTitle = async () => {
     let expectedTitle =  await gauge.dataStore.scenarioStore.get('title');
     let actualTitle = await ($(`${dashboard_po.userTitle()}`)).text()
     assert.ok(expectedTitle, actualTitle, `Validation user title failed. Expected: ${expectedTitle} and Actual: ${actualTitle}`)
     gauge.message(`Validation user title passed. Expected: ${expectedTitle} and Actual: ${actualTitle}`)
}

exports.selectUserGender = async(gender)=> {
     await dropDown({ name: `${dashboard_po.userGender()}` }).select(gender);
     await gauge.dataStore.scenarioStore.put('gender', gender);
}

exports.validateUserGender = async() => {
     let actualGender =  await dropDown({ name: `${dashboard_po.userGender()}`}).value()
     let expectedGender = gauge.dataStore.scenarioStore.get("gender")
     assert.ok(actualGender, expectedGender, `Title assertion failed. Expected: ${expectedGender} and Actual: ${actualGender}`)
     gauge.message(`Title assertion passed. Expected: ${expectedGender} and Actual: ${actualGender}`)
 }

exports.refPointsDetails = async () => {
     await this.setNameReferenceSet();
}

exports.uploadRefFile = async (fileType) => {
     switch (fileType) {
          case "Lat-Long Missing":
               await attach ("resources/reference/2001 Records Without Lat-Long (2).csv", fileField({name:`${globalDashboard.browseButtonReferenceLoc()}`}));
               break;
          case "City Missing":
               await attach ("resources/reference/City_Missing_for_All_Records.csv", fileField({name:`${globalDashboard.browseButtonReferenceLoc()}`}));
               break;
          case "Latest":
               await attach ("resources/reference/latest file.csv", fileField({name:`${globalDashboard.browseButtonReferenceLoc()}`}));
               break;  
          case "BlankCity":
               await attach ("resources/reference/Reference Points-BlankCityFew-Total2Rec-Stage2.csv", fileField({name:`${globalDashboard.browseButtonReferenceLoc()}`}));   
               break;          
           default:
           break;
      }
}

exports.clickDoneButton = async () => {
     await evaluate($(`${globalDashboard.doneReferLoc()}`), (elem) => {return elem.click()}); 
}

exports.deleteRefPointSetName = async () => {
     await confirm(`Remove set '${gauge.dataStore.scenarioStore.get("refName")}' ?`, async () => await accept());
     await evaluate($(`${globalDashboard.deleteReferenceButtonLoc()}`), (elem) => {return elem.click()});   
}

exports.downloadLink = async () => {
     await evaluate($(`${globalDashboard.downloadLinkLoc()}`), (elem) => {return elem.click()});
}

exports.refSetName = async () => {
     await evaluate($(`${globalDashboard.refSetNameLoc()}`), (elem) => {return elem.click()});
}

exports.validateRefSuccessMsg = async () => {
     let expectMsg = helper.messageContent("validateRefSucessMsg");
     let actualMsg =  await $(`${onboarding.successFulRefUploadMsgLoc()}`).text();
     assert.strictEqual(actualMsg, expectMsg.msg, `Validation successful. Expected: ${expectMsg.msg} and Actual: ${actualMsg}`) 
     gauge.message(`Expected: ${expectMsg.msg} and Actual: ${actualMsg}`)
}

exports.validateRefFailedMsg = async () => {
     let expectMsg = helper.messageContent("validateRefFailedMsg");
     let actualMsg =  await $(`${onboarding.failureMsgRefPoint()}`).text();
     assert.strictEqual(actualMsg, expectMsg.msg, `Validation successful. Expected: ${expectMsg.msg} and Actual: ${actualMsg}`) 
     gauge.message(`Expected: ${expectMsg.msg} and Actual: ${actualMsg}`)
}

exports.deleteReferencePointsSetName = async () => {
     await this.deleteRefPointSetName();
}

exports.recentUploadHistory = async () => {
     await evaluate($(`${globalDashboard.recentUploadHistoryLoc()}`), (elem) => {return elem.click()});
}

exports.referencePointsSetHistory = async () => {
     let expectMsg = helper.messageContent("referencePointStatus");
     let actualMsg =  await $(`${onboarding.referenceStatus()}`).text();
     assert.strictEqual(actualMsg, expectMsg.msg, `Validation successful. Expected: ${expectMsg.msg} and Actual: ${actualMsg}`) 
     gauge.message(`Expected: ${expectMsg.msg} and Actual: ${actualMsg}`)
}

exports.validateRefFailMsg = async () => {
     let expectMsg = helper.messageContent("validateRefFailMsg");
     let actualMsg =  await $(`${onboarding.failureMsgRefPoint()}`).text();
     assert.strictEqual(actualMsg, expectMsg.msg, `Validation successful. Expected: ${expectMsg.msg} and Actual: ${actualMsg}`) 
     gauge.message(`Expected: ${expectMsg.msg} and Actual: ${actualMsg}`)
}

exports.refPointsSetHistory = async () => {
     let expectMsg = helper.messageContent("refPointStatus");
     let actualMsg =  await $(`${onboarding.referenceStatus()}`).text();
     assert.strictEqual(actualMsg, expectMsg.msg, `Validation successful. Expected: ${expectMsg.msg} and Actual: ${actualMsg}`) 
     gauge.message(`Expected: ${expectMsg.msg} and Actual: ${actualMsg}`)
}

exports.validateRefrFailMsg = async () => {
     let expectMsg = helper.messageContent("validateRefrFailMsg");
     let actualMsg =  await $(`${onboarding.failureMsgRefPoint()}`).text();
     assert.strictEqual(actualMsg, expectMsg.msg, `Validation successful. Expected: ${expectMsg.msg} and Actual: ${actualMsg}`) 
     gauge.message(`Expected: ${expectMsg.msg} and Actual: ${actualMsg}`)
}

 exports.enterKTNDetails = async() => {
     let KTNDetails ={}
     const date = new Date()
     let year = date.getFullYear().toString()
     let month = date.getMonth() + 1;
     let user= helper.guestUserDetails("User");
     await write(user.firstName, $(`${dashboard_po.redress()}`))
     await write(user.businessPhone, $(`${dashboard_po.knownTravelerNumber()}`))
     await dropDown({ name: `${dashboard_po.expirayMonth()}` }).select(month);
     await dropDown({ name: `${dashboard_po.expirayYear()}` }).select(year);
     await dropDown({ name: `${dashboard_po.displayAlert()}` }).select("30");    
     let displayAlertTime = await dropDown({ name: `${dashboard_po.displayAlert()}` }).value()
     KTNDetails.redress = user.firstName
     KTNDetails.knownTravelerNumber = user.businessPhone
     KTNDetails.month = month;
     KTNDetails.year = year
     KTNDetails.displayAlertTime = displayAlertTime
     gauge.dataStore.scenarioStore.put("KTNDetails", KTNDetails)
}

exports.validateKTNDetails = async() => {
     let acutalRedress = await evaluate($(`${dashboard_po.redress()}`), (elem) => { return elem.getAttribute('value') });
     let actualknownTravelerNumber =  await evaluate($(`${dashboard_po.knownTravelerNumber()}`), (elem) => { return elem.getAttribute('value') });
     let actualExoirayMonth=  await dropDown({ name: `${dashboard_po.expirayMonth()}` }).value()
     let acutalExpirayyear = await dropDown({ name: `${dashboard_po.expirayYear()}` }).value()
     let actualDisplayAlert = await dropDown({ name: `${dashboard_po.displayAlert()}` }).value()  
     let expectedKTNDetails =  gauge.dataStore.scenarioStore.get("KTNDetails")

     assert.ok(acutalRedress, expectedKTNDetails.redress, `Failed!! Expected: ${expectedKTNDetails.redress} and Actual:${acutalRedress}`)
     assert.ok(actualknownTravelerNumber, expectedKTNDetails.knownTravelerNumber, `Failed!! Expected: ${expectedKTNDetails.knownTravelerNumber} and Actual: ${actualknownTravelerNumber}`)
     assert.ok(actualExoirayMonth, expectedKTNDetails.month, `Failed!! Expected:${expectedKTNDetails.month} and Actual:${actualExoirayMonth}`)
     assert.ok(acutalExpirayyear, expectedKTNDetails.year, `Failed!! Expected:${expectedKTNDetails.year} and Actual:${acutalExpirayyear}`)
     assert.ok(actualDisplayAlert, expectedKTNDetails.displayAlertTime, `Failed!! Expected:${expectedKTNDetails.displayAlertTime} and Actual:${actualDisplayAlert}`)
}

exports.clearKTNDetails = async(env) => { 
     let redress =  await evaluate($(`${dashboard_po.redress()}`), (elem) => { return elem.getAttribute('value') });
     let knownTravelerNumber =  await evaluate($(`${dashboard_po.knownTravelerNumber()}`), (elem) => { return elem.getAttribute('value') });
     if(knownTravelerNumber != "" && redress != "" ){
          await clear($(`${dashboard_po.redress()}`), { force: true })
          await clear($(`${dashboard_po.knownTravelerNumber()}`), { force: true })
          env == "dashboard"?  await this.dashboardKTNSaveBtn() : await this.travelPreferenceKTNSaveBtn()
     }    
}

exports.KTNActions = async(option,env) => {
     await waitFor(5000)
     switch(option){
          case "Enter":
               await this.enterKTNDetails()
               env == "dashboard"?  await this.dashboardKTNSaveBtn() : await this.travelPreferenceKTNSaveBtn()
               break;
          case "Clear":
               await this.clearKTNDetails(env)
               break;
          case "Validate":
               await this.validateKTNDetails()
               break;
     }
}

exports.dashboardKTNSaveBtn = async() => {
     await click($(`${dashboard_po.KTNSaveBtn()}`))
}

exports.travelPreferenceKTNSaveBtn = async() => {
     await evaluate($(`${travelPrePage.travelPreferenceSaveBtn()}`), (elem) => {return elem.click()});
}

exports.closeUpdateNotification = async () => {
     if(await ($(`${globalDashboard.updateNotificationPopup()}`)).exists()){
          await evaluate($(`${globalDashboard.closeUpdateNotificationPopup()}`), (elem) => {return elem.click();});
      }
}