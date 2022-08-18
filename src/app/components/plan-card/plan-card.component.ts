import { Component, Input, OnInit } from '@angular/core';
import { WorkoutPlan } from 'src/app/scripts/types';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {
  @Input() plan!: WorkoutPlan;

  constructor() { }

  ngOnInit(): void {
  }

}
