import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansPlanPage } from './plans-plan.component';

describe('PlansPlanComponent', () => {
  let component: PlansPlanPage;
  let fixture: ComponentFixture<PlansPlanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansPlanPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
