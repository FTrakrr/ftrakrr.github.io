import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTimerPage } from './settings-timer.component';

describe('SettingsTimerComponent', () => {
  let component: SettingsTimerPage;
  let fixture: ComponentFixture<SettingsTimerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTimerPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
