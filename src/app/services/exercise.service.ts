import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AnyExercise } from 'src/app/scripts/types';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private _exercises: AnyExercise[];
  private _exercisesSubject = new Subject<AnyExercise[]>();

  public exercises = this._exercisesSubject.asObservable();

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this._exercises = this.localStorageService.loadFromLocalStorage('exercises') as AnyExercise[] ?? [];
  }

  public loadExercises(): AnyExercise[] {
    return [...this._exercises];
  }
  public addExercise(newObj: AnyExercise): void {
    this._exercises.push(newObj);
    this._exercisesSubject.next(this._exercises);
    this.localStorageService.saveToLocalStorage('exercises', this._exercises);
  }
}
