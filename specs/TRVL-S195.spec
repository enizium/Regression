#POPS-360-Air only Change flow with "Change Return only" option selected and validate the Select Return flight is displayed

## TC1: Book, Change and Cancel for Roundtrip Flights

tags: Regression, Set1B, AirOnly, XRAY-2344

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |40               |

* Search filtered flight based on below table data


   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Click on Change Return Flight Only
* Search RoundTrip flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |70               |

* Search filtered for RoundTrip flight based on below table data

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
