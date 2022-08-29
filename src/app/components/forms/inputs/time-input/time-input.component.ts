import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss']
})
export class TimeInputComponent implements OnChanges {
  @Input() value!: number | null;
  @Output() valueChange = new EventEmitter<number>();

  @Input() useHours?: boolean = false;

  @Input() max?: number;

  hours: number | null = null;
  minutes: number | null = null;
  seconds: number | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this._fromSeconds(changes['value'].currentValue);
    }
  }

  private _fromSeconds(s: number) {
    this.hours = Math.floor(s / 3600) || null;
    s %= 3600;
    this.minutes = Math.floor(s / 60) || null;
    this.seconds = s % 60 || null;
  }
  emit() {
    let s = (this.hours ?? 0) * 3600 + (this.minutes ?? 0) * 60 + (this.seconds ?? 0);
    this.value = s;
    this.valueChange.emit(this.value);
  }
}
