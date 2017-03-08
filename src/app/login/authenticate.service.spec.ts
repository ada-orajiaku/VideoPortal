/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { AuthenticateService } from './authenticate.service';

describe('AuthenticateService', () => {

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticateService,
        {
          provide: Http
       }
      ]
    });
  }));

  it('should ...', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service).toBeTruthy();
  }));
});
