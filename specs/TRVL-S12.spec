# TRVL_S12 As a C Suite executive, I would like to book in policy flight and my hotel was already booked by Host client/ Group coordinator, Project being Billable. I also requested NOT to change my selected seat

## TC1 : Book, Change(Pre/Post) and Cancel  in-policy flight using site payment card

tags: Regression, AirOnly, Set2, LiveBuildSabreSet2, LiveBuildApolloSet2, XRAY-1850, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |25              |

* Search filtered flight based on below table data

   |Airline|Policy   |Stops   |
   |-------|---------|--------|
   |UA     |In Policy|Non Stop|
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |18               |

* Search filtered flight based on below table data

   |Airline|Policy   |Stops   |
   |-------|---------|--------|
   |UA     |In Policy|Non Stop|
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

   |BookingAfterXDays|
   |-----------------|
   |12               |

* Search filtered flight based on below table data

   |Airline|Policy   |Stops   |
   |-------|---------|--------|
   |UA     |In Policy|Non Stop|
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2- .Book, Change(Pre/Post) and Cancel  OOP policy flight using site payment card

tags: Regression, AirOnly, Set2, LiveBuildSabreSet2 , LiveBuildApolloSet2, XRAY-1857, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |JFK        |25               |

* Search filtered flight based on below table data

   |Airline|Policy       |Stops   |
   |-------|-------------|--------|
   |UA     |Out of Policy|Non Stop|

* Click "air OOP continue" button 
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |JFK        |20               |

* Search filtered flight based on below table data

   |Airline|Policy       |Stops   |
   |-------|-------------|--------|
   |UA     |Out of Policy|Non Stop|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |25               |

* Search filtered flight based on below table data

   |Airline|Policy       |Stops   |
   |-------|-------------|--------|
   |UA     |Out of Policy|Non Stop|
  
* Click "air OOP continue" button
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Enter Project Code Additional Info
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC-3 Verify Book Again Edit trip using OTFOP Card

tags: Regression, AirOnly, Set2, LiveBuildSabreSet2, LiveBuildApolloSet2, XRAY-1855, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |25               |

* Search filtered flight based on below table data

   |Airline|Policy   |Stops   |
   |-------|---------|--------|
   |UA     |In Policy|Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "OTFOP"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |BookingAfterXDays|
   |-----------------|
   |30               |
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "OTFOP"
* Enter Project Code Additional Info
* Click "Purchase" button
* Select cardType as "MasterCard"
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page


## TC-4 Verify Book Again using Sitepayment Card

tags: Regression, AirOnly, Set2, LiveBuildSabreSet2, LiveBuildApolloSet2, XRAY-1856, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |60               |

* Search filtered flight based on below table data

   |Airline|Policy       |Stops   |
   |-------|-------------|--------|
   |UA     |In Policy    |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Reason for not booking hotel
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |10               |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TC-5 Verify Book Again and hold the trip using Profile card

tags: Regression, AirOnly, Set2, LiveBuildSabreSet2, LiveBuildApolloSet2, XRAY-1853, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |25               |

* Search filtered flight based on below table data

   |Airline|Policy   |Stops   |
   |-------|---------|--------|
   |UA     |In Policy|Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |55               |

* Validate details in "post trip review page" page   
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click Hold this Trip in purchase page
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page

## TC-6 Verify Flight hold-to-purcahse the trip using site payment card

tags: Regression, AirOnly, Set2, LiveBuildSabreSet2, LiveBuildApolloSet2, XRAY-1854, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |25               |

* Search filtered flight based on below table data

   |Airline|Policy   |Stops   |
   |-------|---------|--------|
   |UA     |In Policy|Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click Hold this Trip in purchase page
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page


## TC-7 Verify Flight hold-to-Book Again the trip using site payment card

tags: Regression, AirOnly, Set2, LiveBuildSabreSet2, LiveBuildApolloSet2, XRAY-1851, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user16"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |55               |

* Search filtered flight based on below table data

   |Airline|Policy   |Stops   |
   |-------|---------|--------|
   |UA     |In Policy|Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click Hold this Trip in purchase page
* Click "hold trip continue" button
* Go to reservations and select the recently added trip
* Click "View Details" button
* Click "Purchase" button
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |55               |

* Validate details in "post trip review page" page 
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
