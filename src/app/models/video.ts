export class Video{
    _id:number;
    name:string;
    description:string;
    url:string;
    ratings:number[];

    constructor(obj){
        for (var prop in obj) this[prop] = obj[prop];
     //   Object.assign(this,values);
    }
}