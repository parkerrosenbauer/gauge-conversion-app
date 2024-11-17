import { roundStitchMeasurement, getStitchDimensions } from "./conversionUtils";
import { $ } from "./domUtils";

export function getResults(): void {
    const patternGaugeLength = $('pattern-gauge-length') as HTMLInputElement;
    const patternGaugeWidth = $('pattern-gauge-width') as HTMLInputElement;
    const patternGaugeUnits = $('pattern-gauge-units') as HTMLSelectElement;

    const userGaugeStitches = $('user-gauge-stitches') as HTMLInputElement;
    const userGaugeRows = $('user-gauge-rows') as HTMLInputElement;
    const userGaugeLength = $('user-gauge-length') as HTMLInputElement;
    const userGaugeWidth = $('user-gauge-width') as HTMLInputElement;
    const userGaugeUnits = $('user-gauge-units') as HTMLSelectElement;

    let patternDimensions = [patternGaugeLength.valueAsNumber, patternGaugeWidth.valueAsNumber];

    const userStitchDimensions = getStitchDimensions(
        userGaugeStitches.valueAsNumber,
        userGaugeRows.valueAsNumber,
        userGaugeLength.valueAsNumber,
        userGaugeWidth.valueAsNumber
    );

    const desiredLength = $('desired-length') as HTMLSpanElement;
    const desiredWidth = $('desired-width') as HTMLSpanElement;
    const desiredUnits = $('desired-units') as HTMLSpanElement;
    desiredLength.innerText = patternDimensions[0].toString();
    desiredWidth.innerText = patternDimensions[1].toString();
    desiredUnits.innerText = patternGaugeUnits.value;

    if (patternGaugeUnits.value !== userGaugeUnits.value) {
        const conversionFactor = userGaugeUnits.value === 'inches' ? 2.54 : 1 / 2.54;
        patternDimensions = patternDimensions.map(dimension => dimension * conversionFactor);
    }

    const userGaugeResults = {
        stitches: roundStitchMeasurement(patternDimensions[1] / userStitchDimensions[1]),
        rows: roundStitchMeasurement(patternDimensions[0] / userStitchDimensions[0])
    };

    const desiredStitches = $('desired-stitches') as HTMLSpanElement;
    const desiredRows = $('desired-rows') as HTMLSpanElement;
    desiredStitches.innerText = userGaugeResults.stitches.toString();
    desiredRows.innerText = userGaugeResults.rows.toString();

    const results = $('results') as HTMLDivElement;
    results.style.display = 'block';
}