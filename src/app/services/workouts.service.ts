import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Workout } from 'src/app/scripts/types';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  private _workouts: Workout[];
  private _lastWorkout: Workout;
  private _workoutsSubject = new Subject<Workout[]>();
  private _lastWorkoutSubject = new Subject<Workout>();

  workouts = this._workoutsSubject.asObservable();
  lastWorkout = this._lastWorkoutSubject.asObservable();

  constructor(private localStorageService: LocalStorageService) {
    this._workouts = this.localStorageService.loadFromLocalStorage('settings') as Workout[] ?? [];
    this._lastWorkout = this._workouts[this._workouts.length - 1];

    this._workoutsSubject.next(this._workouts);
    this._lastWorkoutSubject.next(this._lastWorkout);
  }

  public addWorkout(newObj: Workout) {
    this._workouts.push(newObj);
    this._workoutsSubject.next(this._workouts);
    this._lastWorkout = newObj;
    this._lastWorkoutSubject.next(this._lastWorkout);
    this.localStorageService.saveToLocalStorage('workouts', this._workouts);
  }
  public loadWorkouts() {
    return this._workouts;
  }
  public loadLastWorkout() {
    return this._lastWorkout;
  }
}