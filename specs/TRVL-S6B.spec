# TRVL-S6B: As a traveller, I would like to book a Amtrak train, along with Preferred hotel and Compact car and use my card for payment only for this time.

## TC1: Book, Change and Cancel in-policy Train, preferred hotel and compact car using OTFOP

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |85               |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "OTFOP"
* Select payment card for "hotel" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |112              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC2: Book, Change and Cancel OOP Train, preferred hotel and compact car using OTFOP

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |NYP      |BOS        |90               |First    |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "OTFOP"
* Select payment card for "hotel" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |112              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC3: Book, Change and Cancel in-policy Train, preferred hotel and compact car using Profile card

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |108              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |112              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user3" Booking using API

## TC4: Book, Change and Cancel OOP Train, preferred hotel and compact car using Profile card

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |NYP      |BOS        |107              |First    |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |112              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user3" Booking using API

## TC5 : Book and Cancel In policy Train, preferred hotel and SUV car-rental using site payment card

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |108              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "SUV"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |112              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "SUV"
* Click "Intermediate" button
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user3" Booking using API

## TC6 : Book and Cancel OOP Train, preferred hotel and SUV car-rental using site payment card

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |NYP      |BOS        |107              |First    |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "SUV"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |112              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType   |RoomType|
   |------------|--------|
   |PRIVATE RATE|NA      |

* Select car type as "SUV"
* Click "Intermediate" button
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user3" Booking using API
