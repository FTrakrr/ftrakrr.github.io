import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesCreatePage } from './exercises-create.component';

describe('ExercisesCreateComponent', () => {
  let component: ExercisesCreatePage;
  let fixture: ComponentFixture<ExercisesCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesCreatePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
