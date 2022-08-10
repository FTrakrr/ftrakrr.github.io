import { Component, OnInit } from '@angular/core';
import { Settings, WeightMeasurementObject } from 'src/app/scripts/types';
import { SettingsService } from './../../../services/settings.service';

@Component({
  templateUrl: './settings-weights.component.html',
  styleUrls: ['./settings-weights.component.scss']
})
export class SettingsWeightsComponent implements OnInit {
  settings: Settings = this.settingsService.loadSettings();

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.settingsService.settings.subscribe(v => {
      this.settings = v;
    });
  }

  onPlateAdd(event: WeightMeasurementObject) {
    this.settingsService.addPlate(event);
  }
  onPlateRemove(event: WeightMeasurementObject) {
    this.settingsService.removePlate(event);
  }
  onCableWeightAdd(event: WeightMeasurementObject) {
    this.settingsService.addCableWeight(event);
  }
  onCableWeightRemove(event: WeightMeasurementObject) {
    this.settingsService.removeCableWeight(event);
  }
}
