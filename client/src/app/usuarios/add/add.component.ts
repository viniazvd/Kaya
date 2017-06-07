import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { UsuarioService } from './../usuario.service';
import { Usuario } from './../../usuario';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  usuarios: Usuario[] = [];
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;

  constructor(private router: Router, 
              private usuarioService: UsuarioService){      
  }    

  onCancel() {
    this.navigateBack();
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
                                alert('Usuário cadastrado!')
                                this.navigateBack()
                            });
  }

  private navigateBack() {
    this.router.navigate(['/usuarios']);
  }
}
