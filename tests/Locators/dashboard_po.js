// Dashbaoard PageObject
exports.dasboardTabs = () => `//ul[@class="navBar"]/li`;
exports.addNew = () => `//p[@class='createSite']`;
exports.searchPartnerTextBox = () => `//input[@id="globalPartnersKey"]`;
exports.superDomainTextBox = () => `//input[@name="superDomainConfig.keyName"]`;
exports.fullNameTextBox = () => `//input[@name="superDomainConfig.brandFullName"]`;
exports.smallNameTextBox = () => `//input[@name="superDomainConfig.brandSmallName"]`;
exports.applicationTitleLebelTextBox = () => `//input[@name="superDomainConfig.brandTitleLabel"]`;
exports.websiteURLTextBox = () => `//input[@name="superDomainConfig.brandUrl"]`;
exports.topLevelDomainTextBox = () => `//textarea[@name="superDomainConfig.topLevelDomains"]`;
exports.copyrightTextarea = () => `//textarea[@name="superDomainConfig.copyRight"]`;
exports.emailReskinColor = () => `//input[@name="superDomainConfig.emailReskinColor"]`;
exports.termsOfUseTextarea = () => `//textarea[@name="superDomainConfig.termsOfUse"]`;
exports.helpDeskContactNameTextBox = () => `//input[@name="superDomainConfig.supportContactName"]`;
exports.helpDeskContactMethodTextBox = () => `//input[@name="superDomainConfig.supportContactMethod"]`;
exports.emailSenderDomainTextBox = () => `//input[@name="superDomainConfig.emailSenderDomain"]`;
exports.emailSenderNameTextBox = () => `//input[@name="superDomainConfig.emailSenderNotifier"]`;
exports.faxSenderNameTexBox = () => `//input[@name="superDomainConfig.faxSenderNotifier"]`;
exports.TextMessageSenderNameTextBox = () => `//input[@name="superDomainConfig.smsSenderNotifier"]`;
exports.address1Name = () => `//input[@name="superDomainConfig.primaryAddressLabel"]`;
exports.address2Name = () => `//input[@name="superDomainConfig.secondaryAddressLabel"]`;
exports.clusteraCheckBox = () => `(//input[@name="superDomainConfig.clusterDistros[0].selected"])[1]`;
exports.clusterbCheckBox = () => `//input[@name="superDomainConfig.clusterDistros[1].selected"]`;
exports.saveButton = () => `(//span[@class="bin"])[1]`;
exports.addAdminSaveButton = () => `//span[contains(text(),'Save')]`;
exports.globalSettings = () => `//a[@title='Global Settings']`;
exports.partnerSettingsOptions = () => `(//table[@class='full']/tbody/tr/td/strong/a)`;
exports.clickGoButton = () => `//a[@id="globalPartnersButtonGo"]`;
exports.clickGoPartner   = () => `//a[@id="toolSwitcherLayermain_partnersButtonGo"]`;
exports.changeToolLink = () => `//div[@id="siteButton"]`;
exports.changeToolsSearchTextBox = () => `//input[@id="toolSwitcherLayermain_partnersKey"]`;
exports.changeToolsGoButton =     () => `//a[@id="toolSwitcherLayermain_partnersButtonGo"]`;
exports.partnerID = (id) => `//span[contains(text(),'${id}')]`;
exports.partnersTabInChangeTools = () => `//a[@id="toolSwitcherLayerlnk_mainPartners"]`;
exports.userOverviewOptions = () => `(//table[@class="full"]/tbody/tr/td/a)`;



// Site Addition Selectors
exports.companyNameTextBox = () => `//input[@name='appConfig.companyName']`;
exports.siteIdTextBox = () => `//input[@name='appConfig.brandName']`;
exports.topLevelDomainDropDown = () => `//input[@name='appConfig.selectedTopLevelDomain']`;
exports.selectCountryDropDown = () => `//input[@name='appConfig.countryCode']`;
exports.numberOfEmployeeTextBox = () => `//input[@name='appConfig.numberOfEmployees']`;
exports.indrustryDropDown = () => `//input[@name='appConfig.industry']`;
exports.companyUsageDropDown = () => `//input[@name='appConfig.companyUsageTypeId']`;

// New Adminstrator
exports.newAdministrator = () => `//a[contains(.,"Add A New Dashboard Administrator")]`;

exports.userNameTextBox = () => `//input[@name='adminAccountBean.userName']`;
exports.firstNameTextBox = () => `//input[@name='adminAccountBean.firstName']`;
exports.lastNameTextBox = () => `//input[@name='adminAccountBean.lastName']`;
exports.emailTextBox = () => `//input[@name='adminAccountBean.email']`;
exports.passwordTextBox = () => `//input[@name='adminAccountBean.password']`;
exports.confrimPasswordTextBox = () => `//input[@name='adminAccountBean.password2']`;

exports.globalCheckBox = () => `//input[@name='adminAccountBean.isGlobalAdmin']`;
exports.superDomainAdminCheckBox = () => `//input[@name='adminAccountBean.isSuperDomainAdmin']`;
exports.domainAdminCheckBox = () => `//input[@name='adminAccountBean.isDomainAdmin']`;

//edit user
exports.title = () =>`personalInfo.title` //name
exports.searchedUsernameForEdit = () => `//table[@class="tableBorder"]/tbody/tr[2]/td/a`
exports.userTitle = () => `//table[@class="collapsed"]/tbody/tr[2]/td[2]`
exports.userGender = () => `personalInfo.gender`

//service Preference
exports.redress  = () => `//input[@name="travelPreference.travelPref.redress"]` 
exports.knownTravelerNumber = () => `//input[@name="travelPreference.travelPref.knownTravelerNumber"]`
exports.expirayMonth = () => `travelPreference.travelPref.knownTravelerNumberExpMonth` //name
exports.expirayYear  = () => `travelPreference.travelPref.knownTravelerNumberExpYear` //name
exports.displayAlert  = () => `travelPreference.travelPref.knownTravelerNumberExpAlertDay` //name 
exports.KTNSaveBtn  = () => `//div[@id="buttonSave"]/span` 


