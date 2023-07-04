import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './container/register/register.component';
import { AuthShareModule } from '../shared/auth-share.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AuthShareModule,
    HttpClientModule,
  ]
})
export class RegisterModule { }
