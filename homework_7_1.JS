const originalArray = [1, 2, undefined, 3, 4, 5, '78', NaN];
const reversedArray = reverseArray(originalArray);

function reverseArray(){
    let newArray = [],
        o = originalArray,
        index;

    for (i = o.length; i > 0; i--){
        index = o.length - i;  
        newArray[index] = o[i - 1];
        }
    return newArray;   
}
console.log(reversedArray); // [NaN, '78', 5, 4, 3, 2, 1]