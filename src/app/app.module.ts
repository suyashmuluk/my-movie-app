import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

import { SignupComponent } from './signup/signup.component';
import { FormarrayEgComponent } from './formarray-eg/formarray-eg.component';
import { PasswordComponent } from './password/password.component';
import { PostComponent } from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { BookmovieComponent } from './bookmovie/bookmovie.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './navbar/navbar.component';
import { DynamicImgComponent } from './dynamic-img/dynamic-img.component';
import { AnimationComponent } from './animation/animation.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { SassDemoComponent } from './sass-demo/sass-demo.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ClipPathComponent } from './clip-path/clip-path.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SignupComponent,
    FormarrayEgComponent,
    PasswordComponent,
    PostComponent,
    HomepageComponent,
    BookmovieComponent,
    BookingsComponent,
    NavbarComponent,
    DynamicImgComponent,
    AnimationComponent,
    SassDemoComponent,
    ClipPathComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
