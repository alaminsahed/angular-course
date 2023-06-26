import { Component } from '@angular/core';
import { reviewsData } from '../../utils/data';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  reviews = reviewsData;
  currentDate: Date;
  myText: string;

  constructor() {
    this.currentDate = new Date();
    this.myText = 'I want to test custom pipe example';
  }
}
