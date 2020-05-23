import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'cat-ingredientes',
    loadChildren: () => import('./pages/cat-ingredientes/cat-ingredientes.module').then( m => m.CatIngredientesPageModule)
  },
  {
    path: 'ingrediente',
    loadChildren: () => import('./pages/ingrediente/ingrediente.module').then( m => m.IngredientePageModule)
  },
  {
    path: 'listado-ingredientes',
    loadChildren: () => import('./pages/listado-ingredientes/listado-ingredientes.module').then( m => m.ListadoIngredientesPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
