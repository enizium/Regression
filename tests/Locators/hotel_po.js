"use strict";

// Language Selection locators

    exports.expandFiltersLocator = () => "(//button[@type ='button'])[2]//parent::div//parent::div//div[1]";
    exports.searchHotelButtonLocator = () => "(//button[@type ='button'])[2]";
    exports.brandFilterDropDownLocator = () => "#brandFilter";
    exports.brandFilterSearchLocator = () => "#BrandsFilter";
    exports.clearFilterLinkLocatorForLabel = (label) => `//label[contains(@title, '`+label+`')]//following-sibling::a`; //label: Brand, Hotel, Amenities, Star or Rating
    exports.clearAllFilterLocator = () => "div.expanded-filters-buttons button div";
    exports.hotelByBrandNameCheckboxUnderBrandNameFilter = (brandName) => `//span[contains(text() ,'`+brandName+`')]`;
    exports.guestRadioButtonLocator = (noOfGuest) => `(//input[@name ='filter-guests-option'])[`+noOfGuest+`]`; 
    exports.distanceRadioButtonLocator = (mileOptionNo) => `(//input[@name ='distance-filter'])[`+mileOptionNo+`]`;  /* mileOptionNo 1 : 1mi, mileOptionNo 2: 5mi, mileOptionNo 3: 25 mi */
    exports.customDistanceInputLocator = () => "//input[@name ='distance-filter']//ancestor::node()[4]//input[@type = 'text']";
    exports.hotelCategorySelectionLocator = (hotelCatIndex) => `(//input[@name ='filter-group'])[`+hotelCatIndex+`]`; /* hotelCatIndex:1 = GDS, hotelCatIndex:2 = GBT, hotelCatIndex:3 = booking.com */
    exports.hotelCategories = (category) => `//span[normalize-space()='${category}']`;
    exports.hotelCategoriesRadio = (category) => `//span[normalize-space()='${category}']/..//input`
    exports.hotelSearchByNameInputLocator = () => "#hotelNameFilter"; 
    exports.starRatingCheckboxLocator = (noOfStars) => `//input[contains(@value, '`+noOfStars+` Star')]`; /* values accepted by noOfStars: 5, 4, 3, 2, 1 */
    exports.amnenitiesSelectorByName = (amenityVlaue) => `//input[@value = '`+ amenityVlaue + `']//parent::label`;
    exports.starRatingOfAllHotelInResultList = () => "//div[@data-tracking-id = 'hotel']//div[@data-tracking-id='star-rating']"; //selects star-rating element of all hotel result in the list
    exports.countOfStarRating =  (index) => `(//div[@data-tracking-id = 'hotel']//div[@data-tracking-id='star-rating'])[`+index+`]/*/*`;
    exports.hotelNameTitleOfAllHotelInResultList = () => "//div[@data-tracking-id = 'hotel-name']"; //selects 'hotel title name' element of all hotel result in the list
    exports.hotelNameTitleOfAllHotelInResultListForGivenHotelName = (hotelName) => `//div[@data-tracking-id = 'hotel-name' and contains(text(), '`+hotelName+`')]`; //selects 'hotel title name' element of all hotel result in the list for givn hotel name value
    exports.hotelDistanceOfAllHotelInResultList = () => "//div[@data-tracking-id = 'distance-value']"; //selects 'distance value' element of all hotel result in the list
    exports.hotelCategoryBadgeForBookingCom = () => "//div[@data-tracking-id ='room-card']//div[contains(text(), 'booking.com')]"; //creating separate as the value of Booking is differently cased in the page
    exports.hotelCategoryBadgeForGBT= () => "//div[@data-tracking-id ='room-card']//div[contains(text(), 'GBT')]"; //creating separate as the value of Booking is differently cased in the page
    exports.hotelCategoryBadgeForCat = (category) => `//div[@data-tracking-id ='room-card']//div[contains(text(), '`+category+`')]`; 
    exports.hotelCategoryBadgeForCancellable = () => `//div[@data-tracking-id ='room-card']/div[1]/div[1]/div/div/div`
    exports.hotelCategoryBadgeForPenalty= () => `//div[@data-tracking-id ='room-card']/div[1]/div[1]/div[2]/div/div`;
    exports.showAllAmenitiesInOverview = () => "//div[@id='Overview']/*[5]/*/*[2]//span";
    exports.checkPresenceOfAmenityInOverview = (amenityExpected) => `//div[contains(text(), "General Amenities")]/../div[2]/div/ul/li[contains(text(),`+amenityExpected+` )]`
   // exports.checkPresenceOfAmenityInOverview = (amenityExpected) => `//div[ (@data-tracking-id= 'hotel-card-amenity' and contains(text(), '`+amenityExpected+`') ) or div[@id="Overview"]/*[4]/*/*[1]//ul//li[contains(text(),'`+amenityExpected+`')]]`;
    exports.selectHotelByRowIndex = (index) => `//div[@data-tracking-id="hotel"][`+index+`]`;
    exports.prhBadgeInHotelResultList = () => `//*[@data-tracking-id="private-rate-badge"]`;
    exports.selectDivWithGivenText = (text) => `//div[text()= "${text}"]`; //only usable for cases where the text is language independent like hotel names and badges
    exports.hotelSearchLocation =() =>  "#searchLocation" ;
    exports.selectHotel = () => '//div[@data-tracking-id="hotel"]//div[@data-tracking-id="average-price"]';
    exports.hotelName = () => '(//div[@id="hotel-info"]/div/div/div[2])[1]';
    exports.hotelNameEHI = () => '(//div[@class="resultName"])[1]';
    exports.hotelAddress = () => '(//div[@id="hotel-info"]/div/div/div[3])[1]';
    exports.hotelAddressEHI = () => '(//div[@class="resultAddress"])[1]';
    exports.roomType = () => '(//*[@data-tracking-id="room-card"]/div[1]/div[1]/span)[1]';
    exports.roomFare = () => '(//*[@data-tracking-id="room-card"]//*[@data-tracking-id="average-price"])[1]';
    exports.selectRoom = () => '//div[@id="Rooms"]//button[@type="button"]';
    exports.selectRoomsMenu = () => '//a[@data-tracking-id="hotel-details-menu-item"][contains(@href, "Rooms")';
    exports.hotelList = () => '//div[@data-tracking-id="hotel"]'
    exports.averagePrice = () => '//div[@data-tracking-id="average-price"]'
    exports.paginationButton = () => '//div[@data-tracking-id="page-buttons"]/div'
    exports.pageButton = (pagination) => `//div[@data-tracking-id="page-buttons"]/div[`+pagination+`]`
    exports.loading = () => '.pleaseWaitSpinner' 
    exports.selectRoomFare = (searchRoomType) => `//*[@data-tracking-id="room-card"]/div/div/div/div/div[contains(., "`+searchRoomType+`")]/../../../../.././/*[@data-tracking-id= "average-price"]`
    exports.selectRoomType =(searchRoomType) => `//*[@data-tracking-id="room-card"]/div/div/div/div/div[contains(., "`+searchRoomType+`")]//../../..//span`
    exports.selectedRoom = (searchRoomType) => `//*[@data-tracking-id="room-card"]/div/div/div/div/div[contains(., "`+searchRoomType+`")]/../../../../.././/button`
    exports.GBTDirectRoomSelect = (searchRoomType) => `//*[@data-tracking-id="room-card"][contains(., "`+searchRoomType+`")]/div[2]/button`
    exports.GBTDirectRoomFare = (searchRoomType) => `//*[@data-tracking-id="room-card"][contains(., "`+searchRoomType+`")]/div[2]//div[@data-tracking-id="average-price"]`
    exports.GBTDirectRoomType = (searchRoomType) => `//*[@data-tracking-id="room-card"][contains(., "`+searchRoomType+`")]/div/div/span`
    exports.OOPHotelDropdown = () => `(//div[@tabindex="1"]/.././div[contains(.,"hotel")]/div/div/div[1]`;
    exports.OOPHotelTextBox = () => `//div[@tabindex="1"]/.././div[contains(.,"hotel")]/div/div/div/div[1]`;
    exports.selectCancellableRoomFare = (searchRoomType) => `//*[@data-tracking-id="room-card"]/div/div/div/div/div[contains(., "`+searchRoomType+`")]/../../../../.././/*[@data-tracking-id= "average-price"]`
    exports.selectCancellableRoomType =(searchRoomType) =>`//*[@data-tracking-id="room-card"]/div/div/div/div/div[contains(., "`+searchRoomType+`")]//../../..//span`
    exports.cancellableRoomTypeBadge =(searchRoomType) =>`(//*[@data-tracking-id="room-card"]/div/div/div/div/div[contains(., "`+searchRoomType+`")])[1]`
    exports.AddHotelFromTripReview =() =>"//*[name()='svg' and contains(@height, '16')]//parent::button"
    exports.selectRoomButton = () => "(//div[@data-tracking-id='room-card']//button[@type='button'])[1]";
    exports.selectContinueWithOriginalSelection = () => `//*[@id="uiHotelAlignmentForm_continueOriginal_div"]`;
    exports.selectAddExtraNight = () => `//*[@id="uiHotelAlignmentForm_addExtraNight"]`;
    exports.selectRemoveLastNight = () => `//*[@id="uiHotelAlignmentForm_removeExtraNight_div"]`;
    exports.idForContinueButtonInHotelAlignment = () => "//span[@id='continueHotelAlignmentErrorModal']";
    exports.selectContinueWithoutThisHotel = () => `//*[@id="uiHotelAlignmentForm_skipHotel"]`;
    exports.clickContinueForSelectContinueWithoutThisHotel = () => `//*[@id="continueHotelAlignmentErrorModal"]`;
    exports.hotelTypeBatch = (i, j) => `(//div[@data-tracking-id="hotel"])[${i}]//div[@data-tracking-id="preferred-badge-tooltip"]/../div[${j}]`
    exports.hotelTypeBatchLength = (i) => `(//div[@data-tracking-id="hotel"])[${i}]//div[@data-tracking-id="preferred-badge-tooltip"]/../div`
    exports.allHotelCards = () => `(//div[@data-tracking-id="hotel"])`
    exports.hotelPrice = (i) => `(//div[@data-tracking-id="hotel"])[${i}]//div[@data-tracking-id="average-price"]`
    exports.hotelRoomCard = () => `//div[@data-tracking-id="room-card"]`;
    exports.hotelRoomCardBatchLength = (i) => `(//div[@data-tracking-id="room-card"])[${i}]/div[1]/div/div`
    exports.hotelRoomCardBatch = (i, j) => `(//div[@data-tracking-id="room-card"])[${i}]/div[1]/div/div[${j}]`
    exports.selectButton = (i) => `(//div[@data-tracking-id="room-card"])[${i}]/div[2]/button`;
    exports.getCheckInDateValue = () => "#checkInDate";
    exports.getCheckOutDateValue = () => "#checkOutDate";
    exports.nextButton = (index) => `//div[@data-tracking-id='page-buttons']/div[${5+index}]`;
    exports.firstHotel = () => `(//div[@data-tracking-id="hotel-name"])[1]`
    exports.EHIHotels = (index) => `//div[@itemindex="${index}"]`
    exports.EHIRooms = () => `(//div[@class="roomAction"]/a)[1]`
    exports.searchedText = () => `//span[@class="tripReviewFromToCol"]/span`
    exports.searchedCarLocation = () => `//span[@class="tripReviewFromToCol"]`
    exports.hotelLoyalityNumber = () => `(//input[@class='holdTripMembership'])[2]`
    exports.hotelPartialConfirmation = () => `//p[@class='partialConfirmationMessage']/div[1]`
    exports.tripCostSummary = () => `(//span[@class='tripCostAmountTotal'])[2]`
    exports.tripCost =() => `(//span[@class='tripCostAmount'])[1]`
    exports.bookAgainLinkSameVicinty = () => `//a[contains(@class,"bookDiffHotelInSameCity")]`
    exports.getHotelValue = () => `//input[@id='searchString0']`
    exports.getHotelCheckInDate = () => `//input[@id='hotelCheckInDate0']`
    exports.getHotelCheckoutDate = () => `//input[@id='hotelCheckOutDate0']`
    exports.selectMatchHotel = () => `//input[@id='matchHotelDates0']`
    exports.failedHotelErrorText = () => `(//div[@class='sectionTitle']/span)[1]`
    exports.hotelErrorMessage = () => `//p[@class='multipleFailedHotel-Error']/span`
