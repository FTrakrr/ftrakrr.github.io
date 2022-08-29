import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { RegexService, InputElementData } from 'src/app/services/regex.service';
import { MoreRounding } from 'more-rounding';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInputComponent {
  //basic variables
  @Input() value: number | null = null;
  @Output() valueChange = new EventEmitter<number | null>();
  @Input() placeholder: string | number | undefined = undefined;

  //input element
  @ViewChild('input') inputEl!: ElementRef;
  
  //button-related
  @Input() noButtons: boolean = false;
  @Input() buttonIncrement: number = 1;
  @Input() alwaysShowButtons: boolean = false;
  @Input() alwaysShowBorder: boolean = false;

  //number options
  @Input() allowNegative: boolean = false;
  @Input() min?: number;
  @Input() max?: number;

  // private _watchForChanges = false;

  constructor(
    private regexService: RegexService
  ) { }

  private _getValue(): string {
    return String(this.inputEl.nativeElement.value);
  }
  private _setValue(v: number | null): void {
    this.inputEl.nativeElement.value = v;
    this.value = v;
  }
  private _getCaretPos(): number {
    return this.inputEl.nativeElement.selectionStart;
  }
  private _setCaretPos(pos: number): void {
    this.inputEl.nativeElement.setSelectionRange(pos, pos);
  }

  private _emit() {
    this.valueChange.emit(this.value);
  }
  onInput(): void {
    let input: InputElementData = {
      value: this._getValue(),
      caretPos: this._getCaretPos(),
    }

    //set value to null if empty string
    if (input.value == '') {
      this.value = null;
      //emit the event prematurely
      this._emit();
      return;
    }

    //aply regexes
    if (this.allowNegative) {
      this.regexService.removeTrailingMinus(input);
    }
    else {
      this.regexService.removeAnyMinus(input);
    }
    this.regexService.removeLeadingZeros(input);
    this.regexService.removeInvalidNumberCharacters(input);
    this.regexService.commaToDot(input);
    this.regexService.removeTrailingDots(input);

    //keep the number in the min/max bounds
    let inputAsNumber: number | null = Number(input.value);
    if (this.min && inputAsNumber < this.min) input.value = String(this.min);
    else if (this.max && inputAsNumber > this.max) input.value = String(this.max);

    //update the input element
    this._setValue(Number(input.value));
    this._setCaretPos(input.caretPos);

    this._emit();
  }

  onIncrementClick(): void {
    let newValue = (this.value ?? 0) + this.buttonIncrement;
    newValue = MoreRounding.toPrecision(newValue, 1);
    this._setValue(newValue);
    this.inputEl.nativeElement.focus();

    this._emit();
  }
  onDecrementClick(): void {
    if (!this.value) return;
    let newValue = (this.value ?? 0) - this.buttonIncrement;
    newValue = MoreRounding.toPrecision(newValue, 1);
    this._setValue(newValue);
    this.inputEl.nativeElement.focus();

    this._emit();
  }
}
