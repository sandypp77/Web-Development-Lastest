import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { JobListComponent } from './job-list/job-list.component';

@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    AdminContentComponent,
    FooterComponent,
    WelcomeContentComponent,
    JobListComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    AdminContentComponent,
    WelcomeContentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
