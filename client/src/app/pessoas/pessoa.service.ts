import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Pessoa } from './pessoa';

@Injectable()
export class PessoaService {

  private _urlPessoa = 'http://0.0.0.0:3000/api/pessoas';
  pessoasChanged = new EventEmitter<Observable<Pessoa[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Pessoa[]> {
    return this.http.get(this._urlPessoa)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  get(id){
    return this.getAll()
               .map((list: any) => list.find(pessoa => pessoa.id == id))
               .catch(this.handleError);
  }

  add(json){
    return this.http.post(this._urlPessoa, json, {headers: this.getHeaders()})
                    .map(res => res.json())
                    .do(data => this.pessoasChanged.emit(this.getAll()))
                    .catch(this.handleError);
  }

  update(json){
    return this.http.put(this._urlPessoa+ '/' +json.id, json, {headers: this.getHeaders()})
                    .map(res => res.json())
                    .do(data => this.pessoasChanged.emit(this.getAll()))
                    .catch(this.handleError);
  }

  remove(id){    
    return this.http.delete(this._urlPessoa+ '/' +id, {headers: this.getHeaders()})
                    .map(res => res.json())
                    .do(data => this.pessoasChanged.emit(this.getAll()))
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