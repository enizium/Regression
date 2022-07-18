"use strict";

const Rest = require('axios');
const _ = require('lodash');
const { createUser } = require('../api_actions/user_profile_actions.js');
const commonHelper = require("../helpers/helper.js");
const jsonData = require("../../resources/data/user_profile_glopro.json");

/**
 * Get Authentication headers for API end-point access
 */
exports.getAuthHeaders = async (siteID,customerID) => {
    let headers = {
        'Content-Type': 'application/vnd.reardencommerce.travel.v2.0+json',
        "Accept": 'application/vnd.reardencommerce.travel.v2.0+json',
        'X-Rearden-SecCtx': JSON.stringify({'auth':{'id':parseInt(customerID),'type':'e','ext':{'s':parseInt(siteID), 'p': 2 } } })
    };
    return headers;
}

exports.getAsyncServiceNodeBasedOnEnv = async function () {
    switch (process.env.environment) {
        case "stage3":
        case "stage2":
            return process.env.api_test_run === 'false' ? gauge.dataStore.specStore.get('sessionId').split('.')[1] : gauge.dataStore.specStore.get('sessionId');
        case "sustain":
            return 'scsuslappca01';
    }
}

/**
 * Function for PostRequest
 */
exports.restPostRequest = async (end_point, header_data, payload) => {
    const config = {
        method: "post",
        url: end_point,
        headers: header_data,
        data: payload
      
    }
    console.log("this is the payload",payload)
    let response;
    try {
        response = await Rest(config);
        if (parseInt(response.status) > 301) {
            throw new Error(`Invalid status code showing \n Expected: 201 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
    return response;
}


exports.negativePostRequest = async (end_point, header_data, payload) => {
        console.log(end_point, "this is the url");
        console.log(header_data, "this is the header");
        console.log(payload, "this is the payload");
        const config = {
            method: "post",
            url: end_point,
            headers: header_data,
            data: payload
        }
        let response;    
        try {
            response = await Rest(config);
            if (parseInt(response.status) > 301) {
                throw new Error(`Invalid status code showing \n Expected: 201 \n Actual: ${response.status}`);
            }
        } catch (error) {          
            return error.response;
        }
        return response;
    }

/**
 * Fuction for getRequest
 */
exports.restGetRequest = async (end_point, header_data) => {
    const config = {
        method: "get",
        url: end_point,
        headers: header_data
    }
    let response;
    try {
        response = await Rest(config);
        if (response.status != '200') {
            throw new Error(`Invalid status code showing \n Expected: 200 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
    return response;
}


exports.getVpayHeaders = async (siteID, customerID) => {
    let headers = {
        'Content-Type': 'application/vnd.deem.vpaysvc.v1.0+json',
        "Accept": 'application/vnd.deem.vpaysvc.v1.0+json',
        'X-Rearden-SecCtx': JSON.stringify({ 'auth': { 'id': parseInt(customerID), 'type': 'e', 'ext': { 's': parseInt(siteID), 'p': 2 } } })
    };
    return headers;
}

exports.restPatchRequest = async (end_point, header_data, payload) => {
    const config = {
        method: "patch",
        url: end_point,
        headers: header_data,
        data: payload
    }
    let response;
    try {
        response = await Rest(config);
        if (parseInt(response.status) > 301) {
            throw new Error(`Invalid status code showing \n Expected: 202 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
    return response;
}

exports.restPutRequest = async (end_point, header_data, payload) => {
    const config = {
        method: "put",
        url: end_point,
        headers: header_data,
        data: payload
    }
    let response;
    try {
        response = await Rest(config);
        if (response.status != '204') {
            throw new Error(`Invalid status code showing \n Expected: 204 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
    return response;
}

exports.getPNSHeaders = async (siteID, customerID) => {
    let headers = {
        'Content-Type': 'application/vnd.reardencommerce.mobileevent.v1+json',
        'X-Rearden-SecCtx': JSON.stringify({ 'auth': { 'id': parseInt(customerID), 'type': 'e', 'ext': { 's': parseInt(siteID), 'p': 2 } } })
    };
    return headers;
}

exports.getProfilePullHeaders = async () => {
    let headers = {
        'Content-Type': 'text/xml',
        'soapaction': 'charset=utf-8'
    };
    return headers;
}
exports.registerDevicePayload= async(siteID, customerID)=> {
    let pushNotification = commonHelper.pushNotificationData();
	console.log("registerDevicePayload");
	return `{
	    "userId": ${customerID},
	    "companyId": ${siteID},
	    "deviceType": ${pushNotification.mobileUser.deviceType},
	    "locale": ${pushNotification.mobileUser.locale},
	    "messageVersion": ${pushNotification.mobileUser.messageVersion},
	    "deviceId": ${pushNotification.mobileUser.deviceType},
	    "recipientId": ${pushNotification.mobileUser.recipientId}
	}`
}
exports.hybridAndroidPayload=async()=> {
	return `{
	"TRAVEL:FLIGHT_ALERT": true
		    }`
}
exports.pushMessagesPayload=async(customerID)=>
{
    return `{
        "userId": ${customerID},
        "eventType": "EXPENSE",
        "eventSubType": "APPROVER",
        "metadata": {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3"
        },
        "messages": [{
            "locale": "en_US",
            "title": "Alert Test!",
            "text": "CoronaVirus Testing"
        }]
    }`
}
exports.createuserPayload=async(externalID, userName, email, groupwareID, randomDD)=> {
    return `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Header>
      <h:AuthHeader xmlns:h="http://webservices.reardencommerce.com/userprofile/" xmlns="http://webservices.reardencommerce.com/userprofile/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <login>profilepull</login>
      <password>deem@1234</password>
              <!--<superdomain>rearden</superdomain>-->
      <companyDomain>gaikodabmua</companyDomain>
      </h:AuthHeader>
    <user:AuthHeader1 xmlns:user="http://webservices.reardencommerce.com/userprofile/"/></s:Header>
    <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <updateRequest xmlns="http://webservices.reardencommerce.com/userprofile/">
        <customerSet>
            <user>
                      <externalID>${externalID}</externalID>
                      <domain>gaikodabmua</domain>
                      <accountStatus>Active</accountStatus>
                      <employeeStatus>A</employeeStatus>
                      <userInfo is-modified="true" last-updated="2020-03-26T11:44:54.000Z">
                          <accountType>1</accountType>
                          <userName>${userName}</userName>
                          <firstName>carrentalonly</firstName>
                          <lastName>user</lastName>
                          <email>${email}</email>
                          <birthday>1985-03-12</birthday>
                          <gender>F</gender>
                          <languagePreference>en_US</languagePreference>
                          <workPhone>
                              <countryCode>1</countryCode>
                          </workPhone>
                          <mobilePhone>
                              <countryCode>1</countryCode>
                          </mobilePhone>
                          <workFax>
                              <countryCode>1</countryCode>
                          </workFax>
                          <address>
                              <street1>333 Meadowlands Pkwy</street1>
                              <city>Secaucus</city>
                              <stateProvince>NJ</stateProvince>
                              <postalCode>07094</postalCode>
                              <country>US</country>
                          </address>
                          <homeAddress>
                              <country>US</country>
                          </homeAddress>
                          <emergencyContactPrimaryPhone>
                              <number>4155551212</number>
                              <countryCode>1</countryCode>
                          </emergencyContactPrimaryPhone>
                          <emergencyContactSecondaryPhone>
                              <number>4155551212</number>
                              <countryCode>1</countryCode>
                          </emergencyContactSecondaryPhone>
                          <emergencyContactAddress>
                              <country>US</country>
                          </emergencyContactAddress>
                          <groupwareID>${groupwareID}</groupwareID>
                          <subdomainName>GAIKOTRAVEL</subdomainName>
                          <vipIndicator>false</vipIndicator>
                      </userInfo>
                      <customFieldSet is-modified="true" last-updated="2020-03-26T11:44:54.000Z"/>
                      <servicePreferences is-modified="true" last-updated="2020-03-26T11:44:54.000Z">
                          <airlinePreferences>
                              <homeAirport></homeAirport>
                              <mealPreference></mealPreference>
                              <seatPreference>Aisle</seatPreference>
                              <otherPreferences></otherPreferences>
                              <farePreference></farePreference>
                          </airlinePreferences>
                          <carRentalPreferences>
                              <defaultTransmissionType>A</defaultTransmissionType>
                              <defaultNumDoors>C</defaultNumDoors>
                              <defaultCarType></defaultCarType>
                          </carRentalPreferences>
                          <railPreferences>
                              <preferredCabinClass>coach</preferredCabinClass>
                              <defaultSearchOption>OnewayRail</defaultSearchOption>
                          </railPreferences>
                          <defaultAirChargeCardNumber></defaultAirChargeCardNumber>
                          <defaultHotelChargeCardNumber></defaultHotelChargeCardNumber>
                          <defaultCarChargeCardNumber>4111111111111111</defaultCarChargeCardNumber>
                      </servicePreferences>
                      <unusedTicketSet/>
                      <delegateSet is-modified="true" last-updated="2020-03-26T11:44:54.000Z"/>
                      <passportSet is-modified="true" last-updated="2020-03-26T11:44:54.000Z"/>
                      <nationalIDCardSet is-modified="true" last-updated="2020-03-26T11:44:54.000Z"/>
                      <visaSet is-modified="true" last-updated="2020-03-26T11:44:54.000Z"/>
                      <chargeCardSet is-modified="true" last-updated="2020-03-26T11:44:54.000Z">
                          <chargeCard>
                              <cardNumber>4111111111111111</cardNumber>
                              <brandType>VI</brandType>
                              <expirationDate>2034-03-31</expirationDate>
                              <cardName>visaprofile</cardName>
                              <isCorporate>false</isCorporate>
                              <billingAddress>
                                  <street1>642 Harrison Street</street1>
                                  <mailStop>642 Harrison Street</mailStop>
                                  <city>San Francisco</city>
                                  <stateProvince>CA</stateProvince>
                                  <postalCode>94107</postalCode>
                                  <country>US</country>
                              </billingAddress>
                              <billingName>visa</billingName>
                          </chargeCard>
                          <chargeCard>
                              <cardNumber>5454545454545454</cardNumber>
                              <brandType>CA</brandType>
                              <expirationDate>2023-08-31</expirationDate>
                              <cardName>AutoSitePaymentCard</cardName>
                              <isCorporate>true</isCorporate>
                              <isSiteCard>true</isSiteCard>
                          </chargeCard>
                      </chargeCardSet>
                      <userCredentialsSet is-modified="true" last-updated="2020-03-26T11:44:54.000Z"/>
                      <userExternalIdSet is-modified="true" last-updated="2020-03-26T11:44:54.000Z">
                          <reardenPNRSyncID>8630581</reardenPNRSyncID>
                          <PNRSyncID>8630581</PNRSyncID>
                          <myProfileOrgID>0</myProfileOrgID>
                          <myProfileTravelerID>0</myProfileTravelerID>
                      </userExternalIdSet>
                      <roleSet is-modified="true" last-updated="2020-03-26T11:44:54.000Z"/>
                      <timestamp>2020-05-${randomDD}T11:44:54.000Z</timestamp>
                  </user>
                  </customerSet>
  </updateRequest>
  </s:Body>
  </s:Envelope>`
}
exports.profilePullByUniqueIDPayload=async(uniqueID)=> {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
    <AuthHeader xmlns="http://webservices.reardencommerce.com/userprofile/">
    <login>profilepull</login>
    <password>deem@1234</password>
    <!--<superdomain>amex</superdomain>-->
    <companyDomain>gaikodabmua</companyDomain>
    </AuthHeader>
    </soapenv:Header>
    <soapenv:Body>
    <getRequest xmlns="http://webservices.reardencommerce.com/userprofile/">
    <uniqueID>${uniqueID}</uniqueID>
    </getRequest>
    </soapenv:Body>
    </soapenv:Envelope>`
}
exports.updateUserDomainPayload=async(birthDate, fname, lname, updatemail, timestamp)=> {
    return `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Header>
      <h:AuthHeader xmlns:h="http://webservices.reardencommerce.com/userprofile/" xmlns="http://webservices.reardencommerce.com/userprofile/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <login>profilepull</login>
      <password>deem@1234</password>
          <!--<superdomain>gaiko</superdomain>-->
      <companyDomain>gaikodabmua</companyDomain>
      </h:AuthHeader>
    <user:AuthHeader1 xmlns:user="http://webservices.reardencommerce.com/userprofile/"/></s:Header>
    <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <updateRequest xmlns="http://webservices.reardencommerce.com/userprofile/">
               <customerSet xmlns="">
                  <user>
                      <externalID>usernamemtk</externalID>
                      <domain>gaikodabmua</domain>
                      <accountStatus>Active</accountStatus>
                      <employeeStatus>A</employeeStatus>
                      <userInfo is-modified="true" last-updated="2020-04-08T06:48:44.000Z">
                          <accountType>1</accountType>
                          <userName>username1agm</userName>
                          <firstName>${fname}</firstName>
                          <lastName>${lname}</lastName>
                          <email>${updatemail}</email>
                          <birthday>${birthDate}</birthday>
                          <gender>F</gender>
                          <languagePreference>en_UK</languagePreference>
                          <workPhone>
                              <countryCode>1</countryCode>
                          </workPhone>
                          <mobilePhone>
                              <countryCode>1</countryCode>
                          </mobilePhone>
                          <workFax>
                              <countryCode>1</countryCode>
                          </workFax>
                          <address>
                              <street1>333 Meadowlands Pkwy</street1>
                              <city>Secaucus</city>
                              <stateProvince>NJ</stateProvince>
                              <postalCode>07094</postalCode>
                              <country>US</country>
                          </address>
                          <homeAddress>
                              <country>US</country>
                          </homeAddress>
                          <emergencyContactPrimaryPhone>
                              <number>4155551212</number>
                              <countryCode>1</countryCode>
                          </emergencyContactPrimaryPhone>
                          <emergencyContactSecondaryPhone>
                              <number>4155551212</number>
                              <countryCode>1</countryCode>
                          </emergencyContactSecondaryPhone>
                          <emergencyContactAddress>
                              <country>US</country>
                          </emergencyContactAddress>
                          <groupwareID>${updatemail}</groupwareID>
                          <subdomainName>GAIKOTRAVEL</subdomainName>
                          <vipIndicator>false</vipIndicator>
                      </userInfo>
                      <customFieldSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <servicePreferences is-modified="true" last-updated="2020-04-08T06:48:44.000Z">
                          <airlinePreferences>
                              <seatPreference>Aisle</seatPreference>
                          </airlinePreferences>
                          <carRentalPreferences>
                              <defaultTransmissionType>A</defaultTransmissionType>
                              <defaultNumDoors>C</defaultNumDoors>
                          </carRentalPreferences>
                          <railPreferences>
                              <preferredCabinClass>coach</preferredCabinClass>
                              <defaultSearchOption>OnewayRail</defaultSearchOption>
                          </railPreferences>
                          <defaultAirChargeCardNumber></defaultAirChargeCardNumber>
                          <defaultHotelChargeCardNumber></defaultHotelChargeCardNumber>
                          <defaultCarChargeCardNumber>4111111111111111</defaultCarChargeCardNumber>
                      </servicePreferences>
                      <unusedTicketSet/>
                      <delegateSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <passportSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <nationalIDCardSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <visaSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <chargeCardSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z">
                          <chargeCard>
                              <cardNumber>4111111111111111</cardNumber>
                              <brandType>VI</brandType>
                              <expirationDate>2034-03-31</expirationDate>
                              <cardName>visaprofile</cardName>
                              <isCorporate>false</isCorporate>
                              <billingAddress>
                                  <street1>642 Harrison Street</street1>
                                  <mailStop>642 Harrison Street</mailStop>
                                  <city>San Francisco</city>
                                  <stateProvince>CA</stateProvince>
                                  <postalCode>94107</postalCode>
                                  <country>US</country>
                              </billingAddress>
                              <billingName>visa</billingName>
                          </chargeCard>
                          <chargeCard>
                              <cardNumber>5454545454545454</cardNumber>
                              <brandType>CA</brandType>
                              <expirationDate>2023-08-31</expirationDate>
                              <cardName>AutoSitePaymentCard</cardName>
                              <isCorporate>true</isCorporate>
                              <isSiteCard>true</isSiteCard>
                          </chargeCard>
                      </chargeCardSet>
                      <userCredentialsSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <userExternalIdSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z">
                          <reardenPNRSyncID>8636146</reardenPNRSyncID>
                          <PNRSyncID>8636146</PNRSyncID>
                          <myProfileOrgID>0</myProfileOrgID>
                          <myProfileTravelerID>0</myProfileTravelerID>
                      </userExternalIdSet>
                      <roleSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <timestamp>2020-06-${timestamp}T06:48:44.000Z</timestamp>
                  </user>
              </customerSet>
              </updateRequest>
      </s:Body>
  </s:Envelope>`
}

exports.updateUserSuperDomainPayload= async(birthDate, fname, lname, updatemail, timestamp, profilepullusername)=> {
    return `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Header>
      <h:AuthHeader xmlns:h="http://webservices.reardencommerce.com/userprofile/" xmlns="http://webservices.reardencommerce.com/userprofile/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <login>partnerprofilepull</login>
      <password>deem@1234</password>
          <superdomain>gaiko</superdomain>
            </h:AuthHeader>
    <user:AuthHeader1 xmlns:user="http://webservices.reardencommerce.com/userprofile/"/></s:Header>
    <s:Body xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <updateRequest xmlns="http://webservices.reardencommerce.com/userprofile/">
               <customerSet xmlns="">
                  <user>
                      <externalID>usernamemtk</externalID>
                      <domain>gaikodabmua</domain>
                      <accountStatus>Active</accountStatus>
                      <employeeStatus>A</employeeStatus>
                      <userInfo is-modified="true" last-updated="2020-04-08T06:48:44.000Z">
                          <accountType>1</accountType>
                          <userName>username1agm</userName>
                          <firstName>${fname}</firstName>
                          <lastName>${lname}</lastName>
                          <email>${updatemail}</email>
                          <birthday>${birthDate}</birthday>
                          <gender>F</gender>
                          <languagePreference>en_UK</languagePreference>
                          <workPhone>
                              <countryCode>1</countryCode>
                          </workPhone>
                          <mobilePhone>
                              <countryCode>1</countryCode>
                          </mobilePhone>
                          <workFax>
                              <countryCode>1</countryCode>
                          </workFax>
                          <address>
                              <street1>333 Meadowlands Pkwy</street1>
                              <city>Secaucus</city>
                              <stateProvince>NJ</stateProvince>
                              <postalCode>07094</postalCode>
                              <country>US</country>
                          </address>
                          <homeAddress>
                              <country>US</country>
                          </homeAddress>
                          <emergencyContactPrimaryPhone>
                              <number>4155551212</number>
                              <countryCode>1</countryCode>
                          </emergencyContactPrimaryPhone>
                          <emergencyContactSecondaryPhone>
                              <number>4155551212</number>
                              <countryCode>1</countryCode>
                          </emergencyContactSecondaryPhone>
                          <emergencyContactAddress>
                              <country>US</country>
                          </emergencyContactAddress>
                          <groupwareID>${updatemail}</groupwareID>
                          <subdomainName>GAIKOTRAVEL</subdomainName>
                          <vipIndicator>false</vipIndicator>
                      </userInfo>
                      <customFieldSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <servicePreferences is-modified="true" last-updated="2020-04-08T06:48:44.000Z">
                          <airlinePreferences>
                              <seatPreference>Aisle</seatPreference>
                          </airlinePreferences>
                          <carRentalPreferences>
                              <defaultTransmissionType>A</defaultTransmissionType>
                              <defaultNumDoors>C</defaultNumDoors>
                          </carRentalPreferences>
                          <railPreferences>
                              <preferredCabinClass>coach</preferredCabinClass>
                              <defaultSearchOption>OnewayRail</defaultSearchOption>
                          </railPreferences>
                          <defaultAirChargeCardNumber></defaultAirChargeCardNumber>
                          <defaultHotelChargeCardNumber></defaultHotelChargeCardNumber>
                          <defaultCarChargeCardNumber>4111111111111111</defaultCarChargeCardNumber>
                      </servicePreferences>
                      <unusedTicketSet/>
                      <delegateSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <passportSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <nationalIDCardSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <visaSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <chargeCardSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z">
                          <chargeCard>
                              <cardNumber>4111111111111111</cardNumber>
                              <brandType>VI</brandType>
                              <expirationDate>2034-03-31</expirationDate>
                              <cardName>visaprofile</cardName>
                              <isCorporate>false</isCorporate>
                              <billingAddress>
                                  <street1>642 Harrison Street</street1>
                                  <mailStop>642 Harrison Street</mailStop>
                                  <city>San Francisco</city>
                                  <stateProvince>CA</stateProvince>
                                  <postalCode>94107</postalCode>
                                  <country>US</country>
                              </billingAddress>
                              <billingName>visa</billingName>
                          </chargeCard>
                          <chargeCard>
                              <cardNumber>5454545454545454</cardNumber>
                              <brandType>CA</brandType>
                              <expirationDate>2023-08-31</expirationDate>
                              <cardName>AutoSitePaymentCard</cardName>
                              <isCorporate>true</isCorporate>
                              <isSiteCard>true</isSiteCard>
                          </chargeCard>
                      </chargeCardSet>
                      <userCredentialsSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <userExternalIdSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z">
                          <reardenPNRSyncID>8636146</reardenPNRSyncID>
                          <PNRSyncID>8636146</PNRSyncID>
                          <myProfileOrgID>0</myProfileOrgID>
                          <myProfileTravelerID>0</myProfileTravelerID>
                      </userExternalIdSet>
                      <roleSet is-modified="true" last-updated="2020-04-08T06:48:44.000Z"/>
                      <timestamp>2020-06-${timestamp}T06:48:44.000Z</timestamp>
                  </user>
              </customerSet>
              </updateRequest>
      </s:Body>
  </s:Envelope>`
}

exports.userProfileHeader = async () => {
    let headers = {
        "Content-Type": "application/vnd.reardencommerce.profile.v2+json",
        "Accept": "application/vnd.reardencommerce.profile.v2+json"
        // 'X-Rearden-SecCtx': JSON.stringify({'auth':{'id':parseInt(customerID),'type':'e','ext':{'s':parseInt(siteID), 'p': 2 } } })
    };
    return headers;
}

exports.userProfilePayload = async (flag) => {
	let randomId = await commonHelper.getRandomId();
    var createData = gauge.dataStore.scenarioStore.get("createProfileUser")
    let jsonToReturn = jsonData["payload"]
    jsonToReturn.core.siteId = flag == true ? null : jsonData["payload"].core.siteId;
    jsonToReturn.core.externalId = jsonData["payload"].core.externalId+randomId;
    jsonToReturn.core.username=jsonData["payload"].core.username+randomId;
    jsonToReturn.core.email= flag == true ? createData.data.core.email.split("@")[0]+randomId+"@deem.com" : jsonData["payload"].core.email.split("@")[0]+randomId+"@deem.com";
    jsonToReturn.name.given= flag == true ? createData.data.name.given+randomId : jsonData["payload"].name.given+randomId;
    jsonToReturn.name.surname=flag == true ? createData.data.name.surname+randomId : jsonData["payload"].name.surname+randomId;
    return (jsonToReturn);
}

exports.createBatchUserPayload = async () => {
    let randomId = await commonHelper.getRandomId();
    let createBatchJsonData = jsonData["users"]
   for(let i=0; i<createBatchJsonData.length; i++){
    createBatchJsonData[i].core.siteId=jsonData["users"][i].core.siteId;
    createBatchJsonData[i].core.externalId=jsonData["users"][i].core.externalId;
    createBatchJsonData[i].core.email=jsonData["users"][i].core.email+"@deem.com";
    createBatchJsonData[i].core.username=jsonData["users"][i].core.username;
    createBatchJsonData[i].name.given=jsonData["users"][i].name.given;
    createBatchJsonData[i].name.surname=jsonData["users"][i].name.surname;
    createBatchJsonData[i].employee.employeeId=jsonData["users"][i].employee.employeeId;
    }
    return (createBatchJsonData);

}
    	



exports.getUserAuthenticateHeaders = async () => {
    let headers = {
        'Content-Type': 'application/vnd.deem.authentication.up-v1+json',
        "Accept": 'application/vnd.deem.authentication-v1+json'
    }
    return headers;
}
exports.postRequest = async (end_point, payload, customerID) => {
    try{
        const headers = {
            'Content-Type': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'Accept': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'X-RX-Rearden-Secctx': JSON.stringify({ 'auth': { 'id': parseInt(customerID), 'type': 'e', 'ext': { 's': parseInt(process.env.siteID), 'p': 1 } } }),
            'X-Rearden-Secctx': JSON.stringify({"sess":{"id":"13049ad0-e27d-4566-996f-d19ede88034a"},"eff":{"ref":"auth"},"auth":{"id": parseInt(customerID),"type":"e","ext":{"s":parseInt(process.env.siteID),"p":1,"l":"mfrainier"}}})
        };
        let response = await Rest({
            method: "post",
            url: end_point,
            data: payload,
            headers: headers,
        });
        console.log(await response.status, "this is the status");
        let txgroupid = await response.data.transactionGroupId;
        gauge.dataStore.scenarioStore.put("txgroupid", txgroupid);
        if (parseInt(response.status) > 201) {
            throw new Error(`Invalid status code showing \n Expected: 201 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
}

exports.putTRSRequest = async (end_point, payload, customerID) => {
    try{
        const headers = {
            'Content-Type': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'Accept': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'X-Rearden-Secctx': JSON.stringify({ 'auth': { 'id': parseInt(customerID), 'type': 'e', 'ext': { 's': parseInt(process.env.siteID), 'p': 1 } } }),
            'X-Rearden-Secctx': JSON.stringify({"sess":{"id":"13049ad0-e27d-4566-996f-d19ede88034a"},"eff":{"ref":"auth"},"auth":{"id": parseInt(customerID),"type":"e","ext":{"s":parseInt(process.env.siteID),"p":1,"l":"mfrainier"}}})
        };
        let response = await Rest({
            method: "put",
            url: end_point,
            data: payload,
            headers: headers,
        });
        console.log(await response.status, "this is the status");
        if (parseInt(response.status) > 200) {
            throw new Error(`Invalid status code showing \n Expected: 201 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
}

exports.getTRSRequest = async (end_point, payload, customerID) => {
    try{
        const headers = {
            'Content-Type': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'Accept': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'X-Rearden-Secctx': JSON.stringify({ 'auth': { 'id': parseInt(customerID), 'type': 'e', 'ext': { 's': parseInt(process.env.siteID), 'p': 1 } } }),
            'X-Rearden-Secctx': JSON.stringify({"sess":{"id":"13049ad0-e27d-4566-996f-d19ede88034a"},"eff":{"ref":"auth"},"auth":{"id": parseInt(customerID),"type":"e","ext":{"s":parseInt(process.env.siteID),"p":1,"l":"mfrainier"}}})
        };
        let response = await Rest({
            method: "get",
            url: end_point,
            data: payload,
            headers: headers,
        });
        console.log(await response.status, "this is the status");
        if (parseInt(response.status) > 200) {
            throw new Error(`Invalid status code showing \n Expected: 201 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
}

exports.getTRSGroupByUser = async (end_point) => {
    try{
        const headers = {
            'Content-Type': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'Accept': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'X-Rearden-Secctx': JSON.stringify({ 'auth': { 'id': 9557941, 'type': 'e', 'ext': { 's': 32265, 'p': 1 } } }),
        };
        let response = await Rest({
            method: "get",
            url: end_point,
            headers: headers,
            param: {
                "userId": "9557941",
                "fetchOrders": "true",
                "sortBy": "startTime",
                "sort": "asc"
            }
        });
        console.log(await response.status, "this is the status");
        if (parseInt(response.status) > 200) {
            throw new Error(`Invalid status code showing \n Expected: 201 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
}

exports.getTRSGroupByConst = async (end_point) => {
    try{
        const headers = {
            'Content-Type': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'Accept': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'X-Rearden-Secctx': JSON.stringify({"sess":{"id":"13049ad0-e27d-4566-996f-d19ede88034a"},"eff":{"ref":"auth"},"auth":{"id": 8981131 ,"type":"e","ext":{"s": 1188540,"p":1,"l":"mfrainier"}}})
        };
        let response = await Rest({
            method: "get",
            url: end_point,
            headers: headers,
            param: {
                "userId": "8981131",
                "includeAuthorizers": "true",
            }
        });
        console.log(await response.status, "this is the status");
        if (parseInt(response.status) > 200) {
            throw new Error(`Invalid status code showing \n Expected: 201 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteTRSGroupById = async (end_point) => {
    try{
        const headers = {
            'Content-Type': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'Accept': 'application/vnd.reardencommerce.clipboardsvc.v1.0+json',
            'X-Rearden-Secctx': JSON.stringify({"auth":{"id":11746891,"type":"e","ext":{"s":32265,"p":1}}})
        };
        let response = await Rest({
            method: "delete",
            url: end_point,
            headers: headers,
        });
        console.log(await response.status, "this is the status");
        if (parseInt(response.status) > 200) {
            throw new Error(`Invalid status code showing \n Expected: 201 \n Actual: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error);
    }
}




exports.getVpayHeaders = async (siteID, customerID) => {
    let headers = {
        'Content-Type': 'application/vnd.deem.vpaysvc.v1.0+json',
        "Accept": 'application/vnd.deem.vpaysvc.v1.0+json',
        'X-Rearden-SecCtx': JSON.stringify({ 'auth': { 'id': parseInt(customerID), 'type': 'e', 'ext': { 's': parseInt(siteID), 'p': 2 } } })
    };
    return headers;
}

exports.getDesktopUserAuthenticatePayload = async () => {
	return `{
        "principal" : {
          "username" : "platformdeem@gmail.com",
          "siteId" :  "692025"
        },
        "credentials" : "mygazoo123",
        "tld" : "deemstage3.com"
      }`
}

exports.getMobileUserAuthenticatePayload = async () => {
	return `{
        "principal" : {
          "username" : "platformdeem@gmail.com"
        },
        "credentials" : "mygazoo123",
        "tld" : "deemstage3.com"
      }`
}

exports.getNewDecryptEndpointSingleSiteMatchTestHeaders = async () => {
    let headers = {
        'Content-Type': 'application/vnd.deem.encryption-v1+json',
        "Accept": 'application/vnd.deem.encryption-v1+json'
    };
    return headers;
}

exports.getNewDecryptEndpointSingleSiteMatchTestPayload = async (sessiontoken) => {
	return `{
        "sessionToken" : ${sessiontoken}
    }`
}

exports.getUserWrongAuthenticatePayload = async () => {
	return `{
        "principal" : {
          "username" : "platformdeem@gmail.com"
        },
        "credentials" : "mygazoo1$$",
        "tld" : "deemstage3.com"
      }`
}

exports.getLookupPayload = async () => {
	return `{
        "identifier":"reach2viji@gmail.com",
        "tld":"deemstage3.com"
    }`
}

exports.getLookupHeaders = async () => {
    let headers = {
        'Content-Type': 'application/vnd.deem.lookup-v1+json',
        "Accept": 'application/vnd.deem.lookup-v1+json'
    };
    return headers;
}

exports.getActivationCodeEncryptionpPayload = async () => {
	return `{
        "username": "james1",
        "password" : "1231$mygazoo",
        "companyId": 2,
        "partnerId": 1,
        "expirationTime":1415293880619,
        "expired":true
    }`
}

exports.getActivationCodeEncryptionHeaders = async () => {
    let headers = {
        'Content-Type': 'application/vnd.deem.encryption-v1+json',
        "Accept": 'application/vnd.deem.encryption-v1+json'
    };
    return headers;
}

exports.getActivationCodeDecryptionpPayload = async () => {
    let encryptedCode = gauge.dataStore.scenarioStore.get("encryptedCode");
	return `{
        "activationCode" : ${encryptedCode}
        }`
}

exports.getResetPasswordHeaders = async () => {
    let headers = {
        'Content-Type': 'application/vnd.deem.credential-v1+json',
        "Accept": 'application/vnd.deem.credential-v1+json'
    };
    return headers;
}

exports.getNositeInformationPayload = async () => {
	return `{
        "identifier" : "james.brown@deem.com",
        "identifierType" : "EMAIL",
        "tld" : "mastercardbusinessnetwork.com"
      }`
}

exports.getSiteIdIncludedPayload = async () => {
	return `{
        "identifier" : "james123",
        "identifierType" : "USERNAME",
        "siteId" : "12345",
        "tld" : "mastercardbusinessnetwork.com"
      }`
}

exports.getNoSecurityQuestionsPayload = async () => {
	return `{
        "identifier" : "james.brown@deem.com",
        "identifierType" : "EMAIL",
        "siteId" : "56564",
        "userId" : "12345",
        "cluster" : "cluster_a",
        "tld" : "mastercardbusinessnetwork.com"
      }`
}

exports.getWithSecurityQuestionsPayload = async () => {
	return `{
        "identifier" : "james.brown@deem.com",
        "identifierType" : "EMAIL",
        "siteId" : "56564",
        "userId" : "12345",
        "cluster" : "cluster_a",
        "securityAnswers" :
          [
              {
                  "id" : "1",
                  "answer" : "football"
              },
              {
                  "id" : "2",
                  "answer" : "San Francisco"
              }
               
          ],
        "tld" : "mastercardbusinessnetwork.com"
      }`
}

exports.getMobileMultiSiteMatchPartnerTldRestrictTestPayload = async () => {
	return `{
        "principal" : {
          "username" : "platformdeem@gmail.com"
        },
        "credentials" : "mygazoo1$$",
        "tld" : "deemstage3.com"
      }`
}

exports.getDesktopMultiSiteMatchPartnerTldRestrictTestPayload = async () => {
	return `{
        "principal" : {
          "username" : "platformdeem@gmail.com",
           "siteId":"476010"
        },
        "credentials" : "mygazoo123",
        "tld" : "deemstage3.com"
      }`
}

exports.getMobileLoginSingleSiteMatchSeedIITestPayload = async () => {
	return `{
        "principal" : {
          "username" : "tldauthuser3@gmail.com"
        },
        "credentials" : "mygazoo5",
        "tld" : "deemstage3.com"
      }`
}

exports.getDesktopLoginSingleSiteMatchSeedIITestTestPayload = async () => {
	return `{
        "principal":{
         "username":"tldauthuser6@gmail.com",
            "siteId":"476010"
     },
        "credentials":"mygazoo5",
        "tld":"deemstage3.com"
    }`
}

exports.getmultiSiteMatchWrongRestrictedTldTest = async (i) => {
    let password, tld;
    i==1? (password = "mygazoo1", tld = "ehistage3.com"): (password = "wrongpassword", tld = "deemstage3.com")

	return `{
        "principal":{
         "username":"tldauthuser1@gmail.com"
     },
        "credentials":"${password}",
        "tld":"${tld}"
    }`
}

exports.getMobileLoginSingleSiteMatchSiteIdTestPayload = async () => {
	return `{
        "principal" : {
          "username" : "platformdeem@gmail.com"
        },
        "credentials" : "mygazoo123",
        "tld" : "ehistage3.com"
      }`
}

exports.getMobileLoginSingleSiteMatchWrongPWPayload = async () => {
	return `{
        "principal" : {
          "username" : "platformdeem@gmail.com"
        },
        "credentials" : "wrongpassword",
        "tld" : "ehistage3.com"
      }`
}

exports.getMobileLoginSingleSiteMatchWrongTLDPayload = async () => {
	return `{
        "principal" : {
          "username" : "platformdeem@gmail.com"
        },
        "credentials" : "wrongpassword",
        "tld" : "ehistage3.com"
      }`
}

exports.getmobileLoginSingleSiteMatchwrongUNload = async () => {
	return `{
        "principal" : {
          "username" : "wrongusername"
        },
        "credentials" : "mygazoo5",
        "tld" : "ehistage3.com"
      }`
}
exports.getSingleCardReqPayload = async (customerId, siteId) => {

    let traveltripID = Math.floor(100000 + Math.random() * 900000);
    gauge.dataStore.scenarioStore.put('traveltripID', traveltripID);
    console.log(traveltripID);
    return `{
        "travelTripId": "${traveltripID}",
        "name": "Trip to LA",
        "companyId": ${siteId},
        "companyName": "Talaris",
        "customerId": ${customerId},
        "customerName": "Longtail",
        "beginDate": "${gauge.dataStore.scenarioStore.get('beginDate')}T15:00:00.000-07:00",
        "endDate": "${gauge.dataStore.scenarioStore.get('endDate')}T11:00:00.000-07:00",
        "pnrRecordLocator": "",
         "travelers": [
          {
            "salutation": "Mr/Ms/Mrs",
            "firstName": "Long",
            "lastName": "Tail",
            "email": "longtail@deem.com",
            "primary": "true"
          },
          {
            "salutation": "Mr/Ms/Mrs",
            "firstName": "Long",
            "lastName": "Tail",
            "email": "longtail@deem.com",
            "primary": "true"
          }
        ],
        "identifiers":[
              {
                  "key":"identifierKey1",
                  "value":"identifierValue1"
              },
              {
                  "key":"identifierKey2",
                  "value":"identifierKey2"
              }
          ],
        "virtualPayTripItems": [
          {
            "name": "Trip to LA",
            "correlationId": "segment1",
            "travelServicetype": "HOTEL",
            "vendorId": "CONFERMA",
            "agencyId": "1234",
            "clientId": "${gauge.dataStore.scenarioStore.get('clientId')}",
            "bookerId": "9876",
            "amount":100.00,
            "currencyCode": "USD",
            "pnrWorkarea":"BC/HRS/",
            "beginDate": "${gauge.dataStore.scenarioStore.get('beginDate')}T15:00:00.000-07:00",
            "endDate": "${gauge.dataStore.scenarioStore.get('endDate')}T11:00:00.000-07:00",
            "reservation":
              {
                "paymentInstructions":"",
                "bookingPlatform": "Deem Online",
                "roomType": "King Size",
                "roomRateDescription": "Breakfast and wifi",
                "cancellationPolicy": "cancelation policy"
              },
            "supplier":
              {
                "name": "Hotel Name",
                "contact":
                  {
                    "address":
                    {
                      "streetAddress1": "4545 Real",
                      "streetAddress2": "address2",
                      "city": "Palo Alto",
                      "province": "CA",
                      "postalCode": "94107",
                      "countryCode": "USA"
                    },
                    "phone": "6508430795",
                    "fax": "6508430796",
                    "email": "booking@hilton.com"
                  }
              }
          }
             ]
      }`
}

exports.getMultipleCardReqPayload = async (customerId, siteId) => {

    let traveltripID = Math.floor(100000 + Math.random() * 900000);
    gauge.dataStore.scenarioStore.put('traveltripID', traveltripID);
    console.log(traveltripID);
    return `{
        "travelTripId": "${traveltripID}",
        "name": "Trip to LA",
        "companyId": ${siteId},
        "companyName": "Talaris",
        "customerId": ${customerId},
        "customerName": "Longtail",
        "beginDate": "${gauge.dataStore.scenarioStore.get('beginDate')}T15:00:00.000-07:00",
        "endDate": "${gauge.dataStore.scenarioStore.get('endDate')}T11:00:00.000-07:00",
        "pnrRecordLocator": "",
         "travelers": [
          {
            "salutation": "Mr/Ms/Mrs",
            "firstName": "Long",
            "lastName": "Tail",
            "email": "longtail@deem.com",
            "primary": "true"
          },
          {
            "salutation": "Mr/Ms/Mrs",
            "firstName": "Long",
            "lastName": "Tail",
            "email": "longtail@deem.com",
            "primary": "true"
          }
        ],
        "identifiers":[
              {
                  "key":"identifierKey1",
                  "value":"identifierValue1"
              },
              {
                  "key":"identifierKey2",
                  "value":"identifierKey2"
              }
          ],
        "virtualPayTripItems": [
          {
            "name": "Trip to LA",
            "correlationId": "segment1",
            "travelServicetype": "HOTEL",
            "vendorId": "CONFERMA",
            "agencyId": "1234",
            "clientId": "${gauge.dataStore.scenarioStore.get('clientId')}",
            "bookerId": "9876",
            "amount":100.00,
            "currencyCode": "USD",
            "pnrWorkarea":"BC/HRS/",
            "beginDate": "${gauge.dataStore.scenarioStore.get('beginDate')}T15:00:00.000-07:00",
            "endDate": "${gauge.dataStore.scenarioStore.get('endDate')}T11:00:00.000-07:00",
            "reservation":
              {
                "paymentInstructions":"",
                "bookingPlatform": "Deem Online",
                "roomType": "King Size",
                "roomRateDescription": "Breakfast and wifi",
                "cancellationPolicy": "cancelation policy"
              },
            "supplier":
              {
                "name": "Hotel Name",
                "contact":
                  {
                    "address":
                    {
                      "streetAddress1": "4545 Real",
                      "streetAddress2": "address2",
                      "city": "Palo Alto",
                      "province": "CA",
                      "postalCode": "94107",
                      "countryCode": "USA"
                    },
                    "phone": "6508430795",
                    "fax": "6508430796",
                    "email": "booking@hilton.com"
                  }
              }
          },
          {
            "name": "Trip to LA",
            "correlationId": "segment1",
            "travelServicetype": "HOTEL",
            "vendorId": "CONFERMA",
            "agencyId": "1234",
            "clientId": "${gauge.dataStore.scenarioStore.get('clientId')}",
            "bookerId": "9876",
            "amount":100.00,
            "currencyCode": "USD",
            "pnrWorkarea":"BC/HRS/",
            "beginDate": "${gauge.dataStore.scenarioStore.get('beginDate')}T15:00:00.000-07:00",
            "endDate": "${gauge.dataStore.scenarioStore.get('endDate')}T11:00:00.000-07:00",
            "reservation":
              {
                "paymentInstructions":"",
                "bookingPlatform": "Deem Online",
                "roomType": "King Size",
                "roomRateDescription": "Breakfast and wifi",
                "cancellationPolicy": "cancelation policy"
              },
            "supplier":
              {
                "name": "Hotel Name",
                "contact":
                  {
                    "address":
                    {
                      "streetAddress1": "4545 Real",
                      "streetAddress2": "address2",
                      "city": "Palo Alto",
                      "province": "CA",
                      "postalCode": "94107",
                      "countryCode": "USA"
                    },
                    "phone": "6508430795",
                    "fax": "6508430796",
                    "email": "booking@hilton.com"
                  }
              }
          }
             ]
      }`
}


exports.updateSingleBookingStatuspayload = async (vendorPaymentId, travelTripID) => {

    let travelprocessID = Math.floor(100000 + Math.random() * 900000);
    gauge.dataStore.scenarioStore.put('travelprocessID', travelprocessID);
    return `{
        "travelTripId": "${travelTripID}",
        "travelProcessid": ${travelprocessID},
        "pnrRecordLocator": "ABCDEF",
        "virtualPayTripItems": [
          {
            "travelServicetype": "HOTEL",
            "vendorId": "CONFERMA",
            "vendorPaymentId": "${vendorPaymentId}",
            "paymentStatus": "${gauge.dataStore.scenarioStore.get('bookingStatus')}",
            "supplier":
              {
                "confirmationNumber":12345
              }
          }
        ]
      }`
}

exports.updatemultipleBookingStatuspayload = async (vendorPaymentId1, vendorPaymentId2, travelTripID) => {

    let travelprocessID = Math.floor(100000 + Math.random() * 900000);
    gauge.dataStore.scenarioStore.put('travelprocessID', travelprocessID);
    return `{
        "travelTripId": "${travelTripID}",
        "travelProcessid": ${travelprocessID},
        "pnrRecordLocator": "ABCDEF",
        "virtualPayTripItems": [
          {
            "travelServicetype": "HOTEL",
            "vendorId": "CONFERMA",
            "vendorPaymentId": "${vendorPaymentId1}",
            "paymentStatus": "${gauge.dataStore.scenarioStore.get('bookingStatus')}",
            "supplier":
              {
                "confirmationNumber":12345
              }
          },{
            "travelServicetype": "HOTEL",
            "vendorId": "CONFERMA",
            "vendorPaymentId": "${vendorPaymentId2}",
            "paymentStatus": "${gauge.dataStore.scenarioStore.get('secondHotelStatus')}",
            "supplier":
              {
                "confirmationNumber":12345
              }
          }
        ]
      }`

}
