# TRVL-S28,  As a Delegate, I should be able to book a trip with my personal card stored in my profile

## TC-1 Bookings Air Only with personal Card

tags: Regression, AirOnly, Set3, XRAY-1053

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |SFO        |120              |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC-2 Bookings Hotel Only with personal Card

tags: Regression, HotelOnly, Set3, XRAY-1054

* Goto Travel Site Url
* Login with "user1"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LAX             |100              |102               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC3: Bookings Train Only with personal Card

tags: Regression, TrainOnly, Set3, XRAY-1061

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC-4: Bookings Car Rental Only with personal Card

tags: Regression, CarRentalOnly, Set3, XRAY-1062

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |100              |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "car" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC-5:  Air only pre and post change with personal Card

tags: Regression, AirOnly, Set3, XRAY-1063

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |SFO        |111              |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |65               |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |121              |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC6: Hotel only pre and post change with personal Card

tags: Regression, HotelOnly, Set3, XRAY-1055

* Goto Travel Site Url
* Login with "user1"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LAX             |150              |153               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click on "Change Trip"
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LAS             |120              |123               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LAX             |120              |125               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Get processId from trip confirmation page
* Cancel the "user2" Booking using API

## TC7: Train only pre and post change with personal Card

tags: Regression, TrainOnly, Set3, XRAY-1056

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Validate details in "trip review" page
* Click on "Change Trip"
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |100              |

* Select train with its information
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "pre trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |125              |

* Select train with its information
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Check Train Ticket Notification
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC-8: Car only pre and post change with personal Card

tags: Regression, CarRentalOnly, Set3, XRAY-1057

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|BookingAfterXDays|
   |--------------|-----------------|
   |SFO           |100              |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search Car Rental based on below table data

   |PickUpLocation|BookingAfterXDays|
   |--------------|-----------------|
   |SFO           |100              |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "car" as "profile card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search Car Rental based on below table data

   |PickUpLocation|BookingAfterXDays|
   |--------------|-----------------|
   |SFO           |130              |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC-9: Book Again Air Only with personal Card

tags: Regression, AirOnly, Set3, XRAY-1060

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |SFO        |120              |

* Search filtered flight based on below table data

   |Airlines1|Airlines2|Policy   |
   |---------|---------|---------|
   |UA       |B6       |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |BookingAfterXDays|
   |-----------------|
   |120              |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TC-10: Book Again Hotel Only with personal Card

tags: Regression, HotelOnly, Set3, XRAY-1059

* Goto Travel Site Url
* Login with "user1"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LAX             |150              |153               |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |CheckInAfterXDays|CheckOutAfterXDays|
   |-----------------|------------------|
   |150              |154               |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TC-11: Book Again Car Rental Only with personal Card

tags: Regression, CarRentalOnly, Set3, XRAY-1058

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |100              |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "car" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |BookingAfterXDays|
   |-----------------|
   |120              |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "car" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TC-12: User is able to select Myself in Book again up and complete booking

tags: Regression, AirOnly, set3, XRAY-1649

* Goto Travel Site Url
* Login with "user2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validate start assisting menu dislpayed on "trip planner page"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |110              |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Book Again" the trip
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|BookTripFor|
   |--------|-----------------|-----------|
   |RT      |120              |Myself     |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* Go to reservations and select the original trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page