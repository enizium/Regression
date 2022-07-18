"use strict";
const commonHelper = require("../helpers/helper.js");
const api_common_utils = require("../common/api_common_utils.js");
const assert = require("assert");
const { create } = require("lodash");
const { expect } = require("chai");
const exp = require("constants");

exports.getCustomerId = async () => {
    let userKey = gauge.dataStore.specStore.get('userKey');
    let userDetails = commonHelper.userDetails(userKey);
    let customerID = userDetails["customerId"];
    return customerID;
}
exports.header = async () => {
    await this.getCustomerId();
    let PNSHeaders = await api_common_utils.getPNSHeaders(process.env.siteID, customerID);
    return PNSHeaders;
}
exports.userProfilePayload = async () => {
    await this.header();
    let profileUserPayload = await api_common_utils.userProfilePayload(process.env.siteID, customerID);
    return profileUserPayload;
}
exports.createUser = async () => {
    let userProfile = await commonHelper.userProfile();
    let header = await api_common_utils.userProfileHeader();
    let payload = await api_common_utils.userProfilePayload(false);
    gauge.dataStore.scenarioStore.put("userPayload", payload);
    let createProfileUser = await api_common_utils.restPostRequest(`${userProfile.createUser.URL}` + `?site_id=32265&src=admin-user:dashboard:123`, header, payload);
    gauge.dataStore.scenarioStore.put("createProfileUser", createProfileUser)
    console.log("User Created ==============" + createProfileUser);
}
exports.getUser = async () => {
    let userProfileJson = await commonHelper.userProfile();
    let url = userProfileJson["getUserProfile"].URL;
    let header = await api_common_utils.userProfileHeader();
    let profileResponse = await api_common_utils.restGetRequest(`${url}` + `12922921?site_id=32265&fg=core&fg=name&fg=businessContact`, header);
    console.log(profileResponse);

}
exports.updateUser = async () => {
    let userProfile = gauge.dataStore.scenarioStore.get("createProfileUser")
    let userProfileJson = await commonHelper.userProfile();
    let url = userProfileJson["updateUser"].URL;
    let header = await api_common_utils.userProfileHeader();
    let payload = await api_common_utils.userProfilePayload(true);
    let updateResponse = await api_common_utils.restPostRequest(`${url}` + `${userProfile.data.core.userId}?site_id=32265&src=end-user:profile-ui`, header, payload);
    gauge.dataStore.scenarioStore.put("updateResponse", updateResponse);
    console.log(updateResponse);
}
exports.verifyResponse = () => {
    let userPayload = gauge.dataStore.scenarioStore.get("userPayload");
    let responseData = gauge.dataStore.scenarioStore.get("createProfileUser");
    let updatedResponse = gauge.dataStore.scenarioStore.get("updateResponse");
    expect(userPayload.core.externalId).to.equals(responseData.data.core.externalId);
    expect(userPayload.core.username).to.equals(responseData.data.core.username);
    expect(userPayload.core.email).to.equals(responseData.data.core.email);
    expect(userPayload.name.given).to.equals(responseData.data.name.given);
    expect(userPayload.name.surname).to.equals(responseData.data.name.surname);
}

exports.verifyUpdateResponse = () => {
    let responseData = gauge.dataStore.scenarioStore.get("createProfileUser");
    let updatedResponse = gauge.dataStore.scenarioStore.get("updateResponse");
    expect(updatedResponse.data.core.email).to.not.equals(responseData.data.core.email);
    expect(updatedResponse.data.name.given).to.not.equals(responseData.data.name.given);
    expect(updatedResponse.data.name.surname).to.not.equals(responseData.data.name.surname);
}

exports.getBatchUsers = async () => {
    let userProfileJson = await commonHelper.userProfile();
    let url = (userProfileJson["getBatchUsers"].URL);
    let header = await api_common_utils.userProfileHeader();
    let profileResponse = await api_common_utils.restGetRequest(`${url}` + `user_ids=12922921,2798251&site_id=32265&fg=core,name`, header);
    console.log(profileResponse);

}

exports.userAuthenticate = async (applicationType) => {
    let payload
    let url = commonHelper.requestAPIUrl("LoginSingleSite");
    let header = await api_common_utils.getUserAuthenticateHeaders();
    applicationType == "Desktop" ? payload= await api_common_utils.getDesktopUserAuthenticatePayload(): payload= await api_common_utils.getMobileUserAuthenticatePayload()
    let userAuthenticationResponse = await api_common_utils.restPostRequest(url, header, payload);
    await this.validateUserAuthenticate ("Authenticate",userAuthenticationResponse)
}

exports.validateUserAuthenticate = async (Authenticate, userAuthenticationResponse) => {
    let expectedData =  commonHelper.requestAPIUserData(Authenticate);
    assert.equal(expectedData.status , userAuthenticationResponse.status, `Actual status: ${userAuthenticationResponse.status}`)
    assert.equal(expectedData.success , userAuthenticationResponse.data.success, `Actual success: ${ userAuthenticationResponse.data.success} Expected:${expectedData.success }`)
    assert.equal(expectedData.tld , userAuthenticationResponse.data.tld , `Actual tld: ${userAuthenticationResponse.data.tld}`)
    assert.equal(expectedData.authenticationSource ,userAuthenticationResponse.data.authenticationSource , `Actual authenticationSource:${userAuthenticationResponse.data.authenticationSource}`)
    assert.equal(expectedData.cluster ,userAuthenticationResponse.data.credentials.parts.cluster , `Actual cluster: ${userAuthenticationResponse.data.credentials.parts.cluster}`)
    assert.equal(expectedData.username ,userAuthenticationResponse.data.credentials.parts.username, `Actual username: ${userAuthenticationResponse.data.credentials.parts.username}`)
    assert.equal(expectedData.partnerId ,userAuthenticationResponse.data.credentials.parts.partnerId , `Actual partnerId: ${userAuthenticationResponse.data.credentials.parts.partnerId}`)
    assert.equal(expectedData.customerId ,userAuthenticationResponse.data.credentials.parts.customerId, `Actual customerId:${userAuthenticationResponse.data.credentials.parts.customerId}`)
    assert.equal(expectedData.companyId ,userAuthenticationResponse.data.credentials.parts.companyId , `Actaul companyId: ${userAuthenticationResponse.data.credentials.parts.companyId}`)
    assert.equal(expectedData.ref ,userAuthenticationResponse.data.ps.eff.ref , ` Actual ref :${userAuthenticationResponse.data.ps.eff.ref}`)
    assert.equal(expectedData.id , userAuthenticationResponse.data.ps.auth.id, ` Actual id: ${userAuthenticationResponse.data.ps.auth.id}`)
    assert.equal(expectedData.siteName , userAuthenticationResponse.data.ps.auth.ext.siteName, `Actual siteName: ${userAuthenticationResponse.data.ps.auth.ext.siteName}`)
    assert.equal(expectedData.siteUrlName , userAuthenticationResponse.data.ps.auth.ext.siteUrlName, `Actaul siteUrlName:${userAuthenticationResponse.data.ps.auth.ext.siteUrlName}`)
}

exports.multiSiteMatchWrongRestrictedTldSubsetTest = async() => {
    let url =  commonHelper.requestAPIUrl("LoginSingleSite");
    let header = await api_common_utils.getUserAuthenticateHeaders();
    let payload = await api_common_utils.getUserWrongAuthenticatePayload();
    let userAuthenticationResponse = await api_common_utils.negativePostRequest(url, header, payload);
    await this.validateMultiSiteMatchWrongRestrictedTldSubsetTest(userAuthenticationResponse)
}

exports.validateMultiSiteMatchWrongRestrictedTldSubsetTest = async(userAuthenticationResponse)=> {
    let expectedData =  commonHelper.requestAPIUserData("MatchWrongRestrictedTld");
    assert.equal(expectedData.code , userAuthenticationResponse.data.code, `Actual status: ${userAuthenticationResponse.status}`)
    assert.equal(expectedData.code , userAuthenticationResponse.data.code, `Actual status: ${userAuthenticationResponse.data.code}`)
    assert.equal(expectedData.message , userAuthenticationResponse.data.message, `Actual success: ${ userAuthenticationResponse.data.message}`)
}

exports.lookupTest = async () => {
    let url = commonHelper.requestAPIUrl("Lookup");
    let header = await api_common_utils.getLookupHeaders();
    let payload= await api_common_utils.getLookupPayload()
    let lookupResponse = await api_common_utils.restPostRequest(url, header, payload);
    await this.validateLookup (lookupResponse)
}

exports.validateLookup = async(lookupResponse) => {
    await this.SSOCreationUserVerification(lookupResponse);
    await this.SSOEnabledSitesVerification(lookupResponse)
}
exports.SSOCreationUserVerification = async (lookupResponse) =>{
    let expectedData =  commonHelper.requestAPIUserData("SSOCreation");
    assert.ok(expectedData.identifier , lookupResponse.data.accounts[0].identifier ,`Actaul identifier = ${lookupResponse.data.accounts[0].identifier}` )
    assert.ok(expectedData.siteId , lookupResponse.data.accounts[0].siteId ,`Actaul siteId = ${lookupResponse.data.accounts[0].siteId}` )
    assert.ok(expectedData.siteName , lookupResponse.data.accounts[0].siteName ,`Actaul siteName= ${lookupResponse.data.accounts[0].siteName}` )
    assert.ok(expectedData.siteUrlName , lookupResponse.data.accounts[0].siteUrlName ,`Actaul siteUrlName= ${lookupResponse.data.accounts[0].siteUrlName}` )
    assert.ok(expectedData.siteType , lookupResponse.data.accounts[0].siteType ,`Actaul siteType = ${lookupResponse.data.accounts[0].siteType}` )
    assert.ok(expectedData.cluster , lookupResponse.data.accounts[0].cluster ,`Actaul cluster= ${lookupResponse.data.accounts[0].cluster}` )
    assert.ok(expectedData.partnerId , lookupResponse.data.accounts[0].partnerId ,`Actaul partnerId= ${lookupResponse.data.accounts[0].partnerId}` )
    assert.ok(expectedData.state , lookupResponse.data.accounts[0].state ,`Actaul state = ${lookupResponse.data.accounts[0].state}` )
    assert.ok(expectedData.url , lookupResponse.data.accounts[0].url ,`Actaul url= ${lookupResponse.data.accounts[0].url}` )
    assert.ok(expectedData.ssoType , lookupResponse.data.accounts[0].ssoType ,`Actaul ssoType = ${lookupResponse.data.accounts[0].ssoType}` )
    assert.ok(expectedData.mobileSsoEnabled , lookupResponse.data.accounts[0].mobileSsoEnabled ,`Actaul mobileSsoEnabled= ${lookupResponse.data.accounts[0].mobileSsoEnabled}` )
}

exports.SSOEnabledSitesVerification = async (lookupResponse) =>{
    let expectedData =  commonHelper.requestAPIUserData("SSOEnableSite");
    assert.ok(expectedData.siteId , lookupResponse.data.accounts[1].siteId ,`Actaul siteId = ${lookupResponse.data.accounts[1].siteId}` )
    assert.ok(expectedData.siteName , lookupResponse.data.accounts[1].siteName ,`Actaul siteName= ${lookupResponse.data.accounts[1].siteName}` )
    assert.ok(expectedData.siteUrlName , lookupResponse.data.accounts[1].siteUrlName ,`Actaul siteUrlName= ${lookupResponse.data.accounts[1].siteUrlName}` )
    assert.ok(expectedData.siteType , lookupResponse.data.accounts[1].siteType ,`Actaul siteType= ${lookupResponse.data.accounts[1].siteType}` )
    assert.ok(expectedData.cluster , lookupResponse.data.accounts[1].cluster ,`Actaul cluster= ${lookupResponse.data.accounts[1].cluster}` )
    assert.ok(expectedData.partnerId , lookupResponse.data.accounts[1].partnerId ,`Actaul partnerId= ${lookupResponse.data.accounts[1].partnerId}` )
    assert.ok(expectedData.state , lookupResponse.data.accounts[1].state ,`Actaul state= ${lookupResponse.data.accounts[1].state}` )
    assert.ok(expectedData.url , lookupResponse.data.accounts[1].url ,`Actaul url= ${lookupResponse.data.accounts[1].url}` )
    assert.ok(expectedData.ssoType , lookupResponse.data.accounts[1].ssoType ,`Actaul ssoType = ${lookupResponse.data.accounts[1].ssoType}` )
}

exports.activationCodeEncryption = async () => {
    let url = commonHelper.requestAPIUrl("activationCodeEncryption");
    let header = await api_common_utils.getActivationCodeEncryptionHeaders();
    let payload= await api_common_utils.getActivationCodeEncryptionpPayload()
    let activationCodeEncryptionResponse = await api_common_utils.restPostRequest(url, header, payload);
    let encryptedCode = activationCodeEncryptionResponse.data.encrypted
    gauge.dataStore.scenarioStore.put("encryptedCode", encryptedCode);
    await this.validateActivationCodeEncryption (activationCodeEncryptionResponse)
}

exports.validateActivationCodeEncryption = async (activationCodeEncryptionResponse) => {
    let expectedData =  commonHelper.requestAPIUserData("ActivationCodeEncryption");
    assert.ok(expectedData.username , activationCodeEncryptionResponse.data.parts.username ,`Actaul username = ${activationCodeEncryptionResponse.data.parts.username}` )
    assert.ok(expectedData.password , activationCodeEncryptionResponse.data.parts.password ,`Actaul password = ${activationCodeEncryptionResponse.data.parts.password}` )
    assert.ok(expectedData.companyId , activationCodeEncryptionResponse.data.parts.companyId ,`Actaul companyId = ${activationCodeEncryptionResponse.data.parts.companyId}` )
    assert.ok(expectedData.partnerId , activationCodeEncryptionResponse.data.parts.partnerId ,`Actaul partnerId = ${activationCodeEncryptionResponse.data.parts.partnerId}` )
    assert.ok(expectedData.expirationTime , activationCodeEncryptionResponse.data.parts.expirationTime ,`Actaul expirationTime  = ${activationCodeEncryptionResponse.data.parts.expirationTime}` )
    assert.ok(expectedData.expired , activationCodeEncryptionResponse.data.parts.expired ,`Actaul expired = ${activationCodeEncryptionResponse.data.parts.expired}` )
}

exports.activationCodeDecryption = async () => {
    let url = commonHelper.requestAPIUrl("activationCodeEncryption");
    let header = await api_common_utils.getActivationCodeEncryptionHeaders();
    let payload= await api_common_utils.getActivationCodeEncryptionpPayload()
    let activationCodeEncryptionResponse = await api_common_utils.restPostRequest(url, header, payload);
    await this.validateActivationCodeEncryption (activationCodeEncryptionResponse)
} 

exports.resetPassword = async (types) => {
    let url = commonHelper.requestAPIUrl("resetPassword");
    let header = await api_common_utils.getResetPasswordHeaders();
    let payload;
    switch(types){
        case "No Site Information":
            payload = await api_common_utils.getNositeInformationPayload()
            break;
        case "SiteId Included":
            payload = await api_common_utils.getSiteIdIncludedPayload()
            break;
        case "No Security Questions":
            payload = await api_common_utils.getNoSecurityQuestionsPayload()
            break;    
        case "With Security Questions":
            payload = await api_common_utils.getWithSecurityQuestionsPayload()
            break;
    }
    let resetPasswordResponse = await api_common_utils.restPostRequest(url, header, payload);
    await this.validateResetPassword (resetPasswordResponse)  
} 

exports.validateResetPassword = async (resetPasswordResponse)=> {
    let expectedData =  commonHelper.requestAPIUserData("changePassword");
    assert.ok(expectedData.identifier , resetPasswordResponse.data.identifier ,`Actaul identifier = ${resetPasswordResponse.data.identifier}` )
    assert.ok(expectedData.identifierType , resetPasswordResponse.data.identifierType ,`Actaul identifierType = ${resetPasswordResponse.data.identifierType}` )
    assert.ok(expectedData.status , resetPasswordResponse.data.status ,`Actaul status  = ${resetPasswordResponse.data.status}` )
} 
    
exports.MultiSiteMatchPartnerTldRestrictTest = async (applicationType) => {
    let payload;
    let url = commonHelper.requestAPIUrl("LoginSingleSite");
    let header = await api_common_utils.getUserAuthenticateHeaders();
    applicationType == "Mobile Multi Site" ? payload= await api_common_utils.getMobileMultiSiteMatchPartnerTldRestrictTestPayload()
    : payload= await api_common_utils.getDesktopMultiSiteMatchPartnerTldRestrictTestPayload()
    let userAuthenticationResponse = await api_common_utils.negativePostRequest(url, header, payload);
    await this.validateMultiSiteMatchWrongRestrictedTldSubsetTest (userAuthenticationResponse)
}

exports.loginSingleSiteMatchSeedIITest = async (applicationType) => {
    let payload
    let url = commonHelper.requestAPIUrl("LoginSingleSite");
    let header = await api_common_utils.getUserAuthenticateHeaders();
    applicationType == "Mobile" ? payload= await api_common_utils.getMobileLoginSingleSiteMatchSeedIITestPayload()
    : payload= await api_common_utils.getDesktopLoginSingleSiteMatchSeedIITestTestPayload()
    let userAuthenticationResponse = await api_common_utils.restPostRequest(url, header, payload);
    await this.validateUserAuthenticate (`${applicationType}LoginMultiSiteMatchRestrictedTld`, userAuthenticationResponse)
}

exports.multiSiteMatchWrongRestrictedTldTest = async () =>{
    let url = commonHelper.requestAPIUrl("LoginSingleSite");
    let header = await api_common_utils.getUserAuthenticateHeaders();

    for (var i=0; i<2; i++) {
        let payload = await api_common_utils.getmultiSiteMatchWrongRestrictedTldTest(i)
        let userAuthenticationResponse = await api_common_utils.negativePostRequest(url, header, payload);
        await this.validateMultiSiteMatchWrongRestrictedTldSubsetTest(userAuthenticationResponse)
    }
}

exports.mobileLoginSingleSiteMatchSiteIdTest = async () => {
    let url = commonHelper.requestAPIUrl("LoginSingleSite");
    let header = await api_common_utils.getUserAuthenticateHeaders();
    let payload= await api_common_utils.getMobileMultiSiteMatchPartnerTldRestrictTestPayload()
    let userAuthenticationResponse = await api_common_utils.negativePostRequest(url, header, payload);
    await this.validateMultiSiteMatchWrongRestrictedTldSubsetTest (userAuthenticationResponse)
}

exports.mobileLoginSingleSiteMatchWrongPWTest = async () => {
    let url = commonHelper.requestAPIUrl("LoginSingleSite");
    let header = await api_common_utils.getUserAuthenticateHeaders();
    let payload= await api_common_utils.getMobileLoginSingleSiteMatchWrongPWPayload()
    let userAuthenticationResponse = await api_common_utils.negativePostRequest(url, header, payload);
    await this.validateMultiSiteMatchWrongRestrictedTldSubsetTest (userAuthenticationResponse)
}

exports.mobileLoginSingleSiteMatchwrongTLDTest = async () => {
    let url = commonHelper.requestAPIUrl("LoginSingleSite");
    let header = await api_common_utils.getUserAuthenticateHeaders();
    let payload= await api_common_utils.getMobileLoginSingleSiteMatchWrongTLDPayload()
    let userAuthenticationResponse = await api_common_utils.negativePostRequest(url, header, payload);
    await this.validateMultiSiteMatchWrongRestrictedTldSubsetTest (userAuthenticationResponse)
}

exports.mobileLoginSingleSiteMatchwrongUNTest = async () => {
    let url = commonHelper.requestAPIUrl("LoginSingleSite");
    let header = await api_common_utils.getUserAuthenticateHeaders();
    let payload= await api_common_utils.getmobileLoginSingleSiteMatchwrongUNload()
    let userAuthenticationResponse = await api_common_utils.negativePostRequest(url, header, payload);
    await this.validateMultiSiteMatchWrongRestrictedTldSubsetTest (userAuthenticationResponse)
}
exports.createBatchUsers = async () => {
    let userProfile = await commonHelper.userProfile();
    let header = await api_common_utils.userProfileHeader();
    let users = await api_common_utils.createBatchUserPayload();
    gauge.dataStore.scenarioStore.put("batchUserPayload", users);
    let createProfileUser = await api_common_utils.restPostRequest(`${userProfile.createBatchUsers.URL}` + `src=batch:profile-upload&natural_key=email`, header, users);
    gauge.dataStore.scenarioStore.put("createProfileUser", createProfileUser)
    console.log("User Created ==============" + createProfileUser);

}


