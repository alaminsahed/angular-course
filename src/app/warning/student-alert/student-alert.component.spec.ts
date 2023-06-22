import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAlertComponent } from './student-alert.component';

describe('StudentAlertComponent', () => {
  let component: StudentAlertComponent;
  let fixture: ComponentFixture<StudentAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAlertComponent]
    });
    fixture = TestBed.createComponent(StudentAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
