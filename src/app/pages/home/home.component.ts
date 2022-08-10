import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Workout } from 'src/app/scripts/types';
import { WorkoutsService } from './../../services/workouts.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lastWorkout!: Workout;

  constructor(
    private workoutsService: WorkoutsService,
    private titleService: Title
  ) { }
    
  ngOnInit(): void {
    this.titleService.setTitle('FTrakrr | Home');
    
    this.workoutsService.lastWorkout.subscribe(v => {
      this.lastWorkout = v;
    });
    this.lastWorkout = this.workoutsService.loadLastWorkout();
  }
}
