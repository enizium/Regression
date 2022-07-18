# TRVL-S41: Loyalty Membership scenario for Air, hotel, carrental and AHC booking

## TCID-1: Verify loyalty Membership for Flight

tags: Regression, AirOnly, Set5, XRAY-1094

* Goto Travel Site Url
* Login with "user59"
* Navigate to travel preferences page
* Clear "Air" Travel preference
* Navigate to travel preferences page
* Select special requests "Air" Prefereces based on below table data

   |MembershipAirline|MembershipAirlineNumber|
   |-----------------|-----------------------|
   |United Airlines  |123456                 |

* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate Loyalty Membership in Purchase page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Get processId from trip confirmation page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |99               |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Validate Loyalty Membership in Purchase page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Delete the cookies
* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Go to view PNR XML page
* Enter ProcessId
* Read "Change" PNR XML file
* Valiate Loyality Member in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user59"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear Loyality Membership data

## TCID-2: Verify loyalty Membership for Hotel

tags: Regression, HotelOnly, Set5, XRAY-1088

* Goto Travel Site Url
* Login with "user59"
* Navigate to travel preferences page
* Clear "Hotel" Travel preference
* Navigate to travel preferences page
* Select special requests "Hotel" Prefereces based on below table data

   |MembershipHotel|MembershipHotelNumber|
   |---------------|---------------------|
   |World of Hyatt |123456               |

* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue                       |CheckInAfterXDays|CheckOutAfterXDays|
   |---------------------------------------|-----------------|------------------|
   |Hyatt Regency Mission Bay Spa And Marin|150              |154               |

* Filter Hotel based on below table data
   |HotelName                              |
   |---------------------------------------|
   |Hyatt Regency Mission Bay Spa And Marin|
   
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate Loyalty Membership in Purchase page
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search Hotel based on below table data

   |HotelSearchValue                       |CheckInAfterXDays|CheckOutAfterXDays|
   |---------------------------------------|-----------------|------------------|
   |Hyatt Regency Mission Bay Spa And Marin|152              |154               |

* Filter Hotel based on below table data
   |HotelName                              |
   |---------------------------------------|
   |Hyatt Regency Mission Bay Spa And Marin|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Validate Loyalty Membership in Purchase page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Delete the cookies
* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Go to view PNR XML page
* Enter ProcessId
* Read "Change" PNR XML file
* Valiate Loyality Member in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user59"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear Loyality Membership data

## TCID-3: Verify loyalty Membership for Car Rental

tags: Regression, CarRentalOnly, Set5, XRAY-1089

* Goto Travel Site Url
* Login with "user59"
* Navigate to travel preferences page
* Clear "Car" Travel preference
* Navigate to travel preferences page
* Select special requests "Car Rental" Prefereces based on below table data

   |MembershipCar|MembershipCarNumber|
   |-------------|-------------------|
   |Budget       |123456             |

* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |105              |

* Select car rental vendor as "Budget"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate Loyalty Membership in Purchase page
* Select payment card for "car" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |150              |

* Select car rental vendor as "Budget"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Validate Loyalty Membership in Purchase page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Delete the cookies
* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Go to view PNR XML page
* Enter ProcessId
* Read "Change" PNR XML file
* Valiate Loyality Member in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user59"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear Loyality Membership data

## TCID-4: Verify loyalty Membership for  AHC

tags: Regression, AHC, Set5, XRAY-1090

* Goto Travel Site Url
* Login with "user59"
* Navigate to travel preferences page
* Clear "AHC" Travel preference
* Navigate to travel preferences page
* Select special requests "Air" Prefereces based on below table data

   |MembershipAirline|MembershipAirlineNumber|
   |-----------------|-----------------------|
   |United Airlines  |123456                 |

* Navigate to travel preferences page
* Select special requests "Hotel" Prefereces based on below table data

   |MembershipHotel|MembershipHotelNumber|
   |---------------|---------------------|
   |World of Hyatt |123456               |

* Navigate to travel preferences page
* Select special requests "Car Rental" Prefereces based on below table data

   |MembershipCar|MembershipCarNumber|
   |-------------|-------------------|
   |Budget       |123456             |

* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |120              |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Filter Hotel based on below table data

   |HotelName                              |
   |---------------------------------------|
   |Hyatt Regency Mission Bay Spa And Marin|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "CAR"
* Select car rental vendor as "Budget"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate Loyalty Membership in Purchase page
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |130              |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Filter Hotel based on below table data

   |HotelName                              |
   |---------------------------------------|
   |Hyatt Regency Mission Bay Spa And Marin|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "CAR"
* Select car rental vendor as "Budget"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Validate Loyalty Membership in Purchase page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Delete the cookies
* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Go to view PNR XML page
* Enter ProcessId
* Read "Change" PNR XML file
* Valiate Loyality Member in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user59"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear Loyality Membership data
