import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/scripts/types';
import { RadioBarOption } from 'src/app/components/forms/radio-bar/radio-bar.component';
import { SettingsService } from './../../../services/settings.service';
import { TimerService } from './../../../services/timer.service';

@Component({
  templateUrl: './settings-timer.component.html',
  styleUrls: ['./settings-timer.component.scss']
})
export class SettingsTimerComponent implements OnInit {
  settings: Settings = this.settingsService.loadSettings();

  volumeOptions: RadioBarOption[] = [
    { value: 0, title: 'Off' },
    { value: 1, title: 'Low' },
    { value: 2, title: 'Medium' },
    { value: 3, title: 'High' },
  ];
  vibrationOptions: RadioBarOption[] = [
    { value: 0, title: 'Off' },
    { value: 3, title: 'On' },
  ];
  // TODO: use this ↓↓↓ when figured out how to make vibrations less intensive
  // vibrationOptions: RadioBarOption[] = [
  //   { value: 0, title: 'Off' },
  //   { value: 1, title: 'Low' },
  //   { value: 2, title: 'Medium' },
  //   { value: 3, title: 'High' },
  // ];

  constructor(
    public settingsService: SettingsService,
    private timerService: TimerService,
  ) { }

  ngOnInit(): void {
    this.settingsService.settings.subscribe(v => {
      this.settings = v;
    });
  }

  onTestButtonClick() {
    this.timerService.playTimerSound();
    this.timerService.playVibrations();
  }
}
