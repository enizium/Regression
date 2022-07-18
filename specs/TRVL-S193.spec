# TRVL-S193:Add New Gender Marker, profile Title to my preferences are accurately documented for passport and TSA requirements

## TC-1: Console-Verify Mx. option Saved

tags: DashboardRegression, XRAY-1672

* Goto dashboard Url
* Login to console with "techsupport"
* Click on "change tools" link
* Search site name "gaikotravel"
* Click on the "User" tab
* Select "Edit a User" in user overview page
* Enter "tautoseven_aironly" as UserName to edit
* Click on "Edit User Search" button
* Click on the seached username to edit
* Click on "Personal and Employee info" link
* Select user "Mx." as "title"
* Select user "Non-binary/Unspecified (X)" as "gender"
* Click on "Save the edited user" button
* Validate user "title" in "console"
* Click on "Personal and Employee info" link
* Select user "Mr." as "title"
* Validate user "gender" in "console"
* Select user "Male" as "gender"
* Click on "Save the edited user" button
* Validate user "title" in "console"

## TC-2: Verify the default option selected and can be modified on Purchase page-Userapp

tags: XRAY-1673, Regression, Set1B

* Goto Travel Site Url
* Login with "user7"
* Navigate to Account page
* Select user title as "Mx."
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non stop|UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate user "title" in "purchase page"
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to Account page
* Select user title as "Mr."

## TC-3: Add 'Mx.' as an option to the Purchase Page flow and validate in PNR XML - Title section

tags: Regression, XRAY-2169, Set1B

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |130              |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Change Traveler details as below table

   |Title|Gender                      |
   |-----|----------------------------|
   |Mx.  |Non-binary/Unspecified ( X )|

* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Delete the cookies
* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Go to view PNR XML page
* Enter ProcessId
* Read "New" PNR XML file
* Valiate "Title and Gender" in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user1"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

