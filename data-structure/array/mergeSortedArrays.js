const sortedArray1 = [0,3,4,31];
const sortedArray2 = [4,6,30];

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let index = 1;
  let index2 = 1;

  if(array1.length === 0) {
    return array1;
  } 

  if(array2.length === 0) {
    return array2;
  }

  while(array1Item || array2Item) {
    if(array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[index];
      index++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[index2];
      index2++;
    }

    if(!array1Item) {
      while(array2Item) {
        mergedArray.push(array2Item);
        array2Item = array2[index2];
        index2++;
      }
    }

    if(!array2Item) {
      while(array1Item) {
        mergedArray.push(array1Item);
        array1Item = array1[index];
        index++;
      }
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays(sortedArray1, sortedArray2));