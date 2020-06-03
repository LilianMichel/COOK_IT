import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {
 
 public titulo: string;
 public ingredientes: string;
 public preparacion: string;
  constructor(private navparams: NavParams, private modal: ModalController) { }

  ngOnInit() {

    this.titulo = this.navparams.get('title'),
    this.ingredientes = this.navparams.get('ingredientes'),
    this.preparacion = this.navparams.get('preparacion')


  }

  close(){
    this.modal.dismiss()
  }


}
