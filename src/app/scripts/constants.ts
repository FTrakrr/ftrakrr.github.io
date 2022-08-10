import { PersonalDataConstant } from "./types";

//! personal data
export const PERSONAL_DATA: PersonalDataConstant[] = [
    {
        id: "weight",
        display: {
            title: 'Body mass',
            routerLink: 'weight',
            displayType: 'simple',
            defaultValue: 'Not provided',
        },
        updateForm: {
            enabled: true,
            initial: true,
            unitType: 'weight',
        }
    },
    {
        id: "height",
        display: {
            title: 'Height',
            routerLink: 'height',
            displayType: 'simple',
            defaultValue: 'Not provided',
        },
        updateForm: {
            enabled: true,
            initial: true,
            unitType: 'height',
        }
    },
    {
        id: "bmi",
        display: {
            title: 'BMI',
            routerLink: 'weight',
            displayType: 'dual',
            defaultValue: 'Unable to calculate',
        },
        updateForm: {
            enabled: false,
        }
    },
    {
        id: "gender",
        display: {
            title: 'Gender',
            // routerLink: 'gender',
            displayType: 'simple',
            defaultValue: 'None selected',
            gapBefore: true,
        },
        updateForm: {
            enabled: false,
            initial: true,
            own: true,
        }
    },
    {
        id: "age",
        display: {
            title: 'Age',
            // routerLink: 'birthday',
            displayType: 'dual',
            defaultValue: 'Birthday not known',
            subvalueOpacity: '80%',
            subvalueFontWeight: 200,
        },
        updateForm: {
            enabled: false,
            initial: true,
            own: true,
        }
    },
];
export const BMI_SCALE: { range: string, name: string, color: string, width: number, range_low?: number }[] = [
    {
        range: '<18.5',
        name: 'Underweight',
        color: '#0096fa',
        width: 15,
    },
    {
        range: '18.5–24',
        name: 'Normal weight',
        color: '#079423',
        width: 30,
        range_low: 18.5,
    },
    {
        range: '24–30',
        name: 'Overweight',
        color: '#97cf35',
        width: 20,
        range_low: 24,
    },
    {
        range: '30–35',
        name: '1st degree obese',
        color: '#d1c411',
        width: 15,
        range_low: 30,
    },
    {
        range: '35–40',
        name: '2nd degree obese',
        color: '#d16b11',
        width: 10,
        range_low: 35,
    },
    {
        range: '>40',
        name: '3rd degree obese',
        color: '#d12711',
        width: 10,
        range_low: 40,
    }
];
export const GENDER_MAP = {
    _default: 'None selected',
    m: 'Male',
    f: 'Female',
    o: 'Other',
};

//! unit conversions
export const INCHES_IN_FOOT = 12;
export const LBS_TO_KG = {
    precise: 0.45359237,
    pretty: 0.45,
};
export const CM_TO_INCH = {
    precise: 2.54,
    pretty: 2.5,
};
export const M_TO_FT = {
    precise: 3.28084,
    pretty: 3.3,
};

//! calendar
export const WEEKDAY_MAP: [string, string][] = [
    ['Sun', 'S'],
    ['Mon', 'M'],
    ['Tue', 'T'],
    ['Wed', 'W'],
    ['Thu', 'T'],
    ['Fri', 'F'],
    ['Sat', 'S'],
];
export const MONTH_MAP: [string, string][] = [
    ['January', 'Jan'],
    ['February', 'Feb'],
    ['March', 'Mar'],
    ['April', 'Apr'],
    ['May', 'May'],
    ['June', 'Jun'],
    ['July', 'Jul'],
    ['August', 'Aug'],
    ['September', 'Nov'],
    ['October', 'Oct'],
    ['November', 'Nov'],
    ['December', 'Dec'],
]