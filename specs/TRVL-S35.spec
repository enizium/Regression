# TRVL-S35: Travel Fusion Air Booking flows

## TCID-1 : TRVL-S35 Travel Fusion Air Booking flow

tags: Regression, TravelFusion, Set4, XRAY-1086

* Goto Travel Site Url
* Login with "user38"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |DUB      |MAD        |37               |

* Validate page title in "Select Departure Flight" page
* Filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |FR      |In Policy|Non Stop|

* Validate Travel Fusion flight results will not display any Fare Tiers/Branded fares
* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate details in "trip review" page
* Validate WEB FARE Badge in respective Page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select "count" of bag to check on purchase page
* Enter CVV code "VisaCard" for "air" billing
* Click "Continue Web Fare" button
* Acknowledge the Terms & Conditions for travel fusion
* Handle purchase confirmation popup "messageContent"
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate WEB FARE Badge in respective Page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate Change/Cancel Link are not displayed on "Trip Detail" Page
