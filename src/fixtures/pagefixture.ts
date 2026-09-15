import {test as basetest} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CsvHelper } from '../utilis/csvutil';
import { searchresultpage } from '../pages/searchresultpage';
import { BasePage } from '../pages/BasePage';
import { ProductInfoPage } from '../pages/productInfopage';

// define type of page fixtures:

type pageFixtures = {
    loginPage : LoginPage,
    homePage : HomePage,
    searchResultPage : searchresultpage;
    basepage : BasePage,
    productInfopage : ProductInfoPage,
    testData : Record<string, string>[]
};

// extend playwright base test:

export let test = basetest.extend<pageFixtures>({

    loginPage: async ({page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage : async ({ page }, use) => {
        let homepage = new HomePage(page);
        await use(homepage);
    },

    testData: async({} , use) => {
        let testData = CsvHelper.readCsv('src/data/loginData.csv');
        await use(testData);
    },

    searchResultPage : async ({ page }, use) => {
        let searchResultPage = new searchresultpage(page);
        await use(searchResultPage);
    },

    basepage : async ({ page }, use) => {
        let basepage = new BasePage(page);
        await use(basepage);
    },

    productInfopage  : async ({ page }, use) => {
        let productInfopage = new ProductInfoPage (page);
        await use(productInfopage);
    }
    
});

export { expect} from '@playwright/test';