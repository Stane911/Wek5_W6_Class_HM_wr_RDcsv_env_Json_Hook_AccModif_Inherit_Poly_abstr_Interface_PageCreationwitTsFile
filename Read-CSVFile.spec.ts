import {test} from "@playwright/test"
4
import {parse} from "csv-parse/sync"
import fs from 'fs'
import path from "path"

//we have stored the path in variable named csvPath//:\Playwright-Test1\tests\Data\SfLoginvalue.csv
const csvPath = path.join(__dirname, '..', 'Data', 'SfLoginvalue.csv');
console.log(csvPath)

// Now the first step to do is "Read the csv file" with the Converter "utf-8",
//which converts the buffer type data into a string data (the datatype of the csvfile is object)

// const CSVfileValues = fs.readFileSync(csvPath,'utf-8')
// console.log(CSVfileValues)
// console.log(typeof CSVfileValues)




// //  use the Parse item to convert the string type data in object type data 
let CSVfileValues:any[]=parse(fs.readFileSync(csvPath,'utf-8'),{columns:true,skip_empty_lines:true})
console.log(CSVfileValues)

test.describe.serial('run test in serial mode', async()=>{
for(let sfLogin of CSVfileValues)
{
test(`learn to read data from csv file ${sfLogin.tcid}`,async ({page}) => {
await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill(sfLogin.username)
await page.locator('#Login').click()
await page.locator("#password").fill(sfLogin.password)
await page.locator('#Login').click()
})

}})