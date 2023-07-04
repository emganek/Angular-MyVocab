import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { BASE_URL } from 'src/app/constants/http.constant';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

  submitRegisterForm() {
    const { username, email, password } = this.registerForm.value;
    const url = BASE_URL + '/auth/login';
    this.authService
      .register({ username, email, password })
      .subscribe((res) => {});
  }
}
