import {
  TestBed,
  getTestBed,
  async,
  inject
} from '@angular/core/testing';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';
import { RouterLink } from '@angular/router';
import {Observable} from 'rxjs/Rx';

import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { VideoListComponent } from './video-list.component';
import { VideoListService } from './video-list.service';
import { Video } from '../models/video';

class MockVideoListService extends VideoListService {
  constructor() {
    super(null);
  }

  getVideos() {
    return Observable.of([
      {
        _id: '5842bcddc47f1d0269ab8587',
        name: '[0] Getting Started With ReactJs',
        description: 'React.js is a JavaScript library for building user interfaces. - Just the UI: Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, its easy to try it out on a small feature in an existing project. - Virtual DOM: React uses a virtual DOM diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required. - Data flow: React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding',
        url:"videos/Getting_Started_With_React.js.mp4",
                    ratings:[1, 5, 5, 4, 3, 4, 2, 5, 4, 2, 2, 4, 2, 4, 2, 4, 4]
      }]);
  }
}

describe('VideoListComponent', () => {
  let mockBackend: MockBackend;
  let videoListComponent: VideoListComponent;
  let videoListService:VideoListService;
  let routerLink: RouterLink;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        VideoListService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,RouterLink,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
       }
      ],
      imports: [
        HttpModule
      ]
    });


    videoListService = new MockVideoListService();
    //routerLink = new RouterLink();
    videoListComponent = new VideoListComponent(videoListService,routerLink);
  }));

    it('should get videos', done => {
    let videoService: VideoListService;

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    _id: '5842bcddc47f1d0269ab8587',
                    name: '[0] Getting Started With ReactJs',
                    description: 'React.js is a JavaScript library for building user interfaces. - Just the UI: Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, its easy to try it out on a small feature in an existing project. - Virtual DOM: React uses a virtual DOM diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required. - Data flow: React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding',
                    url:"videos/Getting_Started_With_React.js.mp4",
                    ratings:[1, 5, 5, 4, 3, 4, 2, 5, 4, 2, 2, 4, 2, 4, 2, 4, 4]
                  }]
              }
            )));
        });

        videoService = getTestBed().get(VideoListService);
        expect(videoService).toBeDefined();

        videoService.getVideos().subscribe((videos: Video[]) => {
            expect(videos.length).toBeDefined();
            expect(videos.length).toEqual(1);
            expect(videos[0]._id).toEqual('5842bcddc47f1d0269ab8587');
            done();
        });
    });
  });

    it('should get videos async',
    async(inject([VideoListService], (videoService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    _id: '5842bcddc47f1d0269ab8587',
                    name: '[0] Getting Started With ReactJs',
                    description: 'React.js is a JavaScript library for building user interfaces. - Just the UI: Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, its easy to try it out on a small feature in an existing project. - Virtual DOM: React uses a virtual DOM diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required. - Data flow: React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding',
                    url:"videos/Getting_Started_With_React.js.mp4",
                    ratings:[1, 5, 5, 4, 3, 4, 2, 5, 4, 2, 2, 4, 2, 4, 2, 4, 4]
                  }]
              }
            )));
        });

      videoService.getVideos().subscribe(
        (data) => {
          expect(data.length).toBe(1);
          expect(data[0].id).toBe('5842bcddc47f1d0269ab8587');
          expect(data[0].url).toBe('videos/Getting_Started_With_React.js.mp4');
      });
    })));



});