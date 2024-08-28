// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

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

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
const mergedResult = mergeAndRemoveDuplicates(arr1, arr2);
sortArray(mergedResult);

console.log(mergedResult);