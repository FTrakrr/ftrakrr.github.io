import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-full-page-modal',
  templateUrl: './full-page-modal.component.html',
  styleUrls: ['./full-page-modal.component.scss']
})
export class FullPageModalComponent {
  @Input() title?: string;

  @Input('cancel') cancelButtonText?: string;
  @Input('ok') okButtonText?: string;

  @Input() open?: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output('app-close') closeEvent = new EventEmitter<Event>();
  @Output('app-cancel') cancelEvent = new EventEmitter<Event>();
  @Output('app-confirm') confirmEvent = new EventEmitter<Event>();

  @Input('middle-only') middleOnly = false;

  constructor() { }

  onClose(event: Event) {
    this.open = false;
    this.closeEvent.emit(event);
    this.openChange.emit(false);
  }
  onCancel(event: Event) {
    this.onClose(event);
    this.cancelEvent.emit(event);
  }
  onConfirm(event: Event) {
    this.onClose(event);
    this.confirmEvent.emit(event);
  }
}
