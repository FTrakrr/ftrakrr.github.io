import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioCardOption } from 'src/app/scripts/types';
import { TakeChance } from 'take-chance';

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss']
})
export class RadioCardComponent {
  @Input() options!: RadioCardOption[];
  @Input() perRowMax?: number; 

  id = TakeChance.id();

  @Input() value?: any;
  @Output() valueChange = new EventEmitter<any>();

  ngAfterContentInit(): void {
    this._checkValueToSelect(this.value);
  }

  private _checkValueToSelect(value: any) {
    this.options.map(opt => {
      opt.checked = opt.value == value;
      return opt;
    })
  }
  onSelect(value: any) {
    this.value = value;
    this.valueChange.emit(value);
    this._checkValueToSelect(value);
  }
}
