import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;

  login() {
    // Perform login logic here
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
