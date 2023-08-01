import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {

  tarefas =[
    { title: 'Tarefa 1', text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nulla ac purus rhoncus eleifend. Integer vitae justo tincidunt, finibus nisi at, egestas justo. Vivamus'},
    { title: 'Tarefa 2', text:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nulla ac purus rhoncus eleifend. Integer vitae justo tincidunt, finibus nisi at, egestas justo. Vivamus'},
  ]

}
