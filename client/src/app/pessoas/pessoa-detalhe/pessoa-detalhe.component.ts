import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../pessoa';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.css']
})
export class PessoaDetalheComponent implements OnInit, OnDestroy {

  pessoaSelecionada: Pessoa;
  private id: number;
  private inscricao: Subscription;

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private pessoasService: PessoaService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];        
        this.pessoasService.get(this.id)
                           .subscribe(
                             data => this.pessoaSelecionada = data);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/pessoas', this.id, 'edit']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onDelete(){
    if (confirm("Tem certeza que quer deletar a pessoa: " + this.pessoaSelecionada.nome + "?")) {
      this.pessoasService.remove(this.pessoaSelecionada.id).subscribe(
        data => this.router.navigate(['/pessoas']),
        err => {alert("Contato não removido.");
      });
    }
  }
}