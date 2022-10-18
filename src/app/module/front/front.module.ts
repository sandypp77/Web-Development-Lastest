import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FrontComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
