import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioComponent } from './usuario.component';

const usuariosRoutes: Routes = [
  //{ path: '', component: UsuariosComponent, children: [
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'usuarios/new', component: UsuarioAddComponent },
      { path: 'usuarios/:id', component: UsuarioDetalheComponent },
      { path: 'usuarios/:id/edit', component: UsuarioAddComponent }
  //]}
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}