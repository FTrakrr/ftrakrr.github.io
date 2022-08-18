import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesExerciseComponent } from './exercises-exercise.component';

describe('ExercisesExerciseComponent', () => {
  let component: ExercisesExerciseComponent;
  let fixture: ComponentFixture<ExercisesExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
