# TRVL-S50: KAN Project - Hide TSA Hazmat message for a flight booking

## TCID 1 Air only booking and check that the TSA message should not be displayed after clicking on purchase button.

tags: Regression, AirOnly, Set2, XRAY-1108

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |99               |

* Search filtered flight based on below table data

   |Stops|Airlines|Policy   |
   |--------|---------|-----|
   |Non Stop|UA      |In Policy|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter traveler "User" contact details
* Enter Project Code Additional Info
* Reason for not booking hotel
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate TSA message pop up is not displayed
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page



## TCID 2 AHC booking and Check that the TSA message should not be displayed after clicking on purchase button

tags: Regression, AHC, Set2, XRAY-1111

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |150              |


* Search filtered flight based on below table data

   |Airlines|Policy   |Stops    |
   |--------|---------|---------|
   |UA      |In Policy|Non Stop |

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter traveler "User" contact details
* Enter Project Code Additional Info
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate TSA message pop up is not displayed
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page


## TCID 3 AHC booking with penalty hotel and Check that the TSA message should not be displayed after clicking on purchase button

tags: Regression, AHC, Set2, XRAY-1114

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops    |
   |--------|---------|---------|
   |UA      |In Policy|Non Stop|

* Filter Hotel based on below table data

   |Hotel Categories|
   |----------------|
   |Booking         |

* Select Hotel based on below table data

   |HotelType  |RoomType|
   |-----------|--------|
   |NA         |PENALTY |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate TSA message in pop up
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user26" Booking using API