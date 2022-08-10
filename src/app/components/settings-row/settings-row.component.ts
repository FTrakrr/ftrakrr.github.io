import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-row',
  templateUrl: './settings-row.component.html',
  styleUrls: ['./settings-row.component.scss']
})
export class SettingsRowComponent {
  @Input() icon?: string;
  @Input('fa-icon') faIcon?: string;
  @Input() iconstyle?: string = "solid";
  @Input() title!: string;
  @Input() routerLink?: string;
  @Input() href?: string;
  @Input() gap?: boolean;
  @Input() hideArrow?: boolean;

  constructor() { }
}
