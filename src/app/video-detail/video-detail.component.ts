import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { VideoDetailService } from './video-detail.service';
import { RatingService } from '../rating/rating.service';

import {jqxRatingComponent} from '../rating/rating.component';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers:[]
})
export class VideoDetailComponent implements OnInit, AfterViewInit {

  public video = new Observable();
  videoId:any;
  videoRating:number;
  currentVideoRating:number;
    private sub: any;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private _flashMessagesService: FlashMessagesService,
              private videoDetailService : VideoDetailService,
              private ratingService: RatingService) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
          this.videoId = params['videoId']; 
           if(this.videoId){
              this.videoDetailService.getVideo(this.videoId).subscribe((data)=>{
                this.video = data,
                this.currentVideoRating = this.getAverageRating(data.ratings);
                console.log("rating is "+ this.currentVideoRating);
                this.myRating.writeValue(this.currentVideoRating);
              },
                  error => console.log(error)
              );
           }
    });
  }

    @ViewChild('ratingReference') myRating: jqxRatingComponent;
    ngAfterViewInit(): void
    {
        this.myRating.createWidget({ width: 350, height: 35 });
    }
    onChange(event)
    {
       // (<HTMLElement>document.getElementById('rate')).innerHTML = '<span>' + event.value + '</span';
        this.myRating.writeValue(event.value);
        this.videoRating = event.value;
    }

    rateVideo(videoId){
      console.log("submit rating clicked");

      this.ratingService.rateVideo(videoId,this.videoRating).subscribe((response)=>{
        console.log("huston we have response "+response);
        if(response.status == "success"){
            this._flashMessagesService.show('Video successfully rated!', { cssClass: 'alert-success',timeout: 5000  } );
            this.router.navigate(['/videos']);
        }
      },
        error => console.log(error)
      );
    }

    getAverageRating(ratings:any[]):number{
         let sum = 0;
        for(var i=0, n=ratings.length; i < n; i++) 
        { 
            sum += sum + ratings[i]; 
        }
        console.log("rating sum is "+sum/ratings.length);
        return sum/ratings.length;
    }

}
