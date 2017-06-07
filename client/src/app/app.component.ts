import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit(){

  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  logout() {
    alert('Você saiu do sistema.');
    localStorage.removeItem('token');
    location.reload();
  }
}
