# TRVL-S40A : Dashboard Regression

## TC1 - Add /Edit Partner Level Configurations - Global Dashboard

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "configurator"
* Click "Partners" tab
* Create new partner
* Click Save Button
* Search for partner
* Verify that partner is created
* Goto Global Setting and click "Partner Name & General Settings"
* Edit the partner details
* Click back to overview page
* Search for partner
* Goto Global Setting and click "Partner Name & General Settings"
* Verify the partner is edited

## TC2 - Add a new site in Dashboard

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Click Partners tab in change tools
* Search for partner in changeTools
* Click on Partner ID link
* Click on "Add New Site" link
* Fill the required Field to create a new site
* Click Save Button
* Click back to overview page
* Search Site
* Validate site creation

## TC3 - Add a Administrator (support tab)

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Click on "New Dashboard Admin" link
* Fill the required fields for new dashboard admin
* Click Save Button to save new admin
* Click on "Manage Dashboard Administrators" link
* Search for newly created dashboard admin


##TC4 - Add a User in the enterprise site

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikoautotest"
* Click on the "User" tab
* Select "Add A New User" in user overview page
* Fill required data to create User
* Click on "Save user" link
* Validate user is in partner dashboard page



##TC5 -  User Registration Reminder in dashboard

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikoautotest"
* Click on the "User" tab
* Select "Single User Registration Reminder" in user overview page
* Search user via userName
* CLick Add Button
* CLick continue button
* Click Send reminder Now Button


##TC6 -  Impersonate multiple user in dashboard

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikoautotest"
* Click on the "User" tab
* Select "Impersonate a User" in user overview page
* Search user via userName
* CLick on searched user
* Verify if the site is opened in new tab


##TC7: Add a user group

tags : console

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "mango"
* Click on the "Groups" tab
* Click on "Add a New Group" link
* Fill required data to create Group
* Click on "Save Group" link
* Validate group is in partner dashboard page
* Commit changes made in site

##TC8 - Activate and Deactivate the user process in dashboard

tags: DashboardRegression

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikoautotest"
* Click on the "User" tab
* Select "Single User Deactivation" in user overview page
* Search user via userName
* CLick Add Button
* CLick continue button
* Click Deactivate Button

##TC9 -  Search for a site based on the Contract ID using configurator login

tags: DashboardRegression, XRAY-961

* Goto dashboard Url
* Login to console with "configurator"
* Click on "Self Service Sites" radio button
* Search site "XMLRTE" on global dashboard page 
* Validate lists of site are displayed 

##TC10 -  Search for a site based on the Contract ID using techsupport login 

tags: DashboardRegression, XRAY-963

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "Self Service Sites" radio button
* Search site "XMLRTE" on global dashboard page 
* Validate lists of site are displayed 

##TC11 -  Search for a site based on the Contract ID using techsupport login 

tags: DashboardRegression, XRAY-962

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Click on "Self Service Sites" in change tool
* Search site name "XMLRTE" in change tool
* Validate lists of site are displayed in change tool

##TC12 - Search for a site based on the Contract ID using techsupport login - Partner Dashboard

tags: DashboardRegression, XRAY-964

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Click Partners tab in change tools
* Search partner name "EHIDEEM"
* Click on Self Service Sites in Partner dashboard
* Search site name "XMLRTE" in Partner dashboard 
* Validate lists of site are displayed in Partner dashboard