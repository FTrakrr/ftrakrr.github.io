import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsImportDataComponent } from './settings-import-data.component';

describe('SettingsImportDataComponent', () => {
  let component: SettingsImportDataComponent;
  let fixture: ComponentFixture<SettingsImportDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsImportDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsImportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
