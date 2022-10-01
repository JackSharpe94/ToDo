import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/models/ToDoItem.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {


  toDoListItems: ToDoItem[] = [];
  constructor() { }

  addNewItem() {
    this.toDoListItems?.push(new ToDoItem(false))
  }

  getToDoItems() {
    return this.toDoListItems?.filter(todo => todo.isDone === false)
  }

  getDoneToDoItems() {
    return this.toDoListItems?.filter(todo => todo.isDone === true);
  }

  removeElement(id: any) {
    console.log(this.toDoListItems.findIndex(item => item.id == id))

    this.toDoListItems.splice(this.toDoListItems.findIndex(item => item.id == id), 1)
  }
}
