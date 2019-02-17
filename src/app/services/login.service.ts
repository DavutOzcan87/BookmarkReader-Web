import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from './user-dto';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  createRemoteUserIfNecessary(): Observable<UserDto> {
    let user = this.getLoginedUser();
    return this.http.get<UserDto>("backend/users/"+user.id)
      .pipe(catchError(err=>this.createNewUserAtRemote(user)));
  }
  isLogined(): boolean {
    return false;
  }
  createNewUserAtRemote(user : User):Observable<UserDto>{
    let dto = new UserDto();
    dto.name = user.name;
    dto.email = user.email;
    dto.googleId = user.id;
    dto.surname = user.surname;
    dto.bookmarks = [];
    return this.http.post<UserDto>("backend/users" , dto)
    .pipe(map(success => dto));
  }

  constructor(private http: HttpClient) {

  }

  getLoginedUser(): User {
    return JSON.parse(localStorage.getItem('googleProfile'));
  }
}


export class User {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  surname: string;
}
