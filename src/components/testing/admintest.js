const { SlowMotionVideo } = require('@mui/icons-material');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false, 
    slowMo: 30,
    defaultViewport :{width: 1920, height: 1080},
  });
  const page = await browser.newPage();

  // ------------------- LOGIN ADMIN -------------------------

  await page.goto('http://localhost:3000/login_admin');

  await page.waitForSelector('input[name="loginemail"]');
  await page.type('input[name="loginemail"]', 'admin@admin.com');
  
  await page.waitForSelector('input[name="loginpassword"]', { visible: true });
  await page.type('input[name="loginpassword"]', 'password');

  await page.waitForSelector('input[name="loginsubmit"]')
  await page.click('input[name="loginsubmit"]')

  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  if (page.url() !== 'http://localhost:3000/admin/dashboard')
    throw new Error('1: Admin Login Test Fail!');
    else 
    console.log("1: Admin Login Test Success")


  browser.close();
  
})();