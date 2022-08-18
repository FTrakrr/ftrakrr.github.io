import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsImportDataPage } from './settings-import-data.component';

describe('SettingsImportDataComponent', () => {
  let component: SettingsImportDataPage;
  let fixture: ComponentFixture<SettingsImportDataPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsImportDataPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsImportDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
