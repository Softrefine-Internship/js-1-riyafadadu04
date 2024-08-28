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
    let mostFrequentItem;

    for (const item in frequencyCount) {
        if (frequencyCount[item] > maxFrequency) {
            maxFrequency = frequencyCount[item];
            mostFrequentItem = item;
        }
    }

    console.log(`${mostFrequentItem}, "${maxFrequency} times"`);
}

const sampleInput = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
findMostFrequentItem(sampleInput); 

