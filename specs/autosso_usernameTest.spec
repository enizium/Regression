# Auto SSO test harness tests

## TC:1 login with sso and provisioning enabled true, with provided Firstand Last NAme

tags: Regression, ssotest

* Goto SSO testharness Site Url
* Fill all the required data in autosso username scenario for existing "ssoConfigurationForUsername" user
* validate trip planner page on user creation for sso


## TC:2 login with existing sso user and provisioning enabled true, without provided Firstand Last Name

tags: Regression, ssotest

* Goto SSO testharness Site Url
* Fill all the required fields in SSO test harness for new "ssoConfigurationForUsername" user without firstname and lastname
* validate trip planner page on user creation for sso

## TC3: login with sso and provisioning enabled true, without provided Firstand Last Name

tags: Regression, ssotest

* Goto SSO testharness Site Url
* Fill all the required fields in SSO test harness without first name and last name for new "ssoConfigurationForUsername" user
* Verify the error on user creation
