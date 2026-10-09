import {test} from "@playwright/test"

test.describe('Lead Management',{
    tag: '@crmlead'
}, ()=>{

test.describe.configure({mode:"serial"})

    test.skip('create lead', async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    console.log("lead is created successfully");
    })
    test.skip('Edit lead',async({page})=>{
    await test.step('lead is edited', async ()=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    console.log("lead is Edited successfully");
    })

    })
     test.fixme(' Duplicate lead', async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main')
    console.log("lead is duplicated successfully");

    })
    
   test.fail('delete lead', async({page})=>{

    //expect:fail , 
    await page.goto('https://leaftaps.com/opentaps/control/main')
    console.log("lead is deleted successfully");
    throw new Error("failure due assetion")

    })
     test.skip(' sample test',{
    tag: '@stest'
    }, async()=>{
     test.slow()
    console.log("timeout:",test.info().timeout);
    
    })

})