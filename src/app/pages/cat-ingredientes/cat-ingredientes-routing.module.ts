import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatIngredientesPage } from './cat-ingredientes.page';

const routes: Routes = [
  {
    path: '',
    component: CatIngredientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatIngredientesPageRoutingModule {}
