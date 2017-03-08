import { Component, OnInit } from '@angular/core';
import { Router,NavigationError } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  providers:[]
})
export class NotFoundComponent implements OnInit {

  constructor(private _router: Router) {
    this._router.events.subscribe((event: NavigationError) => {
      if (event.error) {
        this._router.navigate(['/404']);
      }
    });
  } 

  ngOnInit() {
  }

}
