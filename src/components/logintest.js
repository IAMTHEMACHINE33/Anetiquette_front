const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/login');

  await page.waitForSelector('input[name="loginemail"]');
  await page.type('input[name="loginemail"]', 'sprint1@test.com');
  
  await page.waitForSelector('input[name="loginpassword"]', { visible: true });
  await page.type('input[name="loginpassword"]', 'password');

  await page.waitForSelector('input[name="loginsubmit"]')
  await page.click('input[name="loginsubmit"]')

  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  if (page.url() !== 'http://localhost:3000/')
    throw new Error('Login fail!');
    else 
    console.log("Test Success")
  await browser.close();

  await browser.close();
})();