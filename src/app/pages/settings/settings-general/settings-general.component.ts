import { Component, OnInit } from '@angular/core';
import { RadioBarOption, Settings } from 'src/app/scripts/types';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})
export class SettingsGeneralPage implements OnInit {
  settings: Settings = this.settingsService.loadSettings();

  weekdayOptions: RadioBarOption[] = [
    { value: 1, title: 'Monday' },
    { value: 0, title: 'Sunday' }, 
  ];
  keepAwakeOptions: RadioBarOption[] = [
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
  }
}
