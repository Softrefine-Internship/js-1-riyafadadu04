// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

function mergeAndRemoveDuplicates(arr1, arr2) {
    const mergedArray = [];
    for (const item of arr1) {
        if (!mergedArray.includes(item)) {
            mergedArray.push(item);
        }
    }
    for (const item of arr2) {
        if (!mergedArray.includes(item)) {
            mergedArray.push(item);
        }
    }
    return mergedArray;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];
const mergedResult = mergeAndRemoveDuplicates(arr1, arr2);

console.log(mergedResult);

