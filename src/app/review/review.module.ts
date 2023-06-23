import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { RatingDirective } from '../directives/rating.directive';
import { RouterModule, Routes } from '@angular/router';
import { ColorDirective } from '../directives/color.directive';

const routes: Routes = [
  // { path: '', redirectTo: 'calculation', pathMatch: 'full' },
  { path: '', component: ReviewComponent },
];
@NgModule({
  declarations: [ReviewComponent, RatingDirective, ColorDirective],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ReviewModule {}
