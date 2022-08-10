import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from './../../../services/personal-data.service';
import { PERSONAL_DATA } from 'src/app/scripts/constants';
import { HeightMeasurementObject, LengthMeasurementObject, MeasurementObject, PersonalDataID, PersonalDataUpdateDefaults, PersonalDataUpdateModalStates, PersonalDataUpdateOutput, PersonalDataUpdateValueStrings, WeightMeasurementObject } from 'src/app/scripts/types';
import { TakeChance } from 'take-chance';
import { Router } from '@angular/router';

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
      const item = this.formData[key as keyof typeof this.formData];
      this.formValueStrings[key as PersonalDataID] = PersonalDataService.toUnitString(item as MeasurementObject);
    }
  }

  onValueChangeConfirm(itemId: PersonalDataID) {
    this.formValueStrings[itemId] = PersonalDataService.toUnitString(this.formData[itemId as keyof typeof this.personalData] as MeasurementObject);
  }
  onConfirmClick() {
    this.personalDataService.setPersonalData(this.formData, this.date);
    this.openFakeUpdatingModal = true;
      setTimeout(() => {
        this.router.navigate(['/information']);
      }, 2500);
  }
}
