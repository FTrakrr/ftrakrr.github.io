import { PersonalDataConstant } from "src/app/scripts/types";
import { BarScaleRange } from "../components/bar-scale/bar-scale.component";

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

export const BLUE   = '#0096fa';
export const GREEN  = '#079423';
export const LIME   = '#97cf35';
export const YELLOW = '#d1c411';
export const ORANGE = '#d16b11';
export const RED    = '#d12711';

export const BMI_SCALE: BarScaleRange[] = [
    {
        rangeString: '<18.5',
        nameString: 'Underweight',
        color: BLUE,
        width: 1.5,
        low: 12,
        high: 18.5,
    },
    {
        rangeString: '18.5–24',
        nameString: 'Normal weight',
        color: GREEN,
        width: 3,
        low: 18.5,
        high: 25,
    },
    {
        rangeString: '25–30',
        nameString: 'Overweight',
        color: LIME,
        width: 2,
        low: 25,
        high: 30,
    },
    {
        rangeString: '30–35',
        nameString: '1st degree obese',
        color: YELLOW,
        width: 1.5,
        low: 30,
        high: 35,
    },
    {
        rangeString: '35–40',
        nameString: '2nd degree obese',
        color: ORANGE,
        width: 1,
        low: 35,
        high: 40,
    },
    {
        rangeString: '>40',
        nameString: '3rd degree obese',
        color: RED,
        width: 1,
        low: 40,
        high: 60,
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
export const MI_TO_KM = {
    precise: 1.609344,
    pretty: 1.6,
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