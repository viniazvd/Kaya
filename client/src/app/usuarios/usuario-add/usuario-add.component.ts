import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';

import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit, OnDestroy{

  private usuarioIndex: number;
  private title: string;
  private isNew: boolean = true;
  private usuario: Usuario;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuariosService: UsuarioService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.usuarioIndex = +params['id'];
          this.usuariosService.get(this.usuarioIndex)
                             .subscribe(
                               data => this.usuario = data);
          this.title = 'Edit usuario';
        } else {
          this.isNew = true;
          this.usuario = new Usuario();
          this.title = 'New usuario';
        }
      }
    );
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {  
    this.router.navigate(['/usuarios']);
  }

  onSavee(post) { 
    post.preventDefault();
    
    this.router.navigate(['/usuarios']);


    if (!this.isNew){
      this.usuariosService.update({id: this.usuarioIndex, 
                                   nome:post.target.nome.value, 
                                   sobrenome:post.target.sobrenome.value, 
                                   email:post.target.email.value,
                                   senha:post.target.senha.value})
                         .subscribe(usuario => {
                          this.usuariosService.getAll();
                        });
    } else {
      this.usuariosService.add({nome:post.target.nome.value, 
                                sobrenome:post.target.sobrenome.value, 
                                email:post.target.email.value,
                                senha:post.target.senha.value})
                         .subscribe(usuario => {
                          this.usuariosService.getAll();
                        });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
