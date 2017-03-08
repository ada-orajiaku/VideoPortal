/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule ,BaseRequestOptions, Response, ResponseOptions,RequestOptions, Http, ConnectionBackend} from '@angular/http';
import { RatingService } from './rating.service';


describe('RatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingService,Http,ConnectionBackend,BaseRequestOptions,ResponseOptions]
    });
  });

  it('should ...', inject([RatingService], (service: RatingService) => {
    expect(service).toBeTruthy();
  }));
});
