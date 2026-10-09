import {test} from "@playwright/test"

import dotenv from 'dotenv'

let filepath='Data/salesForceloginProd.env'

// same thing like in CSV file, we need tio read the data first and then use it //
dotenv.config({path:filepath})


console.log(process.env.TD_url); 
console.log(process.env.TD_username);
console.log(process.env.TD_password);

// in or env data we wont use "" '' , so we need to 
// notify thet the value coming are cstring so we use 
// this one below

let URL=process.env.TD_url as string
let Username=process.env.TD_username as string
let Password=process.env.TD_password as string

console.log(Password)

test('Read Env file', async ({page}) => {

await page.goto(URL)
await page.locator('#username').fill(Username)
await page.locator('//input[@id="Login"]').click()
await page.locator('//input[@id="password"]').fill(Password)
await page.locator('//input[@id="Login"]').click()
    
})