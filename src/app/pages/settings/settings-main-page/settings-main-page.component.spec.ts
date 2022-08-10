import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMainPageComponent } from './settings-main-page.component';

describe('SettingsMainPageComponent', () => {
  let component: SettingsMainPageComponent;
  let fixture: ComponentFixture<SettingsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
