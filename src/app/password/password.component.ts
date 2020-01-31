import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from './password.validator';
import { MustMatch } from './must-match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  validationForm: FormGroup; 
  pass: HTMLElement;
  confPass: HTMLElement;
  message: string = '';
  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.validationForm = this.fb.group({
      oldPassword: ['',
        Validators.required,
        passwordValidator.uniquePassword
      ],
      newPassword: ['',
        Validators.required,
      ],
      confirmPassword: ['',
        Validators.required,
      ],
    },{
        validator: MustMatch('newPassword', 'confirmPassword')
      }
    );
  }

  get oldpassword() {
    return this.validationForm.get('oldPassword');
  }
  
  get newpassword() {
    return this.validationForm.get('newPassword');
  }

  get confpassword() {
    return this.validationForm.get('confirmPassword');
  }

  change(){
    console.log(this.validationForm)
    if(this.validationForm.invalid){
      this.validationForm.setErrors({
        isInvalid: true
      });
    } else {
      console.log('inside router')
      this.router.navigate(['/dynamic']);
    }
  }

}
