import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class SettingsRowComponent {
  @Input() icon?: string;
  @Input('fa-icon') faIcon?: string;
  @Input() iconstyle?: string = "solid";
  @Input() title!: string;
  @Input() routerLink?: string;
  @Input() href?: string;
  @Input('keep-arrow-space') keepArrowSpace: boolean = false;
  @Input() gap?: boolean;
  @Input('hide-arrow') hideArrow?: boolean;
  @Input('show-arrow') showArrow: boolean = false;

  @Input() value?: any;
  @Input('default-value') defaultValue?: any;
  @Input() subvalue?: any;
  @Input('subvalue-opacity') subvalueOpacity?: any;
  @Input('subvalue-color') subvalueColor?: any;
  @Input('subvalue-font-weight') subvalueFontWeight?: any;

  constructor() { }
}
