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
  viewProfile = 'name';
  type = 'password';
  show = false;
  eyeOpen = true;
  eyeClose = false;
  errorMessage = false;

  constructor(private formbuilder: FormBuilder,
    private router: Router, private localstorage: LocalstorageserviceService, private authservice: AuthService) { }

  ngOnInit() {
    this.loginform = this.formbuilder.group({
      uname: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required],
    });

    // if (this.authservice.isLoggedIn()) {
    //   this.router.navigate(['/home'], {
    //     queryParams:
    //     {
    //       username: JSON.parse(this.localstorage.get('userData')).username
    //     }
    //   });
    // }
  }

  get formcontrols() {
    return this.loginform.controls;
  }

  toggleTextType() {
    this.show = !this.show;
    if (this.show) {
      this.type = 'text';
      this.eyeOpen = false;
      this.eyeClose = true;
    } else {
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
      // tslint:disable-next-line: max-line-length
      if (JSON.parse(this.localstorage.get('userData')).username === this.loginform.value.uname && JSON.parse(this.localstorage.get('userData')).userpassword === this.loginform.value.password) {
        this.router.navigate(['/home'], {
          queryParams:
          {
            username: this.loginform.value.uname,
          }
        });
      } else {
        this.errorMessage = true;
      }
    }
  }
}
