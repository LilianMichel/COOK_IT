import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-ingredientes',
  templateUrl: './cat-ingredientes.page.html',
  styleUrls: ['./cat-ingredientes.page.scss'],
})
export class CatIngredientesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  menu(){
    this.router.navigate(['/tabs']);
  }

  listado(){
    this.router.navigate(['/listado-ingredientes'])
  }

}
