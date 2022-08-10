import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightAdderComponent } from './weight-adder.component';

describe('WeightAdderComponent', () => {
  let component: WeightAdderComponent;
  let fixture: ComponentFixture<WeightAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
