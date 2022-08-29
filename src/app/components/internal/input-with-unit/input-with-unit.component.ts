import { Component, Input, Output, EventEmitter, OnInit, AfterContentInit } from '@angular/core';
import { WeightUnit, RadioBarOption, MeasurementObject, AnyUnit } from 'src/app/scripts/types';
import { MoreRounding } from 'more-rounding';

@Component({
  selector: 'app-input-with-unit',
  templateUrl: './input-with-unit.component.html',
  styleUrls: ['./input-with-unit.component.scss']
})
export class InputWithUnitComponent implements AfterContentInit {
  @Input() value!: MeasurementObject;
  @Output() valueChange = new EventEmitter<MeasurementObject>();
  @Input() units!: [AnyUnit, AnyUnit];
  @Input() conversionFactor!: number;
  @Input() invertConversionFactor: boolean = false;

  unitOptions!: [RadioBarOption, RadioBarOption];

  @Input('reverse-order') reverseOrder: boolean = false;
  @Input() horizontal: boolean = false;
  @Input('unit-disabled') unitDisabled = false;

  //button-related
  @Input('no-buttons') noButtons: boolean = false;
  @Input('buttons-always-show') alwaysShowButtons: boolean = true;
  @Input('border-always-show') alwaysShowBorder: boolean = false;
  @Input('button-increment') buttonIncrement: number = 0.1;

  constructor() { }

  ngAfterContentInit(): void {
    this.unitOptions = [
      { value: this.units[0], title: this.units[0] },
      { value: this.units[1], title: this.units[1] },
    ]
  }
  private _emit() {
    this.valueChange.emit(this.value);
  }
  onUnitChange(unit: WeightUnit) {
    this.value.unit = unit;

    if (this.value.value) {
      if (
        unit == this.units[0] && !this.invertConversionFactor ||
        unit == this.units[1] && this.invertConversionFactor
      ) {
        //converting from unit 1 to unit 2
        this.value.value = MoreRounding.toPrecision(this.value.value * this.conversionFactor);
      }
      else {
        //converting from unit 2 to unit 1
        this.value.value = MoreRounding.toPrecision(this.value.value / this.conversionFactor);
      }
    }

    this._emit();
  }
  onValueChange(value: number | null) {
    this.value.value = value;
    this._emit();
  }
}
