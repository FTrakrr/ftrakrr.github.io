import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGeneralPage } from './settings-general.component';

describe('SettingsGeneralComponent', () => {
  let component: SettingsGeneralPage;
  let fixture: ComponentFixture<SettingsGeneralPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsGeneralPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
