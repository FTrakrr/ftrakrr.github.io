import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss']
})
export class RadioCardComponent {
  @Input() icon?: string;
  @Input('fa-icon') faIcon?: string;
  @Input() iconstyle?: string = "solid";
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() desc?: string;

  @Input() for?: string;

  constructor() { }

}
