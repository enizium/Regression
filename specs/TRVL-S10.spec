# TRVL-S10 As a traveller, I would like to book a flight on Southwest airlines and get auto checkedin. Use site payment card

## TC-1: Book, Change and Cancel in-policy SWE Airlines and get auto checked-in using OTFOP

tags: Regression, AirOnly, Set1A, XRAY-1019

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |60              |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |WN      |In Policy|
   
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "OTFOP"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Fill billing address form
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |70              |

* Search filtered flight based on below table data

   |Policy   |
   |---------|
   |In Policy|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC-2 : Book, Change and Cancel OOP SWE Airlines and get auto checked-in using OTFOP

tags: Regression, AirOnly, Set1A, XRAY-1020

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |LAS        |60              |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |WN      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "OTFOP"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Fill billing address form
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |70              |

* Search filtered flight based on below table data

   |Policy       |
   |-------------|
   |Out of Policy|

* Click "air OOP continue" button
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC-3 : Book, Change and Cancel in-policy SWE Airlines and get auto checked-in using Profile card

tags: Regression, AirOnly, Set1A, XRAY-1017

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |WN      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Enter Trip Name
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |110              |

* Search filtered flight based on below table data

   |Policy   |
   |---------|
   |In Policy|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC-4 : Book, Change and Cancel OOP SWE Airlines and get auto checked-in using Profile card

tags: Regression, AirOnly, Set1A, XRAY-1018

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |SFO        |100              |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |WN      |Out of Policy|

* Click "air OOP continue" button
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
   |RT      |110              |

* Search filtered flight based on below table data

   |Policy       |
   |-------------|
   |Out of Policy|

* Click "air OOP continue" button
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC-5 : Book, Change and Cancel in-policy SWE Airlines and get auto checked-in using Site payment card

tags: Regression, AirOnly, Set1A, XRAY-1015

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |LHR        |100              |

* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |WN      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |110              |

* Search filtered flight based on below table data

   |Policy   |
   |---------|
   |In Policy|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API

## TC-6 :Book, Change and Cancel OOP SWE Airlines and get auto checked-in using Site payment card

tags: Regression, AirOnly, Set1A, XRAY-1016

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |LHR        |100              |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |WN      |Out of Policy|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |110              |

* Search filtered flight based on below table data

   |Policy       |
   |-------------|
   |Out of Policy|

* Click "air OOP continue" button
* Validate details in "post trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user1" Booking using API
