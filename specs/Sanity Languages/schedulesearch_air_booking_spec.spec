# Delegate user: Schedule Search Air Booking Spec

## Schedule Search Air Two Way Booking & Cancel Scenario with Delegate user

tags: AirOnly, Sabre, Apollo, Worldspan, Multilanguage 

* Goto Travel Site Url
* Login with "sanityUser2"
* Select start assisting Delegate user Menu on Trip Planner Page
* Navigate to tripPlanner Page and select "AirOnly" segments
* Select Air Search By Schedule
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Airlines|
   |--------|
   |UA      |

* Click trip review continue button
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Click "Purchase" button
* Go to reservations and select the recently added trip
* "Cancel" the trip
