import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from '../../services/video.service'

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public isReadable: boolean;

  @Input()
  public videoLink: string;

  constructor(public videoservice: VideoService) {
  }

  ngOnInit(): void {
    this.videoLink = '';
  }

  // Add a video in the localStorage
  public addVideo(linkVideo: string): void {
    this.videoservice.addVideo(this.videoLink);
    this.videoLink = '';
  }

}
