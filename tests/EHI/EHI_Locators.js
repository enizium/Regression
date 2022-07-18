"use strict";

//login page selectors
exports.enterUsername = () => "//input[@id='emailAddress']";

//trip planner page
exports.homeButton = () => ".deem-chrome-navbar .deem-chrome-menu-head";
exports.travelIcon = () => "(//div[@class='deem-chrome-navbar']//div[@class='deem-chrome-box']//div[@class='deem-chrome-menu-head']/..//div[@class='deem-chrome-menu-items']/a)[2]";

exports.deliveryDropDown = () => "(//div[@class='UIGroupedItemsMenuLabel'])[1]"
exports.collectionDropDown = () => "(//div[@class='UIGroupedItemsMenuLabel'])[2]"

exports.deliveryLocation = () => `((//ul[@class='UIGroupedItemsMenuItems'])[2]/li/a)`;
exports.collectionLocation = () => `((//ul[@class='UIGroupedItemsMenuItems'])[4]/li/a)`;
exports.locations = () => "(//ul[@class='UIGroupedItemsMenuItems'])[1]/li";
exports.carPickUpDeliveryAddress = () => "carPickupDeliveryAddressRadio0";
exports.carDropOffCollectionAddress = () => "carDropoffCollectionAddressRadio0";
exports.errorMessage = () =>`//div[@id="errors"]`;


exports.settingsMenuIcon = () => '.deem-chrome-menu-head i.fa-cog';
exports.mainHeaderMenu = () => "(//div[@class = 'deem-chrome-menu-head'])[4]";
exports.accountMenuLink = () => '(//a[contains(@href, "settings")])[2]';
exports.travelMenuLink = () => '(//a[contains(@href, "trip_planner")])[1]';
exports.travelPreferencesLink = () => 'a.tvl';
exports.listOfNameOfCarRentalWithMembership = () => `//td[contains(@id, 'Rental Car company') and not(contains(@id, 'company0'))]`;
exports.listOfNumberValueOfCarRentalWithMembership = () => `//td[contains(@id, 'Rental Car company') and not(contains(@id, 'company0')) ]//following-sibling::td[1]`;
exports.carSpecialRequest = () => "//span[text()= 'Car Special Requests']" //this is language independent
exports.carRentalWithMembershipDropDown = () => `//td[contains(@id, 'Rental Car company0')]`; //enterprise value: ET, national value: ZL
exports.idCarRentalWithMembershipDropDown = () => 'travelPreference.travelPref.carMembershipVendor[0].carMembershipVendor'; //enterprise value: ET, national value: ZL
exports.xpathIdForCanrentalMembershipDropdown = () => "//select[contains(@id , 'carMembershipVendor')]";
exports.listOfEditButtonInCarRentalMembership = () => `//a[contains(@onclick, 'editRentalCarMembership')]`;
exports.listOfDeleteButonInCarRentalMembership = () => `//a[contains(@onclick, 'deleteRentalCarMemebership')]`;
exports.addButtonInCarRentalMembership = () => `//a[contains(@onclick, 'addRentalCarMembership')]`;
exports.existingCarRentalMemberShipForGivenProfile = (profile) => `//td[contains(@id, 'Rental Car company') and contains(text(), '`+profile+`')]`;
exports.deleteButtonInCarRentalMembershipForGivenProfile = (profile) => `//td[contains(@id, 'Rental Car company') and contains(text(), '`+profile+`')]//following-sibling::td//a[contains(@onclick, 'deleteRentalCarMemebership')]`
exports.editButtonInCarRentalMembershipForGivenProfile = (profile) => `//td[contains(@id, 'Rental Car company') and contains(text(), '`+profile+`')]//following-sibling::td//a[contains(@onclick, 'editRentalCarMembership')]`
exports.carMembershipNumberInputField = () => "//input[contains(@name, 'carMembershipNumber')]";
exports.emeraldClubNumberFieldInPopUp = () => "//input[@id ='ecNo']";
exports.popUpModal = () => "#emeraldClubEnrollmentLayerBodyDiv";
exports.popupMessageContent = () => "(//div[@class = 'title'])[3]";
exports.popupAddToProfileMessageContent = () => "(//div[@class = 'title'])[3]//following-sibling::div[@class = 'label']";
exports.deepLinkInPopup = () => "(//div[@class = 'title'])[3]//following-sibling::div[@class = 'title bold']//a";
exports.emeraldClubEnrollmentPopup = () => `//div[@class="v3 modalLayerMask showBlock"]`


exports.emeraldClubEnrollmentSkipButton = () => "//span[@id ='enrollEC_close']";
exports.emeraldClubEnrollmentSaveButton = () => "//span[@id ='enrollEC_continue']";
exports.clickOnSaveOnCar = () => "(//a[@id = 'buttonSave'])[4]";

exports.carDeliveryCheckbox = () => `//input[@id="carPickupDeliveryAddressRadio0"]`
exports.carDeliveryAddressSelectBox = () =>`//div[@id="pickupDeliveryAddress0.wrapper"]//div[@class="UIGroupedItemsMenuLabel"]`
exports.carFirstDeliveryAddress = () => `//div[@id="pickupDeliveryAddress0.wrapper"]//ul[@id="pickupDeliveryAddress0_MRU"]/li[1]/a`

exports.carCollectionCheckbox =() => `//input[@id="carDropoffCollectionAddressRadio0"]`
exports.carCollectionAddressSelectBox = () =>`//div[@id="dropoffCollectionAddress0.wrapper"]//div[@class="UIGroupedItemsMenuLabel"]`
exports.carFirstCollectionAddress = () => `//div[@id="dropoffCollectionAddress0.wrapper"]//ul[@id="dropoffCollectionAddress0_MRU"]/li[1]/a`

//carAddress from car result page
exports.deliveryAddres = () => `(//div[@class="resultContentExtra"])[1]`
exports.collectionAddress =() => `(//div[@class="resultContentExtra"]//span[@class="OneLinkNoTx"])[1]`
exports.clickSelectButtonLoc = () => `//div[@class="moreInfo carRentalButton"]/span/a`;
exports.validatePolicy = () => `//*[@id="outOfPolicy"]`;

exports.carListCount =() => `(//table[@class="tableLayout1 profileMembership"])[3]/tbody/tr`
exports.carMembershipDeleteBtn =() => `(//table[@class="tableLayout1 profileMembership"])[3]/tbody/tr[3]/td[3]/a[2]`



