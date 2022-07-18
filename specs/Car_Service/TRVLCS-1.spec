# Automate test cases for TRVLCS-1

## TC-1: As a traveler, I would like to add car service for my trip, - from my home to airport, - from airport to my home

tags: CarServiceRegression, XRAY-2113

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |120              |

* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Enter Trip Name
* Validate page title in "Purchase Trip" page
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Add CarService to the trip
* Search first Services based on below table data

   |PickUpAddress                    |
   |---------------------------------|
   |555 Harrison St, SF, CA 94105, US|
* Select last segment from Car Services
* Search last Services based on below table data

   |DropOffAddress                   |
   |---------------------------------|
   |642 Harrison St, SF, CA 94107, US|

* Click continue button for car service
* Retrive car pickUp service details for "Dynasty & Car's" provider
* Click "Select" button with "Dynasty & Car's" provider
* Retrive car dropOff service details for "Dynasty & Car's" provider
* Click "Select" button with "Dynasty & Car's" provider
* Verify details in "tripReview" page for car service
* Click Continue button on trip Review page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate car service details in "TripConfirm" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Cancel booking from trip details page
* Validate page title in "Trip Cancellation" page