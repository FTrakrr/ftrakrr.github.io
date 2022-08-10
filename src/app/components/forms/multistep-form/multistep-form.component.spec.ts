import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistepFormComponent } from './multistep-form.component';

describe('MultistepFormComponent', () => {
  let component: MultistepFormComponent;
  let fixture: ComponentFixture<MultistepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultistepFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultistepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
