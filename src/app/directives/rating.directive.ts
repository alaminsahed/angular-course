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
  @Input() rating: number = 0;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const fullStar = Math.floor(this.rating);
    const halfStar = Math.ceil(this.rating - fullStar);
    const emptyStar = 5 - fullStar - halfStar;

    this.el.nativeElement.innerHTML =
      '✪'.repeat(fullStar) + '✭'.repeat(halfStar) + '✩'.repeat(emptyStar);
  }
}
