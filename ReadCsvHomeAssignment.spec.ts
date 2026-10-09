import {test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from 'fs'
import path from "path"

const LeafcsvPath = path.join( __dirname,'Data',  'leafCsvfile.csv');
console.log(LeafcsvPath)

let LeaftabValues:any[]=parse(fs.readFileSync(LeafcsvPath,'utf-8'),{columns:true,skip_empty_lines:true})
console.log(LeaftabValues)

test.describe.serial('run test in serial mode', async()=>{

for(let LeafLogin of LeaftabValues)
{
test(`Read CSV file ${LeafLogin.tcid}`,async ({page}) => {
await page.goto("https://leaftaps.com/opentaps/control/main") ;
await page.locator("#username").fill(LeafLogin.username);
await  page.locator("[type='password']").fill(LeafLogin.password);
await page.locator('.decorativeSubmit').click();
})
}})


