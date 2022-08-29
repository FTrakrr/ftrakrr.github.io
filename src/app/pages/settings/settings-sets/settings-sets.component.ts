import { Component, OnInit } from '@angular/core';
import { RadioBarOption, Settings } from 'src/app/scripts/types';
import { SettingsService } from './../../../services/settings.service';

@Component({
  templateUrl: './settings-sets.component.html',
  styleUrls: ['./settings-sets.component.scss']
})
export class SettingsSetsPage implements OnInit {
  settings: Settings = this.settingsService.loadSettings();

  previousWorkoutOptions: RadioBarOption[] = [
    { value: true, title: 'Yes' },
    { value: false, title: 'No' },
  ];
  addedWeightOptions: RadioBarOption[] = [
    { value: true, title: 'Yes' },
    { value: false, title: 'No' },
  ];
  baseResistanceOptions: RadioBarOption[] = [
    { value: true, title: 'Yes' },
    { value: false, title: 'No' },
  ];
  totalWeightOptions: RadioBarOption[] = [
    { value: true, title: 'Yes' },
    { value: false, title: 'No' },
  ];
  setTotalOptions: RadioBarOption[] = [
    { value: true, title: 'Yes' },
    { value: false, title: 'No' },
  ];
  exerciseTotalOptions: RadioBarOption[] = [
    { value: true, title: 'Yes' },
    { value: false, title: 'No' },
  ];
  bodyMassPercentOptions: RadioBarOption[] = [
    { value: true, title: 'Yes' },
    { value: false, title: 'No' },
  ];
  weightCalculatorOptions: RadioBarOption[] = [
    { value: true, title: 'Yes' },
    { value: false, title: 'No' },
  ];

  constructor(
    public settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.settingsService.settings.subscribe(v => {
      this.settings = v;
    });

    this.previousWorkoutOptions.map(v => {
      if (this.settings.sets.show_previous == v.value) {
        v.checked = true;
      }
    });
    this.addedWeightOptions.map(v => {
      if (this.settings.sets.total.show_total_added == v.value) {
        v.checked = true;
      }
    });
    this.baseResistanceOptions.map(v => {
      if (this.settings.sets.total.show_base_resistance == v.value) {
        v.checked = true;
      }
    });
    this.totalWeightOptions.map(v => {
      if (this.settings.sets.total.show_total_weight == v.value) {
        v.checked = true;
      }
    });
    this.setTotalOptions.map(v => {
      if (this.settings.sets.total.show_set_total == v.value) {
        v.checked = true;
      }
    });
    this.exerciseTotalOptions.map(v => {
      if (this.settings.sets.total.show_exercise_total == v.value) {
        v.checked = true;
      }
    });
    this.bodyMassPercentOptions.map(v => {
      if (this.settings.sets.show_body_mass_percent == v.value) {
        v.checked = true;
      }
    });
    this.weightCalculatorOptions.map(v => {
      if (this.settings.sets.show_calculator == v.value) {
        v.checked = true;
      }
    });
  }
}
