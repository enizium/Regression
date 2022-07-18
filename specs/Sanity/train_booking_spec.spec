# Train Booking Specifications

## Train Only Hold and Cancel Scenario

tags: Regression, Sanity, TrainOnly, Sabre, Apollo, Worldspan, DevLocal

* Goto Travel Site Url
* Login with "sanityUser3"
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays| 
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Validate details in "trip review" page
* Click "Hold the trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page



## Train only booking, change and cancel flow

tags: postregression, TrainOnly, Sabre, Apollo, Worldspan

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
* Click "train ticket notification checkbox" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page