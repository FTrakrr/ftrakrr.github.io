import { Component, Input } from '@angular/core';
import { BMI_SCALE } from 'src/app/scripts/constants';
import { BMIObject } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-bmi-scale',
  templateUrl: './bmi-scale.component.html',
  styleUrls: ['./bmi-scale.component.scss']
})
export class BmiScaleComponent {
  readonly BMI_CONSTANT = BMI_SCALE;

  @Input() value!: BMIObject;
}
