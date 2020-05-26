import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Registro } from '../models/registro';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private firestore: AngularFirestore) { }
  getRegistro() {
    return this.firestore.collection('registro').snapshotChanges();
  }
  createRegistro(registro: Registro) {
    return this.firestore.collection('registro').add(registro);
  }
}
