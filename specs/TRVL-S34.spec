# TRVL-S34 : Schedule Search Air Booking
## TC-1:  Air Search

tags: Regression, AirOnly, Set1B, XRAY-1087

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |99               |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |100              |
* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|
* Validate details in "post trip review" page
* Click "trip review continue" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC-2:  AHC Search

tags: Regression, AHC, Set1B, XRAY-1085

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AHC" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |99               |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines   |Stops   |
   |-----------|--------|
   |UA         |Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   | GDS     |CANCELLABLE|
   
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
