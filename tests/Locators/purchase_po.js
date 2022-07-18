"use strict";

// Language Selection locators
exports.tripName = () =>
  '//input[@class = "name-your-trip field"]';
exports.purchaseButton = () => "//a[@id='buttonPurchase']/span";
exports.modifyOrPurchase = () => "//a[@id='buttonPurchase']/span";

exports.holdThisTriplength = () => '//div[@data-tracking-id="trip-cost-summary"]/div';
exports.holdThisTrip = (index) => `//div[@data-tracking-id='trip-cost-summary']/div[${index}]/button[2]`;
exports.changeTraveler = () => "//span[@id='changeTravelerBlock']";
exports.selectBilling = () => "#airBilling1";
exports.selectTrainBilling = () => "#railBilling1";
exports.autoSiteCardLoc = () => "#airBilling1";
exports.autoSiteCardIndex = () => "{ index: 1 }";
// exports.paymentID = () => "#airBilling1"
exports.autoSitePaymentCard = () => "1";
exports.selectCarBilling = () => '#carBilling1';
exports.selectAirBilling = () => '#airBilling1';

//OTFOP
exports.cardHolderNameLoc = () => "#paymentCreditCard_holder_name";
exports.creditCard_number = () =>"#paymentCreditCard_number"
exports.clickHotelContinueButton = () => "//a[@id='alAcceptButton']";
exports.hotelBillingSite = () => "#hotelBilling1";
exports.paymentCreditCard_cid = () => "#paymentCreditCard_cid"
exports.billingStreetAddress = () => "//*[@id='paymentCreditCard_billing_address_street1']"
exports.billingCity = () => '//*[@id="paymentCreditCard_billing_address_city"]'
exports.billingZipCode = () => '//*[@id = "paymentCreditCard_billing_address_postalCode"]'

exports.acknowledgeCheckBox = () => "//input[@id='ackcheckboxTrain']";

//OTFOP
exports.cvvTextBox = (tripType) => `//div[@id='${tripType}Billing1_cvv']/input`;
//Additional Information
exports.projectCode = () => "//input[@id='cfCollectionsField00']";
exports.billableNonBillable = () => "cfCollectionsField01";
exports.tripPurpose = () => "cfCollectionsField02";
exports.reasonForHotel = () => "cfCollectionsField20";

//CompanyPolicyCompliance
exports.CPCTitle = () => "(//div[contains(.,'Company Policy Compliance')])[5]";
exports.hotelTitleCPC = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"hotel")]';
exports.hotelReasonOptions = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"hotel")]/div/div/div[1]';
exports.hotelSelectReason = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"hotel")]/div/div/div/div[1]';

exports.flightTitleCPC = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"flight")]';
exports.flightReasonOptions = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"flight")]/div/div/div[1]';
exports.flightSelectReason = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"flight")]/div/div/div/div[1]';

exports.carRentalTitleCPC = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"Car Rental")]';
exports.carRentalReasonOptions = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"Car Rental")]/div/div/div[1]';
exports.carRentalSelectReason = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"Car Rental")]/div/div/div/div[1]';

exports.trainTitleCPC = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"train")]';
exports.trainReasonOptions = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"train")]/div/div/div[1]';
exports.trainSelectReason = () =>
  '//div[@tabindex="1"]/../../../div[contains(.,"train")]/div/div/div/div[1]';
exports.textareaCPC = () => "//div[contains(.,'Purpose of trip')]/textarea";

//Traveler Acknowledgement
exports.travelAcknoledgementPopup = () => '//*[@id="tsaLayer"]';
exports.travelAcknoledgementContinueBtn = () => '//*[@id="alAcceptButton"]';
exports.travelAcknoledgementHotelName = () => '//*[@id="buttonPolicyGroup"]/../div'

//Travel Acknowledgement in Hold trip page.
exports.travelAcknoledgementContinueBtnInHoldTrip = () =>
  '//a[@id="holdAcceptButtonContinue"]';

exports.carBilling = () => "carBilling1";
exports.railBilling = () => "railBilling1";
exports.hotelBilling = () => "hotelBilling1";
exports.paymentCreditCardType = () => "paymentCreditCard_type";
exports.paymentCreditCard_ExpiryMth = () => "paymentCreditCard_expiry_month";
exports.paymentCreditCard_ExpiryYr = () => "paymentCreditCard_expiry_year";
exports.paymentCreditCardBillingAddress = () => "paymentCreditCard_billing_address_state"
exports.paymentCreditCardBillingCountry = () => "paymentCreditCard_billing_address_country";
 //Car Rental Preference and Rewards Programs
 exports.membCar = () =>'//div[@class="car-rental-preference"]//span[@class="read-selected-vendor read-only-value"]'
 exports.membCarNumber = () =>'(//div[@class="car-rental-preference"]//div[@class="membershipDetail"]/input)[1]'
 exports.specialReqMobile = () =>"//div[@class='multiSelectCheckboxDropdown']//input[@value='PHN']"
 exports.specialReqDoor = () => "//div[@class='multiSelectCheckboxDropdown']//input[@value='ADL']"
 exports.carSpecialRequest2 = () =>"carSpecialRequest2"
 exports.carSpecialRequest2Id = () =>'//*[@id="carSpecialRequest2"]'
 exports.carSpecialRequest5 = () => "carSpecialRequest5"
 exports.carSpecialRequest5Id = () =>'//*[@id="carSpecialRequest5"]'

//Train Ticket Notification
exports.trainTicketNotiCheckbox = () => '//*[@id="ackcheckboxTrain"]'

exports.selectBillingDropdown = (type1) => `#${type1}Billing1`;
exports.selectBillingCard = (type2) => `${type2}Billing1`
//emergency contact section
exports.emergencyContact = () => "//span[normalize-space()='Emergency Contact']"
exports.salutation = () => "ownerPaxTitle"

//travelfusiom
exports.continueWebFare = () => "//a[@id='buttonContinueWebFare']";
exports.bagsToCheckloc = () => "travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerPassenger.numberOfBags";
exports.termsAndConditionAcknowledgementLoc = () => `//input[@id="ackcheckbox"]`;
exports.termsAndConditionAcknowledgement = () =>'//*[@id="ackcheckboxTrain"]';
exports.railDeliveryEmail = () => "//input[@id='railDeliveryEmailAddress']"
exports.railDeliveryEmailAdress = () => "//input[@id = 'railDeliveryEmailAddress']"

exports.phxTitle = () => "//*[@id='phxTitle']"
exports.ownerPaxFName = () => "//input[@id='ownerPaxFName']"
exports.ownerPaxLName = () => "//input[@id='ownerPaxLName']"
exports.dob_month = () => "travelDelegate_reviewPageBean_tripReviewBeanList_0__purchaseInfoBean_ownerPassenger__dob_month"
exports.dob_day = () => "travelDelegate_reviewPageBean_tripReviewBeanList_0__purchaseInfoBean_ownerPassenger__dob_day"
exports.dob_year = () => "travelDelegate_reviewPageBean_tripReviewBeanList_0__purchaseInfoBean_ownerPassenger__dob_year"
exports.gender = () => "select gender"
exports.travelDelegateEmail = () => "travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerPassenger.email"

exports.businessPhone = () =>"//*[@name='travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerPassenger.businessPhone']"
exports.cellPhone = () =>"//*[@name='travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerPassenger.cellPhone']" 
exports.street = () => "//*[@name='travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerPassenger.street1']"
exports.city = () => "//*[@name='travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerPassenger.city']"
exports.stateCode = () =>"//*[@name='travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerPassenger.stateCode']"
exports.postalCode = () =>"//*[@name='travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerPassenger.postalCode']"
exports.reasonForHotel = () => "cfCollectionsField20";
exports.countryCode = () => 'travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerPassenger.countryCode';

 //flight Preference and Rewards Programs
 exports.membershipsAirlineInPurchase = () => "div[class='membershipInfo frequent-flyer clearAfter'] span[class='read-selected-vendor read-only-value']"
 exports.membershipsNumberInPurchase = () =>'//*[@id="UA_0"]'
 exports.airSpecialrequests = () => "//div[@id='flightSpecialRequests']"

//Hotel Preference and Rewards Programs
 exports.membHotel = () =>'//div[@class="hotel-preference"]//*[@span=contains(.,"hotel")]/../div/.././div[3]/div[2]/div/span'
 exports.membHotelNumber = () => '//div[@class="hotel-preference"]//div[@class="membershipDetail"]/input'
 exports.hotelSpecialreq = () => '//*[@id="hotelSpecialRequests"]'
 
 //Train Preference and Rewards Programs
 exports.membTrain = () =>'//*[@name="travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownervendorCode_0"]/../span'
 exports.membTrainNumber = () =>'//*[@name="travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownerloyaltyNumber_0"]'

 exports.flightTermsAndConditionsLoc = () => "//input[@id='ackcheckboxSWABIZ']"
 exports.pageTitle = () => "//span[@class='subTitle']"

 exports.holdThisTripTrainLoc = () => "//div[@data-tracking-id='trip-cost-summary']/div[4]/button[2]"
 exports.railTermsAndConditionsLoc = () => `//input[@id = 'ackcheckboxTrainTermsAndConditions']`;

 exports.costAllocationValidationLoc = () => `(//div[@class="section-title emergency-contact-sect-title"])`
 exports.costallocationValueLoc= () => `//div[@class="purchaseCostAllocationBody"]/div/input`
 exports.costallocationValueLocSuggested= () => `//div[@id="acContainer_5487_5487"]//ul/li[1]`
 exports.amexGbtProfileConnectConfigureLoc = () => '//div[@class="messageBoxContent information"]';
 exports.contactDetailViewLoc = () => "(//a[@class='btn btnSm'])[1]"
 exports.delegatesViewLoc = () => "(//a[@class='btn btnSm'])[2]"
 exports.addressBookViewLoc = () => "(//a[@class='btn btnSm'])[3]"
 exports.displaySettingViewLoc = () => "(//a[@class='btn btnSm'])[4]" 

 exports.prederenceEdit= () =>`//div[@class='displaySegment preference-rewards-sect']//span[@class='edit-sect-link fr']`
 exports.frequentFlyerPrograms = () => `travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownervendorCode_0`
 exports.flightname = () => `//div[@class="flight-preference"]//select[@name="travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownervendorCode_0"]`
 exports.airlineNumber = () =>`//div[@class="flight-preference"]//input[@class='holdTripMembership']`
 exports.hotelRewardsPrograms = () => `travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownervendorCode_1`
 exports.hotelNumber = () =>`//div[@class="hotel-preference"]//input[@class='holdTripMembership']`
 exports.carRentalMembership = () => `travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownervendorCode_2`
 exports.carNumber = () =>`//div[@class="car-rental-preference"]//input[@class='holdTripMembership']`

 //Preference and Rewards Programs
//Flight
exports.editpreferenceAndRewardsPrograms = () =>  `(//span[@class="edit-sect-link fr"]/a)[1]`
exports.selectFrequentFlyerPrograms =() => `travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownervendorCode_0`
exports.selectFrequentFlyerProgramsNumber= () => `//div[@class="flight-preference"]//div[@class="membershipDetail"]/input`
exports.specialRequest1 = () => `//div[@class="flight-preference"]//input[@id="airSpecialRequest1"]`
exports.specialRequest2 = () => `//div[@class="flight-preference"]//input[@id="airSpecialRequest2"]`
exports.specialRequest3 = () => `//div[@class="flight-preference"]//input[@id="airSpecialRequest3"]`

//hotel
//exports.hotelRewardsPrograms =() => `//div[@class="hotel-preference"]//select[@class="select holdTripMembership"]`
exports.hotelRewardsPrograms =() => `travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownervendorCode_1`
exports.hotelRewardsProgramssNumber= () => `//div[@class="hotel-preference"]//input[@class="holdTripMembership"]`
exports.hotelSpecialRequest0 = () => `//div[@class="hotel-preference"]//input[@id="hotelSpecialRequest0"]`
exports.hotelSpecialRequest1 = () => `//div[@class="hotel-preference"]//input[@id="hotelSpecialRequest1"]`
exports.hotelSpecialRequest2 = () => `//div[@class="hotel-preference"]//input[@id="hotelSpecialRequest2"]`

//car
exports.carRentalMembership =() => `travelDelegate.reviewPageBean.tripReviewBeanList[0].purchaseInfoBean.ownervendorCode_2`
exports.carRentalMembershipNumber= () => `//div[@class="car-rental-preference"]//input[@class="holdTripMembership"]`
exports.carSpecialRequest6 = () => `carSpecialRequest6`
exports.holdThisTripPurchasePage = () => `//a[@id="buttonHold"]`

//costAllocation
exports.costAllocation = () => `//div[@id="displayCostAllocationHierarchy"]`
exports.primaryCostAllocation = () => `//input[@id="5544_5544_PRIMARY"]`
exports.primaryCostAllocation1stOption = () => `//div[@id="acContainer_5544_5544_PRIMARY"]//li[1]`
exports.secondaryCostAllocation = () => `//input[@id="5544_5544_SECONDARY"]`
exports.secondaryCostAllocation1stOption = () => `//div[@id="acContainer_5544_5544_SECONDARY"]//li[1]`
exports.singleCostAllocation = () => `//div[@class="purchaseCostAllocationBody"]//input`
exports.singleCostAllocation1stOption = () =>`//div[@class="purchaseCostAllocationBody"]//li[1]`
exports.hotelLoyaltyNumber = (i) => `(//div[@class="hotel-preference"]//input[@class="holdTripMembership"])[${i}]`
exports.editFailMe = () => `//div[@class='displaySegment preference-rewards-sect']//div[@class='section-title']//span[2]`
exports.selectBillingCardCarService = (carService) => `${carService}Billing1`
exports.companyReporting = () => `//input[@name="travelDelegate.reviewPageBean.tripReviewBeanList[0].costSegmentAllocations[0].allocationHierarchy"]`
