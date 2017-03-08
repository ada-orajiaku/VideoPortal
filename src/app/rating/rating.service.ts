import { Injectable } from '@angular/core';
import { Http , URLSearchParams} from '@angular/http';
import { Globals } from '../common/globals';
import { contentHeaders } from '../common/headers';
import { User } from '../models/user';

@Injectable()
export class RatingService {

  private currentUser : User =  JSON.parse(localStorage.getItem('currentUser'));

  constructor(private http:Http) { }

  rateVideo(videoId, rating){
    console.log("about to rate video. videoId is "+videoId+" and rating is "+rating);
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('videoId', videoId);
    urlSearchParams.append('rating', rating);
    let body = urlSearchParams.toString();
    
    return this.http.post(Globals.baseApiUrl+'/video/ratings?sessionId='+this.currentUser.sessionId,
                body,{headers:contentHeaders}).map(res=>res.json());
  }
}
