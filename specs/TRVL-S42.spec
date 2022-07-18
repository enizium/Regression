# TRVL-S42: Special Request scenario for Air, Hotel. carrental booking and AHC

## TCID-1: Verify Special Request for Flight

tags: Regression, AirOnly, Set5, XRAY-1098

* Goto Travel Site Url
* Login with "user57"
* Navigate to travel preferences page
* Clear "Air" Travel preference
* Navigate to travel preferences page
* Select special requests "Air" Prefereces based on below table data

   |AirSpecialRequests1       |AirSpecialRequests2      |
   |--------------------------|-------------------------|
   |Visually impaired traveler|Hearing impaired traveler|

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
* Validate Special Request in Purchase page
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
* Validate Special Request in Purchase page
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
* Valiate Special Request in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user57"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear Special Request data

## TCID-2: Verify Special Request for Hotel

tags: Regression, HotelOnly, Set5, XRAY-1099

* Goto Travel Site Url
* Login with "user57"
* Navigate to travel preferences page
* Clear "Hotel" Travel preference
* Navigate to travel preferences page
* Select special requests "Hotel" Prefereces based on below table data

   |HotelSpecialRequests1|HotelSpecialRequests2|
   |---------------------|---------------------|
   |Away from elevator   |Away from ice machine|

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
* Validate Special Request in Purchase page
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
* Validate Special Request in Purchase page
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
* Valiate Special Request in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user57"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear Special Request data

## TCID-3: Verify Special Request for Car Rental

tags: Regression, CarRentalOnly, Set5, XRAY-1096

* Goto Travel Site Url
* Login with "user57"
* Navigate to travel preferences page
* Clear "Car" Travel preference
* Navigate to travel preferences page
* Select special requests "Car Rental" Prefereces based on below table data

   |CarSpecialRequest1  |CarSpecialRequest2|
   |--------------------|------------------|
   |Automatic door locks|Mobile Phone      |

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
* Validate Special Request in Purchase page
* Select payment card for "car" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Get processId from trip confirmation page
* Validate details in "trip confirmation" page
* "Change" the Booking using URL
* Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |150              |

* Select car rental vendor as "Budget"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate Special Request in Purchase page
* Validate page title in "Purchase Trip" page
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
* Valiate Special Request in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user57"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear Special Request data

## TCID-4: Verify Special Request for AHC

tags: Regression, AHC, Set5, XRAY-1097

* Goto Travel Site Url
* Login with "user57"
* Navigate to travel preferences page
* Clear "AHC" Travel preference
* Navigate to travel preferences page
* Select special requests "Air" Prefereces based on below table data

   |AirSpecialRequests1       |AirSpecialRequests2      |
   |--------------------------|-------------------------|
   |Visually impaired traveler|Hearing impaired traveler|

* Navigate to travel preferences page
* Select special requests "Hotel" Prefereces based on below table data

   |HotelSpecialRequests1|HotelSpecialRequests2|
   |---------------------|---------------------|
   |Away from elevator   |Away from ice machine|

* Navigate to travel preferences page
* Select special requests "Car Rental" Prefereces based on below table data

   |CarSpecialRequest1  |CarSpecialRequest2|
   |--------------------|------------------|
   |Automatic door locks|Mobile Phone      |

* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |150              |

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
* Validate Special Request in Purchase page
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Get processId from trip confirmation page
* Validate details in "trip confirmation" page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |150              |

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
* Validate Special Request in Purchase page
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
* Valiate Special Request in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user57"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear Special Request data
