import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesMainPagePage } from './exercises-main-page.component';

describe('ExercisesMainPageComponent', () => {
  let component: ExercisesMainPagePage;
  let fixture: ComponentFixture<ExercisesMainPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesMainPagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesMainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
