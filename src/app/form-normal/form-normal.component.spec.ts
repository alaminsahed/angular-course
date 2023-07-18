import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNormalComponent } from './form-normal.component';

describe('FormNormalComponent', () => {
  let component: FormNormalComponent;
  let fixture: ComponentFixture<FormNormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNormalComponent]
    });
    fixture = TestBed.createComponent(FormNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
