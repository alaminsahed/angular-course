import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dataflow-child',
  templateUrl: './dataflow-child.component.html',
  styleUrls: ['./dataflow-child.component.scss'],
})
export class DataflowChildComponent {
  childMessage = 'message from child';
  @Input() fromParent: string;

  constructor() {
    this.fromParent = '';
  }
}
