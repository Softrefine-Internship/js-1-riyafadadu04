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
  
    for (const obj of arr) {
        let isDuplicate = false;
        for (const existObj of uniqueObjects) {
            if (obj.title === existObj.title && obj.author === existObj.author) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
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
  ];
  
  const outputArray = removeDuplicateObjects(inputArray);
  console.log(outputArray);
  
