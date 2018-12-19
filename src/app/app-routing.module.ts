import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { WebUnitListComponent } from './web-unit-list/web-unit-list.component';
import { WebUnitEditComponent } from './web-unit-edit/web-unit-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'login', component: GoogleSignInComponent },
  { path: 'list-sites', component: WebUnitListComponent },
  { path: 'edit-site', component: WebUnitEditComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
