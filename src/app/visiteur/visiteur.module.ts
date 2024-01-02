import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiteurRoutingModule } from './visiteur-routing.module';
import { VisiteurComponent } from './visiteur.component';
import { HomeComponent } from './home/home.component';
import { AproposComponent } from './apropos/apropos.component';


@NgModule({
  declarations: [
    VisiteurComponent,
    HomeComponent,
    AproposComponent
  ],
  imports: [
    CommonModule,
    VisiteurRoutingModule
  ]
})
export class VisiteurModule { }
