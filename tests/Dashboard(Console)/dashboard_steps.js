"use strict";
const { waitFor, click, $, scrollTo, switchTo, currentURL, press } = require("taiko");
const dashboard = require("../Dashboard(Console)/dashboard_actions");
const assert = require("assert");
const { clickContinueButton } = require("../air_only/air_actions");
const { brotliDecompress } = require("zlib");
const commonAction = require("../common/common_actions")

step("Click <tabName> tab", async function (tabName) {
  await dashboard.clickTab(tabName);
});
step("Create new partner", async function () {
  await dashboard.addPartner();
  await dashboard.fillRequiredFields();
});
step("Click Save Button", async function () {
  await dashboard.clickSaveButton();
});
step("Click Save Button to save new admin", async function () {
  await dashboard.addAdminSaveButton();
});

step("Search for partner", async function () {
  await dashboard.searchPartner();
});
step("Search for partner in changeTools", async function () {
  await dashboard.searchPartnerInChangeTools();
  await dashboard.clickGoPartner();
});

step("Verify that partner is created", async function () {
  await dashboard.verifyPartnerCreated();
});
step(
  "Goto Global Setting and click <settingName>",
  async function (settingName) {
    await dashboard.clickGlobalSettings(settingName);
  }
);
step("Edit the partner details", async function () {
  await dashboard.editAndclickSaveButton();
});
step("Verify the partner is edited", async function () {
  //  await dashboard.clickGlobalSettings("Partner Name & General Settings");
  await dashboard.verifyTheEditedData();
});
step("Click on <arg0> link", async function (link) {
  switch (link) {
    case "change tools":
      await dashboard.changeTool();
      break;
    case "Add a user":
      await dashboard.clickAddUser();
      break;
    case "Save user":
      await dashboard.clickSaveUserButtonToCreate();
      break;
    case "Partner ID":
      await dashboard.clickPartnerIDLink();
      break;
    case "Add New Site":
      await dashboard.clickAddNewSite();
      break;
    case "Settings":
      await dashboard.clickSettingsLink();
      break;
    case "New Dashboard Admin":
      await dashboard.clickNewDashboardAdmin();
      break;
    case "Manage Dashboard Administrators":
      await dashboard.clickManageDashboardAdmin();
      break;
    case "Add a New Group":
      await dashboard.addANewGroup();
      break;
    case "Save Group":
      await dashboard.clickSaveGroupButton();
      break;
    case "Edit User":
      await dashboard.clickEditUserName();
      break;
    case "Personal and Employee info":
      await dashboard.clickPersonalAndEmployeeInfo();
      break;
    case "Travel":
      await dashboard.clickTravel();
      break;
    case "Support Information":
      await dashboard.clickSupportInformation();
      break;
    case "Account Permissions":
      await dashboard.clickAccountPermissions();
      break;
    case "Addresses and Phone Numbers":
      await dashboard.clickAddressPhoneNumbers();
      break;
    case "Emergency Contact":
      await dashboard.clickEmergencyContact();
      break;
    case "Payment Cards":
      await dashboard.clickPaymentCards();
      break;
    case "Delegates":
      await dashboard.clickDelegates();
      break;
    case "Display Settings":
      await dashboard.clickDisplaySettings();
      break;
    case "Configurations for Groups":
      await dashboard.clickConfigurationsForGroups();
      break;
    case "Add A New Configuration":
      await dashboard.clickaddANewConfiguration();
      break;
      case "Travel Agency":
      await dashboard.travelAgency();
      break;
    case "Agency Setting":
      await dashboard.agencySetting();
      break;
    case "Add A New Agency Setting":
      await dashboard.addANewAgencySetting();
      break;
    case "Add a Delegate":
      await dashboard.clickAddADelegate();
      break;
    case "Become a Delegate":
      await dashboard.clickBecomeADelegate();
      break;
    case "Travel Policy":
      await dashboard.clickTravelPolicyLink();
      break;
    case "Policy List":
      await dashboard.clickPolicyListLink();
      break;
    case "Display Configuration":
      await dashboard.clickDisplayConfigurationLink();
      break;
    case "Add A New Travel Policy":
      await dashboard.clickAddANewTravelPolicyLink();
      break;
    case "Display Configuration List":
      await dashboard.clickDisplayConfigurationListLink();
      break;
    case "Add A New Display Configuration":
      await dashboard.clickAddANewDisplayConfigurationLink();
      break;
    case "Compliance Codes":
      await dashboard.clickComplianceCodesLink();
      break;
    case "Compliance Codes List":
      await dashboard.clickComplianceCodesListLink();
      break;
    case "Add A New Compliance Code":
      await dashboard.clickAddANewTravelPolicyLink();
      break;
    case "Compliance Code List":
      await dashboard.clickDisplayConfigurationListLink();
      break;
    case "Service Rules":
      await dashboard.clickserviceRules();
      break;
    case "Add":
      await dashboard.clickAddEditRulesInGroup();
      break;
    case "edit":
      await dashboard.editServicerulesLink();
      break;
    case "Custom Fields":
      await dashboard.clickCustomFieldsLink();
      break;
    case "Custom Fields Collection":
      await dashboard.clickCustomFieldsCollectionLink();
      break;
    case "Add A New Custom Fields":
      await dashboard.clickAddANewCustomFieldsLink();
      break;
    case "Site Payment Card":
      await dashboard.clickSitePaymentCardLink();
    break;
    case "Site Payment Card List":
      await dashboard.clickDisplayConfigurationListLink();
    break;
    case "Add A New Site Payment Card":
      await dashboard.clickAddANewTravelPolicyLink();
    break;
    case "VPay":
      await dashboard.clickVPayLink();
    break;
    case "VPay List":
      await dashboard.clickDisplayConfigurationListLink();
    break;
    case "Add A New VPay":
      await dashboard.clickAddANewTravelPolicyLink();
    break;
    case "Private Rate":
      await dashboard.clickPrivateRateLink();
      break;
    case "Private Rate List":
      await dashboard.clickDisplayConfigurationListLink();
    break;
    case "Add A New Private Rate":
      await dashboard.clickAddANewTravelPolicyLink();
    break;
    case "back":
      await dashboard.clickBackLink();
      break;
    case "Policy Set":
      await dashboard.clickPolicySetsLink();
      break;
    case "Add a collection":
      await dashboard.clickAddACollectionLink();
      break;
    case "Private Rate Set":
      await dashboard.setPrivateRate();
      break;
    case "Schedule Profile Upload":
        await dashboard.scheduleProfileUpload();
        break; 
    case "Single User Deactivation":
      await dashboard.singleUserDeactivation();
      break;    
    case "Reference Points":
      await dashboard.referencePoints();
      break;   
    case "Add A New Reference Point Set":
      await dashboard.referencePointSet(); 
      break;
    case "Upload and Save":
      await dashboard.uploadReferenceFile();
      break;
    case "Download":
      await dashboard.downloadLink();  
      break;
    case "Set Name":
      await dashboard.refSetName();
      break;
    case "Recent Upload History":
        await dashboard.recentUploadHistory();  
        break;  
    default:
      break;
  }
});
step("Search site name <arg0>", async function (site) {
  await dashboard.siteName(site);
  await dashboard.clickGo();
  await dashboard.clickSettings();
});

step("Click on the <arg0> tab", async function (tabName) {
      await dashboard.clickTab(tabName);
});
step("Fill required data to create User", async function () {
  await dashboard.clickSupportAccCheckboxToCreate();
  await dashboard.enterUserNameToCreate();
  await dashboard.enterExternalIdToCreate();
  await dashboard.enterEmailToCreate();
  await dashboard.enterFirstNameToCreate();
  await dashboard.enterLastNameToCreate();
  await dashboard.clickSiteAdministratorToCreate();
  await dashboard.clickActivateAccountToCreate();
});
step("Validate user is in partner dashboard page", async function () {
  let validation = await dashboard.createUserValidation();
  assert.strictEqual("Add A New User", validation, "User not created");
});

step("Fill the required Field to create a new site", async function () {
  await dashboard.enterDomainCreationDetails();
});

step("Fill the required fields for new dashboard admin", async function () {
  await dashboard.enterAdminDetails();
});

step("Search for newly created dashboard admin", async function() {
     await dashboard.searchAdminDashboard();
     await dashboard.ClickSearchButton();
});

step("Select <optionName> in user overview page", async function(optionName) {
	await dashboard.selectUsersOvervirw(optionName);
});

step("Search user via userName", async function () {
     await dashboard.searchByUserName();
	  await dashboard.ClickSearchButton();
});
step("Search user via firstName", async function () {
  await dashboard.searchByFirstName();
 await dashboard.ClickSearchButton();
});

step("CLick continue button", async function() {
	await dashboard.clickContinueButton()
});

step("CLick Add Button", async function() {
     await dashboard.clickAddButton();
});

step("Click Deactivate Button", async function() {
	await dashboard.clickDeactivateButton();
});

step("Click Send reminder Now Button", async function() {
	await dashboard.clickSendRemiderNowButton();
});

step("Verify if the site is opened in new tab", async function () {
  await dashboard.switchtoNewTab();
  

});

step("Click back to overview page", async function() {
	await dashboard.clickBackToOverviewPage();
});

step("Click on Partner ID link", async function() {
  await dashboard.clickPartnerIDLink();
});

step("Click Partners tab in change tools", async function() {
  await dashboard.clickPartnersTabInChangeTools();
});

step("Validate site creation", async function() {
	await dashboard.validateSiteCreation();
});

step("Search Site", async function () {
  await waitFor(5000);
  await dashboard.searchSite();
  await dashboard.goButtonInSiteSearch();
});

step("Edit fullName", async function() {
	await dashboard.editFullName();
});

step("Fill required data to create Group", async function() {
	await dashboard.typeGroupName();
  await dashboard.clickServiceRules();
  await dashboard.typeUserName();
});

step("Validate group is in partner dashboard page", async function() {
  await dashboard.validateGroupName();
});

step("Enter UserName to edit", async function() {
	await dashboard.enterUserNameToEdit();
});

step("Click on <arg0> button", async function(button) {
  switch(button){
    case "Edit User Search":
	    await dashboard.clickSearchToFindUser();
    break;
    case "Save the edited user":
      await dashboard.clickUpdateButton();
      break;
    case "Save Configurator":
      await dashboard.serviceSaveBtn();
    break;
    case "Save Agency":
      await dashboard.agencySaveBtn();
    break;
    case "remove rule":
      await dashboard.removeRule();
      break;
  default:
    break;
  }
});

step("Edit the userDetails", async function() {
	await dashboard.updateUserName();
  await dashboard.updateFirstName();
  await dashboard.updateLastName();
  await dashboard.updateExternalId();
});

step("Validate edited user is in partner dashboard page", async function() {
  await dashboard.validateEditedUserName();
  await dashboard.validateEditedFirstName();
  await dashboard.validateEditedLastName();
  await dashboard.validateEditedExternalId();
});

step("Click on the username to edit", async function() {
	await dashboard.clickUserNameToEdit();
});

step("Validate user data in support information page", async function() {
	await dashboard.validateSupportInformationPage();
});

step("Validate Support is checked in Account Permissions page", async function() {
	await dashboard.validateSupportRadioButton();
});

step("Validate edited details in Addresses and Phone Numbers page", async function() {
	await dashboard.validateEditedDetailsInAddressesPhoneNumber();
});

step("Validate first name, last name in payment cards page", async function() {
	await dashboard.validateFNameLNamePaymentCards();
});

step("Edit the Addresses and Phone Numbers", async function() {
	await dashboard.enterValidDetailsAddPhNo();
});
step("CLick on searched user", async function() {
	await dashboard.clickSearchedUser();
});

step("Fill Configurations for Groups form", async function() {
	await dashboard.fillNewConfiguration()
});

step("Validate Configurations for Groups fill out successfully", async function() {
	await dashboard.ValidateConfigurationsForGroups()
}); 

step("Fill Add Agency Setting form", async function() {
	await dashboard.addAgency();
});

step("Edit the Emergency Contact information", async function() {
	await dashboard.editEmercyContact();
});

step("Click on Add payment card", async function() {
	await dashboard.clickAddPaymentCard();
  await dashboard.editDetailsOfPaymentCard();
});

step("Search a delegate user <arg0>", async function(email) {
	await dashboard.enterEmailAddressDelegate(email);
  await press('Enter');
  await dashboard.validateEmailDelegate(email);
  await dashboard.clickSelectButton();
});

step("Validate and delete a delegate user", async function() {
	await dashboard.validateEmailDelegateAccess();
  await dashboard.deleteEmailDelegateAccess();
});

step("Create a new <arg0> list", async function(service) {
	await dashboard.enterPolicyName(service);
});

step("Edit a recently created <arg0> list", async function(service) {
	await dashboard.editList(service);
});

step("Delete recently created list", async function() {
	await dashboard.deletePolicyName();
});

step("Create a new <arg0>", async function(service) {
  await gauge.dataStore.scenarioStore.put('serviceName', "Automation" + Math.random().toString(36).substring(7));
  switch(service){
    case "Site Payment Card":
      await dashboard.enterSitePaymentCard();
      break;
    case "VPay":
      await dashboard.enterVPay();
      break;
    case "Private Rate":
      await dashboard.enterPrivateRate();
      break;
    default:
      break;
  }
});


step("Edit a recently created <arg0>", async function(service) {
  await gauge.dataStore.scenarioStore.put('editedServiceName', "AutoEdit" + Math.random().toString(36).substring(7));
	switch(service){
    case "Site Payment Card":
      await dashboard.editSitePaymentCard();
      break;
    case "VPay":
      await dashboard.editVPay();
      break;
    case "Private Rate":
      await dashboard.editPrivateRate();
      break;
    default:
      break;
  }
});

step("Add a <arg0>", async function(arg0) {
	await dashboard.createNewPolicyLink();
});

step("Select a <arg0>", async function(service) {
	await dashboard.selectPolicy(service);
});

step("Delete recently created policy set", async function() {
	await dashboard.deletePolicySet();
});

step("Delete the list", async function() {
	await dashboard.deleteCustomFieldsCollection();
});
step("Go to view PNR XML page", async function() {
	await dashboard.clickSupportCluster();
  await dashboard.clickViewPNRXML();
});

step("Enter ProcessId", async function() {
	await dashboard.enterProcessID();
});

step("Assign Rules to Group", async function() {
	await dashboard.assignRuleToGroup();
});


step("Validate details in display settings", async function() {
	await dashboard.validateDisplaySettings();
});

step("Delete recently created Agency", async function() {
  await dashboard.deleteAgency();
});

step("Edit recently created Agency", async function() {
	await dashboard.editAgency();
});

step("Unselect Activate rule", async function() {
	await dashboard.unselectActiveRule();
});

step("Delete the recently created group", async function() {
	await dashboard.deleteGroup();
});
step("Click on Settings link", async function () {
  await dashboard.clickSettings();
})

step("Fill required data to Schedule <args> Profile Upload", async function (args) {
  switch (args) {
    case "Now":
      await dashboard.scheduleNow();
      break;
    case "Once, on..":
        await dashboard.scheduleOnce();
        break;  
    case "Daily":
      await dashboard.scheduleDaily();
      break;
    case "Periodic":
        await dashboard.schedulePeriodic();
        break;    
    case "Weekly":
        await dashboard.scheduleWeekly();
        break;
    case "Bi-Weekly":
        await dashboard.scheduleBiWeekly();
        break;   
     case "Monthly":
        await dashboard.scheduleMonthly();
        break;              
    default:
      break;
  }
});

step("Fill required data to Schedule <args> Profile Update", async function (args) {
  switch (args) {
    case "Now":
      await dashboard.scheduleNowUpdate();
      break;
    case "Once, on..":
        await dashboard.scheduleOnceUpdate();
        break;  
    case "Daily":
      await dashboard.scheduleDailyUpdate();
      break;
    case "Periodic":
        await dashboard.schedulePeriodicUpdate();
        break;    
    case "Weekly":
        await dashboard.scheduleWeeklyUpdate();
        break;
    case "Bi-Weekly":
        await dashboard.scheduleBiWeeklyUpdate();
        break;   
     case "Monthly":
        await dashboard.scheduleMonthlyUpdate();
        break;              
    default:
      break;
  }
});


step("Search partner name <arg0>", async function (partner) {
  await dashboard.searchPartnerName(partner)
});

step("Manage site Templates", async function(){
  await dashboard.manageSiteTemplates();
})

step("Open Onboard URL", async function(){
  await dashboard.onboardURL();
})

step("Fill register your business form", async function (){
  await dashboard.fillOnboardingForm ();
})

step("Goto Self Serive sites", async function(){
  await dashboard.manageSites();
  await dashboard.selfServiceSite();
})

step("Search Self service Site", async function () {
  await dashboard.searchSiteByCompanyName();
  await dashboard.goButtonInSiteSearch();
});

step("Click on Self service Site Setting", async function () {
  await dashboard.selfServiceSitesSetting();
});

step("Search recently create site name", async function () {
  await dashboard.searchRecentlyCreateSite()
});

step("Validate Sucessfull message of Registration", async function (){
  await dashboard.validateRegistrationMsg ();
})

step("Close active tab", async function(){
  await dashboard.closeActiveTab();
})

step("Click on <args> radio button", async function(args) {
	await dashboard.selectServiceSite(args)
});

step("Search site <siteName> on global dashboard page", async function(siteName) {
	await dashboard.searchSiteInGlobalDashboard(siteName)
});

step("Validate lists of site are displayed", async function() {
	await dashboard.validateSiteAreDisplayed()
});

step("Click on <arg0> in change tool", async function(arg0) {
	await dashboard.selectServiceSiteInChangeTool(arg0)
});

step("Search site name <arg0> in change tool", async function (arg0) {
  await dashboard.siteName(arg0);
  await dashboard.clickGo();
});

step("Validate lists of site are displayed in change tool", async function() {
  await dashboard.validateSiteAreDisplayedInChangeTool()
});

step("Click on Self Service Sites in Partner dashboard", async function() {
	await dashboard.selfServiceSite()
});

step("Search site name <arg0> in Partner dashboard", async function (arg0) {
  await dashboard.enterSiteNameInPartnerDashboard(arg0);
  await dashboard.goButtonInSiteSearch();
});

step("Validate lists of site are displayed in Partner dashboard", async function() {
  await dashboard.validateSiteAreDisplayedInPartnerDashboard()
});

step("Enter Reference Points details", async function() {
  await dashboard.referencePointsDetails()
});

step("Validate Successfull message", async function() {
  await dashboard.validateRefUploadMsg();
});

step("Delete recently added reference points", async function() {
  await dashboard.deleteReferencePoints();
});

step("Commit changes made in site", async function() {
  await dashboard.commitChanges();
});

step("Fill required data to create User for gaikocvent", async function () {
  await dashboard.clickSupportAccCheckboxToCreate();
  await dashboard.enterUserNameToCreate();
  await dashboard.enterExternalIdToCreate();
  await dashboard.enterEmailToCreate();
  await dashboard.enterFirstNameToCreate();
  await dashboard.enterLastNameToCreate();
  await dashboard.clickActivateAccountToCreateInCaseOfPasswordOption();
});
step("Enter <username> as UserName to edit", async function(username) {
	await dashboard.enterUsername(username);
});

step("Click on the seached username to edit", async function() {
	await dashboard.clickUserNameFromEdit();
});

step("Select user <personInfo> as <heading>", async function(personInfo, heading) {
  switch(heading){
    case "title":
      await dashboard.selectUserTitle(personInfo);
      break;
    case "gender":
      await dashboard.selectUserGender(personInfo);
      break;
  }
});

step("Validate user <attribute> in <page>", async function(attribute, page) {
  switch( attribute+" "+page){
    case "title console":
      await dashboard.validateUserTitle();
      break;
    case "title purchase page":
      await commonAction.validateUserTitle();
      break;
    case "gender console":
      await dashboard.validateUserGender();
      break;
  }
});

step("Create a new policy set", async function() {
	await dashboard.enterPolicySetName();
});

step("Enter Reference Point Set Name", async function() {
  await dashboard.refPointsDetails();
});

step("Upload <arg> record file", async function(fileType){
  await dashboard.uploadRefFile(fileType);
});

step("Validate Success message", async function() {
  await dashboard.validateRefSuccessMsg();
});

step("Validate Failure message", async function() {
  await dashboard.validateRefFailedMsg();
});

step("Delete reference points set name", async function() {
  await dashboard.deleteReferencePointsSetName();
});

step("Validate Status in reference point set history", async function() {
  await dashboard.referencePointsSetHistory();
});

step("Validate Failed message", async function() {
  await dashboard.validateRefFailMsg();
});

step("Validate Status of reference point set history", async function() {
  await dashboard.refPointsSetHistory();
});

step("Validate error message", async function() {
  await dashboard.validateRefrFailMsg();
});
step("<option> KTN details in <env>", async function(option, env) {
  await waitFor(3000)
  await dashboard.KTNActions(option, env)
});



