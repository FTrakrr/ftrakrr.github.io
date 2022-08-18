import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUnitConversionsPage } from './settings-unit-conversions.component';

describe('SettingsUnitConversionsComponent', () => {
  let component: SettingsUnitConversionsPage;
  let fixture: ComponentFixture<SettingsUnitConversionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsUnitConversionsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsUnitConversionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
