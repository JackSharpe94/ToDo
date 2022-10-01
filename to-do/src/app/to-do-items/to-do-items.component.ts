import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ToDoItem } from 'src/models/ToDoItem.model';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})

export class ToDoItemsComponent implements OnInit {

  constructor() { }

  items: ToDoItem[] = [];
  ngOnInit(): void {
  }

  onAdd() {
    this.items.push(new ToDoItem(false));
  }

  onToDoDeleted(index: number) {
    this.items.splice(index, 1)
  }

}
