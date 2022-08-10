import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmarkSpinnerComponent } from './checkmark-spinner.component';

describe('CheckmarkSpinnerComponent', () => {
  let component: CheckmarkSpinnerComponent;
  let fixture: ComponentFixture<CheckmarkSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckmarkSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckmarkSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
