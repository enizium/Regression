# SeatMap Verification Specification


## Shop for flights and select the seatmap, Verify if the seatmap module is loaded successfully.

tags: Sanity, Regression, AirOnly, Sabre, Apollo, Worldspan

* Goto Travel Site Url
* Login with "sanityUser2"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |90               |

* Filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Seatmap load validation

