import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Video } from '../models/video';
import { Globals } from '../common/globals';
import { User } from '../models/user';

@Injectable()
export class VideoDetailService {

  private currentUser : User =  JSON.parse(localStorage.getItem('currentUser'));

  constructor(private http:Http) { }

  getVideo(videoId:any) {
    return this.http.get(Globals.baseApiUrl+'/video?videoId='+videoId+'&sessionId='+this.currentUser.sessionId)
        .map(res => res.json().data);
  }

}
