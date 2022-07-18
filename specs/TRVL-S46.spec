# TRVL-S46: Penality Hotels

## TCID-1 As a user, I would like to hotel search and select a penalty hotel, purchase and cancel the hotel booking

tags:  Regression, HotelOnly, Set2, LiveBuildSabreSet1, XRAY-1103

* Goto Travel Site Url
* Login with "user24"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data
    |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
    |----------------|-----------------|------------------|
    |SFO             |21               |23                |

* Select Hotel based on below table data 
   |HotelType   |RoomType   |
   |------------|-----------|
   |NA          |PENALTY    |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate details in "post trip cancellation" page
* Validate details in "trip cancellation" page
