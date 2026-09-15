import { test, expect } from '../src/fixtures/pagefixture';
import { CsvHelper } from '../src/utilis/csvutil';

test.beforeEach(async( {loginPage}) =>{
    
  await loginPage.gotoLoginPage();
    await loginPage.doLogin(process.env.TEST_USERNAME!,process.env.TEST_PASSWORD!)
  });


  const productData = CsvHelper.readCsv('src/data/product.csv');
  for(let row of productData){

  test(`verify search result count- ${row.searchkey} - ${row.productname}`, async ({ homePage, searchResultPage }) => {
  await homePage.dosearch(row.searchkey);
  expect (await searchResultPage.getProductCount()).toBe(Number(row.resultcount));

});
  }

  test('verify user able to land on product page', async ({ homePage, searchResultPage, page }) => {
     await homePage.dosearch('MacBook');
     await searchResultPage.selectProduct('MacBook');
     expect(await page.title()).toBe('MacBook');
  

});
