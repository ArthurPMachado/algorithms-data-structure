function booooo(n) {
  for (let index = 0; index < n.length; index++) {
    console.log('booooo');
  }
}

booooo([1,2,3,4,5]); // O(1)

function arrayOfHiNTimes(n) {
  const hiArray = [];
  for (let index = 0; index < n; index++) {
    hiArray[index] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6); // O(n)