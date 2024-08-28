// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

function computeSumOfIndices(arr1, arr2) {
    const arrLen = arr1.length > arr2.length ? arr1.length : arr2.length;
    const result = [];
  
    for (let i = 0; i < arrLen ; i++) {
        const sum = (arr1[i] || 0) + (arr2[i] || 0);
        result.push(sum);
    }
    console.log(result);
  }
  
  const arr1 = [1, 0, 2, 3, 4];
  const arr2 = [3, 5, 6, 7, 8, 13]; 
  
  computeSumOfIndices(arr1, arr2);

