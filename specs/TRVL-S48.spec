# TRVL-S48: Special Request scenario for Air, Train, hotel and carrental booking

## TCID-1: Verify Travel preferences for Flight

tags: Regression, AirOnly, Set5, XRAY-1121

* Goto Travel Site Url
* Login with "user58"
* Navigate to travel preferences page
* Clear "Air" Travel preference
* Navigate to travel preferences page
* Select special requests "Air" Prefereces based on below table data

   |HomeAirport|PreferredFareType|DefaultSearchType|AirSpecialRequests1       |AirSpecialRequests2      |MembershipAirline|MembershipAirlineNumber|
   |-----------|-----------------|-----------------|--------------------------|-------------------------|-----------------|-----------------------|
   |SFO        |Lowest Available |Price            |Visually impaired traveler|Hearing impaired traveler|United Airlines  |123456                 |


* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Price"
* Validate Home Airport and Preferred Fare Type in Trip planner page
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |120              |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate "Air" Special Request and Membership in Purchase page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear "Air" all Preference data

## TCID-2: Verify Travel preferences for Hotel

tags: Regression, HotelOnly, Set5, XRAY-1118

* Goto Travel Site Url
* Login with "user58"
* Navigate to travel preferences page
* Clear "Hotel" Travel preference
* Navigate to travel preferences page
* Select special requests "Hotel" Prefereces based on below table data

   |HotelSpecialRequests1|HotelSpecialRequests2|MembershipHotel|MembershipHotelNumber|
   |---------------------|---------------------|---------------|---------------------|
   |Away from elevator   |Away from ice machine|World of Hyatt |123456               |

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
* Validate "Hotel" Special Request and Membership in Purchase page
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear "Hotel" all Preference data

## TCID-3: Verify Travel preferences for Car Rental

tags: Regression, CarRentalOnly, Set5, XRAY-1117

* Goto Travel Site Url
* Login with "user58"
* Navigate to travel preferences page
* Clear "Car" Travel preference
* Navigate to travel preferences page
* Select special requests "Car Rental" Prefereces based on below table data

   |DefaultCarSize|CarSpecialRequest1  |CarSpecialRequest2|MembershipCar|MembershipCarNumber|
   |--------------|--------------------|------------------|-------------|-------------------|
   |Intermediate  |Automatic door locks|Mobile Phone      |Budget       |123456             |

* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |145              |

* Select car rental vendor as "Budget"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate "Car Rental" Special Request and Membership in Purchase page
* Select payment card for "car" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user58" Booking using API
* Navigate to travel preferences page
* Clear "Car Rental" all Preference data

## TCID-4: Verify Travel preferences for Train

tags: Regression, TrainOnly, Set5, XRAY-1122

* Goto Travel Site Url
* Login with "user58"
* Navigate to travel preferences page
* Clear "Train" Travel preference
* Navigate to travel preferences page
* Select special requests "Train" Prefereces based on below table data

   |HomeTrainStation|MembershipTrain|MembershipTrainNumber|
   |----------------|---------------|---------------------|
   |NYP             |Amtrak         |9004960515           |

* Navigate to tripPlanner Page and select "TrainOnly" segments
* Validate Home Train Station in Trip planner page
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |110              |

* Select train with its information
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate "Train" Special Request and Membership in Purchase page
* Select payment card for "rail" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user58" Booking using API
* Navigate to travel preferences page
* Clear "Train" all Preference data
