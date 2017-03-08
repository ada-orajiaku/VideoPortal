import {Component, EventEmitter, OnInit} from '@angular/core';
import {Input, Output} from '@angular/core/src/metadata/directives';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { User } from '../models/user';

import {Observable} from 'rxjs/Rx';
import {AuthenticateService} from './authenticate.service';

class TestBackend extends MockBackend{

    doLogin(username,password){
        if(username == "harry" && password == "password"){
            this.goodLogin();
        }else{
            this.badLogin();
        }
    }
    badLogin(){
                return Observable.of([
            {
                error: "Invalid username or password",
                status: "error"
            }]);
    }

    goodLogin(){
        return Observable.of([
            {
                sessionId: "xTh5Acs0y6f0Sk1mIRPP1s2iCrLbjaNe",
                status: "success",
                username:"harry"
            }]);
    }

}

class MockAuthenticateService extends AuthenticateService {
  constructor() {
    super(null);
  }

  login(username,password) {
       return new TestBackend().doLogin(username,password);
  }

  logout(){
    return Observable.of([
      {
        sessionId: "",
        status: "success",
        username:"harry"
      }]);
  }
}