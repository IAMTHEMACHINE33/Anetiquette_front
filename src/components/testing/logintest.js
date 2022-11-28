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
    console.log("Login Test Success")

  
  
  
  await page.goto('http://localhost:3000/Edit_profile')

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

  // if (page.url() == 'http://localhost:3000')
  //   console.log("Test Success")
  // else 
  //   throw new Error("Login failed")
  await browser.close();

  await browser.close();
})();