/**
 * Write two functions that finds the factorial of any number. One
 * should use recursive, the other just a for loop
 */

function findFactorialRecursive(number) {
  let answer = 1;
  
  if(number === 1) {
    return answer;
  }

  answer = number * findFactorialRecursive(number - 1);

  return answer;
}

function findFactorialIterative(number) {
  let answer = 1;

  if(number === 2) {
    answer = 2;
  }

  for (let index = 2; index <= number; index++) {
    answer = answer * index;
  }

  return answer;
}

const recursive = findFactorialRecursive(5);
console.log(recursive);
const iterative = findFactorialIterative(5);
console.log(iterative);