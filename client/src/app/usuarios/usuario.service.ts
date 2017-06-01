import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

    private _urlUsuario = 'http://localhost:3000/users/';

    constructor(private http: Http) { }

    getAll(): Observable<Usuario[]> {
        return this.http.get(this._urlUsuario)
                        .map(res => res.json());
    }

    getUser(id){
        return this.getAll()
        .map((list: any) => list.find(usuario => usuario._id == id))
        .catch(this.handleError);
    }
    
    add(newUser){
        return this.http.post(this._urlUsuario, JSON.stringify(newUser), {headers: this.getHeaders()})
                   .map(res => res.json());
    }

    update(user){
    return this.http.put(this._urlUsuario + user._id, user, {headers: this.getHeaders()})
                    .map(res => res.json())
                    .catch(this.handleError);
  }

    delete(id){    
    return this.http.delete(this._urlUsuario + id, {headers: this.getHeaders()})
                    .map(res => res.json())
                    .catch(this.handleError);
  }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    private handleError(error: any) {
        let erro = error.message;
        console.error('ERROOOO', error);
        return Observable.throw(erro);
    }
}