import isbn13 from "./isbn13";

describe("isbn13", function () {
    test("1test length", function () {
        const result = isbn13('123456789123');
        expect(result).toBeFalsy;
    })
})
describe("isbn13", function () {
    test("2test google 978 with 0 end", function () {
        const result = isbn13('9780140266900');
        expect(result).toBeTruthy;
    })
})
describe("isbn13", function () {
    test("3test google without 978 ", function () {
        const result = isbn13('1230140266900');
        expect(result).toBeFalsy;
    })
})
describe("isbn13", function () {
    test("4test google 978", function () {
        const result = isbn13('9782123456803');
        expect(result).toBeTruthy;
    })
})
describe("isbn13", function () {
    test("5test google 979", function () {
        const result = isbn13('9791234567896');
        expect(result).toBeTruthy;
    })
})
describe("isbn13", function () {
    test("6test google uncorrect", function () {
        const result = isbn13('9791234567892');
        expect(result).toBeFalsy;
    })
})