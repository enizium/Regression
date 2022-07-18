# DCS-11 :As a traveler I would like to book car service for multiple days with Multiday enabled country with pick-up & drop off address containing Chinese characters

## TC1 : As a traveler I would like to book car service for multiple days with Multiday enabled country with pick-up & drop off address containing Chinese characters

tags: CarServiceSanity

* Goto Travel Site Url
* Login with "user70"
* Search Car Services based on below table data

   |PickUpAddress                                                  |PickUpDate|PickUpBy|
   |---------------------------------------------------------------|----------|--------|
   |Hyatt Regency Shanghai, 88, 国定东路杨浦区上海市 China, 200433   |37        |12:00 PM|

* Select DropOff Address as "Multiple Day (Country Specific)"
* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty Cars LTD" provider
* Click "Select" button with "Dynasty Cars LTD" provider
* Verify details in "tripReview" carservice page
* Click "Continue" button on "Review" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate car service details in "TripConfirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Cancel booking from trip details page
* Validate page title in "Trip Cancellation" page
* Validate car service details in "TripCancellation" page


## TC2 : As a traveler I would like to book car service for multiple days with Multiday enabled country with pick-up & drop off address containing Chinese characters


tags: CarServiceRegression, XRAY-2111

* Goto Travel Site Url
* Login with "user70"
* Search Car Services based on below table data

   |PickUpAddress                                                  |PickUpDate|PickUpBy|
   |---------------------------------------------------------------|----------|--------|
   |Hyatt Regency Shanghai, 88, 国定东路杨浦区上海市 China, 200433   |45        |10:00 PM|

* Select DropOff Address as "Multiple Day (Country Specific)"
* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty Cars LTD" provider
* Click "Select" button with "Dynasty Cars LTD" provider
* Verify details in "tripReview" carservice page
* Click "Continue" button on "Review" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate car service details in "TripConfirmation" page
* Go to reservations and select the recently added trip
* "Change" car service booking
* Search Car Services based on below table data

   |PickUpDate|
   |----------|
   |40        |

* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty Cars LTD" provider
* Click "Select" button with "Dynasty Cars LTD" provider
* Verify details in "tripReview" carservice page
* Click "Continue" button on "Review" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate car service details in "TripConfirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Cancel booking from trip details page
* Validate page title in "Trip Cancellation" page
* Validate car service details in "TripCancellation" page

