# TRVL-S73:  Add service from Trip details Page

## TC-1 Add Hotel to flight booking post purchase

tags: Regression, AirOnly, Set1B, XRAY-1248

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |SFO        |100              |

* Search filtered flight based on below table data

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
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Add "Hotel" from Add Service using URL
* Click "Search" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
   
## TC-2 Add Car Rental to flight booking post purchase

tags: Regression, AirOnly, Set1B, XRAY-1250

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |SFO        |100              |

* Search filtered flight based on below table data

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
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Add "Car Rental" from Add Service using URL
* Click "Search" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page