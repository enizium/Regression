# DCS-8: As a Traveler I should be able to add Multiple Car service segments to my Trip

## TC1:  As a Traveler I should be able to add Multiple Car service segments to my Trip[Pre-Change flow]

tags: CarServiceRegression

* Goto Travel Site Url
* Login with "user68"
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|
   |---------------------------------|---------------------------------|----------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|40        |10:00 AM|

* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty Cars LTD" provider
* Click "Select" button with "Dynasty Cars LTD" provider
* Verify details in "tripReview" carservice page
* Add car service from RTP Page
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|
   |---------------------------------|---------------------------------|----------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|45        |10:00 AM|

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

## TC2: As a Traveler I should be able to add Multiple Car service segments to my Trip[Post-Change flow]

tags: CarServiceRegression

* Goto Travel Site Url
* Login with "user68"
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|
   |---------------------------------|---------------------------------|----------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|40        |10:00 AM|

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
* Click "AddServices" button on "Reservation" page
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|
   |---------------------------------|---------------------------------|----------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|45        |10:00 AM|

* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty Cars LTD" provider
* Click "Select" button with "Dynasty Cars LTD" provider
* Verify details in "tripReview" carservice page
* Click "Continue" button on "Review" page
* Select "carService" payment card for car as "ProfileCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate car service details in "TripConfirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Cancel booking from trip details page
* Validate page title in "Trip Cancellation" page
* Validate car service details in "TripCancellation" page
