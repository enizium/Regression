# KTN

## TC-1: Adding KTN Numbers from Dashboard with expiring alerts and verify modificaiton of KTN number and Exiry dates from Dashboards

tags: DashboardRegression, XRAY-2044

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikotravel"
* Click on the "User" tab
* Select "Edit a User" in user overview page
* Enter "testtwo_sabres2" as UserName to edit
* Click on "Edit User Search" button
* Click on the seached username to edit
* Click on "Travel" link
* "Clear" KTN details in "dashboard"
* Click on "Travel" link
* "Enter" KTN details in "dashboard"
* Click on "Travel" link
* "Validate" KTN details in "dashboard"
* "Clear" KTN details in "dashboard"

## TC-2: Adding KTN numbers thru User App for Enterprise site using Delegate flow with expired alerts

tags: ReleaseRegression, XRAY-2065

* Goto Travel Site Url
* Login with "user67"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to travel preferences page
* "Clear" KTN details in "travel preference"
* Navigate to travel preferences page
* "Enter" KTN details in "travel preference"
* Stop Assisting delegate 
* Validate notification "delegate" user 
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to travel preferences page
* "Validate" KTN details in "travel preference"
* "Clear" KTN details in "travel preference"

## TC-3: Adding KTN numbers thru User App for Enterprise site

tags: ReleaseRegression, XRAY-2234

* Goto Travel Site Url
* Login with "user67"
* Navigate to travel preferences page
* "Clear" KTN details in "travel preference"
* Navigate to travel preferences page
* "Enter" KTN details in "travel preference"
* Validate notification "normal" user 
* Navigate to travel preferences page
* "Validate" KTN details in "travel preference"
* "Clear" KTN details in "travel preference"

## TC-4: Adding KTN numbers thru User App for SMB site using regular user with expiring alerts and verify modificaiton of KTN number and Exiry dates from alerts

tags: ReleaseRegression, XRAY-2068

* Goto Travel Site Url
* Login with "user3"
* Navigate to travel preferences page
* "Clear" KTN details in "travel preference"
* Navigate to travel preferences page
* "Enter" KTN details in "travel preference"
* Validate notification "normal" user 
* Navigate to travel preferences page
* "Validate" KTN details in "travel preference"
* "Clear" KTN details in "travel preference"