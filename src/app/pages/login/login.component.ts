import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = '';

  constructor(private router: Router) {}

  entrar() {
    if (this.email === 'admin' && this.senha === '12345') {
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/disciplinas']);
    } else {
      this.erro = 'Email ou senha inválidos';
    }
  }
}