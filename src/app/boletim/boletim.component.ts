import { Component, Input } from '@angular/core';

@Component({
  selector: 'tut-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent {

  
  
  alunos=[
    {nome:"Lucas", nota: 10, resultado: true},
    {nome:"Marcelo", nota: 0, resultado: true},
    {nome:"João", nota: 0, resultado: true},
    {nome:"Leonir", nota: 0, resultado: false},
    {nome:"Pato", nota: 10, resultado: true}
  ];

  alunosburro(nota: number): string{
    if(nota <= 5 ){
      return 'Reprovado';
    }else{
      return 'Aprovado';
   }
  }
}