/** Importing all modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

/** Importing all helper components */
import { AuthGuard } from './common/auth.guard';
import { jqxRatingComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR } from './rating/rating.component';

/** Importing all services */
import { AuthenticateService } from './login/authenticate.service';
import { VideoListService } from './video-list/video-list.service';
import { VideoDetailService } from './video-detail/video-detail.service';
import { RatingService } from './rating/rating.service';

/** Importing all pipes */
import { ValuesPipe } from './pipes/responseValuesPipe';

/** importing all componets */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';


/** creating route configuration */
export const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  {
    path: 'videos',
    component: VideoListComponent,
    data: {
      title: 'Videos List'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'video-detail/:videoId',
    component: VideoDetailComponent,
    data: {
      title: 'Video Details'
    },
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent},
];

/** injecting components, modules etc into @NgModule */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideoListComponent,
    VideoDetailComponent,
    ValuesPipe,
    jqxRatingComponent,
    NotFoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthenticateService,AuthGuard,VideoListService,RouterLink,VideoDetailService,CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
