const arrNumber = [2, 3, 12, 5, 34, 2, 147];

const newArray = arrNumber.filter(elem => {
    for (let i = 2; elem > i; i++) {
        if (elem % i == 0) {
            return false;
        }
    }
    return elem > 1;
})

console.log(newArray); 