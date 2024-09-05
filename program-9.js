// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

function findMostFrequentItem(arr) {
    const frequencyCount = {};

    for (const item of arr) {
        if (frequencyCount[item]) {
            frequencyCount[item]++;
        } else {
            frequencyCount[item] = 1;
        }
    }

    let maxFrequency = 0;
    let mostFrequentItem = [];

    for (const item in frequencyCount) {
        if (frequencyCount[item] > maxFrequency) {
            maxFrequency = frequencyCount[item];
            mostFrequentItem = [item];
        } else if (frequencyCount[item] == maxFrequency) {
            mostFrequentItem.push(item);
        }
    }

    for (const item of mostFrequentItem) {
        console.log(`${item}, ${frequencyCount[item]} times`);
    }

}

const sampleInput1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const sampleInput2 = [1,2,2,3,4,4];

findMostFrequentItem(sampleInput1); 
findMostFrequentItem(sampleInput2); 


