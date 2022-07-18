# TRVL-S19: As a traveller, I would like to book/Change/cancel a personal trip to Cuba to attend a conference

## TCID-1: Book and Cancel a flight trip to Cuba with travel alert

tags: Regression, AirOnly, Set1A, XRAY-1862

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

  |TripType |Departure|Destination|BookingAfterXDays|
  |---------|---------|-----------|-----------------|
  |OW       |SFO      |HAV        |45               |

* Search filtered flight based on below table data

   |Airlines|Policy       |
   |--------|-------------|
   |B6      |Out of Policy|
   
* Click "air OOP continue" button
* Validate details in "trip review" page
* Validate travel alert is present on the review page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page


## TCID-2: Try to book a flight trip to Cuba with travel restriction and verify the travel alert message

tags: Regression, AirOnly, Set1A, XRAY-1863

* Goto Travel Site Url
* Login with "sanityUser1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

  |TripType |Departure|Destination|BookingAfterXDays|
  |---------|---------|-----------|-----------------|
  |OW       |SFO      |HAV        |25               |

* Validate Restricted country warning message on Trip Planner page