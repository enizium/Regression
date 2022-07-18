# Schedule Search

## TCID-1: Default gds schedule search on Oneway

tags: Regression, AirOnly, Set1B, XRAY-1873

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |OW      |SFO      |LAX        |100              |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

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

## TCID-2: Default gds schedule search on Round Trip

tags: Regression, AirOnly, Set1B, XRAY-1874

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-3: Default gds schedule search for Multi destination trips

tags: Regression, AirOnly, Set1B, XRAY-1875

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page  select "Multi Destination" and click "AirOnly" segments
* Search MultiDestination flight based on below table data

   |TripType|Departure|MultiLeg|Destination|BookingAfterXDays|
   |--------|---------|--------|-----------|-----------------|
   |MD      |SFO      |DEN     |LAX        |25               |

* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-4: Schedule search with Alternate airline selected pre change

tags: Regression, AirOnly, Set1B, XRAY-1168

* Goto Travel Site Url
* Login with "user53"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |110              |

* Validate Air Search By "Schedule"
* Filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Select Departure Flight
* Filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |B6      |Non Stop|

* Select Return Flight
* Validate details in "trip review" page
* Click on "Change Trip"
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |


* Validate Air Search By "Schedule"
* Filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Select Departure Flight
* Filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |B6      |Non Stop|

* Select Return Flight
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-5: Schedule search with Alternate airline selected post change

tags: Regression, AirOnly, Set1B, XRAY-1169

* Goto Travel Site Url
* Login with "user53"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Validate Air Search By "Schedule"
* Filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Select Departure Flight
* Filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |B6      |Non Stop|

* Select Return Flight
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Validating post Default Air Search by "Price"
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |99               |

* Select Departure Flight
* Filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |B6      |Non Stop|

* Select Return Flight
* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

## TCID-6: Schedule search with different class as coach selected

tags: Regression, AirOnly, Set1B, XRAY-1170

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |SFO      |LAX        |90               |Coach    |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter traveler "User" contact details
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-7: Schedule search with different class as business selected

tags: Regression, AirOnly, Set1B, XRAY-1165

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |SFO      |LAX        |100              |Business |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter traveler "User" contact details
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-8: Schedule search with different class as first selected

tags: Regression, AirOnly, Set1B, XRAY-1166

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|ClassType|
   |--------|---------|-----------|-----------------|---------|
   |RT      |SFO      |LAX        |100              |First    |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Enter traveler "User" contact details
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-9: Default schedule search with different fare types lowest available selected trip planner

tags: Regression, AirOnly, Set1B, XRAY-1867

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type       |
   |--------|---------|-----------|-----------------|----------------|
   |RT      |SFO      |LAX        |150              |Lowest Available|

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-10 Default schedule search with different fare types refundable selected trip planner

tags: Regression, AirOnly, Set1B, XRAY-1216

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type               |
   |--------|---------|-----------|-----------------|------------------------|
   |RT      |SFO      |LAX        |150              |Fares that allow refunds|

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-11: Default schedule search with different fare types  unrestricted selected trip planner

tags: Regression, AirOnly, Set1B, XRAY-1217

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type                 |
   |--------|---------|-----------|-----------------|--------------------------|
   |RT      |SFO      |LAX        |150              |Fares with no restrictions|

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-12: Default schedule search with different fare types lowest available selected trip planner One way

tags: Regression, AirOnly, Oneway, Set1B, XRAY-1207

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type       |
   |--------|---------|-----------|-----------------|----------------|
   |OW      |SFO      |LAX        |150              |Lowest Available|

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-13: Default schedule search with different fare types refundable selected trip planner One way

tags: Regression, AirOnly, OneWay, Set1B, XRAY-1218

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type               |
   |--------|---------|-----------|-----------------|------------------------|
   |OW      |SFO      |LAX        |150              |Fares that allow refunds|

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-14: Default schedule search with different fare types  unrestricted selected trip planner One way

tags: Regression, AirOnly, OneWay, Set1B, XRAY-1167

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|Fare Type                 |
   |--------|---------|-----------|-----------------|--------------------------|
   |OW      |SFO      |LAX        |150              |Fares with no restrictions|

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-15: Default schedule search with OOP conditions selected

tags: Regression, AirOnly, Set1B, XRAY-1216

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |15               |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button

* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID:16 Switching the view from schedule to price in the air results page

tags: Regression, AirOnly, Set1B, XRAY-1217

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |ViewBy|Airlines|Stops   |
   |------|--------|--------|
   |Price |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-17: Prechange flow formats to default schedule search planner

tags: Regression, AirOnly, Set1B, XRAY-1218

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click on "Change Trip"
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |120              |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page

## TCID-18:Post change flow formats to default schedule search in trip planner

tags: Regression, AirOnly, Set1B, XRAY-1207

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |110              |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Change" the Booking using URL
* Validating post Default Air Search by "Price"
* Search flight based on below table data

   |TripType|BookingAfterXDays|
   |--------|-----------------|
   |RT      |120              |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

   |Airlines|Stops   |
   |--------|--------|
   |UA      |Non Stop|

* Validate details in "post trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "post trip confirmation" page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "post trip cancellation" page

##TCID-19: Default schedule search with multi legs selected in the results

tags: Regression, UserScenarios, ScheduleSearch, AirOnly , Set1B, XRAY-1167

* Goto Travel Site Url
* Login with "user27"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Validating Default Air Search by "Schedule"
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |70              |

* Validate Air Search By "Schedule"
* Search filtered flight based on below table data

    |Stops   |
    |--------|
    |2+ Stops|

* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Select payment card for "air" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Get processId from trip confirmation page
* "Cancel" the Booking using URL
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page