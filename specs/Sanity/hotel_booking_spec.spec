# Hotel Booking Specifications

## Hotel Only Booking and Cancel Scenario

tags: Sanity, Regression, HotelOnly, Sabre, Apollo, Worldspan, DevLocal

* Goto Travel Site Url
* Login with "sanityUser2"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |152               |

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## GDS Hotel Booking/Change/Cancel Flow

tags: Regression, HotelOnly, Sabre, Apollo, Worldspan

* Goto Travel Site Url
* Login with "sanityUser2"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |22                |

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |120              |122               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
