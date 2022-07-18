#TRVL-S190 - EHIDirect Hotel booking for booking.com hotels

## TC-1 : Business Address & Billing address: Both are not saved in Profile and providing Billing address on Purchase page.

* Goto Travel Site Url
* Login with "user2"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |Laughlin        |130              |145               |

* Filter Hotel based on below table data

   |Hotel Categories|
   |----------------|
   |Booking.com     |   

* Select Hotel based on below table data

   |HotelType|RoomType           |
   |---------|-------------------|
   |GDS      |BOOKING.COM        |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "User" address details
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "Trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC-2 : Business Address & Billing address: Both Saved in Profile.

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |Laughlin        |130              |145               |

* Filter Hotel based on below table data

   |Hotel Categories|
   |----------------|
   |Booking.com     |   

* Select Hotel based on below table data

   |HotelType|RoomType           |
   |---------|-------------------|
   |GDS      |BOOKING.COM        |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "Trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page