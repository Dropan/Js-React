import AlgLevRec from "./algLevenshteinRec"

describe("AlgLevUnRec", function () {
    test("1test habr", function () {
        const result = AlgLevRec('арестант', 'дагестан');
        expect(result).toBe(3);
    })
})
describe("AlgLevUnRec", function () {
    test("2test 8,0", function () {
        const result = AlgLevRec('арестант', '');
        expect(result).toBe(8);
    })
})
describe("AlgLevUnRec", function () {
    test("3test wiki", function () {
        const result = AlgLevRec('polynomial', 'exponential');
        expect(result).toBe(6);
    })
})
describe("AlgLevUnRec", function () {
    test("4test google", function () {
        const result = AlgLevRec('Kevin van Zonneveld', 'Kevin van Sommeveld');
        expect(result).toBe(3);
    })
})
describe("AlgLevUnRec", function () {
    test("5test 0,0", function () {
        const result = AlgLevRec('', '');
        expect(result).toBe(0);
    })
})
describe("AlgLevUnRec", function () {
    test("6test 0,9", function () {
        const result = AlgLevRec('', 'дагестан');
        expect(result).toBe(8);
    })
})
describe("AlgLevUnRec", function () {
    test("7test moluch", function () {
        const result = AlgLevRec('тост', 'текст');
        expect(result).toBe(2);
    })
})