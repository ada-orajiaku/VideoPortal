export class User{
    _id:number;
    username:string;
    password:string;
    sessionId:string;

    constructor(values:Object = {}){
        Object.assign(this,values);
    }
}
