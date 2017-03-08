import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AuthGuard implements CanActivate {
    
  constructor(private router: Router, private _flashMessagesService: FlashMessagesService) {}

  canActivate() {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      return true;
    }

    this._flashMessagesService.show('Sorry, you have to be logged in to view that page.', { cssClass: 'alert-warning',timeout: 5000  } );
    this.router.navigate(['/login']);
    return false;
  }
}