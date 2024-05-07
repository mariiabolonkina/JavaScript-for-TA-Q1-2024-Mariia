const {getCircleLength} = require('./calcCircle');
const {getCircleArea} = require('./calcCircle');

describe("GetCircleLength function", () => {
    test('When circle radius is 22 the circle length is equal to 138.2', () => {
        expect(getCircleLength(22)).toBe(138.2);
    });
});

describe("GetCircleArea function", () => {
    test('When circle radius is 9 the circle area is near to 254.47', () => {
        expect(getCircleArea(9)).toBeCloseTo(254.47);
    });
});

