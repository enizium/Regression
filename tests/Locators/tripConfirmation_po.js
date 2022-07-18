"use strict" ;

//Trip 
exports.tripName = () => '//span[contains(@class, "tripReviewFromToCol")][1]'

//Flight locators
exports.depFlightNameAndNumber = () => '//div[contains(@class,  "flightReview")][1]//span[contains(@class, "resultName")]'
exports.depFromLocation = () => '//div[contains(@class,  "flightReview")][1]//a[@id=`tooltipDepart0`]'
exports.depToLocation = () => '//div[contains(@class,  "flightReview")][1]//a[@id=`tooltipArrive0`]'
exports.depDayAndDate = () => '//div[contains(@class,  "flightReview")][1]//span[@class="sectionDate"]'
exports.arrivalDayAndDate = () => '//div[contains(@class,  "flightReview")][2]//span[@class="sectionDate"]'
exports.depFromTime = () => '//div[contains(@class,  "flightReview")][1]//div[contains(@class, "sectionLowerResult1Content")]//span[contains(@class, "resultContentTime")]'
exports.depToTime = () => '//div[contains(@class,  "flightReview")][1]//div[contains(@class, "sectionLowerResult2")]//span[contains(@class, "resultContentTime")]'
exports.retFlightNameAndNumber = () => '//div[contains(@class,  "flightReview")][2]//span[contains(@class, "resultName")]'
exports.retFromLocation = () => '//div[contains(@class,  "flightReview")][2]//a[@id=`tooltipDepart0`]'
exports.retToLocation = () => '//div[contains(@class,  "flightReview")][2]//a[@id=`tooltipArrive0`]'
exports.retDayAndDate = () => '//div[contains(@class,  "flightReview")][2]//span[@class=`sectionDate`]'
exports.retFromTime = () => '//div[contains(@class,  "flightReview")][2]//div[contains(@class, "sectionLowerResult1Content")]//span[contains(@class, "resultContentTime")]'
exports.retToTime = () => '//div[contains(@class,  "flightReview")][2]//div[contains(@class, "sectionLowerResult2")]//span[contains(@class, "resultContentTime")]'
exports.tripConfirmationDepartAirline = () => `(//*[@class="displaySegment flightReview"]//*[@class="resultName"]/text())[1]`
exports.tripConfirmationDepartAirlineNum = () => '(//*[@class="resultNumber"])[1]'
exports.tripConfirmationDepartAirlineFare = () => '(//*[@class="price OneLinkNoTx"])[1]'
exports.tripConfirmationDepartFromLoc = () => '(//*[@class="sectionLowerResult1 sxnCol4x"]//span[@class="resultContentGrey"]/a)[1]'
exports.tripConfirmationDepartToLoc = (count) => `((//div[@class="displaySegment flightReview"])[1]//div[@class="sectionBody clearAfter"])[${count}]//div[@class="sectionLowerResult2 sxnCol2x"]//span[@class="resultContentGrey"]`

exports.tripConfirmationDepartDate = () => '(//*[@class="sectionDate"])[1]'

// exports.tripConfirmationDepartFromDate = () => `(//*[@class="sectionLowerResult1 sxnCol4x"]//*[@class="resultContentExtra"])[1]`
// exports.tripConfirmationDepartToDate = () => `(//*[@class="sectionLowerResult2 sxnCol2x"]//*[@class="resultContentExtra"])[1]`

exports.tripConfirmationDepartFromTime = () => '(//*[@class="sectionLowerResult1 sxnCol4x"]//span[@class="resultContentTime"])[1]'
exports.tripConfirmationDepartToTime = () => '(//*[@class="sectionLowerResult2 sxnCol2x"]//span[@class="resultContentTime"])[1]'

exports.tripConfirmationDepartClassCabin = () => `(//div[@class="displaySegment flightReview"][1]//div[@class="sectionLowerResult3"]//div[@class="OneLinkNoTx"])[1]`
exports.tripConfirmationReturnClassCabin = () =>   `(//div[@class="displaySegment flightReview"][2]//div[@class="sectionLowerResult3"]//div[@class="OneLinkNoTx"])[1]`

exports.tripConfirmationReturnAirline = () => '((//div[@class="displaySegment flightReview"])[2]//*[@class="resultName"]/text())[1]'
exports.tripConfirmationReturnAirlineNum = () => `(((//div[@class="displaySegment flightReview"])[2]//*[@class="resultNumber"])[1])`
exports.tripConfirmationReturnFromLoc = () => `((//div[@class="displaySegment flightReview"])[2]//*[@class="sectionLowerResult1 sxnCol4x"]//span[@class="resultContentGrey"]/a)[1]`
exports.tripConfirmationReturnToLoc = (count) => `((//div[@class="displaySegment flightReview"])[2]//*[@class="sectionLowerResult2 sxnCol2x"]//span[@class="resultContentGrey"]/a)[${count}]`

exports.tripConfirmationReturnDate = () => `((//div[@class="displaySegment flightReview"])[2]//*[@class="sectionDate"])`
exports.tripConfirmationReturnFromTime = () => '((//div[@class="displaySegment flightReview"])[2]//span[@class="resultContentTime"])[1]'
exports.tripConfirmationReturnToTime = (count) => `((//div[@class="displaySegment flightReview"])[2]//*[@class="sectionLowerResult2 sxnCol2x"]//span[@class="resultContentTime"])[${count}]`

//Hotel locators
exports.checkInDate = () => "//div[contains(@class, 'hotelReview')]//div[@class='resultContentMain']";
exports.checkOutDate = () => "//div[contains(@class, 'hotelReview')]//span[@class='resultContentMain']";
exports.hotelcheckInDayandDate = () => '//div[contains(@class,  "hotelReview")][1]//span[@class=`sectionDate`]'
exports.hotelName = () => '//div[@class="displaySegment hotelReview"]//span[@class="resultName"]'
exports.hotelAddress = () => '//div[@class="displaySegment hotelReview"]//span[@class="clearAfter"]'
exports.hotelFare = () => '//div[@class="displaySegment hotelReview"]//span[@class="price OneLinkNoTx"]'
exports.hotelFareInDollar = () => '(//div[@class="displaySegment hotelReview"]//span[contains(text(), "$")])[1]'
exports.hotelCategoryBadgeInTCPForCat = (cat) => `//span[contains(text(), '${cat}')]`;
//Car locators
exports.caCarrrierName = () => '.resultName .carrier-name'
exports.carFare = () => '//div[a[@id="carTaxFees"]]/span[@class="tripCostAmount"]'
exports.pickUpTime = () => '.carRentalReview .sectionLowerResult1 .resultContentTime'
exports.dropOffTime= () => '.carRentalReview .sectionLowerResult2 .resultContentTime'
exports.checkInDateCar = () => "(//div[contains(@class, 'carRentalReview')]//span[@class='sectionDate'])[1]";
exports.checkOutDateCar = () => "(//div[contains(@class, 'carRentalReview')]//span[@class='sectionDate'])[2]";

//Done button
exports.doneButton = () => `//span[contains(@class, "wrap")]//span[contains(., "Done")]`

//baggage fee
exports.baggageIcon = () => `//span[@class='fa fa-suitcase']`
exports.airline = () => `.baggageVendorCode`
exports.baggageCount = () => `(//*[@id="baggageFees"]/table[1]/tbody/tr[1])[1]`
exports.checkedBagType = (i) =>`//table[@class='tableLayout5'][1]/tbody/tr[`+i+`]/td[1]`
exports.checkedBagfees = (i) => `//table[@class='tableLayout5'][1]/tbody/tr[`+i+`]/td[2]`
//Train locators
exports.trainDeparture = () => `#railDepartureCity0`;
exports.trainDestination = () => `#railDestinationCity0`;

//Change Traveler 
exports.changeTravelerNameDisplayed = () => "//div[@class='read-traveler-name']"

//Car Rental Confirmation
exports.carNameInTCLoc = () => `//span[@class="carrier-name"]`;
exports.carPickUpTimeTCLoc = () => `(//div[@class="displaySegment carRentalReview"]//div[@class="sectionBody clearAfter"]//div[@class="sectionLowerResultArea"]//span[@class="resultContentTime"])[1]`;
exports.carDropOffTimeTCLoc = () => `(//div[@class="displaySegment carRentalReview"]//div[@class="sectionBody clearAfter"]//div[@class="sectionLowerResultArea"]//span[@class="resultContentTime"])[2]`;
exports.carTotalCostTCLoc = () => `(//span[@class="tripCostAmount"])[1]`;
exports.carRentalFromDateTCLoc = () => `(//div[@class="displaySegment carRentalReview"]//div[@class="sectionHeader clearAfter"]//div[@class="sectionTitle"]/span)[1]`;
exports.carRentalToDateTCLoc = () => `(//div[@class="displaySegment carRentalReview"]//div[@class="sectionHeader clearAfter"]//div[@class="sectionTitle"]/span)[2]`;

//train validation
exports.confirmationPageTrainFareLoc = () => `//span[@class="price"]`;
exports.confirmationPageDepartTrainNameLoc = () => `(//div[@class="displaySegment railReview"]//span[@class="resultName"])[1]`;
exports.confirmationPageReturnTrainNameLoc = () => `(//div[@class="displaySegment railReview"]//span[@class="resultName"])[2]`;
exports.confirmationPageReturnDepartTrainTimeLoc = (index) => `(//div[@class="displaySegment railReview"]//span[@class="resultContentTime"])[${index}]`;
exports.confirmationPageReturnArrivalTrainTimeLoc = () => `(//div[@class="displaySegment railReview"]//span[@class="resultContentTime"])[4]`;
exports.confirmationPageReturnDepartTrainDateLoc = () => `(//div[@class="displaySegment railReview"]//span[@class="resultContentGrey"])[3]`;
exports.confirmationPageReturnArrivalTrainDateLoc = () => `(//div[@class="displaySegment railReview"]//span[@class="resultContentGrey"])[4]`;
exports.confirmationPageDepartureDepartTrainTimeLoc = () => `(//div[@class="displaySegment railReview"]//span[@class="resultContentTime"])[1]`;
exports.confirmationPageDepartureArrivalTrainTimeLoc = (index) => `(//div[@class="displaySegment railReview"]//span[@class="resultContentTime"])[${index}]`;
exports.confirmationPageDepartureDepartTrainDateLoc = () => `(//div[@class="displaySegment railReview"]//span[@class="resultContentGrey"])[1]`;
exports.confirmationPageDepartureArrivalTrainDateLoc = () => `(//div[@class="displaySegment railReview"]//span[@class="resultContentGrey"])[2]`;

exports.cat35Msg = (i) => `(//a[@class="fareLabelText toolTip"]/b)[${i}]`
exports.tripConfirmationDepartStopCount = () => '(//div[@class="displaySegment flightReview"])[1]//div[@class="sectionBody clearAfter"]'

exports.tripConfirmationReturnStopCount = () => '(//div[@class="displaySegment flightReview"])[2]//div[@class="sectionBody clearAfter"]'
exports.printBtn = () =>  "#printbtn"
exports.fullName = () => `//div[@class="read-traveler-name"]`
exports.ptaURL = () => `//input[@name="approvalURL"]`

exports.carRentalDetailsAndRuleslink = () => `//a[@data-layerelement="carRentalRateDetails"]`
exports.carRentalDetailsAndRulesPopup= () => `//div[@id="carRentalRateDetailsLayerBodyDiv"]/form`
exports.carRentalDetailsAndRulesPopupClose=()=>`(//span[@id="carRentalRateDetailscloseButton"])[1]`
exports.payableLaterLoc = () => `//div[@class="tripCostRowTotal clearAfter"]`;
exports.nonRefundableBatchLoc = (i) => `(//div[@class="badgeGroup"]//span[@class="nonRefundableIcon"])[${i}]`;
exports.refundableBatchLoc = (i) => `(//div[@class="badgeGroup"]//span[@class="refundableIcon"])[${i}]`;
exports.fareRulesDepart = () => `//a[@id="openFareRules0"]`;
exports.fareRulesReturn = () => `//a[@id="openFareRules1"]`;
exports.fareBasisDepart = (i) => `(//div[@id="fareRuleDetailsLayerBodyDiv"]//div[@class="clearAfter"])[${i}]`;
// exports.bookingCodeDepart = () => `(//div[@id="fareRuleDetailsLayerBodyDiv"]//span[@class="fareBasisLabel"])[2]`;
exports.closePopUp = () => `(//a[@id="fareRuleDetailsCancelButton"])[1]`;


exports.carLocInTripConfirmation = () => "//div[@class='resultContentExtra']";
exports.payableLaterLoc = () => `//div[@class="tripCostRowTotal clearAfter"]`
exports.payableLaterLoc = () => `//div[@class="tripCostRowTotal clearAfter"]`

//Car Rental Confirmation
exports.carNameInTCDM = (i) => `(//span[@class="carrier-name"])[${i+1}]`;
exports.carPickUpTimeTCMD = (i) => `(//div[@class="displaySegment carRentalReview"]//div[@class="sectionBody clearAfter"]//div[@class="sectionLowerResultArea"]//span[@class="resultContentTime"])[${i+1}]`;
exports.carDropOffTimeTCMD = (i) => `(//div[@class="displaySegment carRentalReview"]//div[@class="sectionBody clearAfter"]//div[@class="sectionLowerResultArea"]//span[@class="resultContentTime"])[${i+2}]`;
exports.carRentalFromDateTCMD = (i) => `(//div[@class="displaySegment carRentalReview"]//div[@class="sectionHeader clearAfter"]//div[@class="sectionTitle"]/span)[${i+1}]`;
exports.carRentalToDateTCMD = (i) => `(//div[@class="displaySegment carRentalReview"]//div[@class="sectionHeader clearAfter"]//div[@class="sectionTitle"]/span)[${i+2}]`;

//hotel fail message
exports.hotelFailMsg = () => `//p[@class="multipleFailedHotel-Error"]/span`
exports.hotelFailIcon = (i) => `(//span[@class="hotelError-Icon fa fa-info-circle tip toolTip multipleHotel-Failed"])[${i}]`
exports.hotelPrice = () => `(//div[@id="floatingTripCostSection"]//div[@class="hotelTaxVal_row"])[1]`
