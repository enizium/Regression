# DCS-9: As a C Suite executive, I would like to authorize my assistant to book a Car Service on my name(Delegate Flow)

## TC1: As a C Suite executive, I would like to authorize my assistant to book a Car Service on my name(Delegate Flow)

tags: CarServiceSanity

* Goto Travel Site Url
* Login with "user68"
* Select start assisting Delegate user Menu on Trip Planner Page
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress                   |PickUpDate|PickUpBy|Passengers|
   |---------------------------------|---------------------------------|----------|--------|----------|
   |555 Harrison St, SF, CA 94105, US|642 Harrison St, SF, CA 94107, US|42        |10:00 AM|2         |

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
* "Change" car service booking
* Search Car Services based on below table data

   |PickUpBy|
   |--------|
   |11:00 AM|

* Click "Continue" button on "TripPlanner" page
* Retrive car service details for "Dynasty & Car's" provider
* Click "Select" button with "Dynasty & Car's" provider
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
