// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];


function flattenArray(arr) {
  const flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray.push(...flattenArray(arr[i]));
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
}

const inputArray = [1, 2, [3, 4], [5, [6, 7]]];

console.log(flattenArray(inputArray));
