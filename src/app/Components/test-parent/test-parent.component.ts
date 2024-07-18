import { Component } from '@angular/core';
import { TestChildComponent } from '../test-child/test-child.component';

@Component({
  selector: 'app-test-parent',
  standalone: true,
  imports: [TestChildComponent],
  templateUrl: './test-parent.component.html',
  styleUrl: './test-parent.component.css'
})
export class TestParentComponent {

}
