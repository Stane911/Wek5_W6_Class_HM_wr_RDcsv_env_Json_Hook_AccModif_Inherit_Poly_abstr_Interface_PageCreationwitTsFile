import { test, expect } from '@playwright/test';

test.use({ storageState: 'Data/sflogin.json' });

test('Marathon II Salesforce <Convert lead>', async ({page}) => {

page.on('dialog', async (prompt_alert) => {
await prompt_alert.accept()
})

await page.goto("https://orgfarm-a473a9e2f4-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
await page.waitForLoadState('domcontentloaded')
await page.getByRole('button',{name: 'App Launcher'}).click()
await page.locator('//button[@class="slds-button"]').nth(1).click()
await page.locator('//input[@class="slds-input"]').fill('Marketing')
await page.locator('//a[@href="/lightning/app/06mg8000008vMsGAAU"]').click()
await page.waitForLoadState('domcontentloaded')

await page.getByRole('button',{name:'Leads List'}).click()
await page.locator('//a[@href="/00Q/e?sObjectName=Lead&save_new_url=%2F00Q%2Fe&navigationLocation=LIST_VIEW"]').click()
await page.waitForLoadState('domcontentloaded')

await page.getByRole('combobox',{name:'Salutation',exact: true}).click();
await page.getByRole('option',{name: 'Mr.',exact: true}).click();
await page.locator('//input[@name="firstName"]').fill('Manas')
await page.getByRole('textbox',{name:'Last Name'}).fill('SahooXYZ')
await page.getByRole('textbox',{name:'Company'}).fill('GodsPlan')
await page.locator('//button[@name="SaveEdit"]').click()
await page.waitForLoadState('domcontentloaded')

await page.getByRole('button',{name:'Show more actions'}).click()
await page.locator('//lightning-menu-item[@data-target-selection-name="sfdc:StandardButton.Lead.Convert"]/div').click()
await page.waitForLoadState('domcontentloaded')

await page.locator('//button[text()="GodsPlan-"]').click()
await page.getByRole('textbox',{name:'Opportunity Name *'}).fill('F7 Driver')
await page.getByRole('button',{name:'Convert'}).click()
await page.waitForLoadState('domcontentloaded')
await expect(page.getByRole('heading', { name: 'Your lead has been converted' })).toBeVisible()


await page.getByRole('button',{name:'Go to Leads'}).click()
await page.waitForLoadState('domcontentloaded')

await page.locator('//a[@href="/lightning/o/Opportunity/home"]').click()
await page.getByRole('searchbox', { name: 'Search this list...' }).fill('F7 Driver')
await page.getByRole('searchbox', { name: 'Search this list...' }).press('Enter');
await page.waitForLoadState('domcontentloaded')


await page.locator('//a[@title="F7 Driver"]').first().click()
await page.waitForLoadState('domcontentloaded')

await expect(page.getByRole('heading', { name: 'Opportunity F7 Driver' }).locator('//lightning-formatted-text[text()="F7 Driver"]')
).toHaveText('F7 Driver');
})


