import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importado para ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Adicionado aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }