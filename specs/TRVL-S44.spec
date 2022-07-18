# S44 - Mutli Hotel

## Multi Hotels Booking with different dates

tags: Regression, HotelOnly, Set2, XRAY-1104

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Multiple Hotel based on below table data

   |HotelSegment|HotelSearchValue0|CheckInAfterXDays0|CheckOutAfterXDays0|HotelSearchValue1|CheckInAfterXDays1|CheckOutAfterXDays1|
   |------------|-----------------|------------------|-------------------|-----------------|------------------|-------------------|
   |2           |SFO              |100               |104                |JFK              |110               |114                |

* Select Multi Hotel and Room based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

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

## Multi Hotels Booking with multiple members for each hotel

tags: Regression, Set2, XRAY-1102

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Multiple Hotel based on below table data

   |HotelSegment|HotelSearchValue0|CheckInAfterXDays0|CheckOutAfterXDays0|Numberofguests0|HotelSearchValue1|CheckInAfterXDays1|CheckOutAfterXDays1|Numberofguests1|
   |------------|-----------------|------------------|-------------------|---------------|-----------------|------------------|-------------------|---------------|
   |2           |SFO              |104               |110                |2              |JFK              |115               |117                |2              |

* Select Multi Hotel and Room based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate Multi Hotel details in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate Multi Hotel details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate Multi Hotel details in "trip cancellation" page
