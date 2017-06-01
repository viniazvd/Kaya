import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { ListComponent } from './list/list.component';

const usuariosRoutes: Routes = [
      { path: 'usuarios', component: ListComponent }/*,
      { path: 'usuarios', component: UsuarioComponent }*/
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}