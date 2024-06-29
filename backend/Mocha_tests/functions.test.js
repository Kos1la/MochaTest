import multiply from "../src/functions.js";
import functions from "../src/functions.js";

it('should multiply two numbers', () => {
    const expectedResult = 100
    const result = multiply(10,10)

    if(result !== expectedResult) {
        throw new Error(`Expected ${expectedResult}, but got ${result}`)
    }
} )