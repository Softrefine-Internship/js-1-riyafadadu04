// Write a JavaScript program to clone an array.

const mainArray = [1,2,3,4,5];
const cloneArray = [];

for (let i = 0; i < mainArray.length; i++){
    cloneArray[i] = mainArray[i];
}
console.log(cloneArray); 