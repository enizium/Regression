# As a traveler, I would like to book a flight with hotel and car rental option as well, and be able to add extra night, and remove last night when relevant based on selection in hotel date alignment pop up 

## TC1: Verify that user is able to add extra night in hotel date alignment pop up for a AHC booking

tags: Regression, AHC, hotelDateAlignmentPopup

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LHR        |142              |

* Select "OutBound" Flight with time before "8:00" and duration greater than "720" minutes
* Click "Air OOP Continue" button if exist
* Select "Add Extra Night" in hotel alignment pop up
* Validate checkin checkout dates in "Hotel" page is same to be "true"
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Validate checkin checkout dates in "Review" page is same to be "true"
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate checkin checkout dates in "Trip Confirmation" page is same to be "true"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2: Verify that user is able to Continue with original selection in hotel date alignment pop up for a AHC booking

tags: Regression, AHC, hotelDateAlignmentPopup

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LHR        |145              |

* Select "OutBound" Flight with time before "8:00" and duration greater than "720" minutes
* Click "Air OOP Continue" button if exist
* Select "Continue with original selection" in hotel alignment pop up
* Validate checkin checkout dates in "Hotel" page is same to be "false"
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Validate checkin checkout dates in "Review" page is same to be "false"
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate checkin checkout dates in "Trip Confirmation" page is same to be "false"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page


## TC3: Verify that user is able to Continue without this hotel in hotel date alignment pop up for a AHC booking

tags: Regression, AHC, hotelDateAlignmentPopup

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LHR        |145              |

* Select "OutBound" Flight with time before "8:00" and duration greater than "720" minutes
* Click "Air OOP Continue" button if exist
* Select "Continue without this hotel" in hotel alignment pop up
* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in trip review page without hotel
* Validate checkin checkout dates for flight is unchanged in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in trip confirmation page without hotel
* Validate checkin checkout dates for flight is unchanged in "Trip Confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page


## TC4: Verify that user is able to remove last night in hotel date alignment pop up for a AHC booking

tags: Regression, AHC, hotelDateAlignmentPopup

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |DXB        |75               |

* Select "InBound" Flight with time before "8:00" and duration greater than "720" minutes
* Click "Air OOP Continue" button if exist
* Select "Remove Last Night" in hotel alignment pop up
* Validate checkin checkout dates in "Hotel" page is same to be "false"
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Validate checkin checkout dates in "Review" page is same to be "false"
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate checkin checkout dates in "Trip Confirmation" page is same to be "false"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page



## TC5: Verify that user is able to Continue with original selection in hotel date alignment pop up for a AHC booking, in remove last night alternative

tags: Regression, AHC, hotelDateAlignmentPopup

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |DXB        |73               |

* Select "InBound" Flight with time before "8:00" and duration greater than "720" minutes
* Click "Air OOP Continue" button if exist
* Select "Continue with original selection" in hotel alignment pop up
* Validate checkin checkout dates in "Hotel" page is same to be "false"
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |PRIVATE RATE      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Validate checkin checkout dates in "Review" page is same to be "false"
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate checkin checkout dates in "Trip Confirmation" page is same to be "false"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page


## TC6: Verify that user is able to Continue without this hotel in hotel date alignment pop up for a AHC booking, in remove last night alternative

tags: Regression, AHC, hotelDateAlignmentPopup

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |DXB        |150              |

* Select "InBound" Flight with time before "8:00" and duration greater than "720" minutes
* Click "Air OOP Continue" button if exist
* Select "Continue without this hotel" in hotel alignment pop up
* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in trip review page without hotel
* Validate checkin checkout dates for flight is unchanged in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate details in trip confirmation page without hotel
* Validate checkin checkout dates for flight is unchanged in "Trip Confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
