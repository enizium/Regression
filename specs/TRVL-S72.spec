# TRVL-S72: As a traveler, I would like to book a flight and sort them by arrival date, departure date, price/cost and duration

## TC1: Verify the sort functionality for sort by arrival date, departure date, price/cost and duration

tags: Regression, AHC, Set1B, XRAY-1254

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |LAX      |PHX        |40               |

* Sort flight by "Cost" and validate result is sorted
* Sort flight by "Departure" and validate result is sorted
* Sort flight by "Arrival" and validate result is sorted
* Sort flight by "Duration" and validate result is sorted