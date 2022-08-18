import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSetsPage } from './settings-sets.component';

describe('SettingsSetsComponent', () => {
  let component: SettingsSetsPage;
  let fixture: ComponentFixture<SettingsSetsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSetsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
