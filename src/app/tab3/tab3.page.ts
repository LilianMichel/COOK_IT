import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { Compras } from "../models/compras";
import { ComprasService } from "../services/compras.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 public myForm: FormGroup;
 public compra: Compras;
 public compras: Compras[];
 public idSelected:any;
 public producto = {id:0, producto:null};


  
 constructor(private router: Router, private service: ComprasService, private fb: FormBuilder) {
   this.service.getCompra().subscribe(data =>{
     this.compras = data.map(e =>{
       return{
         id: e.payload.doc.id,
         ...e.payload.doc.data()as any
       }as Compras;
     })
   })
 }

  nuevoIngrediente(){
    this.router.navigate(['/cat-ingredientes']);
  }

  ngOnInit(){
    this.myForm=this.fb.group({
      producto: new FormControl('',[Validators.required])
    });
  }

onResetForm(){
  this.myForm.reset();
}  

saveCompra(){
  if (this.myForm.valid){
  this.compra ={
    producto: this.myForm.controls.producto.value
  }

this.service.createCompra(this.compra);
this.onResetForm();
}
}  

delete(id: string){
  this.service.deleteCompra(id);
  this.router.navigate(['/tabs/tab3']);
}

update(compras:Compras){
  this.service.updateCompras(compras, compras.id)
}

selectCompra(id: string){ 
  console.log("si entra");
  this.idSelected = id;
  let receivedProducto:any;
  this.service.getCompra()
  .subscribe(producto=>{
    receivedProducto = producto;
    this.producto = receivedProducto;
});
}


}
