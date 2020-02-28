import { LocalstorageserviceService } from './../services/localstorageservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MustMatch } from './username.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signinForm: FormGroup;
  type = 'password';
  conftype = 'password';
  show = false;
  showConfPass = false;
  eyeOpen = true;
  eyeClose = false;
  eyeOpenRepass = true;
  eyeCloseRepass = false

  constructor(private formbuilder: FormBuilder,
              private router: Router, private localstorage: LocalstorageserviceService) { }

  ngOnInit() {
    this.signinForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
    }, {
      validators: MustMatch('password', 'confirmPassword'),
    });
  }

  get f() {
    return this.signinForm.controls;
  }

  toggleText(value) {
    if (value === 'password') {
      this.show = !this.show;
      if (this.show) {
        this.type = 'text';
        this.eyeOpen = false;
        this.eyeClose = true;
        console.log('i am clicked')
      } else {
        this.type = 'password';
        this.eyeOpen = true;
        this.eyeClose = false;
      }
    } else if (value === 'confpassword') {
      this.showConfPass = !this.showConfPass;
      if (this.showConfPass) {
        this.conftype = 'text';
        this.eyeOpenRepass = false;
        this.eyeCloseRepass = true;
      } else {
        this.conftype = 'password';
        this.eyeOpenRepass = true;
        this.eyeCloseRepass = false;
      }
    }
  }

  submitForm() {
    if (this.signinForm.invalid) {
      this.signinForm.setErrors({
        isInvalid: true,
      })
    } else {
      const userData = {
        username: this.signinForm.value.username,
        userpassword: this.signinForm.value.password
      };
      this.localstorage.store('userData', userData);
      this.router.navigate(['/login']);
    }
  }
}
