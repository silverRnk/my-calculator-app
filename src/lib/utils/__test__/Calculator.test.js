import {SimpleCalculator} from "$lib/utils/Calculator";

test('evaluate expression', () => {
    expect(SimpleCalculator.calculate(["22", "+", "3"])).toBe("25")
    
})