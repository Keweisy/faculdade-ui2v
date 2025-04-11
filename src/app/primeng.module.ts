import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { InputText } from 'primevue/inputtext';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  exports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    TableModule,
    CardModule
  ]
})
export class PrimengModule { }

@NgModule({
  imports: [
    InputText,
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
