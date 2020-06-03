import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Recetas } from 'src/app/models/recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private firestore:AngularFirestore) { }

  getReceta(){
    return this.firestore.collection('recetas').snapshotChanges();
  }

}
