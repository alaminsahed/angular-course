import { Component } from '@angular/core';

@Component({
  selector: 'app-dataflow-parent',
  templateUrl: './dataflow-parent.component.html',
  styleUrls: ['./dataflow-parent.component.scss'],
})
export class DataflowParentComponent {
  parentMessage = 'message from parent component';
}
