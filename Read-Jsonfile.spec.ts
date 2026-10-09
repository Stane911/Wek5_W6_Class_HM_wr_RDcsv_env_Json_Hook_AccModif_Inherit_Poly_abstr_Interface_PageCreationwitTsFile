import {test} from "@playwright/test"
// we need to import the file with corresponding test data//
import data from "../Data/SFcredential.json"


// This is a syntax or a method to make the execution go one by one instead
//  of doing parallel execution ///test.describe.serial() and followerd with arrow function this //
// this should start before the test runner and end at the last of code


test.describe.serial('run test in serial mode', async()=>{

// we have to store the data in a variable using ForOFF method and iterate it 
// and open the test runner with Template Literals and provide
//  the TDIS in yous test data with the stored data variable before DOT , thats the syntax for template literla ``//
for(let testData of data) {

test(`learn to read data from JSON file ${testData.tcid}`,async ({page}) => {
await page.goto("https://leaftaps.com/opentaps/control/main")
await page.waitForLoadState('domcontentloaded')
await page.locator('#username').fill(testData.username)
await page.locator('#password').fill(testData.password)
await page.locator('.decorativeSubmit').click()
})
}
})
