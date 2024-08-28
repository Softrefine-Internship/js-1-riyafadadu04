// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

const inputArray = [1, 2, [3, 4], [5, [6, 7]]];
const flatArray = inputArray.flat(Infinity);
console.log(flatArray);