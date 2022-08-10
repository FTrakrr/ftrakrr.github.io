import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeightUnit } from 'src/app/scripts/types';

@Component({
  selector: 'app-weight-adder-item',
  templateUrl: './weight-adder-item.component.html',
  styleUrls: ['./weight-adder-item.component.scss']
})
export class WeightAdderItemComponent {
  @Input() value!: number;
  @Input() unit!: WeightUnit;

  triggerRemove = false;

  @Output('app-remove') remove = new EventEmitter<
    {
      value: number,
      unit: WeightUnit,
    }
  >();

  constructor() { }

  onRemove() {
    this.triggerRemove = true;
    setTimeout(() => {
      this.remove.emit({ value: this.value, unit: this.unit });
    }, 750);
  }
}
