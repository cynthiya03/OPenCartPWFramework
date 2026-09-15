import {test, expect, request, APIRequest} from '@playwright/test';

let Auth_TOKEN = {Authorization : 'Bearer b11d5d2614356c507d629c6fb4b0e38bc209bd5d160a06ad989f6dc8e1fb2f81'};

test('get user test', async ({request}) => {
    const response = await request.get('https://gorest.co.in/public/v2/users/8614822', {headers: Auth_TOKEN});
    

    expect(response.ok()).toBeTruthy();
});


test('create a user test', async ({ request}) => {
    let userData = {
        name : 'cyn',
        email : 'cynthiya@gmail.com',
        gender : 'female',
        status : 'active'

    };

    let response = request.post('https://gorest.co.in/public/v2/users/8614822', {
        headers: Auth_TOKEN, 
        data : userData
    });

    let jsonBody =  await (await response).json();
    console.log(jsonBody)

    console.log((await response).status());
    console.log((await response).statusText);

});

