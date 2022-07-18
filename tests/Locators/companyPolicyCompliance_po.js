//CompanyPolicyCompliance
exports.CPCTitle = () => "(//div[contains(.,'Company Policy Compliance')])[5]"
exports.hotelTitleCPC = () => '//div[@tabindex="1"]/../../../div[contains(.,"hotel")]'
exports.hotelReasonOptions = ()=> '//div[@tabindex="1"]/../../../div[contains(.,"hotel")]/div/div/div[1]'
exports.hotelSelectReason = () => '//div[@tabindex="1"]/../../../div[contains(.,"hotel")]/div/div/div/div[1]'

exports.flightTitleCPC = () => '//div[@tabindex="1"]/../../../div[contains(.,"flight")]'
exports.flightReasonOptions = () => '//div[@tabindex="1"]/../../../div[contains(.,"flight")]/div/div/div[1]'
exports.flightSelectReason = () => '//div[@tabindex="1"]/../../../div[contains(.,"flight")]/div/div/div/div[1]'

exports.carRentalTitleCPC = () => '//div[@tabindex="1"]/../../../div[contains(.,"Car Rental")]'
exports.carRentalReasonOptions = () => '//div[@tabindex="1"]/../../../div[contains(.,"Car Rental")]/div/div/div[1]'
exports.carRentalSelectReason = () => '//div[@tabindex="1"]/../../../div[contains(.,"Car Rental")]/div/div/div/div[1]'

exports.trainTitleCPC = () => '//div[@tabindex="1"]/../../../div[contains(.,"train")]'
exports.trainReasonOptions = () => '//div[@tabindex="1"]/../../../div[contains(.,"train")]/div/div/div[1]'
exports.trainSelectReason = () =>'//div[@tabindex="1"]/../../../div[contains(.,"train")]/div/div/div/div[1]'

exports.textareaCPC = () => "//div[contains(.,'Purpose of trip')]/textarea"