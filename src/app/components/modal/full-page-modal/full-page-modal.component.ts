import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-full-page-modal',
  templateUrl: './full-page-modal.component.html',
  styleUrls: ['./full-page-modal.component.scss']
})
export class FullPageModalComponent {
  @Input() title?: string;

  @Input() cancelButtonText?: string;
  @Input() okButtonText?: string;

  @Input() open?: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output() close = new EventEmitter<Event>();
  @Output() cancel = new EventEmitter<Event>();
  @Output() confirm = new EventEmitter<Event>();

  @Input() middleOnly = false;

  constructor() { }

  onClose(event: Event) {
    this.open = false;
    this.close.emit(event);
    this.openChange.emit(false);
  }
  onCancel(event: Event) {
    this.onClose(event);
    this.cancel.emit(event);
  }
  onConfirm(event: Event) {
    this.onClose(event);
    this.confirm.emit(event);
  }
}
