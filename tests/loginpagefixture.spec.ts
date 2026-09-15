import { test, expect } from '../src/fixtures/pagefixture';
import { CsvHelper } from '../src/utilis/csvutil';
import { ExcelHelper } from '../src/utilis/Excelhelper';
import { JsonHelper} from '../src/utilis/Jsonhelper';

//import { LoginPage } from '../src/pages/LoginPage';
//import { HomePage } from '../src/pages/HomePage';

//let loginPage : LoginPage;
//let homepage : HomePage;

 test.beforeEach(async( {loginPage}) =>{
    
  await loginPage.gotoLoginPage();
  
 }

)


test('Login page Title', async ({ loginPage }) => {
   const  title = await loginPage.getLoginpageTitle();
  console.log('Title of the page :', title);
  expect(title).toBe('Account Login');
});

test('forgot password link exist', async ({ loginPage }) => {
  expect(await loginPage.isForgotPasswordExist()).toBeTruthy();
});


test('user able to login or not', async ({ homePage, loginPage }) => {
  await loginPage.doLogin(process.env.TEST_USERNAME!,process.env.TEST_PASSWORD!)
 expect( await homePage.isLogoutLinkExist()).toBeTruthy();
  //expect( await homePage.HomepageTitle()).toBe('My Account');
});

// 1. sequence mode --- only 1 test is running with test data one by one

test('login to app using wrong credential with data driven test', async({loginPage, testData})=>{
  for(let row of testData){
    await loginPage.doLogin(row.username, row.password);
    expect (await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
  }

}
)
// 2. data driven approach , without fixture, parallel mode, read csv data directly and 
// loop the test method row wise

let testData = CsvHelper.readCsv('src/data/loginData.csv');

for( let row of testData){
  test(`invalid login test - ${row.username} -${row.password}`, async ({loginPage}) => {
  await loginPage.doLogin(row.username, row.password);
    expect (await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
  });

  };


let testData1 = ExcelHelper.readExcel('src/data/login.xlsx');

for( let row of testData1){
  test(`invalid login test with excel - ${row.username} -${row.password}`, async ({loginPage}) => {
  await loginPage.doLogin(row.username, row.password);
    expect (await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
  });

  };


  
let testData3 = JsonHelper.readJson('src/data/logindetail.json');

for( let row of testData3){
  test(`invalid login test with json - ${row.username} -${row.password}`, async ({loginPage}) => {
  await loginPage.doLogin(row.username, row.password);
    expect (await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
  });

  };


