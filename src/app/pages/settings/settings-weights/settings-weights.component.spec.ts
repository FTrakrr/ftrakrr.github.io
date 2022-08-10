import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsWeightsComponent } from './settings-weights.component';

describe('SettingsWeightsComponent', () => {
  let component: SettingsWeightsComponent;
  let fixture: ComponentFixture<SettingsWeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsWeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsWeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
