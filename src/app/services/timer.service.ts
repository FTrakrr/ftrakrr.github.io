import { Injectable } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Injectable({
    providedIn: 'root'
})
export class TimerService {
    timerSettings = this.settingsService.loadSettings().timer;

    private _timerStartDate!: Date;

    constructor(
        private settingsService: SettingsService,
    ) { }

    restartTimer(length: number) {
        this._timerStartDate = new Date(Date.now());
        return this._timerStartDate;
    }

    playTimerSound() {
        if (this.timerSettings.volume == 0) return;
        let beep = new Audio('src/app/assets/beep.mp3');
        //* volume settings: 
        // low (1): 20%
        // medium (2): 60%
        // high (3): 100%
        // 0.200001 is used instead of 0.2 to prevent floating point errors
        beep.volume = this.timerSettings.volume * 0.4 - 0.200001;
        beep.play();
    }
    playVibrations() {
        // TODO: figure out how to make the vibrations less intensive
        if (!(navigator.vibrate instanceof Function)) return;

        navigator.vibrate([200, 200, 200, 200]);
    }
}
