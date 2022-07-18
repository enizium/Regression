# TRVLCS-2 : As a traveler, I would like to add car service for my trip, - from my home to airport, - from airport to my stay, - from my stay back to airport - from airport to my home

## TC1 : As a traveler, I would like to add car service for my trip, - from my home to airport, - from airport to my stay, - from my stay back to airport - from airport to my home

tags : CarServiceRegression,XRAY-2114

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AH" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |60               |


* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |NA       |CANCELLABLE|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Go to reservations and select the recently added trip
* Add CarService to the trip
* Search Car Services based on below table data

   |PickUpAddress                    |
   |---------------------------------|
   |555 Harrison St, SF, CA 94105, US|
* Select all segment from Car Services
* Search Car Services based on below table data

   |DropOffAddress                   |
   |---------------------------------|
   |642 Harrison St, SF, CA 94107, US|

* Click "Continue" button on "TripPlanner" page
* Retrive multiple carservice and click select for "Dynasty Cars LTD" provider
* Verify details in "tripReview" for multiple carservice 
* Click "Continue" button on "Review" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate car service details in "TripConfirmation" page for multiple carservice
* Go to reservations and select the recently added trip
* Click "View Details" button
* Cancel booking from trip details page
* Validate page title in "Trip Cancellation" page
* Validate car service details in "TripCancellation" page for multiple carservice
