import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INCH_TO_CM } from 'src/app/scripts/constants';
import { LengthMeasurementObject, MeasurementObject } from 'src/app/scripts/types';

@Component({
  selector: 'app-length-input',
  templateUrl: './length-input.component.html',
  styleUrls: ['./length-input.component.scss']
})
export class LengthInputComponent {
  @Input() value: LengthMeasurementObject = { value: 0, unit: 'cm' };
  @Output() valueChange = new EventEmitter<LengthMeasurementObject>();

  conversionFactor = INCH_TO_CM.precise;

  @Input() reverseOrder: boolean = false;
  @Input() horizontal: boolean = false;
  @Input() unitDisabled = false;

  //button-related
  @Input() noButtons: boolean = false;
  @Input() alwaysShowButtons: boolean = true;
  @Input() alwaysShowBorder: boolean = false;

  onValueChange(value: MeasurementObject) {
    this.value = value as LengthMeasurementObject;
    this.valueChange.emit(this.value);
  }
}
