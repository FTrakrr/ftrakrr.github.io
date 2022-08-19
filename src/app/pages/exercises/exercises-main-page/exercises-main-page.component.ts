import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercises-main-page',
  templateUrl: './exercises-main-page.component.html',
  styleUrls: ['./exercises-main-page.component.scss']
})
export class ExercisesMainPagePage implements OnInit {
  exercises = this.exerciseService.loadExercises();

  constructor(
    private exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {
  }

}
