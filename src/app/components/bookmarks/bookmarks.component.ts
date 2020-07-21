import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../classes/video';
import { VideoBookService } from '../../services/video-book.service';

@Component({
  selector: 'Bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  @Input()
  public book: Video;

  constructor(private videoBookService: VideoBookService) { }

  ngOnInit(): void {
  }

  // Remove a video from the bookmarks
  public removeBookVideo(): void {
    this.videoBookService.removeBookVideo(this.book.id);
  }

  // Play a video which is store in the bookmarks
  public playVideo(): void {
    this.videoBookService.setBookLink(this.book.link);
  }
}
