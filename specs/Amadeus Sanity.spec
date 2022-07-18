# Amadeus Sanity

##TC1: AHC Hold without membership

tags: amadeus

* Goto Travel Site Url
* Login with "sanityUser1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LHR      |LAX        |120              |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType   |RoomType   |
   |------------|-----------|
   |NA          |CANCELLABLE|

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click Hold this Trip in purchase page
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page

## TC2 AHC Purchase without membership

tags: amadeus

* Goto Travel Site Url
* Login with "sanityUser1"
* Go to reservations and select the recently added trip
* Click "View Details" button
* Click "Purchase" button
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page

## TC3 AHC Change without membership

tags: amadeus

* Goto Travel Site Url
* Login with "sanityUser1"
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flights based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |60               |

* Search Hotels based on below table data

   |HotelSearchValue|
   |----------------|
   |SFO             |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType   |RoomType   |
   |------------|-----------|
   |NA          |NA         |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page

## TC4 AHC Cancel without membership

tags: amadeus

* Goto Travel Site Url
* Login with "sanityUser1"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC5 AHC booking and cancel with membership

tags: amadeus

* Goto Travel Site Url
* Login with "sanityUser1"
* Navigate to travel preferences page
* Clear "Car" Travel preference
* Navigate to travel preferences page
* Select special requests "Car Rental" Prefereces based on below table data

   |CarSpecialRequest1  |CarSpecialRequest2|MembershipCar|MembershipCarNumber|
   |--------------------|------------------|-------------|-------------------|
   |Automatic door locks|Mobile Phone      |Budget       |123456             |

* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |JFK      |BOS        |60               |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|B6      |In Policy|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |NA         |

* Select car rental vendor as "Budget"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate "Car Rental" Special Request and Membership in Purchase page
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |45               |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|B6      |In Policy|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |NA          |

* Select car rental vendor as "Budget"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Validate "Car Rental" Special Request and Membership in Purchase page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Clear "Car Rental" all Preference data


## TC6 Hotel booking change and cancel

tags: amadeus

* Goto Travel Site Url
* Login with "sanityUser1"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |60               |62                |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|

* Validate details in "trip review" page
* Click on "Change Trip"
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |70               |75                |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |90               |95                |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page