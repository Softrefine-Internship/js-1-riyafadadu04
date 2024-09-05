// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

function removeDuplicateObjects(arr) {
  const uniqueObjects = [];
  const seenObjects = new Set();
  for (const obj of arr) {
    const objString = JSON.stringify(obj);
    if (!seenObjects.has(objString)) {
      seenObjects.add(objString);
      uniqueObjects.push(obj);
    }
  }
  return uniqueObjects;
}

const inputArray = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
  { title: 1, author: [1, 2, 3] },
  { title: 1, author: [1, 2, 3] },
  { title: 2, author: { id: 1, id: 2 } },
  { title: 2, author: { id: 1, id: 2 } },
];

const outputArray = removeDuplicateObjects(inputArray);
console.log(outputArray);
