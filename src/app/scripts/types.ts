import { MoreDataObject } from "src/app/components/data-row-expandable/data-row-expandable.component";

/**
A type holding three gender options available in the app.

- `m` - male
- `f` - female
- `o` - other
 */
export type UserGender = 'm' | 'f' | 'o';

/**
 * A type holding all the types of exercises available in the app.
 */
export type ExerciseType = 'plate_loaded' | 'cable_loaded' | 'cardio' | 'barbell' | 'dumbbell' | 'kettlebell' | 'body_mass';

/**
 * A type holding all the ways of automatically increasing the exercise stats.

- `weight` - increase the weight, leave the reps/time unchanged
- `reps` - increase the reps, leave the weight unchanged
- `reps_until` - increase the reps until they reach a certain threshold, then start increasing the weight
- `time` - increase the time of the exercise, leaving the weight unchanged
 */
export type BasicIncreaseType = 'weight' | 'reps' | 'reps_until';

/**
 * The colors a workout plan can have.
 * 
 * Based on [Material UI Colors](https://materialui.co/colors).
 */
export type PlanColor = 'red' | 'pink' | 'purple' | 'deep-purple' | 'indigo' | 'blue' | 'light-blue' | 'cyan' | 'teal' | 'green' | 'light-green' | 'lime' | 'yellow' | 'amber' | 'orange' | 'deep-orange';

export type SetType = 'warmup' | 'normal' | 'cooldown';

/**
 * The type of completion of a certain set.

- `unmarked` - when the user hasn't touched the completion box at all.
- `completed` - the green check symbol in a box; it means that all the reps have been completed with the given weight.
- `failed` - not all reps have been completed with the given weight.
- `dropped` - means that the user decreased the weight for this set.
- `skipped` - the user has skipped this set completely.
 */
export type SetCompletionType = 'unmarked' | 'completed' | 'failed' | 'dropped' | 'skipped';

export type AnyUnit = WeightUnit | HeightUnit | LengthUnit | DistanceUnit;
export type WeightUnit = 'kg' | 'lbs';
export type HeightUnit = 'cm' | 'ft' | 'in';
export type LengthUnit = 'cm' | 'in';
export type DistanceUnit = 'km' | 'mi';

//! components
/**
```typescript
interface RadioBarOption {
    value: any;

    icon?: string;
    faIcon?: string;
    iconstyle?: string;

    title?: string;
    subtitle?: string;
    checked?: boolean;
}
```
 * * `value` — a value that should be passed down the event when this option is selected.
 * * `title` — the option's main title.
 * * `icon` — a [Bootstrap icon](https://icons.getbootstrap.com/) name.
 * * `faIcon` — a [Fontawesome icon](https://fontawesome.com/search?q=record&m=free) name.
 * * `iconstyle` — a Fontawesome icon style.
 * * `subtitle` — the option's subtitle. a lot smaller and in low opacity.
 * * `checked` — if the option is checked.
*/
export interface RadioBarOption {
    value: any;

    icon?: string;
    faIcon?: string;
    iconstyle?: string;

    title?: string;
    subtitle?: string;
    checked?: boolean;
}
/**
```typescript
interface RadioBarOption {
    value: any;

    icon?: string;
    faIcon?: string;
    iconstyle?: string;

    title?: string;
    subtitle?: string;
    desc?: string;
    checked?: boolean;
}
```
 * * `value` — a value that should be passed down the event when this option is selected.
 * * `title` — the option's main title.
 * * `icon` — a [Bootstrap icon](https://icons.getbootstrap.com/) name.
 * * `faIcon` — a [Fontawesome icon](https://fontawesome.com/search?q=record&m=free) name.
 * * `iconstyle` — a Fontawesome icon style.
 * * `subtitle` — the option's subtitle. a lot smaller and in low opacity.
 * * `desc` — the option's description. even smaller and in even lower opacity.
 * * `checked` — if the option is checked.
*/
export interface RadioCardOption extends RadioBarOption {
    desc?: string;
    svg?: string;
}

//! personal data
// measurement objects
export type MeasurementObject = WeightMeasurementObject | HeightMeasurementObject | LengthMeasurementObject | DistanceMeasurementObject;
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
export type DistanceMeasurementObject = {
    value: number | null;
    unit: DistanceUnit;
}
// other personal data objects
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
    name: string;
    color: PlanColor;
    last_workout: Date;
    exercises: AnyExercise[];
}

//! Exercises
export type AnyExercise = PlateLoadedMachineExercise | CableLoadedMachineExercise | BarbellExercise | DumbbellExercise | KettlebellExercise | BodyMassExercise | CardioExercise;

/**
 * Internal type. Should only be extended and never used directly.
```typescript
interface _Exercise {
    id: string;
    name: string;
    type: ExerciseType;
    machine_id?: string | number;
    use_imperial: boolean;
}
```
 */
interface _Exercise {
    id: string;
    name: string;
    type: ExerciseType;
    machine_id?: string | number;
    use_imperial: boolean;
}
/**
```typescript
interface PlateLoadedMachineExercise {
    id: string;
    name: string;
    machine_id?: string | number;
    use_imperial: boolean;
    type: 'plate_loaded';
    sides: 1 | 2;
    sets: WeightedExerciseSet[];
}
```
 */
export interface PlateLoadedMachineExercise extends _Exercise {
    type: 'plate_loaded';
    sides: 1 | 2;
    sets: WeightedExerciseSet[];
}
/**
```typescript
interface PlateLoadedMachineExercise {
    id: string;
    name: string;
    machine_id?: string | number;
    use_imperial: boolean;
    type: 'cable_loaded';
    accepts_addons: boolean;
    sets: WeightedExerciseSet[];
}
```
 */
export interface CableLoadedMachineExercise extends _Exercise {
    type: 'cable_loaded';
    accepts_addons: boolean;
    sets: WeightedExerciseSet[];
}
/**
```typescript
interface PlateLoadedMachineExercise {
    id: string;
    name: string;
    machine_id?: string | number;
    use_imperial: boolean;
    type: 'barbell';
    sides: 2;
    sets: WeightedExerciseSet[];
}
```
 */
export interface BarbellExercise extends _Exercise {
    type: 'barbell';
    sides: 2;
    sets: WeightedExerciseSet[];
}
/**
```typescript
interface PlateLoadedMachineExercise {
    id: string;
    name: string;
    machine_id?: string | number;
    use_imperial: boolean;
    type: 'dumbbell';
    sides: 1 | 2; //How many dumbbells are needed?
    sets: WeightedExerciseSet[];
}
```
 */
export interface DumbbellExercise extends _Exercise {
    type: 'dumbbell';
    /**
     * How many dumbbells are needed?
     */
    sides: 1 | 2;
    sets: WeightedExerciseSet[];
}
/**
```typescript
interface PlateLoadedMachineExercise {
    id: string;
    name: string;
    machine_id?: string | number;
    use_imperial: boolean;
    type: 'kettlebell';
    sides: 1;
    sets: WeightedExerciseSet[];
}
```
 */
export interface KettlebellExercise extends _Exercise {
    type: 'kettlebell';
    sides: 1;
    sets: WeightedExerciseSet[];
}
/**
```typescript
interface PlateLoadedMachineExercise {
    id: string;
    name: string;
    machine_id?: string | number;
    use_imperial: boolean;
    type: 'body_mass';
    measures: 'reps' | 'time';
    sets: BodyMassExerciseSet[];
}
```
 */
export interface BodyMassExercise extends _Exercise {
    type: 'body_mass';
    /**
     * Do you measure the time or the reps that you do?
     */
    measures: 'reps' | 'time';
    sets: BodyMassExerciseSet[];
}
/**
```typescript
interface PlateLoadedMachineExercise {
    id: string;
    name: string;
    machine_id?: string | number;
    use_imperial: boolean;
    type: 'cardio';
    measures: 'time' | 'distance';
    change_type: 'speed' | 'resistance';
    allows_tilt_change: boolean;

    time_or_distance: number;
    speed_or_resistance: number;
    tilt ?: number;
    user_input: {
        time_or_distance ?: number;
    }
}
```
 */
export interface CardioExercise extends _Exercise {
    type: 'cardio';
    /**
     * Do you measure the time or the distance that you do?
     */
    measures: 'time' | 'distance';
    /**
     * Does the machine allow you to change the speed or the resistance?
     */
    change_type: 'speed' | 'resistance';
    /**
     * Does the machine allow you to change the tilt?
     */
    allows_tilt_change: boolean;

    time_or_distance: number;
    speed_or_resistance: number;
    tilt?: number;
    user_input: {
        time_or_distance?: number;
    }
}

//! Sets
/**
 * Internal type. Should only be extended and never used directly.
```typescript
interface _ExerciseSet {
    type: SetType;
    break_time: number;
    uses_weights: boolean;
}
```
 */
interface _ExerciseSet {
    type: SetType;
    break_time: number;
    uses_weights: boolean;
}
/**
```typescript
interface _ExerciseSet {
    type: SetType;
    break_time: number;
    uses_weights: true;
    increase: {
        type: BasicIncreaseType;
        weight_by?: number;
        reps_by?: number;
        reps_threshold?: number;
    },
    weight: number;
    reps: number;
    user_input: {
        weight?: number;
        reps?: number;
    }
}
```
 */
interface WeightedExerciseSet extends _ExerciseSet {
    uses_weights: true;
    increase: {
        type: BasicIncreaseType;
        weight_by?: number;
        reps_by?: number;
        reps_threshold?: number;
    },
    weight: number;
    reps: number;
    user_input: {
        weight?: number;
        reps?: number;
    }
}
/**
```typescript
interface _ExerciseSet {
    type: SetType;
    break_time: number;
    uses_weights: false;
    increase: {
        reps_by?: number;
        time_by?: number;
    }
    time: number;
    reps: number;
    user_input: {
        time?: number;
        reps?: number;
    }
}
```
*/
interface BodyMassExerciseSet extends _ExerciseSet {
    uses_weights: false;
    increase: {
        reps_by?: number;
        time_by?: number;
    }
    time: number;
    reps: number;
    user_input: {
        time?: number;
        reps?: number;
    }
}


//! Workout
export type Workout = {
    
}