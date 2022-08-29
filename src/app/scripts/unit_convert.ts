import { MoreRounding } from 'more-rounding';
import { INCHES_IN_FOOT, LBS_TO_KG, INCH_TO_CM, M_TO_FT } from 'src/app/scripts/constants';

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
    return value * INCH_TO_CM[precise ? 'precise' : 'pretty'];
}
export function inToCm(value: number, precise: boolean = true): number {
    return value / INCH_TO_CM[precise ? 'precise' : 'pretty'];
}
// height
export function cmToFtFloat(value: number, precise: boolean = true): number {
    return value / 100 * M_TO_FT[precise ? 'precise' : 'pretty'];
}
export function ftFloatToCm(value: number, precise: boolean = true): number {
    return value * 100 / M_TO_FT[precise ? 'precise' : 'pretty'];
}
