//task1
const {adding} = require('./adding.js');

describe("Adding function", () => {
    test("expect 0.1+0.2 = 0.3", () => {
        expect(adding(0.1, 0.2)).toBeCloseTo(0.3);
        expect(adding(0.1, 0.2)).not.toBe(0.4);
    });
});
