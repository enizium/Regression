# TRVL-S1: As a traveler, I would like to book an In policy flight on Southwest, along with an in policy private rate hotel, A Suv and use site payment card for my air.

## TC1: Book, Change and Cancel  in-policy SWE, PRH and SUV using site payment card.

tags: Regression, AHC, Set1A, XRAY-943

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |40               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |WN      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |45               |

* Search filtered flight based on below table data

   |Policy   |
   |---------|
   |In Policy|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC2: Book, Change and Cancel OOP SWE, PRH and SUV using site payment card.

tags: Regression, AHC, Set1A, XRAY-947

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |90               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|
* Click "air OOP continue" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |98               |

* Search filtered flight based on below table data

   |Policy       |
   |-------------|
   |Out of Policy|

* Click "air OOP continue" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC3: Book, Change and Cancel in-policy SWE, PRH and SUV using OTFOP.

tags: Regression, AHC, Set1A, XRAY-948

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |80               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |WN      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "OTFOP"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |85               |

* Search filtered flight based on below table data

   |Policy   |
   |---------|
   |In Policy|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC4: Book, Change and Cancel OOP SWE, PRH and SUV using OTFOP

tags: Regression, AHC, Set1A, XRAY-945

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |90               |

* Search filtered flight based on below table data

   |Airlines|Policy       |Stops   |
   |--------|-------------|--------|
   |WN      |Out of Policy|Non Stop|

* Click "air OOP continue" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "OTFOP"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |95               |

* Search filtered flight based on below table data

   |Policy       |
   |-------------|
   |Out of Policy|

* Click "air OOP continue" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC5: Verify book again using site payment card

tags: Regression, AirOnly, Set1A, XRAY-946

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |50               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |WN      |In Policy|Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
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

## TC6: Verify book again using OTFOP

tags: Regression, AirOnly, Set1A, XRAY-944

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |50               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |WN      |In Policy|Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "OTFOP"
* Click "Purchase" button
* Select cardType as "MasterCard"
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
* Select payment card for "air" as "OTFOP"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API


