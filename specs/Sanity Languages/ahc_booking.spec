# AHC Booking and Cancel Spec

## AHC Booking and Cancel Scenario:

tags: Sabre, Apollo, Worldspan, AHC, DevLocal, Multilanguage 

* Goto Travel Site Url
* Login with "sanityUser1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAS        |90               |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Click trip review continue button
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Go to reservations and select the recently added trip
* "Cancel" the trip
