const multiples3_5 = require('./app/assessment1.js').default;
const fibonacci_even_sum = require('./app/assessment2.js').default;

console.log('#1 - Multiple of 3 or 5 of 1000 -', multiples3_5(1000));
console.log('#2 - Even Sum of Fibonacci sequence of 4 million -', fibonacci_even_sum(4 * 1e6));