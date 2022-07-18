# As a user, I would like to sign in to Cvent, schedule a meeting and finish my travel booking based on my meeting schedule

## TC1: login with cevent sso and provisioning enabled true

tags: ReleaseRegression, Cventtest

* Goto SSO testharness Site Url
* Fill the required data in cevent meeting scenario for "serverConfiguration"
* Choose Language
* Verify the activation page on the user creation
* validate trip planner page on user creation for cvent

##TC2: As a user, I would like to sign in to Cvent, schedule a meeting and finish my travel booking based on my meeting schedule

tags: Regression, Cventtest

* Goto SSO testharness Site Url
* Fill all the required data in cevent meeting scenario for "serverConfiguration"
* Choose Language
* Validate Login page & enter password for Existing "cventExistingUser1" user
* validate trip planner page on user creation
* Navigate to tripPlanner Page and select "AirOnly" 
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |110               |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter traveler "User" contact details
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC3: Cvent Meeting - New password updated during activation process not honored for users created from console

tags: ReleaseRegression, Cventtest, XRAY-804,805

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikocvent"
* Click on the "User" tab
* Select "Add A New User" in user overview page
* Fill required data to create User for gaikocvent
* Click on "Save user" link
* Validate user is in partner dashboard page
* Delete the cookies
* Goto SSO testharness Site Url
* Fill the required data in cevent meeting mode for "serverConfiguration"
* Choose Language
* Login with newly created password
* Verify the activation page 
* validate trip planner page on user creation for cvent
* Logout from cvent Meeting Mode
* Login with info provided during activation process

## TC4: Cvent Meeting - Meeting User update password from "Change Password" page in profile for New User

tags: ReleaseRegression, Cventtest

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikocvent"
* Click on the "User" tab
* Select "Add A New User" in user overview page
* Fill required data to create User for gaikocvent
* Click on "Save user" link
* Validate user is in partner dashboard page
* Delete the cookies
* Goto SSO testharness Site Url
* Fill the required data in cevent meeting mode for "serverConfiguration"
* Choose Language
* Login with newly created password
* Verify the activation page and dont change password
* validate trip planner page and change password on user creation for cvent
* Logout from cvent Meeting Mode
* Login with info provided during activation process


