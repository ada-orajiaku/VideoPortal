import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { VideoListService } from './video-list.service';
import { Video } from '../models/video';
import { ValuesPipe } from '../pipes/responseValuesPipe';
import { RouterLink } from '@angular/router';

import {jqxRatingComponent} from '../rating/rating.component';


@Component({
  selector: 'app-videos',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers:[],
})

export class VideoListComponent implements OnInit{
  
 // @ViewChild('video-list') videoList;
  public videos = new Observable<Video[]>();
  public routerLink;

  constructor(private videoListService : VideoListService,routerLink:RouterLink) { }


  ngOnInit(){
    this.videoListService.getVideos().subscribe((data)=>
      this.videos = data,
      error => console.log(error)
    );
  }



}