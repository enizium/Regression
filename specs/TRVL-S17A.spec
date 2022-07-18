# TRVL-S17A As a travel agent, I would like to add a site messaging in results page, review page, purchase page, confirmation pages to notify users about important information

### DSM functionality on Partner level and site level

## TCID 1 Domestic AHC trip Book, change and cancel

tags: Regression, Set11, AHC, XRAY-1050

* Goto Travel Site Url
* Login with "user22"
* Validate LightBox Message "Trip planner" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Partner and Site Level Domestic Trips" enabled
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |120              |

* Validate LightBox Message "Select Departure" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Select Hotel" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Select Hotel" page for "Partner and Site Level Domestic Trips" enabled
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate LightBox Message "Select Car" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select car" page for "Partner and Site Level Domestic Trips" enabled
* Retrieve selected car info and click on "Select" button
* Validate LightBox Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate LightBox Message "Hold Trip" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Hold Trip" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "hold trip continue" button
* Validate LightBox Message "Trip confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate LightBox Message "Trip details" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip details" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Details" page
* Click "Modify or Purchase" button
* Validate LightBox Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Validate LightBox Message "Trip Planner" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Planner" page for "Partner and Site Level Domestic Trips" enabled
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |120              |

* Validate LightBox Message "Select Departure" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Select Hotel" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Select Hotel" page for "Partner and Site Level Domestic Trips" enabled
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate LightBox Message "Select Car" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select car" page for "Partner and Site Level Domestic Trips" enabled
* Retrieve selected car info and click on "Select" button
* Validate LightBox Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner and Site Level Domestic Trips" enabled
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate LightBox Message "Trip Cancellation" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 2 Train Book, Change and cancel

tags: Set11, TrainOnly, Regression, XRAY-1046

* Goto Travel Site Url
* Login with "user22"
* Validate LightBox Message "Trip planner" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Partner and Site Level Domestic Trips" enabled
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |MIA      |ORL        |120              |

* Validate LightBox Message "Select Departure Train" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure Train" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Select Departure Train" page
* Select Departure Train
* Validate LightBox Message "Select Return Train" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Return Train" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Select Return Train" page
* Select Return Train
* Validate LightBox Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate LightBox Message "Hold Trip" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Hold Trip" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Click "hold trip continue" button
* Validate LightBox Message "Trip confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate LightBox Message "Trip details" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip details" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Details" page
* Click "Modify or Purchase" button
* Validate LightBox Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "rail" as "Site Payment Card"
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Validate LightBox Message "Trip planner" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Partner and Site Level Domestic Trips" enabled
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |110              |

* Validate LightBox Message "Select Departure Train" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure Train" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Select Departure Train" page
* Select Departure Train
* Validate LightBox Message "Select Return Train" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Return Train" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Select Return Train" page
* Select Return Train
* Validate LightBox Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner and Site Level Domestic Trips" enabled
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Acknowledge the Terms & Conditions for travel fusion
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate LightBox Message "Trip Cancellation" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 3: International AHC trip till purchase page

tags: Regression, AHC, XRAY-1049

* Goto Travel Site Url
* Login with "user22"
* Validate LightBox Message "Trip planner" page for "Partner and Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Partner and Site Level International Trips" enabled
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |DXB        |120              |

* Validate LightBox Message "Select Departure" page for "Partner and Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Partner and Site Level International Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Stop    |Airline|Policy   |
   |--------|-------|---------|
   |Non Stop|UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Partner and Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Partner and Site Level International Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Select Hotel" page for "Partner and Site Level International Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Select Hotel" page for "Partner and Site Level International Trips" enabled
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate LightBox Message "Select Car" page for "Partner and Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select car" page for "Partner and Site Level International Trips" enabled
* Retrieve selected car info and click on "Select" button
* Validate LightBox Message "Review" page for "Partner and Site Level International Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner and Site Level International Trips" enabled
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate LightBox Message "Hold Trip" page for "Partner and Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Hold Trip" page for "Partner and Site Level International Trips" enabled
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "hold trip continue" button
* Validate LightBox Message "Trip confirmation" page for "Partner and Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Partner and Site Level International Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate LightBox Message "Trip details" page for "Partner and Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip details" page for "Partner and Site Level International Trips" enabled
* Validate page title in "Trip Details" page
* Click "Modify or Purchase" button
* Validate LightBox Message "Review" page for "Partner and Site Level International Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner and Site Level International Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner and Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner and Site Level International Trips" enabled
* Select payment card for "air" as "Site Payment Card"
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner and Site Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner and Site Level International Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate LightBox Message "Trip Cancellation" page for "Partner and Site Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Partner and Site Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 4 Domestic AHC trip Book, change and cancel at Partner Level

tags: Regression, Set11, AHC, XRAY-1048

* Goto Travel Site Url
* Login with "user21"
* Validate LightBox Message "Trip planner" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Partner Level Domestic Trips" enabled
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |110              |

* Validate LightBox Message "Select Departure" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Select Hotel" page for "Partner Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Select Hotel" page for "Partner Level Domestic Trips" enabled
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate LightBox Message "Select Car" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select car" page for "Partner Level Domestic Trips" enabled
* Retrieve selected car info and click on "Select" button
* Validate LightBox Message "Review" page for "Partner Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate LightBox Message "Hold Trip" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Hold Trip" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "hold trip continue" button
* Validate LightBox Message "Trip confirmation" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate LightBox Message "Trip details" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip details" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Details" page
* Click "Modify or Purchase" button
* Validate LightBox Message "Review" page for "Partner Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Validate LightBox Message "Trip Planner" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Planner" page for "Partner Level Domestic Trips" enabled
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |120              |

* Validate LightBox Message "Select Departure" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Airline|Policy   |
   |-------|---------|
   |UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Select Hotel" page for "Partner Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Select Hotel" page for "Partner Level Domestic Trips" enabled
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate LightBox Message "Select Car" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select car" page for "Partner Level Domestic Trips" enabled
* Retrieve selected car info and click on "Select" button
* Validate LightBox Message "Review" page for "Partner Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner Level Domestic Trips" enabled
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate LightBox Message "Trip Cancellation" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 5 Train Book, Change and cancel at Partner Level

tags: Set11, TrainOnly, Regression, XRAY-1045

* Goto Travel Site Url
* Login with "user21"
* Validate LightBox Message "Trip planner" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Partner Level Domestic Trips" enabled
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |MIA      |ORL        |100              |

* Validate LightBox Message "Select Departure Train" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure Train" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Select Departure Train" page
* Select Departure Train
* Validate LightBox Message "Select Return Train" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Return Train" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Select Return Train" page
* Select Return Train
* Validate LightBox Message "Review" page for "Partner Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate LightBox Message "Hold Trip" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Hold Trip" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Click "hold trip continue" button
* Validate LightBox Message "Trip confirmation" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate LightBox Message "Trip details" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip details" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Details" page
* Click "Modify or Purchase" button
* Validate LightBox Message "Review" page for "Partner Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner Level Domestic Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "rail" as "Site Payment Card"
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Validate LightBox Message "Trip planner" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Partner Level Domestic Trips" enabled
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |110              |

* Validate LightBox Message "Select Departure Train" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure Train" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Select Departure Train" page
* Select Departure Train
* Validate LightBox Message "Select Return Train" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Return Train" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Select Return Train" page
* Select Return Train
* Validate LightBox Message "Review" page for "Partner Level Domestic Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner Level Domestic Trips" enabled
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Purchase Trip" page
* Acknowledge the Terms & Conditions for travel fusion
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate LightBox Message "Trip Cancellation" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID 6: International AHC trip till purchase page for Partner level

tags: Regression, AHC, XRAY-1047

* Goto Travel Site Url
* Login with "user21"
* Validate LightBox Message "Trip planner" page for "Partner Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip planner" page for "Partner Level International Trips" enabled
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |DXB        |120              |

* Validate LightBox Message "Select Departure" page for "Partner Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select Departure" page for "Partner Level International Trips" enabled
* Validate page title in "Select Departure Flight" page
* Collapse DSM message
* Filtered flight based on below table data

   |Stop    |Airline|Policy   |
   |--------|-------|---------|
   |Non Stop|UA     |In Policy|

* Select Departure Flight
* Validate LightBox Message "Return Flight" page for "Partner Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Return Flight" page for "Partner Level International Trips" enabled
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate LightBox Message "Select Hotel" page for "Partner Level International Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Select Hotel" page for "Partner Level International Trips" enabled
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate LightBox Message "Select Car" page for "Partner Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Select car" page for "Partner Level International Trips" enabled
* Retrieve selected car info and click on "Select" button
* Validate LightBox Message "Review" page for "Partner Level International Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner Level International Trips" enabled
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate LightBox Message "Hold Trip" page for "Partner Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Hold Trip" page for "Partner Level International Trips" enabled
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "hotel" as "Site Payment Card"
* Click "hold trip continue" button
* Validate LightBox Message "Trip confirmation" page for "Partner Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip confirmation" page for "Partner Level International Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate LightBox Message "Trip details" page for "Partner Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip details" page for "Partner Level International Trips" enabled
* Validate page title in "Trip Details" page
* Click "Modify or Purchase" button
* Validate LightBox Message "Review" page for "Partner Level International Trips" enabled
* Click DSM "CloseX" button
* Validate Inline Message "Review" page for "Partner Level International Trips" enabled
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate LightBox Message "Purchase" page for "Partner Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Purchase" page for "Partner Level International Trips" enabled
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate LightBox Message "Trip Confirmation" page for "Partner Level International Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Confirmation" page for "Partner Level International Trips" enabled
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate LightBox Message "Trip Cancellation" page for "Partner Level Domestic Trips" enabled
* Click DSM "Close" button
* Validate Inline Message "Trip Cancellation" page for "Partner Level Domestic Trips" enabled
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
