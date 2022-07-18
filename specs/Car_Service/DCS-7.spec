# DCS-7: As a traveler, I should be able to add multiple stops(max 2) with US addresses

## TC1:  As a traveler, I should be able to add multiple stops(max 2) with US addresses

tags: CarServiceRegression

* Goto Travel Site Url
* Login with "user68"
* Select DropOff Address as "Drive as directed..."
* Search Car Services based on below table data

   |PickUpAddress                                |Stops                                   |NextStops                                    |PickUpDate|PickUpBy|Hours|Passengers|
   |---------------------------------------------|----------------------------------------|---------------------------------------------|----------|--------|-----|----------|
   |333 Meadowlands Pkwy, Secaucus, NJ 07094, USA|222 Meadowlands Pkwy, Secaucus, NJ 07094|111 Meadowlands Pkwy, Secaucus, NJ 07094, USA|60        |10:00 AM|3    |3         |

* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty & Car's" provider
* Click "Select" button with "Dynasty & Car's" provider
* Verify details in "tripReview" carservice page for DropOff Address Options
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
