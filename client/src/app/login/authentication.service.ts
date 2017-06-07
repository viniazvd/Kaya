import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from 'rxjs/Rx';

import { Usuario } from './../usuario';

import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class AuthenticationService {

  private _urlUsuario = 'http://localhost:3000/users/authenticate';

  constructor(private router: Router, private http: Http) {}

  login(user) {
    
      return this.http.post(this._urlUsuario, JSON.stringify(user), {headers: this.getHeaders()})
                    .map((response: Response) => {
                        let token = response.json();
                        if (token) {                            
                            localStorage.setItem('token', token);
                        } else {
                          console.log('tchau')  
                        }
                    }).catch(this.handleError);
    
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('alg', 'HS256');
    //headers.append('typ', 'JWT');
    return headers;
  }

  private handleError(error: any) {
    let erro = error.message;
    console.error('ERROOOO', error);
    return Observable.throw(erro);
  }
}