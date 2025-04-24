function sumTo37(number) {
  return number + 37;
}

function memoizationSumTo37() {
  const cache = {};
  return function(number) {
    if(number in cache) {
      return cache[number];
    } else {
      console.log('Long time process');
      cache[number] = sumTo37(number);
      return cache[number];
    }
  }
}

const memoized = memoizationSumTo37();

console.log('1', memoized(20));
console.log('2', memoized(20));
console.log('3', memoized(20));
console.log('4', memoized(2));
