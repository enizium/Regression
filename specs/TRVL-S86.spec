# TRVL-S86: Eager Flight Search - Book/Change/Cancel

## TCID-1: Eager Flight Search - Book/change/Cancel

tags: Regression, AirOnly, Set8, XRAY-1271

* Goto Travel Site Url
* Login with "sessionUser"
* Select Travel
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAS        |85               |
* Handle Additional Information
* Search filtered flight based on below table data

   |stops   |
   |--------|
   |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Company Reporting (Cost Allocation)
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |90               |

* Handle Additional Information
* Search filtered flight based on below table data

   |stops   |
   |--------|
   |Non Stop|
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Company Reporting (Cost Allocation)
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the original trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

