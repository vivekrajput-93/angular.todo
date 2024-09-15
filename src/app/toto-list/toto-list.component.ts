import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-toto-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PickerComponent, TodoDialogComponent],
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
    
    readonly dialog = inject(MatDialog);


    openDialog(index: number, todo: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
      const dialogRef = this.dialog.open(TodoDialogComponent, {
        width: '360px',
        enterAnimationDuration,
        exitAnimationDuration,
        data: { todo }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.todos[index] = result;
          this.saveTodos();
        }
      });
    }
  

    @HostListener('document:keydown.enter', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement && event.target.placeholder === 'write something...') {
        this.addTodo();
      }
    }
}
