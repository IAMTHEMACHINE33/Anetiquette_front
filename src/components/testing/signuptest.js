const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/login');

  await page.waitForSelector('button[name="signup"]')
  await page.click('button[name="signup"]')

  await page.waitForSelector('input[name="name"]');
  await page.type('input[name="name"]', 'Sprint 2');
  
  await page.waitForSelector('input[name="email"]');
  await page.type('input[name="email"]', 'sprint2@test.com');
  
  await page.waitForSelector('input[name="password"]', { visible: true });
  await page.type('input[name="password"]', 'password');

  await page.waitForSelector('input[type="submit"]')
  await page.click('input[type="submit"]')

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  if (page.url() !== 'http://localhost:3000/')
    throw new Error('Signup fail!');
    else 
    console.log("Signup Test Success")
  await browser.close();

  await browser.close();
})();