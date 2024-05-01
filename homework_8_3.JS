const numbers = [1, 2, 3, 4, 5];

function analyzeArray(numbers){
    const newArr= {
        sum: numbers.reduce((sum, elem) => sum + elem, 0),
        average: numbers.reduce((sum, elem) => sum + elem, 0)/numbers.length,
        min: numbers.reduce((a, b) => a < b ? a : b),
        max: numbers.reduce((a, b) => a > b ? a : b)
    };
    return newArr;
}

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }