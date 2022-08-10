import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWorkoutComponent } from './last-workout.component';

describe('LastWorkoutComponent', () => {
  let component: LastWorkoutComponent;
  let fixture: ComponentFixture<LastWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
