import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogined(): boolean {
    return false;
  }

  constructor() 
  {

  }
}
