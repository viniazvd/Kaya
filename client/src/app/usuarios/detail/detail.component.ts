import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Usuario } from './../../usuario';
import { UsuarioService } from './../usuario.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  usuarios: Usuario[];
  private id: number;
  private subscription: Subscription;

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
                              err => { alert('Aconteceu um erro!'); }
                            );
      }
    );
  }

  update() {
    this.router.navigate(['/usuarios/', this.id, 'edit']);
  }
    
  delete(id){
    if (confirm("Tem certeza que quer deletar o usuario?")) {
      this.usuarioService.delete(id)
                         .subscribe(
                            data => { alert("O usuário foi removido."); this.navigateBack() },
                            err => { alert("O usuário não foi removido.") }
                          );
    }
  }

  navigateBack() {
    this.router.navigate(['/usuarios']);
  }

  onCancel() {
    this.navigateBack();
  }
}
