import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/scripts/types';
import { RadioBarOption } from 'src/app/components/forms/radio-bar/radio-bar.component';
import { SettingsService } from './../../../services/settings.service';

@Component({
  templateUrl: './settings-theme.component.html',
  styleUrls: ['./settings-theme.component.scss']
})
export class SettingsThemePage implements OnInit {
  settings: Settings = this.settingsService.loadSettings();

  themeOptions: RadioBarOption[] = [
    { value: -1, title: 'Default', icon: 'phone' },
    { value: 0, title: 'Light', icon: 'sun' },
    { value: 1, title: 'Dark', icon: 'moon' },
  ];

  constructor(
    public settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.settingsService.settings.subscribe(v => {
      this.settings = v;
    });
  }

  onThemeChange(event: -1 | 0 | 1) {
    this.settingsService.setTheme(event);
  }
}
