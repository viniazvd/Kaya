import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
    usuarios: Usuario[];
    //_id: string;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    
    constructor(private router: Router, private usuarioService:UsuarioService){
        this.list();
    }    

    list(){
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

    update(user) {
        //alert(user._id)
		this.usuarioService.update(user)
                           .subscribe(
                                   data => { alert("O usuário foi atualizado."); this.list(); },
                                   err => { alert("O usuário não foi atualizado.") }
                           );
	}
    
    delete(id){
        if (confirm("Tem certeza que quer deletar o usuario?")) {
            this.usuarioService.delete(id)
                               .subscribe(
                                    data => { alert("O usuário foi removido."); this.list(); },
                                    err => { alert("O usuário não foi removido.") }
                                );
        }
    }
}
