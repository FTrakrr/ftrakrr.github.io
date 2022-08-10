import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options!: [any, any][];
  
  @Input() value: any = null;
  @Output() valueChange = new EventEmitter<any>();

  onValueChange(event: Event) {
    this.valueChange.emit((event.target as HTMLSelectElement).value);
  }
}
