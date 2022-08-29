import { Component, Input, EventEmitter, Output, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { RadioBarOption } from 'src/app/scripts/types';
import { TakeChance } from 'take-chance';

@Component({
  selector: 'app-radio-bar',
  templateUrl: './radio-bar.component.html',
  styleUrls: ['./radio-bar.component.scss']
})
export class RadioBarComponent implements AfterContentInit, OnChanges {
  @Input() options!: RadioBarOption[];
  @Input() size: 'S' | 'M' | 'L' = 'L';
  @Input('fit-content') fitContent: boolean = false;
  @Input() width?: string;
  @Input('no-uppercase') noUppercase: boolean = false;
  @Input() disabled = false;

  id = TakeChance.id();

  @Input() value?: any;
  @Output() valueChange = new EventEmitter<any>();

  ngAfterContentInit(): void {
    this._checkValueToSelect(this.value);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('value')) {
      this._checkValueToSelect(this.value);
    }
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