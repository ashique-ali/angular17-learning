import { Component, EventEmitter } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  outputs: ['childEvent'],
})
export class ChildComponent {
  childEvent = new EventEmitter();
  changeHandler(val: any) {
    this.childEvent.emit(val);
  }
}
