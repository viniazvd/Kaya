import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './../usuario.service';
import { Usuario } from './../../usuario';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService:UsuarioService){
        this.list();
  }    

  ngOnInit() {
    this.usuarioService.getAll()
                       .subscribe(
                          data => this.usuarios = data,
                          err => { alert('Aconteceu um erro!'); }
                        );
  }

  list(){
      this.usuarioService.getAll()
                          .subscribe(usuarios => {
                              this.usuarios = usuarios;                
                          });
  }
}
