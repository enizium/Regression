# Train Booking

## Train Only Hold and Cancel Scenario

tags: TrainOnly, Sabre, Apollo, Worldspan, DevLocal, Multilanguage 

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Search train based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |BAL      |BOS        |90               |

* Select departure and return train
* Click on hold the trip button
* Enter Trip Name
* Click "hold trip continue" button
* Go to reservations and select the recently added trip
* "Cancel" the trip
