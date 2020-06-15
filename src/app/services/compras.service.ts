import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Compras } from 'src/app/models/compras';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private firestore:AngularFirestore) { }

  getCompra(){
    return this.firestore.collection('compras').snapshotChanges();
  }

  createCompra(compras: Compras,){
    this.firestore.collection('compras').add(compras);
   }

   deleteCompra(id: string){
     this.firestore.doc('compras/'+id).delete();
   }

   updateCompras(compras:Compras, id: string){
     this.firestore.doc('compras/'+id).update(compras);
   }



 }