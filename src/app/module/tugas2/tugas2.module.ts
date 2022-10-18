import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { Tugas2RoutingModule } from './tugas2-routing.module';
import { Tugas2Component } from './tugas2.component';


@NgModule({
  declarations: [
    Tugas2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    Tugas2RoutingModule
  ]
})
export class Tugas2Module { }
