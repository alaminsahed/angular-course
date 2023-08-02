import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.scss'],
})
export class TemplateExampleComponent {
  constructor() {}

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
