import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tugas2Component } from './tugas2.component';

const routes: Routes = [
  {
    path: '',
    component: Tugas2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tugas2RoutingModule { }
