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
  @Input() id: any = "";


  isChecked?: boolean = false
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

  onDelete() {
    console.log(this.id)
    this.deleteToDo.emit(this.id)
  }

  onCheckboxChecked() {
   this.isChecked = this.isChecked === false ? true : false;
   console.log("is Checked:", this.isChecked)
  }

}
