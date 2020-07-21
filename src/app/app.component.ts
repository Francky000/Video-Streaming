import { Component, Input } from '@angular/core';
import { VideoService } from './services/video.service';
import { VideoBookService } from './services/video-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEndPlayer';

  constructor(public videoService: VideoService,
              public videoBookService: VideoBookService){
      
  }

  public getBookLength(){
    return this.videoBookService.getLength();
  }

  public closeModal(){
  }

  
}
