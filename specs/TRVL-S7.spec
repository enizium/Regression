# TRVL-S7: As a traveller, I would like to book a Amtrack train alone to boston and use my card for payment

## TC1: Book, Change and Cancel in-policy Train using OTFOP

tags: Regression, TrainOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, XRAY-999, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
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
* Select payment card for "rail" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |95               |

* Select train with its information
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC2: Book, Change and Cancel OOP Train using OTFOP

tags: Regression, TrainOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, XRAY-997, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |NYP      |BOS        |90               |First    |

* Select train with its information
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |95               |

* Select train with its information
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC3: Book, Change and Cancel OOP Train using Profile card

tags: Regression, TrainOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, XRAY-996, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |NYP      |BOS        |90               |First    |

* Select train with its information
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Profile Card"
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |95               |

* Select train with its information
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user3" Booking using API

## TC4: Book, Change and Cancel in-policy Train using Profile Card

tags: Regression, TrainOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, XRAY-998, LiveBuildWorldspanSet1

* Goto Travel Site Url
* Login with "user3"
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
* Select payment card for "rail" as "Profile Card"
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |95               |

* Select train with its information
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "train ticket notification checkbox" button
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user3" Booking using API
