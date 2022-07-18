# TRVL-S52: As a traveler, I would like to use an Amex BTA site card for travelfusion bookings in ssrmp site for air-only, AHC and also use a restricted Amex BTA site card for air-only booking

## TC1: Two way Air-only Purchase using AMEX BTA site card

tags: Regression, AirOnly, TravelFusion, Set4, XRAY-1124

* Goto Travel Site Url
* Login with "user38"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |DUB      |MAD        |194              |

* Validate page title in "Select Departure Flight" page
* Filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |FR      |In Policy|

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
* Select payment card for "air" as "Site Payment Card"
* Click "Continue Web Fare" button
* Acknowledge the Terms & Conditions for travel fusion
* Handle purchase confirmation popup "messageContent"
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate WEB FARE Badge in respective Page
* Go to reservations and select the recently added trip
Validate Change/Cancel Link are not displayed on "Reservation" Page
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate Change/Cancel Link are not displayed on "Trip Detail" Page

## TC2: AHC, with AMEX BTA site card

tags: Regression, AHC, TravelFusion, Set4, XRAY-1126

* Goto Travel Site Url
* Login with "user38"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |DUB      |MAD        |148              |

* Validate page title in "Select Departure Flight" page
* Filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |FR      |In Policy|

* Validate Travel Fusion flight results will not display any Fare Tiers/Branded fares
* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Select Hotel based on below table data
 
   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |NA         |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Validate WEB FARE Badge in respective Page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select "count" of bag to check on purchase page
* Select payment card for "air" as "Site Payment Card"
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

## TC3: Two way Air-only Purchase using AMEX BTA restricted site card

tags: Regression, AirOnly, TravelFusion, Set4, XRAY-1123

* Goto Travel Site Url
* Login with "user40"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |DUB      |MAD        |142              |

* Validate page title in "Select Departure Flight" page
* Filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |FR      |In Policy|

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