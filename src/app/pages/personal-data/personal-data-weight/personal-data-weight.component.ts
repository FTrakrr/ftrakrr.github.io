import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { DateTime } from 'luxon';
import { HeightMeasurementObject, MeasurementHistoryData, PersonalData, WeightMeasurementObject, WeightUnit } from 'src/app/scripts/types';
import { MoreRounding } from 'more-rounding';
import { LBS_TO_KG } from './../../../scripts/constants';
import { SettingsService } from './../../../services/settings.service';
import { MoreDataObject } from 'src/app/components/data-row-expandable/data-row-expandable.component';

@Component({
  templateUrl: './personal-data-weight.component.html',
  styleUrls: ['./personal-data-weight.component.scss']
})
export class PersonalDataWeightComponent implements OnInit {
  readonly PERSONAL_DATA = this.personalDataService.loadPersonalData();
  readonly DATA_FOR_DISPLAY = this.personalDataService.getDataForDisplay();
  readonly WEIGHT_FACTOR_SETTING = this.settingsService.loadSettings().precise_conversion.weight;

  weightHistoryData: MeasurementHistoryData[] = []; //populated in ngOnInit()
  weightHistoryData_copy: MeasurementHistoryData[] = []; //populated in ngOnInit()

  unitOptions = [
    { value: 'kg' as WeightUnit, title: 'kg' },
    { value: 'lbs' as WeightUnit, title: 'lbs' },
  ]
  unit: WeightUnit = 'kg';

  constructor(
    private personalDataService: PersonalDataService,
    private settingsService: SettingsService,
  ) { }

  onHistoryUnitChange(unit: WeightUnit) {
    this.unit = unit;
    this._updateHistory();
  }
  ngOnInit(): void {
    //copy the personal data to a new array to avoid mutating the original
    let persDataCopy = JSON.parse(JSON.stringify(this.PERSONAL_DATA)) as PersonalData;
    //loop through every record in history
    persDataCopy.weight.forEach((wght, i) => {
      normalizeMeasurementObject(wght.value as WeightMeasurementObject, this.unit);

      //create the date string
      let dateString = DateTime.fromJSDate(new Date(wght.date)).setLocale('en-US').toFormat('MMMM dd, yyyy');

      //! fill moreData arrays
      let moreData: MoreDataObject = [];

      //* weight change group
      if (i >= 1) {
        moreData.push({
          groupLabel: 'Weight Change',
          items: [
            { label: 'Weight', value: null },
            { label: 'Percent', value: null }
          ]
        });
      }
      else {
        moreData.push({
          groupLabel: 'Weight Change',
          items: [
            { label: 'Cannot calculate for the first measurement in history.', value: null }
          ]
        });
      }

      //* BMI group
      moreData.push({
        groupLabel: 'BMI',
        items: [
          { label: 'Height', value: null },
          { label: 'BMI', value: null },
          { label: 'You are', value: null, color: undefined }
        ]
      });

      this.weightHistoryData.push({ dateString, valueString: '', moreData, expanded: false });
    });
    
    //populate history array
    this._updateHistory();
  }

  private _updateHistory() {
    //copy the personal data to a new array to avoid mutating the original
    let persDataCopy = JSON.parse(JSON.stringify(this.PERSONAL_DATA)) as PersonalData;
    //loop through every record in history
    persDataCopy.weight.forEach((wght, i, wghtArr) => {
      //get the appropriate display object
      const historyObj = this.weightHistoryData[i];
      //bring every MeasurementObject in history to the same unit
      normalizeMeasurementObject(wght.value as WeightMeasurementObject, this.unit);

      //create the value string
      historyObj.valueString = PersonalDataService.toUnitString(wght.value);

      //* populate moreData
      // weight change group
      //avoid adding this for the first record in history
      if (i >= 1) {
        //get the previous record in history
        let prevWght = wghtArr[i - 1];

        //bring this MeasurementObject to the same unit too
        normalizeMeasurementObject(prevWght.value as WeightMeasurementObject, this.unit);

        //calculate the absolute change, i.e. change in kg/lbs
        let absoluteChange = (wght.value.value ?? 0) - (prevWght.value.value ?? 0);
        historyObj.moreData[0].items[0].value = (absoluteChange > 0 ? '+' : '') + PersonalDataService.toUnitString({ value: absoluteChange, unit: wght.value.unit });

        //calculate the relative change, i.e. change in %
        let percentChange = MoreRounding.toPrecision(((wght.value.value ?? 0) / (prevWght.value.value ?? 0) - 1) * 100, 1);
        historyObj.moreData[0].items[1].value = `${percentChange > 0 ? '+' : ''}${percentChange}%`;
      }

      //* BMI group
      let hght = persDataCopy.height.filter(v => wght.date.valueOf() >= v.date.valueOf()).last();
      let bmiObject = PersonalDataService.getBMI(wght.value as WeightMeasurementObject, hght?.value as HeightMeasurementObject);
      historyObj.moreData[1].items[0].value = PersonalDataService.toUnitString(hght?.value);
      historyObj.moreData[1].items[1].value = bmiObject.bmi
      historyObj.moreData[1].items[2].value = bmiObject.name;
      historyObj.moreData[1].items[2].color = bmiObject.color;
    });
    this._copyHistoryArray();
  }

  private _copyHistoryArray() {
    this.weightHistoryData_copy = Array.from(this.weightHistoryData).reverse();
  }
}

function normalizeMeasurementObject(obj: WeightMeasurementObject, unit: WeightUnit): void {
  if (!obj.value) return;
  if (obj.unit == unit) return;
  obj.unit = unit;
  if (unit == 'kg') {
    obj.value *= LBS_TO_KG.precise;
    return;
  }
  obj.value /= LBS_TO_KG.precise;
}