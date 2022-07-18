# TRVL-S11 As a admin, I would like to book a flight on American Airlines an In policy, hotel and car rental for guest traveller

## TC-1: As a admin Book, Change and Cancel in-policy flights in United Airlines, in-policy hotel, car rental for guest traveler [make sure guest booking is enabled]

tags: Regression, AHC, Set1A, XRAY-1847

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|


* Select Hotel based on below table data

   |HotelType   |RoomType   |
   |------------|-----------|
   |PRIVATE RATE|CANCELLABLE|
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |120              |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType   |RoomType   |
   |------------|-----------|
   |PRIVATE RATE|CANCELLABLE|
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
* Validate details in "trip cancellation" page

## TC-2 As a admin Book, Change and Cancel  OOP-policy-policy flights in American Airlines,in-policy hotel,car rental for guest traveler[make sure guest booking is enabled]

tags: Regression, AHC, Set1A, XRAY-1848

* Goto Travel Site Url
* Login with "user3"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100               |

* Search filtered flight based on below table data

   |Airlines|Policy       |Stops   |
   |--------|-------------|--------|
   |UA      |Out of Policy|Non Stop|

* Click "air OOP continue" button
* Select Hotel based on below table data

   |HotelType   |RoomType   |
   |------------|-----------|
   |PRIVATE RATE|CANCELLABLE|
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |120              |

* Search filtered flight based on below table data

   |Airlines|Policy       |Stops   |
   |--------|-------------|--------|
   |UA      |Out of Policy|Non Stop|
* Click "air OOP continue" button
* Select Hotel based on below table data

   |HotelType   |RoomType   |
   |------------|-----------|
   |PRIVATE RATE|CANCELLABLE|
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter traveler "User" contact details
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page


## TC3: verify/Edit more than one traveler when guest booking is enabled
tags: Regression, AHC, Set1A, XRAY-1846

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO       |LAX        |40               |

* Search filtered flight based on below table data

   |Airlines|Policy       |Stops   |
   |--------|-------------|--------|
   |UA      |Out of Policy|Non Stop|

* Click "air OOP continue" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|
   
* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip Review" page
* Click "trip review continue" button

* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API
