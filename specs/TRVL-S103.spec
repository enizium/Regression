# Verify One-Way selection should not have "Return Class" On trip Planner

## TC1: When a round trip is selected, user should see both class-Leaving and Class-Returning drop downs

tags: Regression, AirOnly

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data and verify return class

  |TripType |Departure|Destination|BookingAfterXDays|
  |---------|---------|-----------|-----------------|
  |RT       |SFO      |LAX        |100               |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC2: When selected "One-Way" tab. User should not see "Return Class" On trip Planner.

tags: Regression, AirOnly

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data and verify return class

  |TripType |Departure|Destination|BookingAfterXDays|
  |---------|---------|-----------|-----------------|
  |OW       |SFO      |LAX        |100               |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TC3: For a multidestination flow, there should be only one drop down for each segment

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page  select "Multi Destination" and click "AirOnly" segments
* Search MultiDestination flight based on below table data and verify return class

   |TripType|Departure|MultiLeg|Destination|BookingAfterXDays|
   |--------|---------|--------|-----------|-----------------|
   |MD      |SFO      |DEN     |LAX        |25               |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |
   
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
