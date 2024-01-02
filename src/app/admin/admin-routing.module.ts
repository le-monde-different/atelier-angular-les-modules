import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { AjouterComponent } from './ajouter/ajouter.component';

const routes: Routes = [{ path: '', component: AdminComponent,
children:[
  {path:'liste-films',component:ListeFilmsComponent},
  {path:'ajouter',component:AjouterComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
