import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioRoutingModule } from './usuario.routing.module';

import { ListComponent } from './list/list.component';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';

import { UsuarioService } from './usuario.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      UsuarioRoutingModule
    ],
    declarations: [
      ListComponent,
      ListUsuarioComponent,
      DetailComponent,
      AddComponent,
      EditComponent
    ],
    providers: [UsuarioService]
})
export class UsuarioModule {}