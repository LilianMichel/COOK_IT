import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';
import { AuthService } from '../../services/auth.service';
import { Users } from '../../models/users';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public myForm: FormGroup;
  public registro: Registro;


  constructor(private router: Router, private authSvc: AuthService, private alertCtrl: AlertController, 
    private authService: AuthService, private registroService: RegistroService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]*')])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]*')])],
      email: ['', Validators.compose([Validators.required,Validators.minLength(10), Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9.-]+')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('(^[A-Za-z\d$@$!%*?&0-9]+$)')])],
      newpassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('(^[A-Za-z\d$@$!%*?&0-9]+$)')])],
      birthday: ['', Validators.compose([Validators.required])]
      });
  }

  guardar() {
    this.registro = {
      firstName: this.myForm.controls.firstName.value,
      lastName: this.myForm.controls.lastName.value,
      email:this.myForm.controls.email.value,
      birthday:this.myForm.controls.birthday.value,
      password:this.myForm.controls.password.value
      }
      this.registroService.createRegistro(this.registro);
    }

    Google(){
      this.authService.loginGoogleUser()
      .then((res)=>{
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
    }

    onLoginRedirect():void{
      this.router.navigate(['/login'])
    }
}
