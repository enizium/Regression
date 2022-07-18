# TRVL-S192-VOC-15815: Show the correct badges on the flight for refundable/non-refundable with different fare tier enabled along with fare basis and booking code validation.

## TC-1: Show the correct badges on the flight for non-refundable.

tags: Regression, Set1B, XRAY-2168

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

  |TripType |Departure|Destination|BookingAfterXDays|
  |---------|---------|-----------|-----------------|
  |RT       |SFO      |LAX        |90               |

* Search non refundable flight based on below table data

  |Airlines|Stops   |
  |--------|--------|
  |UA      |Non Stop|

* Validate details in "trip review" page
* Validate non refundable badge validation in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate non refundable badge validation in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC-2: Show the correct badges on the flight for refundable.

tags: Regression, Set1B, XRAY-1658

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

  |TripType |Departure|Destination|BookingAfterXDays|
  |---------|---------|-----------|-----------------|
  |RT       |SFO      |LAX        |90               |

* Search refundable flight based on below table data

  |Airlines|Stops   |
  |--------|--------|
  |UA      |Non Stop|

* Click "air OOP continue" button
* Validate details in "trip review" page
* Validate refundable badge validation in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Validate refundable badge validation in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page