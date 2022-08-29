import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WorkoutPlan } from 'src/app/scripts/types';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private _plans: WorkoutPlan[];
  private _plansSubject = new Subject<WorkoutPlan[]>();

  public plans = this._plansSubject.asObservable();

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this._plans = this.localStorageService.loadFromLocalStorage('plans') as WorkoutPlan[] ?? [];
  }

  public loadPlans(): WorkoutPlan[] {
    return [...this._plans];
  }
  public addPlan(newObj: WorkoutPlan): void {
    this._plans.push(newObj);
    this._plansSubject.next(this._plans);
    this.localStorageService.saveToLocalStorage('plans', this._plans);
  }
  
  //! static methods
  public static reorderPlans(plans: WorkoutPlan[]): void {
    plans.sort((a,b)=> b.last_workout.valueOf() - a.last_workout.valueOf())
  }
}
