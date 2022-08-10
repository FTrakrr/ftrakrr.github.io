import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }
  
  ngOnInit() {
    this.titleService.setTitle('FTrakrr | Settigns');
  }
}