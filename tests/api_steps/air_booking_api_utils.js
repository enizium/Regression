"use strict";

const axios = require('axios');
const commonHelper = require("../helpers/helper.js");


step("Create API booking for <userKey>", async function(userKey) {
	gauge.dataStore.specStore.put('userKey', userKey);
});
