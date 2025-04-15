const numbers = [99, 37, 451, 4513, 5, 12, 78, 6, 2, 458, 892, 74, 0]

function selectionSort(array) { // O(n^2)
  const length = array.length;
  for (let index = 0; index < length; index++) {
    // set current index as minimum
    let minimum = index;
    let temp = array[index];
    for (let index2 = index+1; index2 < length; index2++) {
      if(array[index2] < array[minimum]) {
        // update minimum if current is lower that what we had previously
        minimum = index2;
      }
    }
    
    array[index] = array[minimum];
    array[minimum] = temp;
  }

  return array;
}

console.log(selectionSort(numbers))