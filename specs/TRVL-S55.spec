# TRVL-S55 Virtual Pay Sanity Testing - Apollo

## TCID 1:Hotel Booking(cancellable) with Vpay as payment method

tags: Regression, Set6,  LiveBuildApolloSet1, XRAY-1925, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |154               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 2 :Change the Hotel Booking(cancellable) with Vpay as payment method

tags: Regression, HotelOnly, Set6,  LiveBuildApolloSet1, XRAY-1924, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |154               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "trip review" page
* Click on "Change Trip"
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |154               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 3: MultiHotel Booking with Vpay as Payment method

tags: Regression, HotelOnly, Set6,  LiveBuildApolloSet1, XRAY-1931, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Multiple Hotel based on below table data

   |HotelSegment|HotelSearchValue0|CheckInAfterXDays0|CheckOutAfterXDays0|HotelSearchValue1|CheckInAfterXDays1|CheckOutAfterXDays1|
   |------------|-----------------|------------------|-------------------|-----------------|------------------|-------------------|
   |2           |SFO              |100               |104                |SFO              |110               |114                |

* Select Multi Hotel and Room based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate Multi Hotel details in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate Multi Hotel details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate Multi Hotel details in "trip cancellation" page

## TCID-4: AHC Booking with vpay as payment method for hotel

tags: Regression, AHC, Set6,  LiveBuildApolloSet1, XRAY-1928, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |150              |


* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

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
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID-5: Change AHC Booking with vpay as payment method for hotel

tags: Regression, AHC, Set6,  LiveBuildApolloSet1, XRAY-1929, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |152              |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|


* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |150              |


* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

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
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |152              |


* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID-6: THC Booking with vpay as payment method for hotel

tags: Regression, THC, Set6,  LiveBuildApolloSet1, XRAY-1926, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID-7: Change THC Booking with vpay as payment method for hotel

tags: Regression, THC, Set6,  LiveBuildApolloSet1, XRAY-1927, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |90               |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID-8: AHC Hold trip

tags: Regression, AHC, Set6,  LiveBuildApolloSet1, XRAY-1930, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |140              |


* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Filter Hotel based on below table data

   |HotelName                         |
   |----------------------------------|
   |La Quinta Resort & Club  La Quinta|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID-9: THC Hold trip

tags: Regression, THC, Set6,  LiveBuildApolloSet1, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Filter Hotel based on below table data

   |HotelName           |
   |--------------------|
   |Hyatt Regency Boston|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID-10: GDS to Non GDS Change verification for Change flows

tags: Regression, HotelOnly, Set6,  LiveBuildApolloSet1, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |154               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |154               |

* Filter Hotel based on below table data

   |Hotel Categories|
   |----------------|
   |Booking.com     |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |PENALTY   |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID-11: Add Hotel to Flight

tags: Regression, AirOnly, Set6,  LiveBuildApolloSet1, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |SFO        |100              |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

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
   |GDS      |NA         |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID 12: Add Hotel to Train

tags: Regression, TrainOnly, Set6,  LiveBuildApolloSet1, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Add "Hotel" from Add Service using URL
* Click "Search" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID 13: Add hotel to car rental

tags: Regression, CarRentalOnly, Set6,  LiveBuildApolloSet1, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |100              |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "car" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Add "Hotel" from Add Service using URL
* Click "Search" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID 14: Add flight to hotel

tags: Regression, HotelOnly, Set6,  LiveBuildApolloSet1, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |154               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Add "Air" from Add Service using URL
* Search flight based on below table data

   |TripType|Departure|
   |--------|---------|
   |OW      |LAX      |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API

## TCID 15: Add Car Rental to hotel

tags: Regression, HotelOnly, Set6,  LiveBuildApolloSet1, vpayapollo

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |154               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Virtual Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Add "Car Rental" from Add Service using URL
* Click "Search" button
* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user44" Booking using API
