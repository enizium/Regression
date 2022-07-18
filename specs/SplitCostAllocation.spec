# Split Cost Allocation Flows

## TC 1: Split Cost Allocation Flows

tags: Regression, AirOnly, SplitCost

* Goto Travel Site Url
* Login with "user62"
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
* Select "Split" Cost Allocation 
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
* Validate "Split" Cost Allocation in PNR XML
* Delete the cookies
* Goto Travel Site Url
* Login with "user62"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

