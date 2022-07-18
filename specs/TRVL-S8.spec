# TRVL-S8: As a traveller, I would like to book GBT Direct Connect hotel for 15 days and use site payment card.

## TC1: Book and Cancel in-policy GBT Direct connect hotel for 15 days using OTFOP.

tags: Regression , HotelOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1006

* Goto Travel Site Url
* Login with "user5"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LHR             |130              |145               |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|GBT DIRECT|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2: Book and Cancel OOP GBT Direct connect hotel for 15 days using OTFOP.

tags: Regression, HotelOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1001

* Goto Travel Site Url
* Login with "user4"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |35                |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|GBT DIRECT|

* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC3: Book and Cancel in-policy GBT Direct connect hotel for 15 days using Profile card.

tags: Regression, HotelOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1000

* Goto Travel Site Url
* Login with "user5"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |34                |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|GBT DIRECT|
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user5" Booking using API

## TC4: Book and Cancel OOP GBT Direct connect hotel for 15 days using Profile card.

tags: Regression, HotelOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1004

* Goto Travel Site Url
* Login with "user4"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |34                |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|GBT DIRECT|
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user4" Booking using API

## TC5: Book and Cancel in-policy GBT Direct connect hotel for 15 days using Site payment card.

tags: Regression, HotelOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1005

* Goto Travel Site Url
* Login with "user5"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |34                |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|GBT DIRECT|
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user5" Booking using API

## TC6: Book and Cancel OOP GBT Direct connect hotel for 15 days using Site payment card.

tags: Regression, HotelOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1002

* Goto Travel Site Url
* Login with "user4"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |34                |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|GBT DIRECT|
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user4" Booking using API

## TC7: Verify Book again flows for the above reservations.

tags: Regression, HotelOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1003

* Goto Travel Site Url
* Login with "user5"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |34                |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|GBT DIRECT|
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |CheckInAfterXDays|CheckOutAfterXDays|
   |-----------------|------------------|
   |20               |34                |

* Validate details in "trip review" page
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
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
