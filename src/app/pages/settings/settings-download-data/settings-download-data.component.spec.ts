import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDownloadDataComponent } from './settings-download-data.component';

describe('SettingsDownloadDataComponent', () => {
  let component: SettingsDownloadDataComponent;
  let fixture: ComponentFixture<SettingsDownloadDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsDownloadDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDownloadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
