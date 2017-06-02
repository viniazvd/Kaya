import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const usuariosRoutes: Routes = [
      { path: 'usuarios', component: ListComponent },
      { path: 'usuarios/add', component: AddComponent },
      { path: 'usuarios/:id', component: DetailComponent },      
      { path: 'usuarios/:id/edit', component: EditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}