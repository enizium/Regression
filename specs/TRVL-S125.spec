# TRVL-S125: As a user i would like to book a flight transaction and wait for Pre trip approval from my manager

## TC1: As a user i would like to book a flight transaction and Approve Pre trip approval using URL

tags: Regression, AirOnly, Set1B, XRAY-1909

* Goto Travel Site Url
* Login with "user56"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |PHX      |LAX        |90               |

* Search filtered flight based on below table data

   |Stops    |Airlines|Policy   |
   |---------|--------|---------|
   |Non Stops|UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Get processId from trip confirmation page
* Get Trip Information from trip confirmation page
* Validate details in "trip confirmation" page
* Goto Pre Trip Approval Page
* "Approve" Pre-trip Approval request
* Validate Page title, PTA message and fullname
* Close current active tab
* Delete the cookies
* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Go to view PNR XML page
* Enter ProcessId
* Read "New" PNR XML file
* Validate pre trip approval in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user56"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2: As a user i would like to book a flight transaction and Decline Pre trip approval using URL

tags: Regression, AirOnly, Set1B, XRAY-1910

* Goto Travel Site Url
* Login with "user56"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |PHX      |LAX        |90               |

* Search filtered flight based on below table data

   |Stops    |Airlines|Policy   |
   |---------|--------|---------|
   |Non Stops|UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Get processId from trip confirmation page
* Get Trip Information from trip confirmation page
* Validate details in "trip confirmation" page
* Goto Pre Trip Approval Page
* "Decline" Pre-trip Approval request
* Validate Page title, PTA message and fullname
* Close current active tab
* Delete the cookies
* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Go to view PNR XML page
* Enter ProcessId
* Read "New" PNR XML file
* Validate pre trip approval in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user56"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
