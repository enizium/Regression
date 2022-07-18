"use strict";

// Segment locators
exports.continueButton = () => "(//button[@type='button']/span)[1]";
exports.holdripContinueButton = () => "//a[@id='buttonHold']"
exports.reviewDepartDate = () => '(//div[@data-tracking-id="trip-start-date"])[1]';
exports.reviewArrivalDate = () => '(//div[@data-tracking-id="trip-start-date"])[2]';
exports.reviewDepartFromTime = () => '(//span[@data-tracking-id="trip-start-time"])[1]';
exports.reviewDepartToTime = () => '(//span[@data-tracking-id="trip-end-time"])[1]';
exports.reviewReturnFromTime = () => '(//span[@data-tracking-id="trip-start-time"])[2]';
exports.reviewReturnToTime = () => '(//span[@data-tracking-id="trip-end-time"])[2]';
exports.flightCheckInDate = () => "(//span[@data-tracking-id = 'trip-review-segment-header-check-in'])[1]";
exports.flightCheckOutDate = () => "(//span[@data-tracking-id = 'trip-review-segment-header-check-out'])[3]";

exports.reviewDepartAirline =() => `(//div[@data-tracking-id="air-title"])[1]`
exports.reviewReturnAirline =() => `(//div[@data-tracking-id="air-title"])[2]`
exports.reviewDepartAirlineNum = () =>`(//div[@data-tracking-id="air-extra-title"])[1]`
exports.reviewReturnAirlineNum = () =>`(//div[@data-tracking-id="air-extra-title"])[2]`
exports.reviewDepartAirlineFare = () =>`(//div[@data-tracking-id="trip-review-segment-header-primary"])[1]`
exports.reviewDepartFromDate = () =>`(//*[@data-tracking-id="trip-start-date"])[1]`
exports.reviewDepartToDate = () =>`(//*[@data-tracking-id="trip-end-date"])[1]`
exports.reviewReturnFromDate = () =>`(//*[@data-tracking-id="trip-start-date"])[2]`
exports.reviewReturnToDate = () =>`(//*[@data-tracking-id="trip-end-date"])[2]`
exports.reviewDepartFromLoc = () =>`(//*[@data-tracking-id="first-travel-station-code"])[1]`
exports.reviewDepartToLoc = () =>`(//*[@data-tracking-id="last-travel-station-code"])[1]`
exports.reviewReturnFromLoc = () =>`(//*[@data-tracking-id="first-travel-station-code"])[2]`
exports.reviewReturnToLoc = () => `(//*[@data-tracking-id="last-travel-station-code"])[2]`
exports.holdThisTrip = () => "(//div[@data-tracking-id='trip-cost-summary']//button)[2]"
exports.reviewDepartClassCabin =() => `(//div[@data-tracking-id="air-extra-title"])[1]`
exports.reviewReturnClassCabin =() => `(//div[@data-tracking-id="air-extra-title"])[2]`


//hotel segments
exports.displayHotelName = () => "//div[@data-tracking-id='hotel-name']"

exports.checkInDate = () => "(//span[@data-tracking-id = 'trip-review-segment-header-check-in'])[2]";
exports.checkOutDate = () => "(//span[@data-tracking-id = 'trip-review-segment-header-check-out'])[1]";
exports.checkInDateLocatorInsideHotelDiv = () => "(//div[@type = 'HOTEL']//following-sibling::div)[1]";
exports.checkOutDateLocatorInsideHotelDiv = () => "(//div[@type = 'HOTEL']//following-sibling::div)[3]";

exports.checkHotelNameForGivenValue = (hotelName) => `//div[contains(text(), "`+hotelName+`")] | //span[contains(text(), "`+hotelName+`")]`
exports.checkHotelAddressForGivenValue = (hotelAdd) => `//span[contains(text(), "`+hotelAdd+`")]`
exports.displayHotelAddress = () => "//div[@data-tracking-id='hotel-name']/../.././div[3]/div[1]/span"
exports.displayHotelFare = () => `//div[@data-tracking-id="trip-review-segment-header-type"][contains(.,'Hotel')]/../../div[2]//div[@data-tracking-id="trip-review-segment-header-primary"]`
exports.hotelCategoryBadgeForCatInTRP = () => `//div[@data-tracking-id='HOTEL-segment-icon']/..//div[@class='badge-container']//div`;
exports.hotelCategoryBadgeForGBTInTRP = () => `//div[contains(text(), 'GBT DIRECT')]`;
exports.hotelCategoryBadgeForBookingInTRP = () => `//div[contains(text(), 'booking')]`;

exports.batchInReviewPage = (badge,index) => `(//div[contains(text(), '${badge}')])[${index}]`

exports.hotelCategoryBadgeForCatInTRP = () => `//div[@data-tracking-id='HOTEL-segment-icon']/..//div[@class='badge-container']//div`;
exports.hotelCategoryBadgeForGBTInTRP = () => `//div[contains(text(), 'GBT DIRECT')]`;
exports.hotelCategoryBadgeForBookingInTRP = () => `//div[ contains(text(), 'booking') and not(contains(@class,'deem-chrome-menu-title'))]`;

exports.carRentalTitle = () =>"//div[@data-tracking-id='trip-review-segment-header-type'][contains(.,'Car Rental')]"
exports.carVendor = () => '//div[@data-tracking-id="car-rental-title"]'
exports.carFare = () => '//div[@data-tracking-id="info-icon-trip-cost"]/../..'
exports.pickupTime = () => '(//div[@type="CAR_RENTAL"]//div[2]/span[1])[1]'
exports.dropoffTime = () => '(//div[@type="CAR_RENTAL"]//div[2]/span[1])[2]'
//CompanyPolicyCompliance
exports.CPCHeader =  () => "(//div[@data-test = 'dialog-header'])[2]";
exports.CPCTitle = () => "(//div[contains(.,'Company Policy Compliance')])[5]"
exports.hotelTitleCPC = () => '//div[@tabindex="1"]/../../../div[contains(.,"hotel")]'
exports.hotelReasonOptions = ()=> '//div[@tabindex="1"]/../../../div[contains(.,"hotel")]/div/div/div[1]'
exports.hotelSelectReason = () => '//div[@tabindex="1"]/../../../div[contains(.,"hotel")]/div/div/div/div[1]'
exports.flightTitleCPC = () => '//div[@tabindex="1"]/../../../div[contains(.,"flight")]'
exports.flightReasonOptions = () => '//div[@tabindex="1"]/../../../div[contains(.,"flight")]/div/div/div[1]'
exports.flightSelectReason = () => '//div[@tabindex="1"]/../../../div[contains(.,"flight")]/div/div/div/div[1]'
exports.carRentalTitleCPC = () => '//div[@tabindex="1"]/../../../div[contains(.,"Car Rental")]'
exports.carRentalReasonOptions = () => '//div[@tabindex="1"]/../../../div[contains(.,"Car Rental")]/div/div/div[1]'
exports.carRentalSelectReason = () => '//div[@tabindex="1"]/../../../div[contains(.,"Car Rental")]/div/div/div/div[1]'
exports.trainTitleCPC = () => '//div[@tabindex="1"]/../../../div[contains(.,"train")]'
exports.trainReasonOptions = () => '//div[@tabindex="1"]/../../../div[contains(.,"train")]/div/div/div[1]'
exports.trainSelectReason = () =>'//div[@tabindex="1"]/../../../div[contains(.,"train")]/div/div/div/div[1]'
exports.textareaCPC = () => "//textarea[@data-tracking-id = 'policy-explanation-input']" 
exports.textareaCPC = () => `//*[@data-tracking-id="policy-explanation-input"]`;
exports.changeTrip = () => `(//div[@data-role="page-container"]/div/div[2]/div/div/div)[1]`;
exports.HoldTripNew = () => `//*[@id="root"]/div[2]/div/div/div[2]/div/div[3]/div[2]/div/div[3]/div`;
exports.LocationNew = () => `//*[@id="root"]/div[2]/div/div/div[2]/div/div[2]/div[1]/div[2]/div`;
exports.ContinueNew = () => `//*[@id="root"]/div[2]/div/div/div[2]/div/div[3]/div[2]/div/div[3]/button`;
exports.changeTripNew = () => `//*[@id="root"]/div[2]/div/div/div[2]/div/div[1]/div`;
//add segment from review
exports.reviewAddHotelOption = () => "//*[name()='svg' and contains(@height, '16')]//parent::button" 
exports.reviewAddCarOption = () => "//*[name()='svg' and contains(@height, '15')]//parent::button"
exports.reviewAddFlightOption =() =>"//*[name()='svg' and contains(@height, '22')]//parent::button"

exports.flightSegmentSelector = ()=> "//div[@data-tracking-id='trip-review-segment-header-type' and contains(text(), 'Flight')]"
//travelfusion
exports.flightCount = () => "//div[@data-tracking-id='FLIGHT-segment-icon']" 
exports.badgeName = () => "//div[@class='badge-container']"
exports.webFareBadge = () => "//div[@data-tracking-id = 'FLIGHT-segment-icon']/..//div[@class='badge-container']";

//Car Trip Review Page

exports.carNameInTripRevievLoc = () => `//div[@data-tracking-id="car-rental-title"]`;
exports.carPickUpTimeTripReviewLoc = () => `(//div[@type="CAR_RENTAL"]/div/div[2]/span)[1]`;
exports.carDropOffTimeTripReviewLoc = () => `(//div[@type="CAR_RENTAL"]/div[2]/div[2]/span)[1]`;
exports.carTotalCostTripReviewLoc = () => `//div[@data-tracking-id="trip-review-cost-car-amount"]/div`;
exports.carRentalFromDateTripReviewLoc = () => `//span[@data-tracking-id="trip-review-segment-header-check-in"]`;
exports.carRentalToDateTripReviewLoc = () => `//span[@data-tracking-id="trip-review-segment-header-check-out"]`;

exports.carRentalFromDateTripReviewLoc = () => `(//div[@data-tracking-id="CAR_RENTAL-segment-icon"]/../div[2]//div[@data-tracking-id="trip-review-segment-header-type"]/../div/span)[1]`;
exports.carRentalToDateTripReviewLoc = () => `(//div[@data-tracking-id="CAR_RENTAL-segment-icon"]/../div[2]//div[@data-tracking-id="trip-review-segment-header-type"]/../div/span)[2]`;


//train validation
exports.reviewPageDepartTrainNameLoc = () => `(//div[@data-tracking-id="rail-title"])[1]`;
exports.reviewPageDepartTrainExtraNameLoc = () => `(//div[@data-tracking-id="rail-extra-title"])[1]`;
exports.reviewPageReturnTrainNameLoc = () => `(//div[@data-tracking-id="rail-title"])[2]`;
exports.reviewPageReturnTrainExtraNameLoc = () => `(//div[@data-tracking-id="rail-extra-title"])[2]`;
exports.reviewPageTrainDepartureDepartTimeLoc = () => `(//span[@data-tracking-id="trip-start-time"])[1]`;
exports.reviewPageTrainDepartureArrivalTimeLoc = () => `(//span[@data-tracking-id="trip-end-time"])[1]`;
exports.reviewPageTrainReturnDepartTimeLoc = () => `(//span[@data-tracking-id="trip-start-time"])[2]`;
exports.reviewPageTrainReturnArrivalTimeLoc = () => `(//span[@data-tracking-id="trip-end-time"])[2]`;
exports.reviewPageTrainDepartureDepartDateLoc = () => `(//div[@data-tracking-id="trip-start-date"])[1]`;
exports.reviewPageTrainDepartureArrivalDateLoc = () => `(//div[@data-tracking-id="trip-end-date"])[1]`;
exports.reviewPageTrainReturnDepartDateLoc = () => `(//div[@data-tracking-id="trip-start-date"])[2]`;
exports.reviewPageTrainReturnArrivalDateLoc = () => `(//div[@data-tracking-id="trip-end-date"])[2]`;
exports.reviewPageTrainFareLoc = () => `//div[@data-tracking-id="trip-review-segment-header-primary"]`;

exports.carDetailsAndRulesLink =() => `//a[@data-tracking-id="car-rental-rules"]`
exports.carDetailsAndRulesPopup = () => `//div[@data-tracking-id="car-rental-details-dialog"]/div[@data-tracking-id="dialog-header"]/div`
exports.carDetailsAndRulesPopupClose = () => `//div[@data-tracking-id="car-rental-details-dialog"]//div[@data-tracking-id="icon-closePWA"]`
exports.carAddressText = () => `(//div[@type="CAR_RENTAL"]//span[@class="mobile-hidden"])[2]`
exports.airportLocation = () => `(//div[@data-tracking-id="trip-review-segment-header-type"])[1]`;
exports.nonRefundableBadgeLoc = (i) => `(//div[@class="badge-container"]//div[@color="#ea4f35"])[${i}]`;
exports.refundableBadgeLoc = (i) => `(//div[@class="badge-container"]//div[@color="#118fc9"])[${i}]`;
exports.fareRulesLoc = (i) => `(//a[@data-tracking-id="air-details"])[${i}]`;
exports.fareBasisLabelLoc = (i) => `(//div[@role="dialog"]//div[@class="clearAfter"])[${i}]`;
exports.closeFareRulesPopUP = () => `//div[@role="dialog"]//div[@data-tracking-id="icon-closePWA"]`
exports.carDropOffAddressText = () => `(//div[@type="CAR_RENTAL"]//span[@class="mobile-hidden"])[4]`

exports.airportLocation = () => `(//div[@data-tracking-id="trip-review-segment-header-type"])[1]`
exports.airportLocation = () => `(//div[@data-tracking-id="trip-review-segment-header-type"])[1]`

//MultiDestination car 
exports.carNameInTripReviewMD = (i) => `(//div[@data-tracking-id="car-rental-title"])[${i+1}]`;
exports.firstCarPickUpTimeTripReviewMD = () => `(//div[@type="CAR_RENTAL"]/div[1]/div[2]/span)[1]`;
exports.firstCarDropOffTimeTripReviewMD = () => `(//div[@type="CAR_RENTAL"]/div[2]/div[2]/span)[1]`;
exports.secondCarPickUpTimeTripReviewMD = () => `(//div[@type="CAR_RENTAL"]/div[1]/div[2]/span)[4]`;
exports.secondCarDropOffTimeTripReviewMD = () => `(//div[@type="CAR_RENTAL"]/div[2]/div[2]/span)[4]`;
exports.carRentalFromDateTripReviewMD = (i) => `(//div[@data-tracking-id="CAR_RENTAL-segment-icon"]/../div[2]//div[@data-tracking-id="trip-review-segment-header-type"]/../div/span)[${i+1}]`;
exports.carRentalToDateTripReviewMD = (i) => `(//div[@data-tracking-id="CAR_RENTAL-segment-icon"]/../div[2]//div[@data-tracking-id="trip-review-segment-header-type"]/../div/span)[${i + 2}]`;
exports.cancelTrip = () => `//span[@id='tripCancelLink']`
exports.confirmCancellationElement = () => `//span[@id='tripCancelRulescontinueButton']`
exports.carServicePreChange = () => '//a[@data-tracking-id="car-service-change"]'
exports.addCarServiceRTP = () => '//button[@data-tracking-id="trip-review-add-car-service-button"]'
