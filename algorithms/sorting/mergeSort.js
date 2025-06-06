const numbers = [99, 37, 451, 4513, 5, 12, 78, 6, 2, 458, 892, 74, 0]

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  const response = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

  return response;
}

function mergeSort(array) { // O(nlogn)
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

const result = mergeSort(numbers);
console.log(result)