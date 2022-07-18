# TRVL-148: As a traveler, I would like to book hotel and filter them by brand/hotel name, ratings, amenities, no of guest, distance, hotel category
## TC1: Verify the filter functionality for sort by brand/hotel name, ratings, amenities, no of guest, distance, hotel category

tags: Regression, HotelOnly , Set1B

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |154               |

* Filter search based on below table data and validate the results accordingly

   |Rating|Hotel Categories|HotelName               |Amenities|Distance|BrandName|Guests|
   |------|----------------|------------------------|---------|--------|---------|------|
   |3     |GDS             |Omni San Francisco Hotel|Golf     |1       |Omni     |4     |


## TC2: Verify the filter functionality for sort by brand/hotel name, ratings, amenities, no of guest, distance, hotel category

tags: Regression, HotelOnly , Set1B

* Goto Travel Site Url
* Login with "user1"
* Navigate to tripPlanner Page and select "HotelOnly" segments
* Search Hotel based on below table data

   |HotelSearchValue|CheckInAfterXDays|CheckOutAfterXDays|
   |----------------|-----------------|------------------|
   |SFO             |150              |154               |

* Filter search based on below table data and validate the results accordingly

   |Distance|Amenities |
   |--------|----------|
   |30      |Restaurant|

* Filter search based on below table data and validate the results accordingly

   |Hotel Categories|
   |----------------|
   |Booking.com     |

* Filter search based on below table data and validate the results accordingly

   |Hotel Categories|
   |----------------|
   |GDS             |


* Filter search based on below table data and validate the results accordingly

   |Amenities|
   |---------|
   |Parking  |

* Filter search based on below table data and validate the results accordingly

   |Amenities|
   |---------|
   |Pool     |

