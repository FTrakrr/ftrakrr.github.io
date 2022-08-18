import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsWeightsPage } from './settings-weights.component';

describe('SettingsWeightsComponent', () => {
  let component: SettingsWeightsPage;
  let fixture: ComponentFixture<SettingsWeightsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsWeightsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsWeightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
