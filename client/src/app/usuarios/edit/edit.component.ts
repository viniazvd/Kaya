import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  private id: number;
  private subscription: Subscription;

  usuarios: Usuario[];
  _id: string;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.usuarioService.getUser(this.id)
                           .subscribe(
                              data => { this.usuarios = data; },
                              err  => { alert('Aconteceu um erro!'); }
                            );
      }
    );
  }

  onCancel() {
    this.navigateBack();
  }

  update(event) {
		event.preventDefault();
        var userEdit = {
            _id:       this.id, 
            nome:      this.nome,
            sobrenome: this.sobrenome,
            email:     this.email,
            senha:     this.senha
        }
        
        this.usuarioService.update(userEdit)
                           .subscribe(usuario => {
                              alert('Usuário atualizado!')
                              this.navigateBack()
                            });
        
	}

  private navigateBack() {
    this.router.navigate(['/usuarios']);
  }
}
