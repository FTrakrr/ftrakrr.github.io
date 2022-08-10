import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input('show-name') showName: boolean = true;
  @Input('show-logo') showLogo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
