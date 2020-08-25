import { Component } from '@angular/core';
import { Todo } from './todo';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title:string = 'todoApp';
  toDoList:Todo[] = [];
  id:number = 0;
  newTodo:Todo;
  message:string;
  pos:number = 0;

  ngOnInit(){
    this.pos = 0;
    this.id = 0;
    this.message = '';
  }

  addNewTodo(todo):void {
    if(todo){
      this.newTodo = {
        id: this.id + 1,
        name: todo,
        isDoable: true,
        isDone: false,
        status: 'Pending'
      }
      this.id = this.id + 1;
      this.toDoList.push(this.newTodo);
      this.pos += 1;
    }
  }

  hardDeleteTodo(todoDel:Todo) {
    if (todoDel.status != 'Pending') {
      this.pos += 1;
       this.toDoList = this.toDoList.filter((todo) => {
         if(todo.name!=todoDel.name) {
           return todo;
         }
       });
    } else {
      this.message = 'Cannot delete this todo as you have not check this todo yet.';
      alert(this.message);
    }
  }

  checkTheTodo(event, item) {
     if(event.target.checked) {
       this.toDoList.map((todo) => {
         this.message = '';
         if(todo.name === item.name) {
           todo.status = 'In Action';
         };
       });
     } else if(!event.target.checked){
        this.toDoList.map((todo) => {
          if(todo.name === item.name) {
            todo.status = 'Pending';
          };
        });
     }
  }


  // softDeleteTodo(todoDel:Todo):void {
  //   this.toDoList.map((todo) => {
  //     if(todo.name === todoDel.name){
  //       todo.isDone = true;
  //     }
  //   })
  // }

}
