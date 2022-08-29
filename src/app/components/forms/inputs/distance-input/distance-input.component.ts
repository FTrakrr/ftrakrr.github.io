import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MI_TO_KM } from 'src/app/scripts/constants';
import { DistanceMeasurementObject, MeasurementObject } from 'src/app/scripts/types';

@Component({
  selector: 'app-distance-input',
  templateUrl: './distance-input.component.html',
  styleUrls: ['./distance-input.component.scss']
})
export class DistanceInputComponent {
  @Input() value: DistanceMeasurementObject = { value: 0, unit: 'km' };
  @Output() valueChange = new EventEmitter<DistanceMeasurementObject>();

  conversionFactor = MI_TO_KM.precise;

  @Input() reverseOrder: boolean = false;
  @Input() horizontal: boolean = false;
  @Input() unitDisabled = false;

  //button-related
  @Input() noButtons: boolean = false;
  @Input() alwaysShowButtons: boolean = true;
  @Input() alwaysShowBorder: boolean = false;

  onValueChange(value: MeasurementObject) {
    value = value as DistanceMeasurementObject;
    this.value = value;
    this.valueChange.emit(this.value);
  }
}
