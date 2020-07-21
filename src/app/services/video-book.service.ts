import { Injectable } from '@angular/core';
import { Video } from '../classes/video';

@Injectable({
  providedIn: 'root'
})
export class VideoBookService {

  linkVideo:string;
  private nextId: number;

  constructor() {
    let books = this.getBookVideos();

    // Have the good number of element to add with the good index in bookmarks
    if(books.length == 0){
      this.nextId = 0;
    }
    else{
      let maxId = books[(books.length-1)].id;
      this.nextId = maxId + 1;
    }
    
   }

   // Add a video to the bookmarks
   public addBookVideo(link: string){
      this.linkVideo = link; 

      let book = new Video(this.nextId, link);
      let books = this.getBookVideos();
      books.push(book);

      this.setLocalStorageBookVideo(books);

      this.nextId++;
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
  public setBookLink(vid: string){
    this.linkVideo = vid;
  }

  // Get thenumber of element of the Array in localStorage of bookmarks
  public getLength(){
    let videos = this.getBookVideos();
     return videos.length;
   }

   public getBookVideos(): Video[]{
     let localStorageItem = JSON.parse(localStorage.getItem('book'));
     return localStorageItem == null ? [] : localStorageItem.books;
   }

   public getBookVideo(id: number){
    let videos = this.getBookVideos();
    videos = videos.filter((video) => video.id == id);

    return videos == null ? Video : videos;
   }

   public getLastBookVideo(){
    let videos = this.getBookVideos();
    
    if(videos != null){
      return videos[videos.length-1].link;
    }
    else{
      return null;
    }
   }


   // Write the item in the localStorage when it is added in the array of Bookmarks
   private setLocalStorageBookVideo(books: Video[]): void{
      localStorage.setItem('book', JSON.stringify({ books: books }));
   }
   

   // Remove a video in localStorage of bookmarks
   public removeBookVideo(id: number): void {
    let books = this.getBookVideos();
    books = books.filter((book) => book.id !== id);
    this.setLocalStorageBookVideo(books);
  }
}
