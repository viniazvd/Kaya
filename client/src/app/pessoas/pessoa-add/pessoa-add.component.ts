import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';

import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../pessoa';

@Component({
  selector: 'app-pessoa-add',
  templateUrl: './pessoa-add.component.html',
  styleUrls: ['./pessoa-add.component.css']
})
export class PessoaAddComponent implements OnInit, OnDestroy{

  private pessoaIndex: number;
  private title: string;
  private isNew: boolean = true;
  private pessoa: Pessoa;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pessoasService: PessoaService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.pessoaIndex = +params['id'];
          this.pessoasService.get(this.pessoaIndex)
                             .subscribe(
                               data => this.pessoa = data);
          this.title = 'Edit pessoa';
        } else {
          this.isNew = true;
          this.pessoa = new Pessoa();
          this.title = 'New pessoa';
        }
      }
    );
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {  
    this.router.navigate(['/pessoas']);
  }

  onSavee(post) { 
    post.preventDefault();
    
    this.router.navigate(['/pessoas']);


    if (!this.isNew){
      this.pessoasService.update({id: this.pessoaIndex, nome:post.target.nome.value, email:post.target.email.value})
                         .subscribe(pessoa => {
                          this.pessoasService.getAll();
                        });
    } else {
      this.pessoasService.add({nome:post.target.nome.value, email:post.target.email.value})
                         .subscribe(pessoa => {
                          this.pessoasService.getAll();
                        });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
