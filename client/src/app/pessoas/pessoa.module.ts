import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
//import { PessoasInMemoryDS } from './pessoas-in-memory-ds';

import { PessoasComponent } from './pessoas.component';
import { PessoaAddComponent } from './pessoa-add/pessoa-add.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaService } from './pessoa.service';
import { PessoaRoutingModule } from './pessoa.routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      //InMemoryWebApiModule.forRoot(PessoasInMemoryDS, { delay: 600 }),
      PessoaRoutingModule
    ],
    declarations: [
      PessoasComponent,   
      PessoaAddComponent,
      PessoaDetalheComponent,
      PessoaListaComponent,
    ],
    providers: [PessoaService]
})
export class PessoaModule {}