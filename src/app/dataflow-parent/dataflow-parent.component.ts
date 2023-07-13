import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DataflowChildComponent } from '../dataflow-child/dataflow-child.component';

@Component({
  selector: 'app-dataflow-parent',
  templateUrl: './dataflow-parent.component.html',
  styleUrls: ['./dataflow-parent.component.scss'],
})
export class DataflowParentComponent {
  parentMessage = 'message from parent component';

  @ViewChild(DataflowChildComponent) childMsg: any;
  constructor() {
    // this undefined. because child component not loaded yet. so we use ngAfterViewInit
    console.log(this.childMsg);
  }

  ngAfterViewInit() {
    // it works when child component loaded
    this.childMsg = this.childMsg.childMessage;
  }
}
