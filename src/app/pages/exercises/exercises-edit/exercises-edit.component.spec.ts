import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesEditPage } from './exercises-edit.component';

describe('ExercisesEditComponent', () => {
  let component: ExercisesEditPage;
  let fixture: ComponentFixture<ExercisesEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesEditPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
