"use strict";
const dsm_action = require('../DSM/dsm_actions')
const DSMAction = require('../DSM/dsm_actions')
step("Validate LightBox Message for <ags1> in <ags2> page with <ags3> enabled", async function(trips, page, level){
    await dsm_action.validateDSMMessage(trips, page, level)
})
step("Validate Inline Message for <ags1> in <ags2> page with <ags3> enabled", async function(trips, page, level){
    await dsm_action.validateDSMInlineMessage(trips, page, level)
})

step("Click DSM <ags> button", async function (button) {
    switch(button){
        case "Close":
            await DSMAction.DSMCloseBtn();
            break;
        case "CloseX":
            await DSMAction.DSMCloseXBtn();
            break;
    }
})

step("Validate LightBox Message <ags> page for <ags2> enabled", async function(page, level){
    await dsm_action.newvalidateDSMLightboxMessage(page, level)
})

step("Validate Inline Message <ags> page for <ags2> enabled", async function(page, level){
    await dsm_action.newvalidateDSMInlineMessage(page, level)
})

step("Collapse DSM message", async function(){
    await dsm_action.collapseDsmMsg()
})