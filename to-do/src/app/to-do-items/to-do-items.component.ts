import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/models/ToDoItem.model';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})

export class ToDoItemsComponent implements OnInit {

  constructor(private toDoListService: TodolistService) { }

  items: ToDoItem[] = [];
  ngOnInit(): void {
  }

  onAdd() {
    this.toDoListService.addNewItem();
    this.items = this.toDoListService.getToDoItems()
  }

  onToDoDeleted(id: any) {
    this.toDoListService.removeElement(id);
    this.items = this.toDoListService.getToDoItems()
  }

}
