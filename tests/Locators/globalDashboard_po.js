
exports.changeToolsLoc = () => "//div[@id = 'siteButton']";
exports.siteNameLoc = () => "//input[@id = 'toolSwitcherLayermain_sitesKey']";
exports.clickGoLoc = () => "//a[@id = 'toolSwitcherLayermain_sitesButtonGo']";
exports.clickSettingsLoc = () => "//a[@title = 'Settings']";
exports.clickTabLoc = (tabName) => `//ul[@class="navBar"]//a[contains(text(), "${tabName}")]`
exports.clickAddUserLoc = () => `//strong[contains(text(),'Add A New User')]`;
exports.clickEditUserNameLoc = () => `//a[@onclick= 'return safeGoto("/cpm/ds/mango/users/userEdit.do");']`;
exports.clickSupportAccCheckboxLoc = () => "//input[@name= 'userAccountBean.accountType']";
exports.enterUserNameLoc = () => "//input[@name = 'userAccountBean.userName']";
exports.enterExternalIdLoc = () => "//input[@name = 'userAccountBean.externalId']";
exports.enterEmailLoc = () => "//input[@name = 'userAccountBean.email']";
exports.enterFirstNameLoc = () => "//input[@name = 'userAccountBean.firstName']";
exports.enterLastNameLoc = () => "//input[@name = 'userAccountBean.lastName']";
exports.clickSiteAdministratorLoc = () => "//input[@name = 'userAccountBean.isSiteAdmin']";
exports.clickActivateAccountLoc = () => "//input[@id = 'activateAccount']";
exports.clickSaveUserButtonLoc = () => `//a[@onclick= "submitAction(document.uiForm, 'save');return false;"]`;
exports.clickPartnerIDLinkLoc = (text) => `//span[@title='${text}']/a`;
exports.addNewSiteLink = () => `//p[@class='createSite']`;
exports.clickPartnersTabInChangeToolsLoc = () => `//a[@id="toolSwitcherLayerlnk_mainPartners"]`;
exports.siteID = () => `//input[@name="appConfig.siteId"]`;
exports.usernameSearchBox = () => `//input[@name="adminSearchCriteriaBean.userName"]`;
exports.searchButton = () => `(//span[@class="txt"])[1]`;
exports.userOverviewOptions = () => `((//table[@class="full"]/tbody/tr)/td/a/strong)`;
exports.settingsLink = () => `//a[@title="Settings"]`;
exports.newDashboardAdmin = () => `(//div[@class='cell cell1'])[4]/div/a`;
exports.newManageDashboardAdmin = () => `(//div[@class='cell cell1'])[3]/div/a`;
exports.searchCriteriaUserNameTextBox = () => `//input[@name='searchCriteriaBean.userName']`;
exports.searchCriteriaFirstNameTextBox = () => `//input[@name="searchCriteriaBean.firstName"]`;
exports.addButton = () => `(//table[@class="tableBorder"]/tbody/tr/td/input)[2]`;
exports.continueButton = () => `(//span[@class="bin"])[3]`;
exports.deactivateButton = () => `(//span[@class="bin"])[2]`;
exports.sendReminderNow = () => `(//span[@class="txt"])[1]`;
exports.searchedResult = () => `(//table[@class="tableBorder"]/tbody/tr/td/a)[1]`;
exports.backToOverviewPage= () => `//a[@id='a']`

//Add New Site Locators
exports.companyName = () => `//input[@name="appConfig.companyName"]`;
exports.siteIDSite = () => `//input[@name="appConfig.brandName"]`;
exports.domainURL = () => `//input[@name="appConfig.siteUrlName"]`;
exports.countryDropDown = () => `appConfig.countryCode`;
exports.topLevelDomain = () => `appConfig.selectedTopLevelDomain`;
exports.noOfEmployee = () => `//input[@name="appConfig.numberOfEmployees"]`;
exports.indrustryDropdown = () => `appConfig.industry`;
exports.companyUsageTypeDropDown = () => `appConfig.companyUsageTypeId`;
exports.stateDropDown = () => `//input[@name='appConfig.stateCode']`;
exports.streetAddresses = () => `//input[@name="appConfig.street1"]`;
exports.cityAddressLoc = () => `//input[@name="appConfig.city"]`;
exports.postalCode = () => `//input[@name="appConfig.postalCode"]`;
exports.phoneNumberLoc = () => `//input[@name="appConfig.phoneNumber"]`;
//Validation of new site
exports.siteIdList = () => `(//colgroup[@class="results3"])[2]/../tbody/tr/td[2]`;
exports.searchForSite = () => `(//input[@class="searchInput"])[3]`;
exports.goButtonInSiteSearch = () => `//a[@id = 'siteshomeButtonGo']`;

//Dashboard admin
exports.userNameTextBoxAU = () => `//input[@name="adminAccountBean.userName"]`;
exports.firstNameTextBoxAU = () => `input[name='adminAccountBean.firstName']`;
exports.lastNameTextBoxAU = () => `//input[@name="adminAccountBean.lastName"]`;
exports.emailTextBoxAU = () => `//input[@name="adminAccountBean.email"]`;
exports.passwordTextBoxAU = () => `//input[@name="adminAccountBean.password"]`;
exports.confirmPasswordTextBoxAU = () => `//input[@name="adminAccountBean.password2"]`;
exports.globalCheckBox = () => `//input[@name="adminAccountBean.isGlobalAdmin"]`;
exports.superDomainAdminCheckBox = () => `//input[@name='adminAccountBean.isSuperDomainAdmin']`;
exports.domainAdmin = () => `//input[@name="adminAccountBean.isDomainAdmin"]`;
exports.roleID = () => `(//select[@name='globalAdmin.unselectedRoles']/option)[1]`;
exports.addRole = () => `(//span[@class='txt'][contains(text(),'< Add')])[1]`

exports.superDomain = () => `(//select[@name='unselectedSuperDomains']/option)[3]`;
exports.superDomainRole = () => `(//select[@name='superDomainAdmin.unselectedRoles']/option)[2]`;
exports.addSuperDomain = (index) => `(//span[@class='txt'][contains(text(),'< Add')])[${index}]`;

exports.domainAdminRadioBtn = () => `//input[@id='domAdmin1']`

exports.domainRoles = () => `(//select[@name='allDomainsInAllSuperDomains.unselectedRoles']/option)[1]`;
exports.addDomainRoles = () => `(//span[@class='txt'][contains(text(),'< Add')])[7]`;
exports.usernameSearchBox = () => `//input[@name="adminSearchCriteriaBean.userName"]`;
exports.searchButton = () => `(//span[@class="txt"])[1]`;

exports.userOverviewOptions = () => `((//table[@class="full"]/tbody/tr)/td/a/strong)`;

// Add user selectors
exports.adduserNameTextBox = () => `//input[@name="userAccountBean.userName"]`;
exports.externalIDTextBox = () => `//input[@name="userAccountBean.externalId"]`;
exports.emailTextBox = () => `//input[@name="userAccountBean.email"]`;
exports.firstNameTextBox = () => `//input[@name="userAccountBean.firstName"]`;
exports.lastNameTextBox = () => `//input[@name="userAccountBean.lastName"]`;

//exports.searchCriteriaUserNameTextBox = () => `//input[@name="searchCriteriaBean.firstName"]`;
exports.searchResult = () => `//tr[@class="tableBar"]/../tr[2]`;
exports.signOut = () => `//div[@class ="barBtn right signOutLink"]/a`;
exports.continueButton = () => `(//span[@class="txt"])[3]`;
//exports.addButton = () => `(//input[@type='button'])[1]`;
exports.deactivateButton = () => `(//span[@class="txt"])[1]`;

exports.sendReminderNow = () => `(//span[@class="txt"])[1]`;

exports.clustera = () => `//input[@name="sdClusterDistros[0].percentage"]`;
exports.clusterb = () => `//input[@name="sdClusterDistros[1].percentage"]`;

exports.partnerFullName = () => `//input[@name="superDomainConfig.brandFullName"]`;
exports.addANewGroupLoc = () => "//div[@class = 'createSite']";
exports.typeGroupNameLoc = () => "//input[@name= 'group.name']";
exports.clickServiceRulesLoc = () => "//input[@name= 'group.isUsableForEnablementRules'][@value = 'true']";
exports.typeUserNameLoc = () => "//input[contains(@name, 'rightLiteralText')]";
exports.clickSaveGroupButtonLoc = () => `//a[@onclick="safeSubmit(document.forms.uiForm, 'save_group');return false;"]`;
exports.enterUserNameToEditLoc = () => '//input[@name="searchCriteriaBean.userName"]';
exports.clickSearchToFindUserLoc = () => `//a[@onclick="safeSubmit(document.uiForm, 'search');return false;"]`;
exports.clickPersonalAndEmployeeInfoLoc = () => `//a[contains(@href, "/users/user.do?_forward=settings_employee_info")]`;
exports.clickTravel = () => `//a[contains(@href, "/users/user.do?_forward=settings_preferences_travel")]`;
exports.updateUserNameLoc = () => `//input[@name="personalInfo.userName"]`;
exports.updateFirstNameLoc = () => `//input[@name="personalInfo.firstName"]`;
exports.updateLastNameLoc = () => `//input[@name="personalInfo.lastName"]`;
exports.updateExternalIdLoc = () => `//input[@name="businessInfo.externalId"]`;
exports.clickUpdateButtonLoc = () => `//a[@onclick="return submitAction(document.uiForm, 'updateInfo');"]`;
exports.clickSupportInformationLoc = () => `//a[contains(@href, "/users/user.do?_forward=settings_support_information")]`;
exports.clickAccountPermissionsLoc = () => `//a[contains(@href, "/users/user.do?_forward=settings_account_type_information")]`;
exports.supportRadioButtonSelectedLoc = () => `userAuthorization.accountTypeStringVal`;
exports.clickAddressesPhoneNumbersLoc = () => `//a[contains(@href, "/users/user.do?_forward=settings_addresses")]`;
exports.clickEmergencyContactLoc = () => `//a[contains(@href, "/users/user.do?_forward=settings_emergency_contact")]`;
exports.clickPaymentCardsLoc = () => `//a[contains(@href, "/users/user.do?_forward=settings_credit_cards")]`;
exports.clickDelegatesLoc = () => `//a[contains(@href, "/users/user.do?_forward=delegate_access_privileges")]`;
exports.clickDisplaySettingsLoc = () => `//a[contains(@href, "/users/user.do?_forward=settings_display_options")]`;
exports.selectCountryNameAddressPhoneNumber = () => `addressBsnID_country`;
exports.enterStreetAddPhNoBSN = () => `//input[@id = 'addressBsnID_street1']`;
exports.enterCityAddPhNoBSN = () => `//input[@id = 'addressBsnID_city']`;
exports.selectStateAddPhNoBSN = () => `addressBsnID_state`
exports.enterZipCodeAddPhNoBSN = () => `//input[@id = 'addressBsnID_postalCode']`;
exports.clickSaveButtonLoc = () => `//a[@onclick = "return submitAction(document.uiForm, 'save');"]`;
exports.enterStreetAddPhNoHome = () => `//input[@id = 'addressHomeID_street1']`;
exports.enterCityAddPhNoHome = () => `//input[@id = 'addressHomeID_city']`;
exports.selectStateAddPhNoHome = () => `addressHomeID_state`;
exports.selectStateAddPhNoHomeLoc = () => '#addressHomeID_state';
exports.enterZipCodeAddPhNoHome = () => `//input[@id = 'addressHomeID_postalCode']`;
exports.clickConfigurationsForGroupsLink =() => `//li[@id='carServiceConfig']//a`
exports.addANewConfiguration =() => `//strong[normalize-space()='Add A New Configuration']`
exports.configurationName =() => `//input[@name='serviceConfigBean.name']`
exports.enableGroundTravel = () => `(//input[@name='serviceConfigBean.providerGroupList[0].providerConfigList[0].enabled'])[1]`
exports.companyCode = () => `//input[@id='companyCode']`
exports.serviceSaveBtn = () => `//span[contains(text(),'Save')]`

//agency setting
exports.travelAgency = () => `//li[@id='travelAgency']//a`
exports.agencySetting = () => `//strong[normalize-space()='Agency Settings']`
exports.addANewAgencySetting = () => `//strong[normalize-space()='Add A New Agency Setting']`
exports.agencySettingName = () => `//input[@name='travelAgencyConfigBean.travelAgencyConfigName']`
exports.gds = () => 'travelAgencyConfigBean.gdsId'
exports.gdsLoc = () => `//select[@name="travelAgencyConfigBean.gdsId"]`;
exports.TAGroup = () => `travelAgencyConfigBean.taGroupId`
exports.TAGroupLoc = () => `//select[@name="travelAgencyConfigBean.taGroupId"]`;
exports.pseudoCityCode = () => `//input[@name='travelAgencyConfigBean.pseudoCityCode']`
exports.defaultQueue = () => `//input[@name='travelAgencyConfigBean.defaultQueue']`
exports.salesLocation = () =>`//input[@name='travelAgencyConfigBean.salesLocation']`
exports.agencyName = () =>`//input[@name='travelAgencyConfigBean.agencyName']`
exports.arcNumber = () =>`//input[@name='travelAgencyConfigBean.arcNumber']`
exports.iataNumber = () =>`//input[@name='travelAgencyConfigBean.iataNumber']`
exports.countryCode = () =>`//select[@name='agencyAddress.countryCode']`
exports.streetAddress = () =>`//input[@id='agencyAddress.street1']`
exports.city = () =>`//input[@id='agencyAddress.city']`
exports.stateCode = () =>`agencyAddress.stateCode`;
exports.zipCode = () =>`//input[@id='zipCode1']`
exports.timeZone = () =>'travelAgencyConfigBean.timeZoneId'
exports.contactName = () =>`//input[@name='travelAgencyConfigBean.contactName']`
exports.contactTitle = () =>`//input[@name='travelAgencyConfigBean.contactTitle']`
exports.contactPhoneNumber = () =>`//input[@name='travelAgencyConfigBean.contactPhoneNumber']`
exports.contactEmail = () =>`//input[@name='travelAgencyConfigBean.contactEmail']`
exports.domesticCountriesList = () =>'travelAgencyConfigBean.masterDomesticCountriesList'
exports.Add = () => `//span[@class='txt'][normalize-space()='< Add']`
exports.railChannel = () =>`//input[@name='travelAgencyConfigBean.railChannel']`
exports.railAgencyIdentifier = () =>`//input[@name='travelAgencyConfigBean.railAgencyIdentifier']`
exports.railCustomerIdentifier = () =>`//input[@name='travelAgencyConfigBean.railCustomerIdentifier']`
exports.agencySaveBtn = () => `//a[@id='saveButton']`

//Emergency Contacts
exports.fullNameEmergencyContactLOC = () => `//input[@name="settingsMainView.selectedViewer.emergencyContact.contactName"]`;
exports.streetAddressEmergencyContactLoc = () => `//input[@id = 'addressEmergencyContact_street1']`;
exports.cityEmergencyContactLoc = () => `//input[@id = 'addressEmergencyContact_city']`;
exports.stateEmergencyContactLoc = () => `addressEmergencyContact_state`;
exports.zipCodeEmergencyContactLoc = () => `//input[@id = 'addressEmergencyContact_postalCode']`;

//Payment
exports.clickAddPaymentCardLoc = () => `//a[@onclick="return submitAction(document.uiForm, 'addCC')"]`;
exports.nameOfCardPaymentLoc = () =>  `//input[@name = 'creditCard.label']`;
exports.cardTypePaymentLoc = () => `creditCard.brandType`;
exports.carNumberPaymentLoc = () =>  `//input[@name = 'creditCard.dispCCNumber']`;
exports.expirationYearPaymentLoc = () =>  `creditCard.dispYearName`;
exports.cardHoldersNamePaymentLoc = () => `//input[@name="creditCard.name"]`;
exports.streetPaymentLoc = () =>  `//input[@id='addressCreditCard_street1']`;
exports.cityPaymentLoc = () =>  `//input[@id='addressCreditCard_city']`;
exports.statePaymentLoc = () =>  `addressCreditCard_state`;
exports.zipCodePaymentLoc = () =>  `//input[@id='addressCreditCard_postalCode']`;

//Add a delegate
exports.clickAddADelegateLoc= () => `//a[@href="javascript:submitAction(document.uiForm, 'adduser');"]`;
exports.enterEmailAddressDelegateLoc = () => `//input[@name = 'search_name']`;
exports.validateEmailDelegateLoc = () => `(//span[@class="OneLinkNoTx"])[3]`;
exports.validateEmailDelegateAccessLoc = () => `(//td[@class="OneLinkNoTx"])[2]`;
exports.deleteEmailDelegateAccessLoc = () => `//a[@id="delegateDel.link"]`;


//Become a delegate
exports.clickBecomeADelegateLoc = () => `//a[@href="javascript:submitAction(document.uiForm, 'requestDelAccess');"]`;

// Travel Policy
exports.clickTravelPolicyLinkLoc = () => `//li[@id="travelPolicy"]/a`;
exports.clickPolicyListLinkLoc = () => `(//table[@class="full"]/tbody/tr/td/a)[1]`;
exports.clickPolicySetsLinkLoc = () => `(//table[@class="full"]/tbody/tr/td/a)[2]`;
exports.clickAddANewTravelPolicyLinkLoc = () => `//tr[@class="tableFooterBar"]/td/a`;
exports.enterPolicyNameLoc = () => `//input[@name="travelPolicyBean.name"]`;
exports.deletePolicyListLoc = () => `//img[@title="Remove Travel Policy"]`;
exports.deletePolicySetLoc = () => `//table[@class="tableBorder"]/tbody/tr[3]/td[4]/a`;
exports.clickBackLinkLoc = () => `//span[@class="backLink"]`;
exports.enterPolicySetNameLoc = () => `//table[@class = "full"]/tbody/tr[3]/td[3]/input`;
exports.addPolicyLoc = () => `//div[@class="btnBar"]/a[2]/span/span`;
exports.selectPolicyLoc = () => `(//input[@name="saseb.selectedId"])[2]`;
exports.clickOkLoc = () => `//div[@class="btnBar"]/a[1]/span/span`;
exports.enterFlightPolicyLoc = () => `(//input[@id="travelPolicyBean.flightPolicy.differenceInFeeCap"])[1]`;

// Display Configuration
exports.clickDisplayConfigurationLinkLoc = () => `//li[@id="policyDisplay"]/a`;
exports.enterConfigurationNameLoc = () => `//input[@name='dcb.name']`;
exports.deleteDisplayConfigurationLoc = () => `//img[@title="Remove Display Configuration"]`;

//Compliance Codes
exports.clickComplianceCodesLinkLoc = () => `//li[@id="complianceCodes"]/a`;
exports.enterComplianceCodeLoc= () => `//input[@name="ccBean.code"]`;
exports.enterDisplayReasonTextLoc = () => `//textarea[@name="ccBean.reasonText"]`;
exports.deleteComplianceCodeLoc = () => `//img[@title = "Remove Compliance Code"]`;

//Rules tab
exports.serviceRules = () => `//a[@onclick='return safeGoto("/cpm/ds/mango/rules/enablementRulesMatrix.do");']`
exports.addEditRulesInGroup = (groupname) => `//a[contains(text(),"${groupname}")]/../../td[3]/a`
exports.activeRule = () => `//input[@type="checkbox"][@name="EPB.active"]`
exports.enableDeemTravel = () => `//input[@type="checkbox"][@name="EPB.svcBean.enabled"]`
exports.enableTrain = () => `//input[@id="railTravelRuleChk"]`
exports.tavelPolicies = () => `EPB.travelVendorPrefBean.policyStr`

exports.airlinePreferenceSet = () => `EPB.travelVendorPrefBean.airlinePrefStr`
exports.rentalCarPreferenceSet = () => `EPB.travelVendorPrefBean.rentalCarPrefStr`
exports.hotelChainPreferenceSet = () => `EPB.travelVendorPrefBean.hotelChainPrefStr`
exports.restrictedCountriesSet = () => `EPB.travelVendorPrefBean.rcSetStr`

exports.airCodesSet = () =>`EPB.travelVendorPrefBean.complianceCodeStr`
exports.trainCodesSet = () =>`EPB.travelVendorPrefBean.complianceCodeRailStr`
exports.hotelCodesSet = () =>`EPB.travelVendorPrefBean.complianceCodeHotelStr`
exports.carRentalCodesSet = () =>`EPB.travelVendorPrefBean.complianceCodeCarStr`
exports.paymentCodeCodesSet = () =>`EPB.travelVendorPrefBean.complianceCodeCardStr`
exports.agencyConfigurationSet = () =>`EPB.travelVendorPrefBean.agencyConfigStr`
exports.alternateAirportSet = () =>`EPB.travelVendorPrefBean.altAirportStr`
exports.configuration = () =>`EPB.travelVendorPrefBean.dispConfStr`

exports.paymentCardSet = () =>`EPB.travelVendorPrefBean.corporateCardStr`
exports.sitePaymentCardSet = () =>`EPB.travelVendorPrefBean.siteCardStr`
exports.virtualPaymentSet = () =>`EPB.travelVendorPrefBean.virtualPaymentStr`

exports.hotelPerDiemSet = () =>`EPB.travelVendorPrefBean.hotelDiemStr`
exports.referencePointsSet = () =>`EPB.travelVendorPrefBean.refPointStr`

exports.airlineRateSet = () =>`EPB.travelVendorPrefBean.airlineRateStr`
exports.trainPrivateRateSet = () =>`EPB.travelVendorPrefBean.railPrivateRateStr`
exports.rentalCarHotelDiscountCodeSet = () =>`EPB.travelVendorPrefBean.rentalCarRateStr`
exports.hotelPrivateRateSet = () =>`EPB.travelVendorPrefBean.hotelRateStr`

exports.company = () =>`EPB.travelVendorPrefBean.companyInfoStr`
exports.customFieldSet = () =>`EPB.travelVendorPrefBean.cfSetStr`

exports.enableCarServiceWithTheFollowingOptions = () =>`//input[@type="checkbox"][@name="EPB.metadataServiceBeans[1].enabled"]`
exports.configuration = () =>`EPB.metadataServiceBeans[1].selectedConfigId`
exports.referencePointsSets = () =>`EPB.metadataServiceBeans[1].selectedRefPointId`
exports.PaymentCardsSet = () =>`EPB.metadataServiceBeans[1].selectedCorpCardId`
exports.sitePaymentCardSet = () =>`EPB.metadataServiceBeans[1].selectedSiteCardId`

exports.ruleSaveButton = () =>`(//span[@class="txt"])[1]`
exports.ruleCancelButton = () =>`(//span[@class="txt"])[2]`

//Custom fields
exports.clickCustomFieldsLoc = () => `//li[@id="customFields"]/a`;
exports.enterCollectionNameLoc = () => `//input[@name="cfBean.collectionName"]`;
exports.deleteCustomFieldsLoc = () => `//img[@title="Remove Custom Field Collection"]`;
exports.clickAddANewCustomFieldsLoc = () => `//tr[@class="tableFooterBar"]/td/table/tbody/tr/td/a`;
exports.enterFieldNameLoc = () => `//input[@name="cfFieldBean.name"]`;

//Site payment cards
exports.clickSitePaymentCardLinkLoc = () => `//li[@id="sitePaymentCards"]/a`;
exports.enterCardNameLoc = () => `//input[@name="siteCard.name"]`;
exports.enterCardTypeLoc = () => `siteCard.cardType`;
exports.enterCardNumberLoc = () => `//input[@name="siteCard.cardNumber"]`;
exports.selectSitePaymentCardLoc = () => `//input[@name="saseb.selectedId"]`;
exports.deleteSitePaymentCardLoc = () => `//img[@title="Remove Site Payment Card"]`;
exports.selectHotelLoc = () => `(//input[@name="siteCard.cardForHotel"])[1]`;
exports.selectExpiryYearLoc = () => "siteCard.dispYear";

//Virtual payment providers
exports.clickVPayLinkLoc = () => `//li[@id="virtualPaymentProviders"]/a`;
exports.enterVPayNameLoc = () => `//input[@name="virtualPaymentBean.name"]`;
exports.enterVendorLoc = () => `virtualPaymentBean.vendorId`;
exports.enterAccountCodeLoc = () => `//input[@name="virtualPaymentBean.accountCode"]`;
exports.enterAgentIdLoc = () => `//input[@name="virtualPaymentBean.agentId"]`;
exports.enterBookerIdLoc = () => `//input[@name="virtualPaymentBean.bookerId"]`;
exports.enterHotelPaymentInstructionsLoc = () => `//input[@name="virtualPaymentBean.paymentInstructions"]`;
exports.deleteVPayLoc = () => `//img[@title="Remove Virtual Payment"]`;

//Private rate
exports.clickPrivateRatesLinkLoc = () => `//li[@id="privateRates"]/a`;
exports.enterPrivateRateNameLoc = () => `//input[@name="negotiatedAirRateBean.negotiatedRateName"]`;
exports.selectStartMonthLoc = () => `negotiatedAirRateBean__start_month`;
exports.selectStartDayLoc = () => `negotiatedAirRateBean__start_day`;
exports.selectStartYearLoc = () => `negotiatedAirRateBean__start_year`;
exports.selectEndMonthLoc = () => `negotiatedAirRateBean__end_month`;
exports.selectEndDayLoc = () => `negotiatedAirRateBean__end_day`;
exports.selectEndYearLoc = () => `negotiatedAirRateBean__end_year`;
exports.selectAirlineToApplyPrivateRateLoc = () => `negotiatedAirRateBean.airSelectedAirlineCodes`;
exports.setPrivateRateLoc = () => `(//table[@class="full"]/tbody/tr/td/a)[5]`;
exports.deletePrivateRateLoc = () => `//img[@title="Remove Airline Rate"]`;
exports.deleteLinkLoc = () => `//a[contains(@onclick,'doRemove')]`;
exports.clickAddACollectionLinkLoc = () => `//tr[@class="tableFooterBar"]/td/table/tbody/tr/td/a`;
exports.selectNewCustomSetLoc = () => `//input[@name="cfList[1].isSelected"]`;
exports.clickAddButtonLoc = () => `(//div[@class="btnBar"]/a/span/span)[1]`;
// // Add user selectors
// exports.adduserNameTextBox = () => `//input[@name="userAccountBean.userName"]`;
// exports.externalIDTextBox = () => `//input[@name="userAccountBean.externalId"]`;
// exports.emailTextBox = () => `//input[@name="userAccountBean.email"]`;
// exports.firstNameTextBox = () => `//input[@name="userAccountBean.firstName"]`;
// exports.lastNameTextBox = () => `//input[@name="userAccountBean.lastName"]`;
// exports.searchCriteriaUserNameTextBox = () => `//input[@name="searchCriteriaBean.firstName"]`;
// exports.searchResult = () => `//tr[@class="tableBar"]/../tr[2]`;
// exports.signOut = () => `//div[@class ="barBtn right signOutLink"]/a`;
// exports.continueButton = () => `(//span[@class="txt"])[3]`;
// exports.addButton = () => `(//input[@type='button'])[1]`;
// exports.deactivateButton = () => `(//span[@class="txt"])[1]`;
// exports.sendReminderNow = () => `(//span[@class="txt"])[1]`;
// exports.clustera = () => `//input[@name="sdClusterDistros[0].percentage"]`;
// exports.clusterb = () => `//input[@name="sdClusterDistros[1].percentage"]`;
// exports.partnerFullName = () => `//input[@name="superDomainConfig.brandFullName"]`;
// exports.backToOverviewPage = () => `//span[@class="backLink"]`;

//supports
exports.supportCuster =  () => `(//a[contains(text(),'Support')])[2]`
exports.viewPNRXML = () => `//a[contains(text(),'View PNR XML')]`
exports.processID= () =>`//input[@name='pid']`
exports.revisionId = () =>`//input[@name='revisionId']`
exports.searchPNRXMLBtn = () => `(//span[@class ='bin']/span)[1]`
exports.xmlFile = () => `//table[2]/tbody/tr/td`;
exports.validateDateLoc = () => `(//span[@class="label"])[1]`;
exports.validateTimeLoc = () => `(//span[@class="label"])[2]`;
exports.validateMeasurementLoc = () => `(//span[@class="label"])[3]`;
exports.deleteIconLoc = () => `//a[contains(@onclick,'doRemove')]`;
exports.editServiceRulesLinkLoc = () => `//td[@class="activeRule"]`;
exports.unselectActiveRuleLoc = () => `(//input[@name="EPB.active"])[1]`;
exports.removeRuleLoc = () => `//a[contains(@onclick, 'deleteRule')]`;
exports.clickProfileTabLoc = () => "//a[@href= '/cpm/apps/init.do?_appid=Console&section=Profiles']";
exports.scheduleProfileUploadLoc = () => `//table[@class="full"]/tbody/tr[9]/td/a`;
exports.scheduleLoc = () => `//select[@name="uiBean.scheduleType"]`;
exports.jobDescriptionLoc = () => `//input[@id="txtJobDescription"]`;
exports.jobCompletionEmailLoc = () =>`//input[@id="txtJobCompleteEmail"]`;
exports.fileSourceLoc = () => `//input[@id="localChbx"]`;
exports.fileFormatLoc = () => `//input[@value="CSV"]`;
exports.allowNewUserLoc = () => `//table[@id="userUploadOptions"]/tbody/tr[2]/td/input`;
exports.useEmptyDoubleQuotesLoc = () => `//table[@id="userUploadOptions"]/tbody/tr[5]/td/input`;
exports.browseButtonLoc = () => "uploadFile";
exports.statusLoc = () => `//table[@class="tableBorder"]/tbody/tr[2]/td[5]`;
exports.singleUserDeactivationLoc = () => `//table[@class="full"]/tbody/tr[11]/td/a`;
exports.searchUserNameLoc = () => `//input[@name = 'searchCriteriaBean.userName']`;
exports.clickAddBtnLoc = () => `(//table[@class ='tableBorder']/tbody/tr[2]/td[2]/input[1])[1]`;
exports.periodicMinuteLoc = () => `//input[@name="uiBean.repeatIntervalTimeMinutes"]`;
exports.remoteFileLoc = () => `//input[@name="uiBean.sftpFilePath"]`;
exports.occursOnLoc = () => `//input[@name="uiBean.isSun"]`;
exports.occursOnBiWeeklyLoc = () => `//input[@name="uiBean.isWed"]`;
exports.startMonthLoc = () => `//select[@name = "uiBean.startMonth"]`;
exports.uploadOnlyLoc = () => `//table[@id="userUploadOptions"]/tbody/tr[1]/td/input`;

//manage site templates
exports.manageSiteTemplates =() => `//span[@id="addTemplate1.text"]`
exports.maketTemplateCompanyName = (companyname) => `//span[@class="sitePickerCol tableCol1"][contains(.,"${companyname}")]`
exports.makeTemplate = (companyname) => `//span[@class="sitePickerCol tableCol1"][contains(.,"${companyname}")]/../span[3]/a`
exports.selfServiceCheckBox = (companyname) => `//span[@class="sitePickerCol tableCol1"][contains(.,"${companyname}")]/..//input[@type="checkbox"]`
exports.makeTemplateSaveBtn = () => `//a[@id="submitButton"]`
exports.manageSite =()=>`//span[@id="manageSites.text"]`
exports.searchCompanyName = () => `//input[@id="siteshomeKey"]`
exports.sitIdNumber = (siteId)=>`//*[@id="siteshomeResultList"]//span[@title="${siteId}"]/a`
exports.sitIdList = () => `//*[@id="siteshomeResultList"]/table/tbody/tr/td[2]/span/a`
exports.selfServiceSites =() => `//input[@id="siteshomeselfServicedSitesOnly"]`
exports.selfServiceSitesSetting = (companyname) => `//span[@title="${companyname}"]/../..//a[@title="Settings"]`

exports.serviceSitesRadioBtn = (showSites) => `//*[@id="globalSiteSwitcher${showSites}Only"]`
exports.siteNameInGlobalDashboard = () => `//input[@id="globalSiteSwitcherKey"]`
exports.goButtonInGlobalDashboard = () => `//a[@id="globalSiteSwitcherButtonGo"]`
exports.siteResultList = () => `//div[@id="globalSiteSwitcherResultList"]/table/tbody/tr`
exports.resultText = () => `//*[@id="globalSiteSwitcherResultCounter"]/p`

exports.serviceSitesInChangeTools = (showSites) => `//input[@id="toolSwitcherLayermain_${showSites}Only"]`
exports.resultTextInChangeTools = () => `//*[@id="toolSwitcherLayermain_sitesResultCounter"]/p`
exports.siteResultListInChangeTools = () => `//*[@id="toolSwitcherLayermain_sitesResultList"]/table/tbody/tr`

exports.resultTextInPartnerDashboard = () => `//*[@id="siteshomeResultCounter"]/p`
exports.siteResultListInPartnerDashboard = () => `//*[@id="siteshomeResultList"]/table/tbody/tr`

exports.referencePointsLoc = () => `//li[@id='referencePoints']//a`;
exports.referencePointSetLoc = () => `(//tr[@class="tableFooterBar"]/td/a)[1]`;
exports.referenceSetNameLoc = () => `//input[@name="refPointsSetBean.name"]`;
exports.browseButtonReferenceLoc = () => "refPointsSetBean.fileLocation";
exports.uploadAndSaveReferLoc = () => `(//span[@class="bin"])[1]`;
exports.doneReferLoc = () => `(//span[@class="txt"])[3]`;
exports.deleteReferenceButtonLoc = () => `//a[@href="#"]/img`;
exports.commitChangesLoc = () => `//span[@class="changeSiteLink"]/a`;
exports.flightCarLoc = () => `(//input[@name="travelPolicyBean.carPolicy.isCarRentalRequiredForFlightTrips"])[1]`;

exports.passwordOption = () => `//td[contains(text(),'Password Options:')]`;
exports.preDefinePassword = () => `//*[@id="accountActivation"]/table/tbody/tr/td/table/tbody/tr[2]/td[2]/table/tbody/tr[2]/td/input`;
exports.passwordField = () => `//input[@name="userAccountActivationBean.password"]`;
exports.confirmPasswordField = () => `//input[@name="userAccountActivationBean.password2"]`;
exports.downloadLinkLoc = () => `(//span[@class="bin"])[2]`;
exports.refSetNameLoc = () => `(//table[@class="tableBorder"]/tbody/tr[4])/td[1]/a`;
exports.recentUploadHistoryLoc = () => `//tr[@class="tableFooterBar"]/td[2]/a`

exports.updateNotificationPopup = () => `#wm-shoutout-73396`;
exports.closeUpdateNotificationPopup = () => `//div[@class="buttons-wrapper"]//span[contains(text(),'Close')]`;
