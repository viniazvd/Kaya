import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
//import { routing } from './app.routes';
//import { pessoasRouting } from './pessoas/pessoa.routing';

import { PessoaModule } from './pessoas/pessoa.module';
import { UsuarioModule } from './usuarios/usuario.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//import { PessoasComponent } from './pessoas/pessoas.component';
//import { PessoaListaComponent } from './pessoas/pessoa-lista/pessoa-lista.component';
//import { PessoaIdComponent } from './pessoas/pessoa-id/pessoa-id.component';
//import { PessoaDetalheComponent } from './pessoas/pessoa-detalhe/pessoa-detalhe.component';
//import { PessoaAddComponent } from './pessoas/pessoa-add/pessoa-add.component';
//import { PessoaStartComponent } from './pessoas/pessoa-start.component';

//import { PessoaService } from './pessoas/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //PessoasComponent,
    //PessoaListaComponent,
    //PessoaIdComponent,
    //PessoaDetalheComponent,
    //PessoaAddComponent,
    //PessoaStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    PessoaModule,
    UsuarioModule
    //routing
    //pessoasRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
