# TRVL-S110: Profile fields

## TCID-1: AHC booking with travel preference and change in purchase page and then check it in travel preference

tags: Regression, Set5, GTMQA-701

* Goto Travel Site Url
* Login with "user43"
* Navigate to travel preferences page
* Clear "AHC" Travel preference
* Navigate to travel preferences page
* Select special requests "Air" Prefereces based on below table data

   |HomeAirport|PreferredFareType|DefaultSearchType|AirSpecialRequests1       |AirSpecialRequests2      |MembershipAirline|MembershipAirlineNumber|
   |-----------|-----------------|-----------------|--------------------------|-------------------------|-----------------|-----------------------|
   |SFO        |Lowest Available |Price            |Visually impaired traveler|Hearing impaired traveler|United Airlines  |123456                 |

* Navigate to travel preferences page
* Select special requests "Hotel" Prefereces based on below table data

   |HotelSpecialRequests1|HotelSpecialRequests2|MembershipHotel|MembershipHotelNumber|
   |---------------------|---------------------|---------------|---------------------|
   |Away from elevator   |Away from ice machine|World of Hyatt |123456               |

* Navigate to travel preferences page
* Select special requests "Car Rental" Prefereces based on below table data

   |DefaultCarSize|CarSpecialRequest1  |CarSpecialRequest2|MembershipCar|MembershipCarNumber|
   |--------------|--------------------|------------------|-------------|-------------------|
   |Intermediate  |Automatic door locks|Mobile Phone      |Budget       |123456             |

* Navigate to tripPlanner Page and select "AHC" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |100              |

* Search filtered flight based on below table data

   |Stops   |Airlines|Policy   |
   |--------|--------|---------|
   |Non Stop|UA      |In Policy|


* Filter Hotel based on below table data

   |HotelName                              |
   |---------------------------------------|
   |Hyatt Regency Mission Bay Spa And Marin|

* Select Hotel based on below table data

   |HotelType|RoomType   |
   |---------|-----------|
   |GDS      |CANCELLABLE|

* Select car type as "CAR"
* Select car rental vendor as "Budget"
* Retrieve selected car info and click on "Select" button
* Validate details in "trip review" page
* Click "trip review continue" button
* Validate page title in "Purchase Trip" page
* Enter Trip Name
* Validate "Air" Special Request and Membership in Purchase page
* Validate "Hotel" Special Request and Membership in Purchase page
* Validate "Car Rental" Special Request and Membership in Purchase page
* Click on Preference and Rewards Programs Edit link
* Change travel preference in purhcase page based on below table data

   |AirSpecialRequests1                       |MembershipAirline |MembershipAirlineNumber|HotelSpecialRequests1                     |MembershipHotel     |MembershipHotelNumber|CarSpecialRequest1|MembershipCar|MembershipCarNumber|
   |------------------------------------------|------------------|-----------------------|------------------------------------------|--------------------|---------------------|------------------|-------------|-------------------|
   |Wheelchair - can ascend and descend stairs|Southwest Airlines|654321                 |Wheelchair - can ascend and descend stairs|Best Western Rewards|9848494              |Child Seat/Infant |Dollar       |454545             |

* Select payment card for "air" as "Site Payment Card"
* Select payment card for "hotel" as "Site Payment Card"
* Click "Purchase" button
* Validate page title in "Trip Confirmation" page
* Validate details in "trip confirmation" page
* Go to reservations and select the recently added trip
* "Cancel" the trip
* Validate page title in "Trip Cancellation" page
* Validate details in "trip cancellation" page
* Navigate to travel preferences page
* Validate change in travel preference made from purchase page
* Clear "AHC" all Preference data

## TCID-2: Add/Edit/Delete payment cards on profile page

tags: Regression, Set5, XRAY-2090

* Goto Travel Site Url
* Login with "user64"
* Navigate to Account page
* "Delete existing" payment card
* "Add" payment card
* "Edit" payment card
* "Delete" payment card

## TCID-3: Add/Edit/Delete Passports

tags: Regression, Set5, XRAY-2099

* Goto Travel Site Url
* Login with "user64"
* Navigate to travel preferences page
* "Delete existing" Passport details
* "Add" Passport details
* "Edit" Passport details
* "Delete" Passport details

## TCID-4: Add/Edit/Delete Visa

tags: Regression, Set5, XRAY-2091

* Goto Travel Site Url
* Login with "user64"
* Navigate to travel preferences page
* "Delete existing" Visa details
* "Add" Visa details
* "Edit" Visa details
* "Delete" Visa details

## TCID-5: Add/Edit/Delete National Id Card

tags: Regression, Set5, XRAY-2100

* Goto Travel Site Url
* Login with "user64"
* Navigate to travel preferences page
* "Delete existing" National Id Card details
* "Add" National Id Card details
* "Edit" National Id Card details
* "Delete" National Id Card details

##  TCID-6: Edit Personal Info

tags: Regression, Set5, XRAY-2092

* Goto Travel Site Url
* Login with "user64"
* Navigate to Account page
* Edit "Personal" Information

##  TCID-7: Edit Emergency Contact

tags: Regression, Set5, XRAY-1965

* Goto Travel Site Url
* Login with "user64"
* Navigate to Account page
* Edit "Emergency" Information

## TCID-8: Edit Display setting

tags: Regression, Set5, XRAY-2093

* Goto Travel Site Url
* Login with "user64"
* Navigate to Account page
* Edit "Display Setting" Information

##  TCID-9: Add/Delete Delegate

tags: Regression, Set5, XRAY-2094

* Goto Travel Site Url
* Login with "user64"
* Navigate to Account page
* "Delete existing" Delegate
* "Add" Delegate
* "Delete" Delegate
