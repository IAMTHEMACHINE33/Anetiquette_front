const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080});

// ----------------- SIGN UP TEST --------------------
  await page.goto('http://localhost:3000/login');

  await page.waitForSelector('button[name="signup"]')
  await page.click('button[name="signup"]')

  await page.waitForSelector('input[name="name"]');
  await page.type('input[name="name"]', 'BDD Test');
  
  await page.waitForSelector('input[name="email"]');
  await page.type('input[name="email"]', 'bdd4@test.com');
  
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
  await page.type('input[name="loginemail"]', 'bdd4@test.com');
  
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
  await page.click('input[name="name"]', {clickCount: 3})
  await page.type('input[name="name"]', 'Edited Name 4');
  
  await page.waitForSelector('input[name="email"]');
  await page.click('input[name="email"]', {clickCount: 3})
  await page.type('input[name="email"]', 'bdd4@edited.com');
  
  await page.waitForSelector('input[name="password"]', { visible: true });
  await page.click('input[name="password"]', {clickCount: 3})
  await page.type('input[name="password"]', 'password123');

  await page.waitForSelector('button[type="submit"]')
  await page.click('button[type="submit"]')

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  await page.goto('http://localhost:3000/profile')

  if(await page.waitForXPath('//*[contains(text(), "Edited Name")]'))
    console.log("3: Update User Test Success")
    else
    throw new Error('3: Update User fail!');

  // if (page.url() !== 'http://localhost:3000/profile')
  //   throw new Error('3: Update User fail!');
  //   else 
  //   console.log("3: Update User Test Success")

// ---------------------- ADD TO CART ------------------------
  await page.goto('http://localhost:3000/product/63b033daa25cae5fcfaf66e8')

  await page.waitForSelector('button[name="addtocart"]')
  await page.click('button[name="addtocart"]')

  await page.goto('http://localhost:3000/cart')

  if (await page.waitForXPath('//*[contains(text(), "Test Product")]'))
    console.log("4: Add To Cart Test Success")
    else 
    throw new Error('4: Add To Cart Fail')




// --------------------- BID ON A PRODUCT ----------------------
  await page.goto('http://localhost:3000/product/63b03c15a25cae5fcfaf69ee')

  await page.waitForSelector('input[name="bidinput"]')
  await page.type('input[name="bidinput"]', '806')  // CHANGE BID PRICE HERE...........

  await page.waitForSelector('button[name="bidbutton"]')
  await page.click('button[name="bidbutton"]')

  await page.reload()

  if (await page.waitForXPath('//*[contains(text(), "Edited Name")]'))
    console.log("5: Bid On Product Test Success")
    else
    throw new Error("5: Bid On Product Test Fail")
  


  // ------------------- NAVIGATE FROM DASHBOARD ---------------------

  // ABOUT US
  await page.goto('http://localhost:3000')
  
  await page.waitForSelector('a[name="about"]')
  await page.click('a[name="about"]')

  if (page.url() !== 'http://localhost:3000/about')
    throw new Error('6: About Us Navigate fail!');
    else 
    console.log("6: About Us Navigate Success")

  //HELP
  await page.goto('http://localhost:3000')
  
  await page.waitForSelector('a[name="help"]')
  await page.click('a[name="help"]')

  if (page.url() !== 'http://localhost:3000/help')
    throw new Error('7: Help Navigate fail!');
    else 
    console.log("7: Help Navigate Success")

  //SEARCH
  await page.goto('http://localhost:3000')
  
  await page.waitForSelector('a[name="search"]')
  await page.click('a[name="search"]')

  if (page.url() !== 'http://localhost:3000/search')
    throw new Error('8: Search Navigate fail!')
    else 
    console.log("8: Search Navigate Success")

  
  // ------------------- SEARCH FUNCTION ---------------------------
  await page.waitForSelector('input[type="search"]')
    await page.type('input[type="search"]', 'bo')

  await page.waitForSelector('button[id="search-addon"]')
    await page.click('button[id="search-addon"]')

  if(await page.waitForXPath('//*[contains(text(), "Bowl")]'))
    console.log("9: Search Product Test Success")
    else
    throw new Error("9: Search Product Test Fail")

  browser.close()
})();