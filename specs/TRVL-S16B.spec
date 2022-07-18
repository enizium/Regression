# TRVL-S16B: As a C Suite executive, I would like to authorize my assistant to book a trip on my name (Apollo)

## TC-1:  Hotel only trip using profile card

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

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

   |HotelType|RoomType|
   |---------|--------|
   |GDS      |NA      |

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

## TC-2: Air, Hotel and Car Rental only trip using profile card

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

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

   |HotelType|RoomType|
   |---------|--------|
   |GDS      |NA      |

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

## TC-3: Train, Hotel and Car Rental only trip using profile card

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

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

   |HotelType|RoomType|
   |---------|--------|
   |GDS      |NA      |

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

## TC-4:  Hotel only trip using OTFOP

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

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

   |HotelType|RoomType|
   |---------|--------|
   |GDS      |NA      |

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

## TC-5: Air, Hotel and Car Rental only trip using OTFOP

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

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

   |HotelType|RoomType|
   |---------|--------|
   |GDS      |NA      |

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

## TC-6: Train, Hotel and Car Rental only trip using OTFOP

tags: LiveBuildApolloSet1, LiveBuildWorldspanSet1

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

   |HotelType|RoomType|
   |---------|--------|
   |GDS      |NA      |

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
