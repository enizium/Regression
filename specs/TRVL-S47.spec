# TRVL-S47: Baggage Fees

## TCID-1: Baggage Fee American Airlines / United Airlines GDS

tags: Regression, AirOnly, Set1B, XRAY-1106

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data and get Baggage info

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate Baggage Fee Information on "Trip Confirmation" Page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate Baggage Fee Information on "Trip Details" Page
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page


## TCID-2: Baggage Fee Southwest Airlines GDS

tags: Regression, Set1B, AirOnly, XRAY-1107

* Goto Travel Site Url
* Login with "user2"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |130              |

* Search filtered flight based on below table data and get Baggage info

   |Airlines|Policy   |
   |--------|---------|
   |WN      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate Baggage Fee Information on "Trip Confirmation" Page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate Baggage Fee Information on "Trip Details" Page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page