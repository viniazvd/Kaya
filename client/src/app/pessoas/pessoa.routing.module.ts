import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaAddComponent } from './pessoa-add/pessoa-add.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoasComponent } from './pessoas.component';

const pessoasRoutes: Routes = [
  //{ path: '', component: PessoasComponent, children: [
      { path: 'pessoas', component: PessoasComponent },
      { path: 'pessoas/new', component: PessoaAddComponent },
      { path: 'pessoas/:id', component: PessoaDetalheComponent },
      { path: 'pessoas/:id/edit', component: PessoaAddComponent }
  //]}
];

@NgModule({
    imports: [RouterModule.forChild(pessoasRoutes)],
    exports: [RouterModule]
})
export class PessoaRoutingModule {}