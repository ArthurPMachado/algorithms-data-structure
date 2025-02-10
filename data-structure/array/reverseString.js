/**Create a function that reverses a string:
 * 'Hi my name is John' should be:
 * 'nhoJ si eman ym iH'
 */

function reverse(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'Need to be a string with at least 2 characters';
  }

  // Solution 1:
  // const stringArray = str.split('');
  // const reversedArray = stringArray.reverse();
  // const reversedString = reversedArray.join('');

  // Solution 1.1:
  // return str.split('').reverse().join('');

  // Solution 2:
  const backwards = [];
  const totalItems = str.length - 1;
  for(let index = totalItems; index >= 0; index--) {
    backwards.push(str[index]);
  }

  return backwards.join('');
}

const text = 'Hi my name is John'

console.log(reverse(text))