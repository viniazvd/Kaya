import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  //private _urlUsuario = 'http://0.0.0.0:3000/api/usuarios'; //loopback URI
  private _urlUsuario = 'http://localhost:3000/users/';
  usuariosChanged = new EventEmitter<Observable<Usuario[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get(this._urlUsuario)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  get(id){
    return this.getAll()
               .map((list: any) => list.find(usuario => usuario.id == id))
               .catch(this.handleError);
  }

  add(json){
    return this.http.post(this._urlUsuario, json, {headers: this.getHeaders()})
                    .map(res => res.json())
                    .do(data => this.usuariosChanged.emit(this.getAll()))
                    .catch(this.handleError);
  }

  update(json){
    return this.http.put(this._urlUsuario+ '/' +json.id, json, {headers: this.getHeaders()})
                    .map(res => res.json())
                    .do(data => this.usuariosChanged.emit(this.getAll()))
                    .catch(this.handleError);
  }

  remove(id){    
    return this.http.delete(this._urlUsuario+ '/' +id, {headers: this.getHeaders()})
                    .map(res => res.json())
                    .do(data => this.usuariosChanged.emit(this.getAll()))
                    .catch(this.handleError);
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }
}