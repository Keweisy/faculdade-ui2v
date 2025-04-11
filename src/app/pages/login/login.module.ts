import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <- Adicione isso

import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, // <- E aqui também
    RouterModule
  ]
})
export class LoginModule {}
