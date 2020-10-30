import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists:ToDo[]
  title: string
  taskDeleted(itisdeleted,i){
    console.log(itisdeleted)
    if(itisdeleted){
      this.lists.splice(i,1)
    }
  }
  parentFunc(data){
    data.time = new Date()
    this.lists.push(data)
  }
  constructor() { 
    this.title = "My Todo"
    this.lists = [
      {task:"Wash hands", description: "ok", time:new Date(), price:1000},
      {task:"Wash head", description: "Head Head", time:new Date(), price:1500},
      {task:"Wash Shoes", description: "Shoes Shoes", time:new Date(), price:10950},
      {task:"Wash Clothes", description: "clothes clothes", time:new Date(), price:100044},
    ]
  }

  ngOnInit(): void {
  }

}
