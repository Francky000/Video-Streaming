import { Injectable } from '@angular/core';
import { Video } from '../classes/video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private linkVideo: string;
  private nextId: number;

  constructor() {
    let videos = this.getVideos();

    // Have the good number of element to add with the good index in history
    if(videos.length == 0){
      this.nextId = 0;
    }
    else{
      let maxId = videos[(videos.length-1)].id;
      this.nextId = maxId + 1;
    }
    
   }

   // Add a video to the history
   public addVideo(link: string){
      let video = new Video(this.nextId, link);
      let videos = this.getVideos();
      videos.push(video);

      this.setLocalStorageVideo(videos);

      this.nextId++;
      this.linkVideo = link; 
   }

   // Get the link of the video in SearchBar component
   public getLink(){
      if(this.linkVideo != null){
         return this.linkVideo;
        }
        else{
          return "";
        }
   }

   // Set link
   public setLink(vid: string){
     this.linkVideo = vid;
   }

   // Get thenumber of element of the Array in localStorage of history
   public getLength(){
    let videos = this.getVideos();
     return videos.length;
   }

   public getVideos(): Video[]{
      let localStorageItem = JSON.parse(localStorage.getItem('video'));
      return localStorageItem == null ? [] : localStorageItem.videos;
   }

   public getVideo(id: number){
      let videos = this.getVideos();
      videos = videos.filter((video) => video.id == id);

      return videos == null ? Video : videos;
   }

   // Renvoyer la derniere video du localStorage of history
   public getLastVideo(){
    let videos = this.getVideos();

    if(videos.length != 0){
      return videos[videos.length-1].link;
    }
    else{
      return "";
    }
    
   }

   // Write the item in the localStorage when it is added in the array of history
   private setLocalStorageVideo(videos: Video[]): void{
      localStorage.setItem('video', JSON.stringify({ videos: videos }));
   }
   
   // Remove a video in localStorage of history
   public removeVideo(id: number): void {
      let videos = this.getVideos();
      videos = videos.filter((video) => video.id !== id);
      this.setLocalStorageVideo(videos);
    }

  }
