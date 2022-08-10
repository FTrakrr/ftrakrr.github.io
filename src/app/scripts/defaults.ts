import { HeightMeasurementObject, PersonalData, PersonalDataUpdateDefaults, Settings, WeightMeasurementObject } from './types';

const settings: Settings = {
    is_dark_theme: -1,
    precise_conversion: {
        weight: false,
        distance: true,
    },
    plates: {
        kg: [1.25, 2.5, 5, 10, 20],
        lbs: [],
    },
    cable_weights: {
        kg: [],
        lbs: [5],
    },
    first_weekday: 1,
    keep_awake: true,
    timer: {
        volume: 3,
        vibration: 3,
    },
    sets: {
        show_previous: true,
        total: {
            show_total_added: true,
            show_base_resistance: true,
            show_total_weight: true,

            show_set_total: true,
            show_exercise_total: true
        },
        show_body_mass_percent: true,
        show_calculator: true,
    }
}
const personalData: PersonalData = {
    height: [],
    weight: [],
    gender: undefined,
}
const personalDataValues: PersonalDataUpdateDefaults = {
    weight: {value: 0, unit: 'kg'} as WeightMeasurementObject,
    height: {value: 0, unit: 'cm'} as HeightMeasurementObject,
}

const DEFAULTS = {
    settings,
    personalData,
    personalDataValues,
}

export default DEFAULTS;