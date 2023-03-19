import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'O Senhor dos Anéis', resumo: 'Uma história épica de fantasia', autores: ['J.R.R. Tolkien'] },
    { codigo: 2, codEditora: 2, titulo: 'Harry Potter e a Pedra Filosofal', resumo: 'Primeiro livro da série Harry Potter', autores: ['J.K. Rowling'] },
    { codigo: 3, codEditora: 3, titulo: 'A Revolução dos Bichos', resumo: 'Uma fábula sobre política e poder', autores: ['George Orwell'] }
  ];

  constructor() { }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}