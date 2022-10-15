import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './module/profile/profile.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopbarComponent } from './core/layouts/topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
