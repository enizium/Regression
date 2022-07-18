const { click, getCookies,waitFor,$ } = require('taiko');
const userJsonData = require("../../resources/users/users_data.json");
const otfopJsonData = require("../../resources/otfop_data.json");
const additionalInformation = require("../../resources/users/guest_users_data.json");
const guestUserJsonData = require("../../resources/users/guest_users_data.json");
const consoleUserJsonData = require("../../resources/users/console_users");
const partnersData = require("../../resources/dashboard_data.json")
const bagsToCheckingJsonData = require("../../resources/bags_to_check.json");
const messageContentJsonData = require("../../resources/popup_messages.json");
const testharness_data = require("../../resources/users/testharness_date.json");
const payloadCeventJsonData = require("../../resources/payload_cevent.json");
const DSMMessageLightbox = require("../../resources/DSM_message_lightbox.json");
const DSMMessageInline = require("../../resources/DSM_message_Inline.json");
const pageTitle = require("../../resources/pageTitle.json");
const purchasePageData = require("../../resources/purchase_page.json");
const cat35 = require("../../resources/cat35.json");
const pnr = require("../../resources/pnr.json");
const pushNotificationData = require("../../resources/data/push_notification.json")
const userProfile = require("../../resources/data/user_profile_glopro.json");
const apiUrl = require("../../resources/APIurl.json") 
const api_user = require("../../resources/users/api_validate_data.json")
const trsServices = require("../../resources/data/trs_services.json");


const colorRGBValues = require("../../resources/colors_rgb_values.json");
const bookingActions = require("../../resources/sanity_messages.json");

//  console.clustera.deemstage3.com/

exports.travelsiteUrl = () => {
    switch (process.env.environment) {
        case "stage3":
            return "https://" + process.env.siteName + ".deemstage3.com";
        case "stage2":
            return "https://" + process.env.siteName + ".deemstage2.com";
        case "sustain":
            return "https://" + process.env.siteName + ".rcsustain.com";
        case "prod":
            return "https://" + process.env.siteName + ".deem.com";
        case "qa8":
            return "https://" + process.env.siteName + ".rcqa8.com";
        case "qa9":
            return "https://" + process.env.siteName + ".rcqa9.com";
        case "qa25":
            return "https://" + process.env.siteName + ".rcqa25.com";
        case "ehistage3":
            return "https://" + process.env.siteName + ".ehistage3.com";
    }
};
exports.dashboardConsoleUrl = () => {
    switch (process.env.environment) {
        case "stage3":
            return "https://console.deemstage3.com";
        case "stage2":
            return "https://console.deemstage2.com";
        case "sustain":
            return "https://console.rcsustain.com";
        case "qa8":
            return "https://console.rcqa8.com";
        case "qa9":
            return "https://console.rcqa9.com";
        case "qa10":
            return "https://console.rcqa10.com";
        case "qa25":
            return "https://console.rcqa25.com";
    }
};

exports.userDetails = (userKey) => {
    let envJsonData = userJsonData[process.env.environment];
    let gdsJsonData = envJsonData[process.env.gdsName];
    return gdsJsonData[userKey];

}

exports.languageSelection = async () => {
    switch (process.env.i18N_lang) {
        case "en-us":
            return await click("North American English");
        case "da-dk":
            return await click("Dansk");
        case "sv-se":
            return await click("Svenska");
    }
}

exports.retrieveSessionId = async () => {
    var cookiesArr = await getCookies({ urls: [this.travelsiteUrl().toString() + "/rc"] });
    cookiesArr.forEach(function (item) {
        if (item.name === "JSESSIONID" && item.path === "/rc") {
            gauge.dataStore.specStore.put('sessionId', item.value);
            console.log(`The session id is ${gauge.dataStore.specStore.get('sessionId')}`);
        }
    })
}

exports.otfopDetails = (cardType) => {
    return otfopJsonData[cardType];
}
exports.additionalInformation = (projectCode) => {
    return additionalInformation[projectCode];
}


exports.guestUserDetails = (guestUserKey) => {
    return guestUserJsonData[guestUserKey];
}

exports.consoleUserDetails = (consoleUserKey) => {
    let envJsonData = consoleUserJsonData[process.env.environment];
    return envJsonData[consoleUserKey];
}

exports.totalColumnCount = (table) => {
    let totalColumn = table.rows[0].cells.length;
    return totalColumn;
}
exports.getFutureDate = function (daysCount) {
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysCount);

    var dd = targetDate.getDate();
    var mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
    var yyyy = targetDate.getFullYear();
    let yearTOString = '' + yyyy; // 'yyyy parses int to string'
    var yy = yearTOString.slice(2, 4);
    var dateString = mm + "/" + dd + "/" + yy;

    return dateString;
}
exports.getFullYear = function () {
    var targetYear = new Date();
    var year = targetYear.getFullYear();
    return year;
}

exports.getDayAfterXdays = function (daysCount) {
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysCount);

    var dd = targetDate.getDate();
    return dd;
}

exports.addDays = function(date, days){
    var date = new Date(date);
    date.setDate(date.getDate() + days);
    return date;
}

exports.getMonthNumberAfterXdays = function (daysCount) {
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysCount);

    var mm = targetDate.getMonth() + 1;
    return mm;
}

exports.partnerData = () => {
    return partnersData;
}


exports.waitForSpinner = async() => {
    await waitFor(async () => !(await $("#loadingSpinner").exists()), process.env.test_timeout); 
}

exports.waitForLoaderSvg = async() => {
    await waitFor(async () => !(await $("#web-loader-svg").exists()), process.env.test_timeout);
}

exports.waitForWalkmePlayer = async() => {
    await waitFor(async () => (await $("#walkme-player").exists()), process.env.test_timeout); 
}

exports.testharnesssiteUrl = () =>{
    switch (process.env.sso_testharness_type) {
        case "autossostage3":
            return "http://scsg3lappca01.scqa.rden.us:7077/testharness/saml/";
        case "ceventssostage3":
            return "http://scsg3lappca01.scqa.rden.us:7077/testharness/saml/";
    }
};

exports.serverConfigurationDetails = (ssoTest) =>{
    return testharness_data[ssoTest]

}
exports.bagsCount = (num) => {
    return bagsToCheckingJsonData[num];
}

exports.getcustomPayloadOnCevent = (payLoad = "payload") => {
    return payloadCeventJsonData[payLoad];
}


exports.messageContent = (msg) => {
    return messageContentJsonData[msg];
}

exports.partnerSiteLevelLightboxDSM = (partnerSiteDsm) => {
    return DSMMessageLightbox[partnerSiteDsm];
}

exports.partnerSiteLevelInlineDSM = (partnerSiteDsm) => {
    return DSMMessageInline[partnerSiteDsm];
}

exports.provisionfigurationDetails = (ssoUser) =>{
    return testharness_data[ssoUser]

}

exports.allPageTitle = () => {
    return pageTitle;
}

exports.purchaseData = () => {
    return purchasePageData;
}
exports.colorRGBValues = () => {
    return colorRGBValues;
}

exports.cat35Data = () => {
    return cat35;
}

exports.pnrData = () => {
    return pnr;
}

exports.getCancelEndPoint = function (serviceNode, processID) {
    switch (process.env.environment) {
        case 'stage3':
            return `http://${serviceNode}.scqa.rden.us:18011/rest/travelbooking/${processID}`;
        case 'stage2':
            return `http://${serviceNode}.scqa.rden.us:18011/rest/travelbooking/${processID}`;
    }
}
exports.getDayAndDate = function (noOfDays) { 
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + noOfDays);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return targetDate.toLocaleDateString('en-us', options)
}

exports.pushNotificationData = () => {
    return pushNotificationData;
}

exports.userProfile = () => {
    return userProfile;
}
exports.getRandomId = () => {
     let randomId = Math.random().toString(36).substring(7);
     return randomId;
}

exports.requestAPIUrl = (requestURL) => {
    return apiUrl[requestURL]
}

exports.requestAPIUserData = (requestData) => {
    return api_user[requestData]
}    
exports.trsServices = () => {
    return trsServices;
}
exports.getDateWithConfermaAPISupported = function (daysCount) {
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysCount);
    var month = targetDate.getMonth() + 1;
    var date = `${targetDate.getDate() < 10 ? '0'+targetDate.getDate():targetDate.getDate()}`;

    return `${targetDate.getFullYear()}-${month < 10 ? '0' + month : '' + month}-${date}`;

}

exports.bookingActions = () => {
    return bookingActions;
}
