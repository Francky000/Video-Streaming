import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoBookService } from '../../services/video-Book.service';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  public url: string;
  public linkVideo: SafeResourceUrl;

  constructor(public videoService: VideoService,
              public videoBookService: VideoBookService,
              private sanitizer: DomSanitizer) { 

  }

  ngOnInit(): void {
  }

  // Add the video which is reading in the bookmarks
  public addBook(): void {
    this.videoBookService.addBookVideo(this.videoService.getLastVideo());
  }

  // Take the link of the video which has been type in the SearchBar
  public getVideoLink(){
      this.url = this.videoService.getLink();
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.url); 
  }


}