# DCS-1: As a traveler, I would like to book/change/cancel the Car Service from Airport as pick up or Drop off locations

## TC1:  As a traveler, I would like to book/cancel the Car Service from Airport as pick up or Drop off locations

tags: CarServiceSanity

* Goto Travel Site Url
* Login with "user68"
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress|FlightDepartureDate|Airlines|FlightNo|
   |---------------------------------|--------------|-------------------|--------|--------|
   |555 Harrison St, SF, CA 94105, US|SFO           |16                 |UA      |857     |

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

## TC2:  As a traveler, I would like to book/change/cancel the Car Service from Airport as pick up or Drop off locations

tags: CarServiceRegression

* Goto Travel Site Url
* Login with "user68"
* Search Car Services based on below table data

   |PickUpAddress                    |DropOffAddress|FlightDepartureDate|Airlines|FlightNo|
   |---------------------------------|--------------|-------------------|--------|--------|
   |555 Harrison St, SF, CA 94105, US|SFO           |16                 |UA      |857     |

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

   |FlightDepartureDate|
   |-------------------|
   |18                |

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