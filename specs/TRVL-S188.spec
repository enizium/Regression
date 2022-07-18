# S188 - Add multiple hotels with multiple guests


## TC-1: Multi Hotels Booking with multiple members for each hotel and air only

tags: Regression, Set2, LiveBuildSabreSet2


* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AH" segments
* Search Multiple Hotel and Air based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|HotelSegment|HotelSearchValue0|CheckInAfterXDays0|CheckOutAfterXDays0|Numberofguests0|HotelSearchValue1|CheckInAfterXDays1|CheckOutAfterXDays1|Numberofguests1|
   |--------|---------|-----------|-----------------|------------|-----------------|------------------|-------------------|---------------|-----------------|------------------|-------------------|---------------|
   |RT      |SFO      |LAX        |100              |2           |SFO              |102               |108                |2              |JFK              |115               |117                |2              |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Multi Hotel and Room based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PREFERRED|CANCELLABLE|

* Validate Multi Hotel details in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate Multi Hotel details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate Multi Hotel details in "trip cancellation" page

## TC-2: Multi Hotels Booking with multiple members for each hotel and car only

tags: Regression, Set2, LiveBuildSabreSet2


* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "CH" segments
* Search Multiple Hotel and Car based on below table data   

   |PickUpLocation|DropOffLocation|BookingAfterXDays|HotelSegment|HotelSearchValue0|CheckInAfterXDays0|CheckOutAfterXDays0|Numberofguests0|HotelSearchValue1|CheckInAfterXDays1|CheckOutAfterXDays1|Numberofguests1|
   |--------------|---------------|-----------------|------------|-----------------|------------------|-------------------|---------------|-----------------|------------------|-------------------|---------------|
   |SFO           |SFO            |100              |2           |SFO              |102               |105                |2              |JFK              |108               |110                |2              |

* Select Multi Hotel and Room based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PREFERRED|CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate Multi Hotel details in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate Multi Hotel details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate Multi Hotel details in "trip cancellation" page

## TC-3: Multi Hotels Booking with multiple members for each hotel, air and car only

tags: Regression, Set2, LiveBuildSabreSet2


* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AHC" segments
* Search Multiple Hotel, Air and Car based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|HotelSegment|HotelSearchValue0|CheckInAfterXDays0|CheckOutAfterXDays0|Numberofguests0|HotelSearchValue1|CheckInAfterXDays1|CheckOutAfterXDays1|Numberofguests1|
   |--------|---------|-----------|-----------------|------------|-----------------|------------------|-------------------|---------------|-----------------|------------------|-------------------|---------------|
   |RT      |SFO      |LAX        |100              |2           |SFO              |102               |108                |2              |JFK              |115               |117                |2              |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Multi Hotel and Room based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PREFERRED|CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate Multi Hotel details in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate Multi Hotel details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate Multi Hotel details in "trip cancellation" page
