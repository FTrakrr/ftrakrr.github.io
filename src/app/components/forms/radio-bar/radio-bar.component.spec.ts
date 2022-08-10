import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBarComponent } from './radio-bar.component';

describe('RadioBarComponent', () => {
  let component: RadioBarComponent;
  let fixture: ComponentFixture<RadioBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
