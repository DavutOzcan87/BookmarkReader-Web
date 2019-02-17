import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../services/bookmark-service';
import { LoginService } from '../services/login.service';
import { WeblistViewModel } from './weblist-view-model';
import { concatMap } from 'rxjs/operators';

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
    this.loginService.createRemoteUserIfNecessary()
    .pipe(concatMap(user=>this.bookmarkService.getBookmarks(user.googleId)))
    .subscribe(bookmarks => this.updateBookmarks(bookmarks) , error=>{
        console.error("error retrieving bookmarks" , error);
    });
  }
  updateBookmarks(bookmarks: string[]): void {
    console.log('bookmarks from service' , bookmarks);
    this.model.setBookmarks(bookmarks);
  }

  delete(bookmark: string): void {
    console.log('called bookmark delete');
    this.bookmarkService.delete(this.loginService.getLoginedUser().id , bookmark)
      .subscribe(() => {
        this.model.remove(bookmark);
      })

  }

  add(url : string){
    console.log("adding" , url);
    this.addAll([url]);
  }

  addAll(urls : string[]):void{
    this.bookmarkService.add(this.loginService.getLoginedUser().id , urls ).subscribe(user=>{
      this.updateBookmarks(user.bookmarks);
    },error=>{
      console.log("errr" , error);
    });
  }

  onFileChange(input:any) :void{
    let file = input.files[0];
    this.readFile(file)
      .then(lines=>{
        this.addAll(lines);
      })
      .catch(err => console.error("cannot add bookmarks" , err));
  }

  readFile(file: any):Promise<string[]>{
    return new Promise<string[]>((resolve,reject)=>{
      var reader = new FileReader();
      reader.onload = (event: any)=>resolve(event.target.result.split('\n'));
      reader.readAsText(file);
    });
  }

  onFilterChange(filter: string):void{
    console.log('filter' , filter);
    this.model.filter(filter);
  }

}
