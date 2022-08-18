import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansPlanComponent } from './plans-plan.component';

describe('PlansPlanComponent', () => {
  let component: PlansPlanComponent;
  let fixture: ComponentFixture<PlansPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
