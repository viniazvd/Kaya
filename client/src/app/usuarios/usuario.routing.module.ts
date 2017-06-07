import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

import { AuthGuard } from './../login/auth.guard';

const usuariosRoutes: Routes = [
      { path: 'usuarios', component: ListComponent, canActivate: [AuthGuard] },
      { path: 'usuarios/add', component: AddComponent, canActivate: [AuthGuard] },
      { path: 'usuarios/:id', component: DetailComponent, canActivate: [AuthGuard] },      
      { path: 'usuarios/:id/edit', component: EditComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}