import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { PickerComponent } from '@ctrl/ngx-emoji-mart';


@Component({
  selector: 'app-toto-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PickerComponent],
  templateUrl: './toto-list.component.html',
  styleUrl: './toto-list.component.scss'
})
export class TotoListComponent {

    todos : string[] = [];
     userInput : string = "";


     ngOnInit() {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    }


     saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
     }


     addTodo() {
      this.todos.push(this.userInput.trim());
      this.userInput = ""
      this.saveTodos();
     }


     deleteTodos(index: number) {
      this.todos.splice(index, 1)
      this.saveTodos();
     }

     addEmoji(event: any) {
      this.userInput += event.emoji.native;
    }
}
