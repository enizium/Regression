# Delegate user: Schedule Search Air Booking Spec

## Schedule Search Air Two Way Booking & Cancel Scenario with Delegate user

tags: Sanity, Regression, AirOnly, Sabre, Apollo, Worldspan 

* Goto Travel Site Url
* Login with "sanityUser2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Select Air Search By "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Validate Air Search By "Schedule"
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