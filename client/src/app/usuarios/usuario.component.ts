import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
    usuarios: Usuario[];
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    
    constructor(private usuarioService:UsuarioService){
        this.usuarioService.getAll()
            .subscribe(usuarios => {
                this.usuarios = usuarios;                
            });
    }
    
    add(event){
        event.preventDefault();
        var newUser = {
            nome: this.nome,
            sobrenome: this.sobrenome,
            email: this.email,
            senha: this.senha
        }
        
        this.usuarioService.add(newUser)
                           .subscribe(usuario => {
                                this.usuarios.push(usuario);
                                this.nome = '';
                                this.sobrenome = '';
                                this.email = '';
                                this.senha = '';
                            });
    }
    
    deleteTask(id){
       /* var usuarios = this.usuarios;
        
        this.usuarioService.deleteTask(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < usuarios.length;i++){
                    if(usuarios[i]._id == id){
                        usuarios.splice(i, 1);
                    }
                }
            }
        });*/
    }
}
