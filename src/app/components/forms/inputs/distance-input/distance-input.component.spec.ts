import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceInputComponent } from './distance-input.component';

describe('DistanceInputComponent', () => {
  let component: DistanceInputComponent;
  let fixture: ComponentFixture<DistanceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
