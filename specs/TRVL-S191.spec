#TRVL-S191 - Sabre with Flex fares OFF 

## TC-1 : Sabre with Flex fares OFF →  GDS results must return Single fares and Southwest results must return multi fares

tags: Regression, Set1B, XRAY-1944

* Goto Travel Site Url
* Login with "user65"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |MDW      |DAL        |25               |

* Filtered flight based on below table data
   |Airlines|
   |--------|
   |DL      |

* Validate fare tier length    
* Filtered flight based on below table data
   |Airlines|
   |--------|
   |WN      |

* Validate fare tier length 
* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Select Return Flight
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


