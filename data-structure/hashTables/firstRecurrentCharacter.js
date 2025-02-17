/**
 * Google Question
 * Given an array = [2,5,1,2,3,5,1,2,4]:
 * It should return 2
 */

/**
 * Given an array = [2,1,1,2,3,5,1,2,4]:
 * It should return 1
 */

/**
 * Given an array = [2,3,4,5]:
 * It should return undefined
 */

function firstRecurrentCharacter(input) {
  for(let index = 0; index < input.length; index++) {
    for(let index2 = index + 1; index2 < input.length; index2++) {
      if(input[index] === input[index2]) {
        return input[index];
      }
    }
  }

  return undefined;
} //O(n^2) -> Time
//O(1) -> Space

function firstRecurrentCharacter2(input) {
  const map = {};
  for (let index = 0; index < input.length; index++) {
    if(map[input[index]] !== undefined) {
      return input[index];
    } else {
      map[input[index]] = index
    }
  }
  return undefined;
} //O(n) -> For Time and Space

const array1 = [2,5,1,2,3,5,1,2,4]
const array2 = [2,1,1,2,3,5,1,2,4]
const array3 = [2,3,4,5]

console.log(firstRecurrentCharacter2(array2));