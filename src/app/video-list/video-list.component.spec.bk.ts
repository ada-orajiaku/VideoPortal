/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule,RouterLink } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../common/auth.guard';
import { AuthenticateService } from '../login/authenticate.service';
import { VideoListService } from '../video-list/video-list.service';
import { jqxRatingComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR } from '../rating/rating.component';
import { VideoDetailComponent } from '../video-detail/video-detail.component';
import { VideoDetailService } from '../video-detail/video-detail.service';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RatingService } from '../rating/rating.service';

import { VideoListComponent } from './video-list.component';
import { ValuesPipe } from '../pipes/responseValuesPipe';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListComponent, ValuesPipe ],
      providers:[AuthenticateService,
                  AuthGuard,
                  VideoListService,
                  RouterLink,
                  VideoDetailService,
                  CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                  RatingService],
      imports: [RouterModule, HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
