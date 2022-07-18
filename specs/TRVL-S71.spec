# TRVL-S71: Refine flight search

## TC1: Refine search by cabin class(Refine Flight)

tags: Regression, AirOnly, Set1B, XRAY-1252

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |SFO      |BOS        |40               |Coach    |

* Refine search by below table data

   |ClassType|
   |---------|
   |Coach    |


## TC2: Refine search by policy

tags: Regression, AirOnly, Set1B, XRAY-1242

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |BOS        |40               |

* Refine search by below table data

   |Policy       |
   |-------------|
   |Out of Policy|


## TC3: Refine search by Stops

tags: Regression, AirOnly, Set1B, XRAY-1243

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |BOS        |40               |

* Refine search by below table data

   |Stops |
   |------|
   |1 Stop|


## TC4: Refine search by Fare teir

tags: Regression, AirOnly, Set1B, XRAY-1245

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |BOS        |40               |

* Refine search by below table data

   |FareTier|
   |--------|
   |Standard|


## TC5: Refine search by nearby airports

tags: Regression, AirOnly, Set1B, XRAY-1251

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |BOS        |40               |

* Refine search by below table data

   |NearbyAirports|
   |--------------|
   |SFO           |


## TC6: Refine by airlines

tags: Regression, AirOnly, Set1B, XRAY-1253

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |BOS        |40               |

* Refine search by below table data

   |Airlines|
   |--------|
   |UA      |
