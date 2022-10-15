import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    AdminContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
