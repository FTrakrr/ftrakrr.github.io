import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title?: string;

  @Input('width-max-content') isWidthMaxContent = false;

  @Input('cancel') cancelButtonText?: string;
  @Input('ok') okButtonText?: string;
  @Input('hide-buttons') hideButtons: boolean = false;

  @Input() open?: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output('app-close') closeEvent = new EventEmitter<Event>();
  @Output('app-cancel') cancelEvent = new EventEmitter<Event>();
  @Output('app-confirm') confirmEvent = new EventEmitter<Event>();

  @Input('allow-background-close') allowBgClose = true;

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
  stopBgClick(event: Event) {
    event.stopPropagation();
  }
}
