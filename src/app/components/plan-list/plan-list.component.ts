import { Component, OnInit } from '@angular/core';
import { WorkoutPlan } from 'src/app/scripts/types';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TakeChance } from 'take-chance';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  plans: WorkoutPlan[] = [
    {
      id: TakeChance.id(),
      color: 'red',
      name: '',
      last_workout: new Date(2022, 3, 1),
      exercises: [],
    },
    {
      id: TakeChance.id(),
      color: 'red',
      name: '',
      last_workout: new Date(2022, 1, 1),
      exercises: [],
    },
    {
      id: TakeChance.id(),
      color: 'red',
      name: '',
      last_workout: new Date(2022, 2, 1),
      exercises: [],
    },
    {
      id: TakeChance.id(),
      color: 'red',
      name: '',
      last_workout: new Date(2022, 0, 1),
      exercises: [],
    },
  ]

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
  }

}
