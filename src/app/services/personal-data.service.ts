import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PersonalData, WeightMeasurementObject, UserPhysiqueObject, HeightMeasurementObject, PersonalDataInternalObject, UserGender } from '../scripts/types';
import { LocalStorageService } from './local-storage.service';
import DEFAULTS from './../scripts/defaults';
import { LBS_TO_KG, GENDER_MAP, BMI_SCALE, CM_TO_INCH } from '../scripts/constants';
import { MoreRounding } from 'more-rounding';
import { Duration } from 'duration-string';
import { PersonalDataUpdateOutput, MeasurementObject } from 'src/app/scripts/types';
import { DateTime } from 'luxon';



declare global {
    interface Array<T> {
        last(): T | undefined;
    }
}

/**
 * Returns the last element of the array, or `undefined` if the array is empty.
 */
Array.prototype.last = function () {
    return this[this.length - 1];
}


@Injectable({
    providedIn: 'root'
})
export class PersonalDataService {
    private _data: PersonalData;
    private _dataSubject = new Subject<PersonalData>();
    private _wasDataCollected = true;

    personalData = this._dataSubject.asObservable();

    constructor(private localStorageService: LocalStorageService) {
        this._data = this.localStorageService.loadFromLocalStorage('personal-data') as PersonalData;

        if (!this._data) {
            this._data = DEFAULTS.personalData;
            this._wasDataCollected = false;
            this._onUpdate();
        }
        if (!this._data.weight.length || !this._data.height.length || !this._data.birthdate) {
            this._wasDataCollected = false;
        }
    }
    private _onUpdate() {
        this._dataSubject.next(this._data);
        this.localStorageService.saveToLocalStorage('personal-data', this._data);
    }
    public loadPersonalData() {
        return JSON.parse(JSON.stringify(this._data)) as PersonalData;
    }

    //! weight
    public addWeight(item: UserPhysiqueObject) {
        this._data.weight.push(item);
        this._data.weight.sort(function (a: UserPhysiqueObject, b: UserPhysiqueObject) {
            return a.date.valueOf() - b.date.valueOf();
        });
        this._onUpdate();
    }
    public getLastWeight() {
        return this._data.weight.last();
    }
    public getWeightHistory() {
        return
    }
    //! height
    public addHeight(item: UserPhysiqueObject) {
        this._data.height.push(item);
        this._data.height.sort(function (a: UserPhysiqueObject, b: UserPhysiqueObject) {
            return a.date.valueOf() - b.date.valueOf();
        });
        this._onUpdate();
    }
    public getLastHeight() {
        return this._data.height.last();
    }
    //! gender
    public setGender(gender: UserGender) {
        this._data.gender = gender;
    }
    public getGender(): string {
        if (!this._data.gender) return '';
        return GENDER_MAP[this._data.gender as keyof typeof GENDER_MAP];
    }
    //! age
    public setBirthdate(birthdate: Date) {
        this._data.birthdate = birthdate;
    }
    public getBirthdate() {
        return this._data.birthdate;
    }

    //! get and set functions
    public getDataForDisplay(): PersonalDataInternalObject {
        //* weight
        let weightData = this.getLastWeight();
        let weight = weightData && {
            value: PersonalDataService.toUnitString(weightData.value),
            updated: DateTime.fromJSDate(new Date(weightData.date)).setLocale('en-US').toRelative(),
            updatedDate: weightData.date,
            object: weightData,
        };
        //* height
        let heightData = this.getLastHeight();
        let height = heightData && {
            value: PersonalDataService.toUnitString(heightData.value),
            updated: DateTime.fromJSDate(new Date(heightData.date)).setLocale('en-US').toRelative(),
            updatedDate: heightData.date,
            object: heightData,
        };
        //* bmi
        let bmiData = weightData && heightData && PersonalDataService.getBMI(
            weightData.value as WeightMeasurementObject,
            heightData.value as HeightMeasurementObject
        );
        let maxDate = weightData && heightData && Math.max(
            weightData.date.valueOf(),
            heightData.date.valueOf()
        );
        let bmi = {
            value: bmiData?.bmi,
            updated: maxDate && DateTime.fromMillis(maxDate).setLocale('en-US').toRelative(),
            updatedDate: maxDate && new Date(maxDate),
            subvalue: bmiData?.name,
            subvalueColor: bmiData?.color,
            object: bmiData,
        }
        //* gender
        let genderData = this.getGender()
        let gender = {
            value: genderData
        }
        //* age
        let ageData = this.getBirthdate()
        let age = {
            value: ageData ? new Duration(new Date(ageData)).formattedString('{{Y:1}} years') : '',
            subvalue: ageData && new Date(ageData).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
        }
        return {
            weight,
            height,
            bmi,
            gender,
            age,
        } as PersonalDataInternalObject;
    }

    //! update personal data
    public setPersonalData(data: PersonalDataUpdateOutput, date: Date) {
        console.log(data, date);
        //* weight
        if (data.weight && data.weight.value && this.getLastWeight()?.value.value != data.weight?.value) {
            let physiqueObject: UserPhysiqueObject = {
                date,
                value: data.weight
            }
            this.addWeight(physiqueObject);
        }
        //* height
        if (data.height && data.height.value && this.getLastHeight()?.value.value != data.height?.value) {
            let physiqueObject: UserPhysiqueObject = {
                date,
                value: data.height
            }
            this.addHeight(physiqueObject);
        }
        //* gender
        if (data.gender) {
            this.setGender(data.gender);
        }
        //* birthdate
        if (data.birthdate) {
            this.setBirthdate(data.birthdate);
        }

        //trigger update
        this._onUpdate();
    }

    //! initial website use detection
    public checkIfShouldCollectData() {
        return !this._wasDataCollected;
    }

    //! static functions
    static getBMI(
        weight: WeightMeasurementObject,
        height: HeightMeasurementObject
    ): BMIObject {
        if (weight.value == null || height.value == null) throw new Error("Unexpected error: No value provided for weight or height.");
        let wght = weight.value;
        let hght = height.value;
        if (weight.unit == "lbs") {
            wght *= LBS_TO_KG.precise;
        }
        if (height.unit == "ft") {
            hght /= CM_TO_INCH.precise;
        }
        hght /= 100;
        let bmi = MoreRounding.toPrecision(wght / hght / hght, 2);
        if (bmi < 18.5) return { bmi, ...BMI_SCALE[0] }
        if (bmi <= 24) return { bmi, ...BMI_SCALE[1] }
        if (bmi <= 30) return { bmi, ...BMI_SCALE[2] }
        if (bmi <= 35) return { bmi, ...BMI_SCALE[3] }
        if (bmi <= 40) return { bmi, ...BMI_SCALE[4] }
        return { bmi, ...BMI_SCALE[5] }
    }
    static toUnitString(obj?: MeasurementObject, precision: number = 1) {
        if (!obj || !obj.value) return '';
        return `${MoreRounding.toPrecision(obj.value, precision)} ${obj.unit}`;
    }
}

export type BMIObject = { bmi: number, range: string, name: string, color: string };