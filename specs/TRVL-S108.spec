# TRVl-S108 Sabre BFM Sanity Flows

## TCID-1: Air only booking and verify the cat35 fares and fare lableing configuaration on Results page/review page/trip confirmation/trip details page

tags: Regression, AirOnly, cat35

* Goto Travel Site Url
* Login with "cat35"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |60               |

* Filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate page title in "Select Departure Flight" page
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
* Validate cat35 fares in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate cat35 fares in "Trip Details" page
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate cat35 fares in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-2: AHC booking and verify the cat35 fares and fare labeling configuration on Results page/review page/trip confirmation/trip details page

tags: Regression, AHC

* Goto Travel Site Url
* Login with "cat35"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |60               |


* Filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate page title in "Select Departure Flight" page
* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |PENALTY |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Validate cat35 fares in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate cat35 fares in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate cat35 fares in "Trip Details" page
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate cat35 fares in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-3: Fares with no restrictions search-Air only booking and verify the cat35 fares and fare lableing configuaration on Results page/review page/trip confirmation/trip details page

tags: Regression, AirOnly

* Goto Travel Site Url
* Login with "cat35"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type                 |
   |--------|---------|-----------|-----------------|--------------------------|
   |RT      |SFO      |LAX        |60               |Fares with no restrictions|

* Filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate page title in "Select Departure Flight" page
* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate details in "trip review" page
* Validate cat35 fares in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate cat35 fares in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate cat35 fares in "Trip Details" page
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate cat35 fares in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-4: Fares with no restrictions search-AHC booking and verify the cat35 fares and fare lableing configuaration on Results page/review page/trip confirmation/trip details page

tags: Regression, AHC

* Goto Travel Site Url
* Login with "cat35"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type                 |
   |--------|---------|-----------|-----------------|--------------------------|
   |RT      |SFO      |LAX        |60               |Fares with no restrictions|

* Filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate page title in "Select Departure Flight" page
* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |PENALTY |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Validate cat35 fares in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate cat35 fares in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate cat35 fares in "Trip Details" page
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate cat35 fares in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-5: Fares that allow refund search-Air only booking and verify the cat35 fares and fare lableing configuaration on Results page/review page/trip confirmation/trip details page

tags: Regression, AirOnly

* Goto Travel Site Url
* Login with "cat35"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type               |
   |--------|---------|-----------|-----------------|------------------------|
   |RT      |SFO      |LAX        |60               |Fares that allow refunds|

* Filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate page title in "Select Departure Flight" page
* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Validate details in "trip review" page
* Validate cat35 fares in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate cat35 fares in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate cat35 fares in "Trip Details" page
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate cat35 fares in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-6: Fares that allow refund search-AHC booking and verify the cat35 fares and fare lableing configuaration on Results page/review page/trip confirmation/trip details page

tags: Regression, AHC

* Goto Travel Site Url
* Login with "cat35"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type               |
   |--------|---------|-----------|-----------------|------------------------|
   |RT      |SFO      |LAX        |60               |Fares that allow refunds|

* Filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|

* Validate page title in "Select Departure Flight" page
* Select Departure Flight
* Validate page title in "Select Return Flight" page
* Select Return Flight
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |PENALTY |

* Select car type as "CAR"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Validate cat35 fares in "Review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Profile Card"
* Select payment card for "hotel" as "Profile Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate cat35 fares in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* Click "View Details" button
* Validate page title in "Trip Details" page
* Validate cat35 fares in "Trip Details" page
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate cat35 fares in "Trip Cancellation" page
* Validate details in "trip cancellation" page
