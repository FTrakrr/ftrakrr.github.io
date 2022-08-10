import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeightMeasurementObject, WeightUnit } from 'src/app/scripts/types';

@Component({
  selector: 'app-weight-adder-form',
  templateUrl: './weight-adder-form.component.html',
  styleUrls: ['./weight-adder-form.component.scss']
})
export class WeightAdderFormComponent {
  @Input('button-text') buttonText?: string;

  @Output('app-submit') submit = new EventEmitter<WeightMeasurementObject>();

  inputNumbers: number | null = null;

  weightUnitOptions = [
    { value: 'kg' as WeightUnit, title: 'kg', checked: true },
    { value: 'lbs' as WeightUnit, title: 'lbs' },
  ]

  weightData: WeightMeasurementObject = {
    value: null,
    unit: 'kg',
  }

  constructor() { }

  onSubmit(): void {
    this.submit.emit(this.weightData);
  }
}
