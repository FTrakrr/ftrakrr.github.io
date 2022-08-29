import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LBS_TO_KG } from 'src/app/scripts/constants';
import { WeightMeasurementObject, MeasurementObject } from 'src/app/scripts/types';

@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.scss']
})
export class WeightInputComponent {
  @Input() value: WeightMeasurementObject = { value: 0, unit: 'kg' };
  @Output() valueChange = new EventEmitter<WeightMeasurementObject>();

  conversionFactor = LBS_TO_KG.precise;

  @Input('reverse-order') reverseOrder: boolean = false;
  @Input() horizontal: boolean = false;
  @Input('unit-disabled') unitDisabled = false;

  //button-related
  @Input('no-buttons') noButtons: boolean = false;
  @Input('buttons-always-show') alwaysShowButtons: boolean = true;
  @Input('border-always-show') alwaysShowBorder: boolean = false;

  onValueChange(value: MeasurementObject) {
    value = value as WeightMeasurementObject;
    this.value = value;
    this.valueChange.emit(this.value);
  }
}
