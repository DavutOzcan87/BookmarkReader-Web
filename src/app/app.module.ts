import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { WebUnitListComponent } from './web-unit-list/web-unit-list.component';
import { WebUnitEditComponent } from './web-unit-edit/web-unit-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInComponent,
    WebUnitListComponent,
    WebUnitEditComponent,
    ProfileComponent,
    NotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
