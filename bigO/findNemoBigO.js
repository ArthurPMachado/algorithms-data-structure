const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const largeArray = new Array(10000).fill('nemo')

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found nemo');
    }
  }
}

// findNemo(largeArray); // O(n) --> Linear Time

function logFirstTwoFishes(fishes) {
  console.log(fishes[0]); // O(1)
  console.log(fishes[1]); // O(1)
}

logFirstTwoFishes(everyone) // O(2)