/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        return functions.reduceRight((acc, el) => {
            return acc = el(acc)
        }, x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Array of functions and x an integer
// function composition - apply the results of one function to another going from right to left
// return the result
// having to go from right to left, I'd use reduceRight and store the result in the accumulator 
