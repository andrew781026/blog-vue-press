/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {

    let result = 1;
    const m = (n < 0) ? n * (-1) : n;
    const y = (n < 0) ? (1 / x) : x;

    for (let i = 0; i < m; i++) {

        result *= y;
    }

    return result;
};

console.log(myPow(2, 10))
console.log(myPow(2, -2))
console.log(myPow(0.00001, 2147483647))
