const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/Edit_profile');

  await page.waitForSelector('input[name="name"]');
  await page.type('input[name="name"]', 'Edited Name');
  
  await page.waitForSelector('input[name="email"]');
  await page.type('input[name="email"]', 'sprint2@edited.com');
  
  await page.waitForSelector('input[name="password"]', { visible: true });
  await page.type('input[name="password"]', 'password123');

  await page.waitForSelector('input[type="submit"]')
  await page.click('input[type="submit"]')

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  if (page.url() !== 'http://localhost:3000/profile')
    throw new Error('Update User fail!');
    else 
    console.log("Update User Test Success")
  await browser.close();

  await browser.close();
})();