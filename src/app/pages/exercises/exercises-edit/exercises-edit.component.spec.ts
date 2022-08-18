import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesEditComponent } from './exercises-edit.component';

describe('ExercisesEditComponent', () => {
  let component: ExercisesEditComponent;
  let fixture: ComponentFixture<ExercisesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
