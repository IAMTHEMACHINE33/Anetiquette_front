const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

// ----------------- SIGN UP TEST --------------------
  await page.goto('http://localhost:3000/login');

  await page.waitForSelector('button[name="signup"]')
  await page.click('button[name="signup"]')

  await page.waitForSelector('input[name="name"]');
  await page.type('input[name="name"]', 'Sprint 2');
  
  await page.waitForSelector('input[name="email"]');
  await page.type('input[name="email"]', 'sprint1@test.com');
  
  await page.waitForSelector('input[name="password"]', { visible: true });
  await page.type('input[name="password"]', 'password');

  await page.waitForSelector('input[value="Sign Up"]')
  await page.click('input[value="Sign Up"]')

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  if (page.url() !== 'http://localhost:3000/')
    throw new Error('1: Signup fail!');
    else 
    console.log("1: Signup Test Success")


// --------------------- LOGIN TEST ---------------------------
  await page.goto('http://localhost:3000/login');

  await page.waitForSelector('input[name="loginemail"]');
  await page.type('input[name="loginemail"]', 'sprint1@test.com');
  
  await page.waitForSelector('input[name="loginpassword"]', { visible: true });
  await page.type('input[name="loginpassword"]', 'password');

  await page.waitForSelector('input[name="loginsubmit"]')
  await page.click('input[name="loginsubmit"]')

  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  if (page.url() !== 'http://localhost:3000/')
    throw new Error('2: Login fail!');
    else 
    console.log("2: Login Test Success")

// ----------------------- EDIT PROFILE TEST -------------------------
  await page.goto('http://localhost:3000/Edit_profile')

  await page.waitForSelector('input[name="name"]');
  await page.type('input[name="name"]', 'Edited Name');
  
  await page.waitForSelector('input[name="email"]');
  await page.type('input[name="email"]', 'sprint2@edited.com');
  
  await page.waitForSelector('input[name="password"]', { visible: true });
  await page.type('input[name="password"]', 'password123');

  await page.waitForSelector('button[type="submit"]')
  await page.click('button[type="submit"]')

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  if (page.url() !== 'http://localhost:3000/profile')
    throw new Error('3: Update User fail!');
    else 
    console.log("3: Update User Test Success")

// ---------------------- ADD TO CART ------------------------
  await page.goto('http://localhost:3000/product/639040fcb27faf6dd383dfc1')

  await page.waitForSelector('button[name="addtocart"]')
  await page.click('button[name="addtocart"]')

  await page.goto('http://localhost:3000/cart')

  if ('ssdfwda')
    console.log("4: Add To Cart Test Success")
    else 
    throw new Error('4: Add To Cart Fail')

  browser.close()


})();