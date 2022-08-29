import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MI_TO_KM } from 'src/app/scripts/constants';
import { MeasurementObject, SpeedMeasurementObject } from 'src/app/scripts/types';

@Component({
  selector: 'app-speed-input',
  templateUrl: './speed-input.component.html',
  styleUrls: ['./speed-input.component.scss']
})
export class SpeedInputComponent {
  @Input() value: SpeedMeasurementObject = { value: 0, unit: 'kmph' };
  @Output() valueChange = new EventEmitter<SpeedMeasurementObject>();

  conversionFactor = MI_TO_KM.precise;

  @Input() reverseOrder: boolean = false;
  @Input() horizontal: boolean = false;
  @Input() unitDisabled = false;

  //button-related
  @Input() noButtons: boolean = false;
  @Input() alwaysShowButtons: boolean = true;
  @Input() alwaysShowBorder: boolean = false;

  onValueChange(value: MeasurementObject) {
    this.value = value as SpeedMeasurementObject;
    this.valueChange.emit(this.value);
  }
}
