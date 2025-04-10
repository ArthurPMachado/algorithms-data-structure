/**
 * Given a number N return the index value of the Fibonnaci sequence, where the seuquence is:
 * 
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
 * 
 * The pattern of the sequence is that each value is the sum of the two previous values,
 * that means that for N = 5 we have 3 + 2 = 5
 */

function fibonacciIterative(number) { // O(n)
  const array = [0, 1];

  for (let index = 2; index < number + 1; index++) {
    array.push(array[index - 2] + array[index - 1]);
  }

  return array[number];
}

function fibonacciRecursive(number) { // O(2^n)
  if (number < 2 ) {
    return number
  }

  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

const iterative = fibonacciIterative(100);
console.log(iterative);
const recursive = fibonacciRecursive(20);
console.log(recursive);
