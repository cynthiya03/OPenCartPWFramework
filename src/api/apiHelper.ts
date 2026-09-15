import { APIRequestContext } from "@playwright/test";

export class apiHelper{
    private readonly request:APIRequestContext;
    private readonly baseURL : string;

    constructor( request : APIRequestContext, baseURL : string){
        this.request = request;
        this.baseURL = baseURL;
    }



// GET

async get(endpoint : string, header?:Record<string, string>) {
   await this.request.get(`${this.baseURL}${endpoint}`, {
    
   })
}




// POST





//PUT





//DELETE
}