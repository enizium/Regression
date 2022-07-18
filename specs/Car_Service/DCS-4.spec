# Car Service

## TC1: As a traveler, I would like change my existing SEDAN Car service reservation to SUV with same provider

tags: CarServiceRegression

* Goto Travel Site Url
* Login with "user68"
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|
   |---------------------------------|---------------------------------|----------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|42        |10:00 AM|

* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty & Car's" provider
* Click "Select" button with "Dynasty & Car's" provider
* Verify details in "tripReview" carservice page
* Click "Continue" button on "Review" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate car service details in "TripConfirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Trip change car service booking
* Validate car service details in change link
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpBy|
   |---------------------------------|---------------------------------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|11:00 AM|

* Click "Continue" button on "TripDetails" page
* Click vehicle Type filter and select "SUV" car
* Retrive car service details for "Dynasty & Car's" provider
* Select the SUV car
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

## TC2- As a traveler, I would like change my existing SUV Car service reservation to SEDAN car with different provider

tags: CarServiceRegression

* Goto Travel Site Url
* Login with "user69"
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|
   |---------------------------------|---------------------------------|----------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|42        |10:00 AM|

* Click "Continue" button on "TripPlanner" page
* Click vehicle Type filter and select "SUV" car
* Retrive car service details for "Dynasty & Car's" provider
* Select the SUV car
* Verify details in "tripReview" carservice page
* Click "Continue" button on "Review" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate car service details in "TripConfirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Trip change car service booking
* Validate car service details in change link
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpBy|
   |---------------------------------|---------------------------------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|11:00 AM|

* Click "Continue" button on "TripDetails" page
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