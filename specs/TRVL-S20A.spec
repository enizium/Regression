# TRVL-S20A : As a traveller, I would like to hire a EHI car for 5 days

## TC1 - Book a Non D & C EHI Car Rental

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-2124

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |90               |
* Select car type as "CAR"
* Click "Intermediate" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Change" the trip
* Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |90               |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC2 - Book Train & Non D & C EHI Car Rental

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-2126

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "TC" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |MAN      |LAN        |40               |
* Select train with its information
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter CVV code "VisaCard" for "rail" billing
* Click "Terms And Condition" button
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC3 - Book AHC Non D & C EHI Car Rental

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-2127

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |75               |
* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |PREFERRED|NA      |

* Select car type as "CAR"
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
* Validate details in "post trip cancellation" page

## TC4 - Book D & C EHI Car rental with same Delivery & collection locations

tags: Regression, UserScenarios, EHISpec, Set7

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Select "Same" Delivery & collection locations on Trip Planner page
* Select car type as "CAR"
* Click "Intermediate" button
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |90               |
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC5 - Book D & C EHI Car rental with Different Delivery & collection locations

tags: Regression, UserScenarios, EHISpec, Set7

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Select "Different" Delivery & collection locations on Trip Planner page
* Select car type as "CAR"
* Click "Intermediate" button
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
* Validate details in "trip cancellation" page

## TC6 - Add a Non D & C EHI Car rental to existing Flight booking (Post Change Flow)

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-2129

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |30               |
* Search filtered flight based on below table data

   |Airlines|Policy   |
   |--------|---------|
   |UA      |In Policy|
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation page" page
* Get processId from trip confirmation page
* Add "Car Rental" from Add Service using URL
* Click "Search" button
* Select car type as "CAR"
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
* Validate details in "trip cancellation" page

## TC7 - Add a Non D & C EHI Car rental to existing Hotel booking (Post Change Flow)

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-2130

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |75               |77                |

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |PREFERRED|NA      |
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* Add "Car Rental" from Add Service using URL
* Click "Search" button
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
* Validate details in "trip cancellation" page

## TC8 - Book Again a Non D & C EHI Car Rental

tags: Regression, UserScenarios, EHISpec, Set7, XRAY-2128

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |90               |
* Select car type as "CAR"
* Click "Intermediate" button
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
   |RT      |90               |

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

## TC9 - Book Again D & C EHI Car rental with same Delivery & collection locations

tags: Regression, UserScenarios, EHISpec, Set7

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Select "Same" Delivery & collection locations on Trip Planner page
* Select car type as "CAR"
* Click "Intermediate" button
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
   |RT      |95               |

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

## TC10- Configured car types should be displayed as in-policy and remaining as out-policy

tags: Regression, UserScenarios, EHISpec, Set7

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |60               |

* Select car type as "CAR"
* Click "Intermediate" button
* Validate "Intermediate" Policy
* Click "Economy" button
* Validate "Economy" Policy
* Click "Compact" button
* Validate "Compact" Policy
* Click "Standard" button
* Validate "Standard" Policy
* Click "Economy" button
* Validate "Economy" Policy
* Click "Premium" button
* Validate "Premium" Policy
* Click "Luxury" button
* Validate "Luxury" Policy
