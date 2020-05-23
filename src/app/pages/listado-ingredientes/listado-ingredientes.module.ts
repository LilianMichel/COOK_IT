import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoIngredientesPageRoutingModule } from './listado-ingredientes-routing.module';

import { ListadoIngredientesPage } from './listado-ingredientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoIngredientesPageRoutingModule
  ],
  declarations: [ListadoIngredientesPage]
})
export class ListadoIngredientesPageModule {}
