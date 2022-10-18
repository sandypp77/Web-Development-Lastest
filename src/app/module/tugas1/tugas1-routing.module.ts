import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tugas1Component } from './tugas1.component';

const routes: Routes = [
  {
    path: '',
    component: Tugas1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tugas1RoutingModule { }
