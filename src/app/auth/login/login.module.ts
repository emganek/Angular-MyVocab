import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './container/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthShareModule } from '../shared/auth-share.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AuthShareModule
  ]
})
export class LoginModule { }
