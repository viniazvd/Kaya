import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
//import { PessoasComponent } from './pessoas/pessoas.component';

const appRoutes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  //{ path: 'pessoas', component: PessoasComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}