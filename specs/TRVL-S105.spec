# TRVL-S105 - Apple - Default filter to 1 stop vs. Any if no non-stops are included in results

## TC-1: If ZK is enabled and non-stop options are available

tags: Regression, AirOnly, Set10, XRAY-1314, XRAY-1313

* Goto Travel Site Url
* Login with "appleuser1"
* Navigate to tripPlanner Page and select "AirOnly" segments
* Search flight based on below table data

   |TripType|Departure|Destination|BookingAfterXDays|
   |--------|---------|-----------|-----------------|
   |RT      |SFO      |LAX        |120               |

* Validate Flight stops in departure page