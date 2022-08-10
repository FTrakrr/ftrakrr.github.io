import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUnitConversionsComponent } from './settings-unit-conversions.component';

describe('SettingsUnitConversionsComponent', () => {
  let component: SettingsUnitConversionsComponent;
  let fixture: ComponentFixture<SettingsUnitConversionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsUnitConversionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsUnitConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
