"use strict";

exports.departLocText = () => "//div[@id='tripSummaryHeader']//span[@class='tripReviewFromToCol'][1]";
exports.returnLocText = () => "//div[@id='tripSummaryHeader']//span[@class='tripReviewFromToCol'][2]";
exports.closeExpandFilter = () => "#filterRowExpandCollapse a";
exports.selectFlight = (index) => `(//div[contains(@class,  'resultsList')]//div[contains(@class,  'v4ui')][1]//a[@id='buttonCancel'])[${index}]`;

exports.priceIncDecAlertPopup = () => `//div[@class="v3 modalLayerMask showBlock"]`
exports.priceIncDecContinueBtn = () => `//a[@id="priceChangeContinueButton"]`
exports.OOPContinue = () => "//a[@name = 'continue']";
exports.recomendedOptionSelectLOC = () => "(//span[@class='wrap buttonText'])[2]";
exports.selectNewFlightsLoc = () => "(//a[@name='selectDiffOption'])/span";
exports.flightTabs = (index) => `(//div[@id='fareTabsRow'])[${index}]//div[@class='fareTabsContainer']/div`
exports.getflightTabsAttribute = (index) => `(//div[@id='fareTabsRow'])[1]//div[@class='fareTabsContainer']/div[${index}]`

exports.hotelDatesPopup = () => `//div[@class="v3 modalLayerMask showBlock"]`
exports.hotelDatesPopupID = () => `//div[@id="hotelAlignmentErrorLayer"]`
exports.hotelDatesPopupContinueBtn = () => `//a[@id="hotelAlignmentErrorContinueButton"]`
