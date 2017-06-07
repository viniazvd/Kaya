import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private showNavBar: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit(){
    this.authService.showNavBarEmitter.subscribe(
      (mode: boolean) => {
        if (mode !== null) {
          this.showNavBar = mode;
        }
      }
    );
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  logout() {
    alert('Você saiu do sistema.');
    localStorage.removeItem('token');
  }
}
