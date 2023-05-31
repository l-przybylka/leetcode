/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let count = 0
    let result = 0
    return function (...args) {
        while (count < 1) {
            count++
            return result = fn(...args)
        }
    }
    return count === 1 ? result : undefined
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */