import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetasService } from '../services/recetas.service';
import { Recetas } from '../models/recetas';
import { ModalController } from '@ionic/angular';
import { RecetasComponent } from "../componentes/recetas/recetas.component"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public recetas: Recetas[];

  constructor(private router: Router, private service:RecetasService, private modal: ModalController) {
    this.service.getReceta().subscribe(data => {
      this.recetas = data.map(e =>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()as any
        }as Recetas;
      });
    });
  }

  
  nuevoIngrediente(){
    this.router.navigate(['/cat-ingredientes']);
  }

 openReceta(receta){

   this.modal.create({
     component: RecetasComponent,
     componentProps:{
       title: receta.title,
       ingredientes: receta.ingredientes,
       preparacion: receta.preparacion
     }
   }).then( (modal) => modal.present())
   
 }

}
