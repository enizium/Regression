# TRVL-S14: As a C Suite executive, I would like to book a seat in VIA RAIL/train and my hotel was already booked by Host client/ Group coordinator, Project being Billable.and covering all the Train combinations with Custom fields collection

## TC1:As a C Suite executive, I would like to book/Change/Cancel a In Policy train seat using site payment card

tags: Regression, TrainOnly, Set2, XRAY-1033

* Goto Travel Site Url
* Login with "user18"
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |Ottawa   |Toronto    |60               |Coach    |

* Select train with its information
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
* "Change" the trip
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |79               |

* Select train with its information
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Check Train Ticket Notification
* Select payment card for "rail" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC2:As a C Suite executive, I would like to book/Change/Cancel a Out Of Policy train seat using site payment card

tags: Regression, TH, Set2, XRAY-1032

* Goto Travel Site Url
* Login with "user18"
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |Ottawa   |Toronto    |60               |First    |

* Select train with its information
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
* "Change" the Booking using URL
* Search train based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |79              |

* Select train with its information
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Check Train Ticket Notification
* Select payment card for "rail" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC3:As a C Suite executive, I would like to book/Cancel a In Policy train and hotel seat using Profile Card

tags: Regression, TC, Set2, XRAY-1030

* Goto Travel Site Url
* Login with "user18"
* Navigate to tripPlanner Page and select "TH" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |Ottawa   |Toronto    |80               |Coach    |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Enter Project Code Additional Info
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user18" Booking using API

## TC4:As a C Suite executive, I would like to book/Cancel a Out Of Policy train and hotel seat using Profile Card

tags: Regression, TrainOnly, Set2, XRAY-1034

* Goto Travel Site Url
* Login with "user18"
* Navigate to tripPlanner Page and select "TH" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |Ottawa   |Toronto    |60               |First    |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Enter Project Code Additional Info
* Enter CVV code "VisaCard" for "rail" billing
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user18" Booking using API

## TC5:As a C Suite executive, I would like to book/cancel a In Policy train and Hertz carrental seat using OTFOP

tags: Regression, Set2, XRAY-1031, XRAY-1029

* Goto Travel Site Url
* Login with "user18"
* Navigate to tripPlanner Page and select "TC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |Ottawa   |Toronto    |60               |Coach    |

* Select train with its information

* Select car type as "SUV"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Select payment card for "rail" as "OTFOP"
* Click "Purchase" button
* Select cardType as "MasterCard"
* Select payment card for "rail" as "OTFOP"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user18" Booking using API

