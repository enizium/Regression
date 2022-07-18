# TRVL-S194 Hotel Only and AHC segment for more than 30 Days

## TC1: Book,Change and Cancel Hotel for more than 30 days.

tags: Regression, HotelOnly, HSS, XRAY-2290

* Goto Travel Site Url
* Login with "tripSourceUser"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |5                |38                |

* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |6                |40                |

* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2: Verify Book again flows for the above reservation for more than 30 days

tags: Regression, HotelOnly, HSS, XRAY-2291

* Goto Travel Site Url
* Login with "tripSourceUser"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |5                |38                |
* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |CheckInAfterXDays|CheckOutAfterXDays|
   |-----------------|------------------|
   |5                |40                |

* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

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

## TC3 : Verify book, change and cancel scenario for AHC segment for more than 30 days

tags : Regression, AHC, HSS, XRAY-2292

* Goto Travel Site Url
* Login with "tripSourceUser"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on given table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |40               |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |

* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on given table data

   |TripType|BookingAfterXDays|ReturnAfterXDays|
   |--------|-----------------|----------------|
   |RT      |45               |35              |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |
* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Enter traveler "User" gender
* Select payment card for "air" as "Site Payment Card"
* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC4 : Verify Book Again Scenario for AHC Segment for more than 30 days, Book and Cancel

tags : Regression, AHC, HSS, XRAY-2293

* Goto Travel Site Url
* Login with "tripSourceUser"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on given table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |45               |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |
* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Click "trip review continue" button
* Validate page title in "Book Again" page
* Enter Trip Name
* Click "book again" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Click "Book Again" button
* Fill book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |55               |
* Validate details in "post trip review" page
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
* Go to reservations and select the original trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page

