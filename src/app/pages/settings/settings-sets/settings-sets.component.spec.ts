import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSetsComponent } from './settings-sets.component';

describe('SettingsSetsComponent', () => {
  let component: SettingsSetsComponent;
  let fixture: ComponentFixture<SettingsSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
