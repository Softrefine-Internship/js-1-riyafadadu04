// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

    function insertDashesBetweenEvens(inputNumber) {
        const inputString = inputNumber.toString();
        let result = '';
    
        for (let i = 0; i < inputString.length; i++) {
            const currentDigit = inputString[i];
            const nextDigit = inputString[i + 1];
    
            result += currentDigit;
    
            if (currentDigit % 2 === 0 && nextDigit % 2 === 0) {
                result += '-';
            }
        }
    
        return result;
    }
    
    const inputData = '025468';
    const outputData = insertDashesBetweenEvens(inputData);
    console.log(outputData);