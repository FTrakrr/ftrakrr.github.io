import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multistep-form',
  templateUrl: './multistep-form.component.html',
  styleUrls: ['./multistep-form.component.scss']
})
export class MultistepFormComponent implements OnInit {

  /** The total number of steps in the form */
  @Input('total-steps') totalSteps!: number;
  /** An array of steps that can be skipped */
  @Input('step-skipability') stepSkipability: number[] = [];
  /** 
  An array of booleans representing which steps are completed.
  
  This variable controls whether the main button is disabled.

  Individual booleans are updated by the parent component.
  */
  @Input('step-completenes') stepCompleteness: boolean[] = [];
  stepsDone = 1;

  /** Whether the form has a "landing page" - a step 0 */
  @Input('has-landing-page') hasLandingPage?: boolean = false;

  /** Controls the text displayed on the main button */
  mainButtonText = '';
  /**
  Controls which steps are displayed in the DOM.
  
  Steps with numbers that don't match these in the array are hidden.
  */
  shownSteps!: [number, number, number];

  @Output() stepChange = new EventEmitter<number>();
  @Output() finished = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.hasLandingPage) this.stepsDone--;
    this.mainButtonText = this._determineMainButtonText();
    this._updateShownSteps();
  }

  private _determineMainButtonText() {
    if (this.hasLandingPage && this.stepsDone == 0) return 'Start';
    if (this.stepsDone == this.totalSteps) return 'Finish';
    return 'Next';
  }
  private _updateShownSteps() {
    this.shownSteps = [this.stepsDone - 1, this.stepsDone, this.stepsDone + 1];
  }
  private _onStepChange(event?: MouseEvent) {
    // update main button text
    this.mainButtonText = this._determineMainButtonText();
    // update which steps should be hidden
    this._updateShownSteps();
    // lose the focus on the button to prevent accidental double-clicking on the buttons when using keyboard
    (event?.target as HTMLButtonElement)?.blur();
  }
  goToNext(event?: MouseEvent, confirmed?: boolean) {
    this.stepsDone++;
    this._onStepChange(event);
    if (confirmed) {
      this.stepChange.emit(this.stepsDone - 1);
      if (this.stepsDone - 1 == this.totalSteps) {
        this.stepsDone--;
        this.finished.emit();
      }
    }
  }
  goBack(event?: MouseEvent) {
    this.stepsDone--;
    this._onStepChange(event);
  }
  onKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        if (this.hasLandingPage && this.stepsDone > 0 ||
          !this.hasLandingPage && this.stepsDone > 1
        ) {
          this.goBack();
        }
        break;
      case 'Enter':
        if (this.stepCompleteness.length > 0 && !this.stepCompleteness[this.stepsDone]) return;
        this.goToNext(undefined, true);
        break;
    }
  }
}
