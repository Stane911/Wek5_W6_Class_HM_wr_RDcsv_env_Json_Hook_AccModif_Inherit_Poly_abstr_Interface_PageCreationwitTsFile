import { Browser, chromium, Page, } from "@playwright/test"

class LoginPage  {

page:Page
browser:Browser

constructor(var_page:Page,var_browser:Browser)
{
this.page=var_page
this.browser=var_browser
}


async LoadpageUrl(url:string) 
{
await this.page.goto(url)
}

async Credentials(UN:string,PW:string)
{
await this.page.locator('#username').fill(UN)
await this.page.locator('#password').fill(PW)
}

async clicklogin()
{
await this.page.locator('.decorativeSubmit').click()
}

async closeBrowser()
{
await this.page.close()
}
}

async function pageCreation() {
    
let browser=await chromium.launch({headless:false})
let context=await browser.newContext()
let page=await context.newPage()


let oj= new LoginPage(page,browser)
await oj.LoadpageUrl("https://leaftaps.com/opentaps/control/main") 
await oj.Credentials("democsr","crmsfa")
await oj.clicklogin()
await oj.closeBrowser()

}
pageCreation()




















