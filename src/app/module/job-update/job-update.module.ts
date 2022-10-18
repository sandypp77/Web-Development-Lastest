import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobUpdateRoutingModule } from './job-update-routing.module';
import { JobUpdateComponent } from './job-update.component';


@NgModule({
  declarations: [
    JobUpdateComponent
  ],
  imports: [
    CommonModule,
    JobUpdateRoutingModule
  ]
})
export class JobUpdateModule { }
