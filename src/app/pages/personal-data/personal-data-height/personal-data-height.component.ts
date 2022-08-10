import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { DateTime } from 'luxon';
import { MeasurementHistoryData, PersonalData, HeightMeasurementObject, HeightUnit } from 'src/app/scripts/types';
import { MoreRounding } from 'more-rounding';
import { SettingsService } from './../../../services/settings.service';
import { MoreDataObject } from 'src/app/components/data-row-expandable/data-row-expandable.component';
import { feetFloatToFeetInches, cmToFtFloat, ftFloatToCm } from 'src/app/scripts/unit_convert';

@Component({
  selector: 'app-personal-data-height',
  templateUrl: './personal-data-height.component.html',
  styleUrls: ['./personal-data-height.component.scss']
})
export class PersonalDataHeightComponent implements OnInit {
  readonly PERSONAL_DATA = this.personalDataService.loadPersonalData();
  readonly DATA_FOR_DISPLAY = this.personalDataService.getDataForDisplay();
  readonly HEIGHT_FACTOR_SETTING = this.settingsService.loadSettings().precise_conversion.distance;

  heightHistoryData: MeasurementHistoryData[] = []; //populated in ngOnInit()
  heightHistoryData_copy: MeasurementHistoryData[] = []; //populated in ngOnInit()

  unitOptions = [
    { value: 'cm' as HeightUnit, title: 'cm' },
    { value: 'ft' as HeightUnit, title: 'ft' },
  ]
  unit: HeightUnit = 'cm';

  constructor(
    private personalDataService: PersonalDataService,
    private settingsService: SettingsService,
  ) { }

  onHistoryUnitChange(unit: HeightUnit) {
    this.unit = unit;
    this._updateHistory();
  }
  ngOnInit(): void {
    //copy the personal data to a new array to avoid mutating the original
    let persDataCopy = JSON.parse(JSON.stringify(this.PERSONAL_DATA)) as PersonalData;
    //loop through every record in history
    persDataCopy.height.forEach((hght, i) => {
      //bring every MeasurementObject in history to the same unit
      normalizeMeasurementObject(hght.value as HeightMeasurementObject, this.unit);

      //create the date string
      let dateString = DateTime.fromJSDate(new Date(hght.date)).setLocale('en-US').toFormat('MMMM dd, yyyy');

      //! fill moreData arrays
      let moreData: MoreDataObject = [];

      if (i >= 1) {
        moreData.push({
          groupLabel: 'Height Change',
          items: [
            { label: 'Height', value: null },
            { label: 'Percent', value: null }
          ]
        });
      }
      else {
        moreData.push({
          groupLabel: 'Height Change',
          items: [
            { label: 'Cannot calculate for the first measurement in history.', value: null }
          ]
        });
      }

      this.heightHistoryData.push({ dateString, valueString: '', moreData, expanded: false });
    });

    //populate history array
    this._updateHistory();
  }
  private _updateHistory() {
    //copy the personal data to a new array to avoid mutating the original
    let persDataCopy = JSON.parse(JSON.stringify(this.PERSONAL_DATA)) as PersonalData;
    //loop through every record in history
    persDataCopy.height.forEach((hght, i, hghtArr) => {
      //get the appropriate display object
      const historyObj = this.heightHistoryData[i];
      //bring every MeasurementObject in history to the same unit
      normalizeMeasurementObject(hght.value as HeightMeasurementObject, this.unit);

      //create the value string
      //display as ft&in instead of just ft
      if (hght.value.unit == 'ft') {
        let [ft, inch] = feetFloatToFeetInches(hght.value.value ?? 0);
        let ftStr = PersonalDataService.toUnitString({ unit: 'ft', value: ft });
        let inchStr = PersonalDataService.toUnitString({ unit: 'in', value: inch });
        historyObj.valueString = `${ftStr} ${inchStr}`;
      }
      else {
        historyObj.valueString = PersonalDataService.toUnitString(hght.value);
      }

      //* populate moreData
      //avoid adding this for the first record in history
      if (i >= 1) {
        //get the previous record in history
        let prevHght = hghtArr[i - 1];

        //bring this MeasurementObject to the same unit too
        normalizeMeasurementObject(prevHght.value as HeightMeasurementObject, this.unit);

        //calculate the absolute change, i.e. change in cm/ft
        let absoluteChange = (hght.value.value ?? 0) - (prevHght.value.value ?? 0);
        historyObj.moreData[0].items[0].value = (absoluteChange > 0 ? '+' : '') + PersonalDataService.toUnitString({ value: absoluteChange, unit: hght.value.unit });

        //calculate the relative change, i.e. change in %
        let percentChange = MoreRounding.toPrecision(((hght.value.value ?? 0) / (prevHght.value.value ?? 0) - 1) * 100, 1);
        historyObj.moreData[0].items[1].value = `${percentChange > 0 ? '+' : ''}${percentChange}%`;
      }
    });
    this._copyHistoryArray();
  }

  private _copyHistoryArray() {
    this.heightHistoryData_copy = Array.from(this.heightHistoryData).reverse();
  }
}

function normalizeMeasurementObject(obj: HeightMeasurementObject, unit: HeightUnit): void {
  if (!obj.value) return;
  if (obj.unit == unit) return;
  obj.unit = unit;
  if (unit == 'ft') {
    obj.value = cmToFtFloat(obj.value);
    return;
  }
  obj.value = ftFloatToCm(obj.value);
}
