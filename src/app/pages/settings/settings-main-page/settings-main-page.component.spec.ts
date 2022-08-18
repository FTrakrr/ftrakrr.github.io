import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMainPagePage } from './settings-main-page.component';

describe('SettingsMainPageComponent', () => {
  let component: SettingsMainPagePage;
  let fixture: ComponentFixture<SettingsMainPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsMainPagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
