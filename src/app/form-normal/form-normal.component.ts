import { Component } from '@angular/core';

@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.scss'],
})
export class FormNormalComponent {
  postTitle: string = '';
  postDetails: string = '';
  postUrl: string = '';
  postBg: boolean = false;
}
