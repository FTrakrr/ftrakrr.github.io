import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent {
  @Input() icon?: string;
  @Input() faIcon?: string;
  @Input() iconstyle?: string = "solid";
  @Input() text?: string;
  @Input() routerLink?: string;
  @Input() href?: string;
  @Input() size?: string;

  constructor() { }
}
