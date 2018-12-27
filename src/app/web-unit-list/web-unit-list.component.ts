import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../services/bookmark-service';
import { LoginService } from '../services/login.service';
import { WeblistViewModel } from './weblist-view-model';

@Component({
  selector: 'app-web-unit-list',
  templateUrl: './web-unit-list.component.html',
  styleUrls: ['./web-unit-list.component.css']
})
export class WebUnitListComponent implements OnInit {
  model = new WeblistViewModel();
  constructor(private bookmarkService: BookmarkService, private loginService: LoginService ) {
  }


  ngOnInit() {
    console.log('trying to read bookmarks');
    this.bookmarkService
    .getBookmarks(this.loginService.getLoginedUser().id)
    .subscribe(bookmarks => this.updateBookmarks(bookmarks));
  }
  updateBookmarks(bookmarks: string[]): void {
    console.log('bookmarks from service' , bookmarks);
    this.model.bookmarks = bookmarks;
  }

  delete(bookmark: string): void {
    console.log('called bookmark delete');
    this.bookmarkService.delete(this.loginService.getLoginedUser().id , bookmark)
      .subscribe(() => {
        const index = this.model.bookmarks.indexOf(bookmark);
        if (index >= 0) {
          this.model.bookmarks.splice(index, 1);
        }
      })

  }

  add(url : string){
    console.log("add" , url);
    this.bookmarkService.add(this.loginService.getLoginedUser().id , url ).subscribe(user=>{
      this.updateBookmarks(user.bookmarks);
    },error=>{
      console.log("errr" , error);
    });
  }

}
