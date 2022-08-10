import { Component, Input, EventEmitter, Output, AfterContentInit } from '@angular/core';
import { TakeChance } from 'take-chance';

/**
 * Creates a bar with a few options to choose from. Works like a set of radio inputs.
 * 
 * @param {RadioBarOption[]} options (input) an array of option objects that should appear in the bar.
 * @param {string} size (input) "S", "M", or "L". Determines the size of each panel.
 * @param {*} app-change (output) an event fired when an option is selected. The option value is passed.
 * 
 * ----
 * 
 * Options object can contain the following properties:
 * * `value`: `any` — a value that should be passed down the event when this option is selected.
 * * `title`: `string` — the option's main title.
 * * `icon?`: `string` — a [Bootstrap icon](https://icons.getbootstrap.com/) name.
 * * `subtitle?`: `string` — the option's subtitle. a lot smaller and in low opacity.
 * * `checked?`: `boolean` — if the option is checked.
 */
@Component({
  selector: 'app-radio-bar',
  templateUrl: './radio-bar.component.html',
  styleUrls: ['./radio-bar.component.scss']
})
export class RadioBarComponent implements AfterContentInit {
  @Input() options!: RadioBarOption[];
  @Input() size: 'S' | 'M' | 'L' = 'L';
  @Input('fit-content') fitContent: boolean = false;
  @Input() width?: string;
  @Input('no-uppercase') noUppercase: boolean = false;

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

export type RadioBarOption = {
  value: any;

  icon?: string;
  faIcon?: string;
  iconstyle?: string;
  
  title?: string;
  subtitle?: string;
  checked?: boolean;
}