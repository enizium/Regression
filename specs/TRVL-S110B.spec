# POPS-233:

## TC1: Verify booking a new hotel from the deeplink on the Trip Confirmation page is successful for a AH one way trip with failed hotel.

tags: Regression , XRAY-1527 , XRAY-1515

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AH" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |OW      |SFO      |LAX        |50               |


* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate messages after hotel booking is failed
* CLick on differnt hotel in same vicinty
* Verify the dates and location are populated
* Select match my hotel dates and search again
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Site Payment Card"
* Remove FAIL-ME if exists after rebooking
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC2: Verify booking a new hotel from the deeplink on the Trip Confirmation page is successful for a AH round trip with failed hotel.

tags: Regression , XRAY-1528, XRAY-1514 ,XRAY-1516

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AH" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |50               |


* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate messages after hotel booking is failed
* CLick on differnt hotel in same vicinty
* Verify the dates and location are populated
* Select match my hotel dates and search again
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Site Payment Card"
* Remove FAIL-ME if exists after rebooking
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC3: Verify booking a new hotel from the deeplink on the Trip Confirmation page is successful for a AHC one way trip with failed hotel.

tags: Regression , XRAY-1529, XRAY-1512

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |OW      |SFO      |LAX        |40               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate messages after hotel booking is failed
* CLick on differnt hotel in same vicinty
* Verify the dates and location are populated
* Select match my hotel dates and search again
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Site Payment Card"
* Remove FAIL-ME if exists after rebooking
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC4: Verify booking a new hotel from the deeplink on the Trip Confirmation page is successful for a AHC round trip with failed hotel.

tags: Regression , XRAY-1530, XRAY-1513,XRAY-1515

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |40               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate messages after hotel booking is failed
* CLick on differnt hotel in same vicinty
* Verify the dates and location are populated
* Select match my hotel dates and search again
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Site Payment Card"
* Remove FAIL-ME if exists after rebooking
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC5: Verify Keep original trip option after clicking on "Book a different hotel in the same vicinity/city" for a AH round trip with hotel failure.

tags: Regression , XRAY-1532

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AH" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |50               |


* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate messages after hotel booking is failed
* CLick on differnt hotel in same vicinty
* Verify the dates and location are populated
* Click Search button
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Site Payment Card"
* Remove FAIL-ME if exists after rebooking
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC6: Verify Keep original trip option after clicking on "Book a different hotel in the same vicinity/city" for a AHC round trip with hotel failure.

tags: Regression , XRAY-1535

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |40               |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate messages after hotel booking is failed
* CLick on differnt hotel in same vicinty
* Verify the dates and location are populated
* Click Search button
* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Select payment card for "hotel" as "Site Payment Card"
* Remove FAIL-ME if exists after rebooking
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TC7 : Validate new itinerary layout is displayed on the trip confirmation page for a held AHH round trip with both failed hotels

tags: Regression , XRAY-1524

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AHH" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Hotel2|
   |--------|---------|-----------|-----------------|------|
   |RT      |SFO      |LAX        |40               |BOS   |

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" on both as hotel as loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Verify the new layout after hotel faliure



## TC8 : Validate new itinerary layout is displayed on the trip confirmation page for a held AHH round trip with one failed hotels

tags: Regression , XRAY-1522

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AHH" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Hotel2|
   |--------|---------|-----------|-----------------|------|
   |RT      |SFO      |LAX        |40               |BOS|

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Verify the new layout after hotel faliure


## TC9 : Validate new itinerary layout is displayed on the trip confirmation page for a held AHHC round trip with one failed hotels

tags: Regression , XRAY-1520

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AHHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Hotel2|
   |--------|---------|-----------|-----------------|------|
   |RT      |SFO      |LAX        |40               |BOS   |
* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Verify the new layout after hotel faliure
* Validate messages after hotel booking is failed

## TC10 : Validate new itinerary layout is displayed on the trip confirmation page for a held AHHC round trip with two failed hotels

tags: Regression , XRAY-1515

* Goto Travel Site Url
* Login with "user66"
* Navigate to tripPlanner Page and select "AHHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Hotel2|
   |--------|---------|-----------|-----------------|-----|
   |RT      |SFO      |LAX        |40               |BOS|

* Search filtered flight based on below table data

   |Airlines|Policy   |Stops   |
   |--------|---------|--------|
   |UA      |In Policy|Non Stop|

* Select Hotel based on below table data

   |HotelType|RoomType|
   |---------|--------|
   |NA       |NA      |

* Select car type as "SUV"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter "FAIL-ME" as hotel loyalty number
* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Verify the new layout after hotel faliure
* Validate messages after hotel booking is failed
