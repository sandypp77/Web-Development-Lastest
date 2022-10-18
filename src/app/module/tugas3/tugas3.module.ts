import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { Tugas3RoutingModule } from './tugas3-routing.module';
import { Tugas3Component } from './tugas3.component';


@NgModule({
  declarations: [
    Tugas3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    Tugas3RoutingModule
  ]
})
export class Tugas3Module { }
