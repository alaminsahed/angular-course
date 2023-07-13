import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataflowChildComponent } from './dataflow-child.component';

describe('DataflowChildComponent', () => {
  let component: DataflowChildComponent;
  let fixture: ComponentFixture<DataflowChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataflowChildComponent]
    });
    fixture = TestBed.createComponent(DataflowChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
