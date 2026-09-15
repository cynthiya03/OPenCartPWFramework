import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class searchresultpage extends BasePage {
    // private locators:
    private readonly searchResult : Locator;


    constructor(page: Page){
        super(page);
        this.searchResult = page.locator('div.product-layout')
        };

        async getProductCount():Promise<number> {
           return await  this.searchResult.count();
        }

        async selectProduct(productName :string) : Promise<void>{
            await this.page.getByRole('link', {name:productName, exact :true}).first().click();
        }

}