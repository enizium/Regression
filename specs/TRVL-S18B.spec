# TRVL-S18B: As a traveller, I would like to hold my booking a flight, an in policy hotel and compact car rental using site payment card. (Apollo)

## TC-1: Flight + Hotel  + Car rental Book Again - Hold

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |45               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Book Again" the trip
* Enter book again details based on below table data

   |BookingAfterXDays|
   |-----------------|
   |55               |
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Go to reservations and select the original trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page

## TC-2: Flight  + Hotel + Car rental Hold - Purchase

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |45               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Click "Purchase" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC-3: Flight + Hotel +Car rental  Hold - Book Again

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |45               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Click "Book Again In Hold Trip" button
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |55               |
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC-4: Flight +  Hotel +Car rental Hold - Cancel

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |45               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API
