

    // Language Selection locators

exports.enterprise = () => "//div[@id='vendor_CAR_VET']";
exports.budget = () => "//div[@id='vendor_CAR_VZD']";

exports.carrierName = () => "//div[@itemindex='0']//span[@class='carrier-name']";
exports.carDetails = () => "(//div[@itemindex='0']//span[@class='car-detail'])[1]";
exports.userCount = () => "//div[@itemindex='0']//span[@class='userCount']";

exports.carFare = () => "//div[@itemindex='0']//div[@class='estimatedCost']/span[@class='price']";
exports.pickUpTime = () => "//div[@itemindex='0']//div[@class='sectionLowerResult1Content']//span[@class='resultContentTime']";
exports.dropOffTime = () => "//div[@itemindex='0']//div[contains(@class,'sectionLowerResult2')]//span[@class='resultContentTime']";

exports.selectButton = () => "//a[@id = 'reserve_1']";

exports.suvTab = () => "//div[@id='type_SUV']";
exports.hertzTab = () => "//div[@id='vendor_CAR_VZE']";
exports.hertzCar = () => "//div[@itemindex='0']//span[@class='carrier-name']"
exports.selectButtonCarRental = () => "#reserve_1";
exports.carAgencyFilter = () => "//button[@id='carAgencyFilter']";
exports.brandList = () => "(//ol[@id='carRentalProviderFilterPanel']/li/label)";
exports.AddCarFromTripReview =() =>"//*[name()='svg' and contains(@height, '15')]//parent::button"

exports.carRentalSelectButton = () => "//div[@class='moreInfo carRentalButton']";

exports.brandFilter = () => '//*[@id="carAgencyFilter"]'
exports.selectBrand = (brand) => `//*[@id="carRentalProviderFilterPanel"]//label[contains(.,"`+brand+`")]/../input`
exports.carTab = () => "//div[@id='type_CAR']";
exports.vanTab = () => "//div[@id='type_VAN']";

exports.carRentalResults = () => '//*[@id="carRentalResults"]'

exports.classFilter =  () => `//*[@id="carClassFilter"]`;
exports.classList = () => `//*[@id="filterVendorPanel5"]`;
exports.selectCarClass = (className) => `//label[contains(.,"`+className+`")]/../input`

exports.filterOptions =  () => `//*[@id="carOptionsFilter"]`;
exports.optionsList = () => `//*[@id="filterFuelPanel2"]`;
exports.selectOptionsType = (options) => `//label[contains(.,"`+options+`")]/../input`

exports.filterYourSearch = () => '//*[@id="carRentalMoreSearch"]';
exports.refineCarB = (Brands) => `//*[@id="carRentalProviderFilter"]/li/label[contains(.,"${Brands}")]`;
exports.refineCarBrand = (Brands) => `//*[@id="carRentalProviderFilter"]/li/label[contains(.,"${Brands}")]/..//*[@name="providerFilter"]`
exports.refineCarC = (CarClass) => `//*[@id="carRentalSizeFilter"]/li/label[contains(.,"${CarClass}")]`;
exports.refineCarClass = (CarClass) => `//*[@id="carRentalSizeFilter"]/li/label[contains(.,"${CarClass}")]/..//*[@name="sizeFilter"]`
exports.refineCarO = (CarOption) => `//*[@id="carRentalFuelFilter"]/li/label[contains(.,"${CarOption}")]`;
exports.refineCarOption = (CarOption) => `//*[@id="carRentalFuelFilter"]/li/label[contains(.,"${CarOption}")]/..//*[@name="fuelFilter"]`

exports.collectionCheckBox = () => "//input[@id='carPickupDeliveryAddressRadio0']";
exports.deliveryCheckBox = () => "//input[@id='carDropoffCollectionAddressRadio0']";
exports.appleMapLoc = () => "//div[@id='applemap']";

exports.selectBtn = () => `//div[@class="moreInfo carRentalButton"]/span/a`;
exports.carNameLoc = () => `(//span[@class="carrier-name"])[1]`;
exports.carPickUpTimeLoc = () => `(//span[@class="resultContentTime"])[1]`;
exports.carDropOffTimeLoc = () => `(//span[@class="resultContentTime"])[2]`;
exports.carTotalCostLoc = () => `(//span[@class="price"])[2]`;
exports.carRentalFromDateLoc = () => `(//span[@class="tripReviewDatesCol"])[1]`;
exports.carRentalToDateLoc = () => `(//span[@class="tripReviewDatesCol"])[2]`;
exports.carVendorCardLoc = (index) => `//a[@id="reserve_${index}"]`;

exports.changeTrip = () => `(//span[@class="buttonText"])`;

exports.carLocation = () => `(//div[@class="resultContentExtra"])[1]`

