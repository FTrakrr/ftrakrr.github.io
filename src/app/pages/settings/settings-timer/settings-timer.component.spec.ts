import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTimerComponent } from './settings-timer.component';

describe('SettingsTimerComponent', () => {
  let component: SettingsTimerComponent;
  let fixture: ComponentFixture<SettingsTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
