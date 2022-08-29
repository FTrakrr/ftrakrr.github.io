import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeightMeasurementObject, WeightUnit } from 'src/app/scripts/types';

@Component({
  selector: 'app-weight-adder-form',
  templateUrl: './weight-adder-form.component.html',
  styleUrls: ['./weight-adder-form.component.scss']
})
export class WeightAdderFormComponent {
  @Input() buttonText?: string;

  @Output() submit = new EventEmitter<WeightMeasurementObject>();

  weightData: WeightMeasurementObject = {
    value: null,
    unit: 'kg',
  };

  onSubmit(): void {
    this.submit.emit(this.weightData);
  }
}
