import { AfterContentInit, Component, Input } from '@angular/core';
import { Duration } from 'duration-string';

@Component({
  selector: 'app-personal-data-display',
  templateUrl: './personal-data-display.component.html',
  styleUrls: ['./personal-data-display.component.scss']
})
export class PersonalDataDisplayComponent implements AfterContentInit {
  @Input() fields!: PersonalDataDisplayField[];
  @Input() title!: string;
  @Input() routerLink?: string;
  @Input() updated?: Date;

  updatedString?: string;

  constructor() { }

  ngAfterContentInit(): void {
    if (this.updated) {
      this.updatedString = new Duration(new Date(this.updated)).toSimple().join('') + ' ago';
    }
  }
}

export type PersonalDataDisplayField = {
  title?: string,
  value: any,
  icon?: string,
}