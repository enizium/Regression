# DCS-6: As a traveler, I would like to book/change/cancel the Car Service with different payment modes

## TC1:  As a traveler, I would like to book/change/cancel the Car Service with ProfileCard payment modes

tags: CarServiceRegression

* Goto Travel Site Url
* Login with "user70"
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|
   |---------------------------------|---------------------------------|----------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|60        |9:40 AM |

* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty Cars LTD" provider
* Click "Select" button with "Dynasty Cars LTD" provider
* Verify details in "tripReview" carservice page
* Click "Continue" button on "Review" page
* Enter Trip Name
* Select "carService" payment card for car as "ProfileCard"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate car service details in "TripConfirmation" page
* Go to reservations and select the recently added trip
* "Change" car service booking
* Search Car Services based on below table data

   |PickUpBy|
   |--------|
   |9:30 AM |

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

