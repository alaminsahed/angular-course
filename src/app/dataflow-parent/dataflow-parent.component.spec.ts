import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataflowParentComponent } from './dataflow-parent.component';

describe('DataflowParentComponent', () => {
  let component: DataflowParentComponent;
  let fixture: ComponentFixture<DataflowParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataflowParentComponent]
    });
    fixture = TestBed.createComponent(DataflowParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
