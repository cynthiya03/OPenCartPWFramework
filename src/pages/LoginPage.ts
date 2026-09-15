import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    // private locators:
    private readonly username: Locator;
    private readonly password : Locator;
    private readonly login : Locator;
    private readonly forgottenPassword : Locator ;
    private readonly loginErrorMessage : Locator ;
    
 // when some one create object of the class, page will be given
    constructor( page : Page){
        // if u want to access parent class contructor, from the page given to parent class
        super(page)
    this.username = page.getByRole('textbox',{name : 'E-Mail Address'});
    this.password = page.getByRole('textbox', {name : 'Password'});
    this.login = page.getByRole('button', {name: 'Login'});
    this.forgottenPassword = page.locator('#content').getByRole('link', { name: 'Forgotten Password' });
    this.loginErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');
    
    }

    async gotoLoginPage(): Promise<void>{
        await this.page.goto('opencart/index.php?route=account/login');
    }

    async getLoginpageTitle() : Promise<String>{
        return await this.page.title();
    }
    
    async isForgotPasswordExist() : Promise<boolean>{
        return await this.forgottenPassword.isVisible();
    }

    async doLogin( username: string , password : string) : Promise<void>{
        console.log(`user cred : ${username} : ${password}`);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();


    }

    async isInvalidLoginErrorDisplayed() : Promise<boolean> {
       return await this.loginErrorMessage.isVisible();
    }
}