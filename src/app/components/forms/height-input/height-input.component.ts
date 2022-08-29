import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { feetFloatToFeetInches, feetInchesToFeetFloat } from 'src/app/scripts/unit_convert';
import { HeightMeasurementObject, HeightUnit } from 'src/app/scripts/types';
import { MoreRounding } from 'more-rounding';
import { INCHES_IN_FOOT, INCH_TO_CM } from 'src/app/scripts/constants';

@Component({
  selector: 'app-height-input',
  templateUrl: './height-input.component.html',
  styleUrls: ['./height-input.component.scss']
})
export class HeightInputComponent implements AfterContentInit {
  @Input() value: HeightMeasurementObject = { value: 0, unit: 'cm' } as HeightMeasurementObject;
  valueInternal: { mainValue: number | null, inches: number | null } = { mainValue: null, inches: null };
  @Output() valueChange = new EventEmitter<HeightMeasurementObject>();

  heightUnitOptions = [
    { value: 'cm' as HeightUnit, title: 'cm' },
    { value: 'ft' as HeightUnit, title: 'ft' },
  ];

  @Input('unit-disabled') unitDisabled = false;

  //button-related
  @Input('no-buttons') noButtons: boolean = false;
  @Input('buttons-always-show') alwaysShowButtons: boolean = true;
  @Input('border-always-show') alwaysShowBorder: boolean = false;

  constructor() { }

  ngAfterContentInit(): void {
    this.valueInternal.mainValue = this.value.value;
  }
  private _emit() {
    this.valueChange.emit(this.value);
  }
  private _onValueChange() {
    if (this.value.unit == 'ft') {
      if (this.valueInternal.mainValue == null && this.valueInternal.mainValue == null) {
        this.value.value = null;
      }
      else this.value.value = feetInchesToFeetFloat(this.valueInternal.mainValue ?? 0, this.valueInternal.inches ?? 0);
    }
    else {
      this.value.value = this.valueInternal.mainValue;
    }
    this._emit();
  }
  onUnitChange(unit: HeightUnit) {
    this.value.unit = unit;

    if (unit == 'ft' && this.valueInternal.mainValue == null) {
      this.valueInternal.inches = null;
    }
    else if (this.valueInternal.mainValue || this.valueInternal.inches) {
      if (unit == 'cm') {
        // converting from ft+in to cm
        let feetFloat = feetInchesToFeetFloat(this.valueInternal.mainValue ?? 0, this.valueInternal.inches ?? 0);
        this.valueInternal.mainValue = MoreRounding.roundDown(feetFloat * INCHES_IN_FOOT / INCH_TO_CM.precise);
      }
      else {
        //converting from cm to ft+in
        let [feet, inches] = feetFloatToFeetInches((this.valueInternal.mainValue ?? 0) / INCHES_IN_FOOT * INCH_TO_CM.precise);
        this.valueInternal.mainValue = feet;
        this.valueInternal.inches = MoreRounding.toMultiple(inches, 0.5);
      }
    }

    this._onValueChange();
    this._emit();
  }
  onMainValueChange(value: number | null) {
    this.valueInternal.mainValue = value;
    this._onValueChange();
  }
  onInchesChange(inches: number | null) {
    this.valueInternal.inches = inches;
    this._onValueChange();
  }
}
