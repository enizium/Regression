"use strict";
exports.pickUpAddressElement = () => "//input[@name='searchData.0.pickupLocationName']";
exports.flightArrivalDateElement = () =>`//input[@name="searchData.0.pickupLocationFlightDate"]`
exports.pickUpAirlineElement = () => `//input[@name='searchData.0.pickupLocationCarrier']`
exports.dropOffAirlineElement = () => `//input[@name='searchData.0.dropOffLocationCarrier']`
exports.dropOffflightNumberElement = () => `//input[@name='searchData.0.dropOffLocationFlightNumber']`;
exports.pickupFlightNumberElement = () => `//input[@name='searchData.0.pickupLocationFlightNumber']`;
exports.DropOffAddressElement = (index) => `//input[@name='searchData.${index}.dropOffLocationName']`;
exports.pickUpByTimeElement = () => `(//input[@placeholder="HH:MM"])[1]`;
exports.arriveByTimeElement = () => `(//input[@placeholder="HH:MM"])[2]`;
exports.passengersElement = () => `//select[@name='searchData.0.numberOfPassengers']`;
exports.pickUpDateElement = (index) => `//input[@name='searchData.${index}.pickupDate']`;
exports.flightDepartureDateElement = () => `//input[@name='searchData.0.dropOffLocationFlightDate']`;
exports.firstOptionInElement = (index) => `(//li[@class="m-autocompleteOption"]//span)[${index}]`;
exports.clickContinueButtonLoc = () => `//button[@class="btnNorm m-submit"]`;
exports.carServicePickUpTime = (index) => `((//div[@class="pickupBlock"])//span[@class="time"])[${index}]`
exports.carServiceDropOffTime = (index) => `((//div[@class="dropOffBlock"])//span[@class="time"])[${index}]`
exports.carServicePickUpLocation = (index) => `((//div[@class="detailLocations"])//div[@class="pickupBlock"]/span)[${index}]`
exports.carServiceDropOffLocation = (index) => `((//div[@class="detailLocations"])//div[@class="dropOffBlock"]/span)[${index}]`
exports.carServicePickUpTimeReviewPage = () => `(//div[@type="location"])[2]/div[1]`
exports.carServiceFirstPickUpTimeReviewPage = () => `(//div[@type="location"])[6]/div[1]`
exports.carServiceSecondPickUpTimeReviewPage = () => `(//div[@type="location"])[10]/div[1]`
exports.selectFirstOptionLoc = () => `(//li[@class="m-autocompleteOption"])[2]/span[1]`;
exports.clickContinueTripReviewLoc = () => `//div[@data-tracking-id="trip-cost-summary"]/div[5]/button[1]`;
exports.clickFlightNumberLoc = () => `(//input[@class="flightInput m-inputContainer"])[2]`;
exports.carServiceDropOffTimeReviewPage = () => `(//div[@type="location"])[4]/div[1]`
exports.carServiceFirstDropOffTimeReviewPage = () => `(//div[@type="location"])[8]/div[1]`
exports.carServiceSecondDropOffTimeReviewPage = () => `(//div[@type="location"])[12]/div[1]`

exports.carServiceDropOffLocationReviewPage = (index) => `(//div[@type="location"])[${index}]/div[2]`


exports.carServiceFirstDropOffLocationReviewPage = () => `(//div[@type="location"])[4]/div[2]`
exports.carServiceSecondDropOffLocationReviewPage = () => `(//div[@type="location"])[8]/div[2]`
exports.carServiceThirdDropOffLocationReviewPage = () => `(//div[@type="location"])[12]/div[2]`


exports.carServiceProviderReviewPage = () => `//div[@data-tracking-id="car-service-title"]`

exports.firstCarServiceTripConfirmation = () => `(//div[@class="resultContentExtra"])[5]`
exports.secondCarServiceTripConfirmation = () => `(//div[@class="resultContentExtra"])[11]`
exports.carServiceProviderMultipleCS =  () => `(//div[@class="sectionLowerResultLeft"])[5]`

exports.carServicePickUpTimeTripConfirmationPage = () => `//span[@class="resultContentTime"]`
exports.carServiceDropOffLocationTripConfirmationPage = () => `(//div[@class="resultContentExtra"])[2]`
exports.carServiceProviderTripConfirmationPage = () => `((//div[@class="sectionLowerResultLeft"])//span)[2]`
exports.carServicePickUpTimeTripCancellationPage = () => `//span[@class="resultContentTime"]`
exports.carServiceDropOffLocationTripCancellationPage = () => `(//div[@class="resultContentExtra"])[2]`
exports.carServiceProviderTripCancellationPage = () => `((//div[@class="sectionLowerResultLeft"])//span)[2]`
exports.carServiceProviders = () => `(//h2[@class="providerName"])`
exports.carServiceProvider = (index) => `(//h2[@class="providerName"])[${index}]`
exports.ampm = () => `m-meridianSelect meridianSelect`
exports.addStops = () => `button[class='button btnLink m-addStop']`;
exports.addStopAddressOne = () =>  `(//input[@name="searchData.0.stopLocationName"])[1]`;
exports.addStopAddressTwo = () =>  `(//input[@name="searchData.0.stopLocationName"])[2]`;
exports.firstOptionInDropOff = (index) => `(//div[@class="m-dropOffLocation m-location location"]//li[@class="m-locationOption"])[${index}]/span`;
exports.hoursElement = () => `//select[@name='searchData.0.requestedHours']`;
exports.carServiceDropOffLocationForDriveAsDirectedInReviewPage = () => `(//div[@type="location"])[4]/div[1]`
exports.carServiceDropOffTimeForDriveAsDirectedInReviewPage = () => `(//div[@type="location"])[4]/div[1]`
exports.carServiceDropOffLocationACLoc = () => `(//div[@class="resultContentExtra"])[10]`;

exports.carServicePickUpTitleReviewPage = () => `(//div[@data-tracking-id="car-service-title"])[1]`;
exports.carServicePickUpTimeReviewPage = () => `(//div[@type="location"])[4]/div[1]`;
exports.carServicePickUpLocationReviewPage = () => `(//div[@type="location"])[4]/div[2]`;
exports.carServiceDropOffTitleReviewPage = () => `(//div[@data-tracking-id="car-service-title"])[2]`;
exports.carServiceDropOffTimeReviewPage = () => `(//div[@type="location"])[8]/div[1]`;
exports.carServiceDropOffLocationReviewPage = () => `(//div[@type="location"])[8]/div[2]`;

exports.clickVehicleTypeLoc = () => `(//input[@name="filterOption"])[1]`
exports.clickCarType = (carType) => `//input[@value="${carType}"]`
exports.clickClose = () => `(//div[@class="close m-close"])[1]`;
exports.clickSUVSelectButtonLoc = () => `(//div[@data-vehicle-class="SUV"]/div[@class="resultCost"])[1]/div[3]/div`;
exports.segmentsCount = () => `//button[@class="addCarService m-addCarService"]/span[@class='locationName'][1]`;
exports.segment = (index) => `//button[@class="addCarService m-addCarService"]/span[@class='locationName'][${index}]`;
exports.lastSegment = () => `(//button[@class="addCarService m-addCarService"])[3]/span[@class="locationName"]`
