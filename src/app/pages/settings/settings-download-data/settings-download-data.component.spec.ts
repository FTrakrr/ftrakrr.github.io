import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDownloadDataPage } from './settings-download-data.component';

describe('SettingsDownloadDataComponent', () => {
  let component: SettingsDownloadDataPage;
  let fixture: ComponentFixture<SettingsDownloadDataPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsDownloadDataPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDownloadDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
