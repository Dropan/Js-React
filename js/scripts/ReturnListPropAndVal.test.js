import RetListPropAndVal from "./ReturnListPropAndVal"

describe("RetListProp", function () {
    test("1test Alex", function () {
        var user = { name: "Alex", age: 23, sex: "man" };
        expect(RetListPropAndVal(user)).toBeTruthy;
    })
})
describe("RetListProp", function () {
    test("2test Den", function () {
        var user = { name: "Den", age: 32, sex: "man" };
        expect(RetListPropAndVal(user)).toBeTruthy;
    })
})
describe("RetListProp", function () {
    test("3test Den", function () {
        var car = { name: "bmw", model: "x5", wheel: 4, doors: 4, availability: true };
        expect(RetListPropAndVal(car)).toBeTruthy;
    })
})
