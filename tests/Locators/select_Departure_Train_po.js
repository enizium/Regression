"use strict";

exports.departFromTime = () => '(//span[@class="resultContentTime"])[1]';
exports.departToTime = (index) => `(//span[@class="resultContentTime"])[${index}]`;
exports.selectButton = () => "(//div[@id = 'bookingBtnRow'])[1]";
exports.classButton = () => '//button[@id="railClassButton"]';
exports.classCoach = () => '//input[@id="class_coach"]';
exports.classBusiness = () => '//input[@id="class_business"]';
exports.trainNameLoc = (index) => `(//div[@class = 'resultName'])[${index}]`;
exports.viewStops = ()=> `//div[@class="segmentStops"]`;
exports.trainDepartDateLoc = () => `(//span[@class = 'resultContentGrey'])[1]`;
exports.trainArrivalDateLoc = () => `(//span[@class = 'resultContentGrey'])[2]`;
exports.trainDepartPageFareLoc = () => `(//div[@class="price"])[1]`;