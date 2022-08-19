import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-exercises-create',
  templateUrl: './exercises-create.component.html',
  styleUrls: ['./exercises-create.component.scss']
})
export class ExercisesCreatePage implements OnInit {

  dataCollectionModalOpen = false;
  openFakeUpdatingModal = false;

  //! completion statuses
  completionStatuses = [
    false, // [1]   type & name
    false, // [2]   type-specific info (sides, addons, etc)
    false, // [3]   additional info (main unit, machine id)
    false, // [4]   sets or cardio exercise info (tilt, speed/resitance)
    true, //closing page; should always be "true"
  ];

  constructor(
    private personalDataService: PersonalDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onStepConfirm(step: number) {

  }
  onFinish() {
    //TODO: add exercise to service here
    this.openFakeUpdatingModal = true;
    setTimeout(() => {
      this.dataCollectionModalOpen = false;
    }, 500);
    setTimeout(() => {
      this.router.navigate(['']);
      this.openFakeUpdatingModal = false;
    }, 2500);
  }
}
