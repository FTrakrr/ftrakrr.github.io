import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ghost-button',
  templateUrl: './ghost-button.component.html',
  styleUrls: ['./ghost-button.component.scss']
})
export class GhostButtonComponent {
  @Input() icon?: string;
  @Input() faIcon?: string;
  @Input() iconstyle?: string = "solid";
  @Input() text?: string;
  @Input() routerLink?: string;
  @Input() href?: string;
  @Input() size?: string;

  constructor() { }
}