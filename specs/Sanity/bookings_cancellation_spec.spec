# Bookings cancellation Spec

In this spec we retrieve the Bookings made by Jobs, which where unable to cancel due to some issues and got pilled up in Reservations
which causes Revenue impact if no show occurs in production sanity runs.

## TC1 Cancel Scenario for pilled up reservations

tags: PNRCancellation, Sabre, Apollo, Worldspan

* Goto Travel Site Url
* Login with "sanityUser1"
* Navigate to Reservation Page
* Retrieve Existing Bookings from the user and cancel the bookings

## TC2 Cancel Scenario for pilled up reservations

tags: PNRCancellation, Sabre, Apollo, Worldspan

* Goto Travel Site Url
* Login with "sanityUser2"
* Navigate to Reservation Page
* Retrieve Existing Bookings from the user and cancel the bookings

## TC3 Cancel Scenario for pilled up reservations

tags: PNRCancellation, Sabre, Apollo, Worldspan

* Goto Travel Site Url
* Login with "sanityUser3"
* Navigate to Reservation Page
* Retrieve Existing Bookings from the user and cancel the bookings