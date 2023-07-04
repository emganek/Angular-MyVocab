import { Component } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username:[''],
    password:['']
  })
  constructor(private fb: FormBuilder){

  }

  login() {
    // Perform login logic here
    console.log("login", this.loginForm.value);
  }
}
