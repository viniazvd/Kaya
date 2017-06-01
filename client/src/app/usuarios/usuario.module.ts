import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
//import { UsuariosInMemoryDS } from './usuarios-in-memory-ds';

import { UsuarioComponent } from './usuario.component';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioService } from './usuario.service';
import { UsuarioRoutingModule } from './usuario.routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      //InMemoryWebApiModule.forRoot(UsuariosInMemoryDS, { delay: 600 }),
      UsuarioRoutingModule
    ],
    declarations: [
      UsuarioComponent,   
      UsuarioAddComponent,
      UsuarioDetalheComponent,
      UsuarioListaComponent,
    ],
    providers: [UsuarioService]
})
export class UsuarioModule {}