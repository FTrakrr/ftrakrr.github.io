import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() showName: boolean = true;
  @Input() showLogo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
