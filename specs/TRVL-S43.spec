# Multi Destination
## TCID-1: Verify the Hotel booking failure message for a multi destination 2 segment AHC and FAIL 2 hotels and check the amount is getting removed from trip cost summary

tags: ReleaseRegression, AHC, Set5, XRAY-2074

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page  select "Multi Destination" and click "AHC" segments
* Search MultiDestination flight based on below table data

   |TripType|Departure|MultiLeg|Destination|BookingAfterXDays|
   |--------|---------|--------|-----------|-----------------|
   |MD      |SFO      |LAS     |LAX        |120              |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|

* Filter Hotel based on below table data

   |HotelName                              |
   |---------------------------------------|
   |Hyatt Regency Mission Bay Spa And Marin|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate hotel failed in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate hotel failed in "trip details" page
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-2: Verify the Hotel booking failure message for a multi destination 2 segment AHC and FAIL 1 hotels and check the amount is getting removed from trip cost summary

tags: ReleaseRegression, AHC, Set5, XRAY-2076

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page  select "Multi Destination" and click "AHC" segments
* Search MultiDestination flight based on below table data

   |TripType|Departure|MultiLeg|Destination|BookingAfterXDays|
   |--------|---------|--------|-----------|-----------------|
   |MD      |SFO      |LAS     |LAX        |120              |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|

* Filter Hotel based on below table data

   |HotelName                              |
   |---------------------------------------|
   |Hyatt Regency Mission Bay Spa And Marin|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-INV" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate hotel failed in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate hotel failed in "trip details" page
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page