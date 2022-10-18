import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './module/profile/profile.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopbarComponent } from './core/layouts/topbar/topbar.component';
import { LoginModule } from './module/login/login.module';
import { HomeModule } from './module/home/home.module';
import { LayoutsModule } from './core/layouts/layouts.module';
import { WelcomeModule } from './module/welcome/welcome.module';
import { FrontModule } from './module/front/front.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    WelcomeModule,
    ProfileModule,
    LoginModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
