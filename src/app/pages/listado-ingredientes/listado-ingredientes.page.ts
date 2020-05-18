import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-ingredientes',
  templateUrl: './listado-ingredientes.page.html',
  styleUrls: ['./listado-ingredientes.page.scss'],
})
export class ListadoIngredientesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate(['/cat-ingredientes']);
  }

}
