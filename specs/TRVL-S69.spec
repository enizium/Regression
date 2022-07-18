# TRVL-S69 Trip plan for hotel by hotel name

## TCID 1: Plan the trip and book a hotel by hotel name and Complete the booking for the same hotel

tags: Regression, HotelOnly, Set2, XRAY-1208

* Goto Travel Site Url
* Login with "user43"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue                        |CheckInAfterXDays|CheckOutAfterXDays|
   |----------------------------------------|-----------------|------------------|
   |Hyatt Regency Mission Bay Spa And Marina|150              |154               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PREFERRED|CANCELLABLE|

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

## TCID-2 Verify the first hotel shown is the one selected in trip planner page

tags: Regression, HotelOnly, Set2, XRAY-1209

* Goto Travel Site Url
* Login with "user43"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue                        |CheckInAfterXDays|CheckOutAfterXDays|
   |----------------------------------------|-----------------|------------------|
   |Hyatt Regency Mission Bay Spa And Marina|150              |154               |

* Validate First Hotel Name in hotel page
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PREFERRED|CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-3 Change the hotel in results page and complete the booking

tags: Regression, HotelOnly, Set2, XRAY-1210

* Goto Travel Site Url
* Login with "user43"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue                |CheckInAfterXDays|CheckOutAfterXDays|
   |--------------------------------|-----------------|------------------|
   |The Westin San Francisco Airport|150              |154               |

* Filter Hotel based on below table data

   |HotelName                               |
   |----------------------------------------|
   |Hyatt Regency Mission Bay Spa And Marina|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PREFERRED |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user43" Booking using API
