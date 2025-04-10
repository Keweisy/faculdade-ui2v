import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../alunos.service';

interface Aluno {
  id: number;
  nome: string;
  idade: number;
  curso: string;
}

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
  }
}
