"use strict";

const hotelApiActions = require("../api_actions/hotel_booking_api_action.js")
const assert = require("assert");


step("Getcard request as <cardType> from Conferma with below table data <table>", async function (cardType, table) {
	await hotelApiActions.getCardRequest(cardType, table);
});

step("Update the booking status for <cardType> with below table data <table>", async function (cardType, table) {
	await hotelApiActions.updateBookingStatus(cardType, table);
});

step("Get the VirtualPayTrip item as updated booking status", async function () {
    await hotelApiActions.getVirtualPayTrip();
});