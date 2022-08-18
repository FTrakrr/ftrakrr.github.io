import { MoreDataObject } from "src/app/components/data-row-expandable/data-row-expandable.component";

export type UserGender = 'm' | 'f' | 'o';
export type ExerciseType = 'weight_machine' | 'cable_machine' | 'cardio_machine' | 'barbell' | 'dumbbell' | 'kettlebell' | 'body_mass';
export type IncreaseType = 'weight' | 'reps' | 'reps_until' | 'time';
export type PlanColor = 'red' | 'pink' | 'purple' | 'deep-purple' | 'indigo' | 'blue' | 'light-blue' | 'cyan' | 'teal' | 'green' | 'light-green' | 'lime' | 'yellow' | 'amber' | 'orange' | 'deep-orange';
export type SetCompletionType = 'unmarked' | 'completed' | 'failed' | 'dropped' | 'skipped';

export type WeightUnit = 'kg' | 'lbs';
export type HeightUnit = 'cm' | 'ft' | 'in';
export type LengthUnit = 'cm' | 'in';

//! personal data
export type WeightMeasurementObject = {
    value: number | null;
    unit: WeightUnit;
}
export type HeightMeasurementObject = {
    value: number | null;
    unit: HeightUnit;
}
export type LengthMeasurementObject = {
    value: number | null;
    unit: LengthUnit;
}
export type MeasurementObject = WeightMeasurementObject | HeightMeasurementObject | LengthMeasurementObject;
export type UserPhysiqueObject = {
    date: Date;
    value: MeasurementObject;
}
export type PersonalData = {
    height: UserPhysiqueObject[];
    weight: UserPhysiqueObject[];
    birthdate?: Date;
    gender?: UserGender;
}
//! personal data - technical
export type PersonalDataID = 'weight' | 'height' | 'bmi' | 'gender' | 'age';
export type PersonalDataConstant = {
    id: PersonalDataID;
    display: {
        title: string;
        displayType: 'simple' | 'dual';
        routerLink?: string;
        defaultValue?: string | number;
        subvalueOpacity?: string | number;
        subvalueFontWeight?: number;
        gapBefore?: boolean;
    };
    updateForm: {
        enabled: boolean;
        initial?: boolean;
        unitType?: 'weight' | 'height' | 'length';
        own?: boolean;
        title?: string;
    };
}
export type PersonalDataInternalData = {
    value: string | number,
    not_provided: string,
    updated?: string;
    updatedDate?: Date;
    subvalue?: string;
    subvalueColor?: string;
    object?: any;
}
export type PersonalDataInternalObject = {
    [Property in PersonalDataID]?: PersonalDataInternalData
}
export type PersonalDataUpdateOutput = {
    weight?: MeasurementObject;
    height?: MeasurementObject;
    gender?: UserGender;
    birthdate?: Date;
}
export type PersonalDataUpdateDefaults = {
    [Property in PersonalDataID]?: MeasurementObject
}
export type PersonalDataUpdateModalStates = {
    [Property in PersonalDataID]?: boolean
}
export type PersonalDataUpdateValueStrings = {
    [Property in PersonalDataID]?: string
}
export type MeasurementHistoryData = {
    dateString: string;
    valueString: string;
    expanded: boolean;
    moreData: MoreDataObject;
}

//! settings
export type Settings = {
    /**
     * Specifies if the app theme is dark.
     * 
     * * `-1` - device default theme
     * * `0` - light theme
     * * `1` - dark theme
     */
    is_dark_theme: -1 | 0 | 1;
    precise_conversion: {
        weight: boolean;
        distance: boolean;
    };
    plates: WeightObject;
    cable_weights: WeightObject;
    first_weekday: 0 | 1;
    keep_awake: boolean;
    timer: {
        volume: 0 | 1 | 2 | 3;
        vibration: 0 | 1 | 2 | 3;
    };
    sets: {
        show_previous: boolean;
        total: {
            show_total_added: boolean;
            show_base_resistance: boolean;
            show_total_weight: boolean;

            show_set_total: boolean;
            show_exercise_total: boolean;
        }
        show_body_mass_percent: boolean;
        show_calculator: boolean;
    }
}
export type WeightObject = {
    kg: number[];
    lbs: number[];
};

//! Workout Plans
export type WorkoutPlan = {
    id: string;
    color: PlanColor;
    name: string;
    last_workout: Date;
    exercises: Exercise[];
}

//! Exercises
export type Exercise = {

}

//! Workout
export type Workout = {
    
}








//! Plan
// export type Plan = {
//     id: string;
//     color: PlanColor;
//     exercises: (PlateWeightMachineExercise | CableWeightMachineExercise | BarbellExercise | DumbbellExercise | KettlebellExercise | BodyMassExercise | CardioExercise)[];
// }

// export interface Exercise {
//     id: string;
//     name: string;
//     machine?: string | number;
//     note?: string;
//     type: ExerciseType;
//     use_imperial: boolean;
// }

// export interface PlateWeightMachineExercise extends Exercise {
//     sides: 1 | 2;
//     base_weight_per_side: number;
//     weight_steps: number;
//     sets: {
//         warmup: boolean;
//         increase_type: IncreaseType;
//         increase_weight?: {
//             by: number;
//             every: number;
//         };
//         increase_reps?: {
//             by: number;
//             every: number;
//         }
//         break_time: number;
//     }[];
// }
// export interface CableWeightMachineExercise extends Exercise {
//     accepts_weight: boolean;
//     weight_steps: number;
//     stack_steps: number;
//     sets: {
//         warmup: boolean;
//         increase_type: IncreaseType;
//         increase_weight?: {
//             by: number;
//             every: number;
//         };
//         increase_reps?: {
//             by: number;
//             every: number;
//         }
//         break_time: number;
//     }[];
// }
// export interface BarbellExercise extends Exercise {
//     weight_steps: number;
//     sets: {
//         warmup: boolean;
//         increase_type: IncreaseType;
//         increase_weight?: {
//             by: number;
//             every: number;
//         };
//         increase_reps?: {
//             by: number;
//             every: number;
//         }
//         break_time: number;
//     }[];
// }
// export interface DumbbellExercise extends Exercise {
//     dumbbells: 1 | 2;
//     weight_steps: number;
//     sets: {
//         warmup: boolean;
//         increase_type: IncreaseType;
//         increase_weight?: {
//             by: number;
//             every: number;
//         };
//         increase_reps?: {
//             by: number;
//             every: number;
//         }
//         break_time: number;
//     }[];
// }
// export interface KettlebellExercise extends Exercise {
//     weight_steps: number;
//     sets: {
//         warmup: boolean;
//         increase_type: IncreaseType;
//         increase_weight?: {
//             by: number;
//             every: number;
//         };
//         increase_reps?: {
//             by: number;
//             every: number;
//         }
//         break_time: number;
//     }[];
// }
// export interface BodyMassExercise extends Exercise {
//     sets: {
//         warmup: boolean;
//         increase_type: IncreaseType;
//         increase_reps?: {
//             by: number;
//             every: number;
//         }
//         increase_time?: {
//             by: number;
//             every: number;
//         }
//         break_time: number;
//     }[];
// }
// export interface CardioExercise extends Exercise {
//     customizable_value: 'speed' | 'resistance';
//     tiltable: boolean;
//     speed_steps: number;
//     tilt_steps: number;
//     sets: {
//         warmup: boolean;
//         objective: 'time' | 'distance';
//         objective_value: number;
//         speed?: number;
//         tilt?: number;
//         resistance?: number;
//     }[];
// }


// export interface HistoricalValueObject {
//     done: number;
//     required: number;
// }
// export interface HistoricalExercise {
//     exercise_id: number;
// }

// export interface HistoricalWeightExercise extends HistoricalExercise {
//     exercise: PlateWeightMachineExercise | CableWeightMachineExercise | BarbellExercise | DumbbellExercise | KettlebellExercise;
//     sets: {
//         completion_type: SetCompletionType;
//         weight: HistoricalValueObject;
//         reps: HistoricalValueObject;
//     }[];
// }
// export interface HistoricalBodyMassExercise extends HistoricalExercise {
//     exercise: BodyMassExercise;
//     sets: {
//         completion_type: SetCompletionType;
//         reps: HistoricalValueObject;
//         time: HistoricalValueObject;
//     }[];
// }
// export interface HistoricalCardioExercise extends HistoricalExercise {
//     exercise: CardioExercise;
//     sets: {
//         completion_type: SetCompletionType;
//         objective_value: HistoricalValueObject;
//         speed: HistoricalValueObject;
//         tilt: HistoricalValueObject;
//         resistance: HistoricalValueObject;
//     }
// }