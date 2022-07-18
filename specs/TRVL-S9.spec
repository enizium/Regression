#  TRVL-S9: As a traveler, I would like to hire the SUV for a week. Use personal payment card

##  TC1: Book, Change and Cancel Inpolicy SUV using site payment card

tags:  Regression, CarRentalOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1011

* Goto Travel Site Url
* Login with "user9"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |140              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Enter Trip Name
*  Select payment card for "car" as "Site Payment Card"
*  Click "Purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "trip confirmation" page
*  Validate car rental Details and Rules Popup
*  Go to reservations and select the recently added trip
*  "Change" the trip
*  Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |150              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "post trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Click "post purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "post trip confirmation" page
*  Validate car rental Details and Rules Popup
*  Go to reservations and select the recently added trip
*  Click "View Details" button
*  Validate page title in "Trip Details" page
*  Validate car rental Details and Rules Popup
*  "Cancel" the trip
*  Validate page title in "Trip Cancellation" page
*  Validate details in "post trip cancellation" page

##  TC2: Book, Change and Cancel Inpolicy SUV using otfop

tags:  Regression, CarRentalOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1012 

* Goto Travel Site Url
* Login with "user9"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |145              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Enter Trip Name
*  Select payment card for "car" as "OTFOP"
*  Select cardType as "MasterCard"
*  Click "Purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "trip confirmation" page
*  Get processId from trip confirmation page
*  "Change" the Booking using URL
*  Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |140              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "post trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Click "post purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "post trip confirmation" page
*  "Cancel" the Booking using URL
*  Validate page title in "Trip Cancellation" page
*  Validate details in "post trip cancellation" page

##  TC3: Book, Change and Cancel OOP SUV using one time form of payment

tags:  Regression, CarRentalOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1009

* Goto Travel Site Url
* Login with "user10"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |125              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Enter Trip Name
*  Select payment card for "car" as "OTFOP"
*  Select cardType as "MasterCard"
*  Click "Purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "trip confirmation" page
*  Get processId from trip confirmation page
*  "Change" the Booking using URL
*  Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |128              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "post trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Click "post purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user10" Booking using API

##  TC4: Book, Change and Cancel Inpolicy SUV using profile card

tags:  Regression, CarRentalOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1010

* Goto Travel Site Url
* Login with "user9"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |145              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Enter Trip Name
*  Select payment card for "car" as "Site Payment Card"
*  Click "Purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "trip confirmation" page
*  Get processId from trip confirmation page
*  "Change" the Booking using URL
*  Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |140              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "post trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Click "post purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user9" Booking using API

##  TC5: Book, Change and Cancel OOP SUV using profile card

tags:  Regression, CarRentalOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1007

* Goto Travel Site Url
* Login with "user10"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |145              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Enter Trip Name
*  Select payment card for "car" as "Site Payment Card"
*  Click "Purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "trip confirmation" page
*  Get processId from trip confirmation page
*  "Change" the Booking using URL
*  Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |140              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "post trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Click "post purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user10" Booking using API

##  TC6: Book, Change and Cancel Inpolicy SUV with no payment card

tags:  Regression, CarRentalOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1008

* Goto Travel Site Url
* Login with "user9"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |SFO           |SFO            |145              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Enter Trip Name
*  Click "Purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "trip confirmation" page
*  Get processId from trip confirmation page
*  "Change" the Booking using URL
*  Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |140              |
*  Select car type as "SUV"
*  Retrieve selected car info and click on "Select" button
*  Validate details in "post trip review" page
*  Click "trip review continue" button
*  Validate page title in "Purchase Trip" page
*  Click "post purchase" button
*  Validate page title in "Trip Confirmation" page
*  Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user9" Booking using API

## TC7: Car Rental off airport (location Search) based bookings

tags: Regression, CarRentalOnly, Set1A, LiveBuildSabreSet1, LiveBuildApolloSet1, LiveBuildWorldspanSet1, XRAY-1013

* Goto Travel Site Url
* Login with "user9"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation|DropOffLocation|BookingAfterXDays|
   |--------------|---------------|-----------------|
   |NYP           |BBY            |105              |

* Click car rental pick up select button
* Click car rental Drop off select button
* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click on "Change Trip"
* Search Car Rental based on below table data

   |BookingAfterXDays|
   |-----------------|
   |110              |

* Click car rental pick up select button
* Click car rental Drop off select button
* Select car type as "SUV"
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
   |115              |

* Click car rental pick up select button
* Click car rental Drop off select button
* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "post purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user9" Booking using API