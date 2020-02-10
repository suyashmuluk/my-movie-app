import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { FormarrayEgComponent } from './formarray-eg/formarray-eg.component';
import { PasswordComponent } from './password/password.component';
import { PostComponent } from './post/post.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookmovieComponent } from './bookmovie/bookmovie.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DynamicImgComponent } from './dynamic-img/dynamic-img.component';
import { AnimationComponent } from './animation/animation.component';
import { SassDemoComponent } from './sass-demo/sass-demo.component';






const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dynamic', component: FormarrayEgComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'post', component: PostComponent },
  { path: 'home', component: HomepageComponent},
  { path: 'bookmovie', component: BookmovieComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'img', component: DynamicImgComponent },
  { path: 'anim', component: AnimationComponent },
  { path: 'sass', component: SassDemoComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
