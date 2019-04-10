import sum from "./sum";

describe("sum", function(){
    test("WOW test", function(){
        const result = sum([10,5,1,5,7]);
        expect(result).toBe(28);
    })
})