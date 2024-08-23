import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';



@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrl: './todo-dialog.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDialogComponent {
  editedTodo: string;

  constructor(
    public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { todo: string }
  ) {
    this.editedTodo = data.todo;
  }

  save() {
    this.dialogRef.close(this.editedTodo);
  }

  close() {
    this.dialogRef.close();
  }
  
  }

  
