import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightAdderItemComponent } from './weight-adder-item.component';

describe('WeightAdderItemComponent', () => {
  let component: WeightAdderItemComponent;
  let fixture: ComponentFixture<WeightAdderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightAdderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightAdderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
