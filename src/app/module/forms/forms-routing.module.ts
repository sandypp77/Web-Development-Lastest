import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../forms/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SederhanaComponent } from './sederhana/sederhana.component';

const routes: Routes = [
  {
    path: 'sederhana',
    component: SederhanaComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'profile-update',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
