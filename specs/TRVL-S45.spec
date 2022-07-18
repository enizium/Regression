# TRVL-S45: Reference Point

## Hotel Reference Point

tags: gaikotravel, regression, HotelOnly, Set1B, LiveBuildSabreSet1, XRAY-1105

* Goto Travel Site Url
* Login with "user39"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data and Reference point
    |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|HotelSearchLocType|
    |----------------|-----------------|------------------|------------------|
    |LAX             |150              |154               |Airport           |

* Validate Reference point
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
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