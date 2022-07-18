"use strict";

// Language Selection locators
exports.airlinesSelectionByName = (label) => 
  `//ol[@id='airlinesGroup']//input[contains(@onclick, '${label}')]`;
exports.inPolicy = () =>
  "//ol[@id='policyElement']//input[contains(@id, 'policy1')]";
exports.viewByPrice = () =>'//*[@id="viewByGroup"]/li[1]/label'
exports.viewByButton = () => "//button[@id='viewByButton']";
exports.selectFlight = () =>
  "//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//a[@id='buttonCancel']";
exports.departLocText = () =>
  "//div[@id='tripSummaryHeader']//span[@class='tripReviewFromToCol'][1]";
exports.returnLocText = () =>
  "//div[@id='tripSummaryHeader']//span[@class='tripReviewFromToCol'][2]";
exports.departLocBooking = () => '(//a[@class="toolTip"])[1]';
exports.returnLocBooking = () => '(//a[@class="toolTip"])[2]';
exports.departFromTime = () => '(//span[@class="resultContentTime"])[1]';
exports.departToTime = () => '(//span[@class="resultContentTime"])[2]';
exports.clickSelectButton = (i) =>
  `(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//a[@id='buttonCancel'])[${i}]`;
exports.tabContainer = () => `(//div[@class='fareTabsContainer'])[1]`;
exports.tab = (index) => `(//div[@class='fareTabsContainer'])[1]/div[${index}]`
exports.nonStop = (nonStopSpell) => `(//label[contains(text(), '${nonStopSpell}')])[2]`;
exports.nonStopWithoutHash = () => `flightStops2Radio01`;
exports.oneStopWithoutHash = () => `flightStops2Radio02`;

exports.twoPlusStops = (twoStopSpell) => `(//label[contains(text(), '${twoStopSpell}')])[2]`;
exports.outOfPolicy = () => "//ol[@id='policyElement']//input[contains(@id, 'policy-1')]";

exports.bagIcon = () => "(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//span[@class='fa fa-suitcase'])[1]"
exports.airlineNameInBag = () => "(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//div[@class='baggageVendorCode'])[1]"
exports.checkedBagsCount = () =>"(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//table[@class='tableLayout5'])[1]/tbody/tr"
exports.checkedBagType = (i) =>`(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//table[@class='tableLayout5'])[1]/tbody/tr[`+i+`]/td[1]`
exports.checkedBagfees = (i) => `(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//table[@class='tableLayout5'])[1]/tbody/tr[`+i+`]/td[2]`
exports.policyLink = () => "//a[text() = 'Policy']";
exports.sortByButton = () => "#sortByButton";
exports.purchasePageTitle = () => "div.purchasePageTitle";
exports.sortByButtonActive = () => "#sortByButton.active";

exports.sortByInputSelectionForGivenLabel = (label) => `//label[contains(text(), '`+label+`')]/../input`;
exports.xpathForSortedPriceList= () => "(//div[contains(@class, 'sectionRate') and not(contains(@style,'display:none'))  and not(contains(@style,'display: none'))]//div[contains(@class, 'price')])[position() <=10]";
exports.idForTotalFlightList = () => "#fareTabsRow";
exports.xpathForSortedDepartureList = () => "(//div[contains(@class, 'legSummary')]//div[contains(@class, 'flightResultLayout')][1]//div[contains(@class, 'sectionLowerResult1')]//span[contains(@class, 'resultContentTime')])";
exports.xpathForSortedArrivalList = () => "(//div[contains(@class, 'legSummary')]//div[contains(@class, 'flightResultLayout')][1]//div[contains(@class, 'sectionLowerResult2')]//span[contains(@class, 'resultContentTime')])";
exports.classForSortedDurataionList = () => "(//span[contains(@class, 'connectorContent')])[position() <=10]";
exports.xpathForFlightSelectionForGivenRow = (index) => `(//div[contains(@class, 'sectionRate') and not(contains(@style,'display:none'))  and not(contains(@style,'display: none'))]//a[contains(@id, 'buttonCancel') and not(contains(@style,'display:none'))  and not(contains(@style,'display: none'))])[`+index+`]`;
exports.viewTypes = (viewType) =>`//input[@class='${viewType}']`
exports.bagIcon = () =>
  "(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//span[@class='fa fa-suitcase'])[1]";
exports.airlineNameInBag = () =>
  "(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//div[@class='baggageVendorCode'])[1]";
exports.checkedBagsCount = () =>
  "(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//table[@class='tableLayout5'])[1]/tbody/tr";
exports.checkedBagType = (i) =>
  `(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//table[@class='tableLayout5'])[1]/tbody/tr[` +
  i +
  `]/td[1]`;
exports.checkedBagfees = (i) =>
  `(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//table[@class='tableLayout5'])[1]/tbody/tr[` +
  i +
  `]/td[2]`;
exports.resultDepartLoc = (i) => `(//a[@class="toolTip"])[${i}]`;
exports.resultUnitedAir = (i) =>
  `(//img[@src="https://clustera-stage3.qarcobjs.com/static/core/img/travel/logos/air/ua.gif"])[${i}]`;
exports.resultClassType = (i) =>
  `(//div[contains(@class, 'resultContentExtra')]/span[1])[${i}]`;
exports.resultOutOfPolicyType = (i) =>
  `(//div[@style="display:block"]//div[@id = "segmentPricing"]//span[@class="fa fa-ban policy"])[${i}]`;
exports.resultBasics = () => "//input[@id = 'fareTierPanelCheckbox10']";
exports.resultRefundable = () => "//input[@id = 'fareTierPanelCheckbox30']";
exports.resultUnrestricted = () => "//input[@id = 'fareTierPanelCheckbox40']";
exports.resultOneStopType = (i) =>
  `(//div[@style="display: block;"]//div[@class="segmentStops"])[${i}]`;
exports.viewStops = () => "//div[@class='segmentStops']";
exports.oneStop = () => "#flightStops2Radio02";
exports.resultFlight = () => "//div[@id='resultsList']";
exports.locatorFareBasic = () => "//input[@id = 'fareTierPanelCheckbox10']";
exports.locatorFareRefundable = () => "//input[@id = 'fareTierPanelCheckbox30']";
exports.locatorFareUnrestricted = () => "//input[@id = 'fareTierPanelCheckbox40']";
exports.locatorFareTab = (i) => `(//div[@class='fareTabsContainer'])[${i}]/div[1]`;
exports.locatorResultCount = () => `//div[@id='resultsList']//div[@class='v4ui']`;
exports.flightCount = () => "//span[@id='numOfResults']";

exports.departAirlineNameOOP = () => `(//div[@id='initialView1']//div/div/span[@class="resultContent"])[1]`;
exports.departFromTimeOOP = () => "(//div[@id='initialView1']//div//span//span[2])[1]";
exports.departToTimeOOP = () => "(//div[@id='initialView1']//div//span//span[5])[1]";
exports.departAirlineNumberOOP = () => `(//div[@id='initialView1']//div/span[@class="resultContentGrey"])[1]`
exports.returnAirlineNameOOP = () => `(//div[@id='initialView1']//div/div/span[@class="resultContent"])[2]`
exports.returnFromTimeOOP = () => "(//div[@id='initialView1']//div//span//span[2])[2]";
exports.returnToTimeOOP = () => "(//div[@id='initialView1']//div//span//span[5])[2]";
exports.returnAirlineNumberOOP = () => `(//div[@id='initialView1']//div/span[@class="resultContentGrey"])[2]`
exports.recomemdedFlightSelectBtn = () => "(//div[@id='tripPackage-1']//div//div//span[1])[1]"

exports.scheduleRadio = () =>'viewByRadio1'
exports.priceRadio = () => 'viewByRadio0'
exports.tierGroup = () => '//*[@id="fareTabsRow"]'
exports.airFare = () => '(//*[@id="segmentPricing"]//*[@class="price"])[1]'
exports.badgename = () => "//span[@class='travelfusionIcon']";
exports.brandedfares = () => "(//span[@class='resultName'])/span/span";
exports.fareTier = () => `(//div[@class="fareTabsContainer"])[1]/div`;

exports.fareTabLengthLoc = () => `(//div[@id="fareTabsRow"])[1]/div[1]/div`
exports.fareTabValue = (i) => `(//div[@id="fareTabsRow"])[1]/div[1]/div[${i}]`;
exports.firstValue = () => `(//div[@id="fareTabsRow"])[1]/div[1]/div[1]`;
exports.secondValue = () => `(//div[@id="fareTabsRow"])[1]/div[1]/div[2]`;
exports.thirdValue = () => `(//div[@id="fareTabsRow"])[1]/div[1]/div[3]`;

exports.anyStopLoc = () => `(//label[contains(text(), 'Any Stops')])[2]`;
exports.searchForMoreAirportsLoc = () => "//div[@id='acContainer_airDepartureCity0']/div/div[2]/ul/li[2]/div";
exports.searchForMoreTrainLoc = () => "//div[@id='acContainer_railDepartureCity0']/div/div[2]/ul/li[2]/div";

exports.seatMapIcon = () => `(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//div[contains(@id, 'resultItem')]//div[contains(@class,'seatMapLink')]//a)[2]`
exports.seatMapModal = () => `#seatMapModal`
exports.seatMapLegendItems = () => `#seat-map-legend-items`
exports.cancelSeatRequestButton = () => `#smCancelSeatRequestButton`
exports.airlineName = () => `(//span[@class="resultName"]/text()[1])[1]`
exports.airlineNumber = () => `(//span[@class="resultName"]/span)[1]`
exports.departFlightLoc =() =>`(//*[@class="sectionLowerResult1Content"]//span/a)[1]`
exports.destinationFlightLoc =() =>`(//*[@class="sectionLowerResult2 sxnCol2x"]//span/a)[1]`
exports.departFlightprice = () => `(//*[@id="segmentPricing"]/div/div)[1]`

exports.departFromDate = () => `(//*[@class="sectionLowerResult1 sxnCol4x"]//span[@class="resultContentExtra"])[1]`
exports.departToDate = () => `(//*[@class="sectionLowerResult2 sxnCol2x"]//span[@class="resultContentExtra"])[1]`
exports.changeLink = () =>`//a[@id="modifySearchLink"]//span[@class="buttonText"]`
exports.searchButon = () => `//*[@id="asSearchButton"]//*[@class="buttonText "]`
exports.flightBadgePreferred = () => `(//div[@class="sectionBody flightResultLayout"])[1]//div[@class="badgeGroup"]//span[@class = "preferredIcon"]`;
exports.flightBadgePenalty = () => `(//div[@class="sectionBody flightResultLayout"])[1]//div[@class="badgeGroup"]//span[@class = "penaltyIcon"]`;
exports.flightBadgeNonRefundable = (i) => `(//div[@class="sectionBody flightResultLayout"])[${i}]//div[@class="badgeGroup"]//span[@class = "nonRefundableIcon"]`;
exports.flightBadgeRefundable = (i) => `(//div[@class="sectionBody flightResultLayout"])[${i}]//div[@class="badgeGroup"]//span[@class = "refundableIcon"]`;
exports.unrestrictedFareTierLoc = () => `//input[@id="fareTierPanelCheckbox40"]`;
exports.refundableFareTierLoc = () => `//input[@id="fareTierPanelCheckbox30"]`;
exports.standardFareTierLoc = () => `//input[@id="fareTierPanelCheckbox20"]`;
exports.basicFareTierLoc = () => `//input[@id="fareTierPanelCheckbox10"]`;
exports.fareBasisLoc = (i) => `(//span[@class="fa fa-info-circle tip toolTip"])[${i}]/span/span[3]/span[2]`;
exports.bookingCodeLoc = (i) => `(//span[@class="fa fa-info-circle tip toolTip"])[${i}]/span/span[4]/span[2]`;
exports.hoverFareBasis = (i) => `(//span[@class="fa fa-info-circle tip toolTip"])[${i}]`;
exports.expandFilter = () => `//div[@id="filterRowExpandCollapse"]/span[@class="fa fa-angle-down"]/../a/span`
exports.clickCollapseFilterLoc = () => `//a[@onclick="expandFilters()"]`;
exports.clickFareTierDropdownLoc = () => `//button[@id="fareTierButton"]`;

exports.departClasCabin = () => `(//span[@style="display:block"])[1]`
exports.departClasCabin2 = () => `(//span[@style="display: block;"])[1]`
