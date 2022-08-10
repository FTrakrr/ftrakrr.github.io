import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transparent-button',
  templateUrl: './transparent-button.component.html',
  styleUrls: ['./transparent-button.component.scss']
})
export class TransparentButtonComponent {
  @Input() icon?: string;
  @Input('fa-icon') faIcon?: string;
  @Input() iconstyle?: string = "solid";
  @Input('icon-size') iconFontSize?: string;
  @Input() text?: string;
  @Input() routerLink?: string;
  @Input() href?: string;
  @Input() size?: string;

  constructor() { }
}
