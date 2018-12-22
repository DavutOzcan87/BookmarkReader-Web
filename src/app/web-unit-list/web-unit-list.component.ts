import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../services/bookmark-service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-web-unit-list',
  templateUrl: './web-unit-list.component.html',
  styleUrls: ['./web-unit-list.component.css']
})
export class WebUnitListComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService, private loginService: LoginService ) { }

  ngOnInit() {
    console.log('trying to read bookmarks');
    this.bookmarkService
    .getBookmarks(this.loginService.getLoginedUser().id)
    .subscribe(bookmarks => console.log('bookmarks from service' , bookmarks));
  }

}
