import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarScaleComponent } from './bar-scale.component';

describe('BarScaleComponent', () => {
  let component: BarScaleComponent;
  let fixture: ComponentFixture<BarScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
