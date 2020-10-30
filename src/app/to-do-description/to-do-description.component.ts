import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-description',
  templateUrl: './to-do-description.component.html',
  styleUrls: ['./to-do-description.component.css']
})
export class ToDoDescriptionComponent implements OnInit {
  @Input() desc:ToDo
  @Output() gone= new EventEmitter<boolean>()
  deleteTask(isdeleted){
    this.gone.emit(isdeleted)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
