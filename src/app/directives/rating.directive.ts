import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appRating]',
})
export class RatingDirective implements OnChanges {
  rating: number;
  @Input('appRating') rating: number;
  constructor(private el: ElementRef) {}
  fullStar = Math.floor(this.rating);
  halfStar = this.rating - this.fullStar;
  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.innerHTML =
      '&#8902;'.repeat(this.fullStar) + '&#8901;'.repeat(this.halfStar);
  }
}
