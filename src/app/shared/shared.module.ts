import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './component/component.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ]
})
export class SharedModule { }
