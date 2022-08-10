import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiScaleComponent } from './bmi-scale.component';

describe('BmiScaleComponent', () => {
  let component: BmiScaleComponent;
  let fixture: ComponentFixture<BmiScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
