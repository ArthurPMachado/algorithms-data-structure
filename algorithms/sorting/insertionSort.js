const numbers = [99, 37, 451, 4513, 5, 12, 78, 6, 2, 458, 892, 74, 0]

function insertionSort(array) { // O(n^2)
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if(array[index] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(index,1)[0]);
    } else {
      //find where number should go
      for(let index2 = 1; index2 < index; index2++) {
        if(array[index] > array[index2 - 1] && array[index] < array[index2]) {
          //move number to the right spot
          array.splice(index2,0,array.splice(index,1)[0]);
        }
      }
    }
  }

  return array
}

console.log(insertionSort(numbers))