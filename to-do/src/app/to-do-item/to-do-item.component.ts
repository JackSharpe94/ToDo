import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
 
  constructor() { }

  @Output() deleteToDo = new EventEmitter();
  @Input() index?: number

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

  onDelete() {
    this.deleteToDo.emit(this.index)
  }

}
