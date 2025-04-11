import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; // Ajuste se necessário

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'disciplinas',
    loadChildren: () => import('./pages/disciplina/disciplina.module').then(m => m.DisciplinaModule)
  },
  {
    path: 'alunos',
    loadChildren: () => import('./pages/alunos/alunos.module').then(m => m.AlunosModule)
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }, // redireciona raiz para login
  { path: '**', redirectTo: 'login' } // rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
