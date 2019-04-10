import isbn10 from "./isbn10";

describe("isbn10", function () {
    test("1test length", function () {
        const result = isbn10('123456789');
        expect(result).toBeFalsy;
    })
})
describe("isbn10", function () {
    test("2test wiki", function () {
        const result = isbn10('2266111566');
        expect(result).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("3test google", function () {
        const result = isbn10('0735624399');
        expect(result).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("4test google with x", function () {
        const result = isbn10('842534025x');
        expect(result).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("5test google with X", function () {
        const result = isbn10('842534025X');
        expect(result).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("6test !=0", function () {
        const result = isbn10('0735624396');
        expect(result).toBeFalsy;
    })
})