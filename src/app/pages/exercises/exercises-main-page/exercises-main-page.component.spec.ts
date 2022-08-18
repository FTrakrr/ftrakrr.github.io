import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesMainPageComponent } from './exercises-main-page.component';

describe('ExercisesMainPageComponent', () => {
  let component: ExercisesMainPageComponent;
  let fixture: ComponentFixture<ExercisesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
