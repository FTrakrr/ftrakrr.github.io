import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkmark-spinner',
  templateUrl: './checkmark-spinner.component.html',
  styleUrls: ['./checkmark-spinner.component.scss']
})
export class CheckmarkSpinnerComponent implements OnInit {
  @Input() check = false;

  constructor() { }

  ngOnInit(): void {
  }

}
