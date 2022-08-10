import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeightObject, WeightMeasurementObject } from 'src/app/scripts/types';

@Component({
  selector: 'app-weight-adder',
  templateUrl: './weight-adder.component.html',
  styleUrls: ['./weight-adder.component.scss']
})
export class WeightAdderComponent {
  @Input() items!: WeightObject;

  @Output('app-remove') remove = new EventEmitter<WeightMeasurementObject>();
  @Output('app-add') add = new EventEmitter<WeightMeasurementObject>();

  constructor() { }
  
  onAddWeight(event: WeightMeasurementObject): void {
    if (!event.value) return;

    if (
      this
        .items[event.unit]
        .indexOf(event.value) != -1
    ) return;

    this.add.emit(event);
  }
}