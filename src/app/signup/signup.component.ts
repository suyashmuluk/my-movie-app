import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { MustMatch } from '../password/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signinForm: FormGroup;
  type = "password";
  show = false;
  showConfPass = false;

  constructor(private formbuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.signinForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required],
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
    } else if (value === 'confpassword') {
      this.showConfPass = !this.showConfPass;
    }
  }

  submitForm() {
    if (this.signinForm.invalid) {
      this.signinForm.setErrors({
        isInvalid: true,
      })
    } else {
      this.router.navigate(['/home']);
    }
  }
}
