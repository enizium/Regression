# THC Hold and Cancel Spec

## THC Hold and Cancel Scenario:

tags: Regression, THC, Sabre, Apollo, Worldspan

* Goto Travel Site Url
* Login with "user44"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |130              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "Hold This Trip" button
* Validate page title in "Hold Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Click "hold trip continue" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
