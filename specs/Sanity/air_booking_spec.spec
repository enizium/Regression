# Air Booking Specifications


## Air Two Way Booking and Cancel

tags: Sanity, AirOnly, Sabre, Apollo, Worldspan, DevLocal

* Goto Travel Site Url
* Login with "sanityUser2"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

  |TripType |Departure|Destination|BookingAfterXDays|
  |---------|---------|-----------|-----------------|
  |RT       |SFO      |LAX        |90               |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |

* Validate details in "trip review" page
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


## Air One Way Booking and Cancel Scanario

tags: AirOnly, Sabre, Apollo, Worldspan

* Goto Travel Site Url
* Login with "user2"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

  |TripType |Departure|Destination|BookingAfterXDays|
  |---------|---------|-----------|-----------------|
  |OW       |SFO      |LAX        |90               |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page