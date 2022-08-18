import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsThemePage } from './settings-theme.component';

describe('SettingsThemeComponent', () => {
  let component: SettingsThemePage;
  let fixture: ComponentFixture<SettingsThemePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsThemePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsThemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
