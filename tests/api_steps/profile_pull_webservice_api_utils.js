"use strict";

const api_common_utils = require("../common/api_common_utils.js");
const commonHelper = require("../helpers/helper.js");
const commonAction = require("../common/common_actions.js")
const assert = require("assert");
var xml2js = require('xml2js');
const { title } = require("taiko");

const ProfilePullUserVerificationa = {
    domain: "gaikodabmua",
    accountstatus: "Active",
    firstname: "carrentalonly",
    lastname: "user",
    birthday: "1985-03-12",
    gender: "F",
    Gender: "X",
    title: "Mx.",
    langugaepreference: "en_US",
    streetAddress: "333 Meadowlands Pkwy",
    city: "Secaucus",
    stateProvince: "NJ",
    postalCode: "07094",
    country: "US"
}



step("Create user based on profile pull webservices", async function () {
    gauge.dataStore.specStore.put('ProfilePullHeaders', await api_common_utils.getProfilePullHeaders());
    console.log(gauge.dataStore.specStore.get('ProfilePullHeaders'));
    gauge.dataStore.scenarioStore.put("ExternalID", "username" + Math.random().toString(36).substring(9));
    gauge.dataStore.scenarioStore.put("newuser", "username" + Math.random().toString(36).substring(9));
    gauge.dataStore.scenarioStore.put("Emailid", "testemail" + Math.random().toString(36).substring(9) + "@deem.com");
    gauge.dataStore.scenarioStore.put("GroupwareID", "testgroupware" + Math.random().toString(36).substring(9) + "@deem.com");
    let randomdd = Math.floor(Math.random() * (28 - 1) + 1);
    console.log(randomdd);
    if (randomdd <= 9) {
        randomdd = "0" + randomdd;
        console.log(randomdd);
    }
    gauge.dataStore.scenarioStore.put("randomDate", randomdd);
    let createNewUserPayload = await api_common_utils.createuserPayload(gauge.dataStore.scenarioStore.get("ExternalID"), gauge.dataStore.scenarioStore.get("newuser"), gauge.dataStore.scenarioStore.get("Emailid"), gauge.dataStore.scenarioStore.get("GroupwareID"), gauge.dataStore.scenarioStore.get("randomDate"));
    console.log(createNewUserPayload);
    let createUserResponse = await api_common_utils.restPostRequest(`http://scsg3lappca01.scqa.rden.us:8052/webservices/services/userProfile`, gauge.dataStore.specStore.get('ProfilePullHeaders'), createNewUserPayload);
    let createUserResponseData = createUserResponse.data;
    console.log(createUserResponseData);
    gauge.dataStore.specStore.put('createUserResponseData', createUserResponseData);

});

step("retrieve the created/updated user for <usertype> via profile pull webservices", async function (usertype) {
    let uniqueID;
    if (usertype === "newuser") {
        uniqueID = gauge.dataStore.scenarioStore.get("newuser");
    }
    else {
        uniqueID = "username1agm";
    }
    let profilePullByIDPayload = await api_common_utils.profilePullByUniqueIDPayload(uniqueID);
    console.log(profilePullByIDPayload);
    let profilePullByIDResponse = await api_common_utils.restPostRequest(`http://scsg3lappca01.scqa.rden.us:8052/webservices/services/userProfile`, gauge.dataStore.specStore.get('ProfilePullHeaders'), profilePullByIDPayload);
    let profilePullByIDResponseData = profilePullByIDResponse.data;
    console.log(profilePullByIDResponseData);
    gauge.dataStore.specStore.put('profilePullByIDResponseData', profilePullByIDResponseData);


});

step("verify the user information via profile pull services for <usertype>", async function (usertype) {
    let responseData = gauge.dataStore.specStore.get('profilePullByIDResponseData');
    var parser = new xml2js.Parser();
    parser.parseString(responseData, function (err, result) {
        console.log(result);
        let externalid = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].externalID[0];
        let domain = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].domain[0];
        let accountStatus = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].accountStatus[0];
        let FirstName = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].firstName[0];
        let lastName = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].lastName[0];
        let userName = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].userName[0];
        let birthday = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].birthday[0];
        let gender = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].gender[0];
        let title = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].title[0];
        let email = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].email[0];
        let groupwareID = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].groupwareID[0];
        let streetAddress = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].address[0].street1[0];
        let city = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].address[0].city
        let stateProvince = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].address[0].stateProvince[0];
        let postalCode = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].address[0].postalCode[0];
        let country = result['soapenv:Envelope']['soapenv:Body'][0].getResponse[0].customerSet[0].user[0].userInfo[0].address[0].country[0];
        assert.equal(domain, ProfilePullUserVerificationa.domain, "domain is showing wrong in the response");
        assert.equal(accountStatus, ProfilePullUserVerificationa.accountstatus, "accountStatus is showing wrong in the response");        
        assert.equal(streetAddress, ProfilePullUserVerificationa.streetAddress, "streetAddress is showing wrong in the response");
        assert.equal(city, ProfilePullUserVerificationa.city, "city is showing wrong in the response");
        assert.equal(stateProvince, ProfilePullUserVerificationa.stateProvince, "stateProvince is showing wrong in the response");
        assert.equal(postalCode, ProfilePullUserVerificationa.postalCode, "postalCode is showing wrong in the response");
        assert.equal(country, ProfilePullUserVerificationa.country, "country is showing wrong in the response");
        if (usertype === "newuser") {
            assert.equal(externalid, gauge.dataStore.scenarioStore.get("ExternalID"), "ExternaID is showing wrong in the response");
            assert.equal(FirstName, ProfilePullUserVerificationa.firstname, "FirstName is showing wrong in the response");
            assert.equal(lastName, ProfilePullUserVerificationa.lastname, "lastName is showing wrong in the response");
            assert.equal(userName, gauge.dataStore.scenarioStore.get("newuser"), "userName is showing wrong in the response");
            assert.equal(birthday, ProfilePullUserVerificationa.birthday, "birthday is showing wrong in the response");
            assert.equal(email, gauge.dataStore.scenarioStore.get("Emailid"), "email is showing wrong in the response");
            assert.equal(groupwareID, gauge.dataStore.scenarioStore.get("GroupwareID"), "groupwareID is showing wrong in the response");
            assert.equal(gender, ProfilePullUserVerificationa.gender, "gender is showing wrong in the response");
            assert.equal(title, ProfilePullUserVerificationa.title, "title is showing wrong in the response");

        }
        else if (usertype === "MxUser"){
            assert.equal(gender, ProfilePullUserVerificationa.Gender, "gender is showing wrong in the response");
            console.log("test");
            assert.equal(title, ProfilePullUserVerificationa.title, "title is showing wrong in the response");

        }
        else {
            assert.equal(FirstName, gauge.dataStore.scenarioStore.get("fname"), "FirstName is showing wrong in the response");
            assert.equal(lastName, gauge.dataStore.scenarioStore.get("lname"), "lastName is showing wrong in the response");
            assert.equal(userName, "username1agm", "userName is showing wrong in the response");
            assert.equal(birthday, gauge.dataStore.scenarioStore.get("birthDate"), "birthday is showing wrong in the response");
            assert.equal(email, gauge.dataStore.scenarioStore.get("updatemail"), "email is showing wrong in the response");
        }        
    });
});




step("get the existing <DomainType> and update based on profile pull webservices", async function (DomainType) {
    gauge.dataStore.specStore.put('ProfilePullHeaders', await api_common_utils.getProfilePullHeaders());
    gauge.dataStore.scenarioStore.put('birthDate', commonAction.getDateWithConfermaAPISupported(100));
    gauge.dataStore.scenarioStore.put("fname", "username" + Math.random().toString(36).substring(9));
    gauge.dataStore.scenarioStore.put("lname", "username" + Math.random().toString(36).substring(9));
    gauge.dataStore.scenarioStore.put("updatemail", "testemail" + Math.random().toString(36).substring(9) + "@deem.com");
    let randomdd = Math.floor(Math.random() * (28 - 1) + 1);
    console.log(randomdd);
    if (randomdd <= 9) {
        randomdd = "0" + randomdd;
        console.log(randomdd);
    }
    gauge.dataStore.scenarioStore.put("timestamp", randomdd);   
    let updateuserPayload = (DomainType === 'domain') ? await api_common_utils.updateUserDomainPayload(gauge.dataStore.scenarioStore.get('birthDate'), gauge.dataStore.scenarioStore.get('fname'), gauge.dataStore.scenarioStore.get('lname'), gauge.dataStore.scenarioStore.get('updatemail'), gauge.dataStore.scenarioStore.get('timestamp')) : await api_common_utils.updateUserSuperDomainPayload(gauge.dataStore.scenarioStore.get('birthDate'), gauge.dataStore.scenarioStore.get('fname'), gauge.dataStore.scenarioStore.get('lname'), gauge.dataStore.scenarioStore.get('updatemail'), gauge.dataStore.scenarioStore.get('timestamp'));
    console.log(updateuserPayload);
    let updateResponse = await api_common_utils.restPostRequest(`http://scsg3lappca01.scqa.rden.us:8052/webservices/services/userProfile`, gauge.dataStore.specStore.get('ProfilePullHeaders'), updateuserPayload);
    let updateResponseData = updateResponse.data;
    console.log(updateResponseData);
    gauge.dataStore.specStore.put('updateResponseData', updateResponseData);
});

step("Create Unidentified(X) user based on profile pull webservices", async function () {
    gauge.dataStore.specStore.put('ProfilePullHeaders', await api_common_utils.getProfilePullHeaders());
    console.log(gauge.dataStore.specStore.get('ProfilePullHeaders'));
    gauge.dataStore.scenarioStore.put("ExternalID", "username" + Math.random().toString(36).substring(9));
    gauge.dataStore.scenarioStore.put("newuser", "username" + Math.random().toString(36).substring(9));
    gauge.dataStore.scenarioStore.put("Emailid", "testemail" + Math.random().toString(36).substring(9) + "@deem.com");
    gauge.dataStore.scenarioStore.put("GroupwareID", "testgroupware" + Math.random().toString(36).substring(9) + "@deem.com");
    gauge.dataStore.scenarioStore.put(`gender`, await api_common_utils.createMxUserPayload());
    gauge.dataStore.scenarioStore.put(`title`, await api_common_utils.createMxUserPayload());

    let randomdd = Math.floor(Math.random() * (28 - 1) + 1);
    console.log(randomdd);
    if (randomdd <= 9) {
        randomdd = "0" + randomdd;
        console.log(randomdd);
    }
    gauge.dataStore.scenarioStore.put("randomDate", randomdd);
    let createNewUserPayload = await api_common_utils.createMxUserPayload(gauge.dataStore.scenarioStore.get("ExternalID"), gauge.dataStore.scenarioStore.get("newuser"), gauge.dataStore.scenarioStore.get("Emailid"), gauge.dataStore.scenarioStore.get("GroupwareID"), gauge.dataStore.scenarioStore.get("randomDate"));
    console.log(createNewUserPayload);
    let createUserResponse = await api_common_utils.restPostRequest(`http://scsg3lappca01.scqa.rden.us:8052/webservices/services/userProfile`, gauge.dataStore.specStore.get('ProfilePullHeaders'), createNewUserPayload);
    let createUserResponseData = createUserResponse.data;
    console.log(createUserResponseData);
    gauge.dataStore.specStore.put('createUserResponseData', createUserResponseData);
});
