import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/app/constants/http.constant';
import { RegisterBody } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  hostUrl = BASE_URL + '/auth';
  constructor(private http: HttpClient) {}

  login() {}

  register(body: RegisterBody) {
    const url = BASE_URL + '/user';
    return this.http.post(url, body);
  }
}
