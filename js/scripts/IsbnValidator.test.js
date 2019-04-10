import IsbnValidator from "./IsbnValidator"

describe("isbn10", function () {
    test("1test length", function () {
        const result = new IsbnValidator();
        expect(result.Validate('123456789')).toBeFalsy;
    })
})
describe("isbn10", function () {
    test("2test wiki", function () {
        const result = new IsbnValidator();
        expect(result.Validate('2266111566')).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("3test google", function () {
        const result = new IsbnValidator();
        expect(result.Validate('0735624399')).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("4test google with x", function () {
        const result = new IsbnValidator();
        expect(result.Validate('842534025x')).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("5test google with X", function () {
        const result = new IsbnValidator();
        expect(result.Validate('842534025X')).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("6test !=0", function () {
        const result = new IsbnValidator();
        expect(result.Validate('0735624396')).toBeFalsy;
    })
})
describe("isbn13", function () {
    test("1test length", function () {
        const result = new IsbnValidator();
        expect(result.Validate('123456789123')).toBeFalsy;
    })
})
describe("isbn13", function () {
    test("2test google 978 with 0 end", function () {
        const result = new IsbnValidator();
        expect(result.Validate('9780140266900')).toBeTruthy;
    })
})
describe("isbn13", function () {
    test("3test google without 978 ", function () {
        const result = new IsbnValidator();
        expect(result.Validate('1230140266900')).toBeFalsy;
    })
})
describe("isbn13", function () {
    test("4test google 978", function () {
        const result = new IsbnValidator();
        expect(result.Validate('9782123456803')).toBeTruthy;
    })
})
describe("isbn13", function () {
    test("5test google 979", function () {
        const result = new IsbnValidator();
        expect(result.Validate('9791234567896')).toBeTruthy;
    })
})
describe("isbn13", function () {
    test("6test google uncorrect", function () {
        const result = new IsbnValidator();
        expect(result.Validate('9791234567892')).toBeFalsy;
    })
})