import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Users } from '../models/users';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;
  constructor(public afAuth: AngularFireAuth, private afsAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(Users => (this.isLogged = Users));
  }
  /*

  async onRegister(users:Users){
    try{
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        users.email,
        users.password
      )
    }catch (error){
      console.log('error en el registro', error)
    }
  }

  async onLogin(users:Users){
    try{
      return await this.afAuth.auth.signWithEmailAndPassword(users.email, users.password)
    }catch (error){
      console.log('error en Loggin', error);
    }
  }*/

  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
