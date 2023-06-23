import { Component } from '@angular/core';
import { reviewsData } from '../../utils/data';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  reviews = reviewsData;

  constructor() {}
}
