import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { ListComponent } from './list/list.component';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      UsuarioRoutingModule
    ],
    declarations: [
      UsuarioComponent, 
      ListComponent,
      ListUsuarioComponent
    ],
    providers: [UsuarioService]
})
export class UsuarioModule {}