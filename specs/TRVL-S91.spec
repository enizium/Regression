# TRVL-S91: As a traveller, I would like to explore the Emerald Club Enrollment modal

## TC1 - Emerald Club Enrollment modal should display in the trip planner/profile page when there is no membership number in national and enterprise in the user profile

tags: Regression, UserScenarios, EHISpec, Set9, XRAY-1283

* Goto Travel Site Url
* Login with "user2"
* Navigate to "Account" Page
* Check Emerald Club Enrollment if not clear membership
* Validate Emerald Club Enrollment modal for "NoCard" and the pop up message
* Click on "Skip" button in the pop up 
* Navigate to "Travel" Page
* Reload the current page
* Validate Emerald Club Enrollment modal for "NoCard" and the pop up message
* Add EC Number "123456789" to suggested profile and Save
* Navigate to "Account" Page
* Navigate to "Travel Preferences" Page
* Validate "National and Enterprise" membership 
* Remove Emerald Club membership for "Enterprise" profile
* Remove Emerald Club membership for "National" profile
* Click Save on "Car" membership in profile page


## TC2 - Emerald Club Enrollment modal should not display in the trip planner/profile page when there are membership numbers in enterprise and national in the user profile

tags: Regression, UserScenarios, EHISpec, Set9, XRAY-1281

* Goto Travel Site Url
* Login with "user4"
* Navigate to "Account" Page
* Check Emerald Club Enrollment if not clear membership
* Click on "Skip" button in the pop up 
* Navigate to "Travel Preferences" Page
* Set Emerald Club membership based on below table data

   |Rental Company|Number     |
   |--------------|-----------|
   |Enterprise    |123456789  |
   
* Set Emerald Club membership based on below table data

   |Rental Company         |Number     |
   |-----------------------|-----------|
   |National               |123456789  |    

* Click Save on "Car" membership in profile page
* Navigate to "Travel" Page
* Navigate to "Account" Page
* Navigate to "Travel Preferences" Page
* Remove Emerald Club membership for "Enterprise" profile
* Remove Emerald Club membership for "National" profile
* Click Save on "Car" membership in profile page


## TC3 - Emerald Club Enrollment modal should display in the trip planner/profile page when there is membership numbers in enterprise but not national in the user profile

tags: Regression, UserScenarios, EHISpec, Set9, XRAY-1280

* Goto Travel Site Url
* Login with "user5"
* Navigate to "Account" Page
* Check Emerald Club Enrollment if not clear membership
* Click on "Skip" button in the pop up 
* Navigate to "Travel Preferences" Page
* Clear Membership if available
* Set Emerald Club membership based on below table data

   |Rental Company|Number     |
   |--------------|-----------|
   |Enterprise    |123456789  |
   
* Click Save on "Car" membership in profile page
* Validate Emerald Club Enrollment modal for "Enterprise" and the pop up message
* Click on "Skip" button in the pop up 
* Navigate to "Travel" Page
* Reload the current page
* Validate Emerald Club Enrollment modal for "Enterprise" and the pop up message
* Click save EC Number on suggested profile
* Navigate to "Account" Page
* Navigate to "Travel Preferences" Page
* Validate "National and Enterprise" membership 
* Remove Emerald Club membership for "Enterprise" profile
* Remove Emerald Club membership for "National" profile
* Click Save on "Car" membership in profile page


## TC4 - Emerald Club Enrollment modal should display in the trip planner/profile page when there is membership numbers in national but not enterprise in the user profile

tags: Regression, UserScenarios, EHISpec, Set9, XRAY-1282

* Goto Travel Site Url
* Login with "user6"
* Navigate to "Account" Page
* Check Emerald Club Enrollment if not clear membership
* Click on "Skip" button in the pop up 
* Navigate to "Travel Preferences" Page
* Clear Membership if available
* Set Emerald Club membership based on below table data

   |Rental Company         |Number     |
   |-----------------------|-----------|
   |National               |123456789  |

* Click Save on "Car" membership in profile page
* Validate Emerald Club Enrollment modal for "National" and the pop up message
* Click on "Skip" button in the pop up 
* Navigate to "Travel" Page
* Reload the current page
* Validate Emerald Club Enrollment modal for "National" and the pop up message
* Click save EC Number on suggested profile
* Navigate to "Account" Page
* Navigate to "Travel Preferences" Page
* Validate "National and Enterprise" membership 
* Remove Emerald Club membership for "Enterprise" profile
* Remove Emerald Club membership for "National" profile
* Click Save on "Car" membership in profile page


