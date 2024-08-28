// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

function computeArrayDifference(arr1, arr2) {
    const difference = [];

    for (const item1 of arr1) {
        let arr2Item = false;
        for (const item2 of arr2) {
            if (item1 === item2) {
                arr2Item = true;
                break;
            }
        }
        if (!arr2Item) {
            difference.push(item1);
        }
    }

    for (const item2 of arr2) {
        let arr1Item = false;
        for (const item1 of arr1) {
            if (item2 === item1) {
                arr1Item = true;
                break;
            }
        }
        if (!arr1Item) {
            difference.push(item2);
        }
    }

    return difference;
}

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
const differenceResult = computeArrayDifference(arr1, arr2);

console.log(differenceResult); 

