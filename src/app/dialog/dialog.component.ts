import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { LocalstorageserviceService } from './../services/localstorageservice.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('updown', [
      state('collapsed', style({
        height: 0,
        overflow: 'hidden',
        opacity: 0
      })),
      transition('collapsed => expanded', [
        animate('300ms cubic-bezier(.65,0,.45,1)', style({
          height: '*',
          opacity: 1
        }))
      ]),
      transition('expanded => collapsed', [
        group([
          animate('250ms cubic-bezier(.65,0,.45,1)', style({
            opacity: 0
          })),
          animate('300ms cubic-bezier(.65,0,.45,1)', style({
            height: 0
          }))
        ])
      ])
    ])
  ]
})

export class DialogComponent implements OnInit {
  username = '';
  passwordBox = false;
  changeCredentialsForm: FormGroup;
  type = 'password';
  conftype = 'password';
  show = false;
  showConfPass = false;
  eyeOpen = true;
  eyeClose = false;
  eyeOpenRepass = true;
  eyeCloseRepass = false;
  showErrorMsg = false;
  constructor(
    private localstorage: LocalstorageserviceService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.username = JSON.parse(this.localstorage.get('userData')).username;
    this.changeCredentialsForm = this.formBuilder.group({
      oldUsername: [this.username, [Validators.required, Validators.minLength(5)]],
      oldPassword: ['', [Validators.required, Validators.minLength(5)]],
      newPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get formControls() {
    return this.changeCredentialsForm.controls;
  }

  showPasswordBox() {
    this.passwordBox = !this.passwordBox;
  }

  toggleText(value) {
    if (value === 'password') {
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

  changeUserCredential() {
    if (this.changeCredentialsForm.invalid) {
      this.changeCredentialsForm.setErrors({
        isInvalid: true
      });
    } else {
      if (this.changeCredentialsForm.value.oldPassword !== JSON.parse(this.localstorage.get('userData')).password) {
        this.showErrorMsg = true;
      } else {
        const userData = {
          username: this.changeCredentialsForm.value.oldUsername,
          password: this.changeCredentialsForm.value.newPassword
        }
        this.showErrorMsg = false;
        this.localstorage.store('userData', userData);
        this.dialogRef.close();
        const changeSuccessfull = this.snackbar.open('Your credential changed succesfully', 'OK', {
          duration: 2000,
        });
      }
    }
  }
}
