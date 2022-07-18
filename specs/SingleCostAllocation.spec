# Single Cost Allocation Flows

## TC 1: Single Cost Allocation Flows

tags: Regression, AirOnly, SingleCost

* Goto Travel Site Url
* Login with "user63"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |


* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Select "Single" Cost Allocation 
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Delete the cookies
* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Go to view PNR XML page
* Enter ProcessId
* Read "New" PNR XML file
* Validate "Single" Cost Allocation in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user63"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page