import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../../../services/settings.service';
import { RadioBarOption } from 'src/app/components/forms/radio-bar/radio-bar.component';
import { Settings } from 'src/app/scripts/types';

@Component({
  templateUrl: './settings-unit-conversions.component.html',
  styleUrls: ['./settings-unit-conversions.component.scss']
})
export class SettingsUnitConversionsComponent implements OnInit {
  settings: Settings = this.settingsService.loadSettings();

  weightConversionOptions: RadioBarOption[] = [
    {
      icon: 'bullseye',
      title: 'Precise',
      subtitle: '1 lb = 0.453592 kg',
      value: true,
    },
    {
      icon: 'stars',
      title: 'Pretty',
      subtitle: '1 lb = 0.45 kg',
      value: false,
    },
  ];
  distanceConversionOptions: RadioBarOption[] = [
    {
      icon: 'bullseye',
      title: 'Precise',
      subtitle: '1 m = 3.280840 ft',
      value: true,
    },
    {
      icon: 'stars',
      title: 'Pretty',
      subtitle: '1 m = 3.3 ft',
      value: false,
    },
  ];

  constructor(
    public settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.settingsService.settings.subscribe(v => {
      this.settings = v;
    });
  }
}
