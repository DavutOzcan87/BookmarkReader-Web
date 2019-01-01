import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class WeblistViewModel {
  private bookmarks: string[];
  private origin: string[];

  remove(bookmark: string): void {
    const index = this.bookmarks.indexOf(bookmark);
    if (index >= 0) {
      this.bookmarks.splice(index, 1);
    }
  }
  setBookmarks(bookmarks: string[]): void {
    this.origin = bookmarks;
    this.bookmarks = bookmarks;
  }

  filter(filter: string): void {
    let mOrigin = this.origin;
    let observable =  Observable.create(function(observer) {
      observer.next(mOrigin);
    }).pipe(map((list:string[])=> {
      return list.filter(item=>item.includes(filter));
    })) as Observable<string[]>;

    observable.subscribe(filtered =>{
      this.bookmarks = filtered;
    });
  }

}

