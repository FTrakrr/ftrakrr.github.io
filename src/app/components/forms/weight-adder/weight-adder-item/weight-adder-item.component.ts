import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeightMeasurementObject } from 'src/app/scripts/types';

@Component({
  selector: 'app-weight-adder-item',
  templateUrl: './weight-adder-item.component.html',
  styleUrls: ['./weight-adder-item.component.scss']
})
export class WeightAdderItemComponent {
  @Input() value!: WeightMeasurementObject;

  triggerRemove = false;

  @Output() remove = new EventEmitter<WeightMeasurementObject>();

  constructor() { }

  onRemove() {
    this.triggerRemove = true;
    setTimeout(() => {
      this.remove.emit(this.value);
    }, 750);
  }
}
