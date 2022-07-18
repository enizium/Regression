# TRVL_S106 Search button getting disabled in change Pop box in Select Departure Flight page

## TC1 : Validate Search button is disable

tags: Regression, AirOnly, Set2, XRAY-1315

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Validate page title in "Select Departure Flight" page
* Validate search button is disable by validating "Searching" message on change pop up
* Filtered flight based on below table data

   |Stops    |Airline|Policy   |
   |---------|-------|---------|
   |Any Stops|UA     |In Policy|

* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Validate search button is disable by validating "Searching" message on change pop up
* Validate page title in "Select Departure Flight" page
* Filtered flight based on below table data

   |Stops    |Airline|Policy   |
   |---------|-------|---------|
   |Any Stops|UA     |In Policy|

* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
