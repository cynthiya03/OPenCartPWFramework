import { test, expect } from '../src/fixtures/pagefixture';

test.beforeEach( async ({loginPage}) => {
    await loginPage.gotoLoginPage();
    await loginPage.doLogin('pwtestbatch@open.com','pw123');
  

});

test('Home page Title', async ({ homePage }) => {
   const  hometitle = await homePage.HomepageTitle();
  console.log('Title of the page :', hometitle);
  expect(hometitle).toBe('My Account');
});


test('logout link exist', async ({ homePage }) => {
  expect(await homePage.isLogoutLinkExist()).toBeTruthy();
  });


  test('Home page header exist test', async ({ homePage }) => {
  let allheader = await homePage.getHomePageHeader();
  console.log('Home page header:', allheader);

  expect.soft(allheader).toHaveLength(4);
  expect.soft(allheader).toEqual([
    'My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'

  ])
});
