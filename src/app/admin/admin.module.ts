import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { AjouterComponent } from './ajouter/ajouter.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListeFilmsComponent,
    AjouterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
