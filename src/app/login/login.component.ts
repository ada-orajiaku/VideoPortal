import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticateService } from './authenticate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

model: any = {};
invalidLogin:boolean = false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticateService,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

      login(event, username, password) {
         event.preventDefault();
         
        this.authenticationService.login(username, password)
            .subscribe(
                status => {
                  if(status){
                    this._flashMessagesService.show('Welcome to our video api', { cssClass: 'alert-success',timeout: 5000  } );
                    this.router.navigate(['/videos']);
                  }else{
                  //  this._flashMessagesService.show('Invalid login credentials', { cssClass: 'alert-danger',timeout: 3000  } );
                    this.invalidLogin = true;
                  }
                },
                error => {
                  console.log("server error "+ error);
                });
    }

}
