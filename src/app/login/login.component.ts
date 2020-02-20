import { AuthService } from './../auth.service';
import { LocalstorageserviceService } from './../services/localstorageservice.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import sha1 from 'sha1';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  names = ['ABC', 'XYZ'];
  viewProfile = "name";
  type = "password";
  show = false;
  eyeOpen = true;
  eyeClose = false;

  courses = [
    { 'id': 1, 'name': 'ABC' },
    { 'id': 2, 'name': 'LMN' },
    { 'id': 3, 'name': 'XYZ' }
  ]

  constructor(private formbuilder: FormBuilder,
    private router: Router, private localstorage: LocalstorageserviceService, private authservice: AuthService) { }

  ngOnInit() {
    this.loginform = this.formbuilder.group({
      uname: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required],
    });

    if (this.authservice.isLoggedIn()) {
      this.router.navigate(['/home'], {
        queryParams:
        {
          username: JSON.parse(this.localstorage.get('userData')).username
          // password: sha1(this.loginform.value.password)
        }
      });
    }
  }

  get formcontrols() {
    return this.loginform.controls;
  }

  // addCourse() {
  //   this.courses.push({'id':4,'name' :'PQR'})
  // }

  // removeCourse(course){
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index,1);
  // }

  toggleTextType() {
    this.show = !this.show;
    if (this.show) {
      this.type = 'text';
      this.eyeOpen = false;
      this.eyeClose = true;
    }
    else {
      this.type = 'password';
      this.eyeOpen = true;
      this.eyeClose = false;

    }
  }

  submit() {
    if (this.loginform.invalid) {
      this.loginform.setErrors({
        isInvalid: true
      });
    } else {

      this.router.navigate(['/home'], {
        queryParams:
        {
          username: this.loginform.value.uname,
          // password: sha1(this.loginform.value.password)
        }
      });

    }
  }
}
