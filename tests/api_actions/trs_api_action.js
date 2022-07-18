"use strict";

const commonHelper = require("../helpers/helper.js");
const api_common_utils = require("../common/api_common_utils.js");

exports.createTxGroup = async () => {
    let trsServices = commonHelper.trsServices();
    let userKey = gauge.dataStore.specStore.get('userKey');
    let userDetails = commonHelper.userDetails(userKey);
    let customerID = userDetails["customerId"];
    const payload = {
        "languageIdentifier":"en_US",
        "type":"DELIVERY",
        "serviceTxGroupId":"12347",
        "name":"Group 1",
        "bookingStatus" : "CONFIRMED",
        "serviceInternalStatus" : "BOOKING CONFIRMED",
        "description":"Grouping"
     }
    const url = trsServices.trsPost.URL;
    await api_common_utils.postRequest(url, payload, customerID);
    
}

exports.updateTxGroup = async () => {
    let trsServices = commonHelper.trsServices();
    let userKey = gauge.dataStore.specStore.get('userKey');
    let userDetails = commonHelper.userDetails(userKey);
    let customerID = userDetails["customerId"];
    const payload = {
        "languageIdentifier":"en_UK",
        "type":"DELIVERY",
        "serviceTxGroupId":"12345",
        "name":"Group 1",
        "bookingStatus" : "CONFIRMED",
        "serviceInternalStatus" : "BOOKING CONFIRMED",
        "description":"Grouping"
     }
    const url = trsServices.trsUpdate.URL;
    await api_common_utils.putTRSRequest(url, payload, customerID);
    
}

exports.getTxGroup = async () => {
    let trsServices = commonHelper.trsServices();
    let userKey = gauge.dataStore.specStore.get('userKey');
    let userDetails = commonHelper.userDetails(userKey);
    let customerID = userDetails["customerId"];
    const payload = {
        "languageIdentifier":"en_UK",
        "type":"DELIVERY",
        "serviceTxGroupId":"12345",
        "name":"Group 1",
        "bookingStatus" : "CONFIRMED",
        "serviceInternalStatus" : "BOOKING CONFIRMED",
        "description":"Grouping"
     }
    const url = trsServices.trsUpdate.URL;
    await api_common_utils.getTRSRequest(url, payload, customerID);
    
}

exports.getTxGroupByUser = async () => {
    let trsServices = commonHelper.trsServices();
    const url = trsServices.trsGetByUser.URL;
    await api_common_utils.getTRSGroupByUser(url+`?userId=9557941&fetchOrders=true&sortBy=startTime&sort=asc`); 
}

exports.getTxGroupByConst = async () => {
    let trsServices = commonHelper.trsServices();
    await api_common_utils.getTRSGroupByConst(`${trsServices.trsGetByUser.URL}`); 
}

exports.deleteTxGroupById = async () => {
    let trsServices = commonHelper.trsServices();
    let url = trsServices.deleteTx.URL
    let txgroupId = gauge.dataStore.scenarioStore.get("txgroupid");
    await api_common_utils.deleteTRSGroupById(url+txgroupId); 
}