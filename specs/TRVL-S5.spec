# TRVL-S5: As a traveler, I would like to book a ATOC train, along with an in policy private rate hotel and compact car and use site payment card for my Train.

## TC1: Book, Change and Cancel in-policy train, PRH and Compact using site payment card for my Train

tags: Regression, THC, ATOCRail, Set1A, XRAY-981

* Goto Travel Site Url
* Login with "user15"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |YRK      |LIV        |80               |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   | NA      |CANCELLABLE|


* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Terms And Condition" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page

## TC2: Book, Change and Cancel OOP-policy train, PRH and Compact using site payment card for my Train

tags: Regression, THC, ATOCRail, Set1A , XRAY-982

* Goto Travel Site Url
* Login with "user15"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |YRK      |LIV        |80               |First    |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|


* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Terms And Condition" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page


## TC3: Book, Change and Cancel OOP-policy train, PRH and Compact using personal payment card for my Train

tags: Regression , THC, ATOCRail, Set1A, XRAY-979

* Goto Travel Site Url
* Login with "user15"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |YRK      |LIV        |80               |First    |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|


* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Enter CVV code "VisaCard" for "rail" billing
* Click "Terms And Condition" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page

## TC4: Book and cancel OOP-policy train, PRH and Compact using OTFOP for my Train

tags: Regression, THC, ATOCRail, Set1A, XRAY-980

* Goto Travel Site Url
* Login with "user15"
* Navigate to tripPlanner Page and select "THC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |YRK      |LIV        |80               |First    |

* Select train with its information
* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|


* Select car type as "CAR"
* Click "Compact" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "rail" as "OTFOP"
* Select payment card for "hotel" as "OTFOP"
* Select cardType as "MasterCard"
* Click "Terms And Condition" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
