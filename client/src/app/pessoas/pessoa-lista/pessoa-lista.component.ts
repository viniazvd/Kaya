import { Component, OnInit } from '@angular/core';

import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../pessoa';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {

  pessoas: Pessoa[];// = [];

  constructor(private pessoasService: PessoaService) { }

  ngOnInit() {    
    this.getPessoas();  
  }
  
  getPessoas(){
    this.pessoasService.getAll()
                      .subscribe(
                        data => this.pessoas = data, 
                        err => {alert('Aconteceu um erro!');}
                      );
  /*
    this.pessoasService.pessoasChanged
                      .subscribe(
                        (observable: any) => observable
                      .subscribe(
                          data => this.pessoas = data
                      ));
    }
  */
  } 
}
