"use strict";
const commonHelper = require("../helpers/helper.js");
const api_common_utils = require("../common/api_common_utils.js");

const _ = require('lodash');
const assert = require("assert");
const VPAY_MESSAGE_CONSTANTS = {
    travelServiceType: "HOTEL",
    vendorName: "CONFERMA",
    vendorIntegrationStatus: "VENDOR_CREATED_PAYMENT",
    vendorStatusPostBooking: "VENDOR_ACCEPTED_PAYMENT_UPDATE",
    vendoronFailed: "FAX_QUEUED"

}

exports.getCardRequest = async (cardType, table) => {
    let url = "http://virtual-payment-service.scqa.rden.us:80/rest/virtualpaymentservice/virtualpaytripitem";
    let userKey = gauge.dataStore.specStore.get('userKey');
    let userDetails = commonHelper.userDetails(userKey);
    let customerID = userDetails["customerId"];
    gauge.dataStore.specStore.put('VpayHeaders', await api_common_utils.getVpayHeaders(process.env.siteID, customerID));
    console.log('VpayHeaders: ', gauge.dataStore.specStore.get('VpayHeaders'));
    gauge.dataStore.scenarioStore.put('beginDate', commonHelper.getDateWithConfermaAPISupported(parseInt(table.rows[0].cells[0])));
    gauge.dataStore.scenarioStore.put('endDate', commonHelper.getDateWithConfermaAPISupported(parseInt(table.rows[0].cells[0]) + 3));
    gauge.dataStore.scenarioStore.put('clientId', table.rows[0].cells[1]);
    console.log(gauge.dataStore.scenarioStore.get('beginDate'));
    console.log(gauge.dataStore.scenarioStore.get('endDate'));
    let getcardreqPayload = (cardType === 'singlecard') ? await api_common_utils.getSingleCardReqPayload(customerID, process.env.siteID) : await api_common_utils.getMultipleCardReqPayload(customerID, process.env.siteID);
    console.log(getcardreqPayload);
    let createGetCardReqRes = await api_common_utils.restPostRequest(url, gauge.dataStore.specStore.get('VpayHeaders'), getcardreqPayload);
    let createGetCardReqResData = createGetCardReqRes.data;
    console.log(createGetCardReqResData);
    gauge.dataStore.scenarioStore.put('getCardResponse', createGetCardReqResData);
}

exports.updateBookingStatus = async(cardType, table) => {
    let url = "http://virtual-payment-service.scqa.rden.us:80/rest/virtualpaymentservice/virtualpaytripitem";
    gauge.dataStore.scenarioStore.put('bookingStatus', table.rows[0].cells[0]);
    gauge.dataStore.scenarioStore.put('secondHotelStatus', table.rows[0].cells[1]);
    let getCardResponse = gauge.dataStore.scenarioStore.get('getCardResponse');
    let travelServiceType = getCardResponse.virtualPayTripItems[0].travelServiceType;
    let vendorId = getCardResponse.virtualPayTripItems[0].vendorId;
    let paymentStatus = getCardResponse.virtualPayTripItems[0].paymentStatus;
    let vendorIntegrationStatus = getCardResponse.virtualPayTripItems[0].vendorIntegrationStatus;
    let vendorPaymentId = getCardResponse.virtualPayTripItems[0].vendorPaymentId;
    let travelTripID = getCardResponse.travelTripId;
    let vendorPaymentID2;
    console.log(vendorIntegrationStatus);
    assert.equal(travelServiceType, VPAY_MESSAGE_CONSTANTS.travelServiceType, 'Travel service type is shown incorrectly in response');
    assert.equal(vendorIntegrationStatus, VPAY_MESSAGE_CONSTANTS.vendorIntegrationStatus, 'Vendor Integration status is shown incorrectly in response');
    assert.equal(vendorId, VPAY_MESSAGE_CONSTANTS.vendorName, 'Vendor ID is shown incorrectly in response');

    if (gauge.dataStore.scenarioStore.get('secondHotelStatus') === "SUBMITTED_FOR_BOOKING" || gauge.dataStore.scenarioStore.get('secondHotelStatus') === "SUBMITTED_FOR_CANCEL" || gauge.dataStore.scenarioStore.get('secondHotelStatus') === "FAILED_ON_BOOKING" || gauge.dataStore.scenarioStore.get('secondHotelStatus') === "FAILED_ON_CANCEL") {
        vendorPaymentID2 = getCardResponse.virtualPayTripItems[1].vendorPaymentId;
    }
    if (paymentStatus === "AVAILABLE_TO_BOOK") {
        let updateBookingStatusPayload = (cardType === 'singlecard') ? await api_common_utils.updateSingleBookingStatuspayload(vendorPaymentId, travelTripID) : await api_common_utils.updatemultipleBookingStatuspayload(vendorPaymentId, vendorPaymentID2, travelTripID);
        console.log(updateBookingStatusPayload);
        let updateBookingresponse = await api_common_utils.restPatchRequest(url, gauge.dataStore.specStore.get('VpayHeaders'), updateBookingStatusPayload);
        let updateBookingresponseData = updateBookingresponse.data;
        console.log(updateBookingresponseData);
        gauge.dataStore.scenarioStore.put('updateBookingresponse', updateBookingresponseData);
    }
}

exports.getVirtualPayTrip = async () =>{
    let url = `http://virtual-payment-service.scqa.rden.us:80/rest/virtualpaymentservice/virtualpaytripitem?travelProcessId=${gauge.dataStore.scenarioStore.get('travelprocessID')}`
    console.log(gauge.dataStore.scenarioStore.get('travelprocessID'));
    let virtualPayTripItemStatus = await api_common_utils.restGetRequest(url, gauge.dataStore.specStore.get('VpayHeaders'));
    let virtualPayTripItemStatusdata = virtualPayTripItemStatus.data;
    console.log(virtualPayTripItemStatusdata);
    let countvalue = 0;
    if (gauge.dataStore.scenarioStore.get('secondHotelStatus') === "SUBMITTED_FOR_BOOKING" || gauge.dataStore.scenarioStore.get('secondHotelStatus') === "SUBMITTED_FOR_CANCEL" || gauge.dataStore.scenarioStore.get('secondHotelStatus') === "FAILED_ON_BOOKING" || gauge.dataStore.scenarioStore.get('secondHotelStatus') === "FAILED_ON_CANCEL") {
        countvalue = 1;
    }

    for (var i = 0; i <= countvalue; i++) {
        let travelServiceType = virtualPayTripItemStatusdata.virtualPayTripItems[i].travelServiceType;
        let vendorId = virtualPayTripItemStatusdata.virtualPayTripItems[i].vendorId;
        let paymentStatus = virtualPayTripItemStatusdata.virtualPayTripItems[i].paymentStatus;
        let vendorIntegrationStatus = virtualPayTripItemStatusdata.virtualPayTripItems[i].vendorIntegrationStatus;
        assert.equal(travelServiceType, VPAY_MESSAGE_CONSTANTS.travelServiceType, 'Travel service type is shown incorrectly in response');
        switch (i){
            case "0":
            assert.equal(paymentStatus, gauge.dataStore.scenarioStore.get('bookingStatus'), 'Vendor booking status is shown incorrectly in response');
            break;
            case "1":
            assert.equal(paymentStatus, gauge.dataStore.scenarioStore.get('secondHotelStatus'), 'Vendor booking status is shown incorrectly in response');
            break;
            default:
                break;;

        }
        assert.equal(vendorId, VPAY_MESSAGE_CONSTANTS.vendorName, 'Vendor ID is shown incorrectly in response');

        switch (vendorIntegrationStatus){
            case "FAX_QUEUED":
            assert.equal(vendorIntegrationStatus, VPAY_MESSAGE_CONSTANTS.vendoronFailed, 'Vendor Integration status is shown incorrectly in response');
            break;
            case "VENDOR_CREATED_PAYMENT":
            assert.equal(vendorIntegrationStatus, VPAY_MESSAGE_CONSTANTS.vendorIntegrationStatus, 'Vendor Integration status is shown incorrectly in response');
            break;
            default:
            assert.equal(vendorIntegrationStatus, VPAY_MESSAGE_CONSTANTS.vendorStatusPostBooking, 'Vendor Integration status is shown incorrectly in response');
            break;
        }

    }

}