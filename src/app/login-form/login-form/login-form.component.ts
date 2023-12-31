import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  users: any;
  submittedData: any;
  constructor(private usersData: UserDataService) {
    this.users = this.usersData.users().subscribe((data) => {
      this.users = data;
    });

    this.usersData.postUser(this.submittedData).subscribe((data) => {
      console.log('aaaa', data);
    });
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  loginUsers() {
    console.log('++', this.loginForm.value);
    this.submittedData = this.loginForm.value;
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
