# TRVL-S15: As a C Suite executive, I would like to book a seat in train, Hotel booked in another Amex reservation and Hertz car rental for 3 days, my project being Billable

## TC1: Book a seat in Train along with Hotel

tags: Regression, TH, Set2, XRAY-1037

* Goto Travel Site Url
* Login with "user23"
* Navigate to tripPlanner Page and select "TH" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |90               |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|GBT DIRECT|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2: Book a seat in Train and Car Rental only

tags: Regression, TC, Set2, XRAY-1036

* Goto Travel Site Url
* Login with "user23"
* Navigate to tripPlanner Page and select "TC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |100              |

* Select train with its information

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC3: Book a Train, Hotel and Car Rental only trip

tags: Regression, THC, Set2, XRAY-1035

* Goto Travel Site Url
* Login with "user23"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |100              |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |PREFERRED|GBT DIRECT|


* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user23" Booking using API
