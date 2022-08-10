import { MoreRounding } from 'more-rounding';
import { INCHES_IN_FOOT, LBS_TO_KG, CM_TO_INCH, M_TO_FT } from './constants';

export function feetFloatToFeetInches(feet: number) {
    return [
        MoreRounding.roundDown(feet),
        (feet % 1) * INCHES_IN_FOOT
    ]
}
export function feetInchesToFeetFloat(feet: number, inches: number) {
    return feet + inches / INCHES_IN_FOOT;
}
// weight
export function kgToLbs(value: number, precise: boolean = true): number {
    return value / LBS_TO_KG[precise ? 'precise' : 'pretty'];
}
export function lbsToKg(value: number, precise: boolean = true): number {
    return value * LBS_TO_KG[precise ? 'precise' : 'pretty'];
}
// length
export function cmToIn(value: number, precise: boolean = true): number {
    return value / CM_TO_INCH[precise ? 'precise' : 'pretty'];
}
export function inToCm(value: number, precise: boolean = true): number {
    return value * CM_TO_INCH[precise ? 'precise' : 'pretty'];
}
// height
export function cmToFtFloat(value: number, precise: boolean = true): number {
    return value / 100 * M_TO_FT[precise ? 'precise' : 'pretty'];
}
export function ftFloatToCm(value: number, precise: boolean = true): number {
    return value * 100 / M_TO_FT[precise ? 'precise' : 'pretty'];
}
