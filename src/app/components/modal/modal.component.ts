import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    @Input() modalTitle?: string;

    @Input() isWidthMaxContent = false;

    @Input() cancelButtonText?: string;
    @Input() okButtonText?: string;
    @Input() hideButtons: boolean = false;

    @Input() okDisabled: boolean = false;

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
        this.cancel.emit(event);
        this.onClose(event);
    }
    onConfirm(event: Event) {
        this.confirm.emit(event);
        this.onClose(event);
    }
    stopBgClick(event: Event) {
        event.stopPropagation();
    }
}
