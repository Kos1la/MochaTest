import { multiply, multiplyAsync } from "../src/functions.js";
import assert from 'assert'


it('should multiply two numbers', () => {
    const expectedResult = 100
    const result = multiply(10,10)

    assert.strictEqual(result,expectedResult)
})

it('should async multiply two numbers', (done) => {
    const expectedResult = 12;
    multiplyAsync(4, 3, (result) => {
        try {
            if (result !== expectedResult) {
                throw new Error(`Expected ${expectedResult}, but got ${result}`);
            }
            done();
        } catch (error) {
            done(error);
        }
    });
});

