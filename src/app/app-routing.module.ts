import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookmovieComponent } from './bookmovie/bookmovie.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimationComponent } from './animation/animation.component';







const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomepageComponent},
  { path: 'bookmovie', component: BookmovieComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'anim', component: AnimationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
