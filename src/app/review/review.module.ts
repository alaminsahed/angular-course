import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { RatingDirective } from '../directives/rating.directive';

@NgModule({
  declarations: [ReviewComponent, RatingDirective],
  imports: [CommonModule, RatingDirective],
})
export class ReviewModule {}
