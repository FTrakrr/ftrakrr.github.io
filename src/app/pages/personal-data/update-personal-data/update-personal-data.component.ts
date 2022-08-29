import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PERSONAL_DATA } from 'src/app/scripts/constants';
import { HeightMeasurementObject, PersonalDataID, PersonalDataUpdateModalStates, PersonalDataUpdateValueStrings, WeightMeasurementObject } from 'src/app/scripts/types';
import { feetFloatToFeetInches } from 'src/app/scripts/unit_convert';
import { PersonalDataService } from './../../../services/personal-data.service';

@Component({
  templateUrl: './update-personal-data.component.html',
  styleUrls: ['./update-personal-data.component.scss']
})
export class UpdatePersonalDataComponent implements OnInit {
  personalData = this.personalDataService.loadPersonalData();
  personalDataDisplay = this.personalDataService.getDataForDisplay();
  personalDataConstant = PERSONAL_DATA.filter(v => v.updateForm.enabled);

  date: Date = new Date();
  formData: any = {
    weight: undefined,
    height: undefined,
  }
  formModalStates: PersonalDataUpdateModalStates = {
    weight: undefined,
    height: undefined,
  }
  formValueStrings: PersonalDataUpdateValueStrings = {
    weight: undefined,
    height: undefined,
  }

  openFakeUpdatingModal = false;

  constructor(
    private personalDataService: PersonalDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //* weight
    this.formData.weight = {
      value: Number(this.personalDataService.getLastWeight()?.value.value ?? 0),
      unit: this.personalDataService.getLastWeight()?.value.unit ?? 'kg'
    } as WeightMeasurementObject;
    //* height
    this.formData.height = {
      value: Number(this.personalDataService.getLastHeight()?.value.value ?? 0),
      unit: this.personalDataService.getLastHeight()?.value.unit ?? 'cm'
    } as HeightMeasurementObject;

    for (const key in this.formData) {
      let item = this.formData[key as keyof typeof this.formData];
      item = item as HeightMeasurementObject;

      //display as ft&in instead of just ft
      if (item.unit == 'ft') {
        let [ft, inch] = feetFloatToFeetInches(item.value);
        let ftStr = PersonalDataService.toUnitString({ unit: 'ft', value: ft });
        let inchStr = PersonalDataService.toUnitString({ unit: 'in', value: inch });
        this.formValueStrings[key as PersonalDataID] = `${ftStr} ${inchStr}`;
        continue;
      }
      this.formValueStrings[key as PersonalDataID] = PersonalDataService.toUnitString(item);
    }
  }

  onValueChangeConfirm(itemId: PersonalDataID) {
    let item = this.formData[itemId];
    item = item as HeightMeasurementObject;

    //display as ft&in instead of just ft
    if (item.unit == 'ft') {
      let [ft, inch] = feetFloatToFeetInches(item.value);
      let ftStr = PersonalDataService.toUnitString({ unit: 'ft', value: ft });
      let inchStr = PersonalDataService.toUnitString({ unit: 'in', value: inch });
      this.formValueStrings[itemId] = `${ftStr} ${inchStr}`;
      return;
    }
    this.formValueStrings[itemId] = PersonalDataService.toUnitString(item);
  }
  onConfirmClick() {
    this.personalDataService.setPersonalData(this.formData, this.date);
    this.openFakeUpdatingModal = true;
      setTimeout(() => {
        this.router.navigate(['/information']);
      }, 2500);
  }
}
