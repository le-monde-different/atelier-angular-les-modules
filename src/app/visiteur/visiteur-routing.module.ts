import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisiteurComponent } from './visiteur.component';
import { HomeComponent } from './home/home.component';
import { AproposComponent } from './apropos/apropos.component';

const routes: Routes = [{ path: '', component: VisiteurComponent,
children:[
  {path:'home',component:HomeComponent},
  {path:'apropos',component:AproposComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiteurRoutingModule { }
