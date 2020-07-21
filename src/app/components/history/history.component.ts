import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../classes/video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input()
  public video: Video;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  }

  // Play a video which is store in the history
  public removeVideo(): void {
    this.videoService.removeVideo(this.video.id);
  }

  // Remove a video from the history 
  public playVideo(): void {
    this.videoService.setLink(this.video.link);
  }

}
