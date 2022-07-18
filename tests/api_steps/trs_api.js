"use strict";

const trs_api = require("../api_actions/trs_api_action");

step("Create TxGroup", async function() {
	await trs_api.createTxGroup();
});

step("Update TxGroup", async function() {
	await trs_api.updateTxGroup();
});

step("Get a TxGroup by id", async function() {
	await trs_api.getTxGroup();
})

step("Get a TxGroup by user", async function() {
	await trs_api.getTxGroupByUser();
})

step("Get TxGroups for user with constraints", async function() {
	await trs_api.getTxGroupByConst();
})

step("Delete a TxGroup by id", async function() {
	await trs_api.deleteTxGroupById();
})