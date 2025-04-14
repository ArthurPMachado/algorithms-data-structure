const numbers = [99, 37, 451, 4513, 5, 12, 78, 6, 2, 458, 892, 74, 0]

function bubbleSort(array) {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    for (let index2 = 0; index2 < length; index2++) {
      if(array[index2] > array[index2 + 1]) {
        // Swap

        let temp = array[index2];
        array[index2] = array[index2 + 1];
        array[index2 + 1] = temp;
      }
    }
  }

  return array
}

console.log(bubbleSort(numbers))