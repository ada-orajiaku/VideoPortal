import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Video } from '../models/video';
import { Globals } from '../common/globals';
import { User } from '../models/user';


@Injectable()
export class VideoListService {

  pageNumber: Number = 1;
  pageCount: Number = 10;
  currentUser : User =  JSON.parse(localStorage.getItem('currentUser'));

  constructor(private http:Http) { }

  getVideos(pageNumber:Number = 1) {
    return this.http.get(Globals.baseApiUrl+'/videos?sessionId='+this.currentUser.sessionId)
        .map(res => res.json().data);
  }

}