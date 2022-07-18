# TRVL-S16: As a C Suite executive, I would like to authorize my assistant to book a trip on my name

## TC-1: Flights only trip using profile card

tags: Regression, AirOnly, Set3, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-2277

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |60               |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-2:  Hotel only trip using profile card

tags: Regression, HotelOnly, Set3, LiveBuildSabreSet1, XRAY-2276

* Goto Travel Site Url
* Login with "user1"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |21                |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-3:  Car Rental only trip using profile card

tags: Regression, CarRentalOnly, Set3, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-2271

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |100              |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "car" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-4: Train only trip using profile card

tags: Regression, TrainOnly, Set3, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-2270

* Goto Travel Site Url
* Login with "user1"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "rail" as "Profile Card"
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-5: Air, Hotel and Car Rental only trip using profile card

tags: Regression, AHC, Set3, LiveBuildSabreSet1, XRAY-2273

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AHC" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |111              |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-6: Train, Hotel and Car Rental only trip using profile card

tags: Regression, THC, Set3, LiveBuildSabreSet1, XRAY-2272

* Goto Travel Site Url
* Login with "user1"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "THC" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter additional email of "User" user for train
* Enter Trip Name
* Select payment card for "rail" as "Profile Card"
* Enter CVV code "VisaCard" for "rail" billing
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-7: Flights only trip using OTFOP

tags: Regression, AirOnly, Set3, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-2280

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |90               |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "air" as "OTFOP"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-8:  Hotel only trip using OTFOP

tags: Regression, HotelOnly, Set3, LiveBuildSabreSet1, XRAY-2279

* Goto Travel Site Url
* Login with "user1"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |21                |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "hotel" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-9:  Car Rental only trip using OTFOP

tags: Regression, CarRentalOnly, Set3, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-2281

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |100              |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "car" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-10: Train only trip using OTFOP

tags: Regression, TrainOnly, Set3, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-2275

* Goto Travel Site Url
* Login with "user1"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "rail" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-11: Air, Hotel and Car Rental only trip using OTFOP

tags: Regression, AHC, Set3, LiveBuildSabreSet1, XRAY-2274

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AHC" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |99               |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Select payment card for "air" as "OTFOP"
* Click "Purchase" button
* Select payment card for "hotel" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Validate guest traveler details on "trip cancellation" page

## TC-12: Train, Hotel and Car Rental only trip using OTFOP

tags: Regression, THC, Set3, LiveBuildSabreSet1, XRAY-2278

* Goto Travel Site Url
* Login with "user1"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "THC" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click on Change Traveler link and enter "User" details
* Enter Trip Name
* Enter additional email of "User" user for train
* Select payment card for "rail" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate guest traveler details on "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* Validate guest traveler details on "trip cancellation" page
