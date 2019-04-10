import InsIndEl from "./InsIndEl"

describe("insindel", function () {
    test("1test вася", function () {
        const result = InsIndEl('вася', 1, 3);
        expect(result).toBe('всяа');
    })
})
describe("insindel", function () {
    test("2test многопоточность", function () {
        const result = InsIndEl('многопоточность', 0, 6);
        expect(result).toBe('ногопомточность');
    })
})
describe("insindel", function () {
    test("3test string number", function () {
        const result = InsIndEl('123456789', 5, 0);
        expect(result).toBe('612345789');
    })
})
describe("insindel", function () {
    test("4test number", function () {
        const result = InsIndEl(123456789, 5, 0);
        expect(result).toBe(612345789);
    })
})
describe("insindel", function () {
    test("5test true", function () {
        const result = InsIndEl(true, 0, 5);
        expect(result).toBeFalsy;
    })
})
describe("insindel", function () {
    test("6test in1=in2 number", function () {
        const result = InsIndEl(1234, 5, 5);
        expect(result).toBe(1234);
    })
})
describe("insindel", function () {
    test("7test in1=in2 string", function () {
        const result = InsIndEl('export', 5, 5);
        expect(result).toBe('export');
    })
})