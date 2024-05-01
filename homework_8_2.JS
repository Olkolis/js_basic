const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements(array1, array2){
    const array = array1.concat(array2);

    const makeUniq = (arr) => {
        return arr.filter((el, id) => arr.indexOf(el) === id);
      }
    return makeUniq(array);
    // for (let i = 0; i < array1.length; i++){
    //     if (array2.includes(array1[i])){
    //         array.push(array1[i]);
    //     }
    // }
    // return array;
}


console.log(findCommonElements(array1, array2)); // [3, 4, 5]