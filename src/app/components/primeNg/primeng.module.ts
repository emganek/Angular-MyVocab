import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckboxModule,
    PanelModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    CheckboxModule,
    PanelModule,
    FormsModule,
    ButtonModule
  ]
})
export class PrimengModule { }
