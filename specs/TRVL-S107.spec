# TRVL-S107: Verify that always lower fare is selected by default. 

## TC1: Verify that always lower fare is selected by default. 

tags: Regression, AirOnly, Set2, XRAY-1316

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |PHX      |LAX        |40               |

* Filtered flight based on below table data

   |Airlines|Stops      |Policy    |
   |--------|-----------|----------|
   |UA      |Any Stops  |In Policy |

* Validate lowest price is selected
* Select Departure Flight
* Validate lowest price is selected
* Select Return Flight
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page


## TC2: Verify that always lower fare is selected by default in prechange. 

tags: Regression, AirOnly, Set2, XRAY-1317

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |PHX      |LAX        |30              |

* Search filtered flight based on below table data

   |Airlines|Stops      |Policy    |
   |--------|-----------|----------|
   |UA      |Any Stops  |In Policy |

* Validate details in "trip review" page
* Click on "Change Trip"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |PHX      |LAX        |40               |

* Filtered flight based on below table data

   |Airlines|Stops      |Policy    |
   |--------|-----------|----------|
   |UA      |Any Stops  |In Policy |

* Validate lowest price is selected
* Select Departure Flight
* Validate lowest price is selected
* Select Return Flight
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page


## TC3: Verify that always lower fare is selected by default in post-change. 

tags: Regression, AirOnly, Set2, XRAY-1318

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |PHX      |LAX        |60               |

* Filtered flight based on below table data

   |Airlines|Stops      |Policy    |
   |--------|-----------|----------|
   |UA      |Any Stops  |In Policy |

* Select Departure Flight
* Select Return Flight
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter Project Code Additional Info
* Reason for not booking hotel
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |15               |

* Filtered flight based on below table data

   |Airlines|Stops      |Policy    |
   |--------|-----------|----------|
   |UA      |Any Stops  |In Policy |

* Validate lowest price is selected
* Select Departure Flight
* Validate lowest price is selected
* Select Return Flight
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* Get processId from trip confirmation page
* Cancel the "user26" Booking using API




