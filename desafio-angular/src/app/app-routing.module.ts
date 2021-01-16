import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {UsuarioCrudComponent} from "./views/usuario-crud/usuario-crud.component";
import { UsuarioCreateComponent } from './component/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './component/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './component/usuario/usuario-delete/usuario-delete.component';
import { HistoricoCrudComponent } from './views/historico-crud/historico-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "usuarios",
    component: UsuarioCrudComponent
  },
  {
    path: "usuarios/create",
    component: UsuarioCreateComponent
  },
  {
    path: "usuarios/update/:id",
    component: UsuarioUpdateComponent
  },
  {
    path: "usuarios/delete/:id",
    component: UsuarioDeleteComponent
  },
  {
    path: "historico",
    component: HistoricoCrudComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
