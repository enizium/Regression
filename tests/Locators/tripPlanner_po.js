"use strict";

// Segment locators
exports.flightSegment = () => { return "#segmentAdd > #addFlight" };
exports.hotelSegment = () => { return "#segmentAdd > #addHotel" };
exports.carSegment = () => { return "#segmentAdd > #addCar" };
exports.trainSegment = () => {return "#segmentAdd > #addRail" };

//Air booking search locators
exports.selectClass = () => `//*[@id="classBoth0"]`

exports.departureLocation = () => "#airDepartureCity0";
exports.destinationLocation = () => "#airDestinationCity0";
exports.departureDateTextBox = () => "#airDepartDate0";
exports.returnDateTextBox = () => "#airReturnDate0";
exports.moreSearchOption = () => "#showAirOptions0";
exports.searchButton = () => "//a[@id='buttonSearchFrame']";
exports.departTime = () => "#ttTimeDisplay0";
exports.hideSearchOption = () => '//*[@id="hideAirOptions0"]/span'
exports.searchByPriceSchdule = (searchType) => `//*[@id="searchBy${searchType}Tab"]`;
exports.defaultSelectPriceSchdule = (searchType) => `searchBy${searchType}Tab`;
 
// Segments
exports.segmentClose = () => ".segmentRemove .fa.fa-times";
exports.closeAllOpenSegments = () => ".segmentRemove";

// Flight Segment
exports.addFlight = () => "//span[@id='addFlight']";
exports.addHotel = () => "//span[@id='addHotel']";
exports.addCar = () => "//span[@id='addCar']";
exports.addTrain = () => "//span[@id='addRail'] ";
exports.AddFlightsFromTripReview =() =>"//*[name()='svg' and contains(@height, '22')]//parent::button"
// Menu segment
exports.tripPlanner = () => "//a[text()='Trip Planner']";

//Assist Menu
exports.assistMenuHead = () => "//div[@id='deem-chrome-assist-menu-head']";
exports.assistMenuItem = () => "//div[@id='deem-chrome-assist-items']/a";

// Reference point
exports.refePoint = (HotelSearchLocType) => `//*[@id='refPoint`+HotelSearchLocType+`List0']/option[1]`

// Hotel search locators
exports.hotelsearch = () => "#searchString0"
exports.checkInDateBox = () => "#hotelCheckInDate0"
exports.checkOutDateBox = () => "#hotelCheckOutDate0"
exports.hotelMoreSearchOption = () => "#showHotelOptions0";
exports.clickReservations = () => "//a[contains(@href,'reservations')]";
exports.departureDateBATextBox = () => "#tbaDepartDate";
exports.returnDateBATextBox = () => "#tbaReturnDate";
exports.hotel2TextBox = () => "(//input[@placeholder='Address, Airport, City, Hotel, Reference Point'])[2]"
exports.hotel3TextBox = () => "(//input[@placeholder='Address, Airport, City, Hotel, Reference Point'])[3]"
exports.hotel2CheckIn = () => "//input[@id='hotelCheckInDate1']"
exports.hotel3CheckIn = () => "//input[@id='hotelCheckInDate2']"

//Train
exports.moreSearchOptionTrain = () => "#showRailOptions0";
exports.trainDeparture = () => "#railDepartureCity0";
exports.trainDestination = () => "#railDestinationCity0";
exports.trainDepartureDate = () => "#railDepartDate0";
exports.trainReturnDate = () => "#railReturnDate0";

//car rental
exports.pickup = () =>'//*[@id="carPickupSearchString0"]'
exports.dropoff = () => '//*[@id="carDropoffSearchString0"]'
exports.pickupDate = () => '//*[@id="carPickupDate0"]'
exports.dropoffDate = () => '//*[@id="carDropoffDate0"]'
exports.autoCompletete = () => '.m-autocomplete'

//Destination Tabs
exports.closeSegment = () => `//a[@id='multiSegmentRemove']`;
exports.singleDestination = () =>`//button[@id='roundTripTab']` ;
exports.multiDestination = () => `//button[@id='multiDestTab']`;
exports.travelSegmentHeader = () => `//div[@id="travelbySegmentHeader"]`;
exports.multiDestinationSegment = (typeWithIndex) => `//a[@id="toggle${typeWithIndex}"]`;

//Multi Destination Flight Search Segment
exports.departureCity = (index) => `//span[@id="editableDepartCity${index}"]/input`;
exports.destinationCity = (index) => `//span[@id="editableDestinationCity${index}"]/input`;
exports.departureDate = (index) => `//input[@id="airDepartDate${index}"]`;

// Multi Destination Car Search Segment
exports.carPickupCity = (index) => `//input[@id='carPickupSearchString${index}']`;
exports.carDropOffCity = (index) => `//input[@id='carDropoffSearchString${index}']`;
exports.carPickupDate = (index) => `//input[@id='carPickupDate${index}']`;
exports.carDropoffDate = (index) => `//input[@id='carDropoffDate${index}']`;
//Review Hotel Addition trip planner
exports.reviewHotelSection = () => "//div[@id='searchAreaHotel0']"
exports.reviewAddHotelField = () => "//input[contains(@class,'m-hotelSearch-input')]"

//Review Car Addition trip planner
exports.reviewCarSection = () => "//div[@id='searchAreaCar0']"
exports.reviewMatchDateBox = () => "//input[@id='matchCarDates0']"
exports.reviewCarRentalPickUp = () => "//input[@id='carPickupSearchString0']"
exports.reviewCarRentalDropOff = () => "//input[@id='carDropoffSearchString0']"

exports.selectClass = () => `//*[@id="classBoth0"]`;
exports.locatorOneWayToggle = () => `#toggleAirOneWay`;
exports.locatorClassType = () => `classBoth0`;
exports.locatorDepartTime = () => `ttSelectInput0`;

//unused tickets
exports.unusedTickets = () => "//a[normalize-space()='Unused Tickets']";
exports.locatorFareType = () => `tripDelegateViewBean.travelerViewBeanList[0].tripMainViewBean.unrestrictedFares`;

exports.DSMCloseBtn = () => "#dsmCloseBtn"
exports.DSMCloseXBtn= () => '//div[@data-icon-name="icon-closePWA"]'
// Multi Hotel search locators
exports.hotelSearchLocation = (index) => `#searchString${index}`;
exports.hotelCheckInDate = (index) => `#hotelCheckInDate${index}`;
exports.hotelCheckOutDate = (index) => `#hotelCheckOutDate${index}`;
exports.hotelMoreSearchOptionLink = (index) => `#showHotelOptions${index}`;
exports.locatorGuestType = (index) => `hotelGuests${index}`;


exports.moreSearchOptionMD = (index) => `#showAirOptions${index}`;

exports.classForOw = () => `//*[@id="editAirOptionsShow0"]/div/div[2]/div/div[1]/div[1]`;
exports.classForRt = () => `//*[@id="editAirOptionsShow0"]/div/div[2]/div/div[1]/div[1]`;
exports.clickClassType =() => `//*[@id="flightClassCheck0"]`;
exports.leavingClassText =() => `//*[@id="leavingClass"]/label`;
exports.returnClassText = () => `//*[@id="returningClass"]/label`;
exports.flightClassChecks = () => `//*[@id="flightClassCheck"]`;

exports.validateSearchSummary = () => `//div[@class='sectionTitle']`;
exports.settingIcon = () => `//div[@class="deem-chrome-actions"]//i[@class="fa fa-cog fa-lg"]`
exports.account = () => `(//div[@class="deem-chrome-menu-items"]//a[@class="deem-chrome-menu-item"])[1]`
//exports.account = () => `//*[@class="deem-chrome-menu deem-chrome-navbar-current-true"]//a[3]`
exports.menuDropDown = () => "div[class='deem-chrome-menu deem-chrome-navbar-current-true'] div[class='deem-chrome-menu-head']"
exports.travel = () => `//*[@class="deem-chrome-menu deem-chrome-navbar-current-true"]//a[1]`

exports.homeAiportLoc =() => 'airDepartureCity0'
exports.homeTrainStattion = () => `railDepartureCity0`


exports.moreSearchText = () =>`//*[@id="showAirOptions0"]`;
exports.additionalPopUp =() =>`//*[@class="hd clearAfter"]`;
exports.textAreaAddinfo = () => "//input[contains(@class,'m-cf-mandatory-true')]"

exports.clickTravelbtn = () => `//div[@class="deem-chrome-welcome-launch-item-icon"]`;

//amadeus
exports.hotelCheckBoxLoc = () => "//input[@id='matchHotelDates0']"

//custom fields
exports.additionalInformationLoc = () => `//label[@id="customFieldsTitle"]`
exports.tripPurposeLoc = () => "cfCollectionsField00"
exports.continueCustomFieldsLoc = () => `//span[@id='continueCustomFields']`

//cost allocation
exports.costAllocationFirstInputTextbox = () => `//input[@id="parentAllocDD1"]`
exports.selectFirstCostAllocation = () => `//div[@id="caContainer1"]//div/ul/li[2]`
exports.costAllocationSecondInputTextbox = () => `//input[@id="parentAllocDD2"]`
exports.selectSecondCostAllocation = () => `//div[@id="caContainer2"]//div/ul/li[1]`
exports.costAllocationThirdInputTextbox = () => `//input[@id="parentAllocDD3"]`
exports.selectThirdCostAllocation = () => `//div[@id="caContainer3"]//div/ul/li[1]`
exports.costAllocationBody = () =>  `//div[@class="costAllocationHierarchyContainer"]`

exports.search = () =>"//span[@id='buttonSearch']";

exports.notificationCountIcon = () => `//div[@id="DchAlertsCount"]`
exports.stopAssisting =() =>`//a[@id="deem-chrome-assist-stop-url"]`

exports.DsmMsg = () => `//i[@class="fa fa-angle-up dsmArrow"]`
exports.carServiceContinueButton = (index) => `(//section[@class='searchSummary']//button)[${index}]`
exports.carServiceSelectButton = (index) => `((//div[@class="resultCost"]/div[3]))[${index}]/div`
exports.summaryTab = () => `//section[@class="searchSummary"]`;
exports.carServiceReviewContinueButton = (index) => `//div[@data-tracking-id="trip-cost-summary"]/div[${index}]/button[1]`;

//Sanity
exports.radioOption = () => `(//input[@name="searchByPriceScheduleDate"])[2]`;
exports.suvCarsList = () => `(//div[@data-vehicle-class="SUV"]/div[@class="resultCost"])[1]/div[3]/div`;

exports.changeReturnFlightOnly = () => `//span[contains(text(),'Change Return Flight Only')]`;

//Sanity
exports.bookingList = () => `.listItem .itemHeader .col2 span:nth-child(2)`;
exports.confirmedBooking = () => `//div[@class='statusMessage']`;
exports.confirmedBookings = (i) => `(//div[@class='statusMessage'])[${i}]`
exports.bookingListName = (i) => `(//div[@class="itemHeader m-header"])[${i}]/div[3]/span[2]`;