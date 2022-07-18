# Virtual pay API Tests

tags: vpayapitests

## TCID-1 Get the card request and submit the booking using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |50              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus   |
   |---------------------|
   |SUBMITTED_FOR_BOOKING|
* Get the VirtualPayTrip item as updated booking status

## TCID-2 Get the card request and cancel the booking using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus  |
   |--------------------|
   |SUBMITTED_FOR_CANCEL|
* Get the VirtualPayTrip item as updated booking status

## TCID-3 Get the card request and Failed on booking using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus|
   |------------------|
   |FAILED_ON_BOOKING |
* Get the VirtualPayTrip item as updated booking status

## TCID-4 Get the card request and Failed on Cancel using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus|
   |------------------|
   |FAILED_ON_CANCEL  |
* Get the VirtualPayTrip item as updated booking status

## TCID-5 Get the card request and unused the booking using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus|
   |------------------|
   |UNUSED            |
* Get the VirtualPayTrip item as updated booking status

## TCID-6 Get the card request and invalid the payment data using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus  |
   |--------------------|
   |INVALID_PAYMENT_DATA|
* Get the VirtualPayTrip item as updated booking status

## TCID-7 Get the card request and submit the booking using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus   |
   |---------------------|
   |SUBMITTED_FOR_BOOKING|
* Get the VirtualPayTrip item as updated booking status

## TCID-8 Get the card request and cancel the booking using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus  |
   |--------------------|
   |SUBMITTED_FOR_CANCEL|
* Get the VirtualPayTrip item as updated booking status

## TCID-9 Get the card request and Failed on booking using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus|
   |------------------|
   |FAILED_ON_BOOKING |
* Get the VirtualPayTrip item as updated booking status

## TCID-10 Get the card request and Failed on Cancel using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus|
   |------------------|
   |FAILED_ON_CANCEL  |
* Get the VirtualPayTrip item as updated booking status

## TCID-11 Get the card request and unused the booking using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus|
   |------------------|
   |UNUSED            |
* Get the VirtualPayTrip item as updated booking status

## TCID-12 Get the card request and invalid the payment data using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "singlecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "singlecard" with below table data 

   |HotelBookingStatus  |
   |--------------------|
   |INVALID_PAYMENT_DATA|
* Get the VirtualPayTrip item as updated booking status

## TCID-13 Get the multiple card request and submit the booking using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "multiplecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "multiplecard" with below table data 

   |HotelBookingStatus   |SecondHotelStatus    |
   |---------------------|---------------------|
   |SUBMITTED_FOR_BOOKING|SUBMITTED_FOR_BOOKING|
* Get the VirtualPayTrip item as updated booking status

## TCID-14 Get the multiple card request and submit and cancel the second hotel response using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "multiplecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "multiplecard" with below table data 

   |HotelBookingStatus   |SecondHotelStatus   |
   |---------------------|--------------------|
   |SUBMITTED_FOR_BOOKING|SUBMITTED_FOR_CANCEL|
* Get the VirtualPayTrip item as updated booking status

## TCID-15 Get the multiple card request and submit and failedoncancel the second hotel response using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "multiplecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "multiplecard" with below table data 

   |HotelBookingStatus   |SecondHotelStatus|
   |---------------------|-----------------|
   |SUBMITTED_FOR_BOOKING|FAILED_ON_CANCEL |
* Get the VirtualPayTrip item as updated booking status

## TCID-16 Get the multiple card request and submit and failedonbooking the second hotel response using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "multiplecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "multiplecard" with below table data 

   |HotelBookingStatus   |SecondHotelStatus|
   |---------------------|-----------------|
   |SUBMITTED_FOR_BOOKING|FAILED_ON_BOOKING|
* Get the VirtualPayTrip item as updated booking status

## TCID-17 Get the multiple card request and cancel and submit the second hotel response using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "multiplecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "multiplecard" with below table data 

   |HotelBookingStatus  |SecondHotelStatus    |
   |--------------------|---------------------|
   |SUBMITTED_FOR_CANCEL|SUBMITTED_FOR_BOOKING|
* Get the VirtualPayTrip item as updated booking status

## TCID-18 Get the multiple card request and failonbooking and failedoncancel on second hotel response using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "multiplecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "multiplecard" with below table data 

   |HotelBookingStatus|SecondHotelStatus|
   |------------------|-----------------|
   |FAILED_ON_BOOKING |FAILED_ON_CANCEL |
* Get the VirtualPayTrip item as updated booking status

## TCID-19 Get the multiple card request and cancel and unused the second hotel response using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "multiplecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "multiplecard" with below table data 

   |HotelBookingStatus  |SecondHotelStatus|
   |--------------------|-----------------|
   |SUBMITTED_FOR_CANCEL|FAILED_ON_BOOKING|
* Get the VirtualPayTrip item as updated booking status

## TCID-20 Get the multiple card request and cancel and failedoncancel on second hotel response using Vpay API

tags: vpayapitests

* Create API booking for "user44"
* Getcard request as "multiplecard" from Conferma with below table data 

   |BookingAfterXDays|clientID|
   |-----------------|--------|
   |150              |50565   |
* Update the booking status for "multiplecard" with below table data 

   |HotelBookingStatus  |SecondHotelStatus|
   |--------------------|-----------------|
   |SUBMITTED_FOR_CANCEL|FAILED_ON_CANCEL |
* Get the VirtualPayTrip item as updated booking status
