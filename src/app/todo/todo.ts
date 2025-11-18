import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task{
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})


export class Todo {
newTask: string = '';
tasks: Task[] = [];
nextId: number = 1;

addTask(){
  if(this.newTask.trim() !== ''){
    this.tasks.push({id: this.nextId++, title: this.newTask.trim(), completed:false});
    this.newTask = '';
}
}

deletetask(id:number){
  this.tasks = this.tasks.filter(task => task.id !== id)
}

toggleComolete(task:Task){
  task.completed = !task.completed;
}



}
