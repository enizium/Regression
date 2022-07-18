# DCS-5 : As a traveler, I would like change my existing car service with different dates/pick up timings/Car service provider/Passengers/Pick-up & Drop off addresses

## TC1 : As a traveler, I would like to change existing car service with different dates/pick up timings/Car service provider/Passengers/Pick-up and Drop off addresses

tags: CarServiceRegression, XRAY-2105

* Goto Travel Site Url
* Login with "user69"
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|
   |---------------------------------|---------------------------------|----------|--------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|60        |10:00 AM|

* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty Cars LTD" provider
* Click "Select" button with "Dynasty Cars LTD" provider
* Verify details in "tripReview" carservice page
* Prechange trip for car service
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|
   |---------------------------------|---------------------------------|----------|--------|
   |642 Harrison St, SF, CA 94107, US|555 Harrison St, SF, CA 94105, US|50        |12:00 PM|

* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty & Car's" provider
* Click "Select" button with "Dynasty & Car's" provider
* Verify details in "tripReview" carservice page
* Click "Continue" button on "Review" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Cancel booking from trip details page
* Validate page title in "Trip Cancellation" page
* Validate car service details in "TripCancellation" page
