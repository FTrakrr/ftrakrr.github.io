import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesPage } from './exercises.component';

describe('ExercisesComponent', () => {
  let component: ExercisesPage;
  let fixture: ComponentFixture<ExercisesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
