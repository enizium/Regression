# VOC-151337 : Hotel and Car rental with specific location(Rome)

## TC1 - Book Hotel and car rental with specific location(Rome)

tags: Regression, UserScenarios, EHISpec, Set7

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "HC" segments
* Search Hotel based on below table data

   |HotelSearchValue   |CheckInAfterXDays|CheckOutAfterXDays|
   |-------------------|-----------------|------------------|
   |Fiumicino Roma , IT|120              |125               |

* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |Rome          |Rome           |100              |

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate the locations in review page

## TC2 : EHI AHC flow on specific location

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-1950


* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |Rome       |40               |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate the locations in review page

## TC3 -[VOC-15996]: Verify Delivery and Collection addresses are displayed in Select Car Rental page when different tab or car class is selected

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-1639

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Check and Select "Delivery" Address
* Check and Select "Collection" Address
* Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |99               |

* Get Delivery and Collection address
* Click "Compact" button
* Validate Delivery and Collection address
* Click "Mini" button
* Validate Delivery and Collection address
* Click "Intermediate" button
* Validate Delivery and Collection address

## TC4: Verify Delivery and Collection addresses are displayed in Select Car Rental page when different tab or car class is selected

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-1179

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Check and Select "Delivery" Address
* Check and Select "Collection" Address
* Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |99               |

* Get Delivery and Collection address
* Select car type as "SUV"
* Validate Delivery and Collection address
* Select car type as "CAR"
* Validate Delivery and Collection address
* Select car type as "VAN"
* Validate Delivery and Collection address

## TC5: Verify pickup and dropoff addresses are displayed in Select Car Rental page when different tab or car class is selected for off airport locations

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-1181

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation                      |BookingAfterXDays|
   |------------------------------------|-----------------|
   |Heathrow Airport (LHR), Longford, UK|90               |

* Click car rental pick up select button
* Get Delivery and Collection address
* Click "Compact" button
* Validate Delivery and Collection address
* Click "Mini" button
* Validate Delivery and Collection address
* Click "Intermediate" button
* Validate Delivery and Collection address

## TC6: Verify pickup and dropoff addresses are displayed in Select Car Rental page when different tab or car class is selected for airport locations

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-1180

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation                      |BookingAfterXDays|
   |------------------------------------|-----------------|
   |Heathrow Airport (LHR), Longford, UK|90               |

* Click car rental pick up select button
* Get Delivery and Collection address
* Select car type as "CAR"
* Validate Delivery and Collection address
* Select car type as "VAN"
* Validate Delivery and Collection address

## TC7: Verify the correct pick up and drop off locations are populated when pre changing a trip from search results page for off airport locations

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-1326

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation                                                     |BookingAfterXDays|
   |-------------------------------------------------------------------|-----------------|
   |SFO Rental Car Center, North McDonnell Road, San Francisco, CA, USA|90               |

* Click car rental pick up select button
* Get Delivery and Collection address
* Select car type as "CAR"
* Validate Delivery and Collection address
* Click "Change"
* Search Car Rental based on below table

   |PickUpLocation                                    |
   |--------------------------------------------------|
   |SFO Terminal 3 Concourse E, San Francisco, CA, USA|

* Click car rental pick up select button
* Get Delivery and Collection address
* Select car type as "CAR"
* Validate Delivery and Collection address
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in " trip cancellation" page

## TC8: Verify the correct pick up and drop off locations are populated when pre changing a trip from search results page for airport locations

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-1325

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|BookingAfterXDays|
   |--------------|-----------------|
   |SFO           |90               |

* Get Delivery and Collection address
* Select car type as "CAR"
* Validate Delivery and Collection address
* Click "Change"
* Search Car Rental based on below table

   |BookingAfterXDays|
   |-----------------|
   |92               |

* Get Delivery and Collection address
* Select car type as "CAR"
* Validate Delivery and Collection address
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in " trip cancellation" page

## TC9: Verify the correct delivery address is populated for a new reservation

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-1942

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|BookingAfterXDays|
   |--------------|-----------------|
   |SFO           |90               |

* Get Delivery and Collection address
* Select car type as "CAR"
* Validate Delivery and Collection address
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Book Again" the Booking using URL
* Enter book again details based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |55               |

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
