import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email: string = '';
  senha: string = '';
  erro: string = '';

  constructor(private router: Router) {}

  entrar() {
    // Verificação mock
    if (this.email === 'admin' && this.senha === '12345') {
      localStorage.setItem('auth', 'true'); // salva login no localStorage
      this.router.navigate(['/alunos']); // redireciona
    } else {
      this.erro = 'Email ou senha inválidos'; // mensagem de erro
    }
  }
}