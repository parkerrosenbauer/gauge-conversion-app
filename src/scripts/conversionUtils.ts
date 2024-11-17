export function roundStitchMeasurement(value: number): number {
    const roundedValue = Math.round(value * 10) / 10;
    const decimalPart = roundedValue - Math.floor(roundedValue);
    
    if (decimalPart >= 0.7) {
        return Math.round(roundedValue);
    } else if (decimalPart <= 0.3) {
        return Math.floor(roundedValue);
    } else {
        return roundedValue;
    }
}

export function getStitchDimensions(stitches: number, rows: number, length: number, width: number): [number, number] {
    const stitchHeight = length / rows;
    const stitchWidth = width / stitches;
    return [stitchHeight, stitchWidth];
}