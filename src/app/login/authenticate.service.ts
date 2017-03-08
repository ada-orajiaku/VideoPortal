import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Globals } from '../common/globals';
import { contentHeaders } from '../common/headers';

import {Md5} from 'ts-md5/dist/md5'
import { User } from '../models/user';



@Injectable()
export class AuthenticateService {

    constructor(private http: Http) { }

    login(username: string, passwordInput: string):any {

        let password = Md5.hashStr(passwordInput).toString();

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        let body = urlSearchParams.toString();

       // let body = JSON.stringify({ username, password });
        return this.http.post(Globals.baseApiUrl+'/user/auth', body,{headers:contentHeaders})
            .map((response: Response) => {
                if(response.json().status === "success"){
                                        // login successful if there's a jwt token in the response
                    let user = {
                        sessionId:response.json().sessionId,
                        username: response.json().username
                    };
                    
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));
                    
                    return true;   
                }else{
                    return false;
                }
                
            });
    }
 
    logout():any {
        var currentUser = new User (localStorage.getItem('currentUser'));
        localStorage.removeItem('currentUser');
        return this.http.get(Globals.baseApiUrl+'/user/logout?sessionId='+currentUser.sessionId)
        // remove user from local storage to log user out
        
    }
}
