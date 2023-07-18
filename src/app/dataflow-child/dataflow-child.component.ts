import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dataflow-child',
  templateUrl: './dataflow-child.component.html',
  styleUrls: ['./dataflow-child.component.scss'],
})
export class DataflowChildComponent {
  childMessage = 'message from child';
  @Input() fromParent: string;
  childMessage2 = 'message from child 2';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {
    this.fromParent = '';
  }

  sendMessage() {
    this.messageEvent.emit(this.childMessage2);
  }
}
