import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios: Usuario[];// = [];

  constructor(private usuariosService: UsuarioService) { }

  ngOnInit() {    
    this.getUsuarios();  
  }
  
  getUsuarios(){
    this.usuariosService.getAll()
                        .subscribe(
                          data => this.usuarios = data, 
                          err => {alert('Aconteceu um erro!');});
  /*
    this.usuariosService.usuariosChanged
                      .subscribe(
                        (observable: any) => observable
                      .subscribe(
                          data => this.usuarios = data
                      ));
    }
  */
  } 
}
