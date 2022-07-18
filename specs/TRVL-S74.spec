# TRVL-S74: Add services to the booking in review page

## TCID-1: Add hotel segment to air only booking in review page, continue to purchase and then cancel the booking

tags: Regression, AirOnly, Set1B, XRAY-1241

* Goto Travel Site Url
* Login with "user35"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |PHX        |120              |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate details in "trip review" page
* Add "Hotel" in review page
* Click "Search" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter traveler "User" contact details
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2 - Add Carrental segment to air only booking in review page, continue to purchase and then cancel the booking

tags: Regression, AirOnly, Set1B, XRAY-1262

* Goto Travel Site Url
* Login with "user36"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |PHX        |150              |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|

* Validate details in "trip review" page
* Add "Car" in review page
* Click "Search" button
* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter traveler "User" contact details
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC3 - Add Hotel segment to air only booking in review page, then add carrental to air and hotel booking in review page, continue to purchase and then cancel the booking

tags: Regression, AirOnly, Set1B, XRAY-1260

* Goto Travel Site Url
* Login with "user37"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |PHX        |120              |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate details in "trip review" page
* Add "Hotel" in review page
* Click "Search" button
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |NA         |

* Validate details in "trip review" page
* Add "Car" in review page
* Click "Search" button
* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter traveler "User" contact details
* Enter traveler "User" gender
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user37" Booking using API
