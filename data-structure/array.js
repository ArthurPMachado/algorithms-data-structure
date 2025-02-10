const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

//push
strings.push('e'); //O(1)

//pop
strings.pop();
strings.pop(); //O(1)

/** unshift
 * This operation is O(n) because, when you insert a new element
 * at the beginning of an array, every element will have their index 
 * changed, so the iteration increases equal to the array length
 */
strings.unshift('x'); //O(n)

/** splice
 * Similar to unshift, this operation is O(n), because, even when adding
 * an element at the middle, the result will be O(n/2), but for Big O the 
 * constants are removed, so it ends with O(n)
 */
strings.splice(2, 0, 'text'); //O(n)

console.log(strings);