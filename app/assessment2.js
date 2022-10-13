/**
 * Even Fibonacci numbers
 * Find the sum of even-valued Fibonacci sequence
 * @param {*} num : Fibonacci value do not exceed this
 * @returns sum of multiples of 3 or 5
 */

const fibonacci_even_sum = (num) => {
	if (num < 2) return 0;
	if (num == 2) return 2;

	let lastElements = [1, 2];
	let result = 0;
  let sum = 2;

	while (result <= num) {
    if (result % 2 == 0) {
      sum += result;
    }

 		result = lastElements[0] + lastElements[1];
 		lastElements[0] = lastElements[1];
 		lastElements[1] = result;
	}
 	return sum;
}

exports.default = fibonacci_even_sum;
