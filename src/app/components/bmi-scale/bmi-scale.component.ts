import { Component, Input, AfterContentInit } from '@angular/core';
import { BMI_SCALE } from 'src/app/scripts/constants';
import { BMIObject } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-bmi-scale',
  templateUrl: './bmi-scale.component.html',
  styleUrls: ['./bmi-scale.component.scss']
})
export class BmiScaleComponent implements AfterContentInit {
  readonly BMI_CONSTANT = BMI_SCALE;

  @Input() value?: BMIObject;

  markerPos = '0';

  constructor() { }

  ngAfterContentInit(): void {
    //! determine bmi marker position
    //those values are hardcoded in a way that I think looks good
    let v = this.value?.bmi; //short for value
    if (!v) return;
    //widths of each element
    let w0 = BMI_SCALE[0].width; //short for width1
    let w1 = BMI_SCALE[1].width;
    let w2 = BMI_SCALE[2].width;
    let w3 = BMI_SCALE[3].width;
    let w4 = BMI_SCALE[4].width;
    let w5 = BMI_SCALE[5].width;
    let w = 0;
    
    if (v < 18.5) {
      //defined by the function: https://www.desmos.com/calculator/ncddqyjnpl
      this.markerPos = `max(${w0 * (v - 10) / 8.5}%, 5px)`;
      return;
    }
    if (v == 18.5) {
      this.markerPos = `${w0}%`;
      return;
    }
    w += w0;
    //current bmi range span
    let low = 18.5;
    let span = 24 - low;
    if (v < 24) {
      this.markerPos = `${w + w1 * (v - low) / span}%`;
      return;
    }
    w += w1;
    low = 24;
    span = 30 - low;
    if (v < 30) {
      this.markerPos = `${w + w2 * (v - low) / span}%`;
      return;
    }
    w += w2;
    low = 30;
    span = 35 - low;
    if (v < 35) {
      this.markerPos = `${w + w3 * (v - low) / span}%`;
      return;
    }
    w += w3;
    low = 35;
    span = 40 - low;
    if (v < 40) {
      this.markerPos = `${w + w4 * (v - low) / span}%`;
      return;
    }
    w += w4;
    low = 40;
    span = 45 - low;
    this.markerPos = `min(${w + w5 * (v - low) / span}%, calc(100% - 3px))`;
  }

}
