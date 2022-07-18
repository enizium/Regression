# TRVL-S56 Dynamic Air Policy Test Cases for One Way, Return and Multidestination

## TCID-1: Book one way OOP Flight, Continue with the selected OOP flight on OOP Modal

tags: Regression, DynamicAirPolicy, AirOnly, Set2, LiveBuildSabreSet2, XRAY-1130

* Goto Travel Site Url
* Login with "user20"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |OW      |LAX      |PHX        |25               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |OW      |LAX      |PHX        |19               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

  |TripType |BookingAfterXDays|
  |-------- |-----------------|
  |OW |15               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TCID-2: Book one way Flight, Recommended Option selected on OOP Modal

tags: Regression, DynamicAirPolicy, AirOnly, Set2, LiveBuildSabreSet2, XRAY-1131

* Goto Travel Site Url
* Login with "user20"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |OW      |LAX      |PHX        |25               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Get flight details from Recommended Option in OOP popup
* Click "recommended option select" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |OW      |LAX      |PHX        |19               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Get flight details from Recommended Option in OOP popup
* Click "recommended option select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |OW      |15               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Get flight details from Recommended Option in OOP popup
* Click "recommended option select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TCID-3: Book one way Flight, Select New Flight selected on OOP Modal

tags: Regression, DynamicAirPolicy, AirOnly, Set2, LiveBuildSabreSet2, XRAY-1133

* Goto Travel Site Url
* Login with "user20"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |OW      |LAX      |PHX        |25               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "select new flights" button
* Select Departure Flight
* Click "air OOP continue" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |OW      |LAX      |PHX        |19               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |OW      |15               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "select new flights" button
* Select Departure Flight
* Click "air OOP continue" button
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user20" Booking using API

## TCID-4: Book Round trip OOP Flight, Continue with the selected OOP flight on OOP Modal

tags: Regression, DynamicAirPolicy, AirOnly, Set2, LiveBuildSabreSet2, XRAY-1134

* Goto Travel Site Url
* Login with "user20"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |PHX        |25               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |PHX        |19               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|
* Click "air OOP continue" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
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
   |RT      |15               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user20" Booking using API

## TCID-5: Book Round trip Flight, Recommended Option selected on OOP Modal

tags: Regression, DynamicAirPolicy, AirOnly, Set2, LiveBuildSabreSet2, XRAY-1128

* Goto Travel Site Url
* Login with "user20"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |25               |

* Search filtered flight based on below table data

   |Stops    |Airlines|Policy       |
   |---------|--------|-------------|
   |Any Stops|UA      |Out of Policy|

* Get flight details from Recommended Option in OOP popup
* Click "recommended option select" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |SFO        |20               |

* Search filtered flight based on below table data

   |Stops    |Airlines|Policy       |
   |---------|--------|-------------|
   |Any Stops|UA      |Out of Policy|

* Get flight details from Recommended Option in OOP popup
* Click "recommended option select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
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
   |RT      |18               |

* Search filtered flight based on below table data

   |Stops    |Airlines|Policy       |
   |---------|--------|-------------|
   |Any Stops|UA      |Out of Policy|

* Get flight details from Recommended Option in OOP popup
* Click "recommended option select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user20" Booking using API
## TCID-6: Book Round trip Flight, Select New Flight selected on OOP Modal

tags: Regression, DynamicAirPolicy, AirOnly, Set2, LiveBuildSabreSet2, XRAY-1129

* Goto Travel Site Url
* Login with "user20"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |JFK        |25               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "select new flights" button
* Search filtered flight based on below table data

   |Policy       |
   |-------------|
   |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |JFK        |19               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
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
   |RT      |15               |

* Search filtered flight based on below table data

   |Airlines|Policy       |Stops   |
   |--------|-------------|--------|
   |UA      |Out of Policy|Non Stop|

* Click "select new flights" button
* Search filtered flight based on below table data

   |Airlines|Policy       |Stops   |
   |--------|-------------|--------|
   |UA      |Out of Policy|Non Stop|

* Click "air OOP continue" button
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user20" Booking using API

## TCID-7: In Multidestination Flow, Continue with the selected OOP flight on OOP Modal

tags: Regression, DynamicAirPolicy, AirOnly, Set2, LiveBuildSabreSet2, XRAY-1127

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page  select "Multi Destination" and click "AirOnly" segments
* Search MultiDestination flight based on below table data

   |TripType|Departure|MultiLeg|Destination|BookingAfterXDays|
   |--------|---------|--------|-----------|-----------------|
   |MD      |SFO      |DEN     |LAX        |25               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user26" Booking using API

## TCID-8: In Multidestination Flow, Recommended Option flight on OOP Modal

tags: Regression, DynamicAirPolicy, AirOnly, Set2, LiveBuildSabreSet2, XRAY-1132

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page  select "Multi Destination" and click "AirOnly" segments
* Search MultiDestination flight based on below table data

   |TripType|Departure|MultiLeg|Destination|BookingAfterXDays|
   |--------|---------|--------|-----------|-----------------|
   |MD      |SFO      |LAX     |DEN        |15               |

* Search filtered flight based on below table data

   |Stops    |Airlines|Policy       |
   |---------|--------|-------------|
   |Any Stops|UA      |Out of Policy|

* Get flight details from Recommended Option in OOP popup
* Click "recommended option select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user26" Booking using API

## TCID-9: In Multidestination Flow, Select New Flight Option on OOP Modal

tags: Regression, DynamicAirPolicy, AirOnly, Set2, LiveBuildSabreSet2, XRAY-1135

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page  select "Multi Destination" and click "AirOnly" segments
* Search MultiDestination flight based on below table data

   |TripType|Departure|MultiLeg|Destination|BookingAfterXDays|
   |--------|---------|--------|-----------|-----------------|
   |MD      |SFO      |DEN     |LAX        |25               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|
* Click "select new flights" button
* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |UA      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user26" Booking using API
