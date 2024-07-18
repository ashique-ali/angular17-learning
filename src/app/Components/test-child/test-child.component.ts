import { Component } from '@angular/core';

@Component({
  selector: 'app-test-child',
  standalone: true,
  imports: [],
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.css',
  inputs: ['parentData'],
})
export class TestChildComponent {
  parentData: any;
}
