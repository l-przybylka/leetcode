/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const startingValue = init
    return (
        {
            increment() {
                return ++init
            },
            reset() {
                return (init = startingValue)
            },
            decrement() {
                return --init
            }
        }
    )
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */