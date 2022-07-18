exports.travelPreference = () => "//a[contains(text(),'Travel Preferences')]"

//flight preference
exports.homeAirport = () =>"//input[@id='travelPreference_homeAirport']"
exports.preferredFareType = () => '//*[@id="travelPreference.travelPref.farePreference"]/option[2]'
exports.defaultSearchType  = (searchType) => `input[value='`+searchType+`']`
exports.airSpecialrequests1  = () => "airSpecialRequest1"
exports.airSpecialrequests1Id  = () => `//input[@id="airSpecialRequest1"]`
exports.airSpecialrequests2Id  = () => `//input[@id="airSpecialRequest2"]`
exports.airSpecialrequests2  = () => "airSpecialRequest2"
exports.airSpecialrequests3  = () => "airSpecialRequest3"
exports.membershipsAirline  = () => '//*[@id="travelPreference.travelPref.membershipAirlines[0].membershipAirline"]'
exports.membershipsNumber  = () => "input[name='travelPreference.travelPref.membershipAirlines[0].airMembershipNumber']"
exports.flightSaveBtn = () => "(//a[@id='buttonSave'])[2]"
exports.membershipsFirstAirline = () => 'travelPreference.travelPref.membershipAirlines[0].membershipAirline'
exports.fareTypeOption = () => '//*[@id="tripDelegateViewBean.travelerViewBeanList[0].tripMainViewBean.unrestrictedFares"]/option[1]'
exports.deleteMemberAir = () => `//div[@class="boxFrame profile first-in-profile"]//*[@class="tableLayout1 profileMembership"][1]//tr[3]//a[2]`
exports.preferredFareType = () => `travelPreference.travelPref.farePreference`

//Hotel preference
exports.hotelPreference = () => `//div[@class="boxFrame profile"][1]`
exports.hotelSpecialRequest1 = () => 'hotelSpecialRequest0'
exports.hotelSpecialRequest1Id = () => `//input[@id="hotelSpecialRequest0"]`
exports.hotelSpecialRequest2 = () => 'hotelSpecialRequest1'
exports.hotelSpecialRequest2Id = () => `//input[@id="hotelSpecialRequest1"]`
exports.hotelSpecialRequest3 = () => 'hotelSpecialRequest2'
exports.hotelSpecialRequest3Id = () => `//input[@id="hotelSpecialRequest2"]`
exports.membershipHotel = () => 'travelPreference.travelPref.hotelMembershipChain[0].hotelMembershipChain'
exports.membershipsHotelNum = () => "input[name='travelPreference.travelPref.hotelMembershipChain[0].hotelMembershipNumber']"
exports.selectMemHotel = () => '//*[@id="Hotel1"]'
exports.hotelSaveBtn = () => "(//a[@id='buttonSave'])[3]"
exports.deleteMemberHotel = () => `//div[@class="boxFrame profile"][1]//*[@class="tableLayout1 profileMembership"][1]//tr[3]//a[2]`

//car perference
exports.carPreference = () => `(//div[@class="boxFrame"])[2]`
exports.defaultCarSize = () =>'defaultCarSizes'
exports.carSpecialRequest1 = () => 'carSpecialRequest0'
exports.carSpecialRequest1Id = () => `//input[@id='carSpecialRequest0']`
exports.carSpecialRequest2 = () => 'carSpecialRequest1'
exports.carSpecialRequest2Id = () => `//input[@id='carSpecialRequest1']`
exports.carSpecialRequest3 = () => 'carSpecialRequest2'
exports.membershipCar = () => 'travelPreference.travelPref.carMembershipVendor[0].carMembershipVendor'
exports.membershipsCarNum = () =>"//input[@name='travelPreference.travelPref.carMembershipVendor[0].carMembershipNumber']"
exports.carSaveBtn = () => "(//a[@id='buttonSave'])[4]"
exports.selectedMemCar = () => '//*[@id="Rental Car company1"]'
exports.deleteMemberCar = () => `//div[@class="boxFrame"]//*[@class="tableLayout1 profileMembership"][1]//tr[3]//a[2]`

//train perference
exports.homeTrainStation = () => '//*[@id="travelPreference_homeTrainStation"]'
exports.membershipTrain = () => 'travelPreference.travelPref.membershipRailCarriers[0].railCarrier'
exports.membershipTrainNum = () => '//input[@name="travelPreference.travelPref.membershipRailCarriers[0].membershipNumber"]'
exports.trainSaveBtn = () => "(//a[@id='buttonSave'])[5]"
exports.existingMem = () => `//*[@id="Rail Carrier1"]`
exports.trainHeader = () => "//h2[normalize-space()='Train']"
exports.deleteMemberTrain = () => `//div[@class="boxFrame profile"][2]//*[@class="tableLayout1 profileMembership"][1]//tr[3]//a[2]`

exports.carRentalFrame = () => `(//div[@class="boxFrame"])[2]`

//paymentcard
exports.addPaymentCard = () => `//a[@class="iconLink addIcon"]` 
exports.cardName = () => `//input[@name="creditCard.label"]`
exports.cardType =() => `creditCard.brandType` //name
exports.cardNumber = () =>`//input[@name="creditCard.dispCCNumber"]`
exports.cardExpiryYear = () =>`creditCard.dispYearName` //name
exports.cardStreetAddress = () =>`//input[@id="addressCreditCard_street1"]`
exports.cardCity = () =>`//input[@id="addressCreditCard_city"]`
exports.cardState = () =>`addressCreditCard_state` //id
exports.cardZipCode = () =>`//input[@id="addressCreditCard_postalCode"]`
exports.cardSavebtn = () =>`//div[@id="saveSection"]`
exports.editPaymentCard = () =>`((//div[@class="floatLeft p_lt5 clearAfter"])[3]//span[@class="buttonText "])[1]`
exports.editCard = () =>`(//table[@class="full tableLayout1"]/tbody/tr[2]//a)[1]`
exports.deleteCard = () =>`(//table[@class="full tableLayout1"]/tbody/tr[2]//a)[2]`
exports.deleteBtn = () =>`//a[@id="buttonDelete"]/span/span`
exports.paymentlist = () => `//table[@class="full tableLayout1"]/tbody/tr`
exports.paymentCard = () => `//div[@class="boxContent std threeColumnLayout clearAfter"]//div[@class="col2"]/a`

//Travel Documents
//password
exports.addAPassports = () =>`(//div[@class="boxContent std3 formTwoColumn clearAfter"]//a[@class="iconLink addIcon"])[1]`
exports.number = () =>`//input[@name="documentBean.dispDocNumber"]`
exports.expirayYear = () =>`documentBean_expirationDate_year`//id
exports.issueYear = () =>`documentBean_issueDate_year`
exports.saveBtn = () =>`//div[@id="saveSection"]//span[@class="buttonText "]`
exports.passportList = () =>`//table[@class="full tableLayout1"]/tbody/tr`
exports.deletePassport = () =>`//a[@id="docDelete.link"]`
exports.editPassport = () =>`//table[@class="full tableLayout1"]/tbody/tr[2]/td[6]/a`

//visa
exports.addAVisa = () =>`(//div[@class="boxContent std3 formTwoColumn clearAfter"]//a[@class="iconLink addIcon"])[2]`
exports.visaType = () =>`documentBean.type`//name
exports.visaList = () =>`//span[@id="travelpreference.documents.visa.label"]//../../../../table[@class="full tableLayout1"]/tbody/tr`
exports.visaEdit = () =>`//span[@id="travelpreference.documents.visa.label"]//../../../../table[@class="full tableLayout1"]/tbody/tr[2]/td[5]/a`
exports.visaDelete = () =>`//span[@id="travelpreference.documents.visa.label"]//../../../..//a[@id="docDelete.link"]`

//National ID Information
exports.addNationalIdCard = () =>`(//div[@class="boxContent std3 formTwoColumn clearAfter"]//a[@class="iconLink addIcon"])[3]`

//personal info
exports.editPersonalInfo = () =>`(//div[@class="boxContent std threeColumnLayout clearAfter"]/div[@class="col1"]/a)[1]`
exports.selectTitle = () => `//select[@name="personalInfo.title"]`
exports.title = () =>`personalInfo.title` //name
exports.middleName = () =>`//input[@name="personalInfo.middleInitials"]`
exports.suffix = () =>`//input[@name="personalInfo.suffix"]`
exports.birthYear = () =>`personalInfo._start_year`//name
exports.birthDay = () => `personalInfo._start_day` //name
exports.birthMonth = () => `personalInfo._start_month` //name

//emergency info
exports.editEmergencyContact = () =>`(//div[@class="boxContent std threeColumnLayout clearAfter"]/div[@class="col1"]/a)[2]`
exports.emergencyFullName = () =>`//input[@name="settingsMainView.selectedViewer.emergencyContact.contactName"]`
exports.emergencyRelationship = () =>`settingsMainView.selectedViewer.emergencyContact.relationship`//name
exports.emergencyEmail = () =>`//input[@name="settingsMainView.selectedViewer.emergencyContact.email"]`
exports.emergencystreetAddress = () =>`//input[@id="addressEmergencyContact_street1"]`
exports.emergencyCity = () =>`//input[@id="addressEmergencyContact_city"]`
exports.emergencyState = () =>`addressEmergencyContact_state` //id
exports.emergencyZipcode = () =>`//input[@id="addressEmergencyContact_postalCode"]`
exports.emergencyPrimaryPhone = () =>`//input[@id="settingsMainView.selectedViewer.emergencyContact.primaryPhone"]`
exports.emergencySecondaryPhone= () =>`//input[@id="settingsMainView.selectedViewer.emergencyContact.secondaryPhone"]`

//delegates
exports.delegatesTab = () =>`//div[@class="deem-chrome-navbar"]/div[@class="deem-chrome-box"]/div[2]/a[6]`
exports.addDelegates = () =>`(//form[@name="uiForm"]//div[@class="paddedVertical"]/a)[2]`
exports.searchNameOrEmailAddress = () =>`//input[@name="search_name"]`
exports.delegateSearchBtn = () =>`//a[@id="buttonSearch"]//span[@class="buttonText "]`
exports.delegateSelectBtn = () =>`//a[@id="buttonSelect"]//span[@class="buttonText "]`
exports.delegateUserList = () =>`//table[@class="full listTable"]/tbody/tr`
exports.delegateDeleteLink = () =>`//a[@id="delegateDel.link"]`

//displaysetting
exports.displaySettingTab = () =>`//div[@class="deem-chrome-navbar"]/div[@class="deem-chrome-box"]/div[2]/a[7]`
exports.displayDate = (type) =>`//input[@name="altDisplayOptionsBean.displayOptionsDate"][${type}]`
exports.displayTime = (type) =>`//input[@name="altDisplayOptionsBean.displayOptionsTime"][${type}]`
exports.displayTimeZome = () =>`altDisplayOptionsBean.displayOptionsTimeZone` // name
exports.displayMeasurement = (type) =>`//input[@name="altDisplayOptionsBean.displayOptionsDistanceMeasure"][${type}]`

exports.travelPreferenceSaveBtn = () => `//div[@id="saveSection"]/a/span`