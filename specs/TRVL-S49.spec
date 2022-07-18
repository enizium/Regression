# TRVL-S49: KAN project - Hide Individual Services through Dash board setting

## TCID-1 Hide air service and verify it in Trip planner and  trip details page

tags: Regression, HotelOnly, Set1B, XRAY-1120

* Goto Travel Site Url
* Login with "user49"
* Validate "Air" segment is not displayed in "Trip Planner" page
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |100              |102               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Validate "Air" segment is not displayed in "Review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-2 Hide hotel service and verify it in Trip planner and trip review page

tags: Regression, AirOnly, Set1B, XRAY-1119

* Goto Travel Site Url
* Login with "user50"
* Validate "Hotel" segment is not displayed in "Trip Planner" page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "trip review" page
* Validate "Hotel" segment is not displayed in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Canellation" page
* Validate details in "trip cancellation" page

## TCID-3 Hide Car Rental service and verify it in Trip planner and trip review page

tags: Regression, AirOnly, Set1B, XRAY-1115

* Goto Travel Site Url
* Login with "user51"
* Validate "Car Rental" segment is not displayed in "Trip Planner" page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "trip review" page
* Validate "Car Rental" segment is not displayed in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user51" Booking using API

## TCID-4 Verify the change and book again flow after disabling the display of Hotel segment

tags: Regression, AirOnly, Set1B, XRAY-1112

* Goto Travel Site Url
* Login with "user50"
* Validate "Hotel" segment is not displayed in "Trip Planner" page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |99               |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100               |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "trip review" page
* Validate "Hotel" segment is not displayed in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Validate "Hotel" segment is not displayed in "Reservation" page
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |100              |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "post trip review" page
* Validate "Hotel" segment is not displayed in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |100              |

* Validate details in "post trip review" page
* Validate "Hotel" segment is not displayed in "Review" page
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


## TCID -5 Verify the change and book again flow after disabling the display of Car Rental segment

tags: Regression, AirOnly, Set1B, XRAY-1113

* Goto Travel Site Url
* Login with "user51"
* Validate "Car Rental" segment is not displayed in "Trip Planner" page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |99               |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |99               |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "trip review" page
* Validate "Car Rental" segment is not displayed in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Validate "Car Rental" segment is not displayed in "Reservation" page
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |100              |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "post trip review" page
* Validate "Car Rental" segment is not displayed in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |130              |

* Validate details in "post trip review" page
* Validate "Car Rental" segment is not displayed in "Review" page
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

## TCID-6 Verify the change and book again flow after disabling the display of Air segment

tags: Regression, HotelOnly, Set1B, XRAY-1116

* Goto Travel Site Url
* Login with "user49"
* Validate "Air" segment is not displayed in "Trip Planner" page
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |60               |62                |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click on "Change Trip"
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |70               |75                |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Validate "Air" segment is not displayed in "Review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Validate "Air" segment is not displayed in "Reservation" page
* "Change" the trip
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |90               |95                |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "post trip review" page
* Validate "Air" segment is not displayed in "Review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |CheckInAfterXDays|CheckOutAfterXDays|
   |-----------------|------------------|
   |90               |95                |

* Validate details in "trip review" page
* Validate "Air" segment is not displayed in "Review" page
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
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TCID-7 Hide emergency contact in the puchase page with the help of dashboard configuaration

tags: Regression, AirOnly, Set1B, XRAY-1110

* Goto Travel Site Url
* Login with "user51"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Validate Emergency Contact section is not visible
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user51" Booking using API

## TCID-8 Hide unused ticket link via dashboard config and verify it in userapp

tags: Regression, AirOnly, Set1B, XRAY-1109

* Goto Travel Site Url
* Login with "user51"
* Validate Unused Ticket is not visible in menu
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user51" Booking using API