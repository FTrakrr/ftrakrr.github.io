import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { WeightMeasurementObject, HeightMeasurementObject, UserGender, RadioBarOption } from 'src/app/scripts/types';
import { MONTH_MAP } from 'src/app/scripts/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-data-form',
  templateUrl: './initial-data-form.component.html',
  styleUrls: ['./initial-data-form.component.scss']
})
export class InitialDataFormComponent implements OnInit {

  dataCollectionModalOpen = false;
  openFakeUpdatingModal = false;
  persData = this.personalDataService.loadPersonalData();


  //! completion statuses
  completionStatuses = [
    true, // landing page; should always be "true"
    false, // [1]   weight
    false, // [2]   height
    false, // [3]   gender
    false, // [4]   age
    true, //closing page; should always be "true"
  ];

  //! data holders
  weightData: WeightMeasurementObject = { value: null, unit: 'kg' };
  heightData: HeightMeasurementObject = { value: null, unit: 'cm' };
  //gender
  genderOptions: RadioBarOption[] = [
    { value: 'm', title: 'Male', icon: 'gender-male' },
    { value: 'f', title: 'Female', icon: 'gender-female' },
    { value: 'o', title: 'Other', icon: 'gender-trans' },
  ];
  genderTemp: UserGender | null = null;
  private _finalGender?: UserGender;
  //birthdate
  yearOptions: [any, number | null][] = [['–', null]]; // populated in ngOnInit()
  yearTemp: number | null = null;
  monthOptions: [string, number | null][] = [['–', null]]; // populated in ngOnInit()
  monthTemp: number | null = null;
  private _dateOptionsTemplate: [any, number | null][] = [['–', null]]; // populated in ngOnInit()
  dateOptions!: [any, number | null][]; // populated in onMonthPick()
  dateTemp: number | null = null;
  private _finalBirthdate?: Date;

  constructor(
    private personalDataService: PersonalDataService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.dataCollectionModalOpen = this.personalDataService.checkIfShouldCollectData();

    //populate birthdate-related options
    //year
    for (let i = new Date().getFullYear(); i >= 1950; i--) {
      this.yearOptions.push([i, i]);
    }
    //month
    for (const [index, month] of MONTH_MAP.entries()) {
      this.monthOptions.push([month[0], index]);
    }
    for (let i = 1; i <= 31; i++) {
      this._dateOptionsTemplate.push([i, i]);
    }
  }
  onStepConfirm(step: number) {
    if (step == 3) {
      if (!this.genderTemp) return;
      this._finalGender = this.genderTemp;
      return;
    }
    if (step == 4) {
      if (!this.yearTemp || this.monthTemp == null || !this.dateTemp) return;
      this._finalBirthdate = new Date(this.yearTemp, this.monthTemp, this.dateTemp);
      return;
    }
  }
  onFinish() {
    this.personalDataService.setPersonalData({
      weight: this.weightData,
      height: this.heightData,
      gender: this._finalGender,
      birthdate: this._finalBirthdate,
    }, new Date())
    this.openFakeUpdatingModal = true;
    setTimeout(() => {
      this.dataCollectionModalOpen = false;
    }, 500);
    setTimeout(() => {
      this.router.navigate(['']);
      this.openFakeUpdatingModal = false;
    }, 2500);
  }

  onWeightChange(obj: WeightMeasurementObject) {
    this.weightData = obj;
    this.completionStatuses[1] = Boolean(obj.value);
  }
  onHeightChange(obj: HeightMeasurementObject) {
    this.heightData = obj;
    this.completionStatuses[2] = Boolean(obj.value);
  }
  onGenderChange(gender: UserGender) {
    this.genderTemp = gender;
    this.completionStatuses[3] = true;
  }
  //! handling of birthdate selector
  onYearPick(year: string) {
    if (year == 'null') {
      this.yearTemp = null;
      this.completionStatuses[4] = false;
    }
    else this.yearTemp = Number(year);
    if (!this.monthTemp) return;
    this.onMonthPick(String(this.monthTemp));
  }
  onMonthPick(month: string) {
    if (month == 'null') {
      this.monthTemp = null;
      this.completionStatuses[4] = false;
    }
    else this.monthTemp = Number(month);
    if (!this.yearTemp || this.monthTemp == null) return;
    this.dateOptions = this._dateOptionsTemplate.slice(0, getMonthNumberOfDays(this.monthTemp, this.yearTemp) + 1);
  }
  onDatePick(date: string) {
    if (date == 'null') {
      this.dateTemp = null;
      this.completionStatuses[4] = false;
    } else {
      this.dateTemp = Number(date);
      this.completionStatuses[4] = true;
    }
  }
}



function getMonthNumberOfDays(month: number, year: number): 31 | 30 | 29 | 28 {
  month++;
  let isOddMonth = month % 2 == 1;
  if (month <= 7 && isOddMonth || month >= 8 && !isOddMonth) { //months: 1,3,5,7,8,10,12
    return 31;
  }
  if (month <= 7 && !isOddMonth && month != 2 || month >= 8 && isOddMonth) { //months: 4,6,9,11
    return 30;
  }
  if (isLeapYear(year)) return 29; //leap year February
  return 28; //normal year February
}
function isLeapYear(year: number): boolean {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}