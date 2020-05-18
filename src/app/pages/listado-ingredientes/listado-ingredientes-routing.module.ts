import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoIngredientesPage } from './listado-ingredientes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoIngredientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoIngredientesPageRoutingModule {}
