import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { VideoDetailComponent } from './video-detail.component';
import { VideoDetailService } from './video-detail.service';
import { Video } from '../models/video';
import { jqxRatingComponent } from '../rating/rating.component';


describe('VideoDetailComponent (inline template)', () => {

  let comp:    VideoDetailComponent;
  let fixture: ComponentFixture<VideoDetailComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDetailComponent, jqxRatingComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(VideoDetailComponent);
    comp = fixture.componentInstance; // VideoDetailComponent test instance
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  
  it('should have title "Rate our video!"', () => {
          // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
    expect(de).toContain("Rate our video!");
  });

});