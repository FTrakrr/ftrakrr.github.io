import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightInputComponent } from './height-input.component';

describe('HeightInputComponent', () => {
  let component: HeightInputComponent;
  let fixture: ComponentFixture<HeightInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
