/**
 * Multiples of 3 or 5
 * Find the sum of all the multiples of 3 or 5 below 1000
 * @param {*} num : all the multiples should be below
 * @returns sum of multiples of 3 or 5
 */
const multiples3_5 = (num) => {
	if (!num || num < 3) return 0

  let sum = 0;
  let mulOf3 = 0;
  let mulOf5 = 0;
  for (;;) {
    mulOf3 += 3
    mulOf5 += 5;

    if (num <= mulOf3) break;
    if (num > mulOf5) {
      if (mulOf5 % 3 != 0)  {
        sum += mulOf5;
      }
    }
    sum += mulOf3;
  }
	
 	return sum;
}

exports.default = multiples3_5;