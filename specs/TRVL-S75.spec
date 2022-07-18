# TRVL-S75: Sabre- As a traveler, I would like to purchase an In policy flight, and an In policy flight with a hotel and car purhcase, and purchase train, hotel and car.

## TC1: Two way Air-only Purchase, Pre-Change and Cancel.

tags: Regression, AirOnly, Set1B, XRAY-1258

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Airlines|Policy   | Stops    | 
   |--------|---------|----------|
   |UA      |In Policy| Non Stop |

* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |120              |

* Search filtered flight based on below table data
  
   |Airlines|Policy   | Stops    | 
   |--------|---------|----------|
   |UA      |In Policy| Non Stop |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2: Two way Air-only Purchase, Pre-Change add hotel and car and Cancel.

tags: Regression, AirOnly, Set1B, XRAY-1257

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |BOS      |LAX        |310              |

* Search filtered flight based on below table data

   |Airlines|Policy   | Stops    | 
   |--------|---------|----------|
   |UA      |In Policy| Non Stop |

* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |BOS      |LAX        |315               |

* Search filtered flight based on below table data

   |Airlines|Policy   | Stops    | 
   |--------|---------|----------|
   |UA      |In Policy| Non Stop |
   
* Click on add "Hotel"
* Click "Search" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Click on add "Car"
* Click "Search" button
* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC3: Book, Pre-Change and Cancel in-policy Train, preferred hotel and compact car 

tags: Regression, THC, Set1B, XRAY-1240

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |230              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |


* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |235              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |


* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC4: AHC, Pre-Change and Cancel  in-policy

tags: Regression, AHC, Set1B, XRAY-1255

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |PHX        |100               |

* Search filtered flight based on below table data

   |Airlines|Policy   | Stops    | 
   |--------|---------|----------|
   |UA      |In Policy| Non Stop |

* Select Hotel based on below table data
 
   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |SFO        |105               |

* Search filtered flight based on below table data

   |Airlines|Policy   | Stops    | 
   |--------|---------|----------|
   |UA      |In Policy| Non Stop |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API