# "KAN Project - CSS Verification


## TC1: Verify the CSS format of the Trip planer page for Hotel Only
tags : regression, gaikocustomfields, Hotel Only

* Goto Travel Site Url
* Login with "user23"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* validate tripplanner page color
* Search Hotel based on below table data and validate search button css

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |LHR             |130              |145               |

* Select Hotel based on below table data

   |HotelType|RoomType  |
   |---------|----------|
   |GBT      |GBT Direct|

* Validate details in "trip review" page
* Validate trip review css value
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name and validate css
* Enter traveler "User" contact details
* Enter Project Code Additional Info
* Click "Purchase" button
* Click Continue on Travel Acknowledgment and Validate css
* Validate page title in "Trip Confirmation" page
* Validate details in tripconfirmation page and validate css
* Go to reservations and select the recently added trip and validate css
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in tripCancellation page and validate css



## TC2: Verify the CSS format of the Trip planer page for Air Only	
tags : regression, gaikocustomfields, AirOnly

* Goto Travel Site Url
* Login with "user23"
* Navigate to tripPlanner Page and select "AirOnly" segments
* validate tripplanner page color
* Search flight based on below table data and validate search button css

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |150              |

* Search filtered flight based on below table data and validate css class

   |Airlines|Stops      |Policy    |
   |--------|-----------|----------|
   |UA      |Any Stops  |In Policy |

* Validate details in "trip review" page
* Validate trip review css value
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name and validate css
* Enter traveler "User" contact details
* Enter traveler "User" gender
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate TSA message pop up is not displayed
* Validate details in tripconfirmation page and validate css
* Go to reservations and select the recently added trip and validate css
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in tripCancellation page and validate css


## TC3: Verify the CSS format of the Trip planer page for Car Only	

* Goto Travel Site Url
* Login with "user23"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* validate tripplanner page color
* Search Car based on below table data and validate search button css

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |145              |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Validate trip review css value
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name and validate css
* Enter traveler "User" contact details
* Enter Project Code Additional Info
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate TSA message pop up is not displayed
* Validate details in tripconfirmation page and validate css
* Go to reservations and select the recently added trip and validate css
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in tripCancellation page and validate css



## TC4: Verify the CSS format of the Trip planer page for Train Only

* Goto Travel Site Url
* Login with "user23"
* Navigate to tripPlanner Page and select "TrainOnly" segments
* validate tripplanner page color
* Search Train based on below table data and validate search button css

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |NYP      |BOS        |108              |

* Select train with its information
* Validate details in "trip review" page
* Validate trip review css value
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name and validate css
* Enter traveler "User" contact details
* Enter Project Code Additional Info
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate TSA message pop up is not displayed
* Validate details in tripconfirmation page and validate css
* Go to reservations and select the recently added trip and validate css
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in tripCancellation page and validate css

