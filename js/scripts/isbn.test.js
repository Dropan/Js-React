import isbn from "./isbn";

describe("isbn10", function () {
    test("1test length", function () {
        const result = isbn('123456789');
        expect(result).toBeFalsy;
    })
})
describe("isbn10", function () {
    test("2test wiki", function () {
        const result = isbn('2-266-11156-6');
        expect(result).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("3test google", function () {
        const result = isbn('0735624399');
        expect(result).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("4test google with x", function () {
        const result = isbn('842534025x');
        expect(result).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("5test google with X", function () {
        const result = isbn('842534025X');
        expect(result).toBeTruthy;
    })
})
describe("isbn10", function () {
    test("6test !=0", function () {
        const result = isbn('0735624396');
        expect(result).toBeFalsy;
    })
})
describe("isbn13", function () {
    test("1test length", function () {
        const result = isbn('123456789123');
        expect(result).toBeFalsy;
    })
})
describe("isbn13", function () {
    test("2test google 978 with 0 end", function () {
        const result = isbn('978-0-140-26690-0');
        expect(result).toBeTruthy;
    })
})
describe("isbn13", function () {
    test("3test google without 978 ", function () {
        const result = isbn('1230140266900');
        expect(result).toBeFalsy;
    })
})
describe("isbn13", function () {
    test("4test google 978", function () {
        const result = isbn('9782123456803');
        expect(result).toBeTruthy;
    })
})
describe("isbn13", function () {
    test("5test google 979", function () {
        const result = isbn('9791234567896');
        expect(result).toBeTruthy;
    })
})
describe("isbn13", function () {
    test("6test google uncorrect", function () {
        const result = isbn('9791234567892');
        expect(result).toBeFalsy;
    })
})