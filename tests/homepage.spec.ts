import { test, expect } from '@playwright/test';

import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';

let loginpage : LoginPage;
let homepage : HomePage;

test.beforeEach( async ({page}) => {
    loginpage = new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.doLogin('pwtestbatch@open.com','pw123');
    homepage = new HomePage(page);

});

test('Home page Title', async ({ page }) => {
   const  hometitle = await homepage.HomepageTitle();
  console.log('Title of the page :', hometitle);
  expect(hometitle).toBe('My Account');
});


test('logout link exist', async ({ page }) => {
  expect(await homepage.isLogoutLinkExist()).toBeTruthy();
  });


  test('Home page header exist test', async ({ page }) => {
  let allheader = await homepage.getHomePageHeader();
  console.log('Home page header:', allheader);

  expect.soft(allheader).toHaveLength(4);
  expect.soft(allheader).toEqual([
    'My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'

  ])
});
