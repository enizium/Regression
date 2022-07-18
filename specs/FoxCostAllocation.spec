#Fox Cost Allocation Flows

## TC 1: Fox Cost Allocation Flows

tags: Regression, AirOnly, FoxCost

* Goto Travel Site Url
* Login with "user61"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Select "Fox" Cost Allocation
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
* Validate Cost Allocation in "purchase page"
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
* Validate Cost Allocation in "PNR XML"
* Delete the cookies
* Goto Travel Site Url
* Login with "user61"
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC 2: Fox Cost Allocation Flows pre change

tags: Regression, AirOnly, FoxCost

* Goto Travel Site Url
* Login with "user61"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Select "Fox" Cost Allocation
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |


* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click on "Change Trip"
* Validate Fox cost allocation is not displayed
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |110              |


* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Validate Cost Allocation in "purchase page"
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
* Validate Cost Allocation in "PNR XML"
* Delete the cookies
* Goto Travel Site Url
* Login with "user61"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC 3: Fox Cost Allocation Flows post change

tags: Regression, AirOnly, FoxCost

* Goto Travel Site Url
* Login with "user61"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Select "Fox" Cost Allocation
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
* Validate Cost Allocation in "purchase page"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Select "Fox" Cost Allocation
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |110              |

* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate Cost Allocation in "purchase page"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Delete the cookies
* Goto dashboard Url
* Login to console with "techsupport"
* Click "Support" tab
* Go to view PNR XML page
* Enter ProcessId
* Read "Change" PNR XML file
* Validate Cost Allocation in "PNR XML"
* Delete the cookies
* Goto Travel Site Url
* Login with "user61"
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page