import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogined(): boolean {
    return false;
  }

  constructor() {

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
}
