import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecadosComponent } from './pages/recados/recados.component';
import { RecadoComponent } from './pages/recado/recado.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'recados', component: RecadosComponent },
  { path: 'recado/:id', component: RecadoComponent },
  { path: 'recado/nuevo', component: RecadoComponent },
  // { path: '**', pathMatch: 'full', redirectTo: 'recados' },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'registro' }

];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
