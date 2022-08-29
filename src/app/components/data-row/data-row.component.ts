import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class SettingsRowComponent {
  @Input() icon?: string;
  @Input() faIcon?: string;
  @Input() iconstyle?: string = "solid";
  @Input() title!: string;
  @Input() routerLink?: string;
  @Input() href?: string;
  @Input() keepArrowSpace: boolean = false;
  @Input() gap?: boolean;
  @Input() hideArrow?: boolean;
  @Input() showArrow: boolean = false;

  @Input() value?: any;
  @Input() defaultValue?: any;
  @Input() subvalue?: any;
  @Input() subvalueOpacity?: any;
  @Input() subvalueColor?: any;
  @Input() subvalueFontWeight?: any;

  constructor() { }
}
