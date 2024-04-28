const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);

function uniqueValues(array1, array2){
    let joinArray = array1.concat(array2);
    let seen = {};
    let out = [];
    let j = 0;
    for(let i = 0; i < joinArray.length; i++) {
        let item = joinArray[i];
        if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
        }
    }
    return out;
}
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]