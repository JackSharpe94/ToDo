import {v4 as uuidv4} from 'uuid';

export class ToDoItem {
    
    id: string = uuidv4();
    isDone: boolean;
    constructor(done: boolean) {
        this.isDone = done;
     }
}