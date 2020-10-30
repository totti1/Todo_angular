import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  mylist:ToDo = new ToDo('','',new Date(), 0)
  @Output() toDoData = new EventEmitter<ToDo>()
  getToDo(){
    this.toDoData.emit(this.mylist)
    this.mylist = new ToDo('','',new Date(), 0)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
