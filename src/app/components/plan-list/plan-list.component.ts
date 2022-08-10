import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/scripts/types';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  //plans = this.localStorageService.loadPlans();
  plans: Plan[] = [
    {
      id: Date.now(),
      color: 'red',
      archived: false,
      exercises: [],
    },
    {
      id: Date.now(),
      color: 'red',
      archived: false,
      exercises: [],
    },
    {
      id: Date.now(),
      color: 'red',
      archived: false,
      exercises: [],
    },
    {
      id: Date.now(),
      color: 'red',
      archived: false,
      exercises: [],
    },
  ]

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
  }

}
