import { Component, Output, EventEmitter, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements AfterContentInit {
  dateStorage!: Date;
  
  @Input() date: Date = new Date();
  @Output() dateChange = new EventEmitter<Date>();
  @Output('app-change') change = new EventEmitter<Date>();

  constructor() { }

  isModalOpen = false;

  ngAfterContentInit() {
    this.dateStorage = this.date;
  }
  onConfirm() {
    this.date = this.dateStorage;
    this.dateChange.emit(this.date);
    this.change.emit(this.date);
  }
}