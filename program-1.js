// Write a JavaScript program to clone an array.

function cloneArray(arr) {
  const cloneArr = [];
  for (let i = 0; i < arr.length; i++) {
    cloneArr.push(arr[i]);
  }
  return cloneArr;
}

const input1 = [1, 2, 3, 4, 5];
const input2 = [1, 2, [3, 4], { id: 1, id: 2 }];
console.log(cloneArray(input1));
console.log(cloneArray(input2));
