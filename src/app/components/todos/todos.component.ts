import { Component, OnInit } from '@angular/core';
import { Todos } from '../../models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

	todos:Todo;
  constructor() { }

  ngOnInit(): void {
  	// this.todos = [
  	// 	id:1

  	// ]
  }

}
