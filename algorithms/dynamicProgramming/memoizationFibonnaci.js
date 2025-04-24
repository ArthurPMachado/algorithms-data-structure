/**
 * Given a number N return the index value of the Fibonnaci sequence, where the seuquence is:
 * 
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
 * 
 * The pattern of the sequence is that each value is the sum of the two previous values,
 * that means that for N = 5 we have 3 + 2 = 5
 */

let calculations = 0;
function fibonacci(number) { // O(2^n)
  if(number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

function fibonacciMemo() { // O(n)
  const cache = {};

  return function fib(number) {
    console.log('Calculations', ++calculations);
    if(number in cache) {
      return cache[number];
    } else {
      if (number < 2) {
        return number;
      } else {
        cache[number] = fib(number - 1) + fib(number - 2);
        return cache[number];
      }
    }
  }
}

const fasterFibonacci = fibonacciMemo();

console.log('1', fasterFibonacci(30));
console.log('2', fasterFibonacci(40));
console.log('3', fasterFibonacci(100));