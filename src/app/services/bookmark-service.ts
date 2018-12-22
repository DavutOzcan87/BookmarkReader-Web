import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from './user-dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BookmarkService {
    constructor(private http: HttpClient) {

    }

    getBookmarks(googleId: string): Observable<string[]> {
      const url = `/api/users/${googleId}`;
      return this.http.get<UserDto>(url)
      .pipe( map(user => user.bookmarks));
    }
}
