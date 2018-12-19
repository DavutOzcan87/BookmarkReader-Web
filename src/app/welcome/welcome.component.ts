import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private loginService: LoginService;
  router: Router;
  constructor(loginService: LoginService , router:Router) {
    this.loginService = loginService;
    this.router = router;
  }

  ngOnInit() {
    
  }
}
