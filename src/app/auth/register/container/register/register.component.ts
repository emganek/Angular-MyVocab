import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BASE_URL } from 'src/app/constants/http.constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {

  }

  submitRegisterForm() {
    const { email, password } = this.registerForm.value;
    const url = BASE_URL + '/auth/login'
    console.log('form value', this.registerForm.value)
    return this.http.post(url, { email, password }).subscribe(ele => console.log('response', ele))

  }
}
