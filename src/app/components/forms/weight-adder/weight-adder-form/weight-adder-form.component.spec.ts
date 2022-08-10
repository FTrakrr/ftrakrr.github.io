import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightAdderFormComponent } from './weight-adder-form.component';

describe('WeightAdderFormComponent', () => {
  let component: WeightAdderFormComponent;
  let fixture: ComponentFixture<WeightAdderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightAdderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightAdderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
