import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatIngredientesPageRoutingModule } from './cat-ingredientes-routing.module';

import { CatIngredientesPage } from './cat-ingredientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatIngredientesPageRoutingModule
  ],
  declarations: [CatIngredientesPage]
})
export class CatIngredientesPageModule {}
