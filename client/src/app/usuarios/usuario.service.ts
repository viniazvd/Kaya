import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  private _urlUsuario = 'http://localhost:3000/users';

  constructor(private http: Http) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get('http://localhost:3000/users')
                    .map(res => res.json());
  }
    
    add(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }
    
    deleteTask(id){
        return this.http.delete(this._urlUsuario+id)
            .map(res => res.json());
    }
}