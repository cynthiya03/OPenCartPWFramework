import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    // private locators:
    private readonly logoutlink : Locator;
    private readonly headers  : Locator;
    private readonly search : Locator;
    private readonly searchicon : Locator;
    
    constructor( page : Page){
    super(page)
    this.logoutlink = page.getByRole('link', { name: 'Logout' })
    this.headers = page.getByRole('heading', {level : 2});
    this.search = page.getByRole('textbox', { name: 'Search' });
    this.searchicon = page.locator('.btn.btn-default.btn-lg');
    
    };

    
async HomepageTitle() : Promise<String> {
        return await this.page.title();
    }
    
    async isLogoutLinkExist() : Promise<boolean> {
        return await this.logoutlink.isVisible();
    }

    async getHomePageHeader() : Promise<string[]> {
   return await this.headers.allInnerTexts();
    }

    async dosearch(searchkey:string): Promise<void>{
   console.log(`search key: ${searchkey}`);
   await this.search.fill(searchkey);
   await this.searchicon.click();
    }

    }
