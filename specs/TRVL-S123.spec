# TRVL-S123 : Apple Map verification

## TC: 1 - Verify the apple maps on car rentalresults page. Pick Up

tags: applemaps, CarRentalOnly, Set2, GTMQA-544

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "CarRentalOnly" segments
* Search Car Rental based on below table data

   |PickUpLocation       |DropOffLocation|BookingAfterXDays|
   |---------------------|---------------|-----------------|
   |SFO Rental Car Center|Boston, MA, USA|90               |
* Validate apple map
* Click "Select" button
* Validate apple map

## TC:2 - Verify the apple maps on flight  page.

tags: applemaps, AirOnly, Set2, GTMQA-540

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Click more flight based on below table data

   |Departure|
   |---------|
   |PHX      |

* Validate apple map

## TC3 :  Verify the apple maps on train  page.

tags: applemaps, TrainOnly, Set2, GTMQA-541

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "TrainOnly" segments
* Click more train based on below table data

   |Departure|
   |---------|
   |NYP      |
* Validate apple map

## TC :4  Verify the apple maps on Hotels  page.

tags: applemaps, HotelOnly, Set2, GTMQA-542

* Goto Travel Site Url
* Login with "user26"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |20               |34                |
* Validate apple map

