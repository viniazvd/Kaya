import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit, OnDestroy {

  usuarioSelecionada: Usuario;
  private id: number;
  private inscricao: Subscription;

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private usuariosService: UsuarioService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];        
        this.usuariosService.get(this.id)
                           .subscribe(
                             data => this.usuarioSelecionada = data);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/usuarios', this.id, 'edit']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onDelete(){
    if (confirm("Tem certeza que quer deletar a usuario: " + this.usuarioSelecionada.nome + "?")) {
      this.usuariosService.remove(this.usuarioSelecionada.id).subscribe(
        data => this.router.navigate(['/usuarios']),
        err => {alert("Contato não removido.");
      });
    }
  }
}