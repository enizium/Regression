# TRVL-S33: Ambiguous hotel checkin and checkout cases

## TC1 - Ambigous hotel checkin - Original selection

tags: Regression, AHC, Set1B, XRAY-1082

* Goto Travel Site Url
* Login with "user33"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|DepartTime|
   |--------|---------|-----------|-----------------|----------|
   |RT      |SFO      |DXB        |110              |9pm       |


* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|

* Select "Continue with original selection" in hotel alignment pop up
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |PREFERRED|NA      |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2 - Ambigous hotel checkin - Add extra night

tags: Regression, AHC, Set1B, XRAY-1083

* Goto Travel Site Url
* Login with "user34"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|DepartTime|
   |--------|---------|-----------|-----------------|----------|
   |RT      |SFO      |DXB        |90               |9pm       |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|

* Select "Continue without this hotel" in hotel alignment pop up
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
