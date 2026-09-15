import { test, expect } from '../src/fixtures/pagefixture';


test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
});


test('@smoke comp logo exists on product page', async ({ basepage }) => {
    expect(await basepage.isLogoVisible()).toBeTruthy();
});

test('@smoke footers exist on product page', async ({ basepage }) => {
    expect(await basepage.getPageFootersCount()).toBe(16);
});

test('@regression verify product images count', async ({ homePage, searchResultPage, productInfopage}) => {
    await homePage.dosearch('macbook');
    await searchResultPage.selectProduct('MacBook Pro');
    let imgCount = await productInfopage.getProductImagesCount();
    console.log('total images: ', imgCount);
    expect(imgCount).toBe(4);
    //act vs exp
});

