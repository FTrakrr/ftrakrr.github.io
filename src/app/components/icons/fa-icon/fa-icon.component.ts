import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.scss']
})
export class FaIconComponent implements OnInit {
  @Input() icon!: string;
  @Input() iconstyle?: string = 'solid';

  constructor() { }

  ngOnInit(): void {
  }

}
