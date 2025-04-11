import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard'; // Caminho correto para o guard

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'disciplinas',
    loadChildren: () =>
      import('./pages/disciplina/disciplina.module').then((m) => m.DisciplinaModule),
    canActivate: [AuthGuard], // Protegendo com o guard
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./pages/alunos/alunos.module').then((m) => m.AlunosModule),
    canActivate: [AuthGuard], // Também protegido, se quiser
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}