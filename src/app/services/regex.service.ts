import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  constructor() { }

  private _applyRegex(
    pattern: RegexObject,
    input: InputElementData,
    caretOptions?: CaretOptions
  ) {
    let match = input.value.match(pattern.pattern) ?? [];
    if (input.value.match(pattern.pattern)) {
      if (!caretOptions?.ignore) {
        let caretChange = match.length * (caretOptions?.multiplier ?? 1) + (caretOptions?.add ?? 0);
        input.caretPos -= caretChange;
      }
      input.value = input.value.replace(pattern.pattern, pattern.replace ?? '')
    }
  }

  /**
   * Removes any minus found in the value.
   * 
   * **Examples**:
   * * `-123` → `123`
   * * `12-3` → `123`
   * * `1-23--` → `123`
   * @param input an object containing input's value and its caret position
   */
  public removeAnyMinus(input: InputElementData) {
    this._applyRegex(
      {
        pattern: /-/g,
      },
      input
    )
  }
  /**
   * Removes any minus found in the value, except the minus at the beginning.
   *
   * **Examples**:
   * * `-123` → `-123`
   * * `12-3` → `123`
   * * `123-` → `123`
   * @param input an object containing input's value and its caret position
   */
  public removeTrailingMinus(input: InputElementData) {
    this._applyRegex(
      {
        pattern: /(.+)-/g,
        replace: '$1',
      },
      input
    )
  }
  /**
   * Removes any leading zeros found in the value,.
   *
   * **Examples**:
   * * `-0123` → `-123`
   * * `0123` → `123`
   * * `0.5` → `0.5` (nothing happens)
   * @param input an object containing input's value and its caret position
   */
  public removeLeadingZeros(input: InputElementData) {
    this._applyRegex(
      {
        pattern: /^(-*)0+([^.])/g,
        replace: '$1$2',
      },
      input
    )
  }
  /**
   * Removes any minus found in the value, except the minus at the beginning.
   *
   * **Examples**:
   * * `-123` → `-123`
   * * `123a` → `123`
   * * `b3#` → `3`
   * @param input an object containing input's value and its caret position
   */
  public removeInvalidNumberCharacters(input: InputElementData) {
    this._applyRegex(
      {
        pattern: /[^0-9,\.\-]/g,
      },
      input
    )
  }
  /**
   * Changes all commas to dots.
   *
   * **Example**:
   * * `10,5` → `10.5`
   * @param input an object containing input's value and its caret position
   */
  public commaToDot(input: InputElementData) {
    this._applyRegex(
      {
        pattern: /,/g,
        replace: '.',
      },
      input,
      { ignore: true }
    )
  }
  /**
   * Removes any decimal separator.
   *
   * **Examples**:
   * * `10.5` → `105`
   * * `10.` → `10`
   * @param input an object containing input's value and its caret position
   */
  public makeInteger(input: InputElementData) {
    this._applyRegex(
      {
        pattern: /\./g,
      },
      input
    )
  }
  /**
   * Removes all dots from, except the first one. The left-most dot is always not removed.
   *
   * **Examples**:
   * * `10.5.6` → `10.56`
   * @param input an object containing input's value and its caret position
   */
  public removeTrailingDots(input: InputElementData) {
    this._applyRegex(
      {
        pattern: /(\..*)\./g,
      },
      input
    )
  }
  /**
   * Removes any minus found in the value, except the minus at the beginning.
   *
   * **Examples**:
   * * `-123` → `123`
   * * `a2fg` → `a2f`
   * * `b3#` → `b3`
   * @param input an object containing input's value and its caret position
   */
  public removeInvalidHexCharacters(input: InputElementData) {
    this._applyRegex(
      {
        pattern: /[^0-9a-f]/gi,
      },
      input
    )
  }
}

export interface RegexObject {
  pattern: RegExp;
  replace?: string;
}
export interface InputElementData {
  value: string;
  caretPos: number;
}
export interface CaretOptions {
  add?: number;
  multiplier?: number;
  ignore?: boolean;
}