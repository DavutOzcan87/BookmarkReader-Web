import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string;
  profileUrl: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    let user =  this.loginService.getLoginedUser();
    this.name = user.name;
    this.profileUrl = user.imageUrl;
  }

}
