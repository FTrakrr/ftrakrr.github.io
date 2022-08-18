import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansPage implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('FTrakrr | Workout Plans');
  }

}
