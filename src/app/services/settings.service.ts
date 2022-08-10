import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import DEFAULTS from 'src/app/scripts/defaults';
import { Settings, WeightMeasurementObject } from 'src/app/scripts/types';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private _settings: Settings;
    private _settingsSubject = new Subject<Settings>();

    settings = this._settingsSubject.asObservable();

    constructor(private localStorageService: LocalStorageService) {
        this._settings = this.localStorageService.loadFromLocalStorage('settings') as Settings;

        if (!this._settings) {
            this._settings = DEFAULTS.settings;
            this._onUpdate();
        }
    }
    private _onUpdate() {
        this._settingsSubject.next(this._settings);
        this.localStorageService.saveToLocalStorage('settings', this._settings);
    }
    public loadSettings() {
        return this._settings;
    }

    //! settings.first_weekday
    public setFirstWeekday(value: 0 | 1) {
        this._settings.first_weekday = value;
        this._onUpdate();
    }
    //! settings.keep_awake
    public setKeepAwake(value: boolean) {
        this._settings.keep_awake = value;
        this._onUpdate();
    }
    //! settings.precise_conversion
    public setPreciseConversion(type: 'weight' | 'distance', value: boolean) {
        this._settings.precise_conversion[type] = value;
        this._onUpdate();
    }
    //! settings.plates
    public addPlate(item: WeightMeasurementObject) {
        if (item.value == null) return;
        this._settings.plates[item.unit].push(item.value);
        this._settings.plates[item.unit].sort(function (a, b) {
            return a - b;
        });
        this._onUpdate();
    }
    public removePlate(item: WeightMeasurementObject) {
        if (item.value == null) return;
        var index = this._settings.plates[item.unit].indexOf(item.value);
        if (index !== -1) {
            this._settings.plates[item.unit].splice(index, 1);
            this._onUpdate();
        }
    }
    //! settings.cable_weights
    public addCableWeight(item: WeightMeasurementObject) {
        if (item.value == null) return;
        this._settings.cable_weights[item.unit].push(item.value);
        this._settings.cable_weights[item.unit].sort(function (a, b) {
            return a - b;
        });
        this._onUpdate();
    }
    public removeCableWeight(item: WeightMeasurementObject) {
        if (item.value == null) return;
        var index = this._settings.cable_weights[item.unit].indexOf(item.value);
        if (index != -1) {
            this._settings.cable_weights[item.unit].splice(index, 1);
            this._onUpdate();
        }
    }
    //! settings.sets
    public setShowPreviousWorkout(value: boolean) {
        this._settings.sets.show_previous = value;
        this._onUpdate();
    }
    public setShowAddedWeight(value: boolean) {
        this._settings.sets.total.show_total_added = value;
        this._onUpdate();
    }
    public setShowBaseResistance(value: boolean) {
        this._settings.sets.total.show_base_resistance = value;
        this._onUpdate();
    }
    public setShowTotalWeight(value: boolean) {
        this._settings.sets.total.show_total_weight = value;
        this._onUpdate();
    }
    public setShowSetTotal(value: boolean) {
        this._settings.sets.total.show_set_total = value;
        this._onUpdate();
    }
    public setShowExerciseTotal(value: boolean) {
        this._settings.sets.total.show_exercise_total = value;
        this._onUpdate();
    }
    public setShowBodyMassPercent(value: boolean) {
        this._settings.sets.show_body_mass_percent = value;
        this._onUpdate();
    }
    public setShowWeightCalculator(value: boolean) {
        this._settings.sets.show_calculator = value;
        this._onUpdate();
    }
    //! settings.is_dark_theme
    public setTheme(value: -1 | 0 | 1) {
        this._settings.is_dark_theme = value;
        this._onUpdate();
    }
    //! settings.timer
    public setTimerVolume(value: 0 | 1 | 2 | 3) {
        this._settings.timer.volume = value;
        this._onUpdate();
    }
    public setTimerVibration(value: 0 | 1 | 2 | 3) {
        this._settings.timer.vibration = value;
        this._onUpdate();
    }
}
