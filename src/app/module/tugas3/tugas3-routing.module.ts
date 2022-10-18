import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tugas3Component } from './tugas3.component';

const routes: Routes = [
  {
    path: '',
    component: Tugas3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tugas3RoutingModule { }
