
import { test, expect } from '@playwright/test';

import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';

let loginPage : LoginPage;
let homepage : HomePage;

 test.beforeEach(async( {page}) =>{
    loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  homepage = new HomePage(page);
 }

)


test('Login page Title', async ({ page }) => {
   const  title = await loginPage.getLoginpageTitle();
  console.log('Title of the page :', title);
  expect(title).toBe('Account Login');
});

test('forgot password link exist', async ({ page }) => {
  expect(await loginPage.isForgotPasswordExist()).toBeTruthy();
});


test('user able to login or not', async ({ page }) => {
  await loginPage.doLogin('pwtestbatch@open.com','pw123')
  expect( await homepage.isLogoutLinkExist()).toBeTruthy();
  expect( await homepage.HomepageTitle()).toBe('My Account');
});



