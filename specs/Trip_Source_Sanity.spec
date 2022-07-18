# Trip Source Sanity

## TC1: Create hotel booking with trip souce ancillary Hotel and cancel the booking.

tags: TripSourceSanity, XRAY-2052

* Goto Travel Site Url
* Login with "tripSourceUser"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |15              |18               |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|TRIPSOURCE|

* Validate details in "trip review" page
* Validate hotel badge in trip review page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2: Change hotel only booking from tripsource-tripsource

tags: TripSourceSanity, XRAY-2053

* Goto Travel Site Url
* Login with "tripSourceUser"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |15              |18               |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|TRIPSOURCE|

* Validate details in "trip review" page
* Validate hotel badge in trip review page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LAX             |15               |20                |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|TRIPSOURCE|

* Validate details in "trip review" page
* Validate hotel badge in trip review page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC3: Change hotel only booking from Sabre GDS - Sabre GDS Hotel

tags: TripSourceSanity, XRAY-2061

* Goto Travel Site Url
* Login with "tripSourceUser"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |15              |18               |
* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LAX             |15               |20                |

* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC4: Change hotel only booking from Tripsource - Sabre GDS Hotel

tags: TripSourceSanity, XRAY-2062

* Goto Travel Site Url
* Login with "tripSourceUser"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |15              |18               |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |NA       |TRIPSOURCE|

* Validate details in "trip review" page
* Validate hotel badge in trip review page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LAX             |15               |20                |

* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC5: Change hotel only booking from Sabre GDS Hotel - Tripsource

tags: TripSourceSanity, XRAY-2055

* Goto Travel Site Url
* Login with "tripSourceUser"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |15              |20               |

* Filter search based on below table data and validate the results accordingly

   |Hotel Categories    |
   |--------------------|
   |Non-Preferred Hotels|
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LAX             |15               |20                |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|TRIPSOURCE|

* Validate details in "trip review" page
* Validate hotel badge in trip review page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
