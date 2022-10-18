import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobUpdateComponent } from './job-update.component';

const routes: Routes = [
  {
    path: '',
    component: JobUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobUpdateRoutingModule { }
