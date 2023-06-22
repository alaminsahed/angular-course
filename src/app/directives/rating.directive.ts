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
    let fullStar = Math.floor(this.rating);
    let halfStar = this.rating - fullStar;

    this.el.nativeElement.innerHTML =
      '&#8902;'.repeat(fullStar) + '&#8901;'.repeat(halfStar);
  }
}
