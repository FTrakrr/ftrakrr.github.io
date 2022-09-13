import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title?: string;

  @Input() isWidthMaxContent = false;

  @Input() cancelButtonText?: string;
  @Input() okButtonText?: string;
  @Input() hideButtons: boolean = false;

  @Input() open?: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output() close = new EventEmitter<Event>();
  @Output() cancel = new EventEmitter<Event>();
  @Output() confirm = new EventEmitter<Event>();

  @Input() allowBgClose = true;

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
  stopBgClick(event: Event) {
    event.stopPropagation();
  }

    @Input() okDisabled: boolean = false;
}
