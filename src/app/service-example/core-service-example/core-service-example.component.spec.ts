import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreServiceExampleComponent } from './core-service-example.component';

describe('CoreServiceExampleComponent', () => {
  let component: CoreServiceExampleComponent;
  let fixture: ComponentFixture<CoreServiceExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreServiceExampleComponent]
    });
    fixture = TestBed.createComponent(CoreServiceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
