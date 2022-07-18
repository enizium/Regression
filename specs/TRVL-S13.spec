# TRVL-S13 : As a C Suite executive, I would like to book in policy window seat flight, Hotel booked in another Amex reservation and Hertz car rental for 3 days, my project being Billable

## TC-1: Book, Change(Pre/Post) and Cancel in-policy flight and car rental using site payment card

tags: Regression, AC, Set2, XRAY-1021

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |20               |

* Search filtered flight based on below table data

   |Airlines|Policy   |stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Enter Project Code Additional Info
* Reason for not booking hotel
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |21               |

* Search filtered flight based on below table data

   |Airlines|Policy   |stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC2: Flight + Car rental Book Again

tags: Regression, AC, Set2, XRAY-1026

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |20               |

* Search filtered flight based on below table data

   |Airlines|Policy       |stops   |
   |--------|-------------|--------|
   |UA      |Out of Policy|Non Stop|

* Click "air OOP continue" button
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |55               |
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TC3: Flight + Car rental Book Again -Edit

tags: Regression, AC, Set2, XRAY-1027

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |20               |

* Search filtered flight based on below table data

   |Airlines|Policy   |stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |55               |
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TC4: Flight + Car rental Book Again - Hold

tags: Regression, AC, Set2,XRAY-1028

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |20               |
* Search filtered flight based on below table data

   |Airlines|Policy   |stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |BookingAfterXDays|
   |-----------------|
   |55               |
* Click "Book Again" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TC5: Flight + Car rental Hold - Purchase

tags: Regression, AC, Set2, XRAY-1023

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |20               |
* Search filtered flight based on below table data

   |Airlines|Policy   |stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user16" Booking using API

## TC6: Flight + Car rental Hold - Book Again

tags: Regression, AC, Set2, XRAY-1024

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |20               |

* Search filtered flight based on below table data

   |Airlines|Policy   |stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |BookingAfterXDays|
   |-----------------|
   |55               |
* Click "Book Again" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TC7: Flight + Car rental Hold - Cancel

tags: Regression, AC, Set2, XRAY-1025

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |20               |

* Search filtered flight based on below table data

   |Airlines|Policy   |stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user16" Booking using API

