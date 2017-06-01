import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';
import { UsuarioRoutingModule } from './usuario.routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      UsuarioRoutingModule
    ],
    declarations: [UsuarioComponent],
    providers: [UsuarioService]
})
export class UsuarioModule {}