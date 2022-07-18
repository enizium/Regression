# Auto SSO test harness tests

##TC1:  login with sso and provisioning enabled true, with provided Firstand Last NAme

tags: Regression, ssotest

* Goto SSO testharness Site Url
* Fill all the required data in autosso email scenario for existing "ssoConfigurationForUserLogin" user
* validate trip planner page on user creation for sso


##TC2:  login with existing sso user and provisioning enabled true, without provided Firstand Last Name

tags: Regression, ssotest

* Goto SSO testharness Site Url
* Fill all the required fields in SSO test harness for new "ssoConfigurationForUserLogin" user without provide firstname and lastname
* validate trip planner page on user creation for sso

##TC3: login with sso and provisioning enabled true, without provided Firstand Last Name

tags: Regression, ssotest

* Goto SSO testharness Site Url
* Fill all the required fields in SSO test harness without provide firstname and lastname for new "ssoConfigurationForUserLogin" user
* Verify the error on user creation
