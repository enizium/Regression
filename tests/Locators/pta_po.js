"use strict";

exports.pageTitle = () => `//span[@class="title"]`;
exports.preTripmsg = () => `//div[@class="sideMargin15"]/h3`
exports.noteToTraveler = () => `//textarea[@name="preTripApprovalBean.approverNote"]`
exports.approveBtn = () =>`//a[@class="btn btn"]//span[@id="buttonSave"]`
exports.declineBtn = () =>`//a[@class="btn btn2"]//span[@id="buttonSave"]`
exports.fullname = () => `(//div[@class="formPair p_bt15"]/label)[1]`
exports.userEnterMsg = () => `(//div[@class="formPair p_bt15"][2])/text()`
