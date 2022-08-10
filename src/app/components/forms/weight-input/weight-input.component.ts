import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { WeightUnit, WeightMeasurementObject } from 'src/app/scripts/types';
import { LBS_TO_KG } from './../../../scripts/constants';
import { MoreRounding } from 'more-rounding';

@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.scss']
})
export class WeightInputComponent implements OnInit {
  @Input() value: WeightMeasurementObject = { value: 0, unit: 'kg' } as WeightMeasurementObject;
  @Output() valueChange = new EventEmitter<WeightMeasurementObject>();

  weightUnitOptions = [
    { value: 'kg' as WeightUnit, title: 'kg' },
    { value: 'lbs' as WeightUnit, title: 'lbs' },
  ]
  weightUnitValue: WeightUnit = 'kg';

  @Input('reverse-order') reverseOrder: boolean = false;
  @Input() horizontal: boolean = false;

  //button-related
  @Input('no-buttons') noButtons: boolean = false;
  @Input('buttons-always-show') alwaysShowButtons: boolean = true;
  @Input('border-always-show') alwaysShowBorder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  private _emit() {
    this.valueChange.emit(this.value);
  }
  onUnitChange(unit: WeightUnit) {
    this.value.unit = unit;
  
    if (this.value.value) {
      if (unit == 'kg') {
        //converting from lbs to kg
        this.value.value = MoreRounding.toPrecision(this.value.value * LBS_TO_KG.precise);
      }
      else {
        //converting from kg to lbs
        this.value.value = MoreRounding.toPrecision(this.value.value / LBS_TO_KG.precise);
      }
    }

    this._emit();
  }
  onValueChange(value: number | null) {
    this.value.value = value;
    this._emit();
  }
}
