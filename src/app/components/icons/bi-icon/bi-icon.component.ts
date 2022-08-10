import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bi-icon',
  templateUrl: './bi-icon.component.html',
  styleUrls: ['./bi-icon.component.scss']
})
export class BiIconComponent implements OnInit {
  @Input() icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
