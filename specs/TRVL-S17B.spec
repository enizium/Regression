# TRVL-S17B: As a travel agent, I would like to add a site messaging in results page, review page, purchase page, confirmation pages to notify users about important information

## TCID 1: Domestic AHC trip Book, change and cancel Site Level

tags: Regression, Set1A, AHC, XRAY-1043

* Goto Travel Site Url
* Login with "user19"
* Validate LightBox Message "Trip planner" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Site Level Domestic Trips" enabled
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |110              |

* Validate LightBox Message "Select Departure" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Stop    |Airline|Policy   |
   |--------|-------|---------|
   |Non Stop|UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Select Hotel" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Select Hotel" page for "Site Level Domestic Trips" enabled
* Filter Hotel based on below table data

   |HotelName                         |
   |----------------------------------|
   |La Quinta Resort & Club  La Quinta|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate LightBox Message "Select Car" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select car" page for "Site Level Domestic Trips" enabled
* Retrieve selected car info and click on "Select" button
* Validate LightBox Message "Review" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate LightBox Message "Hold Trip" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Hold Trip" page for "Site Level Domestic Trips" enabled
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Validate LightBox Message "Trip confirmation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate LightBox Message "Trip details" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip details" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Details" page
* Click "Modify or Purchase" button
* Validate LightBox Message "Review" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Site Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Validate LightBox Message "Trip Planner" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Planner" page for "Site Level Domestic Trips" enabled
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |120              |

* Validate LightBox Message "Select Departure" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Stop    |Airline|Policy   |
   |--------|-------|---------|
   |Non Stop|UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Select Hotel" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Select Hotel" page for "Site Level Domestic Trips" enabled
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate LightBox Message "Select Car" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select car" page for "Site Level Domestic Trips" enabled
* Retrieve selected car info and click on "Select" button
* Validate LightBox Message "Review" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level Domestic Trips" enabled
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Site Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate LightBox Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 2: Train Book, Change and cancel Site Level

tags: Set1A, TrainOnly, Regression, XRAY-1044

* Goto Travel Site Url
* Login with "user19"
* Validate LightBox Message "Trip planner" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Site Level Domestic Trips" enabled
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |MIA      |ORL        |100              |

* Validate LightBox Message "Select Departure Train" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure Train" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Departure Train" page
* Select Departure Train
* Validate LightBox Message "Select Return Train" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Return Train" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Return Train" page
* Select Return Train
* Validate LightBox Message "Review" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate LightBox Message "Hold Trip" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Hold Trip" page for "Site Level Domestic Trips" enabled
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Click "hold trip continue" button
* Validate LightBox Message "Trip confirmation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate LightBox Message "Trip details" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip details" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Details" page
* Click "Modify or Purchase" button
* Validate LightBox Message "Review" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Site Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "rail" as "Site Payment Card"
* Click "Purchase" button
* Validate LightBox Message "Trip confirmation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Validate LightBox Message "Trip planner" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Site Level Domestic Trips" enabled
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |115              |

* Validate LightBox Message "Select Departure Train" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure Train" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Departure Train" page
* Select Departure Train
* Validate LightBox Message "Select Return Train" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Return Train" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Return Train" page
* Select Return Train
* Validate LightBox Message "Review" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level Domestic Trips" enabled
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Site Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "rail" as "Site Payment Card"
* Acknowledge the Terms & Conditions for travel fusion
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate LightBox Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 3: International AHC trip till purchase page for site level

tags: Regression, Set1A, AHC, XRAY-1042

* Goto Travel Site Url
* Login with "user19"
* Validate LightBox Message "Trip planner" page for "Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Site Level International Trips" enabled
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |DXB        |120              |

* Validate LightBox Message "Select Departure" page for "Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Site Level International Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Stop    |Airline|Policy   |
   |--------|-------|---------|
   |Non Stop|UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Site Level International Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Select Hotel" page for "Site Level International Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Select Hotel" page for "Site Level International Trips" enabled
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate LightBox Message "Select Car" page for "Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select car" page for "Site Level International Trips" enabled
* Validate page title in "Select Car Rental" page
* Retrieve selected car info and click on "Select" button
* Validate LightBox Message "Review" page for "Site Level International Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level International Trips" enabled
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate LightBox Message "Hold Trip" page for "Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Hold Trip" page for "Site Level International Trips" enabled
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "hold trip continue" button
* Validate LightBox Message "Trip confirmation" page for "Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Site Level International Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate LightBox Message "Trip details" page for "Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip details" page for "Site Level International Trips" enabled
* Validate page title in "Trip Details" page
* Click "Modify or Purchase" button
* Validate LightBox Message "Review" page for "Site Level International Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level International Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Site Level International Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Site Level International Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate LightBox Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 4: Verify the 'bookagain' feature with custom field set

tags: Regression, Set1A, AirOnly, XRAY-1960

* Goto Travel Site Url
* Login with "user19"
* Validate LightBox Message "Trip planner" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Site Level Domestic Trips" enabled
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |110              |

* Validate LightBox Message "Select Departure" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Stop    |Airline|Policy   |
   |--------|-------|---------|
   |Non Stop|UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Site Level Domestic Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Review" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Site Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Validate LightBox Message "Trip details" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |110              |

* Validate LightBox Message "Review" page for "Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Site Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate LightBox Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* "Cancel" the Booking using URL
* Validate LightBox Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Site Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page